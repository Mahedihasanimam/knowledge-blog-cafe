
import {useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setbookmarks]=useState([]);
  const [readingTime,setreadingTime]=useState(0)

const handleBookmarks=blog=>{
 const newbookmarks=[...bookmarks,blog];
 setbookmarks(newbookmarks)
}
const handleReadingTime=(time)=>{
  setreadingTime(readingTime+time)
  console.log('mark as read',time)
}
  return (
    <>
      <Header></Header>
      <div className='lg:flex justify-between gap-2'>
      <Blogs handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>

      </div>
    </>
  )
}

export default App
