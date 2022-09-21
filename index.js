const formSubmit = document.getElementById("form-submit")
const mainPage = document.getElementById("main-page")
const search = document.getElementById("search")

search.addEventListener("click", clear)
formSubmit.addEventListener("submit", submit)

function clear(){
    event.preventDefault()
    search.value = ""
    mainPage.innerHTML = `
        <div class="enter-page ">
            <img class="enter-page-img" src="data:image/png;base64,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">
            <h3>Start exploring</h3>
        </div>
    `
}

function submit() {    
    document.getElementsByClassName("enter-page")[0].classList.add("hide")
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=f268058d&s=${formSubmit[0].value}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.Response !== 'False')
                reloadPage(data.Search)
            else            
                mainPage.innerHTML = `
                <div class="enter-page ">
                    <h3>Unable to find what you’re looking for. Please try another search.</h3>
                </div>
            `
        })
}

function reloadPage(data){
   for(let i = 0; i < data.length; i++){
        fetch(`https://www.omdbapi.com/?apikey=f268058d&i=${data[i].imdbID}&plot=full`)
            .then(res => res.json())
            .then(data => {
                if(!localStorage.getItem(data.imdbID))
                mainPage.innerHTML += `
                    <div class="loaded-page " id="div-${data.imdbID}">
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
                                    <img class="plus" src="https://th.bing.com/th/id/R.a97275781f69f84b99ac5ca7cb8a446b?rik=1GaAhEetDRE9Zw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_28497.png&ehk=xhSdzxxsoOGljNGrOiFPEdKBh58KIa2WXs2h%2fxL%2ftBE%3d&risl=&pid=ImgRaw&r=0">
                                    <button id="${data.imdbID}" onclick="addToWatchlist(id)">Watchlist</button>
                                </div>
                            </div>
                            <p class="movie-plot">${data.Plot.substring(0, 300)}${data.Plot.length > 150? '... <span>read more</span>' : '. '}</p>
                        </div>                                      
                    </div>
                `
            })
    }
}

function addToWatchlist(id){
    localStorage.setItem(id, id)
    document.getElementById(`div-${id}`).classList.add("hide")
}