const basePath = "./image/";

export const PlayerImg = new Image();
const playerImgSrc = basePath + "player.png";

export const forestBg1 = new Image();
const forestBg1Src = basePath + "forest-layer-1.png";

export const forestBg2 = new Image();
const forestBg2Src = basePath + "forest-layer-2.png";

export const forestBg3 = new Image();
const forestBg3Src = basePath + "forest-layer-3.png";

export const forestBg4 = new Image();
const forestBg4Src = basePath + "forest-layer-4.png";

export const forestBg5 = new Image();
const forestBg5Src = basePath + "forest-layer-5.png";

function LoadImage(url, elem) {
  return new Promise((res, rej) => {
    elem.onload = () => res(elem);

    elem.onerror = rej;

    elem.src = url;
  });
}

// player image
await LoadImage(playerImgSrc, PlayerImg);

// background
await LoadImage(forestBg1Src, forestBg1);
await LoadImage(forestBg2Src, forestBg2);
await LoadImage(forestBg3Src, forestBg3);
await LoadImage(forestBg4Src, forestBg4);
await LoadImage(forestBg5Src, forestBg5);
