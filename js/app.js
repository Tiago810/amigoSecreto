let incluidos = [];
let disponiveis = [];
let lista = document.getElementById('lista-amigos');
let campoSorteio = document.getElementById('lista-sorteio');
function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim();
    if (nome && !incluidos.includes(nome)) {
        incluidos.push(nome);
        disponiveis.push(nome);
        lista.textContent = incluidos.join(', ');
        document.getElementById('nome-amigo').value = ('');
    } else {
        alert("Nome inválido ou já incluido");
    }
}

function sortear() {
    let quantidade = disponiveis.length;
    if (quantidade >= 2) {
        let sorteio = parseInt(Math.random() * quantidade);
        let amigoSorteado = disponiveis[sorteio];
        campoSorteio.textContent = amigoSorteado;
        disponiveis.splice(sorteio,1);
    } else {
        alert("Adicione pelo menos dois nomes");
    }
}

function reiniciar() {
    incluidos = [];
    disponiveis = [];
    lista.textContent = ('');
    campoSorteio.textContent = ('');
}