import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

import logoBook from '../../../public/assets/images/Frame.png'
import sun from '../../../public/assets/images/sun.svg'
import moon from '../../../public/assets/images/moon.svg'

import * as S from './styles'
import SwitchButton from 'components/SwitchButton'

const Header = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked)

  return (
    <div className="container">
      <S.HeaderContainer>
        <Image
          src={logoBook}
          width={42}
          height={42}
          alt="Logo of Aurelius Dictionary"
        />
        <S.ThemeContainer>
          <SwitchButton
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setChecked(e.target.checked)
            }
            isCheck={checked}
          />
          <Image
            src={checked ? sun : moon}
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
