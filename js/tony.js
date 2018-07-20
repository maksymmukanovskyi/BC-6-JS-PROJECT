'use strict'
;(function () {
    const cont = document.querySelector('.cont')
    
    const temp = document.querySelector('#youTube').innerHTML.trim()
    const func = Handlebars.compile(temp)
        
    function qwerty (data) {
        cont.innerHTML = func(data)
    }

    const musicTemp = document.querySelector('#trackCard-template').innerHTML.trim()
    const musicFunc = Handlebars.compile(musicTemp)

    const musicCont = document.querySelector('.songs-list')
    const tracks = document.querySelectorAll('.songs-item')
    const tracksArr = Array.from(tracks)

    const trackName = document.querySelector('.songs-item__music-name')
    const trackArtist = document.querySelector('.songs-item__singer')
    let tNameContent = trackName.textContent
    let tArtistContent = trackArtist.textContent

    function click (event) {
        tracksArr.some((el,idx) => {
            if(event.target === el[idx]) {
                
                let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAecHJZnOuuNBUl4UaHRSqJEot9xHIuNXI&q=${tArtistContent} ${tNameContent}&maxResults=1&part=snippet` 

                fetch(url) 
                    .then(response => {
                        if(response.ok) {
                            console.log('response', response);
                            return response.json();
                        }   
                    })
                    .then(data => {
                        console.log('data', data.items[0].id.videoId);
                        qwerty(data.items[0].id)
                    })
            }
        })
    } 

    musicCont.addEventListener('click', click)









//Fetch for artists!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
    // const input = document.querySelector()

    let artistsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=drake&limit=9&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json`

    fetch(artistsUrl)
        .then(response => {
            if(response.ok === true) {
                console.log(response);
                return response.json()
            }
        })
        .then(data => {
            console.log(data);
        })


}) 
();


