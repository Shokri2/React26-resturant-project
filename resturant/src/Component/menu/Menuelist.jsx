import { Grid, Typography, Container } from "@mui/material";
import Menuecards from "./Menuecards.jsx";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

// parent component
function Menuelist() {
  const { addToCart } = useContext(CartContext);

  const piza = [
    {
      id: 1,
      name: "Gold Steak",
      descraption: "A premium steak grilled to perfection ",
      image: "./src/assets/menue2.jpeg",
      price: 10.9,
    },
    {
      id: 2,
      name: "Fresh Garden Salad",
      descraption: "Fresh salad with mixed vegetables beet slices",
      image: "./src/assets/menue7.jpeg",
      price: 12,
    },
    {
      id: 3,
      name: "Steak Rice Platter",
      descraption: "Grilled meat with spiced rice and potatoes",
      image: "./src/assets/menue8.png",
      price: 21,
    },
    {
      id: 4,
      name: "Grilled Salmon Plate",
      descraption: "Fresh grilled salmon served with vegetables",
      image: "./src/assets/menue3.png",
      price: 22,
    },
    {
      id: 5,
      name: "Chicken Steak Deluxe",
      descraption: "Grilled chicken breast with special marinade",
      image: "./src/assets/menue4.png",
      price: 25,
    },
    {
      id: 6,
      name: "Oriental Mixed Platter",
      descraption: "distinctive oriental assortment of rice",
      image: "./src/assets/menue5.png",
      price: 30,
    },
    {
      id: 7,
      name: "Grilled Eggplant Delight",
      descraption: "Grilled and stuffed eggplant",
      image: "./src/assets/menue6.png",
      price: 35,
    },
    {
      id: 8,
      name: "Creamy Fettuccine Alfredo",
      descraption: "Fettuccine pasta with creamy sauce",
      image: "./src/assets/menue9.png",
      price: 18,
    },
    {
      id: 9,
      name: "Baked Chicken Steak",
      descraption: "Chicken breast covered with cheese",
      image: "./src/assets/menue10.png",
      price: 16,
    },
    {
      id: 10,
      name: "Grilled Chicken Classic",
      descraption: "Grilled chicken breast and potatoes",
      image: "./src/assets/menue11.png",
      price: 10,
    },
    {
      id: 11,
      name: "Herb Salmon Plate",
      descraption: "Grilled salmon with herbs",
      image: "./src/assets/menue12.png",
      price: 20,
    },
    {
      id: 12,
      name: "Light Veggie Bowl",
      descraption: "A healthy assortment of vegetables",
      image: "./src/assets/menue13.png",
      price: 6,
    },
  ];

  return (
    <Container maxWidth={false} sx={{ py: 10 }}>
      <Typography sx={{ mb: 4 }} variant="h3" align="center" fontWeight="bold">
        OUR MENU
      </Typography>

      <Grid container spacing={4}>
        {piza.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
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
  );
}

export default Menuelist;
