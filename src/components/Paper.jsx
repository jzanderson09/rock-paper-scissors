import React from 'react';
import paper from '../images/paper.jpg';

const Paper = () => {
    return (
        <div className='choice'>
            <img
                className="paper"
                alt="paper"
                src={paper}
            />
        </div>
    );
};

export default Paper;