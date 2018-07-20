'use strict'
;(function () {
    const cont = document.querySelector('.cont')
    
    let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAecHJZnOuuNBUl4UaHRSqJEot9xHIuNXI&q=brainstorm&maxResults=1&part=snippet' 

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
      
    const temp = document.querySelector('#youTube').innerHTML.trim()
    const func = Handlebars.compile(temp)
        
    const btn = document.querySelector('.youBtn')
        
    // btn.addEventListener('click', qwerty)
    
    function qwerty (data) {
        cont.innerHTML = func(data)
    }





}) 
();



