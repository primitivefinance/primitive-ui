import React from 'react'
import styled, { keyframes } from 'styled-components'


export interface Column {
  width: Number
  isBoolean?: Boolean
  headerName?: String
  description?: String
  sortable?: Boolean
}

export interface TableProps {
  rows: Array<any>
  columns: Array<Column>
}

const Table: React.FC<TableProps> = ({rows, columns}) => {
  return (
    <StyledContainer>
      <Header>{columns.map((col, i) => {
        return (
<HeaderCell width={col.width}>{col.headerName}</HeaderCell>
        )

      })}</Header>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: inital;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: '#000000';
  color: white;
  width: 100%;
  z-index: 200;
`
const Header = styled.div`
  width: 100%;
  flex-direction: row;
`

const HeaderCell = styled.div`
  flex-direction: row;
  width: ${props => props.width}px;
`
export default Table