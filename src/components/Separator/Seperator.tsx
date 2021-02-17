import React from 'react'
import styled from 'styled-components'
import { grey } from '../../theme'

const Separator: React.FC = () => {
  return <StyledSeparator />
}

interface StyledSeparatorProps {
  size: number
}

const StyledSeparator = styled.div`
  border: 1px solid ${grey[600]};
  width: 100%;
`

export default Separator
