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
        } else {// Se for uma string, é nome do herói
            console.log("sou texto carai")
            url = urlBase + "search/" + campoBusca;
        }
        try {
            fetch(url, { method: "get" })
                .then(resultado => resultado.json())
                .then(dados => showInfo(dados));

            function showInfo(dados) {
                console.log(dados);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Informe o nome ou ID");
    }
});


