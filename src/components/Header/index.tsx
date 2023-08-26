import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from 'store'
import { themeChange } from 'store/reducers/theme'
import Image from 'next/image'

import SwitchButton from 'components/SwitchButton'

import logoBook from '../../../public/assets/images/Frame.png'
import sun from '../../../public/assets/images/sun.svg'
import moon from '../../../public/assets/images/moon.svg'

import * as S from './styles'

type PropsLogo = {
  onClick: () => void
}

const Header = ({ onClick }: PropsLogo) => {
  const themeState = useSelector(
    (state: RootReducer) => state.theme.usingDarkTheme
  )
  const dispatch = useDispatch()

  const changeTheTheme = () => {
    if (themeState) {
      dispatch(themeChange(false))
    } else {
      dispatch(themeChange(true))
    }
  }

  return (
    <div className="container">
      <S.HeaderContainer>
        <Image
          className="home"
          src={logoBook}
          width={42}
          height={42}
          alt="Logo of Aurelius Dictionary"
          onClick={onClick}
        />
        <S.ThemeContainer>
          <SwitchButton
            onChange={() => changeTheTheme()}
            isCheck={themeState}
          />
          <Image
            src={themeState ? sun : moon}
            width={30}
            height={30}
            alt="lua/sol"
          />
        </S.ThemeContainer>
      </S.HeaderContainer>
    </div>
  )
}

export default Header
