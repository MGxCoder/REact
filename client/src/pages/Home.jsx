import { useState } from "react";
import AddProjectButton from "../Components/AddProjectButton";
import { Container, Typography, List, ListItem, Paper, Box, Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Projects
      </Typography>

      {/* If no projects, show "+" button */}
      {projects.length === 0 ? (
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaPlus />}
            onClick={() => document.getElementById("addProjectButton").click()}
          >
            Add Project
          </Button>
        </Box>
      ) : (
        <List>
          {projects.map((project, index) => (
            <ListItem key={index} sx={{ mb: 2, justifyContent: "center" }}>
              <Paper elevation={3} sx={{ p: 2, width: "100%" }}>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      )}

      {/* Hidden AddProjectButton (for clicking via "+") */}
      <Box sx={{ mt: 4 }}>
        <AddProjectButton id="addProjectButton" onAdd={handleAddProject} />
      </Box>
    </Container>
  );
};

export default Home;
