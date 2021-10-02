import React from 'react';

const MySelf = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>My Self</h2>
            <small>House: {house}</small>
        </div>
    );
};

export default MySelf;