"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apresentar = void 0;
const readline = __importStar(require("readline"));
require("../models/livro");
require("../data/data");
const data_1 = require("../data/data");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function apresentar() {
    console.log('');
    console.log('Bem vindo a o Sistema de registo da biblioteca');
    main();
}
exports.apresentar = apresentar;
function main() {
    console.log('');
    console.log("O que deseja fazer ?");
    console.log("1 - Adicionar um livro");
    console.log("2 - Trazer um registro de um livro");
    console.log("3 - Atualizar um registro");
    console.log("4 - Deletar um livro");
    console.log("5 - Sair");
    rl.question('Qual sua escolha ? ', (answer) => {
        console.log(answer);
        switch (answer) {
            case "1":
                Adicionar();
                break;
            case "2":
                Trazer();
                break;
            case "3":
                Editar();
                break;
            case "4":
                Deletar();
                break;
            case "5":
                Sair();
                break;
            default:
                console.log('Resposta incorreta');
                main();
                break;
        }
    });
}
function Adicionar() {
    console.log('');
    let livroTemp = { nome: "", descricao: "" };
    rl.question('Qual o nome do livro ? ', (answer) => {
        livroTemp.nome = String(answer);
        rl.question('Qual a descricão do livro ? ', (answer) => {
            livroTemp.descricao = String(answer);
            (0, data_1.criarRegistroLivro)(livroTemp);
            main();
        });
    });
}
function Trazer() {
    console.log('');
    rl.question('Deseja trazer (1 - Um unico livro) ou (2 - Todos os Livros) ? ', (answer) => {
        switch (answer) {
            case "1":
                rl.question('Qual id do livro ? ', (answer) => {
                    (0, data_1.listaUmRegistro)(Number(answer));
                    main();
                });
                break;
            case "2":
                (0, data_1.listarRegistros)();
                main();
                break;
            default:
                console.log('Valor incorreto');
                main();
                break;
        }
    });
}
function Editar() {
    console.log('');
    let livroTemp = { id: 0, nome: "", descricao: "" };
    rl.question('Qual id do livro que deseja editar ? ', (answer) => {
        livroTemp.id = Number(answer);
        rl.question('Novo nome ? ', (answer) => {
            livroTemp.nome = String(answer);
            rl.question('Nova descricao ? ', (answer) => {
                livroTemp.descricao = String(answer);
                (0, data_1.atualizarRegistro)(livroTemp);
                main();
            });
        });
    });
}
function Deletar() {
    console.log('');
    rl.question('Qual id do livro que deseja deletar ? ', (answer) => {
        (0, data_1.deletarRegistro)(Number(answer));
        main();
    });
}
function Sair() {
    console.log('');
    console.log('Obrigado por usar nosso sistema');
    rl.close();
}
