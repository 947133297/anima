/**
 * Created by MRLWJ on 2017/4/16.
 */
define(function () {
    var container = new createjs.Container();
    var show = function(){
        var stageWidth = canvas.width;
        var stageHeight = canvas.height;

        var characterWidth = 75;
        var characterHeight = 96;

        var spritesheet;
        var charactor;

        var spritesheet = new createjs.SpriteSheet({
            'images': ['http://cdn.gbtags.com/gblibraryassets/libid108/charactor.png'],
            'frames': {"height": 96, "count": 10, "width": 75}
        });
        charactor  = new createjs.Sprite(spritesheet);
        charactor.x = (stageWidth - characterWidth)/2;
        charactor.y = (stageHeight - characterHeight)/2 -20;
        container.addChild(charactor);
        stage.addChild(container);
        charactor.play();
        registerTicker(charactor,"x",0,[[3,100],[3,-100]],10,null,100);
    };
    function clear(){
        stage.removeChild(container);
    }
    return {
        show: show,
        clear:clear
    };
});