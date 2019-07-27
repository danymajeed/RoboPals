import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
          <div>
				<input
				className="pa3 ma3"
				type="search"
				placeholder="Enter Robot Name"
				onChange={searchChange} />
          </div>
		);
}

export default SearchBox