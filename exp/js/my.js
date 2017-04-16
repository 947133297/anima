/**
 * Created by MRLWJ on 2017/4/16.
 */
define(function () {
    var root = new createjs.Container();
    stage.addChild(root);
    var show = function(){

        var jianli = new createjs.Bitmap('img/lwj/jianli.svg');
        jianli.scaleX = jianli.scaleY = 5;
        jianli.x = 300;
        jianli.y = 30;
        root.addChild(jianli);

        var c3 = new createjs.Container(); //放大镜中文字所在容器
        var c2 = new createjs.Container(); //放大镜所在容器
        var c1 = new createjs.Container(); //放大镜中文字所在容器
        var img = new createjs.Bitmap('img/lwj/scale.svg');
        img.scaleX = img.scaleY = 2;
        c2.addChild(img); //放大镜添加进容器中
        c2.addChild(c1);
        c1.x = 70; //调节子容器c1在c2中的位置
        c1.y = 60;

        var bg = new createjs.Shape();
        bg.graphics.beginFill("#FFF").drawRect(-50, -50, 1000,1000);
        c1.addChild(bg);

        var theText = new createjs.Text("酷校教育","normal 24px microsoft yahei","#222222");
        var theText1 = new createjs.Text("培训师：李小红","normal 24px microsoft yahei","#222222");
        theText1.y = 30;
        var theText2 = new createjs.Text("极速服务器开发","normal 24px microsoft yahei","#222222");
        theText2.y = 60;

        c3.addChild(theText);
        c3.addChild(theText1);
        c3.addChild(theText2);

        c1.addChild(c3);

        var shape = new createjs.Shape();
        shape.graphics.drawCircle(123, 114, 80);
        c1.mask = shape;
        root.addChild(c2);
        c2.scaleX = c2.scaleY = 1.5;
        c2.x = 360;
        c2.y = 300;
        registerTicker(c2,"x",0,[[0.7,70],[0.7,-70]],5,null,3);
        registerTicker(c3,"x",0,[[0.7,-70],[0.7,70]],5,null,3);

        // 盖章逻辑
        var zhang = new createjs.Bitmap('img/lwj/zhang.svg');
        zhang.scaleX = zhang.scaleY = 1;
        zhang.x = 730;
        zhang.y = 100;
        zhang.visible = false;
        root.addChild(zhang);

        var yinzhang = new createjs.Bitmap('img/lwj/yinzhang.jpg');
        yinzhang.scaleX = yinzhang.scaleY = 0.3;
        yinzhang.x = 700;
        yinzhang.y = -250;
        root.addChild(yinzhang);

        registerTicker(yinzhang,"y",0,[[1,300]],5,function(){
            zhang.visible = true;
            setTimeout(function(){
                registerTicker(yinzhang,"y",0,[[1,-300]],5,null);
            },500);
        });

        //投简历逻辑
        //registerTicker(root,"x",2500,[[1,-200]],5,null);
        root.x = -300;

        var pcContainer = new createjs.Container();
        pcContainer.x = 1050;
        pcContainer.y = 100;

        root.addChild(pcContainer);

        var pc = new createjs.Bitmap('img/lwj/pc.svg');
        pc.scaleX = pc.scaleY = 3.5;
        pcContainer.addChild(pc);

        var company = new createjs.Text("XXX公司","normal 24px microsoft yahei","#222222");
        company.x = company.y = 80;
        pcContainer.addChild(company);

        //TODO 让按钮闪烁起来、添加鼠标移动、简历卷起来发送
        var sendBtn = new createjs.Shape();
        sendBtn.graphics.beginFill("#F00").drawRect(0, 0, 90,30);
        sendBtn.x = 280;
        sendBtn.y = 230;
        pcContainer.addChild(sendBtn);

        var sendText = new createjs.Text("投递简历","normal 18px microsoft yahei","#222222");
        sendText.x = 289;
        sendText.y = 231;
        pcContainer.addChild(sendText);


    };
    function clear(){
        stage.removeChild(container);
    }
    return {
        show: show,
        clear:clear
    };
});