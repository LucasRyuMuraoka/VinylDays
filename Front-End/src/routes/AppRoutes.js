import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Search } from "../pages/search";
import { Login } from "../pages/login/Login";
import { Error } from "../pages/error/Error";
import { Landing } from "../pages/landing";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing /> }/>
        <Route path="/search" element={ <Search /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="*" element={ <Error /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };