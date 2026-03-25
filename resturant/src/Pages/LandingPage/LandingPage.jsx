//this page is the first page should run when start the project

import Navbar from "../../Component/Navbar/Navbar.jsx";
import Hero from "../../Component/Hero/Hero.jsx";
import About from "../../Component/About/About.jsx";
import MenueList from "../../Component/Menu/Menuelist.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenueList />
      <Footer />
    </>
  );
}

export default LandingPage;

//components render
