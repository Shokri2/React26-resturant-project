import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
function Viewitem() {
  const Location = useLocation();
  const { name, description, image } = Location.state || {};
  return (
    <>
      <h1>View food</h1>
      <Container>
        <img width="500px" src={image} alt="" />
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Container>
    </>
  );
}
export default Viewitem;
