import React, { useState, useCallback } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Switch from '../components/Switch'
import Input from '../components/Input'
import Spacer from '../components/Spacer'
import styled, { keyframes } from 'styled-components'
export default {
  title: 'Input',
  component: Box,
}

export const InputStory = () => {
  const [input, setInput] = useState('')
  const handleTypeInput = useCallback(
    (value: string) => {
      setInput(value)
    },
    [setInput]
  )
  return (
    <Container>
      <Box column>
        <Input
          name="Input Test"
          placeholder="0.00"
          onChange={handleTypeInput}
          value={input}
        />
        <Spacer />
        <Button>Button</Button>
        <Spacer />
        <Button variant="secondary">Secondary</Button>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  background: black;
  padding: 10rem;
`
InputStory.story = {
  name: 'Default',
}
