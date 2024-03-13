import { IoBookmarkOutline } from "react-icons/io5";

import PropTypes from "prop-types";
const Blog = ({ blog,handleBookmarks,handleReadingTime}) => {

  const { cover, title,author_img,author,hashtags,reading_time,post_date} = blog

  return (
    <div className="border-b-2 mb-10 p-2 space-y-4">
      <img className="rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
        <div className=" ">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="font-semibold opacity-50">{post_date}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="opacity-70 pr-2">{reading_time} min read</span>
        <button className="text-xl">
           <IoBookmarkOutline onClick={()=>handleBookmarks(blog)}></IoBookmarkOutline> 
           </button>
      </div>
      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>
        {
          hashtags.map((has,idx)=><span key={idx}><a className="mr-2 text-[#11111199]" href="#">#{has}</a></span>)
        }
      </p>
      <button onClick={()=>handleReadingTime(reading_time)} className="text-2xl font-bold text-blue-600 underline"><a  href="#">Mark as read</a></button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks:PropTypes.func,
  handleReadingTime:PropTypes.func,
};
export default Blog;
