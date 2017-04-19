/**
 * Created by hz on 17-4-18.
 */

define(function () {
    var container = new createjs.Container();

    var first = "学习是人类与生俱来的天赋本能";
    var second = "但人人生而不同，世界上没有两个人以同样的方式学习";

    var show = function () {

        var bgBmp = new createjs.Bitmap("img/scene1/background.png");
        var bookBmp = new createjs.Bitmap("img/scene1/book.png");
        var computerBmp = new createjs.Bitmap("img/scene1/computer.png");
        var phoneBmp = new createjs.Bitmap("img/scene1/phone&pad.png");
        var logo = new createjs.Bitmap("img/scene1/kuxiao.png");

        var firstText = new createjs.Text(first,"normal 32px microsoft yahei","#222222");
        var secondText = new createjs.Text(second,"normal 32px microsoft yahei","#222222");

        // firstText.y = 30;
        firstText.x = canvas.width / 2 - firstText.getBounds().width / 2;
        firstText.y = 630;
        // secondText.y = firstText.y + firstText.getBounds().height + 10;
        secondText.x = canvas.width / 2 - secondText.getBounds().width / 2;
        secondText.y = firstText.y;

        secondText.visible = false;
        //
        // //first array
        // var firstArr = new Array();
        // firstArr[0] = new createjs.Text(first.charAt(0), "normal 32px microsoft yahei","#222222");
        // firstArr[0].x = firstText.x;
        // firstArr[0].y = firstText.y + 550;
        // firstArr[0].visible = false;
        //
        // for (i = 1; i < first.length; i++) {
        //     firstArr[i] = new createjs.Text(first.charAt(i), "normal 32px microsoft yahei","#222222");
        //     firstArr[i].x = firstArr[i - 1].x + firstArr[i - 1].getBounds().width;
        //     firstArr[i].y = firstArr[i - 1].y;
        //     firstArr[i].visible = false;
        // }
        //
        // //second array
        // var secondArr = new Array();
        // secondArr[0] = new createjs.Text(second.charAt(0), "normal 32px microsoft yahei","#222222");
        // secondArr[0].x = secondText.x;
        // secondArr[0].y = secondText.y + 550;
        // secondArr[0].visible = false;
        // for (i = 1; i < second.length; i++) {
        //     secondArr[i] = new createjs.Text(second.charAt(i), "normal 32px microsoft yahei","#222222");
        //     secondArr[i].x = secondArr[i - 1].x + secondArr[i - 1].getBounds().width;
        //     secondArr[i].y = secondArr[i - 1].y;
        //     secondArr[i].visible = false;
        // }
        //
        // //显示字幕
        // var ticker = window.setInterval(showText, 150);
        // var pos = 0;
        // function showText() {
        //     if (pos >= firstArr.length + secondArr.length){
        //         window.clearInterval(ticker);
        //         return;
        //     }
        //     if (pos < firstArr.length) {
        //         firstArr[pos++].visible = true;
        //
        //     }else {
        //         secondArr[pos - firstArr.length].visible = true;
        //         pos++;
        //     }
        // }

        // var showTextTime = (firstArr.length) * 200;

        //显示第二句字幕
        var t = window.setTimeout(function () {
            firstText.visible = false;
            secondText.visible = true;
        }, 2000);

        phoneBmp.x = 30;
        phoneBmp.y = canvas.height / 2 - 260 / 2 + 50;
        phoneBmp.scaleX = 0;
        phoneBmp.scaleY = 0;

        bookBmp.y = canvas.height / 2 - 380 / 2 + 50;
        bookBmp.x = canvas.width - 380 - 50;
        bookBmp.scaleX = 0;
        bookBmp.scaleY = 0;

        computerBmp.x = canvas.width / 2 - 110;
        computerBmp.y = 20;
        computerBmp.scaleX = 0;
        computerBmp.scaleY = 0;

        logo.x = canvas.width / 2 - 160;
        logo.y = -200;

        var logoY = canvas.height / 2 - 40;



        registerTicker(phoneBmp, "scaleX", 500, [[0.8, 1]], 100, null, 1);
        registerTicker(phoneBmp, "scaleY", 500, [[0.8, 1]], 100,
            function () {
                registerTicker(bookBmp, "scaleX", 1500, [[1, 1]], 10, null);
                registerTicker(bookBmp, "scaleY", 1500, [[1, 1]], 10,
                    function () {
                        // registerTicker(firstText, "y", 1000, [[1, 550]], 10, null);
                        // registerTicker(secondText, "y", 1000, [[1, 550]], 10, null);
                        registerTicker(computerBmp, "scaleX", 1500, [[1, 1]], 10, null);
                        registerTicker(computerBmp, "scaleY", 1500, [[1, 1]], 10, null);
                        registerTicker(logo, "y", 2500, [[1, 200 + logoY]], 10, null);
                });
            });

        container.addChild(bgBmp);
        container.addChild(firstText);
        container.addChild(secondText);
        container.addChild(bookBmp);
        container.addChild(computerBmp);
        container.addChild(phoneBmp);
        container.addChild(logo);

        // for (i = 0; i < firstArr.length; i++){
        //     container.addChild(firstArr[i]);
        // }
        // for (i = 0; i < secondArr.length; i++) {
        //     container.addChild(secondArr[i]);
        // }

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