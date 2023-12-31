import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free shipping on order over $50</Container>
  )
}

export default Announcement