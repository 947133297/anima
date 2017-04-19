/**
 * Created by MRLYY on 2017/4/16.
 */

 define(function(){
 	var container = new createjs.Container();
 	var show = function(){
 		//添加电脑屏幕作为背景图片
 		var computer = new createjs.Bitmap('img/lyy/computer.png');
 		container.addChild(computer);
 		stage.addChild(container);

 		//添加静态图片
 		var studyImg, reportImg, courseImg;
 		var zoomRate = 300/680;
 		studyImg = new createjs.Bitmap('img/lyy/study_little.png')
 		studyImg.scaleX = zoomRate;
 		studyImg.scaleY = zoomRate;
 		studyImg.x = 130;
 		studyImg.y = 200;
 		container.addChild(studyImg);

 		studyImg.onload = imgGetBigger(studyImg, 180, -100, studyAnim, 1500);
 		function studyAnim(){
 			studyAnimation(studyImg);
 			setTimeout(img1DelaySmaller, 2500);
 		}
 		function img1DelaySmaller(){ 
 			imgGetSmaller(studyImg, -180, 100, img2DelayBigger, 1000); 
 		} 
 		function img2DelayBigger(){
 			reportImg = new createjs.Bitmap('img/lyy/report_little.png');
 			reportImg.scaleX = zoomRate;
 			reportImg.scaleY = zoomRate;
	 		reportImg.x = studyImg.x + 350;
	 		reportImg.y = 200;
	 		container.addChild(reportImg);

 			reportImg.onload = imgGetBigger(reportImg, -160, -80, reportAnim, 1500);
 		}
 		function reportAnim(){
 			reportAnimation(reportImg);
 			setTimeout(img2DelaySmaller, 5000);
 		}
 		function img2DelaySmaller(){
 			imgGetSmaller(reportImg, 160, 80, img3DelayBigger, 1000);
 		}
 		function img3DelayBigger(){
 			courseImg = new createjs.Bitmap('img/lyy/course_little.png');
 			courseImg.scaleX = zoomRate;
 			courseImg.scaleY = zoomRate;
	 		courseImg.x = reportImg.x + 350;
	 		courseImg.y = 200;
	 		container.addChild(courseImg);
	 		
 			courseImg.onload = imgGetBigger(courseImg, -530, -100, img3DelaySmaller, 3000);
 		}
 		function img3DelaySmaller(){
 			imgGetSmaller(courseImg, 530, 100, null, 0);
 		}
 	};
 	function imgGetBigger(img, chX, chY, callback, delay){
 		registerTicker(img, "x", 0, [[0.5, chX]], 10, null, 1);
 		registerTicker(img, "y", 0, [[0.5, chY]], 10, null, 1);
 		registerTicker(img, "scaleX", 0, [[0.5, 0.5]], 10, null, 1);
 		registerTicker(img, "scaleY", 0, [[0.5, 0.5]], 10, null, 1);
 		if(callback!=null){
	        setTimeout(callback,delay);
	    }
 	}
 	function imgGetSmaller(img, chX, chY, callback, delay){
 		registerTicker(img, "x", 0, [[0.5, chX]], 10, null, 1);
 		registerTicker(img, "y", 0, [[0.5, chY]], 10, null, 1);
 		registerTicker(img, "scaleX", 0, [[0.5, -0.5]], 10, null, 1);
 		registerTicker(img, "scaleY", 0, [[0.5, -0.5]], 10, null, 1);
 		if(callback!=null){
	        setTimeout(callback,delay);
	    }
 	}
 	function studyAnimation(img){
 		var studyAni;
 		var spritesheet = new createjs.SpriteSheet({
            'images': ['img/lyy/study1.png','img/lyy/study2.png','img/lyy/study3.png','img/lyy/study4.png','img/lyy/study5.png','img/lyy/study6.png','img/lyy/study7.png','img/lyy/study8.png','img/lyy/study9.png','img/lyy/study10.png','img/lyy/study11.png','img/lyy/study12.png',
            	'img/lyy/study13.png','img/lyy/study14.png','img/lyy/study15.png','img/lyy/study16.png','img/lyy/study17.png','img/lyy/study18.png','img/lyy/study19.png','img/lyy/study20.png','img/lyy/study21.png','img/lyy/study22.png','img/lyy/study23.png','img/lyy/study24.png'],
            'frames': {
            	"height": 450, 
            	"width": 680,
            	"count": 24
            	},
            "animations": { 
            	"run": {frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], next: false}
            }
            //"framerate": 2,
        });
 		studyAni = new createjs.Sprite(spritesheet, 'run');
 		studyAni.x = img.x;
 		studyAni.y = img.y;
 		container.addChild(studyAni);
 		studyAni.play();
 		createjs.Ticker.setFPS(4);
  		createjs.Ticker.addEventListener("tick", tick);

  		function studyAniOut(){
  			container.removeChild(studyAni);
  			createjs.Ticker.setFPS(30);
  		}
  		setTimeout(studyAniOut, 2500);
 	}
 	function reportAnimation(img){
 		var reportAni;
 		var spritesheet = new createjs.SpriteSheet({
            'images': ['img/lyy/report1.png','img/lyy/report2.png','img/lyy/report3.png','img/lyy/report4.png','img/lyy/report5.png','img/lyy/report6.png','img/lyy/report7.png','img/lyy/report8.png','img/lyy/report9.png','img/lyy/report10.png','img/lyy/report11.png','img/lyy/report12.png',
            	'img/lyy/report13.png','img/lyy/report14.png','img/lyy/report15.png','img/lyy/report16.png','img/lyy/report17.png','img/lyy/report18.png','img/lyy/report19.png','img/lyy/report20.png','img/lyy/report21.png','img/lyy/report22.png','img/lyy/report23.png','img/lyy/report24.png'],
            'frames': {
            	"height": 360, 
            	"width": 680,
            	"count": 24
            },            
            	"animations": { 
	            	"run": {frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], next: false}
	        }
            //"framerate": 2,
        });
 		reportAni = new createjs.Sprite(spritesheet, 'run');
 		reportAni.x = img.x;
 		reportAni.y = img.y - 20;
 		container.addChild(reportAni);
 		reportAni.play();
 		createjs.Ticker.setFPS(3);
  		createjs.Ticker.addEventListener("tick", tick);

  		function reportAniOut(){
  			container.removeChild(reportAni);
  			createjs.Ticker.setFPS(30);
  		}
  		setTimeout(reportAniOut, 5000);
 	}
 	function tick(){
	    stage.update();
	}
 	function clear(){
        stage.removeChild(container);
    }
    return {
    	show: show,
    	clear: clear,
		root:container
    };
 })