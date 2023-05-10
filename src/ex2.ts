/* 
2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor 
*/

export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(color: string, circunferencia: number, material: string) {
    this.cor = color;
    this.circunferencia = circunferencia;
    this.material = material;
    this.material = material;0
  }

  public trocarCor(novaCor: string) {
    this.cor = novaCor;
  }

  public mostrarCor(): string {
    return this.cor;
  }
}
