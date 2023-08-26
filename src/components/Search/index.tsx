import { ChangeEvent } from 'react'

import Image from 'next/image'
import searchIcon from '../../../public/assets/images/SearchIcon.svg'

import * as S from './styles'

type PropsSearch = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
  value: string
}

const Search = ({ onChange, onClick, value }: PropsSearch) => {
  return (
    <div className="container">
      <S.SearchContainer>
        <S.SearchInput onChange={onChange} value={value} />
        <S.SearchButton onClick={onClick}>
          <Image src={searchIcon} alt="Search Icon" />
        </S.SearchButton>
      </S.SearchContainer>
    </div>
  )
}

export default Search
