import React from 'react'
import styled from 'styled-components'
import Toggle from '../Toggle'
import ToggleButton from '../ToggleButton'

interface SwitchProps {
  active: boolean
  onClick: () => void
  primaryText?: string
  secondaryText?: string
  variant?: 'primary' | 'secondary' | 'transparent' | 'outlined'
}

const Switch: React.FC<SwitchProps> = ({
  active,
  onClick,
  primaryText,
  secondaryText,
  variant,
}) => {
  return (
    <StyledToggleContainer>
      <StyledFilterBarInner>
        <Toggle full>
          <ToggleButton
            active={active}
            onClick={onClick}
            text={primaryText ? primaryText : 'Buy'}
          />
          <ToggleButton
            active={!active}
            onClick={onClick}
            text={secondaryText ? secondaryText : 'Sell'}
          />
        </Toggle>
      </StyledFilterBarInner>
    </StyledToggleContainer>
  )
}

const StyledToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const StyledFilterBarInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  height: 72px;
  width: 100%;
`

export default Switch
