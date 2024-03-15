document.getElementById("cookieImagem").addEventListener("click", function() {
    incrementarERedimensionar();
});

document.getElementById("olhinho").addEventListener("click", function() {
    alternarVisibilidadeTabela();
    reproduzirSom();
});

function redimensionarImagem() {
    let imagem = document.getElementById("cookieImagem");

    if (imagem.getAttribute("width") == "200") {
        imagem.setAttribute("width", "210");
        imagem.setAttribute("height", "210");
    } else {
        imagem.setAttribute("width", "200");
        imagem.setAttribute("height", "200");
    }
}

function incrementarERedimensionar() {
    incrementarNumero();
    redimensionarImagem();
}

let cookies = 0;
let numero = 0;
let quantidadeAdicionar = 1;
let fornada = 0;

let custoCompra1 = 100;
let custoCompra2 = 300;

let custoCompraForno1 = 500;
let custoCompraForno2 = 750;

function incrementarNumero() {
    numero += quantidadeAdicionar;
    document.getElementById("cookies").textContent = numero;
}

function atualizarTextoBotao(idBotao, quantidade, custo) {
    document.getElementById(idBotao).textContent = `Cozinheira +${quantidade} ($${custo})`;
}

function calcularNovoCusto(custoAtual) {
    return custoAtual + Math.floor(custoAtual * 0.10);
}

function comprar1() {
    if (numero >= custoCompra1) {
        numero -= custoCompra1;
        quantidadeAdicionar += 1;
        custoCompra1 = calcularNovoCusto(custoCompra1)
        numero = parseInt(numero);
        quantidadeAdicionar = parseInt(quantidadeAdicionar); 
        document.getElementById("cookies").textContent = numero;
        document.getElementById("cookiesp/click").textContent = quantidadeAdicionar;
        atualizarTextoBotao("cozinheira1", 1, custoCompra1);
        reproduzirSom();
    }
}
function comprar2() {
    if (numero >= custoCompra2) {
        numero -= custoCompra2;
        quantidadeAdicionar += 3;
        custoCompra2 = calcularNovoCusto(custoCompra2)
        numero = parseInt(numero);
        quantidadeAdicionar = parseInt(quantidadeAdicionar);
        document.getElementById("cookies").textContent = numero;
        document.getElementById("cookiesp/click").textContent = quantidadeAdicionar;
        atualizarTextoBotao("cozinheira2", 3, custoCompra2);
        reproduzirSom();
    }
}

function forno() {
numero += fornada;
document.getElementById("cookies").textContent = numero;
document.getElementById("cookies/s").textContent = fornada;
}

setInterval(forno, 1000);

function comprarForno1() {
    if (numero >= custoCompraForno1) {
        numero -= custoCompraForno1;
        fornada += 1;
        custoCompraForno1 = calcularNovoCusto(custoCompraForno1)
        atualizarTextoBotao("forno1", 1, custoCompraForno1);
        forno();
        reproduzirSom();
    }
}

function comprarForno2() {
    if (numero >= custoCompraForno2) {
        numero -= custoCompraForno2;
        fornada += 3;
        custoCompraForno2 = calcularNovoCusto(custoCompraForno2)
        atualizarTextoBotao("forno2", 3, custoCompraForno2);
        forno();
        reproduzirSom();
    }
}

function alternarVisibilidadeTabela() {
    const tabelas = document.querySelectorAll(".tabelaOculta");
    tabelas.forEach((tabela) => {
        if (getComputedStyle(tabela).display === "table" || tabela.style.display === "") {
            tabela.style.display = "none";
        } else {
            tabela.style.display = "table";
        }
    });
}

var musicaDeFundo = document.getElementById("musicaDeFundo");
var controleVolume = document.getElementById("controleVolume");
var volumeExibido = document.getElementById("volumeExibido");

controleVolume.addEventListener("input", function() {
    var novoVolume = parseFloat(controleVolume.value);
    musicaDeFundo.volume = novoVolume;
    volumeExibido.textContent = Math.round(novoVolume * 100) + "%";
});

var musicaDeFundo = document.getElementById("musicaDeFundo");
musicaDeFundo.play();
musicaDeFundo.volume = 0.05;

function reproduzirSom() {
    var audio = document.getElementById("clickCompra");
    audio.currentTime = 0;
    audio.volume = 0.4;
    audio.play();
}

function trocarTela(nomeTela) {
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => tela.classList.remove('visivel'));

    document.getElementById(nomeTela).classList.add('visivel');
}

function iniciarJogo() {
    trocarTela('telaJogo');
    reproduzirSom();
}

function menuJogo() {
    trocarTela('telaInicial');
    reproduzirSom();
}

document.getElementById('telaInicial').classList.add('visivel');

