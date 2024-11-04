import styled from 'styled-components'

import theme from '../../style/Theme'

export const Section = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  background: #333;
`

export const Content = styled.div`
  max-width: 680px;
`

export const Title = styled.h1`
  font-size: ${theme.font.fontSize.biggest};
  color: #fff;
`

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 2.25rem;
  color: #fff;
`

export const Newsletter = styled.div`
  display: flex;
  gap: 1.5rem;
`
