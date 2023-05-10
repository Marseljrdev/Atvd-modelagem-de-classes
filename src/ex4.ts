/* 
4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico.
 */

export class Calculadora {
  private historico: string[];

  constructor() {
    this.historico = [];
  }

  public somar(num1: number, num2: number): number {
    const resultado = num1 + num2;
    this.historico.push(`${num1} + ${num2} = ${resultado}`);
    return resultado;
  }

  public multiplicar(num1: number, num2: number): number {
    const resultado = num1 * num2;
    this.historico.push(`${num1} * ${num2} = ${resultado}`);
    return resultado;
  }

  public dividir(num1: number, num2: number): number {
    if (num2 === 0) {
      console.log("Não é possível dividir por zero.");
      return NaN;
    }

    const resultado = num1 / num2;
    this.historico.push(`${num1} / ${num2} = ${resultado}`);
    return resultado;
  }

  public visualizarHistorico(): void {
    console.log("Histórico das operações:");
    this.historico.forEach((operacao, index) => {
      console.log(`${index + 1}: ${operacao}`);
    });
  }
}
