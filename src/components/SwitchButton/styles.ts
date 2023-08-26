import styled from 'styled-components'
import { colors } from 'styles'

export const SwitchContainer = styled.label`
  display: flex;
  padding-top: 4px;
  cursor: pointer;
`

export const SwitchBody = styled.div`
  position: relative;
  width: 52px;
  height: 24px;
  background: ${colors.switchButtonPrimary};
  border-radius: 50px;
  padding: 4px;
  transition: 0.3s ease all;

  &:before {
    content: '';
    transition: 0.3s ease all;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    background: ${colors.switchButtonSecondary};
    transform: translate(0, -50%);
  }
`

export const SwitchCheck = styled.input`
  display: none;

  &:checked + ${SwitchBody} {
    background: ${colors.switchButtonSecondary};

    &:before {
      transform: translate(27px, -50%);
      background: ${colors.switchButtonPrimary};
    }
  }
`
