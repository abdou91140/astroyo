import React from 'react';

const SearchBar = ({ handleChange, value }) => {
    return (
        <input
            type="text"
            className="input"
            placeholder="Search for signs..."
            value={value}
            onChange={handleChange} // Call the handler when input changes
        />
    );
};

export default SearchBar;
