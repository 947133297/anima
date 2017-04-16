/**
 * Created by MRLWJ on 2017/4/16.
 */

define(function () {
    var show = function(){
        var theText = new createjs.Text("极客标签","normal 32px microsoft yahei","#222222");
        theText.x =0;
        theText.y = 0;
        theText.alpha = 1;
        stage.addChild(theText);
        registerTicker(theText,"x",2000,[[3,100]],10,null);
        registerTicker(theText,"alpha",2000,[[0.2,-1],[0.2,1],[0.2,-1],[0.2,1],[0.2,-1],[0.2,1]],10,function(){
            registerTicker(theText,"y",2000,[[0.7,500]],2,function(){
                registerTicker(theText,"rotation",0,[[1,20]],10,function(){
                    registerTicker(theText,"rotation",0,[[1,-20]],10,null);
                });
            });
        });

        var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 300, 300);
        var shape = new createjs.Shape(graphics);
        shape.shadow = new createjs.Shadow("#00FF00", 50, 50, 300);
        shape.addEventListener("click", function(event){
            alert("红色方块被点击");
        });
        var container = new createjs.Container();
        container.x = 800;
        container.y = 300;
        stage.addChild(container);
        container.addChild(shape);
        container.addChild(new createjs.Text("点击我","normal 40px microsoft yahei","#222222"));
        registerTicker(container,"alpha",1000,[[0.2,-1],[0.2,1]],10,null,10);
        registerTicker(container,"scaleX",1000,[[0.2,1],[0.2,-1]],10,null,2);
        registerTicker(container,"scaleY",1000,[[0.2,1],[0.2,-1]],10,null,2);
        registerTicker(container,"rotation",1000,[[1,100],[1,-100]],10,null,5);

        var circle = new createjs.Shape();
        circle.graphics.beginFill("green").drawRect(0, 0, 40, 40);
        circle.regX = circle.regY = 20;
        circle.x = circle.y = 100;
        stage.addChild(circle);
        registerTicker(circle,"rotation",0,[[100,10000]],10,null);
        registerTicker(circle,"x",0,[[3,50],[3,-50]],10,null);
        registerTicker(circle,"y",0,[[3,50],[3,-50]],10,null);
        registerTicker(circle,"scaleX",500,[[0.8,1],[0.8,-1]],10,null,30);
        registerTicker(circle,"scaleY",500,[[0.8,1],[0.8,-1]],10,null,30);

        registerTicker(theText,"y",5000,[[0.1,50],[0.3,-4],[0.3,4]],10,null);

        if(ins.end!=null){
            setTimeout(ins.end,10000);
        }
    };

    var ins = new Object();
    return {
        show: show,
        ins:ins
    };
});