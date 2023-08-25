import Image from 'next/image'
import searchIcon from '../../../public/assets/images/SearchIcon.svg'

import * as S from './styles'

const Search = () => {
  return (
    <div className="container">
      <S.SearchContainer>
        <S.SearchInput />
        <S.SearchButton>
          <Image src={searchIcon} alt="Search Icon" />
        </S.SearchButton>
      </S.SearchContainer>
    </div>
  )
}

export default Search
