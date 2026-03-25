import "./About.css";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Container sx={{ py: 10 }}>
      {/* Title */}
      <Typography
        variant="h2"
        align="center"
        sx={{
       
          mb: 4,
        }}
      >
        OUR STORY
      </Typography>

      {/* Text */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: "#444",
          lineHeight: 1.8,
          maxWidth: "800px",
          mx: "auto",
          mb: 6,
        }}
      >
        Our Steak House was built on one passion — serving perfectly grilled
        steaks. We carefully select premium cuts and cook them over an open
        flame to bring out bold, unforgettable flavors.
      </Typography>

      {/* Images */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Box
          component="img"
          src="/src/assets/ourstory-kitchin.jpeg"
          alt="Kitchen"
          sx={{
            width: "400px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        />

        <Box
          component="img"
          src="/src/assets/ourstory-outside.jpeg"
          alt="Outside"
          sx={{
            width: "400px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        />
      </Box>
    </Container>
  );
}

export default About;
