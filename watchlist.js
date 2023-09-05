let content = Array(0)
const LS = localStorage
import { key } from "./index.js"
import { start } from "./index.js"






//checking if have something in local storage
if(LS.key('data')){
    content = Array(0)
    JSON.parse(LS.data).map(x=>gethtml(x))
}

async function gethtml(id){
    const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}`)
    const data = await res.json()
    const {Response,Error,Plot,Poster,Title,imdbRating,Runtime,Genre} = data;
    if (Response === "False"){
    if(Error === 'Request limit reached!'){
        document.getElementById("movies").innerHTML = `<div class="empty">
    <p>It's beta and i have only 1000 reasuts-per day limit...</p>
    <img src="Photos/Oops_.svg">`}}
    else if(Response === "True" && Plot !== "N/A"){
    if(Plot.length > 169){
        
      content.push(`
      <div class="card">
          <div class="movie">
          <div class="img">
              <img src=${Poster} class="poster" onerror="this.onerror=null; this.src='Photos/error.jpg'"/>
          </div>
      
              <div class="content ">
                <div class="flex title-container">
                  <h2 class="title">${Title}</h1> 
                  <p><img src="Photos/star.svg">${imdbRating}</p>
                </div>
  
                <div class="flex info">
                    <div class="flex">
                        <p>${Runtime}</p> 
                        <p>${Genre}</p> 
                    </div>
                    <button data-watch=${id} data-add="true"><img src="Photos/icon-2.svg"> Watchlist</button>
                  </div>
                  
                  <div class="plot">
                      <p>${Plot.slice(0,169)}<span style="display: none;" id="${id}">${Plot.slice(169)}</span> <a onclick="openMore('${id}', '${id.slice(0,5)}')" id="${id.slice(0,5)}">Read more...</a></p>
                  </div>
              </div>
          </div>
      </div>`)
   
  }
  
    else{
      content.push(`
      
      <div class="card">
      <div class="movie">
        <div class="img">
          <img src=${Poster} class="poster" onerror="this.onerror=null; this.src='Photos/error.jpg'"/>
        </div>
    
          <div class="content ">
            <div class="flex title-container">
              <h2 class="title">${Title}</h1> <p><img src="Photos/star.svg">${imdbRating}</p>
            </div>
              
            <div class="flex info">
                <div class="flex">
                    <p>${Runtime}</p> 
                    <p>${Genre}</p> 
                </div> 
            <button data-watch=${id} data-add="true"><img src="Photos/icon-2.svg"> Watchlist</button>
            </div>
  
            <div class="plot">
              <p>${Plot}</p>
            </div>
          </div>
      </div>
      </div>`)
    }
    document.getElementById("movies").innerHTML = content.join('')}
  if($(".card-content .card").length > 6){
    start()
    }
  }


// delete clicked item
document.addEventListener("click", e=>{
    if(e.target.dataset.add){
        LS.data = JSON.stringify(JSON.parse(LS.data).filter(x=> { return x != e.target.dataset.watch}))
        location.reload()
      content = Array(0)
        JSON.parse(LS.data).map(x=>gethtml(x))
    }     
  })





















