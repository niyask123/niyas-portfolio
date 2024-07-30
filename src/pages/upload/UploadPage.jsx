import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    heading: "",
    caption: "",
    languages: "",
    url: "",
  });

  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://crud-test-delta.vercel.app/projects"
      );
      setProjects(response.data.projects);
    } catch (error) {
      console.error("There was an error fetching the projects!", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("heading", formData.heading);
    data.append("caption", formData.caption);
    data.append("languages", formData.languages);
    data.append("url", formData.url);

    try {
      if (editingProject) {
        await axios.put(
          `https://crud-test-delta.vercel.app/upload/${editingProject.id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Project updated successfully!");
      } else {
        await axios.post("https://crud-test-delta.vercel.app/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Project uploaded successfully!");
      }
      setFormData({
        heading: "",
        caption: "",
        languages: "",
        url: "",
      });
      setFile(null);
      setEditingProject(null);
      fetchProjects();
    } catch (error) {
      console.error("There was an error saving the data!", error);
      toast.error("There was an error saving the data!");
    }
  };

  const handleEdit = (project) => {
    setFormData({
      heading: project.heading,
      caption: project.caption,
      languages: project.languages,
      url: project.url,
    });
    setFile(null); // Clear file when editing
    setEditingProject(project);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://crud-test-delta.vercel.app/delete/${id}`);
      toast.success("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      console.error("There was an error deleting the project!", error);
      toast.error("There was an error deleting the project!");
    }
  };

  return (
    <div className="lg:px-20 px-3 py-12 text-left bg-gray-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <h2 className="text-2xl text-center text-black mb-4">
        {editingProject ? "Edit Project" : "Upload New Project"}
      </h2>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-3 lg:px-36">
        <input
          className="bg-black pt-1 px-2 rounded-lg"
          type="file"
          name="image"
          onChange={handleFileChange}
          required={editingProject === null}
        />
        <input
          className="p-2 rounded-lg"
          type="text"
          name="heading"
          placeholder="Heading"
          onChange={handleChange}
          value={formData.heading}
          required
        />
        <input
          className="p-2 rounded-lg"
          type="text"
          name="caption"
          placeholder="Caption"
          onChange={handleChange}
          value={formData.caption}
          required
        />
        <input
          className="p-2 rounded-lg"
          type="text"
          name="languages"
          placeholder="Languages (comma separated)"
          onChange={handleChange}
          value={formData.languages}
          required
        />
        <input
          className="p-2 rounded-lg"
          type="url"
          name="url"
          placeholder="Project URL"
          onChange={handleChange}
          value={formData.url}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingProject ? "Update" : "Upload"}
        </button>
      </form>

      <div className="mt-8 overflow-hidden">
        <h3 className="text-xl mb-4 text-center text-black">Uploaded Projects List</h3>
        <div className="grid lg:grid-cols-3 gap-2">
          {projects.map((project) => (
            <div key={project.id} className="mb-4 flex flex-col gap-3 text-center items-center border-2 p-4 rounded">
              {project.image && (
                <img
                  src={project.image}
                  alt="Project"
                  className="w-32 h-32 object-cover mb-2"
                />
              )}
              <h4 className="text-lg font-semibold">Name: {project.heading}</h4>
              <p>Captions: {project.caption}</p>
              <p>
                <strong>Languages:</strong> {project.languages}
              </p>
              <p>
                <strong>URL:</strong>{" "}
                <a href={project.url} target="_blank" className="text-xs" rel="noopener noreferrer">
                  {project.url}
                </a>
              </p>
              <div className="flex">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
