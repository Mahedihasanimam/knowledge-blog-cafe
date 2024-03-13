import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('knowledge.json')
        .then(res=>res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="lg:w-3/5 w-full">
            {
                blogs.map(blog=>(<Blog key={blog.id} blog={blog}></Blog>))
            }
        </div>
    );
};

export default Blogs;