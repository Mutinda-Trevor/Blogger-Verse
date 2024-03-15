import { useEffect, useState } from "react";
import BlogList from "./BlogList";

// Use State Hook

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // const [name, setName] = useState("Me");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((e) => e.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   console.log("Use Effect dry-ran");
  // }, [name]);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs:"
          // handleDelete={handleDelete}
        />
      )}
      {/* <button onClick={() => setName("Them")}>Change Name</button>
      <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "placeboUser1")}
        title="First Author's Blogs:"
      /> */}
    </div>
  );
};

export default Home;
