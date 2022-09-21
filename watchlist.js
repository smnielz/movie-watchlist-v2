const mainPageWatch = document.getElementById("main-page")

if(localStorage.length > 0){
    document.getElementsByClassName("enter-page")[0].classList.add("hide")
    for (let [key, value]of Object.entries(localStorage)) {
            fetch(`https://www.omdbapi.com/?apikey=f268058d&i=${key}&plot=full`)
                .then(res => res.json())
                .then(data => {
                    mainPageWatch.innerHTML += `
                        <div class="loaded-page container" id="div-${data.imdbID}">
                            <img class="loaded-page-img" src="${data.Poster}">
                            <div class="loaded-page-movie-info">                        
                                <div class="title-star-rating">
                                    <h3 class="movie-title">${data.Title}</h3>
                                    <div class="star-rating">
                                        <img class="star" src="https://pngimg.com/uploads/star/star_PNG41449.png"> 
                                        <p class="movie-rating">${data.imdbRating}</p>
                                    </div>                        
                                </div> <!-- div title-star-rating -->
        
                                <div class="runtime-genre">
                                    <p class="movie-runtime">${data.Runtime}</p>
                                    <p class="movie-genre">${data.Genre}</p>
                                    <div class="plus-watchlist">
                                        <img class="plus" src="https://th.bing.com/th/id/R.3483c28e14f7b961034341e300a7b500?rik=3Ks6HyGrU2isYg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_363474.png&ehk=vWWhh1R1nQBLhs2Fvbt5sROOxZZNfYBaukUFw%2fTkTQ0%3d&risl=&pid=ImgRaw&r=0">
                                        <button id="${data.imdbID}" onclick="addToWatchlist(id)">Remove</button>
                                    </div>
                                </div>
                                <p class="movie-plot">${data.Plot.substring(0, 300)}${data.Plot.length > 150? '... <span>read more</span>' : '. '}</p>
                            
                            </div>                 
                        </div>
                    `
                })
        }
    }

else{
    document.getElementsByClassName("enter-page")[0].classList.remove("hide")
}

function addToWatchlist(id){
    localStorage.removeItem(id, id)
    document.getElementById(`div-${id}`).classList.add("hide")
    if(localStorage.length === 0){
        document.getElementsByClassName("enter-page")[0].classList.remove("hide")
    }
    else if(localStorage.length === 1 && localStorage.key.substring(0,1) !== 't'){
        document.getElementsByClassName("enter-page")[0].classList.remove("hide")
    }
}