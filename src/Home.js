import BlogList from "./BlogList";
import useFetch from "./useFetch";

// Use State Hook

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const [name, setName] = useState("Me");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((e) => e.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   console.log("Use Effect dry-ran");
  // }, [name]);

  return (
    <div className="home">
      {/* Conditional templating in React */}
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
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
