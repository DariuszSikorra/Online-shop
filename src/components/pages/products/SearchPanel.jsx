import React from "react";
import "../../App.scss";

const SearchPanel = (props) => {
  return (
    <div className="SearchPanel">
      <input placeholder="Search" onChange={props.handleSearch} />
      <button className="button" >Search</button>
      <hr />
      Posortuj wg.
      <select>
        <option value="Magic">Magicznie</option>
        <option value="Published Date">Data zamieszczenia</option>
        <option value="Price">cena</option>
      </select>
      <hr/>
      <p>Categories</p>
    </div>
  );
};

export default SearchPanel;
