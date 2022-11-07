export const PlayerImg = new Image();
const playerImgSrc = "./image/player.png";

function LoadImage(url, elem) {
  return new Promise((res, rej) => {
    elem.onload = () => res(elem);

    elem.onerror = rej;

    elem.src = url;
  });
}

await LoadImage(playerImgSrc, PlayerImg);
