const jwt = require('jsonwebtoken')
const { UsuariosRepositorio } = require('../repositorios/usuarios-repositorio')

const verificaLogin = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json('Não autorizado')
  }

  const usuariosRepositorio = new UsuariosRepositorio()

  try {
    const token = authorization.replace('Bearer ', '').trim()

    const { id } = jwt.verify(token, process.env.JWT_SECRET)

    const { usuario } = await usuariosRepositorio.encontrarPeloId(id)

    if (!usuario) {
      return res.status(404).json('Usuario não encontrado')
    }

    delete usuario.senha

    req.usuario = usuario

    next()
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' })
  }
}

module.exports = verificaLogin
