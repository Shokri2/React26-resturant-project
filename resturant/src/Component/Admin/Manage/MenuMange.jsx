import {
  Avatar,
  Button,
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

function MenuManage() {
  const [pizzaMenu, setPizzaMenu] = useState([
    {
      id: 1,
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
  ]);

  const [editeId, setEditId] = useState(null);

  const [updateItem, setUpdateItem] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    quantity: "",
  });

  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState({});

  // ➕ ADD ITEM
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

    setPizzaMenu([...pizzaMenu, { id: pizzaMenu.length + 1, ...newItem }]);

    toast.success("Added successfully");
    setNewItem({});
    setOpen(false);
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    setPizzaMenu(pizzaMenu.filter((item) => item.id !== id));
    toast.success("Deleted successfully");
  };

  // ✏️ OPEN EDIT
  const handleUpdate = (pizza) => {
    setEditId(pizza.id);
    setUpdateItem(pizza); // مهم جداً
  };

  // 💾 SAVE UPDATE
  const handleSaveUpdate = () => {
    if (
      !updateItem.name ||
      !updateItem.image ||
      !updateItem.description ||
      !updateItem.price ||
      !updateItem.quantity
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const updatedMenu = pizzaMenu.map((pizza) =>
      pizza.id === editeId ? { ...pizza, ...updateItem } : pizza,
    );

    setPizzaMenu(updatedMenu);

    toast.success("Updated successfully");

    setEditId(null);
    setUpdateItem({
      name: "",
      image: "",
      description: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ m: 4, textAlign: "center" }}>
        Manage Menu
      </Typography>

      <Button
        variant="contained"
        color="warning"
        onClick={() => setOpen(!open)}
      >
        {open ? "Cancel" : "Add New"}
      </Button>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          {/* HEADER */}
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* DATA */}
            {pizzaMenu.map((pizza) => (
              <TableRow key={pizza.id}>
                <TableCell>{pizza.id}</TableCell>

                {/* IMAGE */}
                <TableCell>
                  {editeId === pizza.id ? (
                    <TextField
                      value={updateItem.image}
                      onChange={(e) =>
                        setUpdateItem({
                          ...updateItem,
                          image: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Avatar
                      src={pizza.image}
                      variant="rounded"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                </TableCell>

                {/* NAME */}
                <TableCell>
                  {editeId === pizza.id ? (
                    <TextField
                      value={updateItem.name}
                      onChange={(e) =>
                        setUpdateItem({
                          ...updateItem,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pizza.name
                  )}
                </TableCell>

                {/* DESCRIPTION */}
                <TableCell>
                  {editeId === pizza.id ? (
                    <TextField
                      value={updateItem.description}
                      onChange={(e) =>
                        setUpdateItem({
                          ...updateItem,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pizza.description
                  )}
                </TableCell>

                {/* PRICE */}
                <TableCell>
                  {editeId === pizza.id ? (
                    <TextField
                      value={updateItem.price}
                      onChange={(e) =>
                        setUpdateItem({
                          ...updateItem,
                          price: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pizza.price
                  )}
                </TableCell>

                {/* QUANTITY */}
                <TableCell>
                  {editeId === pizza.id ? (
                    <TextField
                      value={updateItem.quantity}
                      onChange={(e) =>
                        setUpdateItem({
                          ...updateItem,
                          quantity: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pizza.quantity
                  )}
                </TableCell>

                {/* ACTIONS */}
                <TableCell>
                  {editeId === pizza.id ? (
                    <Button onClick={handleSaveUpdate} variant="contained">
                      Save
                    </Button>
                  ) : (
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        onClick={() => handleUpdate(pizza)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(pizza.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  )}
                </TableCell>
              </TableRow>
            ))}

            {/* ADD NEW ROW */}
            {open && (
              <TableRow>
                <TableCell>#</TableCell>

                <TableCell>
                  <TextField
                    value={newItem.image || ""}
                    onChange={(e) =>
                      setNewItem({ ...newItem, image: e.target.value })
                    }
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    value={newItem.name || ""}
                    onChange={(e) =>
                      setNewItem({ ...newItem, name: e.target.value })
                    }
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    value={newItem.description || ""}
                    onChange={(e) =>
                      setNewItem({ ...newItem, description: e.target.value })
                    }
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    value={newItem.price || ""}
                    onChange={(e) =>
                      setNewItem({ ...newItem, price: e.target.value })
                    }
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    value={newItem.quantity || ""}
                    onChange={(e) =>
                      setNewItem({ ...newItem, quantity: e.target.value })
                    }
                  />
                </TableCell>

                <TableCell>
                  <Button variant="contained" onClick={handleSave}>
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MenuManage;
