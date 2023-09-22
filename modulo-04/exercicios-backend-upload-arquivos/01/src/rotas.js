const express = require('express')
const usuarios = require('./controladores/usuarios')
const login = require('./controladores/login')
const produtos = require('./controladores/produtos')
const verificaLogin = require('./filtros/verificaLogin')
const { upload } = require('./filtros/upload')

const rotas = express()

// cadastro de usuario
rotas.post('/usuarios', usuarios.cadastrarUsuario)

// login
rotas.post('/login', login.login)

// filtro para verificar usuario logado
rotas.use(verificaLogin)

// obter e atualizar perfil do usuario logado
rotas.get('/perfil', usuarios.obterPerfil)
rotas.put('/perfil', usuarios.atualizarPerfil)

// crud de produtos
rotas.get('/produtos', produtos.listarProdutos)
rotas.get('/produtos/:id', produtos.obterProduto)
rotas.post('/produtos', upload.single('imagem'), produtos.cadastrarProduto)
rotas.put('/produtos/:id', produtos.atualizarProduto)
rotas.delete('/produtos/:id', produtos.excluirProduto)

rotas.patch(
  '/produtos/:id/imagem',
  upload.single('imagem'),
  produtos.atualizarImagem,
)
rotas.delete('/produtos/:id/imagem', produtos.deletarImagem)

module.exports = rotas
