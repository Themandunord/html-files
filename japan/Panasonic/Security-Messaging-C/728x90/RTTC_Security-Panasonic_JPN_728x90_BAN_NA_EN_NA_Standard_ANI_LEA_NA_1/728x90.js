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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(150.575,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtTitle, new cjs.Rectangle(86.2,-33.1,128.8,16.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AFeBPIgJgIIAJgHIgeAAIABARQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgNAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgRIgpAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgLQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAIApABIAAgIIgfAAIgBAAIgBgCIAAgpIABgBIABAAIAfABIAAgIIglABIgCgBIAAgCIAAgJIAAgCIACAAIAlAAIAAgJIgrAAIgCAAIAAgBIAAgLIAAgCIACAAIAqAAIAAgKIgcAAIgCAAIAAgCIAAgJIAAgCIACAAIAcAAIgBgOIASABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBADIgBAIIAdAAIACAAIAAACIAAAJIAAACIgCAAIgdAAIAAAKIAsAAIgBgKIgBgbIASACQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAEQgBACAAAIIAAATIAmAAIACAAIAAACIAAALIAAABIgCAAIgmAAQABAeADASQAGgKADgKQAEgKAAgGIAPAFQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAIgGAMQgJAVgKARQAHAVAGAAQACAAACgFIADgRIAJAGQAEACAAACIAAAFQgDAQgEAGQgFAGgIAAQgNAAgLgaQgKAOgNAKIgEADQgBAAgDgEgAFlAzIAAABIAAAGQAKgKAHgKQgHgZgCgrIgsAAIgBAHIAAACIAkAAIACAAIAAACIAAAJIgBACIgBABIgkgBIAAAIIAggBIABABIABAAIAAApIgBACIgBAAIggAAIAAAIIAjgBIACABgAFAAhIATAAIAAgIIgTAAgAEeAhIATAAIAAgIIgTAAgAFAAQIATAAIAAgIIgTAAgAEeAQIATAAIAAgIIgTAAgACRBTIgBgBIgBgBIAAg3IABgBIABgBIBQAAIACABIAAABIAAA2QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgOAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIgwAAIAAAGIAAABIgCABgAChA7IAwAAIAAgTIgwAAgAmCBSIgOAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIABhNQgFATgIAPQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAIgCgDQgDgJgDgEQAPgXAHgeIgQAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgNQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIARAAIAAgNQAAgQgCgHIARABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBADQgBADAAAOIAAANIANAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAANIgBACIgBAAIgEAAIgIAAQAEAOALAPIgGAMQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBQgEgJgDgKIACBSIAAAFIgBACIgBAAgAlTBNQgDgFgEgEQAVgFASgNQgDgGgCgIIgEgOIgbAAIgDASIAFgIIACgBIACABQAJAEAIAHIABABIgBACIgFAIIgCACIgCgBQgIgIgKgFQgFAXgMANIgDADIgEgDQgFgFgFgDQATgPACghIgKAAIgCAAIAAgCIAAgMIAAgBIACgBIAzABQgFgXgBgeIgGAGIgTAZIAOgBIgCgHIgBgCIACgBIAFgCIABAAIACABQADAHAEAQIAAABIgCACIgFABIgCAAIgBAAIgBgFIgaADIgFACIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIgDgNIAFABIANgQQgIgKgLgKIgBgCIABgBIAGgHIACgCIABABIADADIAJgPIADgGQAGACAGADQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABIgCACIgDADQgGAKgGAIIAGAHIAGgJIADgHIAMAHIAAgEQgBgRgBgKIAQABQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIgBADIgBAKIAAAMIAGgIIACgBIABABIADACIAIgOIADgHIAMAGQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIgCACIgCADQgGAKgHAHIAGAIIAGgJIAFgJIAMAHQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgCACIgFAGIgUAYIAPgCIgDgGIgBgCIADgBIAGgDIABAAIACACQAEAIAEAOIABABIgDACIgGACIgCABIgBgCIgCgFIgNACIAJAHIABABIgBACIgFAEIATgBIACABIABABIAAAMIgBACIgCAAIgqAAIAGASIAIgJIAFgJIANAHQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQgCABgDADQgGAIgIAHQAHAJAFAAQAGAAABgUIAJAFQAFADAAACIgBAEQgCANgFAGQgEAFgHAAQgOAAgMgRQgPAKgRAGIgFACQgBAAgCgFgAkvAHIAVAAIgJgHIgCgBIAGgGIgNADQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgCgMIACAAIALgNQgIgLgKgKQABAfAFAcgAjjBRQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAhiIABgCIABAAIA9AAIABAAIABACIAABQQAAAKgEAEQgDACgEABIgNABIgFgBIgCgEQgBgHgCgEIALABQAFAAAAgGIAAgNIgdAAIAAAiQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAjTAgIAdAAIAAgMIgdAAgAjTAGIAdAAIAAgLIgdAAgABbBRQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBgEQgCgJgDgEIANAAQAGAAAAgHIAAgkIgOAGQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIgDgRIARgEIADgBIACgBIAAggIgTAAIgCAAIAAgCIAAgNIAAgCIACAAIATAAIAAgJIgBgZIASABQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIgBAEQgBACAAAQIAAAJIAPAAIACAAIAAACIAAANIAAACIgCAAIgPAAIAAAbIARgIIAAALIAAABQAVgLAOgTQAEgIACgFIARADQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAVAYAgALQgEAFgCAHQgCAFgBAAIgFgCQgMgGgLgIIAAAKIAAABIgCABIgtAAIgBgBIgBgBIAAgJQgKAJgMAGIgEACQgBAAgCgFIgEgGIgJAEIABAuQAAAOgGAEQgGAEgOAAIgCAAgADOAAQgMgKgKgNQgIANgKAKIAoAAIAAAAgAiQBMQgGgDAAgKIAAguIgBgRIASABQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIgBAEIgBAJIAAAJQAPgGANgHIAJgIIALAMIACADQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgIAEQgaAMgNAFIAAANQAAAFADABQADACAMAAQAOAAADgEQACgCABgEIAAgKQAHADAGACIAEABIAAACIAAADQgBAJgCAEQgCAEgDADQgJAFgVAAQgWAAgHgDgAghBEQgHgHAAgNQAAgNAJgJQAKgKAXgMQgBgHgBgDQgCgDgFAAQgJAAgLAJQgIAHgMAOIgNgMQAYgXAMgZIggAAIAAgQIAnAAQAEgKAEgNIARADIgHAUQAagBAVgDIAAAQIg2ADQgGAMgIAJIgEAEIABABIAEgEQAIgFAIAAQAIAAAGAGQAFAFACAJIAkgPIAHAQQgYAHgSAIIAAAjIgRAAIAAgbQgPAJgGAGQgFAFAAAGQAAAHAHADQAHADARAAQAUAAAbgDIABARQgYACgaAAQgbAAgLgIgAiQgIQgGgDAAgJIAAgrIgBgRIASABQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIgBADIgBAKIAAAJIAagMQAGgDAEgEIALALIACADQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIgIADQgPAHgXAIIAAALQAAAEADABIAOABQAPAAADgDQABgBABgEIAAgLIANAGIADABIABADIAAACQgBAJgCAEQgCAEgDACQgHAFgYAAQgUAAgHgDgAipgaIgDgIQgWADggADIgHACIgDAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgDgQIAPAAQAGgMAFgNIADgNIARAEQABAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgDAFIgLAVIAdgCIgHgMIgBgBIACgCIAIgFIACAAIACABQAJAMAKAVIABABIgCACIgMAHQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAgADVggIgNAAIgCAAIAAgCIABgOIgdAAIABAOIgBABIgBABIgOAAIgCgBIAAgBIABgOIgUAAIgCAAIAAgCIAAgMIAAgBIACgBIAUABIgBgSIARABQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIgBACIgBAJIAAAEIAdAAIAAgCIgBgQIAQABQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIgBADQgBABAAAHIAAAEIAYgBIACABIAAABIAAAMIAAACIgCAAIgYAAIAAAOIAAACIgCAAgAGPgyQgEgKgIgJIAAgBIACgCIAIgEIACgBIABABQAIAJAFAKIAAACIgBACIgLAFQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(153.975,-23.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title2, new cjs.Rectangle(111.5,-32.1,85,16.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhrCkQgZgHgRgSQgRgSgGgZQgDgTACgTQAEgdAWgUQAQgNAVgIQAbgIAUgEIAigGQAUgDAXgHIAJgDQAHgCAGgHQAFgJgDgJQgEgPgPgFQgVgHgWAIQgPAGgFAPQgEAJABAKIhtgDIgCgGQgCgRAFgQQAOgtAsgSQAUgIAQgDQBCgMBEAPQAUAEAUALQAhATAJAjQAHAdAAAZIACBjQAAAiADAqQABAOAHALIh4AAQgEgEgCgHIgIgWQgSAWgXAJQgeAMgfAAQgXAAgXgHgAAAAfIgkAMQgIADgGAFQgKAJADANQABAIAGAFQAGAHAJADQALACALAAQAOgCALgFQAOgGAIgNQAHgLABgMQACgQgBgSQgXALgUAFg");
	this.shape.setTransform(-119.4139,-37.1817,0.2299,0.2299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrCkQgZgHgRgSQgRgSgGgZQgEgTADgTQADgdAXgUQAPgNAWgIQAcgIASgEIAjgGQASgDAZgHIAJgDQAIgDAEgGQAGgJgDgJQgEgPgQgFQgTgHgXAIQgPAGgGAPQgDAKAAAJIhtgDIgBgGQgCgQAFgRQANgtAsgSQAUgIARgDQBCgMBEAPQATAEAVALQAhATAJAjQAHAaAAAcIABBjQABAnADAlQABAOAHALIh4AAQgEgEgDgHIgHgWQgSAVgXAKQgfAMgeAAQgXAAgXgHgAAAAfIglAMQgIADgFAFQgKAJACANQACAHAFAGQAGAGAKAEQAKADAMgBQANgCAMgFQANgGAIgNQAHgJACgOQACgQgCgSQgXALgTAFg");
	this.shape_1.setTransform(-102.6949,-37.1817,0.2299,0.2299);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxCmQgjgHgdgWQgtgjgOg1QgKgiADgjQAGg8ArgpQAngmA3gJQAUgDAQAAQASAAASADQA4AJAnAmQArAoAGA9QADAjgKAiQgOA1gtAjQgdAWgjAHQgYAGgaAAQgZAAgYgGgAgJhWQgSAEgLAQQgKAPgEAQQgFAiAEAfQADAOAGARQAIARARAHQATAJARgIQAUgHAHgSQAIgRABgOQAFgfgFgiQgEgQgJgPQgFgIgJgFQgMgIgOAAIgJABg");
	this.shape_2.setTransform(-86.6406,-37.1815,0.2299,0.2299);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjHDjIAAnFID6ABQAsADAkAXQAjAYATApQATApgFAtQgFAwggAjQggAjgwALQgfAGgeAAIhSAAIAACMgAg9gSIBSgBQAWgBAMgRQAHgJACgLQABgMgBgGQgCgSgNgMQgNgMgSAAIhPAAg");
	this.shape_3.setTransform(-127.8075,-38.6873,0.2299,0.2299);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhOCgQgfgJgXgVQgTgSgHgVQgGgQAAgPIAAgHIB2AAQAAAIADAJQAEAKAHAHQAHAFAHADQAQAGAPgDQAMgCAKgJQAJgKgCgMQgDgMgMgEQgNgFgNgCIhGgNQgTgEgQgHQgkgOgOgjQgHgSAAgVQABgMAEgMQAJgaAWgRQAZgUAfgHQAWgFAYgCQAogCApAHQAUAEANAFQARAHAOALQAQAMAHAUQAHASAAAVIhyAAQAAgKgFgIQgGgIgKgDQgSgHgUAGQgLADgGAKIgBACQgCAFACAGQACAFAFADIAJADIAUADQAhAFAnALIANAEQAfAJAXAUQARANAHAXQAKAegIAdQgJAcgYAVQgLAJgLAGQgdAOgdAEQgXAEgXAAQgpAAgogMg");
	this.shape_4.setTransform(-94.7596,-37.1861,0.2299,0.2299);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsCoIAAi7QAAgIgCgKQgFgQgQgHQgRgHgRAGQgRAFgJAQQgIANAAAPIAAC0Ih9AAIAAlDIB1AAIADAiQAXgUAbgMQAugWAxAOQA3AQARA3QAIAXAAAbIAADQg");
	this.shape_5.setTransform(-111.0606,-37.3254,0.2299,0.2299);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsCoIAAi7QAAgKgDgIQgFgQgQgHQgQgHgRAGQgRAFgKAQQgHANAAAPIAAC0Ih9AAIAAlDIB1AAIADAiQAXgUAbgMQAugWAxAOQA3ARARA2QAIAZAAAZIAADQg");
	this.shape_6.setTransform(-78.1232,-37.3254,0.2299,0.2299);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8CiIAAlDIB5AAIAAFDg");
	this.shape_7.setTransform(-72.1863,-37.1987,0.2299,0.2299);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8ArIAAhVIB5AAIAABVg");
	this.shape_8.setTransform(-72.1863,-42.9172,0.2299,0.2299);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRCrQgugFglgcQgegWgTghQgOgYgFgdQgGgoAKgmQANguAggfQAhgfAvgKQAzgKAyANQAkAJAcAaQARAQALAUQANAagCAbIhvAAQgEgWgRgOQgMgJgOAAQgNgBgMAIQgRAKgGATQgOArANAtQAFASAOAOQARAQAWgDQAPgDAIgKQAKgLACgOIADgTIB1AAQADA1glAmQgkAmgzAKQgWAFgXAAIgWgBg");
	this.shape_9.setTransform(-66.4766,-37.176,0.2299,0.2299);

	this.instance = new lib.Bitmap8();
	this.instance.setTransform(457,-42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJDdIAAlgQgRAMgXALQgWAJgcAHIAAg+QAogNAfgQQAdgPAegWIAhAAIAAG5g");
	this.shape_10.setTransform(429.2757,-16.8916,0.2982,0.2972);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJDdIAAlgQgQAMgYALQgWAJgcAHIAAg+QAogNAfgQQAdgPAegWIAhAAIAAG5g");
	this.shape_11.setTransform(422.7908,-16.8916,0.2982,0.2972);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag/CeQgXgFgQgHIAAhIQAUAOAXAIQAWAIATAAQAZAAALgHQALgHAAgQQAAgPgMgKQgNgLgggNQgogRgRgUQgRgVAAghQAAgqAhgbQAhgbA0AAQAPAAAWAEQAQADASAGIAABGQgQgKgSgHQgUgHgSAAQgVAAgLAIQgLAIAAAPQAAAPAJAJQALAJAgAOQAtARARAVQARAWAAAfQAAArghAbQgiAbg4AAQgRAAgagFg");
	this.shape_12.setTransform(413.7194,-14.93,0.2982,0.2972);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA/CbIg+jfIAAAAIhADfIhNAAIhak1IBMAAIA6DtIABAAIBFjtIBEAAIA9DuIACAAIA4juIBGAAIhbE1g");
	this.shape_13.setTransform(403.2168,-14.93,0.2982,0.2972);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhzB4QgrgrAAhJQAAhMAsgtQArgsBMAAQBJAAApArQAoArAABKQAABLgrArQgrAthLAAQhHAAgqgqgAg8hJQgWAaAAAxQAAAwAWAaQAWAZAoAAQAnAAAWgZQAUgaABgyQAAgxgWgaQgWgZgmAAQgoAAgWAbg");
	this.shape_14.setTransform(391.1862,-14.9151,0.2982,0.2972);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhzC+QgjgoAAhHQAAhMAmguQAnguBAAAQAcAAAXAKQAXAKAMASIACAAIAAizIBIAAIAAHIIhIAAIAAgpIgCAAQgQAXgZALQgaAMggAAQg7AAgigpgAg1gCQgVAcAAAzQAAAvAUAZQAVAZAiAAQAiAAAWgaQAWgaAAgqIAAghQAAghgVgVQgVgXggAAQgmAAgUAcg");
	this.shape_15.setTransform(380.4302,-17.0402,0.2982,0.2972);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABCCeIAAisQAAgqgPgVQgOgVggABQgeAAgTAXQgVAXAAAjIAACuIhIAAIAAk1IBIAAIAAAqIACAAQARgZAZgLQAYgMAhAAQAxAAAbAgQAaAfAAA/IAAC9g");
	this.shape_16.setTransform(370.263,-15.0266,0.2982,0.2972);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkDdIAAk1IBIAAIAAE1gAgfiUQgNgLABgSQgBgSANgMQAOgNARAAQATAAAMANQANANABARQgBASgNAMQgMAMgTAAQgSAAgNgNg");
	this.shape_17.setTransform(362.9358,-16.8916,0.2982,0.2972);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABaDYIhXlFIgCAAIhVFFIhaAAIh4mvIBRAAIBVFVIABAAIBelVIBPAAIBYFUIACAAIBRlUIBOAAIh1Gvg");
	this.shape_18.setTransform(352.0755,-16.7504,0.2982,0.2972);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_19.setTransform(331.7188,-11.1331,0.2982,0.2972);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_20.setTransform(320.4559,-11.1331,0.2982,0.2972);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_21.setTransform(331.7188,-22.3603,0.2982,0.2972);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_22.setTransform(320.4559,-22.3603,0.2982,0.2972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logomc, new cjs.Rectangle(-132.4,-43.9,670.4,52.9), null);


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
	this.shape.graphics.rf(["#234F9C","rgba(1,11,25,0)"],[0.298,1],0,0,0,0,0,114.2).s().p("AsXMYQlIlIAAnQQAAnPFIlIQFIlIHPAAQHQAAFIFIQFIFIAAHPQAAHQlIFIQlIFInQAAQnPAAlIlIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#234F9C","rgba(1,11,25,0)"],[0.298,1],0,0,0,0,0,114.2).s().p("AsXMYQlIlIAAnQQAAnPFIlIQFIlIHPAAQHQAAFIFIQFIFIAAHPQAAHQlIFIQlIFInQAAQnPAAlIlIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-112,-112,224,224), null);


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
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-156,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.commc, new cjs.Rectangle(-156,-103,312,206), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(420));

	// CTA
	this.instance = new lib.CTAmc();
	this.instance.setTransform(265.45,219.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({x:240.45},12,cjs.Ease.get(1)).wait(179));

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
	this.instance_4.setTransform(374.2,183.2,0.9,0.9,0,0,0,0.2,0.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({y:13.2},30,cjs.Ease.get(1)).wait(30).to({regX:0.9,regY:1.7,scaleX:0.5,scaleY:0.5,x:377.45,y:86.75},35,cjs.Ease.get(1)).wait(30).to({regX:2.9,regY:4,scaleX:0.2412,scaleY:0.2412,x:392.3,y:52.75},24,cjs.Ease.get(1)).wait(207));

	// flower
	this.instance_5 = new lib.flowermc();
	this.instance_5.setTransform(374.2,219.3,1,1,0,0,0,0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-0.7},34,cjs.Ease.get(1)).wait(30).to({regY:0.3,scaleX:1.1,scaleY:1.1,y:-0.75},30,cjs.Ease.get(1)).wait(30).to({regX:1.4,regY:1.7,scaleX:0.56,scaleY:0.56,x:379.45,y:65.85},35,cjs.Ease.get(1)).wait(30).to({regX:2.2,regY:3.4,scaleX:0.2701,scaleY:0.2701,x:393.05,y:42.65},24,cjs.Ease.get(1)).wait(207));

	// light
	this.instance_6 = new lib.light2();
	this.instance_6.setTransform(364,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:45},34,cjs.Ease.get(1)).to({_off:true},90).wait(296));

	// com
	this.instance_7 = new lib.commc();
	this.instance_7.setTransform(449.35,165.35,1.6666,1.6667,0,0,0,51.2,33.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(124).to({_off:false},0).to({regX:52,regY:34.6,scaleX:0.78,scaleY:0.78,x:414.55,y:114.55,alpha:1},35,cjs.Ease.get(1)).wait(30).to({regX:52.6,regY:35.6,scaleX:0.3763,scaleY:0.3763,x:410.1,y:66.1},24,cjs.Ease.get(1)).wait(207));

	// light
	this.instance_8 = new lib.light();
	this.instance_8.setTransform(464.95,154.05,2.268,2.268);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).to({alpha:1},35,cjs.Ease.get(1)).wait(261));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010B19").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(420));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,-93.6,389.5,501.70000000000005);
// library properties:
lib.properties = {
	id: '542CFFE83C13439EB4A04353E49F32EB',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap10.png?1631789046266", id:"Bitmap10"},
		{src:"images/Bitmap17.png?1631789046266", id:"Bitmap17"},
		{src:"images/Bitmap18.png?1631789046266", id:"Bitmap18"},
		{src:"images/Bitmap8.png?1631789046266", id:"Bitmap8"}
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