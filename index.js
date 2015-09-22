(
	function (g, f) {
		typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = f() :
		typeof define === 'function' && define.amd ? define(f) : g.mincolor = f()
	}
	(
		this, 
		function () {
			'use strict';


			var hookCallback;

			function utils_hooks__hooks () {
				return hookCallback.apply(null, arguments);
			}

			// This is done to register the method called with mincolor()
			// without creating circular dependencies.
			function setHookCallback (callback) {
				hookCallback = callback;
			}

			function hex() {
				var c = (this._c & 0x00FFFFFF).toString(16);
				return '#'+'00000'.substring(0, 6 - c.length) + c;
			}

			function toString () {
				return this.hex();
			}

			function _rgbToDec(r,g,b) {
				return (r << 16) + (g << 8) + b;
			}

			function _parse (c) {
				var m;
				// From Dec
				if(typeof(c)=="number")	{
					c = (c>16777215)?16777215:c;
					c = (c<0)?0:c;
					return new minColor(c);
				} 
				if(typeof(c)=="string") {
					// From Hex
					var hx6 = /^#?([0-9a-f]{6})/i;
					if(m=hx6.exec(c)){
						return new minColor(parseInt(m[1],16));
					}
					// From Shorthand Hex
					var hx3 = /^#?([0-9a-f]{3})/i;
					if(m=hx3.exec(c)){
						return new minColor(parseInt(m[1][0]+m[1][0]+m[1][1]+m[1][1]+m[1][2]+m[1][2],16));
					}
					var cssrgba = /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;
				}
				// From RGB
				if(c instanceof Array) {
					if(c.length==3){
						if(
							(c[0]>=0 && c[0]<=255)
							&&
							(c[1]>=0 && c[1]<=255)
							&&
							(c[2]>=0 && c[2]<=255)
						){
							return new minColor(_rgbToDec(c[0],c[1],c[2]));
						}else{
							throw new Error('Array values out of range');
						}
					}else{
						// error
						throw new Error('Not a valid array');
					}
				}
				if(c instanceof minColor){
					return c.clone();
				}

				return new minColor(0);
				
			}

			// To RGB Array
			function rgbArray() {
				return [(this._c>>16)&0xff,(this._c>>8)&0xff,(this._c>>0)&0xff];
			}

			// To RGB object
			function rgb() {
				var arr = this.rgbArray();
				return {
					r: arr[0],
					g: arr[1],
					b: arr[2]
				};
			}

			// Clone obj
			function clone () {
				return new minColor(this._c);
			}

			function _cb(ca, cb, p){
				return parseInt(p*ca+(1-p)*cb);
			}

			function blend(c, p){
				var c1 = this.clone();
				var c2 = new minColor(c);

				p = (p)?p:1;
				p = (p>1)?1:p;
				p = (p<0)?0:p;

				var ca = c1.rgbArray();
				var cb = c2.rgbArray();

				c1._c = 
				_rgbToDec(
					_cb(ca[0],cb[0],p),
					_cb(ca[1],cb[1],p),
					_cb(ca[2],cb[2],p)
				);
				return c1;
			}

			function _scmx(c1){
				var sc1 = parseInt(c1.toString(16)[0]+'0',16);
				var sc2 = parseInt(c1.toString(16)[1],16);
				return parseInt((sc1+sc2)/2,16);
			}

			// Short hand hex value
			function shortHand(){
				var hexv = this.hex();
				var c1 = _parse('#'+hexv[1]+hexv[3]+hexv[5]).blend(hexv[2]+hexv[4]+hexv[6],.5).hex();
				return '#'+c1[1]+c1[3]+c1[5];
			}

			// Single web safe color
			function _sws(c) {
				return Math.round((c/255)*5)*51;
			}

			// Web safe color
			function webSafe() {
				var arr = this.rgbArray();
				var no = this.clone();
				no._c =  _rgbToDec(
					_sws(arr[0]),
					_sws(arr[1]),
					_sws(arr[2])
				);
				return no;
			}

			// Color prototype object
			function minColor(i) {
				this._c = i;
				return this;
			}

			var minColorPrototype__proto = minColor.prototype;
			minColorPrototype__proto.hex			= hex;
			minColorPrototype__proto.toString		= toString;
			minColorPrototype__proto.clone			= clone;
			minColorPrototype__proto.rgbArray		= rgbArray;
			minColorPrototype__proto.rgb			= rgb;
			minColorPrototype__proto.webSafe		= webSafe;
			minColorPrototype__proto.shortHand		= shortHand;
			minColorPrototype__proto.blend			= blend;


			setHookCallback(_parse);

			utils_hooks__hooks.fn                    = minColorPrototype__proto;

			var _mincolor = utils_hooks__hooks;

			return _mincolor;

		}
	)
);

