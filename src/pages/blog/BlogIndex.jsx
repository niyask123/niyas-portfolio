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
      const response = await axios.get("https://dbblog.vercel.app/api/blogs");
      setBlogs(response.data);
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
        <p className="bg-[#374151] text-white px-3 py-1 w-fit rounded-lg ">
          Our Blogs
        </p>
        <p>Personal Blogs and notes:</p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="lg:px-20 px-3 py-12">
          <div className="carousel carousel-end flex p-2">
            {blogs.map((blog) => (
              <div className="carousel-item" key={blog.id}>
                <div className="flex flex-col border-2 rounded-2xl mx-2 p-4  lg:w-72">
                  <div className="flex py-3 flex-gap-3 justify-between">
                    <h3 className="text-xl font-bold ">{blog.heading}</h3>
                    <p>{new Date(blog.date).toLocaleDateString()}</p>
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.heading}
                    className="w-full object-cover h-64 rounded-lg"
                  />
                  <div className="mt-4 flex flex-col gap-3">
                    <p className="text-lg font-semibold text-start">
                      {blog.title}
                    </p>
                    <p className="text-sm text-start">{blog.description}</p>

                    <p className="text-end">
                      <Link
                        to={blog.blogURL}
                        className="text-blue-500 text-end"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    <hr className="border-[#1d232a] mx-6" />
    </div>
    
  );
};

export default BlogIndex;
