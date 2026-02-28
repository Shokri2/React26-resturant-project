import "./About.css";
import { Container, Typography } from "@mui/material";
function About() {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Typography variant="h2" align="center" fontweight="bold" gutterBottom>
          Our Story
        </Typography>

        <Typography variant="h6" align="center" color="text.primary">
          Our Steak House was built on one passion <br /> serving perfectly
          grilled steaks We carefully select premium cuts <br /> and cook them
          over an open flame to bring out bold unforgettable flavors <br />
          <Typography sx={{margin:9}}>
            <img  width="450" src="./src/assets/ourstory-kitchin.jpeg" alt="" />

            <img width="450" src="./src/assets/ourstory-outside.jpeg" alt="" />
          </Typography>
        </Typography>
      </Container>
    </>
  );
}
export default About;
