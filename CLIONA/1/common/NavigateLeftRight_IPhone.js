var isMoveStart=false;
var isNavigationNo=true;
function navigate(id){
	var me=this;
	me.element=typeof id == 'object' ? id : $get(id);
	me.touch=(/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion);
	me.element.addEventListener(START, me, false);
	me.element.addEventListener(END, me, false);
	me.element.addEventListener(MOVE, me, false);
}

navigate.prototype={
	x: 0,
	y: 0,
	enabled: true,
	navigateRight:false,
	navigateLeft:false,
	handleEvent: function(e){
		var me=this;
		switch(e.type){
			case START:
				me.touchStart(e);
				break;
			case MOVE:
			    if((/iphone/gi).test(navigator.appVersion))
				me.touchMove(e);
				break;
			case END:
				if(!(/iphone/gi).test(navigator.appVersion))
				me.touchEnd(e);
				break;
			case 'webkitTransitionEnd':
				me.transitionEnd();
				break;
		}
	},
	
	
	transitionEnd: function () {
		var me = this;
		me.element.removeEventListener('webkitTransitionEnd', me, false);
	},
	
	touchStart: function(e) {
		var me = this;
		//e.preventDefault();
		//e.stopPropagation();
		if((/iphone/gi).test(navigator.appVersion))
			me.eventId=e.touches[0].identifier;
		me.StartX = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageX : e.pageX;
	},
	
	
	touchEnd: function(e) {
	  
		var me = this,
		var endX = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageX : e.pageX;
		var endY = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageY : e.pageY;
		var difference=me.StartX-endX;
		if(difference<0)difference=difference*(-1);
		navDiff = difference; 
		if( me.StartX>endX)
		{
			if( parseInt(me.StartX,10) >0 && difference>80 && isNavigationNo)
			{
				$get(currentDivId).className="contentDv hideDiv ";
				isNavigationNo=false;
				if(!isHelpCourse)
					removeVideoControl();
				Next(); $get(currentDivId).className="contentDv showDiv ";
				
			}
			
		}
		else
		{
			if( parseInt(me.StartX,10) >0 && difference>80 && isNavigationNo)
			{
				$get(currentDivId).className="contentDv hideDiv ";
				isNavigationNo=false;
				removeVideoControl();
				Prev(); $get(currentDivId).className="contentDv showDiv ";
				
			}
		}
	},
	
	touchMove: function(e) {
	    
		var me = this,
        
		var endX = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.touches[0].pageX : e.pageX;
       
        var eventId=e.touches[0].identifier;
		var difference=me.StartX-endX;
		if(difference<0)difference=difference*(-1);
		
		if(me.eventId!= eventId) return; 
		if( me.StartX>endX)
		{
			if( parseInt(me.StartX,10) >0 && difference>80 && isNavigationNo)
			{
				$get(currentDivId).className="contentDv hideDiv";
				isNavigationNo=false;
				Next(); $get(currentDivId).className="contentDv showDiv ";
				me.StartX=0;
			}
			
		}
		else
		{
			
			if( parseInt(me.StartX,10) >0 && difference>80 && isNavigationNo)
			{
				$get(currentDivId).className="contentDv hideDiv ";
				isNavigationNo=false;
				Prev(); $get(currentDivId).className="contentDv showDiv ";
                me.StartX=0;
			}
		}
	},
};

START = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchstart' : 'mousedown';
MOVE = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchmove' : 'mousemove';
END = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchend' : 'mouseup';
translateOpen = 'translate3d(';
translateClose =  ',0)' ;
