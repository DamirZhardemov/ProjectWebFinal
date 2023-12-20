import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Product from './pages/Product/Product'
import Profile from './pages/Profile/Profile'
import Basket from './pages/Basket/Basket'
import Wishes from './pages/Wishes/Wishes'
import Header from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog/" element={<Catalog />} />
        <Route path="catalog/:id" element={<Product />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="basket/" element={<Basket />} />
        <Route path="wishes/" element={<Wishes />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
