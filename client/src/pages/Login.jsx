import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication (replace with actual API request)
    if (email === "admin@test.com" && password === "password") {
      localStorage.setItem("auth", "true"); // Store auth status
      navigate("/home"); // Redirect to Home
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10, textAlign: "center" }}>
      <Typography variant="h4">Login</Typography>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
        Login
      </Button>
      <Button color="secondary" sx={{ mt: 2 }} onClick={() => navigate("/register")}>
        Register Here
      </Button>
    </Box>
  );
}

export default Login;
