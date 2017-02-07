var isMoveStart=false;
var isNavigationNo=true;
function navigate(id){
	var me=this;
	me.element=typeof id == 'object' ? id : $get(id);
	me.touch=(/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion);
	me.element.addEventListener(START, me, false);
	me.element.addEventListener(END, me, false);
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
			case END:
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
			if( parseInt(me.StartX,10) >0 && difference>100 && isNavigationNo)
			{
				//$get(currentDivId).className="contentDv hideDiv hideAnimateDiv";
				//setTimeout(function (){Next(); $get(currentDivId).className="contentDv showDiv showAnimateDivOut";},0);
				isNavigationNo=false;
				if(!isHelpCourse)
					removeVideoControl();
				Next(); 
			}
			
		}
		else
		{
			
				if( parseInt(me.StartX,10) >0 && difference>100 && isNavigationNo)
				{
					//$get(currentDivId).className="contentDv hideDiv hideAnimateDivRight";
					//setTimeout(function (){Prev(); $get(currentDivId).className="contentDv showDiv showAnimateDivLeft";},0);
					isNavigationNo=false;
					removeVideoControl();
					Prev(); 
					/*$get('content').addEventListener('webkitAnimationEnd', function(){
						$get('content').className="contentDv showDiv showAnimateDivLeft";
						
					},false);
					Prev();*/
				}
				
				//setTimeout(function(){$get('content').className="contentDv showDiv showAnimateDiv";},2000);
			
		}
		
	},
};


START = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchstart' : 'mousedown';
MOVE = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchmove' : 'mousemove';
END = (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? 'touchend' : 'mouseup';
translateOpen = 'translate3d(';
translateClose =  ',0)' ;
