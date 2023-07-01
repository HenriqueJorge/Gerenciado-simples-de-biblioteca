import * as readline from 'readline';
import "../models/livro"
import "../data/data"
import { atualizarRegistro, criarRegistroLivro, deletarRegistro, listaUmRegistro, listarRegistros } from '../data/data';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function apresentar(): void {
    console.log('')
    console.log('Bem vindo a o Sistema de registo da biblioteca')
    main()
}

function main():void {
    console.log('')
    console.log("O que deseja fazer ?")
    console.log("1 - Adicionar um livro")
    console.log("2 - Trazer um registro de um livro")
    console.log("3 - Atualizar um registro")
    console.log("4 - Deletar um livro")
    console.log("5 - Sair")
    rl.question('Qual sua escolha ? ', (answer) => {
        console.log(answer)
        switch(answer) {
            case "1":
                Adicionar()
                break;
            case "2":
                Trazer()
                break;
            case "3": 
                Editar()
                break;
            case "4":
                Deletar()
                break; 
            case "5":
                Sair()
                break;
            default:
                console.log('Resposta incorreta')
                main()
                break;

        }

    });
    
}

function Adicionar():void {
    console.log('')
    let livroTemp: ILivro = {nome: "", descricao: ""};
    rl.question('Qual o nome do livro ? ', (answer) => {
        livroTemp.nome = String(answer)
        rl.question('Qual a descricão do livro ? ', (answer) => {
            livroTemp.descricao = String(answer)
            criarRegistroLivro(livroTemp)
            main()
        })
    })
}

function Trazer():void {
    console.log('')
    rl.question('Deseja trazer (1 - Um unico livro) ou (2 - Todos os Livros) ? ', (answer) => {
        switch(answer){
            case "1" :
                rl.question('Qual id do livro ? ', (answer) => {
                    listaUmRegistro(Number(answer))
                    main()
                })
                break;
            case "2" : 
                listarRegistros()
                main()
                break;
            default :
                console.log('Valor incorreto')
                main()
                break;
        }
    })
}

function Editar():void {
    console.log('')
    let livroTemp: ILivro = {id: 0 , nome: "", descricao: ""};
    rl.question('Qual id do livro que deseja editar ? ', (answer) => {
        livroTemp.id = Number(answer)
        rl.question('Novo nome ? ', (answer) => {
            livroTemp.nome = String(answer)
            rl.question('Nova descricao ? ', (answer) => {
                livroTemp.descricao = String(answer)
                atualizarRegistro(livroTemp)
                main()
            })
        })
    })
}

function Deletar():void {
    console.log('')
    rl.question('Qual id do livro que deseja deletar ? ', (answer) => {
        deletarRegistro(Number(answer))
        main()
    })
}

function Sair():void {
    console.log('')
    console.log('Obrigado por usar nosso sistema')
    rl.close()
}

export{apresentar}