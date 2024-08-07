import React, { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://backendportfolio-six.vercel.app/api/projects"
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  return (
    <>
      <div className="lg:px-20 px-3 py-12 text-left">
        <div className="text-center flex-col gap-3 items-center flex justify-center mb-10">
          <span className="py-1 font-semibold text-3xl">My Works</span>
          <p>Already I have completed works:</p>
        </div>

        {loading ? ( // Conditionally render loading indicator
          <div className="text-center flex justify-center items-center h-96">
            <span className="relative flex h-10 w-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-green-500"></span>
            </span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex flex-col gap-5 bg-[#515f75] p-2 lg:p-6 w-full lg:w-full rounded-lg"
              >
                <div className="carousel rounded-box">
                  {project.projectImages
                    .slice()
                    .reverse()
                    .map((image, imgIndex) => (
                      <div key={imgIndex} className="carousel-item w-full">
                        <img
                          src={image}
                          className="w-full"
                          alt={`Project ${index} Image ${imgIndex}`}
                        />
                      </div>
                    ))}
                </div>
                <div className="flex flex-col text-white p-6 w-full">
                  <div className="flex justify-between w-full mb-3">
                    <p className="text-2xl">{project.title}</p>
                    <p className="w-3 bg-green-600 rounded-full h-3"></p>
                  </div>
                  <p className="font-thin mb-3">{project.company}</p>
                  <div className="grid grid-cols-2 lg:py-0 py-5 lg:grid-cols-5 gap-3 mb-3">
                    {project.usedLanguages.split(",").map((lang, i) => (
                      <p key={i} className="btn rounded-full h-4 min-h-8">
                        {lang}
                      </p>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/image/logo/goto.png"
                      className="object-contain h-8 w-6"
                      alt="Go to project"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
}

export default Projects;
