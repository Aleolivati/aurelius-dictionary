import { ChangeEvent } from 'react'
import * as S from './styles'

type SwitchProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isCheck: boolean
}

const SwitchButton = ({ onChange, isCheck }: SwitchProps) => {
  return (
    <S.SwitchContainer>
      <S.SwitchCheck type="checkbox" checked={isCheck} onChange={onChange} />
      <S.SwitchBody />
    </S.SwitchContainer>
  )
}

export default SwitchButton
