import "./App.css";
import LandingPage from "./Component/pages/LandingPage/landingpage.jsx";
import { Route, Routes } from "react-router-dom";
import Toaster from "react-hot-toast"
import Viewitem from "./Component/Menue/Viewitem.jsx";
import Register from "./Component/Auth/Register.jsx";
function App() {
  return (
    <>
    <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view-details" element={<Viewitem />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
export default App;
