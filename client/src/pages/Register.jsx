import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10, textAlign: "center" }}>
      <Typography variant="h4">Register</Typography>
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
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleRegister}>
        Register
      </Button>
      <Button color="secondary" sx={{ mt: 2 }} onClick={() => navigate("/login")}>
        Already have an account? Login
      </Button>
    </Box>
  );
}

export default Register;
