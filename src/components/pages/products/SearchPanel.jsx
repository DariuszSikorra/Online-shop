import React from "react";
import "../../App.scss";
import { Button, Input, Select } from "../../App.style"


const SearchPanel = (props) => {
  return (
    <div className="SearchPanel">
      <Input placeholder="Search" onChange={props.handleSearch} />
      <Button className="button" >Search</Button>
      <hr />
      Posortuj wg.
      <Select>
        <option value="Magic">Magicznie</option>
        <option value="Published Date">Data zamieszczenia</option>
        <option value="Price">Cena</option>
      </Select>
      <hr/>
      <p>Kategorie</p>
      <Select>
        <option>Tusze</option>
        <option>Tonery</option>
        <option>Akcesoria</option>
      </Select>
    </div>
  );
};

export default SearchPanel;
