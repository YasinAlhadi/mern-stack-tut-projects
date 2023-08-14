import React from 'react'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CallIcon from '@mui/icons-material/Call';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p``

const SocialCont = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Titlle = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContctItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 180px;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>YAsStore</Logo>
            <Desc>ipsam doloremque. Sequi, unde ex quidem cum ipsa necessitatibus maiores, ipsam doloremque. Sequi, unde ex quidem cum ipsa necessitatibus maiores</Desc>
            <SocialCont>
                <SocialIcon>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon/>
                </SocialIcon>
            </SocialCont>
        </Left>
        <Center>
            <Titlle>Useful Links</Titlle>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Oreder Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>About</ListItem>
            </List>
        </Center>
        <Right>
            <Titlle>Contact</Titlle>
            <ContctItem><BusinessIcon style={{marginRight:"10px"}} />653 Mabialh, Muscat-Oman</ContctItem>
            <ContctItem><CallIcon style={{marginRight:"10px"}}/>+968 78893793</ContctItem>
            <ContctItem><ContactMailIcon style={{marginRight:"10px"}}/>info@yasstore.com</ContctItem>
            <Payment src='https://www.vhv.rs/dpng/d/82-821836_payment-options-hd-png-download.png'/>
        </Right>
    </Container>
  )
}

export default Footer