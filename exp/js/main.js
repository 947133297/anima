/**
 * Created by MRLWJ on 2017/4/16.
 */
require (['./my', './my2', './my3'],function (my,my2, my3){
    my3.show();
    setTimeout(function(){
        my2.root.y = -canvas.height;
        my2.show(1000);
        registerTicker(my3.root,"y",0,[[1,canvas.height]],10,function(){
            my3.clear();
        });
        registerTicker(my2.root,"y",0,[[1,canvas.height]],10,null);

        setTimeout(function(){
            my.root.y = -canvas.height;
            my.show(1000);
            registerTicker(my2.root,"y",0,[[1,canvas.height]],10,function(){
                my2.clear();
            });
            registerTicker(my.root,"y",0,[[1,canvas.height]],10,null);
        },11000);
    },10000);
});