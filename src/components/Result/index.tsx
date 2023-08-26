import { useId } from 'react'
import * as S from './styles'

type PropsResult = {
  data: PropsApi[]
}

const Result = ({ data }: PropsResult) => {
  const id = useId()

  return (
    <div className="container">
      <S.SearchContainer>
        {data ? (
          data.map((result, index) => (
            <div key={`${id} - ${index}`}>
              <S.TitleResult>{result.word}</S.TitleResult>
              {result.meanings &&
                result.meanings.map((mean, index) => (
                  <div key={`${id} - ${index}`}>
                    <S.ClassificationContainer>
                      <p>{mean.partOfSpeech}</p>
                      <span />
                    </S.ClassificationContainer>
                    <S.SubtitleResult>Meanings</S.SubtitleResult>
                    <S.MeaningContainer>
                      {mean.definitions.map((def) => (
                        <div key={def.definition}>
                          <li>
                            <span>{def.definition}</span>
                          </li>
                        </div>
                      ))}
                    </S.MeaningContainer>
                    {mean.synonyms.length !== 0 && (
                      <S.SynonymsContainer>
                        <S.SubtitleResult>Synonyms</S.SubtitleResult>
                        <S.SynonymsList>
                          {mean.synonyms.map((syn) => (
                            <li key={syn}>{syn}</li>
                          ))}
                        </S.SynonymsList>
                      </S.SynonymsContainer>
                    )}
                  </div>
                ))}
            </div>
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </S.SearchContainer>
    </div>
  )
}

export default Result
