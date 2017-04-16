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
 * @param obj  对象
 * @param attr 属性
 * @param delay 延迟
 * @param args e.g [[0.2,5],[0.1,2]]  0.2s内属性上升5，接着0.1s内属性上升2
 * @param ms 执行的最少时间间隔
 * @param callback  执行完后的回调函数
 * @param repeat 重复执行次数
 */
function registerTicker(obj,attr,delay,args,ms,callback,repeat){
    if(typeof attr!="string"){
        alert("reflct函数中第二个参数必须是字符串");
        return;
    }
    if(repeat == null){ //没有对最后一个参数赋值则默认重复次数为1
        repeat = 1;
    }
    for(var i = 0;i<args.length*repeat;i++){
        var f = function(){
            var task = args[i%args.length];
            if(task.length!=2){
                console.log("task 参数少于2");
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