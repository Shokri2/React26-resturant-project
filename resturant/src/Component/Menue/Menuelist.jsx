import { Grid, Typography, Container } from "@mui/material";
import Menuecards from "./Menuecards.jsx";

// parent component
// id => uniqe value
function Menuelist() {
  const piza = [
    {
      id: 1,
      name: "Gold Steak",
      descraption:
        "A luxurious pie",
      image: "./src/assets/image11.png",
      price: 10.9,
      quantity: 12,
    },
    {
      id: 2,
      name: "dd",
      descraption: "sssss",
      image: "./src/assets/image88.png",
      price: 10.9,
      quantity: 12,
    },
    {
      id: 3,
      name: "dd",
      descraption: "sssss",
      image: "./src/assets/image88.png",
      price: 10.9,
      quantity: 12,
    },
    {
      id: 4,
      name: "dd",
      descraption: "sssss",
      image: "./src/assets",
      price: 10.9,
      quantity: 12,
    },
    {
      id: 5,
      name: "dd",
      descraption: "sssss",
      image: "",
      price: 10.9,
      quantity: 12,
    },
  ];
  return (
    <>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold">
          our menue
        </Typography>
        <Grid container spacing={12}>
          {piza.map((pizza) => {
            return (
              <Grid item xs={12} sm={6} md={5} key={pizza.id}>
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
