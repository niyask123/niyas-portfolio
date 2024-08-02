import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogTest() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    heading: '',
    title: '',
    description: '',
    blogURL: '',
    date: '',
    image: null,
  });
  const [editing, setEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      setLoading(true);
      if (editing) {
        await axios.put(`http://localhost:5801/api/blogs/${currentBlogId}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type
          },
        });
      } else {
        await axios.post('http://localhost:5801/api/blogs', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type
          },
        });
      }
      fetchBlogs();
      setFormData({
        heading: '',
        title: '',
        description: '',
        blogURL: '',
        date: '',
        image: null,
      });
      setEditing(false);
      setCurrentBlogId(null);
    } catch (error) {
      console.error('Error submitting blog post:', error);
      setError('Error submitting blog post');
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5801/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Error fetching blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      heading: blog.heading,
      title: blog.title,
      description: blog.description,
      blogURL: blog.blogURL,
      date: new Date(blog.date).toISOString().split('T')[0],
      image: null, // This should be null or reset
    });
    setEditing(true);
    setCurrentBlogId(blog.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5801/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      setError('Error deleting blog post');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="App">
      <form className="grid grid-cols-2 gap-5 px-36" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <label className="text-start">Heading:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Title:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Description:</label>
          <textarea
            className="p-2 rounded-lg border-2 border-green-500"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Blog URL Links:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            name="blogURL"
            value={formData.blogURL}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Blog Post Date:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Image:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            onChange={handleFileChange}
            type="file"
          />
        </div>
        <button className="btn mt-6 bg-green-800" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : editing ? 'Update' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="py-12">Existing Blog Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <div className="grid gap-3 grid-cols-5 px-36 py-6" key={blog.id}>
              <div className="flex flex-col gap-2 border-2 border-green-500 p-4 rounded-lg">
                <img src={blog.image} alt="Blog Post" />
                <h3>Header: {blog.heading}</h3>
                <p>Title: {blog.title}</p>
                <p>Description: {blog.description}</p>
                <p>
                  Post Link: <a href={blog.blogURL} target="_blank" rel="noopener noreferrer">Read more</a>
                </p>
                <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
                <div className="flex justify-center gap-3">
                  <button className="btn bg-green-200" onClick={() => handleEdit(blog)}>Edit</button>
                  <button className="btn bg-red-200" onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogTest;
