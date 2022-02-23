import { Navigate, Route, Routes, useLocation } from "react-router";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";


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
        
        <Route path="/404" element={ <NotFound /> } />
        <Route path="/*" element={ <Navigate to="/404" /> } />
      </Routes>
    </div>
  );
}


export default App;
