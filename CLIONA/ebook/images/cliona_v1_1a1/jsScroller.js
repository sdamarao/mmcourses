function jsScroller (o, w, h) {
	var self = this;
	var list = o.getElementsByTagName("div");
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.indexOf("Scroller-Container") > -1) {
			o = list[i];
		}
		
	}
	
	//Private methods
	this._setPos = function (x, y) {
	    //alert("this.viewableWidth - this.totalWidth   "+(this.viewableWidth - (this.totalWidth-10)))
		//tanaji 12-8-13 changed width this.totalWidth to (this.totalWidth+14*TargetViewSizeFactor) to resolve issue:6967
		if (x < this.viewableWidth - (this.totalWidth+14*TargetViewSizeFactor)) 
			x = this.viewableWidth - (this.totalWidth+14*TargetViewSizeFactor);
		if (x > 0) x = 0;
		if (y < this.viewableHeight - this.totalHeight) 
			y = this.viewableHeight - this.totalHeight;
		if (y > 0) y = 0;
		this._x = x;
		this._y = y;
	    with (o.style) {
			left = this._x +"px";
			top  = this._y +"px";
			
		}
	};
	
	//Public Methods
	this.reset = function () {
		this.content = o;
		this.totalHeight = o.offsetHeight;
		this.totalWidth	 = o.offsetWidth;
		this._x = 0;
		this._y = 0;
		with (o.style) {
			left = "0px";
			top  = "0px";
		}
	};
	
	this.setLast = function () {
		this.content = o;
		this.totalHeight = o.offsetHeight;
		this.totalWidth	 = o.offsetWidth;
		with (o.style) {
			left =this._x ;
			top  =this._y;
		}
	};
	this.scrollBy = function (x, y) {
	//alert("x  "+x+"     y"+y)
	//alert("this._x + x    "+this._x + x)
		this._setPos(this._x + x, this._y + y);
	};
	this.scrollTo = function (x, y) {
		this._setPos(-x, -y);
	};
	this.stopScroll = function () {
		if (this.scrollTimer) window.clearInterval(this.scrollTimer);
	};
	this.startScroll = function (x, y) {
	    this.stopScroll();
	    this.scrollTimer = window.setInterval(
			function(){ self.scrollBy(x, y); }, 40
		);
	};
	this.customScrollBy = function (x, y,z) {	
	if(this._x != -z)
	{			
		this._setPos(this._x + x, this._y + y);
	}
	else
	{
	  this.stopScroll();
	}
	
	};
	
  this.customScroll = function (x, y, z) {
	    this.stopScroll();
		this.scrollTimer = window.setInterval(
			function(){ 			
			self.customScrollBy(x, y,z); 
			}, 40
		);
	};
		this.swapContent = function (c, w, h) {
		o = c;
		var list = o.getElementsByTagName("div");
		for (var i = 0; i < list.length; i++) {
			if (list[i].className.indexOf("Scroller-Container") > -1) {
				o = list[i];
			}
		}
		if (w) this.viewableWidth  = w;
		if (h) this.viewableHeight = h;
		this.reset();
	};
	
	//variables
	//alert("  "+o.id)
	this.content = o;
	this.viewableWidth  = w;
	this.viewableHeight = h;
	this.totalWidth	 = o.offsetWidth;
	this.totalHeight = o.offsetHeight;
	this.scrollTimer = null;
	this.reset();
};