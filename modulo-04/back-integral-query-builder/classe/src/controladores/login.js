const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UsuariosRepositorio } = require('../repositorios/usuarios-repositorio')

const login = async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(404).json('É obrigatório email e senha')
  }

  const usuariosRepositorio = new UsuariosRepositorio()

  try {
    const { usuario } = await usuariosRepositorio.encontrarPeloEmail(email)

    if (!usuario) {
      return res.status(400).json('Email e senha não confere')
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

    if (!senhaCorreta) {
      return res.status(400).json('Email e senha não confere')
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    })

    const { senha: _, ...dadosUsuario } = usuario

    return res.status(200).json({
      usuario: dadosUsuario,
      token,
    })
  } catch (error) {
    console.log(error.message)

    return res.status(500).json({ mensagem: 'Erro interno no servidor.' })
  }
}

module.exports = {
  login,
}
