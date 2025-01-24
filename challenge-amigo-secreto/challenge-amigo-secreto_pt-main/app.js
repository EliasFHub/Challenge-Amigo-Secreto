//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){

    let amigo = document.getElementById("amigo").value;

    if (amigo != ""){
        listaDeAmigos.push(amigo);
        limparCampoAmigo();
        visualizarNomeNaTela(amigo, "listaAmigos");
    }else{
        alert("Por favor, insira um nome.");
    }
}
function visualizarNomeNaTela(nome, idLista){
    let lista = document.getElementById(idLista);
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
}

function visualizarSorteadoNaTela(texto, idLista){
    let lista = document.getElementById(idLista);
    lista.innerHTML = "O amigo secreto sorteado é: " + texto;
}

function sortearAmigo(){

    if (listaDeAmigos.length != 0){
        let indiceAleatorio = parseInt(Math.random() * listaDeAmigos.length);
        let amigoAleatorio = listaDeAmigos[indiceAleatorio];
        visualizarSorteadoNaTela(amigoAleatorio, "resultado");
        limparListaDeAmigos();
        listaDeAmigos = [];
    } else{
        alert("Adicione amigo na lista.");
    }
    
}
function limparCampoAmigo(){
    let campoAdicionaAmigo = document.getElementById("amigo");
    campoAdicionaAmigo.value = "";  
}

function limparListaDeAmigos(){
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";
}