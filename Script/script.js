//importando a variavel global chave API
import {env} from "../env.js";

var chaveApi = env.chaveApi
var url = `https://superheroapi.com/api/${chaveApi}/`

var btnBuscar = document.getElementById('btnBuscar')

//obter o ID pelo ao clicar no botao
btnBuscar.addEventListener('click', () =>{
    var campoBusca = document.getElementById('campoBusca')
    url = `https://superheroapi.com/api/${chaveApi}/${campoBusca.value}`
    console.log(url)
})
