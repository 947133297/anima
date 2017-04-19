define(function() {
    var container = new createjs.Container();

    var first = "在当今这个一切都离不开internet的信息社会";
    var second = "我们每天的生活都可以自由选择...";

    var show = function() {
        var firstText = new createjs.Text(first,"normal 48px microsoft yahei","#222222");
        var secondText = new createjs.Text(second, "normal 48px microsoft yahei","#222222");

        var elemeBmp = new createjs.Bitmap("img/scene2/take_out.jpg");
        var taobaoBmp = new createjs.Bitmap("img/scene2/taobao.jpg");
        var musicBmp = new createjs.Bitmap("img/scene2/music.jpg");


        firstText.y = 630;
        firstText.x = canvas.width / 2 - firstText.getBounds().width / 2;
        secondText.y = firstText.y;
        secondText.x = canvas.width / 2 - secondText.getBounds().width / 2;

        secondText.visible = false;

        //显示第二句字幕
        window.setTimeout(function () {
            firstText.visible = false;
            secondText.visible = true;
        }, 1500);
        elemeBmp.x = (canvas.width - 1020) / 2;
        elemeBmp.y = 500;

        taobaoBmp.x = elemeBmp.x + 300 + 60;
        taobaoBmp.y = 500;

        musicBmp.x = taobaoBmp.x + 360;
        musicBmp.y = 500;

        var bmpY = 200;

        container.addChild(elemeBmp);
        container.addChild(taobaoBmp);
        container.addChild(musicBmp);
        registerTicker(elemeBmp,"y",0.5,[[1,bmpY - 500]],10,null,1);
        registerTicker(taobaoBmp,"y",0.5,[[1,bmpY - 500]],10,null,1);
        registerTicker(musicBmp,"y",0.5,[[1,bmpY - 500]],10,null,1);

        container.addChild(firstText);
        container.addChild(secondText);
        stage.addChild(container);
    };

    function clear() {
        stage.removeChild(container);
    }

    return {
        show: show,
        clear: clear
    }
});