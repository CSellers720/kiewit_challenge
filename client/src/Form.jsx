import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Form = ({
  setAgeFilter, setDptFilter, setResults,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    params.name = e.target[0].value;
    setDptFilter(e.target[1].value);
    setAgeFilter(Number(e.target[2].value));
    axios.get('/get', { params })
      .then((data) => {
        setResults(data.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('ERROR while making a get request during form submission', err);
      });
  };

  useEffect(() => {
    axios.get('/get', {
      params: {
        age: 0,
        department: '',
        name: '',
      },
    })
      .then((data) => {
        setResults(data.data);
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log('ERROR while making a get request during form submission', err);
      });
  }, []);

  return (
    <div className="formDiv" onSubmit={(e) => handleSubmit(e)}>
      <form className="myForm">
        <label htmlFor="name">
          Name:
          <input
            className="input"
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="dpt">
          Department:
          <input
            className="input"
            type="text"
            name="dpt"
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            className="input"
            type="number"
            name="age"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

Form.propTypes = {
  setAgeFilter: PropTypes.func.isRequired,
  setDptFilter: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default Form;
