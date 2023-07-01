"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarRegistro = exports.deletarRegistro = exports.listaUmRegistro = exports.listarRegistros = exports.criarRegistroLivro = void 0;
require("../models/livro");
let biblioteca = [
    { id: 1, nome: 'Teste de aviação', descricao: 'Pra aprender a voar' },
    { id: 2, nome: 'Paepa', descricao: 'A historia de Paepe' }
];
let ultimoId = 3;
function criarRegistroLivro({ nome: nome, descricao: descricao }) {
    biblioteca.push({ id: ultimoId, nome: nome, descricao: descricao });
    ultimoId = ultimoId + 1;
    console.log('');
    console.log('Registro criado');
}
exports.criarRegistroLivro = criarRegistroLivro;
function listarRegistros() {
    console.log('');
    console.log(biblioteca);
}
exports.listarRegistros = listarRegistros;
function listaUmRegistro(id) {
    console.log('');
    let livro = biblioteca.filter(i => i.id === id);
    if (livro) {
        console.log(livro);
    }
    else {
        console.log("Livro inexistente");
    }
}
exports.listaUmRegistro = listaUmRegistro;
function atualizarRegistro(Livro) {
    console.log('');
    if (biblioteca.map(i => i.id === Livro.id)) {
        biblioteca = [...biblioteca.filter(i => i.id !== Livro.id), Livro];
        console.log("Livro atualizado");
    }
    else {
        console.log("Livro inexistente");
    }
}
exports.atualizarRegistro = atualizarRegistro;
function deletarRegistro(id) {
    console.log('');
    if (biblioteca.map(i => i.id === id)) {
        biblioteca = [...biblioteca.filter(i => i.id !== id)];
        console.log("Livro excluido");
    }
    else {
        console.log("Livro inexistente");
    }
}
exports.deletarRegistro = deletarRegistro;
