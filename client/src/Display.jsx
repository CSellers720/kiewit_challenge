import React from 'react';
import DisplayPanel from './DisplayPanel.jsx';

const filterByAge = (array, filter) => {
  if (filter > 0) {
    return array.filter((item) => item.age === filter);
  }
  return array;
};

const filterByDpt = (array, filter) => {
  if (filter.length > 0) {
    return array.filter((item) => !!item.department.match(new RegExp(filter, 'i')));
  }
  return array;
};

const Display = ({ results, dptFilter, ageFilter }) => {
  const ageFiltered = filterByAge(results, ageFilter, 'age');
  const dptFiltered = filterByDpt(ageFiltered, dptFilter, 'department');

  return dptFiltered.map((result) => (
    <DisplayPanel
      name={result.name}
      age={result.age}
      department={result.department}
      key={result.name + result.department}
    />
  ));
};

export default Display;
