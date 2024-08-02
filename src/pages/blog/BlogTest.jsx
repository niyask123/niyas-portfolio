import React, { useState, useEffect } from 'react';

function BlogTest() {
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [blogUrlLinks, setBlogUrlLinks] = useState('');
  const [blogPostDate, setBlogPostDate] = useState('');
  const [editingPost, setEditingPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5222/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('blogUrlLinks', blogUrlLinks);
    formData.append('blogPostDate', blogPostDate);
    if (image) formData.append('image', image);

    const endpoint = editingPost ? 'http://localhost:5222/api/posts/update' : 'http://localhost:5222/api/posts';
    try {
      const response = await fetch(endpoint, {
        method: editingPost ? 'PUT' : 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.json();
      if (editingPost) {
        setPosts(prevPosts =>
          prevPosts.map(post => (post.id === result.id ? result : post))
        );
      } else {
        setPosts(prevPosts => [...prevPosts, result]);
      }
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  };

  const handleEdit = (post) => {
    setHeading(post.heading);
    setTitle(post.title);
    setDescription(post.description);
    setBlogUrlLinks(post.blogUrlLinks);
    setBlogPostDate(post.blogPostDate);
    setImage(null);
    setEditingPost(post);
  };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5222/api/posts/${postId}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Failed to delete post:', error);
      alert('Failed to delete post');
    }
  };

  const resetForm = () => {
    setHeading('');
    setTitle('');
    setDescription('');
    setBlogUrlLinks('');
    setBlogPostDate('');
    setImage(null);
    setEditingPost(null);
  };

  return (
    <div className="App">
      <form className="grid grid-cols-2 gap-5 px-36" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <label className="text-start">Heading:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Title:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Description:</label>
          <textarea
            className="p-2 rounded-lg border-2 border-green-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Blog URL Links:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            type="text"
            value={blogUrlLinks}
            onChange={(e) => setBlogUrlLinks(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Blog Post Date:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            type="date"
            value={blogPostDate}
            onChange={(e) => setBlogPostDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-start">Image:</label>
          <input
            className="p-2 rounded-lg border-2 border-green-500"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button className="btn mt-6 bg-green-800" type="submit">
          {editingPost ? 'Update' : 'Submit'}
        </button>
      </form>

      <div className="posts mt-10">
        {posts.map(post => (
          <div key={post.id} className="border p-4 mb-4">
            <h2>{post.heading}</h2>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.blogUrlLinks}</p>
            <p>{new Date(post.blogPostDate).toLocaleDateString()}</p>
            {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
            <button onClick={() => handleEdit(post)} className="btn bg-blue-500">Edit</button>
            <button onClick={() => handleDelete(post.id)} className="btn bg-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogTest;
