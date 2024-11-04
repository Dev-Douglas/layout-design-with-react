import { styled } from 'styled-components'
import theme from '../../style/Theme'

export const InputGroup = styled.div`
  position: relative;

  width: 100%;
  height: 3.5rem;
  min-height: 3.5rem;

  display: flex;

  border-radius: ${theme.radius.small};
  background-color: white;
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 1rem;
  line-height: 1.25;
  user-select: none;

  height: 100%;

  padding: 1rem 0.75rem;

  transition: all 0.1s ease-in-out;

  color: #000;

  &:hover {
    cursor: text;
  }
`

export const Input = styled.input`
  font-size: 1rem;
  line-height: 1.25;

  width: 100%;
  padding: 1rem 0.75rem;

  border: none;
  outline: none;
  background-color: transparent;

  &:focus,
  &:not(:placeholder-shown) {
    padding: 1.625rem 0.75rem 0.75rem;

    + ${Label} {
      font-weight: 500;
      transform: scale(0.8) translateY(-0.85rem) translateX(-0.4rem);
      color: rgba(33, 37, 41, 0.65);
    }
  }
`
