import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#673AB7" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/tasks">
            Tasks
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
