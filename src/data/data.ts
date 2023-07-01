import '../models/livro'

let biblioteca: ILivro[] = [
    { id: 1, nome: 'Teste de aviação', descricao: 'Pra aprender a voar' },
    { id: 2, nome: 'Paepa', descricao: 'A historia de Paepe' }
  ];

let ultimoId: number = 3

function criarRegistroLivro({ nome : nome , descricao : descricao} : ILivro):void {
    biblioteca.push({id: ultimoId, nome: nome , descricao : descricao})
    ultimoId = ultimoId + 1
    console.log('')
    console.log('Registro criado')
} 

function listarRegistros(): void {
    console.log('')
    console.log(biblioteca)
}

function listaUmRegistro(id:number): void{
    console.log('')
    let livro = biblioteca.filter( i => i.id === id )
    if(livro) {
        console.log(livro)
    } else {
        console.log("Livro inexistente")
    }
}

function atualizarRegistro(Livro: ILivro): void {
    console.log('')
    if(biblioteca.map(i => i.id === Livro.id)){
        biblioteca = [...biblioteca.filter( i => i.id !== Livro.id),Livro]
        console.log("Livro atualizado")
    }
    else {
        console.log("Livro inexistente")
    }
}

function deletarRegistro(id:number): void {
    console.log('')
    if(biblioteca.map(i => i.id === id)){
        biblioteca = [...biblioteca.filter( i => i.id !== id)]
        console.log("Livro excluido")
    }
    else {
        console.log("Livro inexistente")
    }
}

export{criarRegistroLivro,listarRegistros,listaUmRegistro,deletarRegistro,atualizarRegistro}