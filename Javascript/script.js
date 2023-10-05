// Importando a variável global chave API
var chaveApi = 1032032714593650;
var urlBase = "https://superheroapi.com/api/" + chaveApi + "/";

var btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', () => {
    let campoBusca = document.getElementById('campoBusca').value.trim();

    //Validar se o input foi o ID ou o nome
    if (campoBusca !== "") {// Verificar se o campo de busca é um número (ID) ou uma string (nome)
        let url;
        if (!isNaN(campoBusca)) {// Se for um número, é ID
            url = urlBase + campoBusca;
            console.log("era numero");
        } else { // Se for uma string, é nome do herói
            url = urlBase + "search/" + campoBusca;
            console.log(url)

        }
        try {
            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS'
                }
            })
                .then(resultado => resultado.json())
                .then(dados => showInfo(dados.results));

            function showInfo(dados) {
                console.log(dados);
            }
        } catch (error) {
            console.log(error);
        }
    }else{
        alert("Informe o ID ou nome")
    }
});