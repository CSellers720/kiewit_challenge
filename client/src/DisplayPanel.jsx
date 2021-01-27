import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DisplayPanel = ({ name, age, department }) => {
  const [employeeInfoClass, setEmployeeInfoClass] = useState('employeeInfo');

  useEffect(() => {
    setEmployeeInfoClass('employeeInfo animateEmployee');
  });

  return (
    <div className={employeeInfoClass}>
      <div className="infoDiv">
        Name:
        <span className="infoSpan nameSpan">
          {name}
        </span>
      </div>
      <div className="infoDiv">
        Department:
        <span className="infoSpan">
          {department}
        </span>
      </div>
      <div className="infoDiv">
        Age:
        <span className="infoSpan">
          {age}
        </span>
      </div>
    </div>
  );
};

DisplayPanel.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  department: PropTypes.string.isRequired,
};

export default DisplayPanel;
