import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
// child component its always child
function Menuecards({ name, description, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image="{image}" height="200" />
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add to cart</Button>
        <Button size="small">view</Button>
      </CardActions>
    </Card>
  );
}
export default Menuecards;
// props