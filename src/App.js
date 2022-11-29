import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import AdminLogin from './Component/LoginPages/AdminLogin';
import UserLogin from './Component/LoginPages/UserLogin';
import { Routes, Route } from "react-router-dom";
import AdminHeader from './AdminComponent/Header/AdminHeader';
import AddProduct from './AdminComponent/AddProducts/AddProduct';
import AdminProducts from './AdminComponent/AdminProducts/AdminProducts';
import EditProduct from './AdminComponent/AdminProducts/EditProduct';
import ProductDetails from './Component/Product/ProductDetails';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/Cart" element={<Cart />} />

        <Route exact path="/Admin" element={<AdminLogin />} />
        <Route exact path="/Add" element={<AddProduct />} />
        <Route exact path="/products" element={<AdminProducts />} />
        <Route exact path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>

  );
}

export default App




// User Routes
// <Route exact path="/" element={<UserLogin />} />
// <Route exact path="/" element={<Header />} />
// <Route exact path="/home" element={<Home />} />
// <Route exact path="/Cart" element={<Cart />} />
// <Route exact path="/product/:id" element={<ProductDetails />} />









// Admin Routes
// <AdminHeader/>
// <Routes>
  // <Route exact path="/" element={<AddProduct />} />
  // <Route exact path="/products" element={<AdminProducts/>} />
  // <Route exact path="/edit/:id" element={<EditProduct/>} />
// </Routes>