'use strict';
let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__btn');
let artistArr =[];
// let artistNameArr=[];
// let trackNameArr=[];
// let youtubeSearchQuery;
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
                    let trackImage = item.image[2]['#text'];
                    trackData.tracks.push(
                        {
                            trackName: trackName,
                            trackArtist: trackArtist,
                            trackImage: trackImage,
                        }
                    )
                });
                console.log(trackData);
            }
        });

}


// const trackData = {
//     tracks: [
//         {
//         trackName: trackName,
//         trackArtist: trackArtist,
//         trackImage: trackImage,
//     }
//     ]
// };






//         let trackName = `<li class="songs-item">
//     <figure class="songs-item__figure">
//         <img class="songs-item__img" src="${trackImage}" alt="image">
//         <figcaption class="songs-item__discription" >
//             <div class="discription__left-part">
//                 <p class="songs-item__music-name">${trackName}</p>
//                 <p class="songs-item__singer">${trackArtist}</p>
//             </div>
//             <p class="songs-item__music-time">5:61</p>
//         </figcaption>
//     </figure>
// </li>`
// function getTrackName(){
//     artistArr[0].results.trackmatches.track.map(function(item){
//         trackNameArr.push(item.name)
//     })
// }
// function getArtistName(){
//     artistArr[0].results.trackmatches.track.map(function(item){
//         artistNameArr.push(item.artist)
//     })
// }


// const container = document.querySelector('.container');
//
// const createPostCard = ({img,title,text,link})=>
//     `<div class="post">
//     <img class="post__image" src="${img}" alt="post image">
//     <h2 class="post__title"${title}</h2>
//     <p class="post__text">${text}</p>
//     <a class="button" href="#">${link}</a>
// </div>`;
//
// const createCards = arr => arr.reduce((acc, card) => acc + createPostCard(card),``);
// container.insertAdjacentHTML('afterbegin',createCards(posts));