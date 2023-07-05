const book = {
  name: 'O poder do hábito',
  chapters: [
    {
      name: 'O loop do hábito',
    },
    {
      name: 'O cérebro ansioso',
    },
    {
      name: 'A regra de ouro da mudança de hábito',
    },
    {
      name: 'Hábitos angulares, ou a balada de Paul O`neill',
    },
    {
      name: 'Starbucks e o hábito do sucesso',
    },
    {
      name: 'O poder de uma crise',
    },
    {
      name: 'Como a target sabe o que você quer antes que você saiba',
    },
    {
      name: 'A Saddleback Church e o boicote aos ônibus de Montgomery',
    },
    {
      name: 'A neorologia do livre-arbítrio',
    },
  ],
}

book.chapters.forEach((chapter, index) => {
  chapter.number = index + 1
})

console.log(book)
