import "./App.css";
import LandingPage from "./Component/pages/LandingPage/landingpage.jsx";
import { Route, Routes } from "react-router-dom";
import Viewitem from "./Component/Menue/Viewitem.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view-details" element={<Viewitem />} />
      </Routes>
    </>
  );
}
export default App;
