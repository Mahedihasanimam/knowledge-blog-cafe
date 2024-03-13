
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='lg:flex justify-between gap-4'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>

      </div>
    </>
  )
}

export default App
