'use strict';
const contentArtist = document.querySelector('#artist');
const contentAlbum = document.querySelector('#albums');
const content = document.querySelector('.content');
const chart = document.querySelectorAll('.chart-list');
const album = document.querySelector('.content__album');
const divChart = document.querySelector('.chart');
// const contentSongs = document.querySelector('#songs');

function showAlbum (event) {
    // console.log(event.target);
    album.classList.toggle('none');
    content.classList.toggle('none');
}


divChart.addEventListener('click', showAlbum);