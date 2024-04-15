import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import  Shop from './Pages/Shop';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men-banner.jpg'
import women_banner from './Components/Assets/women-banner.jpg'
import kids_banner from './Components/Assets/kid-banner.avif'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route  path='product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
