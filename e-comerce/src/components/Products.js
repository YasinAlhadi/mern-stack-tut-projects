import React from 'react'
import { styled } from 'styled-components'
import { popuProducts }  from '../data'
import {Product} from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

export const Products = () => {
  return (
    <Container>
        {popuProducts.map(prod => (
            <Product prod = {prod} key={prod.id} />
        ))}
    </Container>
  )
}

// export default Products