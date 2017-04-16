/**
 * Created by MRLWJ on 2017/4/16.
 */
var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d");
var stage = new createjs.Stage(canvas);
createjs.Ticker.setFPS(20);
createjs.Ticker.addEventListener("tick", function(){
    stage.update();
});
window.onload = window.onresize = function(){
    var width = document.documentElement.clientWidth-10;
    var height = document.documentElement.clientHeight-10;

    var scaleX = 1,scaleY=1;
    if(height<720){
        scaleY = height/720;
    }
    if(width<1280){
        scaleX = width/1280;
    }
    var min = scaleX;
    if(scaleX>scaleY){
        min = scaleY;
    }
    //ctx.clearRect(0,0,1280,720);
    canvas.style.width = 1280*min+"px";
    canvas.style.height = 720*min+"px";
    // canvas.style = "style='width:"+1280*min+"px;height:"+720*min+"px;'";
    //ctx.scale(min,min);
    //play();
};
/**
 *
 * @param obj  ����
 * @param attr ����
 * @param delay �ӳ�
 * @param args e.g [[0.2,5],[0.1,2]]  0.2s����������5������0.1s����������2
 * @param ms ִ�е�����ʱ����
 * @param callback  ִ�����Ļص�����
 * @param repeat �ظ�ִ�д���
 */
function registerTicker(obj,attr,delay,args,ms,callback,repeat){
    if(typeof attr!="string"){
        alert("reflct�����еڶ��������������ַ���");
        return;
    }
    if(repeat == null){ //û�ж����һ��������ֵ��Ĭ���ظ�����Ϊ1
        repeat = 1;
    }
    for(var i = 0;i<args.length*repeat;i++){
        var f = function(){
            var task = args[i%args.length];
            if(task.length!=2){
                console.log("task ��������2");
                return;
            }
            var total = task[0]*1000;
            var count = 0;
            var times = task[0]*1000/ms;
            var up = task[1]/times;
            setTimeout(function(){
                var id = setInterval(function(){
                    count ++;
                    if(count>=times){
                        clearInterval(id);
                    }
                    obj[attr]+=up;
                },ms);
            },delay);
            delay+=total;
        };
        f();
    }
    if(callback!=null){
        setTimeout(callback,delay);
    }
}