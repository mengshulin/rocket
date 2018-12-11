var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var WebGL = laya.webgl.WebGL;
var Sprite = Laya.Sprite;
var Event = laya.events.Event;
var Tween = Laya.Tween;
var Texture = Laya.Texture;
var HttpRequest = Laya.HttpRequest;
var Button = Laya.Button;
var Dialog = Laya.Dialog;
var Ease = Laya.Ease;
var Timer = Laya.Timer;
var Particle2D = Laya.Particle2D;
var SoundManager = Laya.SoundManager;

// 创建playUI的子类
function playChildUI() {
	playChildUI.super(this);
	var that = this;

	function onPlayMusic(e) {
		console.log("播放音乐");
		SoundManager.playSound("sound/count-down.mp3", 1, new Handler(this, onComplete));
	}

	function onComplete() {
		console.log("播放完成");
	}

	var box_rocket = this.box_rocket;
	var text_time = this.text_time;
	var box_time = this.box_time;
	var box_bg = this.box_bg;
	var image_bg1 = this.image_bg1;
	var image_bg2 = this.image_bg2;
	var image_bg3 = this.image_bg3;
	var image_bg4 = this.image_bg4;
	var image_bg5 = this.image_bg5;
	var image_bg6 = this.image_bg6;
	var image_bg7 = this.image_bg7;
	var image_bg8 = this.image_bg8;
	var image_bg9 = this.image_bg9;
	var image_flat_pad = this.image_flat_pad;
	var image_bg1 = this.image_bg1;
	var image_bg2 = this.image_bg2;
	var image_rocket1 = this.image_rocket1;
	var image_rocket2 = this.image_rocket2;
	var image_rocket3 = this.image_rocket3;
	var image_rocket4 = this.image_rocket4;
	var image_rocket5 = this.image_rocket5;
	var image_rocket2_foot = this.image_rocket2_foot;
	var image_rocket3_foot = this.image_rocket3_foot;
	var image_rocket4_foot = this.image_rocket4_foot;
	var image_rocket5_foot = this.image_rocket5_foot;
	var image_rocket_head = this.image_rocket_head;
	var image_rocket_foot = this.image_rocket_foot;
	var text_height = this.text_height;
	var text_height_tip = this.text_height_tip;
	var image_rocket1_light = this.image_rocket1_light;
	var image_rocket2_light = this.image_rocket2_light;
	var image_rocket3_light = this.image_rocket3_light;
	var image_rocket4_light = this.image_rocket4_light;
	var image_rocket5_light = this.image_rocket5_light;

	var image_back_1 = this.image_back_1;
	var image_head_1 = this.image_head_1;
	var image_back_10 = this.image_back_10;
	var image_head_10 = this.image_head_10;
	var image_back_20 = this.image_back_20;
	var image_head_20 = this.image_head_20;

	text_height._zOrder = 999;
	text_height_tip._zOrder = 999;
	box_bg._zOrder = 888;

	// 喷射火焰
	var flySp;
	// 喷射云台
	var image_spray = this.image_spray;
	image_rocket1.light = image_rocket1_light;
	image_rocket2.light = image_rocket2_light;
	image_rocket3.light = image_rocket3_light;
	image_rocket4.light = image_rocket4_light;
	image_rocket5.light = image_rocket5_light;
	image_rocket1.lightHeight = image_rocket1_light.height;
	image_rocket2.lightHeight = image_rocket2_light.height;
	image_rocket3.lightHeight = image_rocket3_light.height;
	image_rocket4.lightHeight = image_rocket4_light.height;
	image_rocket5.lightHeight = image_rocket5_light.height;
	// 操作提示
	var image_tip1 = this.image_tip1;
	var image_tip2 = this.image_tip2;
	var image_tip3 = this.image_tip3;
	// 助推器连接器
	image_rocket1.pfoot = image_rocket2_foot;
	image_rocket2.pfoot = image_rocket3_foot;
	image_rocket3.pfoot = image_rocket4_foot;
	image_rocket4.pfoot = image_rocket5_foot;
	// 阴影
	var image_rocket_shade = this.image_rocket_shade;
	var image_pad_shade = this.image_pad_shade;
	// 降落伞
	var image_parachute = this.image_parachute;
	// 金币领取界面
	var box_money = this.box_money;
	// 结算页面
	var box_score = this.box_score;
	// 再玩一次
	var button_restart = this.button_restart;
	button_restart.on(Event.CLICK, this, function () {
		this.removeSelf();
		Laya.stage.addChild(new playChildUI());
	});
	var image_close = this.image_close;
	image_close.on(Event.CLICK, this, function () {
		box_score.visible = false;
		box_money.visible = true;
	});
	var image_rocket_arr = [
		image_rocket5,
		image_rocket4,
		image_rocket3,
		image_rocket2,
		image_rocket1
	];

	Laya.stage.on(Event.CLICK, this, startGame);
	var sHeight = Laya.stage.height;
	var sWidth = Laya.stage.width;
	var totalMove = Math.ceil(sHeight * (2 + 3 + 4 + 5 + 6 + 7 + 8 + 19));
	var totalTime = 100000;
	var speed = totalMove / totalTime;
	console.log(speed);
	function startGame() {
		onPlayMusic();
		Laya.timer.loop(1000, this, function () {
			if (text_time.text - 1 == '0') {
				// 播放飞行音效
				SoundManager.playSound("sound/fly.mp3", 0, new Handler(this, onComplete));
				Laya.loader.load("fire.part", Handler.create(this, function (settings) {
					// 创建火焰
					flySp = new Particle2D(settings);
					flySp.x = box_rocket.width / 2;
					flySp.y = box_rocket.height + 100;
					flySp.emitter.start();
					flySp.play();
					flySp._zOrder = 999;
					box_rocket.addChild(flySp);
					Tween.to(flySp, { y: flySp.y - 100 }, 300, Ease.sineIn);
					// 清除屏幕点击事件
					Laya.stage.off(Event.CLICK, this, startGame);
					// 清除所有定时
					Laya.timer.clearAll(this);
					// 背景切换和计算高度
					Laya.timer.loop(1, this, changeBgAndMathHeight);
					// 清除倒计时数字
					box_time.removeSelf();
					var rocket_node = 1;
					var runRocketParam = [];
					runRocketParam.push({ rocket_node: rocket_node });
					// 启动火焰特效
					// image_back_1.visible = true;
					// image_back_10.visible = true;
					// image_back_20.visible = true;
					// image_head_1.visible = true;
					// image_head_10.visible = true;
					// image_head_20.visible = true;
					// Laya.timer.loop(100, this, showStartCloud1, [image_back_1,image_head_1]);
					// Laya.timer.loop(100, this, showStartCloud2, [image_back_10,image_head_10]);
					// Laya.timer.loop(100, this, showStartCloud3, [image_back_20,image_head_20]);
					// Laya.timer.once(6000, this, function () {
					// 	Laya.timer.clear(this, showStartCloud1);
					// 	Laya.timer.clear(this, showStartCloud2);
					// 	Laya.timer.clear(this, showStartCloud3);
					// 	// 背景移动
					// 	Tween.to(box_bg, { y: totalMove }, totalTime, null, Handler.create(this, endFly), 0, false);
					// 	// 左边发射铁架
					// 	Tween.to(image_flat_pad, { y: 1334 }, 1500 * 1334 / (1334 - 365), null);
					// 	Tween.to(box_rocket, { y: box_rocket.y - 400 }, 5000, Ease.sineIn, Handler.create(this, runRocket, runRocketParam), 0, false);
					// });

					// 背景移动
					Tween.to(box_bg, { y: totalMove }, totalTime, null, Handler.create(this, endFly), 0, false);
					// 左边发射铁架
					Tween.to(image_flat_pad, { y: 1334 }, 1500 * 1334 / (1334 - 365), null);
					// 阴影
					image_rocket_shade.visible = false;
					image_pad_shade.visible = false;
					// 启动
					Tween.to(box_rocket, { y: box_rocket.y - 300 }, 3000, Ease.sineIn, Handler.create(this, runRocket, runRocketParam), 0, false);
				}), null, Loader.JSON);
			} else {
				text_time.text = text_time.text - 1;
			}
		});
	}

	var bgChangeNumber = 0;
	var bg2_node_show = 0;
	var bg3_node_show = 0;
	var bg4_node_show = 0;
	var bg5_node_show = 0;
	var bg6_node_show = 0;
	var bg7_node_show = 0;
	var bg8_node_show = 0;
	var bg9_node_show = 0;
	var dealNodeParam = [];

	function changeBgAndMathHeight() {
		text_height.text = Math.ceil(box_bg.y);
		switch (bgChangeNumber) {
			case 0:
				if (Math.ceil(box_bg.y) >= 0 && Math.ceil(box_bg.y) <= Math.ceil(image_bg2.height) && bg2_node_show == 0) {
					bg2_node_show = 1;
					// 山
					var fixed_node1 = new Sprite();
					var fixed_node2 = new Sprite();
					var fixed_node3 = new Sprite();
					fixed_node1.loadImage("02mountain_1.png");
					fixed_node2.loadImage("02mountain_2.png");
					fixed_node3.loadImage("02mountain_3.png");
					fixed_node1.pos(0, image_bg1.y - 997);
					fixed_node2.pos(344, image_bg1.y - 1170);
					fixed_node3.pos(178, image_bg1.y - 887);
					box_bg.addChild(fixed_node1);
					box_bg.addChild(fixed_node2);
					box_bg.addChild(fixed_node3);
					// 云
					var bg_node_arr = [];
					for (var i = 0; i < 2; i++) {
						var node1 = new Sprite();
						var node2 = new Sprite();
						var node3 = new Sprite();
						node1.loadImage("02cloud_2.png");
						node2.loadImage("02cloud_1.png");
						node3.loadImage("02cloud_3.png");
						// node1.alpha = 0.5 * i;
						// node2.alpha = 0.5 * i;
						// node3.alpha = 0.5 * i;
						node1.pos(371, image_bg1.y - 1017 - sHeight * i);
						node2.pos(0, image_bg1.y - 761 - sHeight * i);
						node3.pos(0, image_bg1.y - 1234 - sHeight * i);
						bg_node_arr.push(node1);
						bg_node_arr.push(node2);
						bg_node_arr.push(node3);
					}
					console.log(bg_node_arr);
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg2.height) - 100) {
					image_bg3.skin = '03.jpg';
					image_bg3.height = sHeight * 3;
					image_bg3.y = -sHeight * 3 + image_bg2.y;
					bgChangeNumber++;
				}
				break;
			case 1:
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg2.height) && Math.ceil(box_bg.y) <= Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) && bg3_node_show == 0) {
					bg3_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 3; i++) {
						var node1 = new Sprite();
						var node2 = new Sprite();
						var node3 = new Sprite();
						var node4 = new Sprite();
						var node5 = new Sprite();
						var node6 = new Sprite();
						var node7 = new Sprite();
						var node8 = new Sprite();
						node1.loadImage("03fog_1.png");
						node2.loadImage("03fog_2.png");
						node3.loadImage("03mountain_1.png");
						node4.loadImage("03mountain_2.png");
						node5.loadImage("03mountain_3.png");
						node6.loadImage("03fog_1.png");
						node7.loadImage("03mountain_1.png");
						node8.loadImage("03mountain_1.png");
						// node1.alpha = 0.5 * i;
						// node2.alpha = 0.5 * i;
						// node3.alpha = 0.5 * i;
						// node4.alpha = 0.5 * i;
						// node5.alpha = 0.5 * i;
						// node6.alpha = 0.5 * i;
						// node7.alpha = 0.5 * i;
						// node8.alpha = 0.5 * i;
						node1.pos(0, image_bg2.y - 618 - sHeight * i);
						node2.pos(0, image_bg2.y - 917 - sHeight * i);
						node3.pos(50, image_bg2.y - 749 - sHeight * i);
						node4.pos(0, image_bg2.y - 498 - sHeight * i);
						node5.pos(198, image_bg2.y - 308 - sHeight * i);
						node6.pos(0, image_bg2.y - 1200 - sHeight * i);
						node7.pos(385, image_bg2.y - 864 - sHeight * i);
						node8.pos(40, image_bg2.y - 1039 - sHeight * i);
						bg_node_arr.push(node1);
						bg_node_arr.push(node2);
						bg_node_arr.push(node3);
						bg_node_arr.push(node4);
						bg_node_arr.push(node5);
						bg_node_arr.push(node6);
						bg_node_arr.push(node7);
						bg_node_arr.push(node8);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) - 100) {
					image_bg4.skin = '04.jpg';
					image_bg4.height = sHeight * 4;
					image_bg4.y = -sHeight * 4 + image_bg3.y;
					bgChangeNumber++;
				}
				break;
			case 2:
				if (Math.ceil(box_bg.y) >= (Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && Math.ceil(box_bg.y) <= (Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && bg4_node_show == 0) {
					bg4_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 4; i++) {
						var node1 = new Sprite();
						var node2 = new Sprite();
						var node3 = new Sprite();
						var node4 = new Sprite();
						var node5 = new Sprite();
						var node6 = new Sprite();
						var node7 = new Sprite();
						var node8 = new Sprite();
						node1.loadImage("04cloud_1.png");
						node2.loadImage("04cloud_1.png");
						node3.loadImage("04cloud_1.png");
						node4.loadImage("04cloud_2.png");
						node5.loadImage("04cloud_2.png");
						node6.loadImage("04cloud_2.png");
						node7.loadImage("04cloud_3.png");
						node8.loadImage("04cloud_3.png");
						// node1.alpha = 0.5 * i;
						// node2.alpha = 0.5 * i;
						// node3.alpha = 0.5 * i;
						// node4.alpha = 0.5 * i;
						// node5.alpha = 0.5 * i;
						// node6.alpha = 0.5 * i;
						// node7.alpha = 0.5 * i;
						// node8.alpha = 0.5 * i;
						node1.pos(350, image_bg3.y - 370 - sHeight * i);
						node2.pos(280, image_bg3.y - 760 - sHeight * i);
						node3.pos(390, image_bg3.y - 1100 - sHeight * i);
						node4.pos(-170, image_bg3.y - 340 - sHeight * i);
						node5.pos(0, image_bg3.y - 530 - sHeight * i);
						node6.pos(-60, image_bg3.y - 980 - sHeight * i);
						node7.pos(20, image_bg3.y - 730 - sHeight * i);
						node8.pos(80, image_bg3.y - 1200 - sHeight * i);
						bg_node_arr.push(node1);
						bg_node_arr.push(node2);
						bg_node_arr.push(node3);
						bg_node_arr.push(node4);
						bg_node_arr.push(node5);
						bg_node_arr.push(node6);
						bg_node_arr.push(node7);
						bg_node_arr.push(node8);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) - 100) {
					image_bg5.skin = '05.jpg';
					image_bg5.height = sHeight * 5;
					image_bg5.y = -sHeight * 5 + image_bg4.y;
					bgChangeNumber++;
				}
				break;
			case 3:
				if (Math.ceil(box_bg.y) >= (Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && Math.ceil(box_bg.y) <= (Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && bg5_node_show == 0) {
					bg5_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 5; i++) {
						var node1 = new Sprite();
						var node2 = new Sprite();
						var node3 = new Sprite();
						var node4 = new Sprite();
						var node5 = new Sprite();
						node1.loadImage("05cloud_1.png");
						node2.loadImage("05cloud_2.png");
						node3.loadImage("05cloud_3.png");
						node4.loadImage("05cloud_4.png");
						node5.loadImage("05cloud_3.png");
						// node1.alpha = 0.5 * i;
						// node2.alpha = 0.5 * i;
						// node3.alpha = 0.5 * i;
						// node4.alpha = 0.5 * i;
						// node5.alpha = 0.5 * i;
						node1.pos(0, image_bg4.y - 200 - sHeight * i);
						node2.pos(320, image_bg4.y - 780 - sHeight * i);
						node3.pos(450, image_bg4.y - 1200 - sHeight * i);
						node4.pos(0, image_bg4.y - 1000 - sHeight * i);
						node5.pos(370, image_bg4.y - 480 - sHeight * i);
						bg_node_arr.push(node1);
						bg_node_arr.push(node2);
						bg_node_arr.push(node3);
						bg_node_arr.push(node4);
						bg_node_arr.push(node5);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) - 100) {
					image_bg6.skin = '06.jpg';
					image_bg6.height = sHeight * 6;
					image_bg6.y = -sHeight * 6 + image_bg5.y;
					bgChangeNumber++;
				}
				break;
			case 4:
				if (Math.ceil(box_bg.y) >= (Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && Math.ceil(box_bg.y) <= (Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && bg6_node_show == 0) {
					bg6_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 6; i++) {
						var node1 = new Sprite();
						node1.loadImage("06star.png");
						// node1.alpha = 0.5 * i;
						node1.pos(0, image_bg5.y - 1334 - sHeight * i);
						node1.width = sWidth;
						bg_node_arr.push(node1);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) - 100) {
					image_bg7.skin = '07.jpg';
					image_bg7.height = sHeight * 7;
					image_bg7.y = -sHeight * 7 + image_bg6.y;
					bgChangeNumber++;
				}
				break;
			case 5:
				if (Math.ceil(box_bg.y) >= (Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && Math.ceil(box_bg.y) <= (Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && bg7_node_show == 0) {
					bg7_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 7; i++) {
						var node1 = new Sprite();
						node1.loadImage("07star.png");
						// node1.alpha = 0.5 * i;
						node1.pos(0, image_bg6.y - 1334 - sHeight * i);
						node1.width = sWidth;
						node1.height = sHeight - 150;
						bg_node_arr.push(node1);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) - 100) {
					image_bg8.skin = '08.jpg';
					image_bg8.height = sHeight * 8;
					image_bg8.y = -sHeight * 8 + image_bg7.y;
					bgChangeNumber++;
				}
				break;
			case 6:
				if (Math.ceil(box_bg.y) >= (Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && Math.ceil(box_bg.y) <= (Math.ceil(image_bg8.height) + Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && bg8_node_show == 0) {
					bg8_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 8; i++) {
						var node1 = new Sprite();
						node1.loadImage("07star.png");
						// node1.alpha = 0.5 * i;
						node1.pos(0, image_bg7.y - 1334 - sHeight * i);
						node1.width = sWidth;
						node1.height = sHeight - 150;
						bg_node_arr.push(node1);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				if (Math.ceil(box_bg.y) >= Math.ceil(image_bg8.height) + Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height) - 100) {
					image_bg9.skin = '09.jpg';
					image_bg9.height = sHeight * 19;
					image_bg9.y = -sHeight * 19 + image_bg8.y;
					bgChangeNumber++;
				}
				break;
			case 7:
				if (Math.ceil(box_bg.y) >= (Math.ceil(image_bg8.height) + Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && Math.ceil(box_bg.y) <= (Math.ceil(image_bg9.height) + Math.ceil(image_bg8.height) + Math.ceil(image_bg7.height) + Math.ceil(image_bg6.height) + Math.ceil(image_bg5.height) + Math.ceil(image_bg4.height) + Math.ceil(image_bg3.height) + Math.ceil(image_bg2.height)) && bg9_node_show == 0) {
					bg9_node_show = 1;
					var bg_node_arr = [];
					for (var i = 0; i < 19; i++) {
						var node1 = new Sprite();
						var node2 = new Sprite();
						var node3 = new Sprite();
						var node4 = new Sprite();
						var node5 = new Sprite();
						var node6 = new Sprite();
						node1.loadImage("09star.png");
						node2.loadImage("09celestial_body_1.png");
						node3.loadImage("09celestial_body_2.png");
						node4.loadImage("09celestial_body_3.png");
						node5.loadImage("09celestial_body_4.png");
						node6.loadImage("09celestial_body_5.png");
						// node1.alpha = 0.5 * i;
						// node2.alpha = 0.5 * i;
						// node3.alpha = 0.5 * i;
						// node4.alpha = 0.5 * i;
						// node5.alpha = 0.5 * i;
						// node6.alpha = 0.5 * i;
						node1.pos(0, image_bg8.y - 1334 - sHeight * i);
						node2.pos(430, image_bg8.y - 390 - sHeight * i);
						node3.pos(550, image_bg8.y - 1200 - sHeight * i);
						node4.pos(160, image_bg8.y - 590 - sHeight * i);
						node5.pos(460, image_bg8.y - 900 - sHeight * i);
						node6.pos(70, image_bg8.y - 1100 - sHeight * i);
						bg_node_arr.push(node1);
						bg_node_arr.push(node2);
						bg_node_arr.push(node3);
						bg_node_arr.push(node4);
						bg_node_arr.push(node5);
						bg_node_arr.push(node6);
					}
					for (var index = 0; index < bg_node_arr.length; index++) {
						bg_node_arr[index]._zOrder = 888;
						box_bg.addChild(bg_node_arr[index]);
					}
				}
				break;
		}
	}

	// 火焰生成
	function onAssetsLoaded(settings) {
		console.log(settings);
		flySp = new Particle2D(settings);

		flySp.x = 125;
		flySp.y = 600;
		flySp.emitter.start();
		flySp.play();
		flySp._zOrder = 999;
		box_rocket.addChild(flySp);
		Tween.to(flySp, { y: flySp.y - 100 }, 300, Ease.sineIn);
	}

	function endFly() {
		// Laya.timer.clear(this, changeBgAndMathHeight);
	}
	var mark = 1;
	// 基础燃烧速度
	var dSpeed = (image_rocket1.height - image_rocket1.light.height) / 5000;
	console.log(dSpeed);
	// 开始燃烧助推器
	function descending(obj) {
		var oHeight = obj.height;
		obj.light.visible = true;
		var descendingRumpParam = [];
		descendingRumpParam.push({ obj: obj });
		var sTime = (oHeight - obj.light.height) / dSpeed * mark;
		Tween.to(flySp, { y: flySp.y - oHeight }, sTime);
		Tween.to(obj.mask, { y: - oHeight + obj.light.height }, sTime, null, Handler.create(this, descending_rump, descendingRumpParam), 0, false);
		Tween.to(image_spray, { y: image_spray.y - oHeight + obj.light.height }, sTime);
	}
	var box_bomb = this.box_bomb;
	var image_bomb1 = this.image_bomb1;
	var image_bomb2 = this.image_bomb2;
	var image_bomb3 = this.image_bomb3;
	// 开始减少最佳点击部分
	function descending_rump(param) {
		var dTime = param.obj.height * 0.1 / dSpeed * mark;
		Tween.to(param.obj.mask, { y: - param.obj.height }, dTime);
		Tween.to(image_spray, { y: image_spray.y - param.obj.height * 0.1 }, dTime);
		Tween.to(param.obj.light, { height: 0 }, dTime, null, Handler.create(this, function () {
			console.log('爆炸了');
			// 清除屏幕点击事件
			Laya.stage.off(Event.CLICK, that, imageRocketRemove);
			// 播放爆炸音效
			SoundManager.stopAllSound();
			SoundManager.playSound("sound/bomb.wav", 1, new Handler(this, onComplete));
			// 所有所有动画
			Tween.clearAll(box_bg);
			Laya.timer.clearAll(that);
			// 加载爆炸效果
			flySp.visible = false;
			box_bomb.visible = true;
			Tween.to(image_bomb1, { alpha: 1 }, 550, null, Handler.create(this, function () {
				Tween.to(image_bomb1, { alpha: 0 }, 550);
				Tween.to(image_bomb2, { alpha: 1 }, 550, null, Handler.create(this, function () {
					Tween.to(image_bomb2, { alpha: 0 }, 550);
					Tween.to(image_bomb3, { alpha: 1 }, 550, null, Handler.create(this, function () {
						Tween.to(image_bomb3, { alpha: 0 }, 550);
						box_bomb.visible = false;
						box_rocket.visible = false;
						box_score.visible = true;
						box_score.getChildByName('text_final_height').text = text_height.text + 'km';
					}), 0, false);
				}), 0, false);
			}), 0, false);
		}), 0, false);
	}
	// 脱离助推器
	function imageRocketRemove() {
		SoundManager.playSound("sound/click.mp3", 1, new Handler(this, onComplete));
		var obj = image_rocket_arr[image_rocket_arr.length - 1];
		var lightScale = obj.light.height / obj.lightHeight;
		if (lightScale >= 0 && lightScale < (3 / 10)) {
			Tween.to(image_tip3, { alpha: 1 }, 550, null, Handler.create(this, function () {
				Tween.to(image_tip3, { alpha: 0 }, 550);
			}), 0, false);

		} else if (lightScale >= (3 / 10) && lightScale < (7 / 10)) {
			Tween.to(image_tip2, { alpha: 1 }, 550, null, Handler.create(this, function () {
				Tween.to(image_tip2, { alpha: 0 }, 550);
			}), 0, false);
		} else if (lightScale >= (7 / 10) && lightScale < 1) {
			Tween.to(image_tip1, { alpha: 1 }, 550, null, Handler.create(this, function () {
				Tween.to(image_tip1, { alpha: 0 }, 550);
			}), 0, false);
		}
		if (image_rocket_arr.length - 1 > 0) {
			var surplus = totalMove - box_bg.y;
			mark = mark - 0.2;
			Tween.to(box_bg, { y: totalMove }, (surplus / speed) * mark, null, Handler.create(this, endFly), 0, true);
			Tween.to(box_rocket, { scaleX: box_rocket.scaleX * 1.1, scaleY: box_rocket.scaleY * 1.1 }, 1000, null, Handler.create(this, function () {
				Tween.to(box_rocket, { y: box_rocket.y + 80 }, 1000);
			}), 0, false);
			// wx.vibrateLong({
			// 	success: function () {

			// 	},
			// 	fail: function () {

			// 	},
			// 	complete: function () {

			// 	}
			// })
			SoundManager.playSound("sound/separate.mp3", 1, new Handler(this, onComplete));
			Tween.clearAll(obj);
			Tween.clearAll(obj.mask);
			Tween.clearAll(obj.light);
			image_rocket_arr.splice(image_rocket_arr.length - 1, 1);
			obj.light.visible = false;
			Tween.clearAll(flySp);
			Tween.clearAll(image_spray);
			Tween.to(obj.pfoot, { x: 500, y: obj.pfoot.y + Laya.stage.height + 100, rotation: 360 }, 2000, Ease.sineIn, Handler.create(this, function () {
				obj.pfoot.removeSelf();
			}), 0, false);
			Tween.to(obj, { x: 500, y: obj.pfoot.y + Laya.stage.height + 100, rotation: 360 }, 2000, Ease.sineIn, Handler.create(this, function () {
				obj.removeSelf();
			}), 0, false);
			var newObj = image_rocket_arr[image_rocket_arr.length - 1];
			if (newObj != undefined) {
				image_spray.width = newObj.width * 0.5;
				image_spray.centerX = 0.5;
				image_spray.y = newObj.y + newObj.height;
				flySp.y = newObj.y + newObj.height * 1.4;
				descending(newObj);
			}
		} else {
			// 清除屏幕点击事件
			Laya.stage.off(Event.CLICK, that, imageRocketRemove);
			// 所有所有动画
			Tween.clearAll(obj);
			Tween.clearAll(obj.mask);
			Tween.clearAll(obj.light);
			obj.light.visible = false;
			Tween.clearAll(flySp);
			Tween.clearAll(image_spray);
			image_spray.visible = false;
			Tween.to(obj, { x: 500, y: Laya.stage.height + 100, rotation: 360 }, 2000, Ease.sineIn, Handler.create(this, function () {
				obj.removeSelf();
			}), 0, false);
			flySp.visible = false;
			Tween.clearAll(flySp);
			Tween.to(box_rocket, { scaleX: 1, scaleY: 1 }, 100, null, Handler.create(this, function () {
				Tween.to(image_rocket_head, { y: image_rocket_head.y - 400, rotation: 180 }, 2000, Ease.quartOut, Handler.create(that, function () {
					box_score.visible = true;
					box_score.getChildByName('text_final_height').text = text_height.text + 'km';
					image_parachute.pos(box_rocket.x, box_rocket.y + image_rocket_head.y);
					image_parachute.visible = true;
					Tween.to(image_parachute, { y: Laya.stage.height * 1.1  }, 3000);
					Tween.to(image_rocket_head, { y: Laya.stage.height * 1.1 }, 3000);
				}), 0, false);
				Tween.to(box_bg, { y: box_bg.y + 100 }, 2000, Ease.quartOut, Handler.create(this, endFly), 0, true);
			}), 0, false);
		}
	}

	function endScale() {
		// Tween.to(box_bg, { y: 0 }, 10000, Handler.create(this, endFly), 0, true);
	}

	function animate(e) {
		console.log('box_rocket.scaleX:' + box_rocket.scaleX);
		console.log('box_rocket.scaleY:' + box_rocket.scaleY);
		box_rocket.scale(box_rocket.scaleX * 1.1, box_rocket.scaleY * 1.1);
	}

	function runRocket(param) {
		image_back_1.visible = false;
		image_back_10.visible = false;
		image_back_20.visible = false;
		image_head_1.visible = false;
		image_head_10.visible = false;
		image_head_20.visible = false;
		Laya.stage.on(Event.CLICK, this, imageRocketRemove);
		descending(image_rocket1);
		console.log('特效完成');
		Tween.to(box_rocket, { y: box_rocket.y + 100 }, 1000);
		var surplus = totalMove - box_bg.y;
		Tween.to(box_bg, { y: totalMove }, (surplus / speed) * 0.9, null, Handler.create(this, endFly), 0, true);
		Tween.to(image_rocket_foot, { y: image_rocket_foot.y + Laya.stage.height + 100, rotation: 360 }, 2000, Ease.sineIn, Handler.create(this, function () {
			image_rocket_foot.removeSelf();
		}), 0, false);
	}

}

Laya.class(playChildUI, "playChildUI", playUI);

//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(750, 1334, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
//自动竖屏，游戏的水平方向始终与浏览器屏幕较长边保持垂直
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
//适配模式
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_BOTTOM;

function beginLoad() {
	Laya.loader.load(
		[
			'res/atlas/comp.atlas',
			'button2x.png',
			'按钮-圆-小-n@2x.png',
			'按钮-圆-大-f@2x.png',
			'按钮-方-蓝-n@2x.png',
			'按钮-方-红-n@2x.png',
			'按钮-方-蓝-n@2x.png'
		], Handler.create(null, onLoaded)
	);

}

function onLoaded() {
	Laya.stage.addChild(new playChildUI());
}


