import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const { setNameQuery, setDptFilter, setAgeFilter } = props.setters;

  return (
    <div className="formDiv">
      <form className="myForm">
        <label htmlFor="name">
          Name:
          <input
            className="input"
            type="text"
            name="name"
            onChange={(e) => setNameQuery(e.target.value)}
          />
        </label>
        <label htmlFor="dpt">
          Department:
          <input
            className="input"
            type="text"
            name="dpt"
            onChange={(e) => setDptFilter(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            className="input"
            type="text"
            name="age"
            onChange={(e) => setAgeFilter(e.target.value)}
          />
        </label>

      </form>
    </div>
  );
};

export default Form;
