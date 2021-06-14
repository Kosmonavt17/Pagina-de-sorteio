var input = document.getElementById("valor"); //o input
var list = document.getElementById("list"); //a lista

let valores = []; //array com os valores a serem sorteados

//função que quando apertar o botão vai adicionar um valor no array
function addValor() {
    if (input.value !== "") {   //se o valor nao for vazio:
        let valorColocado = input.value;
        valores.push(valorColocado); //pega o valor do input e adiciona no array

        input.value = ""; //reset no valor do input depois de enviar

        list.innerHTML = "";

        //pra cada valor dentro do array vai adicionar um novo elemento li
        valores.forEach(function (item) {
            const li = document.createElement("li");
            li.setAttribute("class", "value");

            li.innerHTML = `
            ${item}
            `;

            list.append(li);
        });
    } else {   //se for vazio vai mostrar a mensagem
        alert("Digite um valor para ser sorteado, por favor!");
    }
}

//função para sortear os valores adquiridos dentro do array valores
function sortear() {
    if (valores.length > 1) {   //se o valor for maior do que 1 em comprimento:
        let paraSorteio = valores.length; //pega o comprimento do array

        let valorSorteado = Math.floor(Math.random() * paraSorteio); //usa o Math.random() vezes o comprimento do array para sortear

        document.getElementById("resultado").innerHTML = valores[valorSorteado]; //coloca o valor sorteado no innerHTML do elemento com a id "resultado"
    } else {   //se nao for maior do que 1 vai mostrar a mensagem
        alert("Digite mais valores para serem sorteados, por favor!");
    }
}
