//importando a variavel global chave API


var chaveApi = 1032032714593650
var urlId = `https://superheroapi.com/api/${chaveApi}/` //valor URL pelo o ID
var urlNome = `https://superheroapi.com/api/${chaveApi}/search/` //valor URL pelo o nome do heroi

var btnBuscar = document.getElementById('btnBuscar')

//obter o ID pelo ao clicar no botao
btnBuscar.addEventListener('click', () =>{
    let campoBusca = document.getElementById('campoBusca')
    urlId +=`${campoBusca.value}`
    console.log(urlId)
})

//obter o nome do heroi pelo ao clicar no botao
btnBuscar.addEventListener('click', () =>{
    let campoBusca = document.getElementById('campoBusca')
    urlNome += `${campoBusca.value}`
    console.log(urlNome)
})
