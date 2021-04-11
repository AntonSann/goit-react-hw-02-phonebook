import React from 'react';
import shortid from 'shortid';
import FilterStyle from "./Filter.module.css";

const Filter = ({value, onChangeFilter}) =>{
    const filterInputId = shortid.generate();
    return(<div className={FilterStyle.filter}>
        <h2>Contacts</h2>
    <label  htmlFor={filterInputId}>Filter by name
    <input
      type="text"
      name="filter"
      required
      value={value}
      id={filterInputId}
      onChange={onChangeFilter}
    /></label></div>
    )
}

export default Filter;