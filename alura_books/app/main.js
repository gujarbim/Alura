let livros = []
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const elementoParaIncerirLivros = document.getElementById('livros')

async function getBuscaLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaIncerirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" />
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco}</p>
                <div class="tags">
                    ${livro.categorias.map(categoria => `<span class="tag">${categoria}</span>`).join('')}
                </div>
            </div>
        `
    })
}