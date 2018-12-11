var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var playUI=(function(_super){
		function playUI(){
			
		    this.box_bg=null;
		    this.image_bg1=null;
		    this.image_bg2=null;
		    this.image_bg3=null;
		    this.image_bg4=null;
		    this.image_bg5=null;
		    this.image_bg6=null;
		    this.image_bg7=null;
		    this.image_bg8=null;
		    this.image_bg9=null;
		    this.image_back_1=null;
		    this.image_back_10=null;
		    this.image_back_20=null;
		    this.box_rocket=null;
		    this.image_spray=null;
		    this.image_rocket1=null;
		    this.image_rocket2_foot=null;
		    this.image_rocket2=null;
		    this.image_rocket3_foot=null;
		    this.image_rocket3=null;
		    this.image_rocket4_foot=null;
		    this.image_rocket4=null;
		    this.image_rocket5_foot=null;
		    this.image_rocket5=null;
		    this.image_rocket_head=null;
		    this.image_rocket_foot=null;
		    this.image_rocket1_light=null;
		    this.image_rocket2_light=null;
		    this.image_rocket3_light=null;
		    this.image_rocket4_light=null;
		    this.image_rocket5_light=null;
		    this.image_flat_pad=null;
		    this.text_height=null;
		    this.text_height_tip=null;
		    this.text_money=null;
		    this.text_money_tip=null;
		    this.box_time=null;
		    this.text_time=null;
		    this.box_bomb=null;
		    this.image_bomb3=null;
		    this.image_bomb2=null;
		    this.image_bomb1=null;
		    this.image_head_1=null;
		    this.image_head_10=null;
		    this.image_head_20=null;
		    this.image_rocket_shade=null;
		    this.image_pad_shade=null;
		    this.image_parachute=null;

			playUI.__super.call(this);
		}

		CLASS$(playUI,'ui.playUI',_super);
		var __proto__=playUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(playUI.uiView);

		}

		playUI.uiView={"type":"View","props":{"width":750,"height":1334,"centerX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"box_bg"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"image_bg1","skin":"01.jpg","height":1334}},{"type":"Image","props":{"y":-2668,"x":0,"width":750,"var":"image_bg2","skin":"02.jpg","height":2668}},{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"image_bg3"}},{"type":"Image","props":{"width":750,"var":"image_bg4"}},{"type":"Image","props":{"width":750,"var":"image_bg5"}},{"type":"Image","props":{"width":750,"var":"image_bg6"}},{"type":"Image","props":{"width":750,"var":"image_bg7"}},{"type":"Image","props":{"width":750,"var":"image_bg8"}},{"type":"Image","props":{"width":750,"var":"image_bg9"}}]},{"type":"Image","props":{"y":896,"x":69,"visible":false,"var":"image_back_1","skin":"start/火箭后方-喷气-01@2x.png"}},{"type":"Image","props":{"y":1028,"x":-20,"visible":false,"var":"image_back_10","skin":"start/火箭后方-喷气-10@2x.png"}},{"type":"Image","props":{"y":957,"x":153,"visible":false,"var":"image_back_20","skin":"start/火箭后方-喷气-20@2x.png"}},{"type":"Box","props":{"y":445,"x":374,"width":197,"var":"box_rocket","anchorX":0.5},"child":[{"type":"Image","props":{"y":655,"x":73,"width":50,"var":"image_spray","skin":"spray2x.png","height":20}},{"type":"Image","props":{"y":523,"x":36,"width":124,"var":"image_rocket1","skin":"lv1-d5-01@2x.png","height":132}},{"type":"Image","props":{"y":499,"x":37,"width":122,"var":"image_rocket2_foot","skin":"lv1-d4-02@2x.png","height":24}},{"type":"Image","props":{"y":367,"x":57,"width":82,"var":"image_rocket2","skin":"lv1-d4-01@2x.png","height":132}},{"type":"Image","props":{"y":355,"x":57,"width":82,"var":"image_rocket3_foot","skin":"lv1-d3-02@2x.png","height":12}},{"type":"Image","props":{"y":265,"x":57,"width":82,"var":"image_rocket3","skin":"lv1-d3-01@2x.png","height":90}},{"type":"Image","props":{"y":252,"x":57,"width":82,"var":"image_rocket4_foot","skin":"lv1-d2-02@2x.png","height":13}},{"type":"Image","props":{"y":159,"x":65,"width":66,"var":"image_rocket4","skin":"lv1-d2-01@2x.png","height":93}},{"type":"Image","props":{"y":150,"x":65,"width":66,"var":"image_rocket5_foot","skin":"lv1-d1-02@2x.png","height":9}},{"type":"Image","props":{"y":35,"x":70,"width":56,"var":"image_rocket5","skin":"lv1-d1-01@2x.png","height":115}},{"type":"Image","props":{"y":0,"x":98,"width":50,"var":"image_rocket_head","skin":"头-初始@2x.png","height":35,"anchorX":0.5}},{"type":"Image","props":{"y":655,"x":0,"width":197,"var":"image_rocket_foot","skin":"lv1-d5-02@2x.png","height":84}},{"type":"Image","props":{"y":523,"x":37,"width":122,"visible":false,"var":"image_rocket1_light","skin":"dianjibufen@2x.png","height":13.2}},{"type":"Image","props":{"y":367,"x":57,"width":82,"visible":false,"var":"image_rocket2_light","skin":"dianjibufen@2x.png","height":13.2}},{"type":"Image","props":{"y":265,"x":57,"width":82,"visible":false,"var":"image_rocket3_light","skin":"dianjibufen@2x.png","height":9}},{"type":"Image","props":{"y":159,"x":65,"width":66,"visible":false,"var":"image_rocket4_light","skin":"dianjibufen@2x.png","height":9.3}},{"type":"Image","props":{"y":35,"x":70,"width":56,"visible":false,"var":"image_rocket5_light","skin":"dianjibufen@2x.png","height":11.5}}]},{"type":"Image","props":{"y":215,"x":70,"var":"image_flat_pad","skin":"flat-pad2x.png"}},{"type":"Text","props":{"y":10,"x":18,"width":143,"var":"text_height","text":"0","height":60,"fontSize":60,"font":"SimHei","color":"#ffffff","bold":false,"align":"right"}},{"type":"Text","props":{"y":7,"x":170,"var":"text_height_tip","text":"m","fontSize":60,"font":"SimHei","color":"#ffffff"}},{"type":"Text","props":{"y":10,"x":211,"width":148,"var":"text_money","text":"0","height":60,"fontSize":60,"font":"SimHei","color":"#ffffff","bold":false,"align":"right"}},{"type":"Text","props":{"y":26,"x":365,"var":"text_money_tip","text":"金币","fontSize":35,"font":"SimHei","color":"#ffffff"}},{"type":"Box","props":{"y":840,"x":539,"var":"box_time"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"time2x.png"}},{"type":"Text","props":{"y":35,"x":54,"var":"text_time","text":"3","fontSize":80,"font":"SimHei","color":"#ffffff","bold":true}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"box_bomb"},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"image_bomb3","skin":"bomb/puguang@2x.png","alpha":0}},{"type":"Image","props":{"y":368,"x":76,"var":"image_bomb2","skin":"bomb/2.png","centerY":0.5,"centerX":0.5,"alpha":0}},{"type":"Image","props":{"var":"image_bomb1","skin":"bomb/1.png","centerY":0.5,"centerX":0.5,"alpha":0}}]},{"type":"Image","props":{"y":850,"x":0,"visible":false,"var":"image_head_1","skin":"start/火箭前方-喷气-01@2x.png"}},{"type":"Image","props":{"y":860,"x":140,"visible":false,"var":"image_head_10","skin":"start/火箭前方-喷气-10@2x.png"}},{"type":"Image","props":{"y":888,"x":-72,"visible":false,"var":"image_head_20","skin":"start/火箭前方-喷气-20@2x.png"}},{"type":"Image","props":{"y":1183,"x":229,"var":"image_rocket_shade","skin":"yinying@2x.png","height":160}},{"type":"Image","props":{"y":1183,"x":44,"width":130,"var":"image_pad_shade","skin":"yinying@2x.png","height":160}},{"type":"Image","props":{"y":113,"x":51,"width":103,"visible":false,"var":"image_parachute","skin":"jiangluosan@2x.png","height":113,"anchorY":1,"anchorX":0.5}}]};
		return playUI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
		return TestPageUI;
	})(View);