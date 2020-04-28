
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (t){
    t.string('id').primary();
    t.string('name').notNullable();
    t.string('email').notNullable();
    t.integer('whatsapp').notNullable();
    t.string('city').notNullable();
    t.string('uf', 2).notNullable();
  }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
