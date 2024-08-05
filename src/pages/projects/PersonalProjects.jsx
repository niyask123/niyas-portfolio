import React, { useState, useEffect } from "react";
import axios from "axios";

function PersonalProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    company: "",
    date: "",
    projectUrl: "",
    usedLanguages: "",
    projectImages: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5999/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      projectImages: e.target.files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (key === "projectImages") {
        for (let i = 0; i < form[key].length; i++) {
          formData.append("images", form[key][i]);
        }
      } else {
        formData.append(key, form[key]);
      }
    });

    try {
      if (isEditing) {
        await axios.patch(
          `http://localhost:5999/api/projects/${currentProjectId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setIsEditing(false);
        setCurrentProjectId(null);
      } else {
        await axios.post("http://localhost:5999/api/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      resetForm();
      fetchProjects();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      company: project.company,
      date: project.date.split("T")[0],
      projectUrl: project.projectUrl,
      usedLanguages: project.usedLanguages || "", // Handle as string
      projectImages: [],
    });
    setIsEditing(true);
    setCurrentProjectId(project.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5999/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      company: "",
      date: "",
      projectUrl: "",
      usedLanguages: "",
      projectImages: [],
    });
  };

  return (
    <div className="App">
      <h1 className="py-6 px-20">Project Management</h1>
      <form
        className="grid lg:grid-cols-2 gap-5 px-6 lg:px-36"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-start">
          <label>Title:</label>
          <input
            className="p-2 mt-1 rounded-lg border-2"
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col text-start">
          <label>Company:</label>
          <input
            className="p-2 mt-1 rounded-lg border-2"
            type="text"
            name="company"
            value={form.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col text-start">
          <label>Date:</label>
          <input
            className="p-2 mt-1 rounded-lg border-2"
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col text-start">
          <label>Project URL:</label>
          <input
            className="p-2 mt-1 rounded-lg border-2"
            type="url"
            name="projectUrl"
            value={form.projectUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col text-start">
          <label>Used Languages:</label>
          <input
            className="p-2 mt-1 rounded-lg border-2"
            type="text"
            name="usedLanguages"
            value={form.usedLanguages}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col text-start">
          <label>Project Images:</label>
          <input
            type="file"
            className="p-2 mt-1 rounded-lg border-2"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button className="text-red-600 btn hover:text-red-900" type="submit">{isEditing ? "Update" : "Create"} Project</button>
      </form>
      <h2 className="py-6">Project List</h2>
      <div className="grid lg:grid-cols-5 gap-5 px-6 lg:px-36 lg:py-12">
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <div className="flex flex-col gap-3 border-2 rounded-lg p-3">
              <div className="text-sm font-medium ">Title: {project.title}</div>
              <div className="text-sm">Company: {project.company}</div>
              <div className="text-sm">Date: {project.date}</div>
              <div className="text-sm">
                Project Url
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {project.projectUrl}
                </a>
              </div>
              <div className="text-sm">
                Used Languages: {project.usedLanguages || "N/A"}
              </div>
              <div className="flex  overflow-auto lg:max-w-48">
                {project.projectImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project Image ${index}`}
                    className="w-24 h-auto object-cover mr-2 mb-2"
                  />
                ))}
              </div>
              <div className="flex space-x-2 justify-center text-sm font-medium">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-indigo-600 btn hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-red-600 btn hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default PersonalProjects;
