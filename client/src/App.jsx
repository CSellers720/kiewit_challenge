import React, { useState } from 'react';
import Title from './Title.jsx';
import Form from './Form.jsx';
//import Display from './Display.jsx';

const App = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [dptFilter, setDptFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  return (
    <div className="appDiv">
      <Title />
      <Form setters={{ setNameQuery, setDptFilter, setAgeFilter }} />
      {/* <Display /> */}
    </div>
  );
};

export default App;
