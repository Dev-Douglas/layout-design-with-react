import PropTypes from 'prop-types'

import * as S from './style'

function Input({ type, name, id, label }) {
  return (
    <S.InputGroup>
      <S.Input type={type} name={name} id={id} placeholder=' ' />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.InputGroup>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Input
