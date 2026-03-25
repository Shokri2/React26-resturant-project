import { Grid, Typography, Container } from "@mui/material";
import Menuecards from "./Menuecards.jsx";
import Navbar from "../Navbar/Navbar.jsx";

// parent component
// id => uniqe value
function Menuelist() 
{
  const piza = [
    {
      id: 1,
      name: "Gold Steak",
      descraption: "A premium steak grilled to perfection ",
      image: "./src/assets/menue2.jpeg",
      price: 10.9,
      quantity: 12,
    },
    {
      id: 2,
      name: "Fresh Garden Salad",
      descraption: "Fresh salad with mixed vegetables beet slices",
      image: "./src/assets/menue7.jpeg",
      price: 12,
      quantity: 42,
    },
    {
      id: 3,
      name: "Steak Rice Platter",
      descraption: "Grilled meat with spiced rice and potatoes",
      image: "./src/assets/menue8.png",
      price: 21,
      quantity: 21,
    },
    {
      id: 4,
      name: "Grilled Salmon Plate",
      descraption: "Fresh grilled salmon served with  vegetables",
      image: "./src/assets/menue3.png",
      price: 22,
      quantity: 7,
    },
    {
      id: 5,
      name: "Chicken Steak Deluxe",
      descraption: "Grilled chicken breast with special marinade",
      image: "./src/assets/menue4.png",
      price: 25,
      quantity: 10,
    },
    {
      id: 5,
      name: "Oriental Mixed Platter",
      descraption: " distinctive oriental assortment of rice ",
      image: "./src/assets/menue5.png",
      price: 30,
      quantity: 18,
    },
    {
      id: 5,
      name: "Grilled Eggplant Delight",
      descraption: "Grilled and stuffed eggplant ",
      image: "./src/assets/menue6.png",
      price: 35,
      quantity: 14,
    },
    {
      id: 5,
      name: "Creamy Fettuccine Alfredo",
      descraption: "Fettuccine pasta with creamy sauce",
      image: "./src/assets/menue9.png",
      price: 18,
      quantity: 20,
    },
    {
      id: 5,
      name: "Baked Chicken Steak",
      descraption: "Chicken breast covered with cheese",
      image: "./src/assets/menue10.png",
      price: 16,
      quantity: 9,
    },
    {
      id: 5,
      name: "Grilled Chicken Classic",
      descraption: "Grilled chicken breast and potatoes",
      image: "./src/assets/menue11.png",
      price: 10,
      quantity: 8,
    },
    {
      id: 5,
      name: "Herb Salmon Plate",
      descraption: "Grilled salmon with herbs",
      image: "./src/assets/menue12.png",
      price: 20,
      quantity: 5,
    },
    {
      id: 5,
      name: "Light Veggie Bowl",
      descraption: "A healthy assortment of vegetables",
      image: "./src/assets/menue13.png",
      price: 6,
      quantity: 10,
    },
  ];
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Typography
          sx={{ mb: 4 }}
          variant="h3"
          align="center"
          fontWeight="bold"
        >
          
          OUR MENUE
        </Typography>
        <Grid container spacing={12}>
          {piza.map((pizza) => {
            return (
              <Grid item key={pizza.id}>
                <Menuecards
                  name={pizza.name}
                  descraption={pizza.descraption}
                  image={pizza.image}
                  price={pizza.price}
                  quantity={pizza.quantity}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export default Menuelist;
