
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import { Header } from './components/Header';
import Footer from "./components/Footer";

// pages
import Home from './pages/Home';
import ShopAll from './pages/ShopAll';
import ProductDetail from './pages/ProductDetail';
import LogIn from './pages/LogIn';
import ForgotPwd from './pages/ForgotPwd';
import Cart from './pages/Cart';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Sign from './pages/Sign';
import Contact from './pages/Contact';
import Account from './pages/Account';
import CheckOut from './pages/CheckOut';
import { ChangePassword } from './pages/ChangePassword';


// ----------------------------------CONTEXTS-------------------------------------------------
import { CartProvider } from './utils/CartContext';
import {AuthContext} from './utils/AuthContext';

const App = () => {


  return (
    <AuthContext>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/ShopAll" element={<ShopAll/>} />
          <Route path="/ProductDetail/:id" element={<ProductDetail/>} />
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='/Sign' element={<Sign/>}/>
          <Route path='/ForgotPwd' element={<ForgotPwd/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/CheckOut' element={<CheckOut/>}/>
          <Route path='/ChangePassword' element={<ChangePassword/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </AuthContext>
    
  )
}

export default App;
