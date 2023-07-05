const participants = [
  { name: 'João' },
  { name: 'Ana' },
  { name: 'Beatriz' },
  { name: 'Maria' },
  { name: 'Ana Clara' },
  { name: 'Joana' },
  { name: 'Augusto' },
  { name: 'Renan' },
  { name: 'Patricia' },
  { name: 'Carlos' },
  { name: 'Renato' },
  { name: 'José' },
  { name: 'Roberto' },
  { name: 'Sara' },
  { name: 'Junior' },
  { name: 'Pedro' },
  { name: 'Vitor' },
  { name: 'Antonio' },
]

participants.forEach((participant, index) => {
  if (participant.name === 'Carlos') {
    console.log(`Galera... O Carlos está na posição ${index + 1}, corre lá`)
  }
})
