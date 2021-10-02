import React from 'react';

const Special = (props) => {
    const { ornaments } = props;
    return (
        <div>
            <h3>Special:</h3>
            <small>{ornaments}</small>
        </div>
    );
};

export default Special;