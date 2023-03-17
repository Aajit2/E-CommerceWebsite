import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height:60vh;
    background-color: #f7f7f7;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin: 20px;

`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content:space-between;
    border:1px solid lightgray;
    padding-left:20px;

`
const Input = styled.input`
    border:none;
    flex:8;
`
const Button = styled.button`
    flex:1;
    border:none;
    cursor: pointer;
    background-color: #017e7e;
    color:white;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Description>Get timely updates from your favorite items.</Description>
      <InputContainer>
      <Input placeholder="email"/>
      <Button><Send/></Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
