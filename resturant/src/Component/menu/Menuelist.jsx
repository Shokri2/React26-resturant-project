import { Grid, Typography, Container, Box } from "@mui/material";
import Menuecards from "./Menuecards.jsx";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import img1 from "../../assets/menue2.jpeg";
import img2 from "../../assets/menue7.jpeg";
import img3 from "../../assets/menue8.png";
import img4 from "../../assets/menue3.png";
import img5 from "../../assets/menue4.png";
import img6 from "../../assets/menue5.png";
import img7 from "../../assets/menue6.png";
import img8 from "../../assets/menue9.png";
import img9 from "../../assets/menue10.png";
import img10 from "../../assets/menue11.png";
import img11 from "../../assets/menue12.png";
import img12 from "../../assets/menue13.png";

function Menuelist() {
  const { addToCart } = useContext(CartContext);

  const piza = [
    {
      id: 1,
      name: "Gold Steak",
      descraption: "A premium steak grilled to perfection",
      image: img1,
      price: 10.9,
    },
    {
      id: 2,
      name: "Fresh Garden Salad",
      descraption: "Fresh salad with mixed vegetables beet slices",
      image: img2,
      price: 12,
    },
    {
      id: 3,
      name: "Steak Rice Platter",
      descraption: "Grilled meat with spiced rice and potatoes",
      image: img3,
      price: 21,
    },
    {
      id: 4,
      name: "Grilled Salmon Plate",
      descraption: "Fresh grilled salmon served with vegetables",
      image: img4,
      price: 22,
    },
    {
      id: 5,
      name: "Chicken Steak Deluxe",
      descraption: "Grilled chicken breast with special marinade",
      image: img5,
      price: 25,
    },
    {
      id: 6,
      name: "Oriental Mixed Platter",
      descraption: "distinctive oriental assortment of rice",
      image: img6,
      price: 30,
    },
    {
      id: 7,
      name: "Grilled Eggplant Delight",
      descraption: "Grilled and stuffed eggplant",
      image: img7,
      price: 35,
    },
    {
      id: 8,
      name: "Creamy Fettuccine Alfredo",
      descraption: "Fettuccine pasta with creamy sauce",
      image: img8,
      price: 18,
    },
    {
      id: 9,
      name: "Baked Chicken Steak",
      descraption: "Chicken breast covered with cheese",
      image: img9,
      price: 16,
    },
    {
      id: 10,
      name: "Grilled Chicken Classic",
      descraption: "Grilled chicken breast and potatoes",
      image: img10,
      price: 10,
    },
    {
      id: 11,
      name: "Herb Salmon Plate",
      descraption: "Grilled salmon with herbs",
      image: img11,
      price: 20,
    },
    {
      id: 12,
      name: "Light Veggie Bowl",
      descraption: "A healthy assortment of vegetables",
      image: img12,
      price: 6,
    },
  ];

  return (
    <Box
      sx={{
        background: "#f8fafc",
        minHeight: "100vh",
        py: 10,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#111827",
            mb: 2,
          }}
        >
          OUR MENU
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "#6b7280",
            mb: 7,
            maxWidth: "700px",
            fontSize: "1.1rem",
          }}
        >
          Discover our delicious meals made with fresh ingredients and premium
          quality
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {piza.map((pizza) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={pizza.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Menuecards
                id={pizza.id}
                name={pizza.name}
                descraption={pizza.descraption}
                image={pizza.image}
                price={pizza.price}
                addToCart={addToCart}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Menuelist;
