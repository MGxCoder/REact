import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Box ,Typography} from "@mui/material";
import Home from "../pages/Home";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#673AB7", padding: "0 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", position: "absolute", left: 20, top: 10 }}>
          P.M.T
        </Typography>
        <Box sx={{ position: "absolute", right: 20, top: 10, display: "flex", gap: 2 }}>
           
          <Button color="inherit" component={Home} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Box>
       
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
