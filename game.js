kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1],
});

loadRoot('./src/');
loadSprite('coin', 'coin.png');
loadSprite('evil', 'evil.png');

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj');
})

start("game");