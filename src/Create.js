import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [author, setAuthor] = useState("PlaceboUSer1");
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
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
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
