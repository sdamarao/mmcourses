var isMoveStart=false;
var isNavigationNo=true;
function navigate(id){
	var me=this;
	me.element=typeof id == 'object' ? id : $get(id);
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
		me.StartX = e.changedTouches[0].pageX ;
	},
	
	
	touchEnd: function(e) {
	  
		var me = this;
		var endX =  e.changedTouches[0].pageX ;
		var endY =  e.changedTouches[0].pageY;
		var difference=me.StartX-endX;
		if(difference<0)difference=difference*(-1);
		navDiff = difference;
		 
		if( me.StartX>endX)
		{
			if( parseInt(me.StartX,10) >0 && difference>100 && isNavigationNo)
			{
				Next(); 
			}
			
		}
		else
		{
			
				if( parseInt(me.StartX,10) >0 && difference>100 && isNavigationNo)
				{
					Prev(); 
				}
		}
		
	},
};


START = 'touchstart';
MOVE =  'touchmove' ;
END =  'touchend' ;

