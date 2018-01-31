(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AoSFUIhkgBIh3gBQAJhXArhXQAOgdAQgYQAEgFADgDQAOgUAQgRQBOhQB3gGQCxgHAmADQACABACAAQAmhKA+hIQB+iVCAAAIGigWAJLlKQAiAPAeAZQBdBNACCRQABAjABAhQgBACABACQACC5AACYAj+FUILYAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-38,158,76.1);


(lib.Hjul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eger
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15,1,1).p("AABABIgBgBISIAAAAAAAIM0szAAAAcIABRsAM0M0IszszIgBAbAAAAAIAAAcAAAAAIAAgbIAAxsAszszIMzMzIAAAAIyHAAAszM0IMzs0IAAgb");
	this.shape.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(27,1,1).p("ACHAAQAAA4gnAoQgoAng4AAQg3AAgognQgngoAAg4QAAg3AngoQAognA3AAQA4AAAoAnQAnAoAAA3g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(50,1,1).p("AVGAAQAAIvmLGMQiBCAiSBXQkvC0l5AAQl4AAkvi0QiShXiBiAQmLmMAAovQAAouGLmMQGMmLIuAAQIvAAGMGLQGLGMAAIug");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheBfQgognAAg4QAAg3AognQAngoA3AAQA4AAAnAoQAoAnAAA3QAAA4goAnQgnAog4AAQg3AAgngog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hjul, new cjs.Rectangle(-160,-160,320,320), null);


(lib.rullendehjul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hjul();
	this.instance.parent = this;
	this.instance.setTransform(2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1800},48).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-158.9,320,320);


(lib.Bil2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,-6.3);

	this.instance_1 = new lib.rullendehjul();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.8,27.7,0.102,0.102,0,0,0,3,1.9);

	this.instance_2 = new lib.rullendehjul();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38.8,27.7,0.102,0.102,0,0,0,3,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("ApVFZIgYgJQgOgFgKgCQgJgCgRgBIgZgCQgfgGgLgUQgHgNADgQIACgFIgBgLQAAgvAjgwQAagjAzgpQBThCA3gXQBBgcBZgGQA3gEBpAGQgKgYAIgcQAHgaATgWQANgQAagVIAqgjIAngoQAYgZAPgNQAsgiBFgMQAtgIBSgBIEQgEQAqAAAXADQAjAFAZAOQAoAZATA5QAOAnAFBEIAWD/QADApgGATQgGAPgMAKQgMAKgPAAQgMgBgSgMQgVgPgIgDQgZgJgqAQQgtATgmAZIgOAKQALAPgDAUQgDAVgQAKQgPAKgjAAImkACIjKACQgSAAgKgCQgQgEgIgJQgHgJgCgRIgEgeQgEgRgOgNQgMgNgSgIQgWgKgxgFQgUgCgKABQgQABgLAHQgLAGgLASIgGAIQgBAKgFAMIgSAhIgRAlQgLATgPAIQgKAFgOAAQgLAAgPgEg");
	this.shape.setTransform(1,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bil2, new cjs.Rectangle(-78.5,-44.4,158,88.4), null);


