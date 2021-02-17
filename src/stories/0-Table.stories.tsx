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
    spot: '903',
  },
  {
    starred: true,
    symbol: 'SUSHI',
    spot: '032',
  },
]
const mockColumns = [
  {
    width: 10,
    isBoolean: true,
    headerName: 'Starred',
    description: 'Click a column to favorite',
    sortable: true,
  },
  {
    width: 20,
    isBoolean: false,
    headerName: 'Asset',
    sortable: true,
  },
  {
    width: 20,
    isBoolean: false,
    headerName: 'Spot',
    sortable: true,
  },
]

export const TableStory = () => {
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
TableStory.story = {
  name: 'Standard',
}
