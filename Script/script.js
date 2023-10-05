//importando a variavel global chave API


var chaveApi = 1032032714593650
var urlId = `https://superheroapi.com/api/${chaveApi}/` //valor URL pelo o ID
var urlNome = `https://superheroapi.com/api/${chaveApi}/search/` //valor URL pelo o nome do heroi

var btnBuscar = document.getElementById('btnBuscar')

//obter o ID pelo ao clicar no botao
btnBuscar.addEventListener('click', () => {
    let campoBusca = document.getElementById('campoBusca')
    urlId += `${campoBusca.value}`
    console.log(urlId)


})

//obter o nome do heroi pelo ao clicar no botao
btnBuscar.addEventListener('click', () => {
    let campoBusca = document.getElementById('campoBusca').value.trim(); // Remova espaços em branco do início e do fim
    if (campoBusca !== "") {
        urlNome += `${campoBusca}`//console.log(urlNome)
        try {
            fetch(urlNome, { method: "get" })
                .then(resultado => resultado.json())
                .then(dados => showInfo(dados))
            function showInfo(dados) {
                console.log(dados);
            }
        } catch (error) {
            console.log(error);
        }
    }else{
        alert("Informe o nome ou ID");
    }
}
)


