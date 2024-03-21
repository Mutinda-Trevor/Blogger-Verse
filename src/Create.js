import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [author, setAuthor] = useState("PlaceboUSer1");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}>
          required
        </textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => e.target.value}>
          <option value="PlaceboUSer1">PlaceboUSer1</option>
          <option value="PlaceboUSer2">PlaceboUSer2</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Processing...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
