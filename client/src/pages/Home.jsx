import { useState } from "react";
import AddProjectButton from "../Components/AddProjectButton";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      {projects.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <button
            onClick={() => handleAddProject({ name: "New Project", description: "Project description" })}
            className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            <FaPlus size={24} />
          </button>
        </div>
      ) : (
        <>
          <ul>
            {projects.map((project, index) => (
              <li key={index} className="p-2 border rounded mb-2">
                <strong>{project.name}</strong>: {project.description}
              </li>
            ))}
          </ul>
          <AddProjectButton onAdd={handleAddProject} />
        </>
      )}
    </div>
  );
};

export default Home;
