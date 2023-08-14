import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageCont = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`

const InfoCont = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterCont = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilerSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddCont = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const AmountCont = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #9de3f5;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageCont>
                <Image src='https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=495&q=80' />
            </ImageCont>
            <InfoCont>
                <Title>De necessitatibus</Title>
                <Desc>ipsam doloremque. Sequi, unde ex quidem cum ipsa necessitatibus maiores ipsam doloremque. Sequi, unde ex quidem cum ipsa necessitatibus maiores ipsam doloremque. Sequi, unde ex quidem cum ipsa necessitatibus maiores</Desc>
                <Price>$ 20</Price>
                <FilterCont>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilerSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>xL</FilterSizeOption>
                            <FilterSizeOption>xxL</FilterSizeOption>
                        </FilerSize>
                    </Filter>
                </FilterCont>
                <AddCont>
                    <AmountCont>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountCont>
                    <Button>ADD TO CART</Button>
                </AddCont>
            </InfoCont>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product