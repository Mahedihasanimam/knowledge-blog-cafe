import PropTypes from 'prop-types';
import Bmark from '../bmark/Bmark';

const Bookmark = ({bookmarks,readingTime}) => {
    return (
        <div className="lg:w-2/6 w-full bg-gray-200 p-4 rounded-md">
            <div className='border-2 border-[#6047EC] bg-[#6047EC1A] rounded-lg'>
                <h3 className='text-2xl font-bold p-4 text-[#6047EC]'>Spent time on read : {readingTime} min</h3>
            </div>
            <h3 className='text-3xl font-bold p-4'>bookmarked : {bookmarks.length}</h3>
            {
                bookmarks.map((bmark,idx)=><Bmark key={idx} bmark={bmark}></Bmark>)
            }
        </div>
    );
};
Bookmark.propTypes = {
    bookmarks : PropTypes.func,
    readingTime : PropTypes.func
};
export default Bookmark;