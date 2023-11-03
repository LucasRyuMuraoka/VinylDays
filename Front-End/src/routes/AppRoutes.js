import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Search } from "../pages/search";
import { Login } from "../pages/login/Login";
import { Error } from "../pages/error/Error";
import { Landing } from "../pages/landing";
import { Admin } from "../pages/admin";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing /> }/>
        <Route path="/search" element={ <Search /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/admin" element={ <Admin /> }/>
        <Route path="*" element={ <Error /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };