let incluidos = [];
const lista = document.getElementById('lista-amigos');
const campoSorteio = document.getElementById('lista-sorteio');

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function temConflito(incluidos, sorteados) {
    for (let i = 0; i < incluidos.length; i++) {
        if (incluidos[i] === sorteados[i]) {
            return true;
        }
    }
    return false;
}

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim();
    if (nome && !incluidos.includes(nome)) {
        incluidos.push(nome);
        lista.textContent = incluidos.join(', ');
        document.getElementById('nome-amigo').value = ('');
    } else {
        alert("Nome inválido ou já incluido");
    }
}

function sortear() {
    if (incluidos.length < 2 ) {
        alert ('Adicione pelo menos dois nomes');
    } else {
        let sorteados = embaralhar(incluidos.slice());
        let tentativas = 0;
        while (temConflito(incluidos, sorteados) && tentativas < 20) {
            sorteados = embaralhar(incluidos.slice());
            tentativas++;
        }
        if (temConflito(incluidos, sorteados)) {
            alert('Não foi possível realizar o sorteio. Tente novamente.');
          } else {
            let resultado = '';
            for (let i = 0; i < incluidos.length; i++) {
                resultado += `${incluidos[i]} → ${sorteados[i]}<br>`;
            }
            campoSorteio.innerHTML = resultado;
        }
    }
}

function reiniciar() {
    incluidos = [];
    lista.textContent = ('');
    campoSorteio.textContent = ('');
}