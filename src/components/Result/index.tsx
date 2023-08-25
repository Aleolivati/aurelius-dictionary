import * as S from './styles'

const Result = () => {
  return (
    <div className="container">
      <S.SearchContainer>
        <S.TitleResult>PALAVRA PESQUISADA</S.TitleResult>
        <S.ClassificationContainer>
          <p>Classification</p>
          <span />
        </S.ClassificationContainer>
        <S.SubtitleResult>Meanings</S.SubtitleResult>
        <S.MeaningContainer>
          <li>
            <span>Meaning 1</span>
          </li>
          <li>
            <span>Meaning 2</span>
          </li>
        </S.MeaningContainer>
        <S.SynonymsContainer>
          <S.SubtitleResult>Synonyms</S.SubtitleResult>
          <S.SynonymsList>
            <li>Syn 1</li>
            <li>Syn 2</li>
          </S.SynonymsList>
        </S.SynonymsContainer>
      </S.SearchContainer>
    </div>
  )
}

export default Result
