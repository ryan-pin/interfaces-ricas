interface pessoa {
    nome: string;
    idade: number;
    profissao: string;

    ola(): void;
}

class Estudante implements pessoa {
    nome: string;
    idade: number;
    profissao: string
    matricula: number;

    constructor(nome: string, idade: number, profissao: string, matricula: number) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.matricula = matricula;
    }

    ola(): void {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}, minha matrícula é ${this.matricula}.`);
    }
}

class Professor implements pessoa {
    nome: string;
    idade: number;
    profissao: string;
    especialidade: string;

    constructor(nome: string, idade: number, profissao: string, especialidade: string) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.especialidade = especialidade;
    }

    ola(): void {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}, minha especialidade é ${this.especialidade}.`);
    }
}      
