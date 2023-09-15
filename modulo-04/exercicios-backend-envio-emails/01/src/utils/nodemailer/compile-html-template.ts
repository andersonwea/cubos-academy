import handlebars from 'handlebars'
import fs from 'fs/promises'
import { resolve } from 'path'
import { EmailContext } from '../../adapters/email-gateway'

interface CompileHtmlTemplate {
  source: string
  data: EmailContext
}

export async function compileHtmlTemplate({ source, data }: CompileHtmlTemplate) {
  const html = (await fs.readFile(resolve(__dirname, `./${source}.html`))).toString()

  const template = handlebars.compile(html)

  const result = template(data)

  return result
}