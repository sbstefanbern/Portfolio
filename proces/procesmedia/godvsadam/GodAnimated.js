(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GodAnimated_atlas_", frames: [[1940,26,19,24],[0,602,825,527],[1906,596,133,113],[1991,0,25,15],[0,0,1342,600],[827,602,218,372],[1344,0,594,594],[1344,596,560,413],[1969,0,20,29],[1940,0,27,24]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Fingertip = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.God = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Godhead = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.indexfinger = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Man = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Penis = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Thump = function() {
	this.spriteSheet = ss["GodAnimated_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(11.2,-141.7,0.414,0.725,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.2,-141.7,188.5,283.4);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(13.7,-141.5,0.414,0.725,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-141.5,192.1,283);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Thump();
	this.instance.parent = this;
	this.instance.setTransform(-10.4,-14.7,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.7,31.7,29.5);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Thump();
	this.instance.parent = this;
	this.instance.setTransform(-10.4,-14.7,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.7,31.7,29.5);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.God();
	this.instance.parent = this;
	this.instance.setTransform(-342.6,-349.5,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461.1,-349.5,922.4,699);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.God();
	this.instance.parent = this;
	this.instance.setTransform(-342.6,-349.5,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461.1,-349.5,922.4,699);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fingertip();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-15.2,1,1,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.2,30.3,30.5);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fingertip();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-15.2,1,1,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.2,30.3,30.5);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Godhead();
	this.instance.parent = this;
	this.instance.setTransform(-52.1,-70,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-70,155,140);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Godhead();
	this.instance.parent = this;
	this.instance.setTransform(-52.1,-70,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-70,155,140);


