'use strict';
let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__btn');
let artistArr =[];
const trackData = {
    tracks: []
};

searchBtn.addEventListener('click', searchTrack);

function searchTrack(event){
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
                    trackData.tracks.push(
                        {
                            trackName: trackName,
                            trackArtist: trackArtist,
                            trackImage: trackImage,
                        }
                    )
                });
                createTrack()
                console.log(trackData);
            }
        });

}

function createTrack(){
    const source = document.querySelector('#trackCard-template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = template(trackData);
    const container = document.querySelector('.songs-list');
container.innerHTML = markup;
}



