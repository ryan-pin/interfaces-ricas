import {
  calculaQuadrado,
  calculaQuadradoForEach,
  concatenaStringsComJoin,
  filtraElementosPares,
  ordenaStringDecrescente,
  pegaDoisPrimeiros,
} from "../funcoes";

import { Estudante, Professor, pessoa } from "../pessoa";

// testes gerados por ia

// Função para comparar arrays
function arraysEqual<T>(a: T[], b: T[]): boolean {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}

// Função para executar teste de array
function runArrayTest<T>(testName: string, actual: T[], expected: T[]): void {
  if (arraysEqual(actual, expected)) {
    console.log(`✅ ${testName}: PASSOU`);
  } else {
    console.log(`❌ ${testName}: FALHOU`);
    console.log(`   Esperado: [${expected.join(", ")}]`);
    console.log(`   Obtido:   [${actual.join(", ")}]`);
  }
}


// Função para executar teste de string
function runStringTest(
  testName: string,
  actual: string,
  expected: string
): void {
  if (actual === expected) {
    console.log(`✅ ${testName}: PASSOU`);
  } else {
    console.log(`❌ ${testName}: FALHOU`);
    console.log(`   Esperado: "${expected}"`);
    console.log(`   Obtido:   "${actual}"`);
  }
}


// Função para executar teste de classe/interface
function runClassTest(testName: string, testFunction: () => boolean): void {
  try {
    if (testFunction()) {
      console.log(`✅ ${testName}: PASSOU`);
    } else {
      console.log(`❌ ${testName}: FALHOU`);
    }
  } catch (error) {
    console.log(`❌ ${testName}: ERRO - ${error}`);
  }
}


// Testes para as funções de cálculo de quadrado

function testarFuncoesQuadrado(): void {
  console.log("Testando funções de cálculo de quadrado");

  const testArray = [3, 5, 7, 3, 8, 9, 1];
  const expectedResult = [9, 25, 49, 9, 64, 81, 1];

  console.log(`Array de teste: [${testArray.join(", ")}]`);
  console.log(`Resultado esperado: [${expectedResult.join(", ")}]\n`);

  // Teste com for simples
  const resultFor = calculaQuadrado(testArray);
  runArrayTest("Cálculo quadrado com for", resultFor, expectedResult);

  // Teste com forEach
  const resultForEach = calculaQuadradoForEach(testArray);
  runArrayTest("Cálculo quadrado com forEach", resultForEach, expectedResult);
}


// Testes para a função de concatenação de strings
function testarConcatenacaoStrings(): void {
  console.log("Testando função de concatenação de strings...");

  const testArray = ["Arrays", "com", "TypeScript"];
  const expectedResult = "Arrays com TypeScript";

  console.log(`Array de teste: [${testArray.map((s) => `'${s}'`).join(", ")}]`);
  console.log(`Resultado esperado: "${expectedResult}"\n`);

  const result = concatenaStringsComJoin(testArray);
  runStringTest("Concatenação com join", result, expectedResult);
}


// Testes para a função de ordenação decrescente
function testarOrdenacaoDecrescente(): void {
  console.log("Testando função de ordenação decrescente...");

  const testArray = ["carro", "boneco", "ave", "lapis"];
  const expectedResult = ["lapis", "carro", "boneco", "ave"];

  console.log(`Array de teste: [${testArray.map((s) => `'${s}'`).join(", ")}]`);
  console.log(
    `Resultado esperado: [${expectedResult.map((s) => `'${s}'`).join(", ")}]\n`
  );

  const result = ordenaStringDecrescente([...testArray]); // Criar cópia para não modificar o original
  runArrayTest("Ordenação decrescente", result, expectedResult);
}

// Testes para a função slice (dois primeiros elementos)
function testarSliceDoisPrimeiros(): void {
  console.log("Testando função slice (dois primeiros elementos)...");

  const testArray = [2, 4, 6, 2, 8, 9, 5];
  const expectedResult = [2, 4];

  console.log(`Array de teste: [${testArray.join(", ")}]`);
  console.log(`Resultado esperado: [${expectedResult.join(", ")}]\n`);

  const result = pegaDoisPrimeiros(testArray);
  runArrayTest("Slice dois primeiros elementos", result, expectedResult);
}


// Testes para a função filter (elementos pares)

function testarFiltroElementosPares(): void {
  console.log("Testando função filter (elementos pares)...");

  const testArray = [8, 3, 9, 5, 6, 12];
  const expectedResult = [8, 6, 12];

  console.log(`Array de teste: [${testArray.join(", ")}]`);
  console.log(`Resultado esperado: [${expectedResult.join(", ")}]\n`);

  const result = filtraElementosPares(testArray);
  runArrayTest("Filtro elementos pares", result, expectedResult);
}


// Testes para as classes Professor e Estudante (interface pessoa)
function testarClassesInterface(): void {
  console.log("Testando classes e interface pessoa...");

  // Teste da classe Professor
  runClassTest("Instanciação e teste da classe Professor", () => {
    const professor = new Professor(
      "João Silva",
      45,
      "Professor",
      "Matemática"
    );

    // Verificar atributos iniciais
    if (
      professor.nome !== "João Silva" ||
      professor.idade !== 45 ||
      professor.profissao !== "Professor" ||
      professor.especialidade !== "Matemática"
    ) {
      return false;
    }

    // Alterar atributos
    professor.nome = "João Santos";
    professor.idade = 46;
    professor.especialidade = "Física";

    // Verificar alterações
    if (
      professor.nome !== "João Santos" ||
      professor.idade !== 46 ||
      professor.especialidade !== "Física"
    ) {
      return false;
    }

    // Testar método da interface
    console.log("   Testando método ola() do Professor:");
    console.log("   ");
    professor.ola();

    return true;
  });

  // Teste da classe Estudante
  runClassTest("Instanciação e teste da classe Estudante", () => {
    const estudante = new Estudante("Maria Oliveira", 22, "Estudante", 12345);

    // Verificar atributos iniciais
    if (
      estudante.nome !== "Maria Oliveira" ||
      estudante.idade !== 22 ||
      estudante.profissao !== "Estudante" ||
      estudante.matricula !== 12345
    ) {
      return false;
    }

    // Alterar atributos
    estudante.nome = "Maria Silva";
    estudante.idade = 23;
    estudante.matricula = 54321;

    // Verificar alterações
    if (
      estudante.nome !== "Maria Silva" ||
      estudante.idade !== 23 ||
      estudante.matricula !== 54321
    ) {
      return false;
    }

    // Testar método da interface
    console.log("   Testando método ola() do Estudante:");
    console.log("   ");
    estudante.ola();

    return true;
  });

  // Teste de polimorfismo com interface
  runClassTest("Teste de polimorfismo com interface pessoa", () => {
    const pessoas: pessoa[] = [
      new Professor("Ana Costa", 38, "Professor", "História"),
      new Estudante("Carlos Lima", 20, "Estudante", 98765),
    ];

    console.log("   Testando polimorfismo:");
    pessoas.forEach((pessoa, index) => {
      console.log(`   Pessoa ${index + 1}:`);
      pessoa.ola();
    });

    return pessoas.length === 2;
  });
}


// Executar todos os testes
function executarTodosTestes(): void {
  console.log("Iniciando todos os testes...");

  testarFuncoesQuadrado();
  testarConcatenacaoStrings();
  testarOrdenacaoDecrescente();
  testarSliceDoisPrimeiros();
  testarFiltroElementosPares();
  testarClassesInterface();

  console.log("Todos os testes foram executados!");
}

// Executar todos os testes
executarTodosTestes();
