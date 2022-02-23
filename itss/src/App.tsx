import { Navigate, Route, Routes, useLocation } from "react-router";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import AddProduct from "./components/products/AddProduct";
import Products from "./components/products/Products";
import ProductPage from "./components/products/ProductPage";


const App = () =>  {

  const location = useLocation()

  return (
    <div className="w-screen h-screen flex">
      {
        (location.pathname !== '/login' && location.pathname !== '/404') &&
        <Navbar />
      }
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/product/add" element={ <AddProduct /> } />
        <Route path="/product/:id" element={ <ProductPage /> } />
        
        <Route path="/404" element={ <NotFound /> } />
        <Route path="/" element={ <Navigate to="/products" /> } />
        <Route path="/*" element={ <Navigate to="/404" /> } />
      </Routes>
    </div>
  );
}


export default App;
