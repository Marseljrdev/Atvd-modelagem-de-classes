import { Count } from "./ex1";
import { Bola } from "./ex2";
import { Bank } from "./ex3";
import { Calculadora } from "./ex4";
import { BombaCombustivel } from "./ex5";
import { Carro } from "./ex6";

const atividade1 = () => {
  const count = new Count();
  count.increment();
  console.log("O valor incrementado é: ", count.getValue());

  count.reset();
  console.log("o valor zerado é: ", count.getValue());
};

// atividade1();

function atividade2() {
  const bola = new Bola("branco", 40, "couro");
  console.log(bola);
}

// atividade2();

function atividade3() {
  const bank = new Bank(3567, "Marsel", 2500);
  bank.alterarNome("Junior");
  bank.deposito(500);
  bank.saque(1850);
  console.log(bank);
}

// atividade3();

function atividade4() {
  const calculadora = new Calculadora();

  console.log(calculadora.somar(25, 50));

  console.log(calculadora.multiplicar(25, 50));

  console.log(calculadora.dividir(10, 2));

  calculadora.visualizarHistorico();
}

// atividade4();

function atividade5() {
  const bomba = new BombaCombustivel("Gasolina", 4.5, 1000);

  const litrosAbastecidos = bomba.abastecerPorValor(50);
  console.log(`Litros abastecidos: ${litrosAbastecidos}`);

  const valorAPagar = bomba.abastecerPorLitro(20);
  console.log(`Valor a pagar: ${valorAPagar}`);

  bomba.alterarValor(4.8);
  bomba.alterarCombustivel("Etanol");
  bomba.alterarQuantidadeCombustivel(800);

  console.log(bomba);
}

// atividade5();

function atividade6() {
  const meuCarro = new Carro(10);

  meuCarro.adicionarGasolina(50);
  meuCarro.andar(100);
  console.log(`Nível de gasolina: ${meuCarro.obterGasolina()} litros`);
}

atividade6();
