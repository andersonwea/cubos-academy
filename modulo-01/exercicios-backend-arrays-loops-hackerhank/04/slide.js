function solucao(sequencia) {
  let activeSlide = 0

  for (const click of sequencia) {
    if (click === '>') {
      activeSlide += 1
    }

    if (click === '<') {
      activeSlide -= 1
    }

    if (activeSlide > 6) {
      activeSlide = 0
    } else if (activeSlide < 0) {
      activeSlide = 6
    }
  }

  console.log(activeSlide)
}
