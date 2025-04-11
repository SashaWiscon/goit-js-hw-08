import Player from '@vimeo/player';
console.log('hi 2');
const playerEl = document.querySelector('iframe');
const player = new Player(playerEl);

player.on('timeupdate', onPlay);

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}


// player.on('play', function () {
//   console.log('Video is playing!');
// });
