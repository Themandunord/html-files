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



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,250);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,206);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,196);


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
	this.shape.graphics.f("#FFFFFF").s().p("AmiA2IgDgBIgBgDIgCgJIAKABQAEAAACgBQADgFABgYIgLAAIgBAEQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgFgBQgFgBAAgBIAAAAQADgPABgMIABgJQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIATAAIAAgPIgWAAIgBAAIAAgBIAAgJIAAgBIABAAIAYAAIAIAAIABAAIAAABIAAAiIAAABIgBABIgTgBIgCANIAVAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIAAAJQgCAagDAJQgCAFgEACQgEABgGAAgAktAzQgEgEgEgDQAdgMAJgXQAEgKABgNIgjAAIgBAAIgBgBIAAgKIABgBIABgBIAjABIAAgLIgBgQIAPACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBADQgBADAAAIIAAAKIApgBQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAALQgBAigDARQgCAJgFAEQgFADgIAAIgMAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgBgEQgBgFgDgEQAKACAIAAQAIAAABgJQADgRAAgdIgeAAQgBAQgFAMQgFAOgKAKQgJAIgMAHIgDABIgDgDgAlJA1IgDgJQgVAEgaADIgFACIgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgDgLIAdgCIAAgPIgWAAIgBAAIgBgBIAAgfIABgBIABAAIAWAAIAAgKIgQABIgFABIgCABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgCgLIAJAAQAFgHADgIIACgIIAMACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIgCACIgJARIAZgCIgHgIIgBgBIABgBIAGgEIACAAIABAAQAKALAJAMIAAACIgBABIgHAEIgCABIgBgBIgDgHIgRACIAAALIAYAAIABAAIAAABIAAAfIAAABIgBAAIgYAAIAAAOIANgCIgDgFIAAgBIABgBIAHgDIACABQAHAKAFAMIABABIgCABIgGADIgCABIgBgBgAlfANIAOAAIAAgNIgOAAgAl2ANIAMAAIAAgNIgMAAgADMAqQAOgDAIgFQAIgEAEgJQADgIAAgOIAAgtIAOAAIAAAuQAAAZgMANQgKAKgXAEgAieAvQgFgEAAgIQAAgJAIgFQAHgFAJAAIAJABIgBgcIAMAAQAAATABAMQANAFAKAJIgHAMQgIgKgIgEIAAADQAAAJgGAEQgGAEgLAAQgLAAgGgFgAiYAjQAAAHAMAAQALAAAAgJIAAgBIAAgEQgEgBgFAAQgOAAAAAIgAGMA0IAAgvQgLAIgOAHIgHgKQAkgQASgZIALAIQgJAKgLAKIAAA3gAEaAqQASgGAHgNQADgFABgGIABgSIgkAAIAAgLIBPAAIAAALIgeAAQAAAPgCAJQgCAHgDAFQgFAIgGAFQgGAFgKAEgAA1ANIgkAEIgCgLIAkgFIgDgRIgeAEIgCgLIAegEIgDgVIANgBIADAUIAegEIACALIgeAEIADASIAfgEIACAKIgfAFIAGAnIgNACgAg4AsQgFgFAAgLIAAgmIgTAFIgDgLIAWgFIAAgbIAOAAIAAAYIArgKIAGAJQgFAPgGAKQgGAJgIAKIgLgHQARgRAEgQIgiAIIAAApIABAFQABACAEABIAMAAQAQAAANgBIAAANIggABQgSAAgGgFgABsAuIAAgLIAoAAIAEgvIgjAAIAAgLIAxAAIgFA6IARAAIAAALgAi7AdQANgZAHgXIgSAAIgBgLIAWAAIADgUIANACIgEARIAQgBIAAAKIgSACQgIAbgOAbgADGANIAAg6IANAAIAAA6gAiBgZIAFgJQASAGAMAHIgGALQgMgJgRgGgAEbggIAAgLIBBAAIAAALg");
	this.shape.setTransform(28.775,-40.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtTitle, new cjs.Rectangle(-14.1,-45.5,85.8,10.799999999999997), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ADpA1IgGgFIAGgFIgUgBIAAAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgJAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgMIgbABIgBgBIAAgHQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAIAbABIAAgGIgUABIgBgBIAAgBIAAgbIAAAAIABAAIAUAAIAAgFIgZABIgBgBIAAgBIAAgGIAAgBIABgBIAZABIAAgCIAAgFIgcAAIgBAAIgBAAIAAgIIABgBIABAAIAcAAIAAgHIgTAAIgBAAIAAgBIAAgGIAAgCIABAAIATABIgBgKIAMABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBADIgBAFIAUgBIABABIABABIAAAGIgBABIgBAAIgUAAIAAAHIAeAAIAAgHIgCgSIANABQAAABAAAAQABAAAAAAQAAAAAAABQAAAAABAAIgBADIgBAGIAAANIAaAAIABAAIAAABIAAAIIAAAAIgBAAIgZAAQAAAUACAMIAHgNIACgLIAJAEIACACIgBADIgDAEQgFAOgHALQAFAOAEABQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBIACgLIAGAEQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAADQgCALgDAEQgDADgFAAQgKABgGgSQgHAKgJAGIgCACIgDgCgADuAiIAAABIAAAEQAGgHAFgHQgFgQgBgdIgeAAIAAAHIAYgBIABABIAAABIAAAGIAAABIgBABIgYgBIAAAFIAVAAIACAAIAAAAIAAAbIAAABIgCABIgVgBIAAAGIAYgBIABABgADVAWIANAAIAAgFIgNAAgAC/AWIALAAIAAgFIgLAAgADVAKIANAAIAAgEIgNAAgAC/AKIALAAIAAgEIgLAAgABpA3IgJAAIgBAAIAAgBIAAglIAAgBIABAAIA1AAIACAAIAAABIAAAkQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgJAAIgBgBIAAgDIggAAIAAAEIAAABIgCAAgABrAoIAgAAIAAgOIggAAgAkKA3QgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABg0QgDANgFAKIgCACIgBgCIgFgIQALgPAEgUIgKAAIgCgBIAAgJQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAKABIABAAIAAgJIgBgQIALABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBADQAAACgBAJIAAAJIAJgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAJIAAABIgBAAIgCAAIgGAAQADAJAHAKIgEAIIgBACIgCgCIgEgMIABA2IAAADIgBABIAAABgAiXA2QAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAhAIAAgCIABAAIAoAAIABAAIAAACIAAA0QAAAIgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgJABIgEAAIgBgDIgCgIIAHABQAEAAAAgDIAAgJIgTAAIAAAWQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAgAiMAVIATAAIAAgIIgTAAgAiMAEIATAAIAAgHIgTAAgAjiAzIgEgGQAOgDAMgJIgEgJIgDgJIgSAAIgBALIADgEIABgBIACAAQAFADAGAEIABACIgBABIgEAFIgBABIgBgBIgMgIQgEAPgHAJIgDACIgDgCIgGgGQAMgJACgWIgHAAIgBAAIAAgBIAAgIIAAgBIABAAIAjAAQgDgPgCgUIgEAEIgMAQIAJgBIgCgFIAAAAIACgBIADgCIABAAIAAABQADAFADALIAAAAIgCABIgEABIgBAAIAAAAIgBgDIgRACIgEABIgCAAIgBgBIgCgJIADAAIAJgKIgMgNIgBgBIABgCIADgEIABAAIACAAIACACIAFgKIADgFIAIAEIABACIgBABIgDACIgIAMIAFAFIADgGIADgFIAHAEIAAgCIgBgSIALABQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgBADIgBAGIAAAHIAEgEIABgBIABABIACABIAGgJIABgFIAIAEIACACIgBAAIgCADIgIALIAEAFIADgGIADgFIAIAEIABABIgBACIgDAEIgOAQIAKAAIgCgGIAAAAIABgBIAFgCIABAAIAAABIAHAPIAAABIgCABIgEABIgBABIgBgBIgBgDIgJABIAGAEIAAAAIAAABIgEAEIANAAIACAAIAAABIAAAIIAAABIgCAAIgcAAIAEALIAFgFQADgDABgDIAJAEIABADIgBABIgEADIgJAKQAEAGAEAAQAEAAABgOIAFAFQABAAABAAQAAABABAAQAAAAAAABQABAAAAAAIAAADQgCAJgEAEQgCADgFAAQgJAAgJgMQgJAIgMADIgCABQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBgAjKAFIAOAAIgGgFIgBgBIACgBIACgCIgHACIgCAAIgBgBIgBgJIABABIAIgJQgGgIgHgGQABAUADATgAA8A2IgCgBIgBgCIgDgJIAJAAQAEAAgBgFIAAgXIgFABIgDACIgCABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgCgLIALgCIACgBIABgBIAAgVIgMAAIgCAAIAAgBIAAgIIAAgBIACgBIAMABIAAgHIAAgRIAMABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgBADIgBAMIAAAHIAKgBIACABIAAABIAAAIIAAABIgCAAIgKAAIAAASIAMgFIAAAHIAAAAQAOgHAJgMIAEgJIALACIABACIAAACQANAQAWAGQgDAEgCAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgCgCQgIgEgIgFIAAAGIAAACIgBAAIgeAAIgCAAIAAgCIAAgFQgHAGgHAEIgDACIgCgEIgDgEIgGADIAAAfQABAIgEADQgEADgKAAIgBAAgACJAAQgIgHgHgHQgFAHgHAHIAbAAIAAAAgAhfAzQgFgCAAgHIAAgeIgBgMIANABQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIgBACQgBABAAAFIAAAFQAKgDAJgFIAGgFIAHAHIABADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBABIgEABQgSAJgJADIAAAJQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABAIAAQAJAAACgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIABgHIAIAEIADABIAAABIAAACIgCAIQgBADgDACQgFAEgOAAQgQAAgDgCgAgWAtQgFgEAAgJQAAgIAGgHQAHgGAPgIQgBgFAAgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAQgFgBgHAGQgHAFgHAJIgJgIQAQgPAJgRIgWAAIAAgLIAaABIAFgQIALACIgEANIAegBIABAJIgkADIgJAOIgCACIAAAAIACgBQAFgEAGAAQAFAAAEAEQADAEACAFIAYgKIAEALQgPAEgMAGIAAAYIgMAAIAAgSQgKAFgEAEQgCAEAAADQgBAFAFACQAEACALAAQAOAAASgCIABAMIgiABQgSgBgHgFgAhggFQgEgCAAgGIAAgcIgBgMIANAAQAAABAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgBACIgBAGIAAAGIASgHIAGgFIAHAIIABACIgBABIgFACQgKAFgQAFIAAAHQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQACABAHAAQAKAAACgDQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgHIAIAEIADABIAAACIAAABQgBAGgBACQgBADgDABQgEAEgPAAQgOAAgFgCgAhwgRIgCgFQgQACgUABIgGACIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIgCgKIAKAAIAHgRIACgIIALACIACACIgBACIgCADIgHAPIASgBIgEgIIAAgBIABgBIAHgEIABABIAMAWIABABIgBABIgHADIgCABIAAgBgACOgVIgJAAIgBAAIAAgBIAAgKIgTAAIAAAKIAAABIgBAAIgJAAIgBAAIAAgBIAAgKIgKAAIgDABIgBgBIgBgBIAAgHIABgCIABAAIANAAIAAgMIAKABIACABIgBACIAAAFIAAADIATAAIAAgBIgBgLIALABQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIAAACIgBAFIAAADIAQAAIABAAIAAACIAAAHIAAABIgBABIgQgBIAAAKIAAABIgBAAgAEKggQgDgHgFgHIgBgBIACAAIAFgDIABAAIABAAQAFAGAEAGIAAABIgBACIgHAEIgBgBg");
	this.shape.setTransform(39.7,-51.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title2, new cjs.Rectangle(11.4,-56.5,56.699999999999996,11), null);


(lib.screen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-84,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screen, new cjs.Rectangle(-84,-98,168,196), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAJDdIAAlgQgRAMgXALQgWAJgcAHIAAg+QAogNAfgQQAdgPAegWIAhAAIAAG5g");
	this.shape.setTransform(138.8963,-47.3645,0.1229,0.122);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJDdIAAlgQgQAMgYALQgWAJgcAHIAAg+QAogNAfgQQAdgPAegWIAhAAIAAG5g");
	this.shape_1.setTransform(136.224,-47.3645,0.1229,0.122);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/CeQgXgFgQgHIAAhIQAUAOAXAIQAWAIATAAQAZAAALgHQALgHAAgQQAAgPgMgKQgNgLgggNQgogRgRgUQgRgVAAghQAAgqAhgbQAhgbA0AAQAPAAAWAEQAQADASAGIAABGQgQgKgSgHQgUgHgSAAQgVAAgLAIQgLAIAAAPQAAAPAJAJQALAJAgAOQAtARARAVQARAWAAAfQAAArghAbQgiAbg4AAQgRAAgagFg");
	this.shape_2.setTransform(132.4858,-46.5591,0.1229,0.122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/CbIg+jfIAAAAIhADfIhNAAIhak1IBMAAIA6DtIABAAIBFjtIBEAAIA9DuIACAAIA4juIBGAAIhbE1g");
	this.shape_3.setTransform(128.158,-46.5591,0.1229,0.122);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzB4QgrgrAAhJQAAhMAsgtQArgsBMAAQBJAAApArQAoArAABKQAABLgrArQgrAthLAAQhHAAgqgqgAg8hJQgWAaAAAxQAAAwAWAaQAWAZAoAAQAnAAAWgZQAUgaABgyQAAgxgWgaQgWgZgmAAQgoAAgWAbg");
	this.shape_4.setTransform(123.2004,-46.553,0.1229,0.122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhzC+QgjgoAAhHQAAhMAmguQAnguBAAAQAcAAAXAKQAXAKAMASIACAAIAAizIBIAAIAAHIIhIAAIAAgpIgCAAQgQAXgZALQgaAMggAAQg7AAgigpgAg1gCQgVAcAAAzQAAAvAUAZQAVAZAiAAQAiAAAWgaQAWgaAAgqIAAghQAAghgVgVQgVgXggAAQgmAAgUAcg");
	this.shape_5.setTransform(118.7681,-47.4256,0.1229,0.122);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCCeIAAisQAAgqgPgVQgOgVggABQgeAAgTAXQgVAXAAAjIAACuIhIAAIAAk1IBIAAIAAAqIACAAQARgZAZgLQAYgMAhAAQAxAAAbAgQAaAfAAA/IAAC9g");
	this.shape_6.setTransform(114.5784,-46.5987,0.1229,0.122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkDdIAAk1IBIAAIAAE1gAgfiUQgNgLABgSQgBgSANgMQAOgNARAAQATAAAMANQANANABARQgBASgNAMQgMAMgTAAQgSAAgNgNg");
	this.shape_7.setTransform(111.5591,-47.3645,0.1229,0.122);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABaDYIhXlFIgCAAIhVFFIhaAAIh4mvIBRAAIBVFVIABAAIBelVIBPAAIBYFUIACAAIBRlUIBOAAIh1Gvg");
	this.shape_8.setTransform(107.0837,-47.3066,0.1229,0.122);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_9.setTransform(98.6952,-45,0.1229,0.122);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_10.setTransform(94.054,-45,0.1229,0.122);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_11.setTransform(98.6952,-49.6101,0.1229,0.122);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_12.setTransform(94.054,-49.6101,0.1229,0.122);

	this.instance = new lib.Bitmap8();
	this.instance.setTransform(108,-37,0.3947,0.3947);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ar8B4QgoCbh/BkQiBBkilAAImBAAIAAu2IGBAAQClAACBBmQB/BjAoCbIIamkICZB4IoDGTIBzBZIICmSICaB4IoCGSIBzBaIIDmSIAAlkIDYAAIAAL5IGNAAIAAC9IplAAIAAljIoZGkgA1yEeICpAAQBsAABMhTQBMhUAAh3QAAh2hMhTQhMhUhsgBIipAAgAPlHbIAAu2IDYAAIAAL5IGOAAIAAC9g");
	this.shape_13.setTransform(-132.1176,-46.2355,0.0475,0.0475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AXpI0Qg/gygLhWIAPgNIA2AAIANANQAMA5AkAeQAsAkBVAAQBygBAxhZQAphLAAiUIgOAAQgXAugyAcQg8AjhUgBQiLAAhLhkQhIheAAidQAAifBIheQBLhlCLAAQBUAAA8AiQAyAdAXAuIAOAAIANhSIAOgOIAoAAIAOAOIAAI6QAAF8kdAAQh1AAhEg2gAX1jcQg6BKAACNQAACLA6BKQA4BHBnAAQBoAAA4hHQA6hKAAiLQAAiNg6hKQg4hHhoAAQhnAAg4BHgEAvIAEbQhEg7AAhfIANgOIA2AAIAOAOQAABCArAoQAuAsBYAAQCwAAAAh7QAAhLgzgeQghgVh4gXQhrgVg0grQg6gvAAhPQAAhKA8gyQA/g0BsAAQBtAABAAtQBIAxAABhIgOANIg2AAIgOgNQAAg4gjgfQgqgkhWAAQhGAAgoAdQgnAcAAAzQAABCA6AcQAiASB9AYQBpAVAwAtQAzAwAABZQAABWg/AyQhEA3h/gBQh3ABhHhAgEAlCADxQhKhfgBiXIAAgcQAAiRBPhZQBRhcCMAAQCLAABRBcQBPBZAACRIAAAoIgOAOInpAAIgOANQAABTAyBGQBABcB1AAQBNAAAwgmQAsghAVhCIAOgNIA2AAIAOANQgOBPg4A2QhKBHiAAAQibAAhThpgEAl5gDTQgwBAAABXIAOANIGXAAIAOgNQAAhXgwhAQg7hQhuAAQhvAAg7BQgAMcEAQhahfAAimQAAipBahfQBVhaCJAAQCKAABVBaQBaBfAACpQAACmhaBfQhVBbiKgBQiJABhVhbgANUjWQhABNAACEQAACCBABNQA/BMBnABQBogBA/hMQBAhNAAiCQAAiEhAhNQg/hNhoAAQhnAAg/BNgAhkEAQhahfAAimQAAipBahfQBVhaCJAAQCKAABVBaQBZBfABCpQgBCmhZBfQhVBbiKgBQiJABhVhbgAgsjWQhABNAACEQAACCBABNQA/BMBnABQBogBA+hMQBBhNAAiCQAAiEhBhNQg+hNhoAAQhnAAg/BNgEghMAEGQhZhdgBiuQABiwBZhdQBThVCMAAQB4AABPBBQBMA+AKBoIgOAOIg2AAIgNgOQgMhGgtgqQg2gzhdAAQhpAAg+BHQhABMAACLQAACJBABMQA+BHBpAAQBdAAA2gzQAtgqAMhHIANgNIA2AAIAOANQgKBohMA/QhPBAh4AAQiMAAhThUgEgroADxQhKhfAAiXIAAgcQAAiRBOhZQBRhcCMAAQCMAABRBcQBOBZAACRIAAAoIgNAOInqAAIgNANQgBBTAyBGQBABcB1AAQBPAAAvgmQArghAWhCIANgNIA2AAIAPANQgOBPg4A2QhLBHiAAAQiaAAhUhpgEgqxgDTQgwBAABBXIANANIGYAAIANgNQABhXgwhAQg7hQhvAAQhvAAg7BQgEAhUAFNIgNgOIAAqLIANgOIA3AAIAOAOIAAKLIgOAOgAIfFNIgOgOIAAubIAOgNIA3AAIANANIAAObIgNAOgAlTFNIgNgOIAAmWQAAhkgwg1QgugzhTAAQhtAAg4BCQg0A/gBBzIAAFuIgNAOIg2AAIgOgOIAAqLIAOgOIAoAAIAOAOIANBSIAOAAQAfgzA6gdQA6gdBHAAQBxAABBBFQBCBIAACDIAAGWIgNAOgAwIFNIgOgOIAAmWQABhkgwg1QgugzhTAAQhtAAg4BCQg0A/gBBzIAAFuIgNAOIg2AAIgOgOIAAubIAOgNIA2AAIANANIAAFiIAOAAQAfgzA6gdQA6gdBHAAQBxAABBBFQBCBIAACDIAAGWIgNAOgEgw0AFNIgNgOIAAtXIgOgNIkqAAIgOgOIAAgpIAOgNILCAAIAOANIAAApIgOAOIkrAAIgNANIAANXIgOAOgEAhUgHGIgNgNIAAhSIANgOIA3AAIAOAOIAABSIgOANg");
	this.shape_14.setTransform(-107.9878,-45.5586,0.0475,0.0475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logomc, new cjs.Rectangle(-139.8,-51.7,279.8,34.900000000000006), null);


(lib.light2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#234F9C","rgba(1,11,25,0)"],[0,1],0,-0.1,0,0,-0.1,152.9).s().p("AwjQkQm4m2AApuQAApsG4m4QG3m3JsAAQJtAAG4G3QG3G4AAJsQAAJum3G2Qm4G4ptAAQpsAAm3m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light2, new cjs.Rectangle(-150,-150,300,300), null);


(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#234F9C","rgba(1,11,25,0)"],[0.298,1],0.1,0.1,0,0.1,0.1,56.8).s().p("AmJGKQijijgBjnQABjlCjijQCkilDlAAQDnAACjClQCjCjAADlQAADnijCjQijCjjnAAQjlAAikijg");
	this.shape.setTransform(-109.65,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#234F9C","rgba(1,11,25,0)"],[0.298,1],0.1,0.1,0,0.1,0.1,56.8).s().p("AmJGKQijijgBjnQABjlCjijQCkilDlAAQDnAACjClQCjCjAADlQAADnijCjQijCjjnAAQjlAAikijg");
	this.shape_1.setTransform(-109.65,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-165.4,-89.2,111.5,111.5), null);


(lib.flowermc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-162,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flowermc, new cjs.Rectangle(-162,-125,324,250), null);


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
	this.shape.setTransform(68.825,-194.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AAQAFIgfAdAAQgCIgcgf");
	this.shape_1.setTransform(70.975,-194.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtHCIAAuDIDbAAIAAODg");
	this.shape_2.setTransform(68.8,-194.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAmc, new cjs.Rectangle(57.8,-239.7,22,90), null);


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
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-156,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.commc, new cjs.Rectangle(-156,-103,312,206), null);


// stage content:
(lib._320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(420));

	// CTA
	this.instance = new lib.CTAmc();
	this.instance.setTransform(265.45,219.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({x:240.2,y:219.7},12,cjs.Ease.get(1)).wait(179));

	// title
	this.instance_1 = new lib.title2();
	this.instance_1.setTransform(44.9,82.35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(217).to({_off:false},0).to({x:59.9,alpha:1},12,cjs.Ease.get(1)).wait(191));

	// title
	this.instance_2 = new lib.txtTitle();
	this.instance_2.setTransform(70.25,58.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(213).to({_off:false},0).to({x:85.25,alpha:1},12,cjs.Ease.get(1)).wait(195));

	// logo
	this.instance_3 = new lib.logomc();
	this.instance_3.setTransform(150.05,58.75);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).to({alpha:1},24,cjs.Ease.get(1)).wait(197));

	// screen
	this.instance_4 = new lib.screen();
	this.instance_4.setTransform(175.25,96.75,0.479,0.479,0,0,0,0.3,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({y:26.75},30,cjs.Ease.get(1)).wait(30).to({regX:1.1,regY:1.9,scaleX:0.234,scaleY:0.234,x:162.65,y:36.9},35,cjs.Ease.get(1)).wait(30).to({regX:3.1,regY:4.7,scaleX:0.1277,scaleY:0.1277,x:194.95,y:30.65},24,cjs.Ease.get(1)).wait(207));

	// flower
	this.instance_5 = new lib.flowermc();
	this.instance_5.setTransform(175.35,116.85,0.524,0.524,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:20.85},34,cjs.Ease.get(1)).wait(30).to({regX:0.6,regY:0.6,scaleX:0.57,scaleY:0.57,x:175.4,y:20.9},30,cjs.Ease.get(1)).wait(30).to({regX:1.6,regY:1.9,scaleX:0.2621,scaleY:0.2621,x:163.55,y:27.1},35,cjs.Ease.get(1)).wait(30).to({regX:2.8,regY:3.9,scaleX:0.143,scaleY:0.143,x:195.35,y:25.3},24,cjs.Ease.get(1)).wait(207));

	// light
	this.instance_6 = new lib.light2();
	this.instance_6.setTransform(160,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:45},34,cjs.Ease.get(1)).to({_off:true},90).wait(296));

	// com
	this.instance_7 = new lib.commc();
	this.instance_7.setTransform(245.35,165.35,1.6666,1.6667,0,0,0,51.2,33.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(124).to({_off:false},0).to({regX:52.1,regY:34.6,scaleX:0.3651,scaleY:0.3651,x:180,y:49.9,alpha:1},35,cjs.Ease.get(1)).wait(30).to({regX:53,regY:36.1,scaleX:0.1992,scaleY:0.1992,x:204.35,y:37.75},24,cjs.Ease.get(1)).wait(207));

	// light
	this.instance_8 = new lib.light();
	this.instance_8.setTransform(464.95,154.05,2.268,2.268);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).to({alpha:1},35,cjs.Ease.get(1)).wait(261));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010B19").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(420));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(60,-80,360,425);
// library properties:
lib.properties = {
	id: '542CFFE83C13439EB4A04353E49F32EB',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap10.png?1631788014077", id:"Bitmap10"},
		{src:"images/Bitmap17.png?1631788014077", id:"Bitmap17"},
		{src:"images/Bitmap18.png?1631788014077", id:"Bitmap18"},
		{src:"images/Bitmap8.png?1631788014077", id:"Bitmap8"}
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