import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageUploader from "../../components/ImageUpload";

const FifthSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://crud-test-delta.vercel.app/projects");
        setProjects(response.data.projects);
      } catch (error) {
        console.error("There was an error fetching the projects!", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between bg-black">
      <div className="text-center flex-col gap-3 items-center flex justify-center">
        <p className="bg-[#374151] px-3 py-1 w-fit rounded-lg ">Work</p>
        <p>Some of the noteworthy projects I have built:</p>
      </div>

      <div className="flex flex-col lg:px-40 py-10 gap-3 text-white">
        <div className="mt-10 flex flex-col gap-3">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-5 text-white">
              <div className="flex lg:flex-row flex-col">
                <div className="flex flex-[.5] gap-3 flex-col bg-[#515f75] rounded-lg rounded-ee-none rounded-tr-none p-2 lg:p-6 w-full">
                  <div className="carousel rounded-box ">
                    <div className="carousel-item w-full">
                      <img src={project.image} className="w-full" alt="Project" />
                    </div>
                    <div className="carousel-item w-full">
                      <img src={ImageUploader} className="w-full" alt="Project" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-[.5] rounded-lg rounded-ss-none rounded-es-none gap-3 flex-col bg-[#2f5d9e] p-6 w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-2xl ">{project.heading}</p>
                    <p className="w-3 bg-green-600 rounded-full h-3"></p>
                  </div>
                  <p className="font-thin">{project.caption}</p>
                  <div className="flex gap-3">
                    {project.languages.split(",").map((lang, i) => (
                      <p key={i} className="btn rounded-full h-4 min-h-8">{lang}</p>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img src="/image/logo/goto.png" className="object-contain h-8 mt-6 w-10" alt="Go to project" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
