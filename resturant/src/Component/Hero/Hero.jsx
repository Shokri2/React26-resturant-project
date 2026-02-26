import "./Hero.css";
// import videohero from "../../assets/video-1.mp4";
import image1 from "../../assets/image1.jpeg";
function Hero() {
  return (
    <>
      <div className="container">
        <img src={image1} alt="ss" />
        <div className="write">
          <h1>SteakHouse</h1>
          <p>
            At SteakHouse every cut tells a story of fire, passion, and
            perfection <br />
            where premium quality meets the art of grillin
          </p>
        </div>
      </div>
    </>
  );
}
export default Hero;
