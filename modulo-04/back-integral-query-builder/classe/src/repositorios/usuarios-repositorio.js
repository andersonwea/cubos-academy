/* eslint-disable no-useless-constructor */
const { knex } = require('../conexao')

class UsuariosRepositorio {
  constructor() {}

  async criar(data) {
    const { nome, email, senha, nome_loja } = data

    const usuario = await knex('usuarios')
      .insert({
        nome,
        email,
        senha,
        nome_loja,
      })
      .returning('*')

    return usuario
  }

  async encontrarPeloEmail(email) {
    const usuario = await knex('usuarios')
      .select('*')
      .where({
        email,
      })
      .first()

    if (!usuario) {
      return null
    }

    return { usuario }
  }

  async encontrarPeloId(id) {
    const usuario = await knex('usuarios')
      .select('*')
      .where({
        id,
      })
      .first()

    if (!usuario) {
      return null
    }

    return { usuario }
  }

  async atualizar(id, data) {
    const usuario = await knex('usuarios').update(data).where({
      id,
    })

    return { usuario }
  }
}

module.exports = { UsuariosRepositorio }
