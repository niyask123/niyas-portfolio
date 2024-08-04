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
        ""
      );
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
          `/${editingProject.id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Project updated successfully!");
      } else {
        await axios.post("", data, {
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
      await axios.delete(`/${id}`);
      toast.success("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      console.error("There was an error deleting the project!", error);
      toast.error("There was an error deleting the project!");
    }
  };

  return (
    <div className="lg:px-20 px-3 py-12 text-left">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Projects</h2>
        <button
          onClick={() => {
            setFormData({
              heading: "",
              caption: "",
              languages: "",
              url: "",
            });
            setFile(null);
            setEditingProject(null);
          }}
          className="btn btn-primary"
        >
          Add New Project
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          placeholder="Project Heading"
          className="input input-bordered w-full mb-2"
          required
        />
        <input
          type="text"
          name="caption"
          value={formData.caption}
          onChange={handleChange}
          placeholder="Project Caption"
          className="input input-bordered w-full mb-2"
          required
        />
        <input
          type="text"
          name="languages"
          value={formData.languages}
          onChange={handleChange}
          placeholder="Project Languages"
          className="input input-bordered w-full mb-2"
          required
        />
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Project URL"
          className="input input-bordered w-full mb-2"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button type="submit" className="btn btn-primary">
          {editingProject ? "Update Project" : "Upload Project"}
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Heading</th>
              <th>Caption</th>
              <th>Languages</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.heading}</td>
                <td>{project.caption}</td>
                <td>{project.languages}</td>
                <td>{project.url}</td>
                <td>
                  <button
                    onClick={() => handleEdit(project)}
                    className="btn btn-info btn-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="btn btn-error btn-sm ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UploadPage;
