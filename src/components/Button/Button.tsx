import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Loader from '../Loader'
import Spacer from '../Spacer'
import { white, grey, black } from '../../theme'

export interface ButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  full?: boolean
  isLoading?: boolean
  href?: string
  onClick?: () => void
  leftIcon?: string
  round?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  text?: string
  to?: boolean // use if Button is wrapped in Next.js Link component
  variant?:
    | 'default'
    | 'secondary'
    | 'tertiary'
    | 'transparent'
    | 'outlined'
    | 'selected-outlined'
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  full,
  isLoading,
  href,
  onClick,
  round,
  size,
  text,
  to,
  variant,
}) => {
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'xs':
      buttonPadding = 8
      fontSize = 10
      break
    case 'sm':
      buttonPadding = 16
      fontSize = 14
      break
    case 'lg':
      buttonPadding = 24
      fontSize = 18
      break
    case 'md':
    default:
      buttonPadding = 24
      fontSize = 16
  }

  let background: string
  let border = ''
  let buttonColor: string
  let hoverBackgroundColor = 'transparent'
  let hoverBorderColor = white
  let hoverColor = white
  switch (variant) {
    case 'secondary':
      background = 'transparent'
      border = `1px solid ${grey[600]}`
      buttonColor = white
      break
    case 'tertiary':
      background = 'transparent'
      buttonColor = grey[400]
      hoverBackgroundColor = grey[600]
      break
    case 'transparent':
      background = 'transparent'
      border = `transparent`
      buttonColor = grey[400]
      hoverBackgroundColor = 'transparent'
      break
    case 'outlined':
      background = 'transparent'
      border = `1px solid ${grey[600]}`
      buttonColor = white
      hoverBackgroundColor = white
      hoverBorderColor = 'transparent'
      hoverColor = black
      break
    case 'selected-outlined':
      background = white
      border = `1px solid ${grey[600]}`
      buttonColor = black
      hoverBackgroundColor = white
      hoverBorderColor = 'transparent'
      hoverColor = black
      break
    case 'default':
    default:
      background = white
      buttonColor = grey[800]
      border = `2px solid ${grey[800]}`
      hoverBackgroundColor = black
      hoverBorderColor = white
      hoverColor = white
  }

  const ButtonChild = useMemo(() => {
    if (href) {
      return (
        <StyledExternalLink href={href} target="__blank">
          {text}
        </StyledExternalLink>
      )
    }
    if (isLoading) {
      if (variant === 'default') {
        return (
          <>
            <Loader dark />
            <Spacer size="sm" />
          </>
        )
      }
      return (
        <>
          <Loader />
          <Spacer size="sm" />
        </>
      )
    } else {
      return text
    }
  }, [href, text, to, isLoading])

  if (to) {
    return (
      <StyledButton
        background={background}
        border={border}
        color={buttonColor}
        disabled={disabled}
        fontSize={fontSize}
        full={full}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverBorderColor={hoverBorderColor}
        hoverColor={hoverColor}
        onClick={onClick}
        padding={buttonPadding}
        round={round}
        size={44}
      >
        {text}
      </StyledButton>
    )
  }
  return (
    <StyledButton
      background={background}
      border={border}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      full={full}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorderColor={hoverBorderColor}
      hoverColor={hoverColor}
      onClick={onClick}
      padding={buttonPadding}
      round={round}
      size={44}
    >
      {ButtonChild}
      {children}
    </StyledButton>
  )
}

interface StyledButtonProps {
  background: string
  border: string
  color: string
  disabled?: boolean
  fontSize: number
  full?: boolean
  padding: number
  round?: boolean
  size: number
  hoverBackgroundColor: string
  hoverBorderColor: string
  hoverColor: string
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background: ${props => props.background};
  border: ${props => (props.border ? props.border : '0')};
  border-radius: ${props => (props.round ? 44 : 4)}px;
  box-sizing: border-box;
  color: ${props => props.color};
  cursor: pointer;
  display: flex;
  font-family: Nunito Sans;
  font-size: ${props => props.fontSize}px;
  font-weight: 600;
  height: ${props => props.size}px;
  justify-content: center;
  letter-spacing: 0.5px;
  margin: 0;
  min-width: ${props => props.size}px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  outline: none;
  padding-left: ${props => (props.round ? 0 : props.padding)}px;
  padding-right: ${props => (props.round ? 0 : props.padding)}px;
  pointer-events: ${props => (!props.disabled ? undefined : 'none')};
  white-space: nowrap;
  width: ${props => (props.full ? '100%' : undefined)};
  &:hover {
    background: ${props => props.hoverBackgroundColor};
    border-color: ${props => props.hoverBorderColor};
    color: ${props => props.hoverColor};
  }
`
const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  margin: 0 24px;
  padding: 0 24px;
  text-decoration: none;
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  margin: 0 -24px;
  padding: 0 24px;
  text-decoration: none;
`
const StyledText = styled.p`
  text-decoration: none;
`
export default Button
