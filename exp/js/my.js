/**
 * Created by MRLWJ on 2017/4/16.
 */
define(function () {
    var root = new createjs.Container();
    stage.addChild(root);
    var show = function(){
        var c4 = new createjs.Container(); //简历以及印章所在容器
        c4.scaleX = c4.scaleY = 0.8;
        root.addChild(c4);
        var c3 = new createjs.Container(); //放大镜中文字所在容器
        var c2 = new createjs.Container(); //放大镜所在容器
        var c1 = new createjs.Container(); //放大镜中文字所在容器
        var img = new createjs.Bitmap('img/lwj/scale.svg');
        img.scaleX = img.scaleY = 2;
        c2.addChild(img); //放大镜添加进容器中
        c2.addChild(c1);
        c1.x = 70; //调节子容器c1在c2中的位置
        c1.y = 60;

        var jianli = new createjs.Bitmap('img/lwj/jianli.svg');
        jianli.scaleX = jianli.scaleY = 5;
        jianli.x = 300;
        jianli.y = 30;
        c4.addChild(jianli);

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
        c2.scaleX = c2.scaleY = 1.2;
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
        c4.addChild(zhang);

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
        //registerTicker(root,"x",1500,[[1,-400]],5,null);
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
        sendBtn.graphics.beginFill("#495A80").drawRect(0, 0, 90,30);
        sendBtn.x = 280;
        sendBtn.y = 230;
        pcContainer.addChild(sendBtn);

        var sendText = new createjs.Text("投递简历","normal 18px microsoft yahei","#DDF0ED");
        sendText.x = 289;
        sendText.y = 231;
        pcContainer.addChild(sendText);

        var finger = new createjs.Bitmap('img/lwj/finger.svg');
        finger.scaleX = finger.scaleY = 0.15;
        finger.x = 300;
        finger.y = 100;
        pcContainer.addChild(finger);

        //隐藏放大镜
        setTimeout(function(){
            c2.visible = false;
        },3000);

        c4.x = c4.regX = 650;
        c4.y = c4.regY = 300;

        //简历飞进电脑中
        registerTicker(c4,"scaleY",3000,[[0.7,-0.6]],5,null);
        registerTicker(c4,"scaleX",3000,[[0.7,-0.6]],5,null);
        registerTicker(c4,"x",3000,[[0.7,550]],5,function(){
            //鼠标往下移动，点击按钮
            registerTicker(finger,"y",0,[[1,140]],5,function(){
                setTimeout(function(){
                    sendBtn.graphics.beginFill("#C3BED4").drawRect(0, 0, 90,30);
                    setTimeout(function(){
                        sendBtn.graphics.beginFill("#495A80").drawRect(0, 0, 90,30);
                        registerTicker(root,"x",0,[[0.7,-500]],5,null);
                    },250);
                },100);
            });
        });

       // root.x-=500;
        //左边建筑
        var c6 = new createjs.Container();
        c6.x = 1630;
        c6.y = 40;
        root.addChild(c6);
        var building = new createjs.Bitmap('img/lwj/building.svg');
        building.scaleX = building.scaleY = 2;
        c6.addChild(building);
        var zhaopai = new createjs.Bitmap('img/lwj/zhaopai.svg');
        c6.addChild(zhaopai);
        zhaopai.x = 200;
        zhaopai.y = -50;
        var cpName = new createjs.Text("xxx公司","normal 28px microsoft yahei","#000");
        cpName.x = 215;
        cpName.y = -8;
        c6.addChild(cpName);

        registerTicker(c4,"scaleY",6000,[[0.7,-0.19]],5,null);
        registerTicker(c4,"scaleX",6000,[[0.7,-0.19]],5,null);
        registerTicker(c4,"x",6000,[[0.7,600]],5,null);
        registerTicker(c4,"y",6000,[[0.7,-100]],5,null);
        //registerTicker(c4,"scaleX",4000,[[0.7,-0.1]],5,null);

        //播放字幕
        showzimu(1300,["在酷校，你的培训经历将获得专家认证","你可以拿着简历在酷校上找企业、找工作，成功入职名企，娶到白富美，顺利走上人生巅峰",""],2500);

        //最后logo出现
        //到这里添加到stage中的对象有：root、logo、endBg
        setTimeout(function(){
            var endBg = new createjs.Shape();
            endBg.graphics.beginFill("#FFF").drawRect(0, 0, canvas.width,canvas.height);
            endBg.alpha = 0;
            stage.addChild(endBg);
            registerTicker(endBg,"alpha",0,[[0.6,1]],5,null);
            var logo = new createjs.Bitmap('img/lwj/logo.png');
            logo.x = 420;
            logo.y = -120;
            stage.addChild(logo);
            registerTicker(logo,"y",600,[[0.15,420]],5,function(){
                registerTicker(logo,"y",0,[[0.1,-40]],5,function(){
                    registerTicker(logo,"y",0,[[0.1,40]],5,null);
                });
            });
        },7000);


    };

    /**
     * 显示字幕
     * @param delay 延迟显示
     * @param textArr 字幕数组，要求最后一个元素为空字符串
     * @param gap 字幕切换的时间间隔
     */
    function showzimu(delay,textArr,gap){
        var zimu = new createjs.Text("","normal 30px microsoft yahei","#000");
        stage.addChild(zimu);
        zimu.y = 630;
        zimu.x = canvas.width/2;
        zimu.lineWidth = canvas.width;
        zimu.textAlign = "center";
        for(var i = 0;i<textArr.length;i++){
            var f = function(){
                var text = textArr[i];
                setTimeout(function(){
                    if(text == ""){
                        //alert("字幕结束");
                        stage.removeChild(zimu);
                    }
                    zimu.text = text;
                },delay);
            };
            f();
            delay+=gap;
        }
    }

    function clear(){
        stage.removeChild(container);
    }
    return {
        show: show,
        clear:clear,
        showzimu:showzimu
    };
});