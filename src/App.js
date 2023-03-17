
import Register from "./pages/Register"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="productList" element={<ProductList/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="product/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
