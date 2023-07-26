import { products } from '../database/produtos.js'
import { getStateFromZipcode } from 'utils-playground'

export async function listProducts(request, response) {
  return response.json(products)
}

export async function listProductById(request, response) {
  const { id } = request.params

  const product = products.find((product) => product.id === Number(id))

  if (!product) {
    return response.status(404).json({ message: 'Produto não encontrado.' })
  }

  return response.json(product)
}

export async function calcFreight(request, response) {
  const { id, zipCode } = request.params

  const freightValueByState = [
    {
      value: 0.1,
      states: ['BA', 'SE', 'AL', 'PE', 'PB'],
    },
    {
      value: 0.15,
      states: ['SP', 'RJ'],
    },
  ]

  const defaultFreightValue = 0.12

  if (!zipCode) {
    return response.status(404).json({ message: 'O CEP é obrigatório.' })
  }

  const product = products.find((product) => product.id === Number(id))

  if (!product) {
    return response.status(404).json({ message: 'Produto não encontrado' })
  }

  try {
    const state = await getStateFromZipcode(zipCode)

    const freightPorcentageValue = freightValueByState.reduce(
      (value, freigthValue) => {
        return freigthValue.states.includes(state)
          ? freigthValue.value
          : defaultFreightValue
      },
    )

    const freigthValueProduct = product.valor * freightPorcentageValue

    const resume = {
      product,
      estado: state,
      frete: freigthValueProduct,
    }

    return response.json(resume)
  } catch (err) {
    return response.status(404).json({ message: 'CEP inválido' })
  }
}
