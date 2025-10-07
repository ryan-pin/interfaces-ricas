// Calcula quadrado com arrays
function calculaQuadrado(numbers: number[]): number[] {
  const squares: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    squares[i] = numbers[i] * numbers[i];
  }

  return squares;
}

function calculaQuadradoForEach(numbers: number[]): number[] {
  const squares: number[] = [];

  numbers.forEach((number, index) => {
    squares[index] = number * number;
  });

  return squares;
}

// Concatena strings
function concatenaStringsComJoin(strings: string[]): string {

  return strings.join(" ");
}


function main() {
//   const testArray = [3, 5, 7, 3, 8, 9, 1];

//   console.log("Array original:", testArray);
//   console.log("Quadrados (for simples):", calculaQuadrado(testArray));
//   console.log("Quadrados (forEach):", calculaQuadradoForEach(testArray));

  // Concatena strings
  const testArrayStrings = ["Arrays", "com", "TypeScript"];

  console.log("Array original:", testArrayStrings);
  console.log("Concatenação com join:", concatenaStringsComJoin(testArrayStrings));


}

// Executar se o arquivo for chamado diretamente
if (require.main === module) {
  main();
}
