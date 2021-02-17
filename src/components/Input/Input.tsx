import React from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Spacer from '../Spacer'
import Label from '../Label'

import { white, black, grey, spacing } from '../../theme'

export interface InputProps {
  name?: string
  endAdornment?: React.ReactNode
  onChange: (input: string) => void
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  startAdornment?: React.ReactNode
  value?: string
  valid?: boolean
  string?: boolean
}

export interface ValidatedProps {
  valid: boolean
}

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}
const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

const Input: React.FC<InputProps> = ({
  name,
  endAdornment,
  onChange,
  placeholder,
  size,
  startAdornment,
  value,
  valid,
  string = false,
}) => {
  let height = 56
  if (size === 'sm') {
    height = 44
  } else if (size === 'lg') {
    height = 72
  }
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onChange(nextUserInput)
    }
  }
  return (
    <Box row alignItems="center" justifyContent="space-between">
      <StyledInputWrapper height={height}>
        {!!startAdornment && (
          <>
            {startAdornment}
            <Spacer size="sm" />
          </>
        )}
        <StyledInput
          name={name}
          height={height}
          onChange={event => {
            if (!string) {
              enforcer(event.target.value.replace(/,/g, '.'))
            }
          }}
          autoComplete="off"
          autoCorrect="off"
          inputMode="decimal"
          title="Token Amount"
          pattern="^[0-9]*[.,]?[0-9]*$"
          minLength={1}
          maxLength={79}
          spellCheck="false"
          placeholder={placeholder}
          value={value}
        />
        {/* {!!endAdornment && (
          <StyledAd>
            <Spacer size="sm" />
            {endAdornment}
            <Spacer size="sm" />
          </StyledAd>
        )} */}
      </StyledInputWrapper>
    </Box>
  )
}

interface StyledInputProps {
  height: number
}

const StyledInputWrapper = styled.div<StyledInputProps>`
  align-items: center;
  background: ${grey[800]};
  border-radius: 4px;
  display: flex;
  height: ${props => props.height};
  width: 100%;
  &:hover {
    background: ${grey[700]};
  }
`

const StyledInput = styled.input<StyledInputProps>`
  border-radius: 4px;
  background: transparent;
  border: 1px solid ${grey[600]};
  color: ${white};
  font-size: 18px;
  flex: 1;
  height: ${props => props.height}px;
  margin: 0;
  padding: 0;
  outline: none;
  text-indent: ${spacing[3]}px;
  &:focus {
    background: ${grey[700]};
    border: 1px solid ${white} !important;
    transition: border-color 0.25s ease-in-out;
  }
  -webkit-appearance: none;
  -moz-appearance: textfield !important;
`

interface StyledIconProps {
  variant: string
}

const StyledIcon = styled.div<StyledIconProps>`
  align-items: center;
  background: ${props => (props.variant === 'default' ? white : 'transparent')};
  border: 2px solid ${grey[800]};
  border-radius: 36px;
  box-sizing: border-box;
  color: ${props => (props.variant === 'default' ? black : white)};
  display: flex;
  height: 36px;
  justify-content: center;
  letter-spacing: 0.5px;
  margin: 0;
  min-width: 36px;
  outline: none;
  padding-left: 0px;
  padding-right: 0px;
`

export default Input
