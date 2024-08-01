import React, { useState, useEffect } from "react";
import axios from "axios";

function BlogTest() {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [blogUrlLinks, setBlogUrlLinks] = useState("");
  const [blogPostDate, setBlogPostDate] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://blog-backend-beta-one.vercel.app/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("blogPostDate", blogPostDate);
    formData.append("blogUrlLinks", blogUrlLinks);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (editingPost) {
        await axios.put(
          `https://blog-backend-beta-one.vercel.app/posts/${editingPost.id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        alert("Blog post successfully updated!");
      } else {
        await axios.post(
          "https://blog-backend-beta-one.vercel.app/upload",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        alert("Blog post successfully uploaded!");
      }

      setHeading("");
      setTitle("");
      setDescription("");
      setImage(null);
      setBlogUrlLinks("");
      setBlogPostDate("");
      setEditingPost(null);
      fetchPosts();
    } catch (error) {
      console.error("Error uploading or updating blog post:", error);
      alert("Error uploading or updating blog post. Please try again.");
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
      await axios.delete(`https://blog-backend-beta-one.vercel.app/posts/${postId}`);
      alert("Blog post deleted!");
      fetchPosts();
    } catch (error) {
      console.error("Error deleting blog post:", error);
      alert("Error deleting blog post. Please try again.");
    }
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
          {editingPost ? "Update" : "Submit"}
        </button>
      </form>
      <h2 className="py-12">Existing Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <div className="grid gap-3 grid-cols-5 px-36 py-6" key={post.id}>
            <div className="flex flex-col gap-2 border-2 border-green-500 p-4 rounded-lg">
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
              <h3>Header : {post.heading}</h3>
              <p>Title : {post.title}</p>
              <p>Description : {post.description}</p>
              <p>Post Link : {post.blogUrlLinks}</p>
              <p>Date : {new Date(post.blogPostDate).toLocaleDateString()}</p>
              <div className="flex justify-center gap-3">
                <button
                  className="btn bg-green-200"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </button>
                <button
                  className="btn bg-red-200"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogTest;
