/**
 * Created by MRLWJ on 2017/4/16.第三幕 播放时间10s
 */
define(['my'],function (my) {
    var root = new createjs.Container();
    stage.addChild(root);

    var show = function(){
        var pipeline = new createjs.Bitmap('img/lwj3/pipeline_body.svg');
        root.addChild(pipeline);

        pipeline.y = 500;
        pipeline.x = 100;
        pipeline.scaleX = 0.8;

        //齿轮
        var rate = 200; //齿轮的旋转速度
        var wheelLeft = new createjs.Bitmap('img/lwj3/pipeline_wheel.png');
        root.addChild(wheelLeft);
        wheelLeft.scaleX = wheelLeft.scaleY = 0.7;
        wheelLeft.regX = 50;
        wheelLeft.regY = 50;
        wheelLeft.y = 515;
        wheelLeft.x = 110;

        var wheelRight = wheelLeft.clone();
        root.addChild(wheelRight);
        wheelRight.x = 1100;

        registerTicker(wheelLeft,"rotation",0,[[1,rate]],5,null,100);
        registerTicker(wheelRight,"rotation",0,[[1,rate]],5,null,100);


        //传送带上的东西都放进容器中
        var container = new createjs.Container();
        root.addChild(container);
        var school = new createjs.Bitmap('img/lwj3/school.svg');
        school.scaleX = school.scaleY = 0.5;
        container.addChild(school);
        school.x = 450;
        school.y = 152;

        //开始生成学生
        createStu(90,container,rate,1500,1800,"img/lwj3/stu1.svg",0,5000);
        createStu(820,container,rate,1500,800,"img/lwj3/stu2.svg",2500,5000);

        var bg;
        setTimeout(function(){
            setTimeout(function(){
                school.visible = false;
                var kuxiao = new createjs.Bitmap('img/lwj3/computer.svg');
                kuxiao.scaleX = kuxiao.scaleY = 0.3;
                kuxiao.x = 400;
                kuxiao.y = 290;
                container.addChild(kuxiao);
                var logo = new createjs.Bitmap('img/lwj3/logo.png');
                logo.scaleX = logo.scaleY = 0.77;
                logo.x = 420;
                logo.y = 350;
                container.addChild(logo);

                createStu(90,container,rate,1500,1500,"img/lwj3/stu1.svg",0,5000);
                createStu(820,container,rate,1500,800,"img/lwj3/stu3.svg",2500,5000);
            },1000);

            registerTicker(bg,"alpha",0,[[1,1],[1.2,-1]],10,null);

        },5000);

        bg = new createjs.Shape();
        bg.graphics.beginFill("#FFF").drawRect(0, 0, canvas.width,canvas.height);
        bg.alpha = 0;
        root.addChild(bg);
        
        my.showzimu(500,["同样，互联网也改变了像工业流水线一样统一标准、批量生产的学校教育",""],4000);
        my.showzimu(6700,["尊重学习者个体差异的个性化教学不再是梦想，而已经成为了现实。",""],4000);
    }

    /**
     * 不停地生成学生
     * @param posX  生成的初始位置
     * @param container 学生所在容器
     * @param vate  学生的移动速度
     * @param genTime   学生的生成时间
     * @param dismissTime   学生的消失时间
     * @param srcName   学生的资源图片
     * @param delay 延迟delay后开始生成学生
     * @param cancelTime 取消生成学生的时刻
     */
    function createStu(posX,container,vate,genTime,dismissTime,srcName,delay,cancelTime){
        setTimeout(function(){
            var stu = new createjs.Bitmap(srcName);
            stu.scaleX = stu.scaleY = 0.22;
            stu.y = 350;
            stu.x = posX;
            container.addChild(stu);
            registerTicker(stu,"x",0,[[1,vate]],10,null,1000);
            setTimeout(function(){
                container.removeChild(stu);
            },dismissTime);
            var id = setInterval(function(){
                var stu = new createjs.Bitmap(srcName);
                stu.scaleX = stu.scaleY = 0.22;
                stu.y = 350;
                stu.x = posX;
                container.addChild(stu);
                registerTicker(stu,"x",0,[[1,vate]],10,null,1000);
                setTimeout(function(){
                    container.removeChild(stu);
                },dismissTime);
            },genTime);
            setTimeout(function(){
                clearInterval(id);
            },cancelTime);
        },delay);
    }

    function clear(){
        stage.removeChild(root);
    }
    return {
        show: show,
        clear:clear,
        root:root
    };
});