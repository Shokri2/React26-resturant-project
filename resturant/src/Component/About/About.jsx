import "./About.css";
import {Container,Typography} from "@mui/material"
function About() {
  return (
    <>
      <Container sx={{py:10}}>
        <Typography variant="h2" align="center" fontweight="bold" gutterBottom>
          chose
        </Typography>

        <Typography variant="h6" align="center" color="text.primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Eius
          ad voluptatum perspiciatis officiis molestias earum incidunt <br />{" "}
          mollitia officia, rerum nobis blanditiis illum. Nesciunt atque
          similique esse, maiores repellat dolorum illum!
        </Typography>
      </Container>
    </>
  );
}
export default About;
