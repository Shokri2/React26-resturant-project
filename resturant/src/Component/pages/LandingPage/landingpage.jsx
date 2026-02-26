// this page is the first page should run when start the project
import Navbar from "../../Navbar/Navbar.jsx";
import Hero from "../../Hero/Hero.jsx";
import About from "../../About/About.jsx";
import Menuelist from "../../Menue/Menuelist.jsx";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menuelist />
     
    </>
  );
}
export default LandingPage;
