/* 
6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.
d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque
 */

export class Carro {
  private consumo: number;
  private combustivel: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.combustivel = 0;
  }

  public andar(distancia: number): void {
    const consumoTotal = this.consumo * distancia;

    if (consumoTotal <= this.combustivel) {
      this.combustivel -= consumoTotal;
      console.log(`O carro percorreu ${distancia} km.`);
    } else {
      console.log(
        "Combustível insuficiente para percorrer a distância desejada."
      );
    }
  }

  public obterGasolina(): number {
    return this.combustivel;
  }

  public adicionarGasolina(quantidade: number): void {
    this.combustivel += quantidade;
    console.log(`Abastecido com ${quantidade} litros de gasolina.`);
  }
}
