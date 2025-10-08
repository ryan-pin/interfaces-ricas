// Calcula quadrado com arrays
export function calculaQuadrado(numbers: number[]): number[] {
  const squares: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    squares[i] = numbers[i] * numbers[i];
  }

  return squares;
}

export function calculaQuadradoForEach(numbers: number[]): number[] {
  const squares: number[] = [];

  numbers.forEach((number, index) => {
    squares[index] = number * number;
  });

  return squares;
}

// Concatena strings
export function concatenaStringsComJoin(strings: string[]): string {
  return strings.join(" ");
}

// Ordena strings em ordem decrescente
export function ordenaStringDecrescente(strings: string[]): string[] {
  return strings.sort((a: string, b: string) => b.localeCompare(a));
}

// Pega os dois primeiros elementos usando slice
export function pegaDoisPrimeiros<T>(array: T[]): T[] {
  return array.slice(0, 2);
}

// Filtra elementos pares usando filter com arrow function
export function filtraElementosPares(numbers: number[]): number[] {
  return numbers.filter((numero) => numero % 2 === 0);
}

function main() {
  //   const testArray = [3, 5, 7, 3, 8, 9, 1];

  //   console.log("Array original:", testArray);
  //   console.log("Quadrados (for simples):", calculaQuadrado(testArray));
  //   console.log("Quadrados (forEach):", calculaQuadradoForEach(testArray));

  // Concatena strings
  //   const testArrayStrings = ["Arrays", "com", "TypeScript"];

  //   console.log("Array original:", testArrayStrings);
  //   console.log(
  //     "Concatenação com join:",
  //     concatenaStringsComJoin(testArrayStrings)
  //   );

  // Ordena strings em ordem decrescente
  //   const testArrayOrdenacao = ["carro", "boneco", "ave", "lapis"];

  //   console.log("Array original:", testArrayOrdenacao);
  //   console.log(
  //     "Array ordenado decrescente:",
  //     ordenaStringDecrescente(testArrayOrdenacao)
  //   );

  // Pega os dois primeiros elementos com slice
  const testArraySlice = [2, 4, 6, 2, 8, 9, 5];

  console.log("Array original:", testArraySlice);
  console.log("Dois primeiros elementos:", pegaDoisPrimeiros(testArraySlice));

  // Filtra elementos pares com filter
  const testArrayPares = [8, 3, 9, 5, 6, 12];

  console.log("Array original:", testArrayPares);
  console.log("Elementos pares:", filtraElementosPares(testArrayPares));
}

// Executar se o arquivo for chamado diretamente
if (require.main === module) {
  main();
}
