
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
import { ResetPassword } from './pages/ResetPassword';
import Otp from './pages/Otp';
import ChangePassword from './pages/ChangePassword';



// ----------------------------------CONTEXTS-------------------------------------------------
import { CartProvider } from './utils/CartContext';
import {AuthContext} from './utils/AuthContext';
// import PrivateRoutes from './routers/privateRouter';

const App = () => {
  return (
  <CartProvider>
    <AuthContext>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/shop-all" element={<ShopAll/>} />
          <Route path="/product-detail/:id" element={<ProductDetail/>} />
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/forgot-password' element={<ForgotPwd/>}/>
          {/* <Route element={<PrivateRoutes/>}> */}
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/otp' element={<Otp/>}/>
            <Route path='/change-password' element={<ChangePassword/>}/>
          {/* </Route> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/check-out' element={<CheckOut/>}/>
        </Routes>
        <Footer/>
    </AuthContext>
  </CartProvider>

    
  )
}

export default App;
