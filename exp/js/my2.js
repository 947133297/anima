/**
 * Created by MRLWJ on 2017/4/16.
 */
define(function () {
    var root = new createjs.Container();
    stage.addChild(root);
    var show = function(){
        var selectContainer = new createjs.Container();
        root.addChild(selectContainer);

        var gapHeight = 120; //两个选项之间的高度差

        var select1 = new createjs.Shape();
        select1.graphics.beginFill("#EB3F2F").drawRoundRectComplex (0, 0, 300, 80,40,40,40,40);

        var select2 = new createjs.Shape();
        select2.y = gapHeight;
        select2.graphics.beginFill("#EB3F2F").drawRoundRectComplex (0, 0, 300, 80,40,40,40,40);

        var select3 = new createjs.Shape();
        select3.graphics.beginFill("#EB3F2F").drawRoundRectComplex (0, 0, 300, 80,40,40,40,40);
        select3.y = gapHeight*2;

        selectContainer.addChild(select1);
        selectContainer.addChild(select2);
        selectContainer.addChild(select3);

        var text1 = new createjs.Text("我要成为工程师","normal 30px microsoft yahei","#000");
        text1.y = 15;

        var text2 = new createjs.Text("我要成为策划师","normal 30px microsoft yahei","#000");
        text2.y = gapHeight+text1.y;

        var text3 = new createjs.Text("我要成为X X X","normal 30px microsoft yahei","#000");
        text3.y = gapHeight*2+text1.y;

        text1.x = text2.x = text3.x = 40;
        selectContainer.addChild(text1);
        selectContainer.addChild(text2);
        selectContainer.addChild(text3);

        var finger = new createjs.Bitmap('img/lwj2/finger.svg');
        finger.scaleX = finger.scaleY = 0.6;
        selectContainer.addChild(finger);
        finger.x = 320;

        registerTicker(finger,"y",0,[[0.3,gapHeight]],5, function () { //下移
            registerTicker(finger,"y",700,[[0.3,gapHeight]],5, function () { //下移
                registerTicker(finger,"y",700,[[0.3,-gapHeight]],5, function () {//上移
                    //设置第二个为选中,闪烁效果
                    shine(200,select2,"#EB3F2F","#DE8C68",200,4);
                });
            });
        });

        selectContainer.x = 200;
        selectContainer.y = 170;

        //添加主角
        var man = new createjs.Bitmap('img/lwj2/man.svg');
        man.scaleX = man.scaleY = 3;
        root.addChild(man);

        man.x = 680;
        man.y = 130;

        root.x = -600;
        //registerTicker(root,"x",3500,[[0.5,-600]],5, null);

        // 添加右侧的扫描信息文字
        var msgLineGap = 60;
        var msg1 = new createjs.Text("姓名：X X X","normal 30px microsoft yahei","#000");
        var msg2 = new createjs.Text("学习基础：零基础","normal 30px microsoft yahei","#000");
        var msg3 = new createjs.Text("喜欢的学习方式：喜欢动画","normal 30px microsoft yahei","#000");
        var msg4 = new createjs.Text("正在扫描 ... ","normal 30px microsoft yahei","#000");
        msg1.y = 200;
        msg2.y = msg1.y + msgLineGap;
        msg3.y = msg1.y + msgLineGap*2;
        msg4.y = msg1.y + msgLineGap*3;
        msg1.x = msg2.x = msg3.x = msg4.x = 1300;
        root.addChild(msg1);
        root.addChild(msg2);
        root.addChild(msg3);
        root.addChild(msg4);

        //播放扫描动画 一个中文字体的宽为28
        showText(msg1,1000,28);
        //TODO 继续其他扫描信息的输出
    };

    /**
     * 让选项闪烁起来
     * @param del 延迟执行时间
     * @param obj 选项
     * @param begCol 开始颜色
     * @param endCol 闪烁颜色
     * @param gap 闪烁间隔
     * @param times 次数
     */
    function shine(del,obj,begCol,endCol,gap,times){
        var delay = 0;
        var col = endCol;
        setTimeout(function(){
            for(var i = 0;i<times;i++){
                var f = function(d){
                    setTimeout(function(){
                        obj.graphics['beginFill'](col).drawRoundRectComplex (0, 0, 300, 80,40,40,40,40);
                        if(col == endCol){
                            col = begCol;
                        }else{
                            col = endCol;
                        }
                    },d);
                };
                f(delay);
                delay+=gap;
            }
        },del);
    }
    function showText(obj,gapTime,gapWidth){
        obj.mask = new createjs.Shape();
        obj.mask.graphics.drawRect (obj.x, obj.y, 0, 40);
        var delay = 0;
        for(var i = 0;i<obj.text.length;i++){
            var f = function (delay,i) {
                setTimeout(function(){
                    obj.mask.graphics.drawRect (obj.x, obj.y, i*gapWidth, 40);
                },delay);
            };
            f(delay,i);
            delay+=gapTime;
        }
    }
    function clear(){
        stage.removeChild(root);
    }
    return {
        show: show,
        clear:clear
    };
});