'use strict';
let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__btn');
let artistArr =[];
let trackData = {
    tracks: []
};

searchBtn.addEventListener('click', searchTrack);

function searchTrack(event){
    trackData = {
        tracks: []
    };
    artistArr =[];
    event.preventDefault();
    let searchQuery = searchInput.value;
    let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchQuery}&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json`;
    fetch(url)
        .then(response=> response.ok ? response.json():null)
        .then(data=> {
            artistArr.push(data);
            console.log(artistArr);
            trackDataPreparation();
            function trackDataPreparation(){
                artistArr[0].results.trackmatches.track.forEach(function(item){
                    let trackName = item.name;
                    let trackArtist = item.artist;
                    let trackImage = item.image[1]['#text'];
                    let listeners = item.listeners;
                    trackData.tracks.push(
                        {
                            trackName: trackName,
                            trackArtist: trackArtist,
                            trackImage: trackImage,
                            listeners: listeners,
                        }
                    )
                });
                createTrackCard();
                console.log(trackData);
                searchInput.value ='';
            }
        });
}

function createTrackCard(){
    const source = document.querySelector('#trackCard-template').innerHTML.trim();
    const container = document.querySelector('.songs-list');
    const template = Handlebars.compile(source);
    container.innerHTML = template(trackData);
}



