import React from 'react';

const SortFilterBar = ({ handleChange, data}) => {
  return(
    <div className="columns">
      <div className="field column is-5">
        <input className="input" placeholder="Refined Search" name="search" onChange={handleChange} value={data.search}/>
      </div>
      <div className="control">
        <div className="select">
          <select onChange={handleChange} name="sort"
            value={data.sort}>
            <option value="name|asc">Name (A - Z)</option>
            <option value="name|desc">Name (Z - A)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortFilterBar;
