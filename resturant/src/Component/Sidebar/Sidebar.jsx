import {
  colors,
  ListItem,
  ListItemText,
  Typography,
  ListItemText,
  IconButton,
} from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import MenueIcon from "@mui/icons-material/Menue";
function Sidebar({ open, toggleSideBar }) {
  const { user } = useContext(UserContext);
  const role = user?.role;
  return (
    <>
      <Box>
        <IconButton onClick={toggleSideBar} sx={{ color: "grey" }}>
          <menueIcon />
        </IconButton>
        {open && <Typography sx={{ p: 2 }}> hello,{user?.name}</Typography>}
        <List>
          <ListItem button>
            <ListItemText primary={open ? "Dashboard" : "D"} />
          </ListItem>
          {role === "user" && (
            <>
              <ListItem button>
                <ListItemText primary="mange menue" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="mange user" />
              </ListItem>
            </>
          )}
          {role === "admin" && (
            <>
              <ListItem button>
                <ListItemText primary=" menue" />
              </ListItem>

              <ListItem button>
                <ListItemText primary=" profile" />
              </ListItem>

              <ListItem button>
                <ListItemText primary=" ordered" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </>
  );
}
export default Sidebar;
