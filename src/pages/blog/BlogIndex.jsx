import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogIndex = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://backendportfolio-six.vercel.app/api/blogs");
      const sortedBlogs = response.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Error fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="text-center flex-col gap-3 py-8 items-center flex justify-center">
        <span className="py-1 font-semibold text-3xl"> Our Blogs</span>
        <p>Personal Blogs and notes:</p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <div className="text-center flex justify-center items-center h-96">
        <span class="relative flex h-10 w-10">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-10 w-10 bg-green-500"></span>
              </span>
    </div>
      ) : (
        <div className="lg:px-20 px-3 py-12">
          <div className="carousel carousel-end flex p-2 ">
            {blogs.map((blog) => (
              <div className="carousel-item py-6" key={blog.id}>
                <div className="flex flex-col border-2  hover:shadow-xl rounded-2xl mx-2 p-4 lg:w-72 lg:h-full">
                  <div className="flex py-3 flex-gap-3 justify-between">
                    <h3 className="text-xl font-bold">{blog.heading}</h3>
                    <p>{new Date(blog.date).toLocaleDateString()}</p>
                  </div>
                  {blog.blogImages && blog.blogImages.length > 0 && (
                    <div className="flex gap-2">
                      <div className="carousel carousel-vertical gap-2 rounded-box w-full h-80">
                        {blog.blogImages.map((img, index) => (
                          <div key={index} className="carousel-item w-full">
                            <img
                              src={img}
                              alt={`Blog Post ${index}`}
                              className="object-cover rounded-lg h-80 w-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-4 flex flex-col gap-3">
                    <p className="text-lg font-semibold text-start">
                      {blog.title}
                    </p>
                    <p className="text-sm text-start">{blog.description}</p>
                    <code>
                    <p className="text-end">
                      <Link
                        to={blog.blogURL}
                        className="text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Post
                      </Link>
                    </p>
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <hr className="border-[#1d232a] mx-6" />
      <hr className="border-[#ffffff] mx-6" />
    </div>
  );
};

export default BlogIndex;
