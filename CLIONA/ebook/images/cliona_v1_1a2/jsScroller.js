//Written by Nathan Faubion: http://n-son.com
//Use this or edit how you want, just give me
//some credit!
//var changeFlag = true;
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
	    
		if (x < this.viewableWidth - this.totalWidth) 
		{
			//x = this.viewableWidth - this.totalWidth;
			scrollNodes("left",x,y);
			return ;
		}
			
		if (x > 0)
		{
			scrollNodes("left",x,y);
			return ;
		}
		if (y < this.viewableHeight - this.totalHeight) 
		{
			//y = this.viewableHeight - this.totalHeight;
		//	changeFlag = true;
		scrollNodes("top",x,y);
			return ;
		}
		if (y > 0)
		{
	    scrollNodes("top",x,y);
		return ;
		}
	
	if(x==0)
	{
		scrollNodes("top",x,y);
		return ;
	}
	else if(y==0)
	{	
		 scrollNodes("left",x,y);
		return ;
	}
		//this._x = x;
		//this._y = y;
	   //with (o.style) {
		//	left = this._x +"px";
		//	top  = this._y +"px";
			
		//}
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
		this._setPos(this._x + x, this._y + y);
	};
	this.scrollTo = function (x, y) {
		this._setPos(-x, -y);
	};
	this.stopScroll = function () {
		if (this.scrollTimer) window.clearInterval(this.scrollTimer);
	};
	this.startScroll = function (x, y) {
	
	//    this.stopScroll();
		this.scrollTimer = window.setInterval(
			function(){ self.scrollBy(x, y); }, 40
		);
	};
	
	this.customScrollBy = function (x, y,z) {	
	if(this._y != -z)
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
	
	this.customSetting = function (c) {
	this.content = c;
	this.totalWidth	 = c.offsetWidth;
	this.totalHeight = c.offsetHeight;	
	};
	
	//variables
	this.content = o;
	this.viewableWidth  = w;
	this.viewableHeight = h;
	this.totalWidth	 = o.offsetWidth;
	this.totalHeight = o.offsetHeight;
	this.scrollTimer = null;
	this.reset();
};



function jsScroller1 (o, w, h) {
	var self = this;
	var list = o.getElementsByTagName("div");
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.indexOf("Scroller-Container1") > -1) {
			o = list[i];
		}
		
	}
	
	//Private methods
	this._setPos = function (x, y) {
	    
		if (x < this.viewableWidth - this.totalWidth) 
			x = this.viewableWidth - this.totalWidth;
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
	if(this._y != -z)
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
	
	this.customSetting = function (c) {
	this.content = c;
	this.totalWidth	 = c.offsetWidth;
	this.totalHeight = c.offsetHeight;
	this.scrollTimer = null;
	this.reset();
	};
	
	//variables
	this.content = o;
	this.viewableWidth  = w;
	this.viewableHeight = h;
	this.totalWidth	 = o.offsetWidth;
	this.totalHeight = o.offsetHeight;
	this.scrollTimer = null;
	this.reset();
};
function jsScroller2 (o, w, h) {
	var self = this;
	var list = o.getElementsByTagName("div");
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.indexOf("Scroller-Container") > -1) {
			o = list[i];
		}
		
	}
	
	//Private methods
	this._setPos = function (x, y) {
	    
		if (x < this.viewableWidth - this.totalWidth) 
			x = this.viewableWidth - this.totalWidth;
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
	if(this._y != -z)
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
	this.content = o;
	this.viewableWidth  = w;
	this.viewableHeight = h;
	this.totalWidth	 = o.offsetWidth;
	this.totalHeight = o.offsetHeight;
	this.scrollTimer = null;
	this.reset();
};
function jsScrollerForGTB (o, w, h) {
	var self = this;
	var list = o.getElementsByTagName("div");
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.indexOf("Scroller-ContainerForGTB") > -1) {
			o = list[i];
		}
		
	}
	
	//Private methods
	this._setPos = function (x, y) {
	    //alert("setpos");
		if (x < this.viewableWidth - this.totalWidth) 
			x = this.viewableWidth - this.totalWidth;
		if (x > 0) x = 0;
		if (y < this.viewableHeight - this.totalHeight) 
		{
			//alert("here y < flagReturn : " + flagReturn);
			flagReturn = true;
			y = this.viewableHeight - this.totalHeight;
			}
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
	
	this.customScrollBy = function (x, y,z) {	
	if(this._y != -z)
	{
		this._setPos(this._x + x, this._y + y);
		//this.checkScrolComp();
	}
	else
	{
		alert("here");
		flagReturn = true;
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
		this._setPos(this._x + x, this._y + y);
	};
	this.scrollTo = function (x, y) {
		this._setPos(-x, -y);
	};
	this.stopScroll = function () {
		if (this.scrollTimer) window.clearInterval(this.scrollTimer);
		//alert("stop");
	};
	this.startScroll = function (x, y) {
	    this.stopScroll();
		this.scrollTimer = window.setInterval(
			function(){ self.scrollBy(x, y); }, 40
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
	this.content = o;
	this.viewableWidth  = w;
	this.viewableHeight = h;
	this.totalWidth	 = o.offsetWidth;
	this.totalHeight = o.offsetHeight;
	this.scrollTimer = null;
	this.reset();
};

