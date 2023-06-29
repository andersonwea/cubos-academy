const text = "Aprenda programar do zero na Cubos Academy";

function formatText(text) {
  const regex = /\s/g

  const formatedText = text.replace(regex, '-').toLowerCase();

  return formatedText
}

console.log(formatText(text))