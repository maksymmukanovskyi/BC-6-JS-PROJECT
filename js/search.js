'use strict';
let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__btn');
let artistArr =[];
let artistNameArr=[];
let trackNameArr=[];
let youtubeSearchQuery;

searchBtn.addEventListener('click', SearchAlbum);

function SearchAlbum(event){
    event.preventDefault();
    let searchQuery = searchInput.value;
    let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchQuery}&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json`;
    fetch(url)
        .then(response=> response.ok ? response.json():null)
        .then(data=> {
            artistArr.push(data);
            console.log(artistArr);
            getTrackName();
            getArtistName();
            console.log(artistNameArr);
            console.log(trackNameArr);
            youtubeSearchQuery = `${artistNameArr[0]} ${trackNameArr[0]}`;
            console.log(youtubeSearchQuery);
            return youtubeSearchQuery;
        });
}

function getTrackName(){
    artistArr[0].results.trackmatches.track.map(function(item){
        trackNameArr.push(item.name)
    })
}
function getArtistName(){
    artistArr[0].results.trackmatches.track.map(function(item){
        artistNameArr.push(item.artist)
    })
}
