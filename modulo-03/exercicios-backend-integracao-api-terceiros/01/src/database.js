import { readFile, writeFile } from 'node:fs/promises'

const databasePath = new URL('../companies.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    readFile(databasePath, 'utf-8')
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    writeFile(databasePath, JSON.stringify(this.#database))
  }

  insert(data) {
    if (Array.isArray(this.#database)) {
      this.#database.push(data)
    } else {
      this.#database = [data]
    }

    this.#persist()
  }
}
