import { useState, Box } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { UserContext } from "../../Context/UserContext.jsx";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { register } = useContext(UserContext);
  const handleRegister = () => {
    register(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          {" "}
          create account
        </Typography>
        <Box>
          <TextField
            label="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Box>

        <Box>
          <TextField
            label="email"
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Box>
        <Box>
          <TextField
            label="password"
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </Box>
        <Button onClick={handleRegister}>Register</Button>
      </Container>
    </>
  );
}

export default Register;
