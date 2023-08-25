import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 632px;
  width: 100%;
  height: 100%;
  margin: 46px auto 0;
`

export const TitleResult = styled.h2`
  color: #000;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 46px;
`

export const ClassificationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  p {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    margin-right: 16px;
    padding: 2px 0;
  }

  span {
    width: 100%;
    height: 1px;
    background-color: #999;
  }
`

export const SubtitleResult = styled.h3`
  color: rgba(153, 153, 153, 0.6);
  font-size: 16px;
  font-weight: 500;
`

export const MeaningContainer = styled.ul`
  margin: 26px 0 22px 2px;
  list-style-position: inside;

  li {
    margin-bottom: 20px;
    font-size: 14px;
    color: #a745ec;

    span {
      color: #000;
      font-size: 14px;
    }
  }
`

export const SynonymsContainer = styled.div`
  display: flex;
`

export const SynonymsList = styled.ul`
  display: flex;
  margin-left: 20px;
  gap: 16px;
  list-style: none;
  color: #a745ec;
  font-size: 14px;
  font-weight: 500;
`
