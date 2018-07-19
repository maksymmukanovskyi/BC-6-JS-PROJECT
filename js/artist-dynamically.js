
(function () {
    const topArtists = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=66fe76bd2d42439b32aabf649e537b4d&format=json';
    fetch(topArtists)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            info(data);
})

    function info(elem) {
        const artistDynamically = document.querySelector('#artist-dynamically').innerHTML.trim();
        const content = document.querySelector('.content');
        const convert = Handlebars.compile(artistDynamically);
        console.log('elem', elem);
        const result = convert(elem.artists);

        console.log('result', result);
        content.innerHTML = result;
    }


})();

