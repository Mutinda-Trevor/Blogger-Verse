import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My First Blog",
      body: "lorem ipsum...",
      author: "placeboUser1",
      id: 1,
    },
    {
      title: "Hello World!",
      body: "lorem ipsum...",
      author: "placeboUser1",
      id: 2,
    },
    {
      title: "My Dev Journey",
      body: "lorem ipsum...",
      author: "placeboUser",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs:" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "placeboUser1")}
        title="First Author's Blogs:"
      />
    </div>
  );
};

export default Home;
