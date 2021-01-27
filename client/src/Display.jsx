import React from 'react';

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
  console.log(ageFiltered);
  const dptFiltered = filterByDpt(ageFiltered, dptFilter, 'department');

  return dptFiltered.map((result) => (
    <div className="employeeInfo">
      <div className="infoDiv">
        Name:
        <span className="infoSpan nameSpan">
          {result.name}
        </span>
      </div>
      <div className="infoDiv">
        Department:
        <span className="infoSpan">
          {result.department}
        </span>
      </div>
      <div className="infoDiv">
        Age:
        <span className="infoSpan">
          {result.age}
        </span>
      </div>
    </div>
  ));
};

export default Display;
