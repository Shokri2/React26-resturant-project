//this page is the first page should run when start the project

import Navbar from "../../Component/Navbar/Navbar.jsx";
import Hero from "../../Component/Hero/Hero.jsx";
import About from "../../Component/About/About.jsx";
import MenuList from "../../Component/Menue/Menulist.jsx";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuList />
    </>
  );
}

export default LandingPage;

//components render
