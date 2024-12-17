import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import ProductResearch from './pages/productresearch';
import ResponsiveAppBar from './components/header';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
    <ResponsiveAppBar />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/product" element={<Product />} />
    <Route path="/productresearch" element={<ProductResearch />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes> 
  <Footer />
  </>
  );
}

export default App;
