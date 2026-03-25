import {
  Avatar,
  Button,
  ButtonBase,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../../Navbar/Navbar";

function MenuManage() {
  const [pizzaMenu, setPizzaMenu] = useState([
    {
      id: 1, //unique value
      name: "Margherita",
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni slices on a tomato sauce base.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 3,
      name: "Hawaiian",
      description: "Ham and pineapple topping for a sweet and savory flavor.",
      image: "./src/assets/pizza3.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 4,
      name: "Vegetarian",
      description:
        "Assorted vegetables including mushrooms, onions, peppers, and olives.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 5,
      name: "Meat Lovers",
      description:
        "Pepperoni, sausage, ham, and bacon for a hearty meaty experience.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
    },
  ]);
  const [editeId, setEditdId] = useState(null);
  const [UpdateIteam, setUpdateIteam] = useState();
  const [OpenEditor, setOpenEditor] = useState(false);
  const handleUpdate = (id) => {
    setOpenEditor(!OpenEditor);
    setEditdId(id);
  };
  const [newItem, setNewItem] = useState({});
  console.log(newItem);
  const [open, setOpen] = useState(false);
  // !true
  // !false
  const handleAddItem = () => {
    setOpen(!open);
  };

  const handleSave = () => {
    if (
      !newItem.name ||
      !newItem.image ||
      !newItem.description ||
      !newItem.price ||
      !newItem.quantity
    ) {
      toast.error("Please fill all fields");
      return;
    }
    pizzaMenu.push({ id: pizzaMenu.length + 1, ...newItem });
    toast.success("Added Succeefllt");
    setOpen(!open);
    setNewItem({});
  };

  const handleDelete = (id) => {
    const newMenu = pizzaMenu.filter((piiza) => piiza.id !== id);
    setPizzaMenu(newMenu);
    toast.success("Deleted Successfully");
  };
  const hadleSaveUpdate = () => {
    if (
      !newItem.name ||
      !newItem.image ||
      !newItem.description ||
      !newItem.price ||
      !newItem.quantity
    ) {
      toast.error("Please fill all fields");
      return;
    }
    if (editeId) {
      const UpdateMenue = pizzaMenu.map((pizza) => {
        pizza.id === editeId ? { ...pizza, newItem } : pizza;
      });
      setPizzaMenu(UpdateMenue);
      toast.success(" updated successfuly");
    }
    setOpenEditor(!open);
    setNewItem({});
  };
  return (
    <>
     
      <Container>
        <Typography
          variant="h3"
          sx={{
            m: 4,
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Manage Menu
        </Typography>
        <Button
          textAlign="center"
          variant="contained"
          size="small"
          color="warning"
          onClick={handleAddItem}
        >
          {open ? "Cancel" : "Add New"}
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pizzaMenu.map((pizza) => {
                return (
                  <TableRow key={pizza.id}>
                    <TableCell>{pizza.id}</TableCell>
                    {
                      <TableCell>
                        {editeId === pizza.id ? (
                          <>
                            <TextField
                              value={UpdateIteam.image}
                              onChange={(e) =>
                                setUpdateIteam({
                                  ...UpdateIteam,
                                  image: e.target.value,
                                })
                              }
                            />
                          </>
                        ) : (
                          <Avatar
                            variant="rounded"
                            src={pizza.image}
                            sx={{ width: 50, height: 50 }}
                          />
                        )}
                      </TableCell>
                    }
                    <TableCell>
                      {editeId === pizza.id ? (
                        <TextField
                          value={UpdateIteam.name}
                          onChange={(e) =>
                            setUpdateIteam({
                              ...UpdateIteam,
                              name: e.target.value,
                            })
                          }
                        />
                      ) : (
                        pizza.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editeId === pizza.id ? (
                        <TextField
                          value={UpdateIteam.description}
                          onChange={(e) =>
                            setUpdateIteam({
                              ...UpdateIteam,
                              description: e.target.value,
                            })
                          }
                        />
                      ) : (
                        pizza.description
                      )}
                    </TableCell>
                    <TableCell>
                      {editeId === pizza.id ? (
                        <TextField
                          value={UpdateIteam.price}
                          onChange={(e) =>
                            setUpdateIteam({
                              ...UpdateIteam,
                              price: e.target.value,
                            })
                          }
                        />
                      ) : (
                        pizza.price
                      )}
                    </TableCell>
                    <TableCell>
                      {editeId === pizza.id ? (
                        <TextField
                          value={UpdateIteam.quantity}
                          onChange={(e) =>
                            setUpdateIteam({
                              ...UpdateIteam,
                              quantity: e.target.value,
                            })
                          }
                        />
                      ) : (
                        pizza.quantity
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {editeId === pizza.id ? (
                        <Button onClick={hadleSaveUpdate}>Save</Button>
                      ) : (
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="center"
                        >
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleUpdate(pizza.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={() => handleDelete(pizza.id)}
                          >
                            Delete
                          </Button>
                        </Stack>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {open && (
                <TableRow>
                  <TableCell>{pizzaMenu.length + 1}</TableCell>
                  <TableCell>
                    <TextField
                      label="Image"
                      value={newItem.image}
                      onChange={(e) =>
                        setNewItem({ ...newItem, image: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Name"
                      value={newItem.name}
                      onChange={(e) =>
                        setNewItem({ ...newItem, name: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Description"
                      value={newItem.description}
                      onChange={(e) =>
                        setNewItem({ ...newItem, description: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Price"
                      type="number"
                      value={newItem.price}
                      onChange={(e) =>
                        setNewItem({ ...newItem, price: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Quantity"
                      type="number"
                      value={newItem.quantity}
                      onChange={(e) =>
                        setNewItem({ ...newItem, quantity: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default MenuManage;
