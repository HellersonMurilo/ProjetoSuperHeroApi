const btnBuscar = document.getElementById('botaoPesquisa')



/* btnBuscar.addEventListener('click', () => {
    var campoBusca = document.getElementById("campoBusca").value
    if (campoBusca != "") {
        let url;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
            }
        };

        url = 'https://api.themoviedb.org/3/search/movie?query=' + campoBusca + '&include_adult=false&language=pt-BR&page=1'
        console.log(url)

        fetch(url, options)
            .then(response => response.json())
            .then(response => (showInfo(response)))
            .catch(err => console.error(err));
    }else{
        alert('Nome filme não informado')
    }

    function showInfo(response) {
        console.log(response)
    }

})
 */