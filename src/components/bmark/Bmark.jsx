
import PropTypes from 'prop-types';

Bmark.propTypes = {
    bmark : PropTypes.object
};

function Bmark({bmark}) {
    const {title}=bmark
    return (
        <div className='bg-gray-100 rounded-lg p-8 mb-4'>
            <h3>{title}</h3>
        </div>
    );
}

export default Bmark;