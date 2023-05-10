/* 
3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.
 */

export class Bank {
  private ncontas: number;
  private name: string;
  private saldo: number;

  constructor(numerocontas: number, name: string, saldo?: number) {
    this.ncontas = numerocontas;
    this.name = name;
    this.saldo = saldo ?? 0;
  }

  public alterarNome(novoNome: string) {
    this.name = novoNome;
  }

  public deposito(deposit: number) {
    this.saldo += deposit;
  }

  public saque(withDraw: number) {
    if (withDraw <= this.saldo) {
      this.saldo -= withDraw;
    } else {
      console.log("Saldo insuficiente para realizar o saque");
    }
  }
}
