import React, { useState, useEffect } from "react";
import axios from "axios";
import bgImage from "../../assets/bg1.png";

function FifthSection() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 7; // Set the number of projects per page

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://backendportfolio-six.vercel.app/api/projects"
      );
      // Sort projects by updatedAt date in descending order (newest first)
      const sortedProjects = response.data.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
      setProjects(sortedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div
        className="lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between"
        style={{
          // backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center flex-col gap-3 items-center flex justify-center text-white">
          <span className="py-1 font-semibold text-3xl"> My Works</span>
          <p className="text-2xl font-semibold">
            <span className="text-5xl text-yellow-400">{projects.length}</span>
            <span className="text-red-300 text-3xl">+</span> Projects{" "}
          </p>
          <p>Already I have completed works:</p>
        </div>

        <div className="flex flex-col lg:px-40 py-10 gap-3 text-white">
          <div className="mt-10 flex flex-col gap-3">
            {currentProjects.map((project, index) => (
              <div key={project.id} className="flex flex-col gap-5 text-white">
                {index % 2 === 0 ? (
                  <div className="lg:grid-cols-2 border-2 rounded-lg border-white/20 grid lg:flex-row flex-col">
                    <div className="flex flex-[.5] gap-3 flex-col items-center justify-center border-r-2 lg:border-dashed border-white/20  p-2 lg:p-6 w-full">
                      <div className="carousel rounded-box">
                        {project.projectImages
                          .slice()
                          .reverse()
                          .map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="carousel-item w-full"
                            >
                              <img
                                src={image}
                                className="w-full"
                                alt={`Project ${index} Image ${imgIndex}`}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="flex flex-[.5] gap-3 flex-col p-6 w-full">
                      <div className="flex justify-between w-full">
                        <p className="text-2xl">{project.title}</p>
                        <p className="w-3 bg-green-600 rounded-full h-3"></p>
                      </div>
                      <p className="font-thin">{project.company}</p>
                      <p className="text-sm">
                        {new Date(project.updatedAt).toLocaleDateString()}
                      </p>{" "}
                      {/* Display the date */}
                      <div className="grid grid-cols-2 lg:py-0 py-5 lg:grid-cols-4 gap-3">
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
                          className="object-contain h-8  w-6"
                          alt="Go to project"
                        />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 lg:flex-row flex-col border-2 rounded-lg border-white/20 ">
                    <div className="flex flex-[.5] gap-3 lg:hidden flex-col bg-[#515f75] p-2 lg:p-6 w-full">
                      <div className="carousel rounded-box">
                        {project.projectImages
                          .slice()
                          .reverse()
                          .map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="carousel-item w-full"
                            >
                              <img
                                src={image}
                                className="w-full"
                                alt={`Project ${index} Image ${imgIndex}`}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="flex flex-[.5] gap-3 flex-col  p-6 w-full lg:border-r-2 border-dashed border-white/20">
                      <div className="flex justify-between w-full">
                        <p className="text-2xl">{project.title}</p>
                        <p className="w-3 bg-green-600 rounded-full h-3"></p>
                      </div>
                      <p className="font-thin">{project.company}</p>
                      <p className="text-sm">
                        {new Date(project.updatedAt).toLocaleDateString()}
                      </p>{" "}
                      {/* Display the date */}
                      <div className="grid grid-cols-2 lg:py-0 py-5 lg:grid-cols-4 gap-3">
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
                          className="object-contain h-8  w-6"
                          alt="Go to project"
                        />
                      </a>
                    </div>
                    <div className="flex-[.5] gap-3 lg:flex items-center justify-center hidden flex-col p-2 lg:p-6 w-full">
                      <div className="carousel rounded-box">
                        {project.projectImages
                          .slice()
                          .reverse()
                          .map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="carousel-item w-full"
                            >
                              <img
                                src={image}
                                className="w-full"
                                alt={`Project ${index} Image ${imgIndex}`}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="btn mr-3 btn-warning"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="btn ml-3 btn-warning"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
}

export default FifthSection;
