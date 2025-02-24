import { useState ,} from "react";
import { FaPlus } from "react-icons/fa";

function AddProjectButton({ onAdd }) {
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddProject = () => {
        if (projectName.trim()) {
            onAdd({ name: projectName, description });
            setShowModal(false);
            setProjectName("");
            setDescription("");
        }
    };

    return (
        <div>
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                <FaPlus size={20} />
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Create New Project</h2>
                        <input
                            type="text"
                            placeholder="Project Name"
                            className="w-full p-2 border rounded mb-2"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)} />
                        <textarea
                            placeholder="Project Description"
                            className="w-full p-2 border rounded mb-2"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end space-x-2">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-400 rounded">
                                Cancel
                            </button>
                            <button onClick={handleAddProject} className="px-4 py-2 bg-blue-600 text-white rounded">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddProjectButton;
