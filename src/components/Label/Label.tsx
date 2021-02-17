import React from 'react'
import styled from 'styled-components'

import { grey } from '../../theme'

interface LabelProps {
  text?: string
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <StyledLabel>{text}</StyledLabel>
)

const StyledLabel = styled.div`
  color: ${grey[400]};
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
`

export default Label
