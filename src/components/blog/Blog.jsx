import PropTypes from "prop-types";
const Blog = ({ blog }) => {

  const { cover, title } = blog;

  return (
    <div className="border-b-2 mb-4 p-2">
      <img className="rounded-lg" src={cover} alt="" />
      <h3 className="text-4xl font-bold">{title}</h3>
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
