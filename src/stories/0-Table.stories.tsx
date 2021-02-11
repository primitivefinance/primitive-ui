import React from 'react'
import Table from '../components/Table'
import styled, { keyframes } from 'styled-components'

export default {
  title: 'Table',
  component: Table,
}

const mockRows = [
  {
    starred: false,
    symbol: 'UNI',
  },
  {
    starred: true,
    symbol: 'SUSHI',
  },
]
const mockColumns = [
  {
    width: 100,
    isBoolean: true,
    headerName: 'Starred',
    description: 'Click a column to favorite',
    sortable: true,
  },
  {
    width: 200,
    isBoolean: false,
    headerName: 'Asset',
    sortable: true,
  },
]

export const ToStorybook = () => {
  return (
    <Container>
      <Table rows={mockRows} columns={mockColumns} />
    </Container>
  )
}

const Container = styled.div`
  height: 400px;
  width: 400px;
`
ToStorybook.story = {
  name: 'Standard',
}
