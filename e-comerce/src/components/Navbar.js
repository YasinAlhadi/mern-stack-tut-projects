import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// const Container = styled.div`
//     border: 1px solid;
//     height: 60px;
// `
const Wrapper = styled.div`
    height: 60px;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Languge = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
`

const Navbar = () => {
  return (
    // <Container>
        <Wrapper>
            <Left>
                <Languge>EN</Languge>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"grey", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>YAsStore</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    // </Container>
  )
}

export default Navbar