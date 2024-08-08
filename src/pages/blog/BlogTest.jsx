import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogTest() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    heading: '',
    title: '',
    description: '',
    blogURL: '',
    date: '',
    blogImages: null,
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
    setFormData({ ...formData, blogImages: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'blogImages') {
        for (let i = 0; i < formData.blogImages.length; i++) {
          formDataToSend.append('blogImages', formData.blogImages[i]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      setLoading(true);
      if (editing) {
        await axios.put(`https://backendportfolio-six.vercel.app/api/blogs/${currentBlogId}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Blog post updated successfully!');
      } else {
        await axios.post('https://backendportfolio-six.vercel.app/api/blogs', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Blog post created successfully!');
      }
      fetchBlogs();
      setFormData({
        heading: '',
        title: '',
        description: '',
        blogURL: '',
        date: '',
        blogImages: null,
      });
      setEditing(false);
      setCurrentBlogId(null);
    } catch (error) {
      console.error('Error submitting blog post:', error);
      setError('Error submitting blog post');
      toast.error('Error submitting blog post');
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://backendportfolio-six.vercel.app/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Error fetching blogs');
      toast.error('Error fetching blogs');
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
      blogImages: null,
    });
    setEditing(true);
    setCurrentBlogId(blog.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backendportfolio-six.vercel.app/api/blogs/${id}`);
      fetchBlogs();
      toast.success('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      setError('Error deleting blog post');
      toast.error('Error deleting blog post');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <form className="grid lg:grid-cols-2 gap-5 px-6 lg:px-36 py-12" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <label className="text-start">Heading:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            type="text"
            required
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
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Description:</label>
          <textarea
            className="p-2 rounded-lg border-2 border-green-500"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
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
            required
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
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Images:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            onChange={handleFileChange}
            type="file"
            multiple
          />
        </div>
        <button className="btn mt-6 bg-green-800" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : editing ? 'Update' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="py-12">Existing Blog Posts</h2>
      {loading ? (
        <div className="text-center flex justify-center items-center h-96">
        <span class="relative flex h-10 w-10">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-10 w-10 bg-green-500"></span>
              </span>
    </div>
      ) : (
        <div className="grid gap-4 px-12 py-12 lg:grid-cols-5">
          {blogs.map((blog) => (
            <div className="flex flex-col gap-2 border-2 border-green-500 p-4 rounded-lg" key={blog.id}>
              <div className="flex overflow-scroll gap-2">
              {blog.blogImages && blog.blogImages.map((img, index) => (
                <img key={index} src={img} alt="Blog Post" />
              ))}
              </div>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogTest;
