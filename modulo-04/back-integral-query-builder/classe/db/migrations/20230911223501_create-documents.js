/* eslint-disable prettier/prettier */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary()
    table.text('nome').notNullable()
    table.text('nome_loja').notNullable()
    table.text('email').notNullable()
    table.text('senha').notNullable()
  })

  await knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary()
    table.integer('usuario_id').unsigned()
    table.foreign('usuario_id').references('usuarios.id')
    table.integer('estoque').notNullable()
    table.integer('preco').notNullable()
    table.text('categoria').notNullable()
    table.text('descricao').notNullable()
    table.text('imagem').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable('usuarios')

  await knex.schema.dropTable('produtos')
}