// stage content:
(lib.bil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Bil2();
	this.instance.parent = this;
	this.instance.setTransform(458.4,343,1,1,0,0,0,0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.6,regY:-0.4,rotation:175,x:312,y:264.1},25).to({regY:-0.2,rotation:0,x:88.5,y:324},23).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBLQgUAAgJgBQgbgFgagXQgQgPgXgfIgQgUQgKgNgCgKQgCgKAFgJQAFgJAJgDQAQgEAQARIANAQIAJAPQAGAKAJAKQAVAYAPAFQAJADATAAIAyAAQARAAAPgCIAigGQAPgDAOABQAVAAAIAIQAHAFABAKQABAKgGAHQgHAIgPADIgMABIgNABQgJAAgPADIgZAFQgOACgbAAg");
	this.shape.setTransform(214.1,253.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBNIgoAAQgTgBgKgBQgagFgagXQgQgPgWgfIgQgUQgKgNgDgLQgCgKAGgKQAEgKAJgDQAQgEAPAPQAFAFAIAKIAKAPIAOAUQAVAYAOAFQAJADASAAIAwABQAPACAQgBIAhgGQAPgBAOABQAUABAIAIQAIAFABAKQACAKgFAHQgGAJgOADQgFABgIABIgMAAIgZADIgYAEQgLADgUAAIgJgBg");
	this.shape_1.setTransform(214.3,253.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBOQgTAAgJgCQgagFgZgXQgQgPgXgeIgQgUQgKgNgCgNQgCgKAFgMQAEgJAJgEQAPgFAPAPQAFAEAIAJIAKAPIAPAVQATAWAOAFQAIAEARABIAuACQAPACAOAAIAhgEQAPgBAPADQATABAJAHQAHAGADAKQABAKgEAHQgFAJgOAEQgEABgIABIgMABIgZADIgYADQgMACgaAAIgngCg");
	this.shape_2.setTransform(214.6,253.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAcBSIgmgCQgTgBgJgCQgZgFgZgXQgQgPgWgdIgQgUQgLgOgCgNQgCgLAFgNQAFgKAIgEQAOgFAPANQAFADAIAKIAKANIAPAWQASAXAOAEQAHAEAQABIAsADQAOAEAOABIAggDQAPAAAPADQAUABAIAIQAHAGAEAKQACAKgEAHQgEAJgNAEQgEACgIABIgMACIgZACQgQADgHAAIgZABIgMAAg");
	this.shape_3.setTransform(214.8,252.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBSQgTgCgJgCQgYgFgZgXQgQgPgWgdIgQgTQgLgPgCgNQgCgMAFgOQAFgKAIgFQAOgGANAMQAFADAJAJIAKAOQAIAJAHAMQASAXAMAFQAHAEAPAAIAqAFQANAFAOABIAfgBQAPAAAQAFQATACAIAHQAIAGAEAKQADAKgDAHQgEAKgMAEQgEADgIABIgMACIgZACQgQACgGAAIgkAAIglgCg");
	this.shape_4.setTransform(215.1,252.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfBXIglgDIgbgEQgYgGgZgWQgPgPgWgcIgQgUQgLgPgDgPQgBgMAFgPQAEgKAIgFQANgHAOALQAFADAIAIIALAMQAIAKAHANQAQAVAMAHQAHAEAOABIAnAFQANAGAOACIAegBQAPACAQAFQASACAJAIQAIAGAEALQAEAJgDAIQgCAJgMAFQgDADgIABIgNADIgYABQgQACgGAAIgPAAIgTAAg");
	this.shape_5.setTransform(215.3,252.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABABZIghAAIgjgEIgbgEQgXgGgZgWQgPgPgVgbIgRgUQgLgPgDgRQgBgMAFgRQAEgKAHgFQANgHANAKQAFACAJAHIALAMQAIAKAHANQAPAVALAGQAHAFANACIAlAFQALAIAOADIAeAAQAPADAQAFQASADAJAIQAIAGAFALQAEAJgCAIQgCAKgLAFQgDADgHACIgOACIgYABIgQABIgFAAg");
	this.shape_6.setTransform(215.6,251.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABABcIgggBIgigFIgbgFQgWgFgYgXQgQgPgUgaIgRgUQgMgQgCgRQgCgNAGgSQAEgKAGgGQANgHAMAJQAFABAJAHIAMALQAIAKAGAOQAPATAKAIQAGAEANADIAiAHQALAIANADQAKACATAAQAQAEAPAGQASADAJAIQAIAGAHALQAEAKgBAIQgBAKgKAFQgDADgIADIgNADIgYAAIgRABIgEAAg");
	this.shape_7.setTransform(215.8,251.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABABeIgfgBIghgFIgbgGQgVgFgYgXQgQgOgUgaIgRgUQgMgQgCgTQgCgNAGgTQAEgLAGgGQAMgIAMAIQAFABAJAGQAGAFAGAGQAJAJAFAPQAOATAKAIQAFAEAMADIAgAJQAKAJANAEQAJACATABQAQAEAQAHQARAEAKAIQAIAGAHALQAEAKAAAIQAAAKgKAGQgCADgIADIgNADIgYAAIgOABIgGgBg");
	this.shape_8.setTransform(216,251.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABSBhQgNABgGgCIgdgBIgigGIgZgGQgVgGgXgVQgQgPgUgaIgRgUQgMgQgCgUQgCgOAGgUQADgLAHgGQALgJALAHQAFAAAJAHQAHADAGAGQAJAKAFAPQANASAJAIQAFAFALADIAeAKQAJALAMAEQAJADATACQAQAEAQAIQARAEAKAJQAIAGAHAKQAGAKAAAIQABALgJAGQgDAEgHADQgIADgGAAIgHABIgRgBg");
	this.shape_9.setTransform(216.3,251.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABRBjQgNABgGgBIgcgDIgggGIgZgHQgUgGgYgVQgPgPgUgZIgRgUQgMgRgDgUQgBgPAFgVQAEgLAGgHQALgJALAGQAFAAAJAFQAGADAGAHQAKAJAFAPQAMASAIAIQAFAGAJADIAcALQAIANANAEQAIACATADQAQAGAQAJQARAEAJAJQAIAGAJALQAGAJAAAJQACALgIAGQgCAEgIAEIgNAEIgEAAIgUgCg");
	this.shape_10.setTransform(216.6,250.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABQBnQgMAAgGgCIgbgCIgfgHIgZgIQgUgGgXgVQgPgPgTgYIgSgUQgMgRgDgWQgBgPAFgWQAEgLAGgIQAKgJAKAFQAFgBAJAEQAHADAHAGQAJAKAFAQQALAQAIAJQAEAGAJADIAZAMQAIAPAMAEQAIADASAEQAQAHAQAJQARAFAKAJQAIAGAJALQAGAJACAJQACALgIAHQgBAEgIAEQgIADgFABIgFAAIgTgBg");
	this.shape_11.setTransform(216.9,250.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABOBpQgMABgGgCIgZgEIgegHIgZgIQgTgGgWgWQgQgOgTgYIgRgUQgNgRgCgXQgCgQAGgXQADgLAGgIQAJgKAKAEQAFgCAJAEQAIADAGAGQAKAJAEAQIASAaQADAFAIAEIAYANQAGAQAMAFQAHAEASAEQARAIAQAKQAQAFAKAJQAIAGAKALQAHAKACAJQAEALgIAHQgBAFgIAEQgHAEgGABIgDAAQgJAAgMgDg");
	this.shape_12.setTransform(217.2,250.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABNBsQgLABgGgDQgKgCgOgCIgegHIgYgJQgSgGgWgWQgQgOgSgXIgSgVQgNgRgCgXQgCgRAGgZQADgLAFgIQAJgLAKADQAFgCAJADQAIACAGAGQALAJADARIAQAZQADAGAHAFIAWANQAFASALAHQAIADARAFIAhATQAQAGAKAJQAJAGAKALQAHAKADAJQAFALgHAIQgCAFgHAEQgHAEgHABIgCAAQgJAAgMgDg");
	this.shape_13.setTransform(217.5,250);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABLBwQgKAAgGgDQgJgDgNgBIgdgJIgYgJQgSgGgWgWQgPgOgSgWIgSgVQgOgRgCgZQgBgRAGgaQADgLAFgJQAIgLAJABQAFgCAJADQAIABAHAGQALAJADASIAOAYQADAGAGAFIATAPQAGATAKAHQAHAEARAFIAhAVQAPAHALAJQAJAGALALQAHAKAEAJQAFALgGAIQgBAGgHAEQgIAFgGABIgDAAQgJAAgMgDg");
	this.shape_14.setTransform(217.8,249.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABJBzQgJAAgGgDQgJgEgMgBIgcgJIgYgKQgRgGgWgVQgPgPgSgVIgSgVQgNgSgDgaQgBgRAGgbQADgMAEgJQAIgMAJABQAFgDAJACQAIABAHAGQALAJADASQAIAOAFAKQACAHAFAFIARAPQAFAUAKAJQAGAEARAGIAiAWQAPAHAKAJIAVASQAIAKAEAJQAGAMgFAIQgBAGgHAFQgIAEgGACIgCAAQgJAAgNgEg");
	this.shape_15.setTransform(218.1,249.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABIB3QgJgBgGgDQgJgEgLgBIgbgKIgXgKQgQgHgWgVQgPgPgSgUIgSgVQgOgSgCgbQgBgSAGgcQADgMAEgJQAHgNAIAAQAFgEAKACQAIAAAHAGQALAJADATQAHANAEAKQACAHAEAFIAPARQADAWALAJQAFAEARAHIAiAYQAOAIALAJIAWASQAIAJAFAJQAHANgFAIQgBAHgHAFQgHAFgHABIgCAAQgJAAgMgEg");
	this.shape_16.setTransform(218.4,249.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABGB6QgIAAgGgEQgJgEgJgCIgbgKIgWgLQgQgHgVgUQgPgPgSgUIgSgVQgOgSgCgcQgBgTAFgdIAHgWQAHgNAIgBQAFgFAJACQAJAAAHAFQAMAJACATQAGANADALQABAHAEAFIAMASQADAXAKAKQAGAFAPAHIAjAaQAOAIALAJIAWASQAJAJAFAKQAJAMgFAJQAAAHgHAFQgHAGgHABIgCAAQgKAAgMgFg");
	this.shape_17.setTransform(218.7,248.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABEB+QgIgBgFgEQgJgEgIgCIgagLIgWgLQgPgHgVgVIggghQgMgNgGgJQgPgSgCgeQgBgSAGgfIAGgXQAGgNAIgDQAFgEAJAAQAJAAAHAFQAMAKACATQAFAMADALQAAAHADAGIAKATQACAYAKALQAGAFAOAIIAjAbIAZASIAYASQAJAKAGAJQAJANgEAKQAAAGgHAGQgHAFgHACIgCAAQgJAAgNgFg");
	this.shape_18.setTransform(219.1,248.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABCCCQgHgCgGgEQgIgEgIgCIgYgMIgWgMQgOgHgVgUQgPgPgQgSQgNgNgGgJQgPgTgCgdQgBgUAGggIAGgXQAFgOAHgDQAFgGAKAAQAJgBAHAGQANAJABAUQAFAKABAMIACAOIAIAUQABAaAKAKQAGAHAOAJIAiAcQAOAJALAKIAZASQAJAJAHAKQAKANgDAKQAAAHgHAGQgHAGgHABIgCAAQgKAAgMgFg");
	this.shape_19.setTransform(219.4,248);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABBCFQgHgBgGgEQgHgFgHgDIgXgMIgWgMQgOgHgUgVIgfggQgNgNgGgIQgPgUgCgfQgBgUAGghIAFgXQAFgPAHgEQAFgGAJgBQAJgBAIAFQANAJABAUQADAKABANIABAOIAGAVQAAAbAJALQAGAIAOAJIAiAeIAZATIAZASQAKAKAHAKQALANgCAKQAAAIgGAGQgHAGgIABIgCAAQgJAAgMgGg");
	this.shape_20.setTransform(219.7,247.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA/CJQgGgCgGgEQgHgGgGgCIgWgNIgWgMQgNgIgUgUIgfggQgNgNgGgIQgPgUgCggQgBgVAGgiIAFgYQAEgPAGgGQAFgGAKgBQAJgCAIAFQANAJABAVQADAJAAANIgBAPIAEAWQgBAcAJAMQAFAIAOAKIAjAgIAYATIAaATQALAJAIAKQALAOgBAKQAAAIgGAHQgHAGgIACIgCAAQgJAAgMgHg");
	this.shape_21.setTransform(220.1,247.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA9CNQgGgCgFgFIgMgIIgWgNIgVgOQgMgIgUgTIgegfQgOgOgFgIQgQgUgCghQgBgVAGgkIAFgYQADgQAGgHQAFgHAKgBQAKgCAIAEQANAJAAAWQACAIAAAOIgCAPIABAXQgCAeAJAMQAFAIANALIAjAhIAYAVIAbASQAMAJAIALQANAOgBAKQAAAJgGAHQgHAGgIACIgBAAQgKAAgMgHg");
	this.shape_22.setTransform(220.4,247);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA7CRQgFgDgGgFIgKgIIgVgOIgUgOQgMgIgUgUIgegeQgOgOgFgHQgQgWgCghQAAgWAFglIAEgZQAEgQAFgIQAFgHAKgDQAKgCAIAFQAOAJAAAWIgBAVIgDAQIgBAYQgCAfAIANQAEAJAOALIAjAjIAYAVIAcATQALAJAJAKQAOAOgBAMQABAIgGAHQgHAIgIABIgBAAQgKAAgMgHg");
	this.shape_23.setTransform(220.8,246.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AA5CVQgFgDgFgFIgJgJIgUgPIgUgOQgLgIgUgUIgdgdQgOgOgGgIQgQgWgCgiQAAgWAGgmIADgaQADgQAFgJQAFgIAKgDQAKgDAIAEQAOAJAAAXIgCAVIgFAQQgCAMgBAOQgDAgAIAOQAEAJANAMIAjAkIAYAWIAdATQAMAJAJAKQAPAPAAALQABAJgGAIQgHAHgIACIgBAAQgKAAgMgIg");
	this.shape_24.setTransform(221.1,246.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(25));

	// Layer 6
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Aj1HgQgHgJAAgKQAAgPAOgYQAfg3AZgiQAog0ASgcQAggzAQhAIADgIIgBgKQgBhPAEgiQAFgkANgwQALgrAMgTIAGgHQgTgBgRgOQgQgMgJgUQgMgXgBgZQgCgQAGgoIADgSQACgPADgLQADgHAJgOIAig0QAIgMABgIIAAgLIgBgLQABgQANgJQAHgFALgBQAHgBAOAAQAuAAASAEQAlAIAPAaQAKAQABAiQAAArgHAlIgHAbQgDALgHALQgIATgHANQAcgGAcACQAlAEAcASQALAHAGAKQAIALgDAKQgCALgMAFQgLAFgLgEQgFgCgHgFIgLgHQgSgLgbABQgTACgeAIQgcAIgJAKIgKALIgJAMIgNALQgKAGgEAFQgIAJgGAWIgOA6QgHAcgCAMQgDAVAAAjIABAxQAFAHACANIADARQACAKACAHIALAXQALAUAMAxQAMAuANAWQAHALAKAMIAjAvQASAXgGAPQgFAKgNADQgMACgLgHQgIgFgIgLIgNgTIgagkQgQgWgGgPQgJgSgKgrQgKgpgLgUQgHAHgHAMIgKAWQgIARgeApIgyBEQgbAngPAiQgHAPgEAGQgIAKgKABIgBAAQgJAAgIgJgAgKlvQgQAYgHAQQgVAuAKAzQAFAVALAFQAKAFASgIQAagLALgKQAOgMANgZQAgg7AChGQAAgSgFgIQgIgMgUgCQgVAAgKgBgAAEjlQgFgBgGgFIgKgLQgJgJgCgFQgBgEACgEQABgFAEAAQAGgBAGAGQAKAJABAHQAEACAGgDIALgHQAOgJADgEIAIgOQADgDAEgBQAEgCADACQAHAFgEALQgFAMgMAKQgGAGgQALQgMAHgIAAIgBAAgAgDkwQgBgCAAgFIAAg6QADgFACgBQACgBADACQADABABADQADAEAAAIIAAAmQAAALgDAEQgDADgEABIgCAAQgCAAgCgDgAAok4QgHgBgCgDQgBgDAFgKQACgEgBgIIAAgxIABgJQABgFAFgBQAGgBADAGQACAEAAAIIAAAtQAAAQgCAHQgBAFgCADIgEABIgFgBg");
	this.shape_25.setTransform(231.7,271.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(49));

	// Baggrund
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("ADnFlQgQAAgXgGIgmgKQgigIgzAAIhWAAQg2gCgNABQgMACgeAHQgcAGgPABQgcABgbgKQgRgGgOgLQgJgFgHgIQgVgUgEgWQgCgNAEgMQAEgNAKgHQAGgFANgEIAUgHQANgGAXgaIBWhlQAkgpANgaQARggAMg/QAXhzAIhzQAQgDAUgFIAwgOQAqgLA0gDQAYgCAfABQAGBjgBB/QgCEmACAwQABAXAGAJQAGAIAPAHQATAIAEADQAMAJAEAOQAEANgDALIgBAEQgHARgTAKQgQAJgUAAIgCAAg");
	this.shape_26.setTransform(95.5,291);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("EAqHAHXIhbAAIo9gBIgnABInTgBIAAABMhPCgACQgkiRAZiXQAZiXBQh9QBQh+B/hXQB/hWCSgdQAkgHAngEQA8gGBGABQBEABCJAMIE7AbQCUANBMADQAPALARAGQAbAKAcgCQAPgBAcgGQAegHAMgBQANgCA2ADIBXAAQAzAAAiAHIAmALQAXAFAQABQAVAAARgJQATgKAHgSIABgDQF+gOF+gbQFPgYBpgFQD5gKC/AOICeAOQBhAJA8ADQBQADChgCQCIACBcAUQEvgrDXAUQAgADBWAMQBKAKArADQBKAGCUgCIJdgJQDGgDBoAKQBtALBZAbQAwAPApATQBuAyBYBXQBYBXA1BtQA1BsAQB6QAQB6gVB4gEgnwADVQgNAFgJAMQgIAMAAAOQgBAOAIANQAIAMANAGQANAGAbAAIEfAAQAbAAANgGQANgGAIgMQAHgMAAgOQAAgNgIgNQgIgMgMgFQgMgGgbAAIkiAAQgZAAgLAFgA8fDUQgKAHgGALQgFAMAAAMQABANAIAKQAHALALAGQAMAGAgABICdABQBcABBAADQAcACAPgGQAYgJAHgXQADgLgDgMQgCgMgIgJQgPgSgpgDQgegDg8AAIjmAAQgkAAgPAKgAwnDRQgMAGgIAMQgHANABANQAAAOAIAMQAJAMAMAFQAMAEAZAAIEdABQAZAAALgFQANgGAIgMQAJgMAAgOQAAgOgIgMQgIgNgNgFQgMgGgbAAIkYAAQgeAAgNAHgAmUDFQgMAGgHANQgIAMABAOQABAOAIALQAIAMANAFQAMAFAXAAIELAAQAaAAANgGQAMgGAIgLQAIgLAAgNQABgMgGgMQgHgMgLgHQgKgGgOgCIgZgBIkBAAQgfAAgNAHgAJ2CyIkwAGQgdAAgPAIQgKAGgHALQgGAKgBAMQgBAMAFALQAGAMAKAGQAKAIARACQAKABAUAAIEDgDQAYgBAUABQAWACAJgBQAPgDAMgLQALgLADgPQADgPgGgPQgGgPgNgIQgQgKgfAAIgLAAgAQZDAQgMAFgHAMQgHAMABANQAAANAHAMQAHALAMAGQANAGAdAAIE4ABQAjAAAOgJQALgHAGgLQAHgMgBgMQAAgNgHgLQgIgMgLgFQgNgHgdAAIk6AAQggAAgNAIgAftCoQhcAEgoAAQgdAAgMAEQgNAGgIALQgJAMgBAOQAAAOAHANQAHAMANAGQAKAFAZABQA1ACBTgDICIgEQAagBAKgEQANgFAIgNQAJgMAAgOQAAgOgIgMQgIgNgNgFQgOgGgVAAIgaAAQgrAAg/ACgEAqEAChQh4AFh3AAQgdAAgNAGQgNAGgHAMQgIAMAAAOQABAOAIAMQAIAMANAFQALAGAaAAICWAAQBCAAAigDQAggDAPgLQAJgIAFgLQAFgMgBgMQgBgMgIgLQgHgKgLgFQgMgGgVAAIgNAAg");
	this.shape_27.setTransform(270.9,362.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AlvHGQivhlhhioQhginAAjJQAAjKBhinIT8gCQBiCoAADJQAADJhgCoQhhCoiuBlQivBljCAAIAAAAQjAABivhlg");
	this.shape_28.setTransform(23,45.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCFF99").s().p("EArjAPEQhogKjGADIpdAJQiUAChKgGQgrgDhKgKQhWgMgggDQjXgUkvArQhdgUiHgCQihAChQgDQg8gDhhgJIiegOQi/gOj5AKQhpAFlPAYQl+Abl+AOQADgLgEgNQgEgPgMgIQgEgDgTgJQgPgHgGgIQgGgJgBgWQgCgxACkmQABh/gGhjIAoABQAbABAPgCQAXgDAPgLQAGgEAKgKIAQgPQAPgLAggFQAtgIAPgFQAhgKAQgWQAPgUACghQABgVgFglIgbioQgEgagDgMQgGgUgJgOIgKgOQgFgIABgIQAAgGAFgGIAJgLQAXgXAIgiQAJghgJggQgEgPgLgXIgRglIgNglQgIgWgIgOQgLgRgRgKQgTgKgSAEQgfhDg4gbQgugWgzAMIgeAJQgSAFgMABQgKABgVgEQgUgDgLAAQgXABgUAOQgTAOgJAWQgiAAgoAKQgaAGgtAQQgaAJgOAHQgUAKgNANQgJAKgPAVQgLANgXAQQgqAggUAXQgdAjgCAjIABAZQAAAPgDAJQgEALgLANIgTAWQgPAVgDAlIgGBAQgEAZgPAjIgZA4QgbBMAhAtQAYAfAwAHQASACAXgBIApgEQAQAYAZAPQAZAOAcACQAFAlAkAXQAYAPAuAKQAnAIAXgBIAMgBQgJB0gWBzQgMA/gRAhQgNAagkApIhWBkQgXAagNAGIgUAHQgNAEgGAFQgKAIgEANQgEALACANQAEAWAVAVQAHAHAIAGQhMgDiUgNIk7gbQiJgMhEgBQhGgBg8AGIAFgOQAQgsAlhTQhHANhGgdQhGgegog8Qgog8AAhNQgBhMAog8QglgvgLg9QgMg9ARg6QASg5ArgtQArgsA5gTQgegngIg3QgIgzALg1QAJguAYg0QARgmAfg3IAJgPQgEgQgCgRQgFgtADhDQAEhGAKgtQAOg+AdgsQAaglAmgaQAQgLATgIQA+gdBAAHQATADAeAHIAyALQAsAJA6gCQAfgBBIgHQFlgkFhgJQDggFCMALIBfAKQAcgJAigFQAxgHBaABIErADQBxACBAgGQArgDA+gKIBogRQBngPCAgHQBYgFCPgDQEigGC/AJIBaAFIAHABIACgBQAzgeBLgJQAygFBuADQC0AHD4gHQCPgEEegMQIQgRFFAvQA2AIAsAJQAdAGAZAHQBRAVA+AiQBIAnAyA7QA2A/ATBJQATBOgZBNQgbBQhBAqQgUANgYAKQAVANAMANQAQASAGAWQAGAYgIAUQgMAfgoANQgdAKguABIhFABQATAyANA0IADADQAeAvAHA4QAHA1gQAxQAHCNgiCJIgHAgQgDASACANQADANAIAPIAPAaQAjA/gFBLQgGBNg1A7QAVAYAPAcQAkBGgRBTQhZgbhtgLg");
	this.shape_29.setTransform(277.5,225.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006600").s().p("Ah/HXQgugJgYgQQgkgWgFglQgcgCgZgPQgZgPgQgXIgpAEQgXABgSgDQgwgHgYgeQghgtAbhMIAZg6QAPgiAEgZIAGg/QADgmAPgVIATgWQALgNAEgKQADgJAAgPIgBgZQACgkAdgjQAUgWAqggQAXgRALgMQAPgVAJgKQANgOAUgKQAOgHAagIQAtgQAagHQAogKAiAAQAJgVASgOQAUgOAXgBQALgBAUAEQAVADAKAAQAMgBASgGIAegIQAzgMAuAWQA4AaAfBEQASgFATALQARAJALASQAIANAIAXIANAlIARAlQALAWAEAQQAJAggJAhQgIAhgXAYIgJAKQgFAHAAAGQgBAHAFAJIAKAOQAJANAGAUQADAMAEAZIAbCqQAFAlgBAVQgCAggPAVQgQAVghALQgPAFgtAIQggAFgPALIgQAOQgKALgGAEQgPAKgXADQgPACgbgBIgogBQgggBgXACQg0ADgqALIgvAOQgUAFgRADIgMABIgFAAQgWAAgjgIg");
	this.shape_30.setTransform(99.8,211.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0099CC").s().p("EgtTAL/IhvABQhGgCgxgPQhCgUg1gwQg1gwgbhAQgbhAADhHQADhHAfg+QAbg0AsgoQgThBgJguQgYhvAEh0QhhgYhIhNQhIhNgPhiQgPhkAxhdQAyhfBbgoQAygXBFgHQAqgFBSAAMBUcAAAIgXgBIArAAQB8AAA9ABIASABQBcACBMAIQBNAHA2AOQBGATAxAiQBFAwAjBSQAiBQgKBVIgFAhQgCATACAOQADATAMAdIAuBtIAfBMQA3gCAZAAQA7ABAtAMQBfAZBEBNQBFBOALBiQAKBigyBbQgzBbhZAqQhBAfhcAGQgrACh6gEQgkgBgcABQgTAPgWANQg5AhhSANIgUACQgsgJg1gHQlGgwoPASQkeALiPAEQj4AHi1gGQhugEgyAGQhKAIg0AeIgIAAIhagFQi/gJkiAHQiQADhYAEQh/AIhoAPIhoAQQg9AKgrAEQhAAFhygCIkrgDQhagBgwAHQgiAFgdAJIhfgJQiLgMjhAGQlhAJllAjQhIAHgeABQg6ACgtgIIgxgLQgfgIgTgCQhAgIg+AdQgSAJgQAKIgggBgEgx4gL8QhhCnAADKQgBDKBhCoQBhCmCvBlQCvBlDBAAQDCAACvhlQCuhmBhinQBgioAAjKQgBjJhhing");
	this.shape_31.setTransform(278.4,66.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AEnABIgjgBIBbAAIgdABIgIAAIgJAAIgKAAgAleAAIAnAAIgUAAg");
	this.shape_32.setTransform(505.3,409.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EgopABJQgbAAgNgGQgNgGgIgMQgIgNABgOQAAgOAIgLQAJgMANgFQALgFAZAAIEiAAQAbAAAMAGQAMAFAIAMQAIAMAAANQAAAOgHAMQgIAMgNAGQgNAGgbAAgA4TBIQhAgDhcgBIidgBQgggBgMgGQgLgGgHgLQgIgKgBgNQAAgMAFgLQAGgLAKgHQAPgKAkAAIDmAAQA8AAAeADQApADAPASQAIAIACAMQADAMgDALQgHAXgYAJQgLAEgSAAIgOAAgAxeBCQgZAAgMgEQgMgFgJgMQgIgMAAgOQgBgNAHgMQAIgMAMgGQANgHAeAAIEYAAQAbAAAMAGQANAFAIANQAIALAAAOQAAAOgJAMQgIAMgNAGQgLAFgZAAgAnMA3QgXAAgMgFQgNgFgIgMQgIgLgBgOQgBgNAIgMQAHgNAMgGQANgHAfAAIEBAAIAZABQAOACAKAGQALAHAHAMQAGAMgBALQAAANgIALQgIALgMAGQgNAGgaAAgADSAwQgRgCgKgIQgKgGgGgMQgFgLABgLQABgMAGgKQAHgLAKgGQAPgIAdAAIEwgGQAngCATAMQANAIAGAPQAGAPgDAOQgDAPgLALQgMALgPADQgJABgWgCQgUgBgYABIkDADQgUAAgKgBgAPlAwQgdAAgNgGQgMgGgHgLQgHgMAAgNQgBgMAHgMQAHgMAMgFQANgIAgAAIE6AAQAdAAANAHQALAFAIAMQAHALAAANQABALgHAMQgGALgLAHQgOAJgjAAgAcAAkQgZgBgKgFQgNgGgHgMQgHgMAAgOQABgOAJgMQAIgLANgGQAMgEAdAAQAoAABcgEQBVgDAvABQAVAAAOAGQANAFAIANQAIAMAAAOQAAAOgJALQgIANgNAFQgKAEgaABIiIAEIhcACIgsgBgEAkzAAfQgaAAgLgGQgNgFgIgMQgIgLgBgOQAAgOAIgMQAHgMANgGQANgGAdAAQB3AAB4gFQAfgCAPAIQALAFAHAKQAIALABAMQABAMgFAMQgFAKgJAIQgPALggADQgiADhCAAg");
	this.shape_33.setTransform(280.4,385.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190.4,189.9,718.7,419.8);
// library properties:
lib.properties = {
	id: '4480CDAE9EE144BA839BC2CD2F01BE6C',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['4480CDAE9EE144BA839BC2CD2F01BE6C'] = {
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