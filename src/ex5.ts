/* 
5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro
iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.
 */

export class BombaCombustivel {
  private tipoCombustivel: string;
  private valorLitro: number;
  private quantidadeCombustivel: number;

  constructor(combustivel: string, litro: number, qtdCombustivel: number) {
    this.tipoCombustivel = combustivel;
    this.valorLitro = litro;
    this.quantidadeCombustivel = qtdCombustivel;
  }

  public abastecerPorValor(valor: number): number {
    const litrosAbastecidos = valor / this.valorLitro;

    if (litrosAbastecidos <= this.quantidadeCombustivel) {
      this.quantidadeCombustivel -= litrosAbastecidos;
      return litrosAbastecidos;
    } else {
      console.log("Não há combustível suficiente na bomba.");
      return 0;
    }
  }

  public abastecerPorLitro(litros: number): number {
    const valorAPagar = litros * this.valorLitro;

    if (litros <= this.quantidadeCombustivel) {
      this.quantidadeCombustivel -= litros;
      return valorAPagar;
    } else {
      console.log("Não há combustível suficiente na bomba.");
      return 0;
    }
  }

  public alterarValor(novoValor: number) {
    this.valorLitro = novoValor;
  }

  public alterarCombustivel(novoCombustivel: string) {
    this.tipoCombustivel = novoCombustivel;
  }

  public alterarQuantidadeCombustivel(novaQuantidade: number) {
    this.quantidadeCombustivel = novaQuantidade;
  }
}
