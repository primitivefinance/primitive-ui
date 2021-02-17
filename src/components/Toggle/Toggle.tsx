import React, { Fragment } from 'react'
import styled from 'styled-components'

import Spacer from '../Spacer'
import { grey, white, spacing } from '../../theme'

interface ToggleProps {
  full?: boolean
}

const Toggle: React.FC<ToggleProps> = ({ children, full }) => {
  const l = React.Children.toArray(children).length

  return (
    <StyledSwtich full={full}>
      {React.Children.map(children, (child, i) => (
        <Fragment>
          {child}
          {i < l - 1 && <Spacer size="sm" />}
        </Fragment>
      ))}
    </StyledSwtich>
  )
}

interface SwitchProps {
  full?: boolean
}

const StyledSwtich = styled.div<SwitchProps>`
  align-items: center;
  background: ${grey[900]};
  border-radius: 4px;
  display: flex;
  padding: ${props => (props.full ? null : spacing[2])}px;
  width: ${props => (props.full ? '100%' : null)};
`

export default Toggle
