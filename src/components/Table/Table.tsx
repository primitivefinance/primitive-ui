import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

export interface Column {
  width: number
  isBoolean?: boolean
  headerName?: string
  description?: string
  sortable?: boolean
}

export interface TableProps {
  rows: Array<any>
  columns: Array<Column>
}

const Table: React.FC<TableProps> = ({ rows, columns }) => {
  const [sortIndex, setSort] = useState(null)
  return (
    <StyledContainer>
      <Header>
        {columns.map((col, i) => {
          return (
            <HeaderCell key={i} width={col.width} sortable={col.sortable}>
              {col.headerName}
            </HeaderCell>
          )
        })}
      </Header>
      <Body>
        {rows.map((row, i) => {
          return (
            <Row key={i}>
              {Object.keys(row).map((row, i) => {
                return <RowCell></RowCell>
              })}
            </Row>
          )
        })}
      </Body>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: inital;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: black;
  color: white;
  width: 100%;
  z-index: 200;
`

const Body = styled.div``

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`
interface HeaderProps {
  width: number
  sortable?: boolean
}
const HeaderCell = styled.div<HeaderProps>`
  flex-direction: row;
  cursor: ${props => (props.sortable ? 'pointer' : '')};
  width: ${props => props.width}%;
`
const Row = styled.div``
interface RowCellProps {
  width: number
}

const RowCell = styled.div<RowCellProps>`
  width: ${props => props.width}%;
`

export default Table
