const data = require('./data.js');

const getAll = () => data;

const getByName = (nameQuery) => data.filter((employee) => !!employee.name.match(new RegExp(nameQuery, 'i')));

module.exports = {
  getAll,
  getByName,
};
