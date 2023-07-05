const test = {
  student: 'João',
  subject: 'Português',
  value: 10,
  questions: [
    {
      answer: 'a',
      correct: 'b',
    },
    {
      answer: 'c',
      correct: 'c',
    },
    {
      answer: 'e',
      correct: 'b',
    },
    {
      answer: 'b',
      correct: 'b',
    },
    {
      answer: 'c',
      correct: 'c',
    },
  ],
}

function checkTest(test) {
  const { student, value, questions } = test

  const correctAnswers = questions.reduce((correctAnswer, answer) => {
    const isCorrect = answer.answer === answer.correct

    if (isCorrect) {
      correctAnswer += 1
    }

    return correctAnswer
  }, 0)

  const poitsPerCorrectAnswer = value / questions.length

  const grade = poitsPerCorrectAnswer * correctAnswers

  return `O aluno(a) ${student} acertou ${correctAnswers} e obteve nota ${grade}`
}

console.log(checkTest(test))
