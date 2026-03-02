import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
function Viewitem() {
  const Location = useLocation();
  const { name, descraption, image } = Location.state || {};
  return (
    <>
      <Container>
        <img width="500px" src={image} alt="" />
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{descraption}</Typography>
      </Container>
    </>
  );
}
export default Viewitem;
