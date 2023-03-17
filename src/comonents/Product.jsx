import styled from "styled-components"
import { Search, ShoppingCartOutlined, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom'

const Info = styled.div`
    opacity: 0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,.2);
    z-index: 3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 1s ease;
`
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #f4f4f8;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }

`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    margin:10px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
        background-color: #fdfdfd;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <Link to="/Cart">
          <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to="/product">
          <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorder/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
