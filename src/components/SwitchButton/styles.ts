import styled from 'styled-components'

export const SwitchContainer = styled.label`
  display: flex;
  padding-top: 4px;
  cursor: pointer;
`

export const SwitchBody = styled.div`
  position: relative;
  width: 52px;
  height: 24px;
  background: #747474;
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
    background: #fff;
    transform: translate(0, -50%);
  }
`

export const SwitchCheck = styled.input`
  display: none;

  &:checked + ${SwitchBody} {
    background: #fff;

    &:before {
      transform: translate(24px, -50%);
      background: #747474;
    }
  }
`
