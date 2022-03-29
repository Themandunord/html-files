(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,103);


(lib.Bitmap16copy = function() {
	this.initialize(img.Bitmap16copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,51);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.txtTitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(57.15,-24.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtTitle, new cjs.Rectangle(-3.3,-32.7,121,16.6), null);


(lib.title2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnXBSIgQAAIgBAAIAAgCIAAhKIAAgCIACAAICNAAIACABIAAABIAAA6QAAAJgEAEQgDACgEABIgNABIgGgBIgBgFQgBgHgDgEIAMAAQAEAAAAgFIAAgnIhrAAIAAA8IAAACIgCAAgAiSA0QAAgKAJgHQAHgGAMAAQAOAAAJAIQAJAIAEANQAPgFAAgXQAAgOgJgIQgIgHgNAAQgWAAgUARQgIAIgIAJIgOgMQAxgxAcgbQgeADgcABIAAgRQAgAAAtgCIAJANIg7A0IABABIAIgFQAKgEAJAAQAXAAANAMQALALAAASQAAAZgRANQgQALgcAAQglAAAAgbgAiAAtQgDADAAAEQAAANAVAAIALgCQgCgLgGgFQgFgFgGAAQgGAAgEADgAEGA/QAlgKARgUQAPgSACgcIhVAAIAAgRIBqAAQgCA1gYAZQgSAUgnAKgAj9A9QAwgGAAgpQAAgSgHgMQgHgKgKgCQgKAwgQAZQgOAWgUAAQgMAAgHgJQgHgLAAgTQAAgeAVgVQgEgQgDgYIARgCIAFAfQAQgJATgBIADgbIATACIgEAaQAUAEALAQQAJAPAAAWQAAAfgSAPQgOANgbAFgAkrAaQAAAYAKAAQAKAAAJgMQgMgVgHgWQgKAOAAARgAkUgTQAFAVAKASQAIgTAGgeQgQAAgNAKgAgQA/QAZgLAKgPQAIgNABgYIg2AAIAAgQIA2AAIAAgcIgnAFIgIgQQA1gEAngNIAKAQQgPAFgUAEIAAAfIAtAAIAAAQIgtAAQgBAggNASQgMAQgZALgAF8AQQAAgSAEgcIAGgoIATACQgEAVgDAaQgDAWAAAQQAAAgAEAZIgSABQgFgaAAghgABrA+QAZgRAJgXQAIgTACgeIgnAAIAAgRIAnAAIAAgeIAUAAIAAAeIA1AAQAAA+gEAeQgCAQgHAFQgFADgHABIgYABIgGgUIANABIAMgBQADAAACgDQABgCABgHQADgXAAguIgiAAQgCAogNAYQgLAVgXARgAm0BGIgNAAIgCAAIAAgCIAAgmIAAgCIACAAIBCAAIACAAIAAACIAAAlIAAACIgBAAIgOAAIgCAAIAAgCIAAgDIgkAAIAAAEIgBACIgBAAgAmyA0IAkAAIAAgMIgkAAgAGrA9QgJgHAAgPQAAgJACgJIASACQgCAHAAAGQAAAJAFAEQAGADALAAQASAAATgCIABASIglABQgXAAgJgIgAlzgEIhZAAIgCAAIAAgBIAAgjIAAgBIACgBIBZAAIACABIAAABIAAAjIAAABIgCAAgAm9gQIA6AAIAAgMIg6AAgAGogyQAXgBAYAAIAYABIAAARIgZgBQgXAAgXACgAlSgyIibAAIgBAAIgBgCIAAgMIABgCIABAAIBDAAIAAAAIgBgPIATABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgCAEIAAAJIAAAAIBFAAIABAAIABACIAAAMIgBACIgBAAgAEDgzIAAgQIBWAAIAAAQg");
	this.shape.setTransform(71.775,-27.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title2, new cjs.Rectangle(22.2,-36.1,99.2,16.400000000000002), null);


(lib.logomc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmyPUQjHhPiWiRQiYiRhSi/QhVjGAAjeQAAjbBWjFQBTi/CXiSQCYiRDIhQQDOhSDkAAQDkAADMBRQDGBPCWCRQCYCRBSC/QBVDGAADdQAADbhVDGQhUC/iXCSQiYCRjIBQQjNBSjkAAQjkAAjMhRgAmJmfQiZCiAAD9QAADzCgCoQCgCnDmAAQDrAACbikQCZikAAj6QAAjyifioQiginjmAAQjtAAiaCig");
	this.shape.setTransform(563.8896,-20.0171,0.0562,0.0561,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmzPUQjGhPiXiRQiXiRhSi/QhVjGAAjeQAAjbBVjFQBTi/CZiSQCYiRDHhQQDOhSDkAAQDjAADNBRQDGBPCXCRQCXCRBSC/QBVDGAADdQAADbhVDGQhTC/iZCSQiYCRjHBQQjOBSjkAAQjjAAjNhRgAmJmfQiZCiAAD9QAADzCfCoQCgCnDnAAQDsAACaikQCZikAAj6QAAjyifioQiginjnAAQjtAAiZCig");
	this.shape_1.setTransform(563.8896,-44.3858,0.0562,0.0561,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AudU1MAAAgppII7AAMAAAAhkIUAAAIAAIFg");
	this.shape_2.setTransform(562.1681,17.7117,0.0562,0.0561,-90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmFPXQjQhNiaiPQiaiPhSjBQhUjFAAjmQAAjeBSjFQBRjACUiRQCUiRDFhOQDLhRDjAAQD/AADPBWQDPBVCOClQBhByA/CSQA+CSAYCnI2gJVQCpCnEdAAQCmAAB5grQCAguCtiBIFlESQiOCkkFBvQkRB1kWAAQj6AAjYhOgAjgouQhvA1hJBiQhFBegeB1QgiCDATCUIPYmXQg9iFhvhLQh1hQiUAAQiIAAhxA2g");
	this.shape_3.setTransform(563.891,6.1892,0.0562,0.0561,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak0QCMgNNggDIKEAAIH9V1IH911IKFAAMgNNAgDg");
	this.shape_4.setTransform(563.8896,-32.205,0.0562,0.0561,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AHWQTIAAyPQAAjCiWh8QiLh0i5AAQjWAAiECKQh3B+AACqIAASPIozAAMAAAggEIIzAAIAAEnQB3ieC9hZQCvhSC6AAQFxAADpDnQDnDkAAFkIAAT3g");
	this.shape_5.setTransform(563.7942,-6.7693,0.0562,0.0561,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1140A").s().p("Eh8/AprMAAAhTVMD5/AAAMAAABTVg");
	this.shape_6.setTransform(562.8393,-13.7451,0.0562,0.0562,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJDdIAAlgQgRAMgXALQgWAJgcAHIAAg+QAogNAfgQQAdgPAegWIAhAAIAAG5g");
	this.shape_7.setTransform(411.3432,-16.9405,0.2982,0.2972);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJDdIAAlgQgQAMgYALQgWAJgcAHIAAg+QAogNAfgQQAdgPAegWIAhAAIAAG5g");
	this.shape_8.setTransform(404.8573,-16.9405,0.2982,0.2972);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/CeQgXgFgQgHIAAhIQAUAOAXAIQAWAIATAAQAZAAALgHQALgHAAgQQAAgPgMgKQgNgLgggNQgogRgRgUQgRgVAAghQAAgqAhgbQAhgbA0AAQAPAAAWAEQAQADASAGIAABGQgQgKgSgHQgUgHgSAAQgVAAgLAIQgLAIAAAPQAAAPAJAJQALAJAgAOQAtARARAVQARAWAAAfQAAArghAbQgiAbg4AAQgRAAgagFg");
	this.shape_9.setTransform(395.7845,-14.9787,0.2982,0.2972);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA/CbIg+jfIAAAAIhADfIhNAAIhak1IBMAAIA6DtIABAAIBFjtIBEAAIA9DuIACAAIA4juIBGAAIhbE1g");
	this.shape_10.setTransform(385.2803,-14.9787,0.2982,0.2972);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhzB4QgrgrAAhJQAAhMAsgtQArgsBMAAQBJAAApArQAoArAABKQAABLgrArQgrAthLAAQhHAAgqgqgAg8hJQgWAaAAAxQAAAwAWAaQAWAZAoAAQAnAAAWgZQAUgaABgyQAAgxgWgaQgWgZgmAAQgoAAgWAbg");
	this.shape_11.setTransform(373.2478,-14.9639,0.2982,0.2972);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzC+QgjgoAAhHQAAhMAmguQAnguBAAAQAcAAAXAKQAXAKAMASIACAAIAAizIBIAAIAAHIIhIAAIAAgpIgCAAQgQAXgZALQgaAMggAAQg7AAgigpgAg1gCQgVAcAAAzQAAAvAUAZQAVAZAiAAQAiAAAWgaQAWgaAAgqIAAghQAAghgVgVQgVgXggAAQgmAAgUAcg");
	this.shape_12.setTransform(362.4902,-17.0891,0.2982,0.2972);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABCCeIAAisQAAgqgPgVQgOgVggABQgeAAgTAXQgVAXAAAjIAACuIhIAAIAAk1IBIAAIAAAqIACAAQARgZAZgLQAYgMAhAAQAxAAAbAgQAaAfAAA/IAAC9g");
	this.shape_13.setTransform(352.3215,-15.0753,0.2982,0.2972);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkDdIAAk1IBIAAIAAE1gAgfiUQgNgLABgSQgBgSANgMQAOgNARAAQATAAAMANQANANABARQgBASgNAMQgMAMgTAAQgSAAgNgNg");
	this.shape_14.setTransform(344.9931,-16.9405,0.2982,0.2972);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABaDYIhXlFIgCAAIhVFFIhaAAIh4mvIBRAAIBVFVIABAAIBelVIBPAAIBYFUIACAAIBRlUIBOAAIh1Gvg");
	this.shape_15.setTransform(334.1311,-16.7993,0.2982,0.2972);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_16.setTransform(313.7713,-11.1815,0.2982,0.2972);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_17.setTransform(302.5067,-11.1815,0.2982,0.2972);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_18.setTransform(313.7713,-22.4097,0.2982,0.2972);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_19.setTransform(302.5067,-22.4097,0.2982,0.2972);

	this.instance = new lib.Bitmap8();
	this.instance.setTransform(439,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logomc, new cjs.Rectangle(297.5,-58.7,280.4,90), null);


(lib.CTAmc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgkAAIBJAA");
	this.shape.setTransform(476.575,-174.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AAQAFIgfAdAAQgCIgcgf");
	this.shape_1.setTransform(478.725,-174.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtHCIAAuDIDbAAIAAODg");
	this.shape_2.setTransform(476.55,-174.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAmc, new cjs.Rectangle(465.6,-219.9,22,90), null);


(lib.commc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(169,-157,0.8039,0.8039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.commc, new cjs.Rectangle(169,-157,123,82.8), null);


(lib.bgmc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap16copy();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgmc, new cjs.Rectangle(-364,-45,728,90), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// CTA
	this.instance = new lib.CTAmc();
	this.instance.setTransform(262.95,219.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({x:240.45},12,cjs.Ease.get(1)).wait(197));

	// title
	this.instance_1 = new lib.title2();
	this.instance_1.setTransform(44.9,82.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({x:59.9,alpha:1},12,cjs.Ease.get(1)).wait(210));

	// title
	this.instance_2 = new lib.txtTitle();
	this.instance_2.setTransform(70.25,58.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({x:85.25,alpha:1},12,cjs.Ease.get(1)).wait(214));

	// logo
	this.instance_3 = new lib.logomc();
	this.instance_3.setTransform(150.05,58.75);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},24,cjs.Ease.get(1)).wait(33).to({x:128.05},12,cjs.Ease.get(1)).wait(197));

	// com
	this.instance_4 = new lib.commc();
	this.instance_4.setTransform(91.5,255.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:170.5},25,cjs.Ease.get(1)).wait(226));

	// bg
	this.instance_5 = new lib.bgmc();
	this.instance_5.setTransform(364,45);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({alpha:1},25,cjs.Ease.get(1)).wait(226));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#05132A").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,387,136.8);
// library properties:
lib.properties = {
	id: '542CFFE83C13439EB4A04353E49F32EB',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap14.png?1632215726711", id:"Bitmap14"},
		{src:"images/Bitmap16copy.png?1632215726711", id:"Bitmap16copy"},
		{src:"images/Bitmap8.png?1632215726711", id:"Bitmap8"}
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
an.compositions['542CFFE83C13439EB4A04353E49F32EB'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;