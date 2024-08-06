import React, { useState, useEffect } from "react";
import axios from "axios";

function FifthSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("https://backendportfolio-six.vercel.app/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }

  };

  return (
    <>
      <div className="lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between">
        <div className="text-center flex-col gap-3 items-center flex justify-center">
          <span className="py-1 font-semibold text-3xl"> My Works</span>
          <p>Already I have completed works:</p>
        </div>

        <div className="flex flex-col lg:px-40 py-10 gap-3 text-white">
          <div className="mt-10 flex flex-col gap-3">
            {projects.map((project, index) => (
              <div key={project.id} className="flex flex-col gap-5 text-white">
                {index % 2 === 0 ? (
                  <div className=" lg:grid-cols-2 grid lg:flex-row flex-col">
                    <div className="flex flex-[.5] gap-3 flex-col bg-[#515f75] p-2 lg:p-6 w-full">
                      <div className="carousel rounded-box">
                        {project.projectImages.slice().reverse().map((image, imgIndex) => (
                          <div key={imgIndex} className="carousel-item w-full">
                            <img
                              src={image}
                              className="w-full"
                              alt={`Project ${index} Image ${imgIndex}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-[.5] gap-3 flex-col bg-[#2f5d9e] p-6 w-full">
                      <div className="flex justify-between w-full">
                        <p className="text-2xl">{project.title}</p>
                        <p className="w-3 bg-green-600 rounded-full h-3"></p>
                      </div>
                      <p className="font-thin">{project.company}</p>
                      <div className="grid grid-cols-5 gap-3">
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
                  <div className="grid lg:grid-cols-2 lg:flex-row flex-col">
                    <div className="flex flex-[.5] gap-3 flex-col bg-[#2f5d9e] p-6 w-full">
                      <div className="flex justify-between w-full">
                        <p className="text-2xl">{project.title}</p>
                        <p className="w-3 bg-green-600 rounded-full h-3"></p>
                      </div>
                      <p className="font-thin">{project.company}</p>
                      <div className="grid grid-cols-5 gap-3">
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
                    <div className="flex flex-[.5] gap-3 flex-col bg-[#515f75] p-2 lg:p-6 w-full">
                    <div className="carousel rounded-box">
  {project.projectImages.slice().reverse().map((image, imgIndex) => (
    <div key={imgIndex} className="carousel-item w-full">
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
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
}

export default FifthSection;
