const knex = require('../conexao')
const { deleteImagemBucket } = require('../utils/delete-imagem-bucket')
const { uploadImagemBucket } = require('../utils/upload-imagem-bucket')

const listarProdutos = async (req, res) => {
  const { usuario } = req
  const { categoria } = req.query

  try {
    const produtos = await knex('produtos')
      .where({ usuario_id: usuario.id })
      .where((query) => {
        if (categoria) {
          return query.where('categoria', 'ilike', `%${categoria}%`)
        }
      })

    return res.status(200).json(produtos)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const obterProduto = async (req, res) => {
  const { usuario } = req
  const { id } = req.params

  try {
    const produto = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first()

    if (!produto) {
      return res.status(404).json('Produto não encontrado')
    }

    return res.status(200).json(produto)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const cadastrarProduto = async (req, res) => {
  const { usuario } = req
  const { nome, estoque, preco, categoria, descricao } = req.body
  const imagem = req.file

  if (!nome) {
    return res.status(404).json('O campo nome é obrigatório')
  }

  if (!estoque) {
    return res.status(404).json('O campo estoque é obrigatório')
  }

  if (!preco) {
    return res.status(404).json('O campo preco é obrigatório')
  }

  if (!descricao) {
    return res.status(404).json('O campo descricao é obrigatório')
  }

  try {
    const imagemUrl = uploadImagemBucket(imagem)

    const produto = await knex('produtos')
      .insert({
        usuario_id: usuario.id,
        nome,
        estoque,
        preco,
        categoria,
        descricao,
        imagem: imagemUrl,
      })
      .returning('*')

    if (!produto) {
      return res.status(400).json('O produto não foi cadastrado')
    }

    return res.status(200).json(produto)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const atualizarProduto = async (req, res) => {
  const { usuario } = req
  const { id } = req.params
  const { nome, estoque, preco, categoria, descricao } = req.body

  if (!nome && !estoque && !preco && !categoria && !descricao) {
    return res
      .status(404)
      .json('Informe ao menos um campo para atualizaçao do produto')
  }

  try {
    const produtoEncontrado = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first()

    if (!produtoEncontrado) {
      return res.status(404).json('Produto não encontrado')
    }

    const produto = await knex('produtos').where({ id }).update({
      nome,
      estoque,
      preco,
      categoria,
      descricao,
    })

    if (!produto) {
      return res.status(400).json('O produto não foi atualizado')
    }

    return res.status(200).json('produto foi atualizado com sucesso.')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const excluirProduto = async (req, res) => {
  const { usuario } = req
  const { id } = req.params

  try {
    const produtoEncontrado = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id,
      })
      .first()

    if (!produtoEncontrado) {
      return res.status(404).json('Produto não encontrado')
    }

    const produtoExcluido = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id,
      })
      .del()

    if (!produtoExcluido) {
      return res.status(400).json('O produto não foi excluido')
    }

    return res.status(200).json('Produto excluido com sucesso')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const atualizarImagem = async (req, res) => {
  const { usuario } = req
  const { id } = req.params
  const imagem = req.file

  const produto = await knex('produtos')
    .where({
      id,
      usuario_id: usuario.id,
    })
    .first()

  await deleteImagemBucket(produto.imagem)

  const imagemUrl = await uploadImagemBucket(imagem)

  await knex('produtos')
    .where({
      id,
      usuario_id: usuario.id,
    })
    .update({
      imagem: imagemUrl,
    })

  return res.json('Imagem do produto atualizada.')
}

module.exports = {
  listarProdutos,
  obterProduto,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto,
  atualizarImagem,
}
