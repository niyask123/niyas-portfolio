import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    image: "",
    heading: "",
    caption: "",
    languages: "",
    url: ""
  });

  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3001/projects");
      setProjects(response.data);
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
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [name]: URL.createObjectURL(file),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProject) {
        await axios.put(`http://localhost:3001/projects/${editingProject.id}`, formData);
        alert("Project updated successfully!");
      } else {
        await axios.post("http://localhost:3001/projects", formData);
        alert("Project uploaded successfully!");
      }
      setFormData({
        image: "",
        heading: "",
        caption: "",
        languages: "",
        url: ""
      });
      setEditingProject(null);
      fetchProjects();
    } catch (error) {
      console.error("There was an error saving the data!", error);
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingProject(project);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/projects/${id}`);
      alert("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      console.error("There was an error deleting the project!", error);
    }
  };

  return (
    <div className="px-20 py-12 text-left bg-gray-100">
      <h2 className="text-2xl mb-4">{editingProject ? "Edit Project" : "Upload New Project"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="file" name="image" onChange={handleFileChange} required={editingProject === null} />
        <input type="text" name="heading" placeholder="Heading" onChange={handleChange} value={formData.heading} required />
        <input type="text" name="caption" placeholder="Caption" onChange={handleChange} value={formData.caption} required />
        <input type="text" name="languages" placeholder="Languages (comma separated)" onChange={handleChange} value={formData.languages} required />
        <input type="url" name="url" placeholder="Project URL" onChange={handleChange} value={formData.url} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingProject ? "Update" : "Upload"}</button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl mb-4">Uploaded Projects</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-4 border p-4 rounded">
              {project.image && <img src={project.image} alt="Project" className="w-32 h-32 object-cover mb-2" />}
              <h4 className="text-lg font-semibold">{project.heading}</h4>
              <p>{project.caption}</p>
              <p><strong>Languages:</strong> {project.languages}</p>
              <p><strong>URL:</strong> <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
              <button onClick={() => handleEdit(project)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
              <button onClick={() => handleDelete(project.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UploadPage;
