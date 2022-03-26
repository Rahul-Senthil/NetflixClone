const baseUrl = "https://www.youtube.com/embed/";
const path = "/banner_images/";
const moviePath = "/movie/";
const banner = document.getElementById("banner");
const bannerImg = document.getElementById("banner-img");
const titleImg = document.getElementById("title-img");
const titleName = document.getElementById("title-name");
const details = document.getElementById("details");
const plot = document.getElementById("plot");
const starring = document.getElementById("starring");

const trailer = document.getElementById("trailer");
const trailerTitle = document.getElementById("trailer-title");
const moviePlayer = document.getElementById("moviePlayer");
const videoPlayer = document.getElementById("videoPlayer");






function handleSeries(data) {
    localStorage.setItem("data",JSON.stringify(data));
    
}

//fetch when review page is loaded
function currentMovie() {
    const current = JSON.parse(localStorage.getItem("data"));
    console.log(current);
    bannerImg.setAttribute("src",path+current.banner);
    titleImg.setAttribute("src",path+current.title_img);
    titleName.innerText = current.title;
    details.innerText = current.details;
    plot.innerText = current.plot;
    starring.innerHTML = '<span style="color: grey;">Starring: </span>'+current.starring +"</br>"+ '<span style="color: grey;">Creators: </span>'+current.creators;   
    trailer.setAttribute("src",baseUrl+current.trailer);
    trailerTitle.innerHTML = '<span style="color: grey;">Trailer: </span>'+current.title;
}

//fetch when plsyer page is loaded
function currentVideo(){
    const current = JSON.parse(localStorage.getItem("data"));
    console.log(moviePath+current.movie);
    moviePlayer.setAttribute("src",moviePath+current.movie);
    videoPlayer.load();
    videoPlayer.play();

}