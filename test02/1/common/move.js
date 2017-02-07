function $get(id){
	var ele=document.getElementById(id);
	if(ele==null){
		ele=parent.frames.frame_b.document.getElementById(id);
	}
	return ele;
}


function move(id){
	var me=this;
	me.element=$get(id);
	if(id=="adiv"){
		me.element=document.getElementById(currentDivId).childNodes["adiv"];
	}
	
	me.touch=(/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion);
	
	me.setHeightWidth();
	
	me.element.addEventListener(START, me, false);
	me.element.addEventListener(MOVE, me, false);
	me.element.addEventListener(END, me, false);
	
}

move.prototype={
	x: 0,
	y: 0,
	enabled: true,
	handleEvent: function(e){
		var me=this;
		switch(e.type){
			case START:
				me.touchStart(e);
				break;
			case MOVE:
				me.touchMove(e);
				break;
			case END:
				me.touchEnd(e);
				break;
			case 'webkitTransitionEnd':
				me.transitionEnd();
				break;
		}
	},
	
	setHeightWidth: function () {
		var me = this;
		me.scrollWidth = me.element.parentNode.clientWidth;
		me.scrollHeight = me.element.parentNode.clientHeight;
		me.scrollerWidth = me.element.offsetWidth;
		me.scrollerHeight = me.element.offsetHeight;
		me.maxScrollX = me.scrollWidth - me.scrollerWidth;
		me.maxScrollY = me.scrollHeight - me.scrollerHeight;
		me.directionX = 0;
		me.directionY = 0;
		
		me.scrollX = me.scrollerWidth > me.scrollWidth;
		me.scrollY = me.scrollerHeight > me.scrollHeight;
	},
	
	transitionEnd: function () {
		var me = this;
		me.element.removeEventListener('webkitTransitionEnd', me, false);
		me.resetPosition();
	},
	
	setPosition: function (x, y) {
		var me = this;
		me.x = x;
		me.y = y;
		me.element.style.webkitTransform ="translateY(" +me.y + 'px)'  ;
		//translateOpen + me.x + 'px,' + me.y + 'px' + translateClose;
	},
	
	setTransitionTime: function(time) {
		var me = this;
		time = time || '0';
		me.element.style.webkitTransitionDuration = time;
	},
	
	touchStart: function(e) {
		var me = this;
	isMoveStart=true;
	
		e.preventDefault();
		//e.stopPropagation(); commented because navigate start event dont get fire
		//added to close popup on scroll
		try{
			if(me.element.id.toLowerCase()!="popupl1" && !isIphoneDevice){
				hideIPadPopup();
			}
		}
		catch(e){}
		me.scrolling = true;		

		me.moved = false;
		me.dist = 0;
	
		me.setTransitionTime('0');

		me.touchStartX = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageX : e.pageX;
		me.scrollStartX = me.x;

		me.touchStartY = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageY : e.pageY;
		me.scrollStartY = me.y;

		me.scrollStartTime = e.timeStamp;

		me.directionX = 0;
		me.directionY = 0;
	},
	
	touchMove: function(e) {
		var me = this,
			pageX = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageX : e.pageX,
			pageY = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageY : e.pageY,
			leftDelta = me.scrollX ? pageX - me.touchStartX : 0,
			topDelta = me.scrollY ? pageY - me.touchStartY : 0,
			newX = me.x + leftDelta,
			newY = me.y + topDelta;
			
		if (!me.scrolling) {
			return;
		}
		e.stopPropagation();	
		me.touchStartX = pageX;
		me.touchStartY = pageY;
		if (newX >= 0 || newX < me.maxScrollX) {
			newX = true ? Math.round(me.x + leftDelta / 3) : (newX >= 0 || me.maxScrollX>=0) ? 0 : me.maxScrollX;
		}
		

		if (newY >= 0 || newY < me.maxScrollY) { 
			newY = true ? Math.round(me.y + topDelta / 3) : (newY >= 0 || me.maxScrollY>=0) ? 0 : me.maxScrollY;
		}

		if (me.dist > 5) {			
			me.setPosition(newX, newY);
			me.moved = true;
			me.directionX = leftDelta > 0 ? -1 : 1;
			me.directionY = topDelta > 0 ? -1 : 1;
		} else {
			me.dist+= Math.abs(leftDelta) + Math.abs(topDelta);
		}
	},
	
	touchEnd: function(e) {
	    
		var me = this,
			time = e.timeStamp - me.scrollStartTime,
			point = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0] : e,
			target, ev,
			
			newDuration = 0,
			newPositionX = me.x, newPositionY = me.y,
			snap;

		
		if (!me.scrolling) {
			return;
		}
		me.scrolling = false;
		try{
			if(navigateForAPW4!=null && navigateForAPW4!='undefined'){
				navigateForAPW4.StartX=me.x;
			}
		}
		catch(e){}
		if (!me.moved) {
			me.resetPosition();

			if ((/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion)) {
				
				target = point.target;
				while (target.nodeType != 1) {
					target = target.parentNode;
				}

				
				target.style.pointerEvents = 'auto';
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					point.screenX, point.screenY, point.clientX, point.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);
				ev._fake = true;
				target.dispatchEvent(ev);
			}
			return;
		}
		
		if (time > 250) {	
			me.resetPosition();
			return;
		}
	},
	
	
	resetPosition: function () {
		var me = this,
			resetX = me.x,
		 	resetY = me.y;

		if (me.x >= 0) {
			resetX = 0;
		} else if (me.x < me.maxScrollX) {
			resetX = me.maxScrollX;
		}

		if (me.y >= 0 || me.maxScrollY > 0) {
			resetY = 0;
		} else if (me.y < me.maxScrollY) {
			resetY = me.maxScrollY;
		}
		
		if (resetX != me.x || resetY != me.y) {
			me.scrollTo(resetX, resetY);
		} else {
			if (me.moved) {
				me.moved = false;
			}
		}
	},
	
	scrollTo: function (destX, destY, runtime) {
		var me = this;

		if (me.x == destX && me.y == destY) {
			me.resetPosition();
			return;
		}

		me.moved = true;
		me.setTransitionTime(runtime || '0ms');
		me.setPosition(destX, destY);

		if (runtime==='0' || runtime=='0s' || runtime=='0ms') {
			me.resetPosition();
		} else {
			me.element.addEventListener('webkitTransitionEnd', me, false);	
		}
	},
	
	onScrollEnd: function () {},
	
	destroy: function (full) {
		var me = this;
		me.scrollTo(0, 0);
		me.element.removeEventListener(START, me, false);
		me.element.removeEventListener(MOVE, me, false);
		me.element.removeEventListener(END, me, false);
		document.removeEventListener('webkitTransitionEnd', me, false);
		
		return null;
	}
};

START = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchstart' : 'mousedown';
MOVE = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchmove' : 'mousemove';
END = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchend' : 'mouseup';
translateOpen = 'translate3d(';
translateClose =  ',0)' ;
