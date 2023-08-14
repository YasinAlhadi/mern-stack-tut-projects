import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300px;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div``

const Toptest = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Button = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDet = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProdName = styled.span``

const ProdID = styled.span``

const Prodcolor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`

const ProdSize = styled.span``

const PriceDet = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProdAmouCont = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 2px;
`

const ProdAmount = styled.span`
    font-size: 24px;
    margin: 5px;
`

const ProdPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summery = styled.span`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummeryTitle = styled.h1`
    font-weight: 200;
`

const SummeryItem = styled.span`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`

const SummeryItemText = styled.span``

const SummeryPrice = styled.span``

const SummeryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <Toptest>Shopping Bag(0)</Toptest>
                    <Toptest>Your Wishlist</Toptest>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Button>
                <Info>
                    <Product>
                        <ProductDet>
                            <Image src='https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'/>
                            <Details>
                                <ProdName><b>Product</b> Normal jens jack</ProdName>
                                <ProdID><b>ID: </b> 73830477</ProdID>
                                <Prodcolor color='gray'> </Prodcolor>
                                <ProdSize><b>Size: </b>S</ProdSize>
                            </Details>
                        </ProductDet>
                        <PriceDet>
                            <ProdAmouCont>
                                <AddIcon />
                                <ProdAmount>1</ProdAmount>
                                <RemoveIcon />
                            </ProdAmouCont>
                            <ProdPrice>$ 30</ProdPrice>
                        </PriceDet>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDet>
                            <Image src='https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'/>
                            <Details>
                                <ProdName><b>Product</b> Normal jens jack</ProdName>
                                <ProdID><b>ID: </b> 73830477</ProdID>
                                <Prodcolor color='gray'> </Prodcolor>
                                <ProdSize><b>Size: </b>S</ProdSize>
                            </Details>
                        </ProductDet>
                        <PriceDet>
                            <ProdAmouCont>
                                <AddIcon />
                                <ProdAmount>1</ProdAmount>
                                <RemoveIcon />
                            </ProdAmouCont>
                            <ProdPrice>$ 30</ProdPrice>
                        </PriceDet>
                    </Product>
                </Info>
                <Summery>
                    <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                    <SummeryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryPrice>$ 100</SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryPrice>$ 5.50</SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Shipping Discount</SummeryItemText>
                        <SummeryPrice>$ 5</SummeryPrice>
                    </SummeryItem>
                    <SummeryItem type='total'>
                        <SummeryItemText>Total</SummeryItemText>
                        <SummeryPrice>$ 110.50</SummeryPrice>
                    </SummeryItem>
                    <SummeryButton>CHECKOUT NOW</SummeryButton>
                </Summery>
            </Button>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart