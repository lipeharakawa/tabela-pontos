var jogador1 = {
    nome:'Jogador 1',
    vitoria: 0,
    empate: 0,
    derrota:0,
    pontos:0
}

var jogador2 = {
    nome:'Jogador 2',
    vitoria: 0,
    empate: 0,
    derrota:0,
    pontos:0
}

var jogador3 = {
    nome:'Jogador 3',
    vitoria: 0,
    empate: 0,
    derrota:0,
    pontos:0
}

var jogador4 = {
    nome:'Jogador 4',
    vitoria: 0,
    empate: 0,
    derrota:0,
    pontos:0
}

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela()

function exibirNaTela(){
    elementoTabela.innerHTML = `
        
        <tr>
            <td>${jogador1.nome}</td>
            <td>${jogador1.vitoria}</td>
            <td>${jogador1.empate}</td>
            <td>${jogador1.derrota}</td>
            <td>${jogador1.pontos}</td>
            <td><button onClick="adicionarVitoria(jogador1)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(jogador1)">Empate</button></td>
            <td><button onClick="adicionarDerrota(jogador1)">Derrota</button></td>
        </tr>

        <tr>
            <td>${jogador2.nome}</td>
            <td>${jogador2.vitoria}</td>
            <td>${jogador2.empate}</td>
            <td>${jogador2.derrota}</td>
            <td>${jogador2.pontos}</td>
            <td><button onClick="adicionarVitoria(jogador2)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(jogador2)">Empate</button></td>
            <td><button onClick="adicionarDerrota(jogador2)">Derrota</button></td>
        </tr>

        <tr>
            <td>${jogador3.nome}</td>
            <td>${jogador3.vitoria}</td>
            <td>${jogador3.empate}</td>
            <td>${jogador3.derrota}</td>
            <td>${jogador3.pontos}</td>
            <td><button onClick="adicionarVitoria(jogador3)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(jogador3)">Empate</button></td>
            <td><button onClick="adicionarDerrota(jogador3)">Derrota</button></td>
        </tr>

        <tr>
            <td>${jogador4.nome}</td>
            <td>${jogador4.vitoria}</td>
            <td>${jogador4.empate}</td>
            <td>${jogador4.derrota}</td>
            <td>${jogador4.pontos}</td>
            <td><button onClick="adicionarVitoria(jogador4)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(jogador4)">Empate</button></td>
            <td><button onClick="adicionarDerrota(jogador4)">Derrota</button></td>
        </tr>

    `;
};

function adicionarVitoria(jogador){
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela()
};

function adicionarEmpate(jogador){
    jogador.empate++;
    jogador.pontos = jogador.pontos + 1;
    exibirNaTela()

};

function adicionarDerrota(jogador){
    jogador.derrota++;
    exibirNaTela()
};