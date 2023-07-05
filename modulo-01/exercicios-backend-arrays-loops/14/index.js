const arrayA = [5, 32, 3, 44, 1]
const arrayB = [57, 4, 21, 2, 13]

function printMinnors(arrayA, arrayB) {
  for (let number = 0; number < arrayA.length; number++) {
    if (arrayA[number] < arrayB[number]) {
      console.log(arrayA[number])
    } else {
      console.log(arrayB[number])
    }
  }
}

printMinnors(arrayA, arrayB)
