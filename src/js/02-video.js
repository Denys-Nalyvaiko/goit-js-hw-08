import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS_CURRENT_TIME = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(LS_CURRENT_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(LS_CURRENT_TIME));
