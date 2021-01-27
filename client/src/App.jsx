import React, { useState } from 'react';
import Title from './Title.jsx';
import Form from './Form.jsx';
import Display from './Display.jsx';

const App = () => {
  const [dptFilter, setDptFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="appWrapper">
      <div className="appDiv">
        <Title />
        <Form
          setDptFilter={setDptFilter}
          setAgeFilter={setAgeFilter}
          setResults={setResults}
        />
      </div>
      <div className="displayWrapper">
        <Display
          results={results}
          dptFilter={dptFilter}
          ageFilter={ageFilter}
        />
      </div>
    </div>
  );
};

export default App;
