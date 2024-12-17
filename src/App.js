import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import ProductResearch from './pages/productresearch';
import Header from './components/header';

function App() {
  return (
    <>
    <Header />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/product" element={<Product />} />
    <Route path="/productresearch" element={<ProductResearch />} />
  </Routes> 
  <Footer />
  </>
  );
}

export default App;
