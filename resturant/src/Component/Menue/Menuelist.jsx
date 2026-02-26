import { Grid, Typography, Container } from "@mui/material";
import Menuecards from "./Menuecards.jsx";
// parent component
// id => uniqe value
function Menuelist() {
  const piza = [
    {
      id: 1,    
      name: "dd",
      descraption: "sssss",
      image: "",
    },
    {
      id: 2,
      name: "dd",
      descraption: "sssss",
      image: "",
    },
    {
      id: 3,
      name: "dd",
      descraption: "sssss",
      image: "",
    },
    {
      id: 4,
      name: "dd",
      descraption: "sssss",
      image: "./src/assets",
    },
    {
      id: 5,
      name: "dd",
      descraption: "sssss",
      image: "",
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
           return( <Grid item xs={12} sm={6} md={5} key={pizza.id}>
              <Menuecards name={pizza.name} descraption={pizza.descraption} image={pizza.image}/>
            </Grid>);
          })}
        </Grid>
      </Container>
    </>
  );
}
export default Menuelist;
