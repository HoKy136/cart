import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './Pages/Checkout-Page';
import DetailsPage from './Pages/Details-Page';
import LogoPage from './Pages/Logo-Page';
import MainPage from './Pages/Main-Page';
import ProductPage from './Pages/Product-Page';
import Welcome from './Pages/Welcome-Page';
import { UserAuthContextProvider } from "./Firebase/Auth";
import Signup from './Pages/Login/SignUp-Page';
import LoginPage from './Pages/Login/LogIn-Page';
function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/home" element={<Welcome/>}/>
          <Route path="/products" element={<ProductPage/>}>
            <Route path='/products/:detailsId' element ={<DetailsPage/>}/>
          </Route>
          <Route path="/reviews" element={<LogoPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Route>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
