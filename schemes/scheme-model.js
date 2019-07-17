const knex = require('knex');
const db = knex(require('../knexfile').development);

function find() {
  return db('schemes');
 }

 function findById(id) {
   return db('schemes').where({ id })
 }

function findSteps(id) {
  return db.select('scheme_name', "step_number", "instructions","steps.id").from('steps')
  .innerJoin("schemes", 'schemes.id', 'steps.scheme_id' ).where({ scheme_id: id });
}

function add({ scheme_name }) {
 return db('schemes').insert({ scheme_name });
}

function update({ scheme_name }, id) {
  return db('schemes').where({ id }).update({ scheme_name });
}

function remove(id) {
 return db('schemes').where({ id }).delete();
}


module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove

};