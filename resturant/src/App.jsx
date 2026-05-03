import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./Component/Auth/Register.jsx";
import ViewItem from "./Component/menu/Viewitem.jsx";
import Login from "./Component/Auth/Login.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Dashboard from "./Component/User/Dashboard/Dashboard.jsx";
import MenueManage from "./Component/Admin/Manage/MenuMange.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Res from "./Pages/Reserv/Res.jsx"; 
import Menuelist from "./Component/Menu/Menuelist.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="reservations" element={<Res />} />
        <Route path="menu" element={<Menuelist />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/view-details" element={<ViewItem />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/manage-menu" element={<MenueManage />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
