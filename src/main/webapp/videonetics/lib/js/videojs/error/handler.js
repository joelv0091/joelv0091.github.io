/**
 * 
 */
function PlayerErrorHandler(player, srcvalue) { // error scenario
    player.src(srcvalue);

    player.load();

    player.play();

}
