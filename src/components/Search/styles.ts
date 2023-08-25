import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 632px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  margin: 60px auto 0;
`
export const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  max-width: 572px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  padding: 20px;
  border-radius: 8px 0 0 8px;
  background-color: #f4f4f4;
  border: none;
  outline: none;
`

export const SearchButton = styled.button`
  width: 100%;
  height: 60px;
  max-width: 60px;
  border-radius: 0 8px 8px 0;
  background-color: #f4f4f4;
  border: none;
  outline: none;
  cursor: pointer;
`
