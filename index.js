
const Pessoa = require('./modulos/objetos/Pessoa.js');

const carla = new Pessoa(80,1.65); //instanciando um objeto
console.log( carla.imc() );

const roger = new Pessoa();
roger.peso = 100;
roger.altura = 1.6;
console.log( roger.imc() );