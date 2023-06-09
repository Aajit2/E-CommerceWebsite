import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import {sliderItems} from "../data"
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f8f1f1;
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw)
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:center;
    overflow: hidden;
    

`
const Image = styled.img`
    height: 80%;

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-color: lightcyan;
`

const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);
    const ClickHandler = (direction) => {
        
        if(direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1 : 1 )
        } else{
            setSlideIndex(slideIndex <1 ? slideIndex+1 : 0 )
        }
    }
  return (
    <Container>
      <Arrow direction = "left" onClick={()=>ClickHandler("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      { sliderItems.map(item=>(
        <Slide bg = {item.bg} key={item.id} >
            <ImageContainer> 
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to="productlist">
                <Button>Shop Now</Button>
                </Link>
            </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction = "right" onClick={()=>ClickHandler("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
