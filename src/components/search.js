import React from 'react'

/**
* @author
* @function Search
**/

const Search = ({onSearchChange}) => {
  return(
    <div className="pa2">
        <input
        className="pa3 ba b--green bg-lightest-blue"
         type="search" placeholder="search robo..."
        onChange={onSearchChange}

         />
    </div>
   )

 }

export default Search;