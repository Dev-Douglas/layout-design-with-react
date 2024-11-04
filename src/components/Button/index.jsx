import PropTypes from 'prop-types'

import * as S from './style'

function Button({ type, value }) {
  return <S.Button type={type}>{value}</S.Button>
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Button
