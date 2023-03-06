import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
  return (
    <div className="search_container">
      <h1>MoviEHadda</h1>
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
