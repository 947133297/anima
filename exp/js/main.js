/**
 * Created by MRLWJ on 2017/4/16.
 */
require (['./my', './my2', './my3','./scene1','./scene2','./lyy'],function (my,my2, my3,s1,s2,lyy){
    var lens1 = 8000,lens2 = 3500;
    s1.show();
    setTimeout(function(){
        s1.clear();
        s2.show();
    },lens1);

    setTimeout(function(){
        s2.clear();
        my3.show();
    },lens1+lens2);

    setTimeout(function(){
        my2.root.y = -canvas.height;
        my2.show(1000);
        registerTicker(my3.root,"y",0,[[1,canvas.height]],10,function(){
            my3.clear();
        });
        registerTicker(my2.root,"y",0,[[1,canvas.height]],10,null);

        setTimeout(function(){
            //my2已经播放结束
            my2.clear();
            lyy.show();
            var lyyLen = 16000;
            setTimeout(function(){
                my.root.y = -canvas.height;
                my.show(1000);
                registerTicker(lyy.root,"y",0,[[1,canvas.height]],10,function(){
                    lyy.clear();
                });
                registerTicker(my.root,"y",0,[[1,canvas.height]],10,null);
            },lyyLen);
        },11000);
    },12000+lens1+lens2);

    //my3.show();
});