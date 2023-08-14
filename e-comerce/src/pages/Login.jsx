import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 3;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%px;
    margin: 10px 0px;
    padding: 10px;
    margin-bottom: 10px;
`

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Link>Forget Password</Link>
                <Link>Create new account</Link>
                <Button>LOGIN</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login