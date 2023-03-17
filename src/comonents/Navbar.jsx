import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom'



const Container = styled.div`
    height: 60px;
    width: 100%;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.3px solid lightgray;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>
            <Language>Eng</Language>
            <SearchContainer>
                <Input/>
                <Search style= {{color: grey , fontSize:16}} />
            </SearchContainer>
            </Left>
           <Center><Logo>Aajit.</Logo></Center>
           <Right>
            <MenuItem>
               <Link to="/Register">REGISTER</Link>
            </MenuItem>
            <MenuItem>
            <Link to="/Login">SIGN IN</Link>
            </MenuItem>
            <MenuItem>
               <Link to="/Cart">
                <ShoppingCartOutlined color='primary'/>
              </Link>
           </MenuItem>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
