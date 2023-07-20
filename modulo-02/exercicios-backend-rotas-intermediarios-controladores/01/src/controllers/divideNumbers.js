export function divideNumbers(req, res) {
  const { num1, num2 } = req.query

  const result = Number(num1) / Number(num2)

  res.json({ result }).send()
}
