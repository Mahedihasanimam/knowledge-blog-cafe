import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({ handleBookmarks,handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="lg:w-3/5 w-full">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};
Blog.propTypes = {
  handleBookmarks: PropTypes.func
};
Blogs.propTypes = {
    handleBookmarks : PropTypes.func,
    handleReadingTime : PropTypes.func
};
export default Blogs;