(lib.pnspsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Penis
	this.instance = new lib.Penis();
	this.instance.parent = this;
	this.instance.setTransform(233,445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233,445,20,29);


(lib.Manpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Man
	this.instance = new lib.Man();
	this.instance.parent = this;
	this.instance.setTransform(5,185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,185,560,413);


(lib.indexfingerpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indexfinger
	this.instance = new lib.indexfinger();
	this.instance.parent = this;
	this.instance.setTransform(270,437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,437,25,15);


(lib.bgpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1342,600);


// stage content:
(lib.GodAnimated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("HeavensChoirSoundEffectwav");
	}
	this.frame_127 = function() {
		playSound("SoundEffectDJStop");
	}
	this.frame_158 = function() {
		playSound("MarvinGayeLetsgetiton2");
	}
	this.frame_348 = function() {
		playSound("Popsoundeffect");
	}
	this.frame_373 = function() {
		playSound("FunnyMusicInstrumentalfunnybackgroundmusicvideoscomedycutesillyfuninstrumentalmusicHQ");
	}
	this.frame_395 = function() {
		playSound("laughwav");
	}
	this.frame_464 = function() {
		playSound("escapewav");
	}
	this.frame_522 = function() {
		playSound("OHHELLNOsoundwav");
	}
	this.frame_581 = function() {
		playSound("runningwav");
	}
	this.frame_662 = function() {
		playSound("running2wav");
	}
	this.frame_723 = function() {
		playSound("running2wav");
	}
	this.frame_809 = function() {
		playSound("babylaugh");
	}
	this.frame_851 = function() {
		playSound("kungfu");
	}
	this.frame_924 = function() {
		playSound("manscream");
	}
	this.frame_976 = function() {
		playSound("ElectricSparkSoundEffect2");
	}
	this.frame_1023 = function() {
		playSound("explosion2");
	}
	this.frame_1054 = function() {
		playSound("deathsound");
	}
	this.frame_1087 = function() {
		playSound("VictorySoundEffect");
		playSound("victorylaughonlineaudioconvertercom");
	}
	this.frame_1351 = function() {
		playSound("fallingwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(127).call(this.frame_127).wait(31).call(this.frame_158).wait(190).call(this.frame_348).wait(25).call(this.frame_373).wait(22).call(this.frame_395).wait(69).call(this.frame_464).wait(58).call(this.frame_522).wait(59).call(this.frame_581).wait(81).call(this.frame_662).wait(61).call(this.frame_723).wait(86).call(this.frame_809).wait(42).call(this.frame_851).wait(73).call(this.frame_924).wait(52).call(this.frame_976).wait(47).call(this.frame_1023).wait(31).call(this.frame_1054).wait(33).call(this.frame_1087).wait(264).call(this.frame_1351).wait(99));

	// God head
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1657.3,147);

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(817.1,147);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:817.1},149).wait(1301));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},149).to({rotation:-12.7,x:510,y:274.6},50).wait(11).to({startPosition:0},0).to({rotation:35,y:274.5},14).wait(30).to({startPosition:0},0).to({regX:0.1,regY:0.1,rotation:25,y:274.6},8).to({regX:0.2,rotation:35},8).to({regY:0,rotation:25,x:510.1},8).to({regX:0.3,rotation:35},8).wait(83).to({startPosition:0},0).to({x:546.6},10).to({startPosition:0},20).to({y:240.6},3).to({y:274.6},3).to({y:240.6},3).to({y:274.6},3).to({y:240.6},3).to({y:274.6},3).to({y:240.6},3).to({y:274.6},3).to({scaleX:1,scaleY:1,rotation:34.9,y:243.5},3).to({scaleX:1,scaleY:1,rotation:35,y:274.6},3).to({y:240.6},3).to({y:274.6},3).to({scaleX:1,scaleY:1,rotation:34.9,y:243.5},3).to({scaleX:1,scaleY:1,rotation:35,y:274.6},3).to({regX:0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:34.9,x:546.8,y:274.5},3).to({regX:0.3,regY:0,scaleX:1,scaleY:1,rotation:35,x:546.6,y:274.6},3).to({regX:0.4,regY:-0.1,scaleX:1,scaleY:1,rotation:34.9,x:546.8,y:274.5},3).to({regX:0.3,regY:0,scaleX:1,scaleY:1,rotation:35,x:546.6,y:274.6},18).to({rotation:0,skewX:-35,skewY:145,x:875.8},12).to({x:1931.8},9).wait(158).to({regX:0.4,regY:-0.1,scaleX:0.44,scaleY:0.44,skewX:65.7,skewY:78.4,x:947.6,y:660.6},0).wait(12).to({regX:0.6,scaleX:0.4,scaleY:0.4,rotation:73.2,skewX:0,skewY:0,x:872.9,y:690},0).to({x:250.7,y:61.8},21).to({regX:0.7,rotation:52.2,x:-216.9,y:58},15).to({rotation:0,skewX:-52.2,skewY:127.8,x:-149.9},23).to({regX:0.8,regY:0.1,skewX:-28.6,skewY:151.4,x:303.5,y:103.3},18).to({x:1099.7,y:719.5},24).to({startPosition:0},15).wait(8).to({regX:0.6,regY:-0.1,skewX:31.4,skewY:211.4,x:1083.1,y:-128.9},0).to({regX:0.5,scaleX:0.4,scaleY:0.4,skewX:31.3,skewY:211.3,y:41.6},18).to({regX:0.6,scaleX:0.4,scaleY:0.4,skewX:31.4,skewY:211.4,y:51.1},13).to({y:11.1},3).to({y:51.1},3).to({y:11.1},3).to({y:51.1},3).to({y:11.1},3).to({y:51.1},3).to({y:11.1},3).to({y:51.1},3).to({startPosition:0},16).to({startPosition:0},70).to({y:11.1},3).to({y:51.1},3).to({y:11.1},3).to({y:51.1},3).to({y:11.1},3).to({y:51.1},3).to({startPosition:0},5).to({regY:-0.2,skewX:-17.3,skewY:162.7,x:1150,y:-326.3},25).to({regX:0.5,regY:-0.3,skewX:-18.3,skewY:161.7,x:1200.8,y:32.8},16).to({regX:0.3,regY:-0.2,skewX:-33.3,skewY:146.7,x:1172.7,y:-39},10).to({regX:0.4,regY:-0.1,skewX:-21.6,skewY:158.4,x:1201,y:12.4},10).to({startPosition:0},79).to({startPosition:0},1).to({y:38.4},2).to({y:12.4},2).to({y:38.4},2).to({y:12.4},2).to({y:38.4},2).to({y:12.4},2).to({y:38.4},2).to({y:12.4},2).to({y:38.4},2).to({startPosition:0},19).to({regX:0.2,regY:-0.2,skewX:-14.6,skewY:165.4,x:1630.9,y:150.8},33).to({startPosition:0},7).to({startPosition:0},18).to({regX:0.4,regY:-0.1,scaleX:0.71,scaleY:0.71,rotation:59.6,skewX:0,skewY:0,x:1590.2,y:172.1},22).to({x:-398.9},136).wait(109));

	// Finger tip
	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1369.4,263.2);

	this.instance_3 = new lib.Tween16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(529.2,263.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:529.2},149).wait(1301));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},149).to({rotation:-12.7,x:254.7,y:451.1},50).wait(35).to({startPosition:0},0).to({regX:11.4,regY:2.9,rotation:-40,x:266.4,y:451.3},10).to({regX:0,regY:0,rotation:-12.7,x:254.7,y:451.1},10).to({regX:11.4,regY:2.9,rotation:-40,x:266.4,y:451.3},10).to({regX:0,regY:0,rotation:-12.7,x:254.7,y:451.1},10).to({regX:11.4,regY:2.9,rotation:-40,x:266.4,y:451.3},10).to({regX:0,regY:0,rotation:-12.7,x:254.7,y:451.1},10).to({regX:11.4,regY:2.9,rotation:-40,x:266.4,y:451.3},10).to({regX:0,regY:0,rotation:-12.7,x:254.7,y:451.1},10).to({regX:11.4,regY:2.9,rotation:-40,x:266.4,y:451.3},10).to({regX:0,regY:0,rotation:-12.7,x:254.7,y:451.1},10).to({regX:11.4,regY:2.9,rotation:-40,x:266.4,y:451.3},10).wait(25).to({startPosition:0},0).to({x:302.9},10).to({startPosition:0},20).to({y:417.3},3).to({y:451.3},3).to({y:417.3},3).to({y:451.3},3).to({y:417.3},3).to({y:451.3},3).to({y:417.3},3).to({y:451.3},3).to({regY:3,scaleX:1,scaleY:1,rotation:-40.1,x:303,y:420.5},3).to({regY:2.9,scaleX:1,scaleY:1,rotation:-40,x:302.9,y:451.3},3).to({y:417.3},3).to({y:451.3},3).to({regY:3,scaleX:1,scaleY:1,rotation:-40.1,x:303,y:420.5},3).to({regY:2.9,scaleX:1,scaleY:1,rotation:-40,x:302.9,y:451.3},3).to({regY:3,scaleX:1,scaleY:1,rotation:-40.1,x:303,y:451.5},3).to({regY:2.9,scaleX:1,scaleY:1,rotation:-40,x:302.9,y:451.3},3).to({regY:3,scaleX:1,scaleY:1,rotation:-40.1,x:303,y:451.5},3).to({regY:2.9,scaleX:1,scaleY:1,rotation:-40,x:302.9,y:451.3},18).to({rotation:0,skewX:40,skewY:-140,x:1119.4},12).to({x:2175.4},9).wait(158).to({regX:11.5,regY:3.1,scaleX:0.44,scaleY:0.44,skewX:1,skewY:-11.5,x:856,y:671},0).wait(12).to({regX:11.6,regY:3.2,scaleX:0.4,scaleY:0.4,rotation:-1.8,skewX:0,skewY:0,x:755.8,y:687.7},0).to({x:133.6,y:59.6},21).to({rotation:-22.8,x:-327,y:97.8},15).to({rotation:0,skewX:22.8,skewY:-157.2,x:-39.7},23).to({regX:11.5,skewX:46.4,skewY:-133.6,x:388.5,y:184},18).to({x:1184.7,y:800.2},24).to({startPosition:0},15).wait(8).to({regY:3,skewX:106.4,skewY:-73.6,x:1055.6,y:-15},0).to({skewX:106.3,skewY:-73.7,y:155.5},18).to({skewX:106.4,skewY:-73.6,y:165},13).to({y:125},3).to({y:165},3).to({y:125},3).to({y:165},3).to({y:125},3).to({y:165},3).to({y:125},3).to({y:165},3).to({startPosition:0},16).to({startPosition:0},70).to({y:125},3).to({y:165},3).to({y:125},3).to({y:165},3).to({y:125},3).to({y:165},3).to({startPosition:0},5).to({regX:11.6,regY:2.9,skewX:57.7,skewY:-122.3,x:1217.4,y:-230.5},25).to({regX:11.8,regY:2.6,skewX:56.7,skewY:-123.3,x:1269.9,y:127.3},16).to({regX:11.6,skewX:41.7,skewY:-138.3,x:1263.9,y:34.4},10).to({regX:11.4,skewX:53.4,skewY:-126.6,x:1275.4,y:102.8},10).to({startPosition:0},79).to({startPosition:0},1).to({y:128.8},2).to({y:102.8},2).to({y:128.8},2).to({y:102.8},2).to({y:128.8},2).to({y:102.8},2).to({y:128.8},2).to({y:102.8},2).to({y:128.8},2).to({startPosition:0},19).to({regX:11.3,skewX:60.4,skewY:-119.6,x:1693.7,y:249.7},33).to({startPosition:0},7).to({startPosition:0},18).to({regX:11.5,regY:2.7,scaleX:0.71,scaleY:0.71,rotation:-15.4,skewX:0,skewY:0,x:1381.5,y:213.1},22).to({x:-607.7},136).wait(109));

	// Thump
	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1395.4,276.9);

	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(555.2,276.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:555.2},149).wait(1301));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},149).to({rotation:-12.7,x:283.1,y:458.8},50).wait(170).to({startPosition:0},0).to({x:319.6},10).to({startPosition:0},20).to({y:424.8},3).to({y:458.8},3).to({y:424.8},3).to({y:458.8},3).to({y:424.8},3).to({y:458.8},3).to({y:424.8},3).to({y:458.8},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-12.6,y:427.9},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7,y:458.8},3).to({y:424.8},3).to({y:458.8},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-12.6,y:427.9},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7,y:458.8},3).to({scaleX:1,scaleY:1,rotation:-12.6},3).to({scaleX:1,scaleY:1,rotation:-12.7},3).to({scaleX:1,scaleY:1,rotation:-12.6},3).to({scaleX:1,scaleY:1,rotation:-12.7},18).to({rotation:0,skewX:12.7,skewY:-167.3,x:1102.8},12).to({x:2158.8},9).wait(158).to({regX:0.1,regY:0.1,scaleX:0.44,scaleY:0.44,skewX:24.6,skewY:-322.7,x:857.9,y:677.6},0).wait(12).to({regX:0.2,scaleX:0.4,scaleY:0.4,rotation:25.5,skewX:0,skewY:-360,x:759.1,y:694.2},0).to({x:136.9,y:66},21).to({regY:0.2,rotation:4.6,x:-321.6,y:102.7},15).to({rotation:0,skewX:-4.6,skewY:-184.6,x:-45.1},23).to({skewX:19.1,skewY:-160.9,x:381.5,y:186.3},18).to({x:1177.7,y:802.4},24).to({startPosition:0},15).wait(8).to({regX:0.1,regY:0.1,skewX:79.1,skewY:-100.9,x:1050.2,y:-19.9},0).to({regX:0,regY:0,skewX:79.2,skewY:-100.8,y:150.6},18).to({regX:0.1,regY:0.1,skewX:79.1,skewY:-100.9,y:160.1},13).to({y:120.1},3).to({y:160.1},3).to({y:120.1},3).to({y:160.1},3).to({y:120.1},3).to({y:160.1},3).to({y:120.1},3).to({y:160.1},3).to({startPosition:0},16).to({startPosition:0},70).to({y:120.1},3).to({y:160.1},3).to({y:120.1},3).to({y:160.1},3).to({y:120.1},3).to({y:160.1},3).to({startPosition:0},5).to({regX:0.3,regY:0,skewX:30.4,skewY:-149.6,x:1210.2,y:-229.7},25).to({regX:0.2,regY:-0.1,skewX:29.4,skewY:-150.6,x:1262.7,y:128.4},16).to({regX:0.1,skewX:14.4,skewY:-165.6,x:1257.2,y:37.3},10).to({regX:0,regY:0,skewX:26.1,skewY:-153.9,x:1268.2,y:104.2},10).to({startPosition:0},79).to({startPosition:0},1).to({y:130.2},2).to({y:104.2},2).to({y:130.2},2).to({y:104.2},2).to({y:130.2},2).to({y:104.2},2).to({y:130.2},2).to({y:104.2},2).to({y:130.2},2).to({startPosition:0},19).to({regX:-0.1,regY:0.1,skewX:33.1,skewY:-146.9,x:1686.4,y:250.2},33).to({startPosition:0},7).to({startPosition:0},18).to({_off:true},22).wait(245));

	// explosion
	this.instance_6 = new lib.Layer3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(953,431,0.089,0.089);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1024).to({_off:false},0).wait(2).to({scaleX:0.27,scaleY:0.27,x:899,y:377},0).wait(2).to({scaleX:0.45,scaleY:0.45,x:845,y:323},0).wait(2).to({scaleX:0.63,scaleY:0.63,x:791,y:269},0).wait(2).to({scaleX:0.81,scaleY:0.81,x:737,y:215},0).wait(2).to({scaleX:0.99,scaleY:0.99,x:683,y:161},0).wait(2).to({scaleX:1.17,scaleY:1.17,x:629,y:107},0).wait(2).to({scaleX:0.99,scaleY:0.99,x:683,y:161},0).wait(2).to({scaleX:0.81,scaleY:0.81,x:737,y:215},0).wait(2).to({scaleX:0.63,scaleY:0.63,x:791,y:269},0).wait(2).to({scaleX:0.45,scaleY:0.45,x:845,y:323},0).wait(2).to({scaleX:0.27,scaleY:0.27,x:899,y:377},0).wait(2).to({scaleX:0.09,scaleY:0.09,x:953,y:431},0).to({_off:true},2).wait(400));

	// Lyn
	this.instance_7 = new lib.Tween47("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1130.8,-120.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween48("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1185.1,238.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(972).to({_off:false},0).to({_off:true,x:1185.1,y:238.5},16).wait(462));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(972).to({_off:false},16).to({rotation:-15,x:1210.7,y:163.7},10).to({regY:0.1,rotation:-3.3,x:1197,y:218.6},10).to({rotation:-3.3,x:1067,y:348.6},15).wait(12).to({startPosition:0},0).to({_off:true},1).wait(414));

	// indexfinger
	this.instance_9 = new lib.indexfingerpsd("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(272.9,447.5,1,1,0,0,0,282.5,444.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199).to({_off:false},0).wait(170).to({startPosition:0},0).to({x:309.4},10).to({x:311.1},20).to({x:309.4,y:413.5},3).to({y:447.5},3).to({y:413.5},3).to({y:447.5},3).to({y:413.5},3).to({y:447.5},3).to({y:413.5},3).to({y:447.5},3).to({y:416.4},3).to({y:447.5},3).to({y:413.5},3).to({y:447.5},3).to({y:416.4},3).to({y:447.5},3).to({startPosition:0},3).to({startPosition:0},3).to({startPosition:0},3).to({startPosition:0},18).to({skewY:180,x:1112.9},12).to({x:2168.9},9).wait(158).to({regX:282.7,regY:444.6,scaleX:0.44,scaleY:0.44,skewX:35.6,skewY:48.2,x:858.2,y:671.1},0).wait(12).to({regX:282.6,scaleX:0.4,scaleY:0.4,rotation:38.2,skewX:0,skewY:0,x:758.7,y:688},0).to({x:136.6,y:59.9},21).to({rotation:17.2,x:-324.2,y:97.1},15).to({rotation:0,skewX:-17.2,skewY:162.8,x:-42.6},23).to({regX:282.4,regY:444.4,skewX:6.4,skewY:186.4,x:386.2,y:182.2},18).to({skewX:6.4,x:1182.4,y:798.3},24).to({startPosition:0},15).wait(8).to({regX:282.3,skewX:66.4,skewY:246.4,x:1056.1,y:-17.9},0).to({regX:282.2,scaleX:0.4,scaleY:0.4,skewX:66.5,skewY:246.5,y:152.6},18).to({regX:282.3,scaleX:0.4,scaleY:0.4,skewX:66.4,skewY:246.4,y:162.1},13).to({y:122.1},3).to({y:162.1},3).to({y:122.1},3).to({y:162.1},3).to({y:122.1},3).to({y:162.1},3).to({y:122.1},3).to({y:162.1},3).to({startPosition:0},16).to({startPosition:0},70).to({y:122.1},3).to({y:162.1},3).to({y:122.1},3).to({y:162.1},3).to({y:122.1},3).to({y:162.1},3).to({startPosition:0},5).to({regX:282.2,regY:444.3,skewX:17.7,skewY:197.7,x:1215.6,y:-232.8},25).to({regY:444.2,skewX:16.7,skewY:196.7,x:1268,y:125.2},16).to({regX:282.1,skewX:1.7,skewY:181.7,x:1261.5,y:32.8},10).to({regY:444.1,skewX:13.4,skewY:193.4,x:1273.3,y:100.8},10).to({startPosition:0},79).to({startPosition:0},1).to({y:126.8},2).to({y:100.8},2).to({y:126.8},2).to({y:100.8},2).to({y:126.8},2).to({y:100.8},2).to({y:126.8},2).to({y:100.8},2).to({y:126.8},2).to({startPosition:0},19).to({regY:444.2,skewX:20.4,skewY:200.4,x:1691.9,y:247.5},33).to({startPosition:0},7).to({startPosition:0},18).to({_off:true},22).wait(245));

	// Penis
	this.instance_10 = new lib.pnspsd("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(243.4,458.2,1,1,0,0,0,243,459.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(149).to({startPosition:0},0).wait(53).to({startPosition:0},0).to({y:438.2},3).to({y:458.2},3).to({y:438.2},3).to({y:458.2},3).to({y:438.2},3).to({y:458.2},3).wait(37).to({startPosition:0},0).to({regY:449.9,rotation:-52.5,y:448.5},10).to({regX:243.7,regY:448.2,scaleX:2.09,scaleY:3.41,x:244.4,y:446.7},30).wait(72).to({startPosition:0},0).to({x:280.9},10).to({startPosition:0},20).to({y:412.7},3).to({y:446.7},3).to({y:412.7},3).to({y:446.7},3).to({y:412.7},3).to({y:446.7},3).to({y:412.7},3).to({y:446.7},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.4,x:281,y:415.6},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.5,x:280.9,y:446.7},3).to({y:412.7},3).to({y:446.7},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.4,x:281,y:415.6},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.5,x:280.9,y:446.7},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.4,x:281.1},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.5,x:280.9},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.4,x:281.1},3).to({scaleX:2.09,scaleY:3.41,rotation:-52.5,x:280.9},18).to({rotation:0,skewX:52.5,skewY:-127.5,x:1141.5},12).to({x:2197.5},9).wait(158).to({scaleX:0.92,scaleY:1.51,skewX:-9.5,skewY:-22.1,x:852,y:664.1},0).wait(12).to({regX:243.6,regY:448.3,scaleX:0.84,scaleY:1.37,rotation:-14.2,skewX:0,skewY:0,x:749.8,y:680.8},0).to({x:127.7,y:52.7},21).to({regX:243.7,rotation:-35.2,x:-334.9,y:93.4},15).to({rotation:0,skewX:35.2,skewY:-144.8,x:-31.8},23).to({regX:243.6,skewX:58.9,skewY:-121.1,x:397.4,y:183.2},18).to({x:1193.6,y:799.4},24).to({startPosition:0},15).wait(8).to({regY:448.2,skewX:118.9,skewY:-61.1,x:1060.8,y:-7.5},0).to({scaleX:0.84,scaleY:1.36,skewX:118.8,skewY:-61.2,x:1060.9,y:163},18).to({scaleX:0.84,scaleY:1.37,skewX:118.9,skewY:-61.1,x:1060.8,y:172.5},13).to({y:132.5},3).to({y:172.5},3).to({y:132.5},3).to({y:172.5},3).to({y:132.5},3).to({y:172.5},3).to({y:132.5},3).to({y:172.5},3).to({startPosition:0},16).to({startPosition:0},25).to({skewX:-16.1,skewY:-196.1,x:420.8,y:-67.6},13).to({skewX:-16.1},32).to({startPosition:0},48).to({startPosition:0},16).to({startPosition:0},10).to({startPosition:0},10).to({startPosition:0},79).to({startPosition:0},38).to({startPosition:0},33).to({startPosition:0},7).to({regX:243.5,scaleX:0.84,scaleY:1.36,skewX:-16,skewY:-196,x:421},18).to({regX:243.6,scaleX:0.84,scaleY:1.37,skewX:-16.1,skewY:-196.1,x:420.8},22).to({startPosition:0},136).to({startPosition:0},5).to({skewX:-106.1,skewY:-286.1,x:387.1,y:434.4},42).wait(62));

	// God
	this.instance_11 = new lib.Tween17("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1803.2,248.5);

	this.instance_12 = new lib.Tween18("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(963,248.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,x:963},149).wait(1301));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:false},149).to({rotation:-12.7,x:674.7,y:341.5},50).wait(170).to({startPosition:0},0).to({x:711.2},10).to({startPosition:0},20).to({y:307.5},3).to({y:341.5},3).to({y:307.5},3).to({y:341.5},3).to({y:307.5},3).to({y:341.5},3).to({y:307.5},3).to({y:341.5},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-12.6,y:310.5},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7,y:341.5},3).to({y:307.5},3).to({y:341.5},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-12.6,y:310.5},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7,y:341.5},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-12.6,y:341.6},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7,y:341.5},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-12.6,y:341.6},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7,y:341.5},18).to({rotation:0,skewX:12.7,skewY:-167.3},12).to({x:1767.2},9).wait(158).to({regX:0.1,scaleX:0.44,scaleY:0.44,skewX:24.6,skewY:-322.7,x:967.7,y:721.9},0).wait(12).to({regX:0.2,regY:0.1,scaleX:0.4,scaleY:0.4,rotation:25.5,skewX:0,skewY:-360,x:906.9,y:750.8},0).to({x:284.8,y:122.7},21).to({regY:0.2,rotation:4.6,x:-163.3,y:102.7},15).to({rotation:0,skewX:-4.6,skewY:-184.6,x:-203.5},23).to({regX:0.1,regY:0.3,skewX:19.1,skewY:-160.9,x:236.5,y:122.7},18).to({x:1032.7,y:738.8},24).to({startPosition:0},15).wait(8).to({regY:0.2,skewX:79.1,skewY:-100.9,y:-177.2},0).to({regX:0.2,regY:0.1,skewX:79.2,skewY:-100.8,y:-6.7},18).to({regX:0.1,regY:0.2,skewX:79.1,skewY:-100.9,y:2.8},13).to({y:-37.2},3).to({y:2.8},3).to({y:-37.2},3).to({y:2.8},3).to({y:-37.2},3).to({y:2.8},3).to({y:-37.2},3).to({y:2.8},3).to({startPosition:0},16).to({startPosition:0},70).to({y:-37.2},3).to({y:2.8},3).to({y:-37.2},3).to({y:2.8},3).to({y:-37.2},3).to({y:2.8},3).to({startPosition:0},5).to({regX:0.2,regY:0.1,skewX:30.4,skewY:-149.6,x:1080.5,y:-320.3},25).to({regX:0.1,regY:-0.1,skewX:29.4,skewY:-150.6,x:1131.4,y:40},16).to({skewX:14.4,skewY:-165.6,x:1107.5,y:-14.1},10).to({skewX:26.1,skewY:-153.9,x:1132,y:23.5},10).to({startPosition:0},79).to({startPosition:0},1).to({y:49.5},2).to({y:23.5},2).to({y:49.5},2).to({y:23.5},2).to({y:49.5},2).to({y:23.5},2).to({y:49.5},2).to({y:23.5},2).to({y:49.5},2).to({startPosition:0},19).to({skewX:33.1,skewY:-146.9,x:1561,y:153.5},33).to({startPosition:0},7).to({regY:0.1,scaleX:0.71,scaleY:0.71,rotation:11.9,skewX:0,skewY:0,x:1674.1,y:262.7},18).to({startPosition:0},22).to({x:-315},136).wait(109));

	// MAAN
	this.instance_13 = new lib.Manpsd("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(285,391.5,1,1,0,0,0,285,391.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(149).to({startPosition:0},0).wait(53).to({startPosition:0},0).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({startPosition:0},179).to({startPosition:0},67).to({startPosition:0},56).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({y:371.5},3).to({y:391.5},3).to({startPosition:0},13).to({regY:391.4,rotation:36.5,x:285.1},10).to({x:325.1,y:351.5},2).to({x:365.1,y:391.5},2).to({x:405.1,y:351.5},2).to({x:445.1,y:391.5},2).to({x:485.1,y:351.5},2).to({x:525.1,y:391.5},2).to({x:565.1,y:351.5},2).to({x:605.1,y:391.5},2).to({x:645.1,y:351.5},2).to({x:685.1,y:391.5},2).to({x:725.1,y:351.5},2).to({x:765.1,y:391.5},2).to({x:805.1,y:351.5},2).to({x:845.1,y:311.5},2).to({x:885.1,y:351.5},2).to({x:925.1,y:311.5},2).to({x:965.1,y:351.5},2).to({x:1005.1,y:311.5},2).to({x:1045.1,y:351.5},2).to({x:1085.1,y:311.5},2).to({x:1125.1,y:351.5},2).to({x:1165.1,y:311.5},2).to({x:1205.1,y:351.5},2).to({x:1245.1,y:311.5},2).to({x:1285.1,y:351.5},2).to({x:1325.1,y:311.5},2).to({x:1365.1,y:351.5},2).to({x:1405.1,y:311.5},2).to({x:1445.1,y:351.5},2).to({x:1485.1,y:311.5},2).to({x:1525.1,y:351.5},2).to({x:1565.1,y:311.5},2).to({x:1605.1,y:351.5},2).wait(12).to({regY:391.6,scaleX:0.33,scaleY:0.33,rotation:0,skewX:-36.5,skewY:143.5,x:1166.9,y:910.8},0).to({x:284.8,y:109},32).to({regX:284.9,skewX:-51.5,skewY:128.5,x:-79.3,y:113.9},13).to({regY:391.7,rotation:51.5,skewX:0,skewY:0,x:-551.3},14).to({regY:391.4,rotation:66.5,x:188.7,y:141.9},26).to({x:936.9,y:732},23).to({startPosition:0},8).wait(16).to({regX:285.8,regY:392.4,scaleX:0.33,scaleY:0.33,rotation:51.5,x:984.1,y:700.2},0).to({y:500.2},18).to({startPosition:0},5).to({startPosition:0},40).to({y:560.2},6).to({startPosition:0},6).to({regY:392.5,rotation:-68.5,y:220.2},13).to({regX:285.6,regY:392.4,rotation:-188.5,x:984.3,y:220.1},8).to({regX:285.7,regY:392.5,rotation:-308.5,x:984.2,y:280.1},6).to({y:498.1},10).to({startPosition:0},21).to({startPosition:0},48).to({startPosition:0},46).to({startPosition:0},36).to({rotation:-218.5,x:984.1,y:706.1},33).to({startPosition:0},96).to({startPosition:0},22).to({startPosition:0},136).wait(109));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgvA1QgQgWAAgdQAAgfASgWQATgXAdAAQAWAAAQAPQARAPAAAcIhiAAQABAjAPARQAPAQAUAAQAPAAAMgIQALgJAKgQIAFACQgGAUgRARQgSARgZAAQgdAAgQgWgAAZgaQgCgPgDgIQgJgOgQAAQgSAAgJAQQgGAIgCANIBBAAIAAAAg");
	this.shape.setTransform(808.7,317.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAbBtIAAgTQgJAKgHAEQgLAHgOAAQgbAAgQgVQgRgUAAgbQAAgiAUgYQAUgYAdAAQAKAAAJAFQAHADAGAGIAAgyQAAgJgDgEQgCgDgIAAIgDAAIgGABIAAgGIANgDIAOgEIAMgEIAIgDIABABIAAAQIAAASIgBATIAAB/QAAAKADAEQACAEALAAIADAAIAEAAIAAAFIgXAIIgYAJgAgjgMQgLAQAAAZQAAAZAMAUQALAUAXAAQAMAAAHgHQAIgIAAgGIAAhDQAAgTgLgJQgLgIgKAAQgTAAgLASg");
	this.shape_1.setTransform(793.8,313.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgkBuIAAgFQAOgBAFgEQAFgFABgNIAAiYQgBgKgCgEQgDgGgJAAIgFAAIgGACIAAgGIAxgPIACABIAAAEIAAC7QAAANAFAEQAFAEAOABIAAAFg");
	this.shape_2.setTransform(781.2,313.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AglBtIAAgEQARgCAEgEQAEgEAAgTIAAhKIgBgNQgCgGgIAAIgDAAIgKACIAAgEIAHgDIAlgNIAGgCIAAACIAABvQAAATAFAEQAEAEAPACIAAAEgAgMhQQgFgFAAgGQAAgHAFgGQAFgEAGAAQAGAAAFAEQAFAGAAAHQAAAGgFAFQgFAEgGAAQgGAAgFgEg");
	this.shape_3.setTransform(772.3,313.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAKBtIAAgEIAGgBIAEgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIgBgDIgCgEIgwg/IAAA6QAAALAIADQAFADALAAIAAAEIhLAAIAAgEQAPgBAFgEQAFgEAAgNIAAicQAAgLgEgDQgEgDgHAAIgFAAIgFABIAAgFIAOgEIAcgIIAIgCIABABIAAABIAACDIAqglIAHgHIABgFQAAgDgDgBIgNgBIAAgFIBBAAIAAAFQgRABgLAGQgKAFgeAbIgJAIIAcAmQAWAdAMAJQALAKANABIAAAEg");
	this.shape_4.setTransform(759.9,313.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAJBKIAAgFQALgCAFgEQAEgFAAgQIAAhBQAAgOgFgJQgFgJgNAAQgIAAgKAHIgOALIAABXQAAALAGAEQAEAEALAAIAAAFIhEAAIAAgFQALgCAFgEQAEgEAAgOIAAhOQAAgKgCgEQgDgGgKAAIgCAAIgEAAIAAgFIAegJIAPgGIACABIAAADIAAAWQAOgNAIgFQALgIANAAQALAAAJAHQAQAMAAAeIAABIQABALAEAFQAFAFAKAAIAAAFg");
	this.shape_5.setTransform(743.9,317.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag0BKIAAgFQAPgCAEgDQAEgEAAgNIAAhFQABgQgDgGQgDgHgIAAIgEAAIgFABIAAgFIASgGIANgFIAQgHIABABIAAADIAAAaQAKgOAJgIQAJgHAKAAQAIAAAFAEQAFAFAAAHQAAAHgDAEQgEAEgGAAQgGAAgGgFQgGgFgEAAQgFAAgIAIQgHAJAAAKIAABFQAAANAFAGQAGAFAPAAIAAAFg");
	this.shape_6.setTransform(730.7,317.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgvA1QgQgWAAgdQAAgfASgWQATgXAdAAQAWAAAQAPQARAPAAAcIhiAAQABAjAPARQAPAQAUAAQAPAAAMgIQALgJAKgQIAFACQgGAUgRARQgTARgYAAQgdAAgQgWgAAZgaQgCgPgDgIQgJgOgQAAQgSAAgJAQQgGAIgBANIBAAAIAAAAg");
	this.shape_7.setTransform(718.1,317.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhbBqIAAgGQATgBAGgFQAGgFAAgSIAAiNQAAgSgGgFQgGgFgTgBIAAgGIBZAAQAmAAAXAMQAWANABAeQgBAXgQALQgJAHgRAFQAWAEAPAMQAQANAAAWQAAAlgjAOQgSAIgbAAgAgbBRQgBAIAFADQAEACARAAQAYAAARgJQARgKAAgbQAAgbgUgKQgUgJgdAAIgJAAIgFgBgAgZhbQgCABAAAIIAABIIAdAAQAQAAALgFQAUgKAAgYQAAgdgXgKQgNgFgaAAQgKAAgCACg");
	this.shape_8.setTransform(699.5,313.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAJBKIAAgFQALgCAEgEQAFgFAAgQIAAhBQAAgOgFgJQgFgJgOAAQgHAAgKAHIgNALIAABXQAAALAEAEQAGAEAKAAIAAAFIhEAAIAAgFQALgCAEgEQAFgEAAgOIAAhOQAAgKgCgEQgDgGgKAAIgCAAIgEAAIAAgFIAfgJIAOgGIABABIAAADIAAAWQAPgNAIgFQALgIAOAAQAKAAAJAHQARAMAAAeIAABIQgBALAFAFQAFAFAKAAIAAAFg");
	this.shape_9.setTransform(673.8,317.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Ag2BCQgKgKAAgOQAAgXAXgPQAPgJApgQIAAgNQAAgQgDgGQgFgLgQAAQgIAAgHAFQgIAEAAAHIABAGIACAGQgBAJgFADQgEACgFAAQgGAAgEgEQgEgFAAgGQAAgKAOgMQANgMAaAAQAeAAALATQAFALAAAVIAAA9IACANQACAGAGAAIAGgBIAIgFIAAAIQgFAGgGAEQgIAGgKAAQgLAAgEgHQgFgHAAgKQgMALgIAFQgOAIgNAAQgNAAgKgJgAgOAAQgWANAAASQAAAOAKAHQAFAEAIAAQAKAAAJgGQAJgFAAgJIAAgxQgQAGgNAHg");
	this.shape_10.setTransform(659.2,317.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag5BtIAAgEQARgBAEgFQAGgGAAgRIAAhjIgbAAIAAgLIAbAAQAAgYAHgSQAMggAiAAQANAAALAFQALAGAAAJQAAAFgEAEQgDAEgGAAQgEAAgEgCIgHgKIgDgEIgFgGQgDgCgFAAQgMAAgDAMQgDAGABAKIAAAlIAlAAIAAALIglAAIAABjQAAASADAFQAFAEAUACIAAAEg");
	this.shape_11.setTransform(647.4,313.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgvA1QgQgWAAgdQAAgfASgWQATgXAdAAQAWAAARAPQAQAPAAAcIhiAAQACAjAOARQAPAQATAAQAQAAAMgIQALgJAKgQIAFACQgGAUgRARQgTARgYAAQgdAAgQgWgAAZgaQgBgPgFgIQgHgOgSAAQgRAAgKAQQgEAIgCANIBAAAIAAAAg");
	this.shape_12.setTransform(633.8,317.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgTBOQgEgKAAgPIAAheIgRAAIgBgBIgBgBIABgCIAEgFIAQgOIAVgdIADAAIABADIAAAmIAfAAIAAALIggAAIgBBZQAAAMADAGQAEALAKAAQAGAAAEgDIAJgIIAFAEIgDAEQgJALgJAFQgJAEgIAAQgSAAgGgQg");
	this.shape_13.setTransform(622.5,315.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgaBpIgSgGQgGAAgCAEIgCAHIgHAAIgKhEIAHAAQAJAVAKANQAUAXAbgBQAPABALgLQALgJAAgSQAAgPgLgMQgHgHgXgOIgbgQQgMgIgIgIQgNgQAAgSQAAgYAQgQQAQgQAaAAQAKAAAQAFIARAFQAGAAADgCIADgIIAHAAIAHBEIgIAAQgIgfgRgMQgRgNgQAAQgNABgKAHQgKAIAAAOQAAAMAIAJQAHAJAQAJIAbASQAaAPALAOQALAOAAASQAAAZgTASQgTAQgeAAQgOAAgQgFg");
	this.shape_14.setTransform(608.6,313.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("Ag5BtIAAgEQAQgBAGgFQAFgGAAgRIAAhjIgbAAIAAgLIAbAAQAAgYAHgSQANggAgAAQAPAAAKAFQALAGAAAJQAAAFgDAEQgFAEgEAAQgFAAgDgCIgIgKIgDgEIgFgGQgDgCgFAAQgMAAgDAMQgCAGgBAKIAAAlIAnAAIAAALIgnAAIAABjQAAASAFAFQAEAEAUACIAAAEg");
	this.shape_15.setTransform(587.9,313.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("Ag2BCQgKgKAAgOQAAgXAXgPQAOgJAqgQIAAgNQAAgQgDgGQgFgLgQAAQgIAAgHAFQgIAEABAHIABAGIABAGQAAAJgHADQgDACgFAAQgGAAgEgEQgEgFAAgGQAAgKAOgMQANgMAbAAQAcAAALATQAGALAAAVIAAA9IABANQADAGAGAAIAGgBIAIgFIAAAIQgFAGgGAEQgJAGgJAAQgLAAgEgHQgFgHAAgKQgMALgHAFQgPAIgMAAQgOAAgKgJgAgNAAQgXANAAASQAAAOAJAHQAHAEAHAAQALAAAIgGQAJgFAAgJIAAgxQgQAGgMAHg");
	this.shape_16.setTransform(574.9,317.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AB/C3IAAgLQAigDALgLQALgKAAghIAAinQAAgmgIgSQgPgggqAAQgZAAgZARIgkAfIAADHQAAAgALAQQALAQAkACIAAAKIiyAAIAAgKQAlgFAKgNQAKgOAAg0IAAhsQAAg8gHgXQgNgmgqAAQgYAAgXANQgXANgSAVIAADVQAAAeALALQAKALAjABIAAAKIiyAAIAAgKQAfgDAKgIQAPgLAAgiIAAjJQAAgdgHgJQgIgJgRAAIgNABIgJADIAAgOIAcgJIAygTQAXgJAOgEIACACIAAAIIAAA0QAngjAcgNQAcgOAeAAQAoAAAXAbQAMAPAJAaQAdgeAVgOQAlgYAnAAQA/AAAVAzQAMAdAAA/IAAChQAAAcAMAKQANAJAgAEIAAAKg");
	this.shape_17.setTransform(880.9,260.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AiIClQgZgYAAgkQAAg5A4gmQAlgWBqgpIAAghQAAgogIgPQgNgbgpAAQgUAAgSALQgSAKAAATIACAQIACAOQAAAVgOAJQgJAFgLAAQgRAAgKgLQgKgMABgOQAAgbAhgeQAigeBBAAQBLAAAbAxQAOAbAAA0IAACbIAEAgQAFAPAQAAIAPgDIAUgNIAAAUQgMAPgPAKQgWAPgWAAQgbAAgLgRQgNgRgBgYQgdAagVAMQgkAVggAAQghAAgYgXgAgjAAQg4AhAAAtQAAAjAXARQAPALATAAQAZAAAYgPQAXgOAAgWIAAh7QgsAPgdASg");
	this.shape_18.setTransform(832.9,260.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("ABCERIAAgwQgWAYgQAKQgcASglAAQhCAAgpgzQgqg0AAhEQAAhUAyg8QAxg9BIAAQAbAAAYANQAQAIAOAOIAAh8QAAgYgFgJQgFgJgUAAIgJABIgPABIAAgNIAggIIAjgKIAfgJIAVgIIACABIgBApIgBAuIAAAvIgBE+QAAAZAGAKQAHAKAbAAIAIAAIAJgBIAAANIg5AUIg9AXgAhaghQgbAqAABAQAAA/AdAxQAdAxA6AAQAeAAASgRQATgSAAgQIAAioQAAgygbgVQgbgVgZAAQgxAAgcAsg");
	this.shape_19.setTransform(794.3,251.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("ABJENIAAgPQAjgDAKgEQALgFAAgRIgEgVIgLgfIgghNIjSAAIglBgIgHAbQAAAVARAHQAKAFAcACIAAAPIifAAIAAgPQAfgDAQgUQAPgUAmhYICmmHIAQAAIDHHEQAUAtALALQAMALAdADIAAAPgABEBAIhajcIhdDcIC3AAg");
	this.shape_20.setTransform(744.8,251.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("Ag5C0IgkgHIgIADIgGAIIgKAAIAAh+IANAAQAJAsAPAYQAcAsA0AAQAcAAARgQQASgRgBgZQAAgRgKgPQgJgPgZgPIgqgZQgwgZgXgaQgXgaAAgjQAAgsAggcQAegcAwAAQAUAAAYAHIAdAIIAKgCIAFgGIAJAAIADBtIgMAAQgIgmgNgVQgYgngtAAQgbAAgQARQgPARAAAWQAAAkA2AcIAyAcQBTAsAAA8QAAAvgiAdQgjAdg2AAQgYAAgdgIg");
	this.shape_21.setTransform(685.3,260.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AABC1IgFgLIh3kdQgPgjgQgNQgKgHgTgCIAAgMICeAAIAAAMIgcAGQgJAEAAANIACANIAGAQIBRDDIBFisIAKgbIAEgVQAAgQgOgGIgXgFIAAgMIBuAAIAAAMQgTACgIALQgJALgQAoIhwEYIgGAKIgFADg");
	this.shape_22.setTransform(649.1,260.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("ABCERIAAgwQgWAYgQAKQgcASglAAQhCAAgpgzQgqg0AAhEQAAhUAyg8QAxg9BIAAQAbAAAYANQAQAIAOAOIAAh8QAAgYgFgJQgFgJgUAAIgJABIgPABIAAgNIAggIIAjgKIAfgJIAVgIIACABIgBApIgBAuIAAAvIgBE+QAAAZAGAKQAHAKAbAAIAIAAIAJgBIAAANIg5AUIg9AXgAhaghQgbAqAABAQAAA/AdAxQAdAxA6AAQAeAAASgRQATgSAAgQIAAioQAAgygbgVQgbgVgZAAQgxAAgcAsg");
	this.shape_23.setTransform(589.9,251.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("Ah9CGQg0g3AAhSQAAhOAyg1QAxg2BOAAQBMAAAzAzQAzAyAABVQAABNgyA5QgxA5hOAAQhKAAg0g3gAhBiQQgnAjAABXQAABFAfA8QAgA8A3AAQAsAAAXgoQAYgoAAhCQAAhCgeg8Qgeg8g5AAQgfAAgWAVg");
	this.shape_24.setTransform(549.1,260.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ai2DOQhZhLAAh/QAAhuBHhRQBOhXB/AAQAvAAAsAMIA0ANQARABAHgHQAIgGAFgNIASAAIAFCoIgSAAQgYg6gagcQgwgzhMAAQhMABg6A6Qg6A6AACFQgBBvA7A+QA6A+BVAAIAigCIAlgJQAcgJAIgHQAGgIABgMIAAiAQAAgugOgMQgNgKgsgDIAAgPIDMAAIAAAPQgeACgKAHQgQANAAAmIAACeQAAAOhEAXQhGAYg/AAQh1AAhQhFg");
	this.shape_25.setTransform(500.7,252.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1273).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).wait(153));

	// BG
	this.instance_14 = new lib.bgpsd("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(671,300,1,1,0,0,0,671,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(399).to({startPosition:0},0).wait(319).to({startPosition:0},0).wait(136).to({startPosition:0},0).wait(70).to({startPosition:0},0).wait(48).to({startPosition:0},0).wait(478));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(671,199,2264.4,701);
// library properties:
lib.properties = {
	id: '992A284259014D41B23E0B3CB8F0883E',
	width: 1342,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/GodAnimated_atlas_.png", id:"GodAnimated_atlas_"},
		{src:"sounds/babylaugh.mp3", id:"babylaugh"},
		{src:"sounds/deathsound.mp3", id:"deathsound"},
		{src:"sounds/ElectricSparkSoundEffect2.mp3", id:"ElectricSparkSoundEffect2"},
		{src:"sounds/escapewav.mp3", id:"escapewav"},
		{src:"sounds/explosion2.mp3", id:"explosion2"},
		{src:"sounds/fallingwav.mp3", id:"fallingwav"},
		{src:"sounds/FunnyMusicInstrumentalfunnybackgroundmusicvideoscomedycutesillyfuninstrumentalmusicHQ.mp3", id:"FunnyMusicInstrumentalfunnybackgroundmusicvideoscomedycutesillyfuninstrumentalmusicHQ"},
		{src:"sounds/HeavensChoirSoundEffectwav.mp3", id:"HeavensChoirSoundEffectwav"},
		{src:"sounds/kungfu.mp3", id:"kungfu"},
		{src:"sounds/laughwav.mp3", id:"laughwav"},
		{src:"sounds/manscream.mp3", id:"manscream"},
		{src:"sounds/MarvinGayeLetsgetiton2.mp3", id:"MarvinGayeLetsgetiton2"},
		{src:"sounds/OHHELLNOsoundwav.mp3", id:"OHHELLNOsoundwav"},
		{src:"sounds/Popsoundeffect.mp3", id:"Popsoundeffect"},
		{src:"sounds/runningwav.mp3", id:"runningwav"},
		{src:"sounds/running2wav.mp3", id:"running2wav"},
		{src:"sounds/SoundEffectDJStop.mp3", id:"SoundEffectDJStop"},
		{src:"sounds/VictorySoundEffect.mp3", id:"VictorySoundEffect"},
		{src:"sounds/victorylaughonlineaudioconvertercom.mp3", id:"victorylaughonlineaudioconvertercom"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['992A284259014D41B23E0B3CB8F0883E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;