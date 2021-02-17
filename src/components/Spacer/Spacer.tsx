import React from 'react'
import styled from 'styled-components'

export interface SpacerProps {
  size?: 'sm' | 'md' | 'lg'
}

const Spacer: React.FC<SpacerProps> = ({ size = 'md' }) => {
  let s: number
  switch (size) {
    case 'lg':
      s = 48
      break
    case 'sm':
      s = 8
      break
    case 'md':
    default:
      s = 24
  }

  return <StyledSpacer size={s} />
}

interface StyledSpacerProps {
  size: number
}

const StyledSpacer = styled.div<StyledSpacerProps>`
  height: ${props => props.size}px;
  min-height: ${props => props.size}px;
  min-width: ${props => props.size}px;
  width: ${props => props.size}px;
`

export default Spacer
