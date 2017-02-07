var PlayInteraction = true;
var watermrk = null;
var IsLoadOnMobile = false;
var CONST_TOGGLESOUNDBTN_ID = "interactionAudio";
var CONST_ADD = 'add';
var CONST_REMOVE = 'remove';
var CONST_HASCONTROLS = 'hascontrols';
var waterMrkText = 'Tap anywhere on the screen to play this interaction.';
var CONST_MAXSCORE = 100;
var gtbTextScroller = null;
var CONST_SCROLLOBJECT = "scrollObject";

function GlobalFunctions(MainPanelId) {
    try {
       
        if ($("#IMG1") != null) {
            ShowHideImage();
        }
		IsLoadOnMobile = false;
		IsLoadedOnMobileDevice();
        initImageScaling();
        DisableImageDrag();
        AdjustBackgroundSettings(MainPanelId);		
        if (IsLoadOnMobile == true) {
            PlayInteraction = false;
			AddRemoveVideoAttributes(CONST_REMOVE);			
            DisplayPlayMark();
		}
		
		try{
		IMProgressStatus = "not attempted";
		}catch(ex1){}
    } catch (ex) { }
} //GlobalFunctions

function DisplayPlayMark() {   
	var divTag = null;
	    try {
        watermrk = document.getElementById("PlayWatermark");
        if (watermrk != null) {
            watermrk.style.display = 'block';
            watermrk.style.zIndex = 1200;
			try{
			//apply target view size to watermark div as well.
			watermrk.style.width = watermrk.offsetWidth * TargetViewSizeFactor + "px";
			watermrk.style.height = watermrk.offsetHeight * TargetViewSizeFactor + "px";
			}catch(ex){}
			divTag = document.createElement("div");
			
			$(divTag).css("height",'10%');
			$(divTag).css("top",'57%');
			$(divTag).css("width",'61%');
			$(divTag).css("left",'21%');	
			$(divTag).css("font-family",'verdana');
			$(divTag).css("font-size", (1 * TargetViewSizeFactor) + 'em');		
			$(divTag).css("color",'#FFFFFF');
			$(divTag).css("position",'absolute');
			$(divTag).css("display",'block');
			$(divTag).css("word-wrap",'break-word');
			$(divTag).css("text-align",'center');
			divTag.textContent = waterMrkText;
			watermrk.appendChild(divTag);
        }//if watermrk not null
    } catch (ex) { }
} //DisplayPlayMark

function OnPlayMarkClick() {
    try {
    if (watermrk != null) 
            watermrk.style.display = 'none';
        PlayInteraction = true;
		AddRemoveVideoAttributes(CONST_ADD);
		InitializeAudioOnMobile();
        StartInteraction();
    } catch (ex) { }
}

function toggleSoundButton() {
    try {
        if (IsLoadOnMobile == true) {

            toggleSoundButtonPlayStop();
        }
        else {
            toggleSoundButtonPlayPause();
        }
    } catch (ex) { }
}


//this function is to toggle sound button icon and to implement play/stop functionality
function toggleSoundButtonPlayStop() {

    var soundElement = null;
    try {
        soundElement = document.getElementById(CONST_TOGGLESOUNDBTN_ID);

        if (soundElement != null) {
            if ($("#" + CONST_TOGGLESOUNDBTN_ID).attr("src") == "./" + OnImage) {
                IsMute = true;
                //AudioControl.volume=0;
                if (MyAudio != null) {
                    MyAudio.volume = 0;
                    MyAudio.pause();
                }
                $("#" + CONST_TOGGLESOUNDBTN_ID).attr("src", "./" + OffImage);
            }
            else {

                IsMute = false;
                //AudioControl.volume=1;
                if (MyAudio != null) {
                    MyAudio.volume = 1;
                    MyAudio.play();
                }
                $("#" + CONST_TOGGLESOUNDBTN_ID).attr("src", "./" + OnImage);

            }
        }
        else if (IsMute == false) {
            IsMute = true;
            if (MyAudio != null) {
                MyAudio.volume = 0;
                MyAudio.pause();
            }
        }
        else {
            IsMute = false;
            if (MyAudio != null) {
                MyAudio.volume = 1;
                MyAudio.play();
             }
        }

    } catch (ex) { }

} //toggleSoundButton

//this function is to toggle sound button icon and to implement mute/unmute functionality
function toggleSoundButtonPlayPause() {
    soundElement = document.getElementById(CONST_TOGGLESOUNDBTN_ID);
    try {

        if (soundElement != null) {

            if ($("#" + CONST_TOGGLESOUNDBTN_ID).attr("src") == "./" + OnImage) {
                IsMute = true;
                if (MyAudio != null)
                { MyAudio.volume = 0; }
                $("#" + CONST_TOGGLESOUNDBTN_ID).attr("src", "./" + OffImage);
            }
            else {
                IsMute = false;
                if (MyAudio != null)
                { MyAudio.volume = 1; }
                $("#" + CONST_TOGGLESOUNDBTN_ID).attr("src", "./" + OnImage);
            }
        }
        else if (IsMute == false) {
            IsMute = true;
            if (MyAudio != null)
            { MyAudio.volume = 0; }
        }
        else {
            IsMute = false;
            if (MyAudio != null) {
                MyAudio.volume = 1;}
        }


    } catch (e) { }
} //toggleSoundButtonPlayPause

function SendTincanVideoData() {
    var videoArray = null;
    var datasend = false;
    try {
        //condition to stop/mute all other audios and videos
        videoArray = document.getElementsByTagName("video");
        if (videoArray.length >= 1) {
            for (var index = 0; index < videoArray.length; index++) {
                $(videoArray[index]).attr('datasend', 'false');
                videoArray[index].addEventListener('playing', function sendData() {
                    //sendVideoData(videoArray[index]);
                    if (this.getAttribute("datasend") == 'false') {
                        this.setAttribute("datasend", 'true');
                        raptivity_completionStatus = "experienced";
                        SendTincanStatement("Video name: " + this.getAttribute("src"), " ", true);

                    }
                }, false);
            }
        }
    } catch (ex) { }
} //SendTincanVideoData

function AdjustBackgroundSettings(containerId) {
    try {
        var backgroundPanelDiv;
        backgroundPanelDiv = document.getElementById(containerId);
        /* mainpanel is a your main panel or div where we actually apply background image. 
        This may change as per names of ur main div/panel.
        */
        if (BackGroundType == 'Background Color') // if Background Type is 'Background Color'.
        {
            backgroundPanelDiv.style.background = BackgroundColor;
        }
        else if (BackGroundType == 'None') // if Background Type is None.
        {
            backgroundPanelDiv.style.background = 'none';
        }
    } catch (ex) { }
} //AdjustBackgroundSettings

function initImageScaling() {
try{
var elt;
var imageSetting;
var settingParameters;
var imageScaledElts = document.getElementsByClassName('MAR');

for (var i = 0; i < imageScaledElts.length; i++) {
elt = imageScaledElts[i];
imageSetting = $(elt).attr('imageSetting');
settingParameters = imageSetting.split('$');
//smitad++----------------------------------------------
//Date:- 2-July 2014 for pack restructure release II
//Commented below code and added new code to show small images at center of the container.

//tanaji 6-6-13 Added px in both if statement
/*if (settingParameters[0] == 1) {
elt.style.left = parseInt(elt.style.left) + ((parseInt(settingParameters[1]) - parseInt

(elt.style.width)) / 2) + "px";//ts
}
if (settingParameters[0] == 2) {
elt.style.top = parseInt(elt.style.top) + ((parseInt(settingParameters[2]) - parseInt

(elt.style.height)) / 2) + "px";//ts
}*/

//alert("check coming hare");
elt.style.left = parseInt(elt.style.left) + ((parseInt(settingParameters[1]) - parseInt

(elt.style.width)) / 2) + "px";//ts
elt.style.top = parseInt(elt.style.top) + ((parseInt(settingParameters[2]) - parseInt

(elt.style.height)) / 2) + "px";//ts
//smitad-----------------------------------------------

}
} catch (ex) { }
}


function ShowHideControl(ObjControl, bVisible) {
    try {
        var NS4 = (document.layers) ? 1 : 0;
        var element = document.getElementById(ObjControl);

        if (element != null) {
            if (bVisible == false) {
                //element.style.visibility = (NS4) ? "hide" : "hidden";
                element.style.display = "none";
            }
            else {
                //element.style.visibility = (NS4) ? "show" : "visible";
                element.style.display = "block";
            }
        }
    }
    catch (ex)
  { }
} //ShowHideControl

function ShowHideImage() {
    $("#IMG1").fadeOut(3000).fadeIn(3000);
    setTimeout("ShowHideImage()", 6000);
} //ShowHideImage

function replaceText(input) {
    try {
        if (input == null) {
            return input;
        }
        //Commented By Priti Mulay on 25 July 2013
        /*
        input=input.replace(/<p/g,"<div");
        input=input.replace(/p>/g,"div>"); 
        var regex = new RegExp("<div></div>", "g");
        input=input.replace(regex,"<br/>");  
        */
        //Added By Priti Mulay on 25 July 2013
        //Purpose:-For R to L support
        if (RtoLflag == 'True' || RtoLflag == 'true') {
            input = input.replace(/<p/g, "<div dir='rtl'");
            input = input.replace(/p>/g, "div>");
            var regex = new RegExp("<div dir='rtl'></div>", "g");
            input = input.replace(regex, "<br/>");
        }
        else {
            input = input.replace(/<p/g, "<div");
            input = input.replace(/p>/g, "div>");
            var regex = new RegExp("<div></div>", "g");
            input = input.replace(regex, "<br/>");
        }
        if ($.browser.webkit) //Chrome/Safari
        {
            FontDifference=3;            
            input = input.replace(/size=\"([^<]+)\" color=\"([^<]+)\"/gi, "style='font-size:$1pt; color:$2;'");
            input = input.replace(/color=\"([^<]+)\" size=\"([^<]+)\"/gi, "style='font-size:$2pt; color:$1;'");
        }
        else if ($.browser.msie || navigator.userAgent.indexOf("Trident") != -1)//IE
        {
            //Commented By Priti Mulay date:26 Jun 2013 
            //purpose:Not supported in IE9

            /*FontDifference=3;
            input = input.replace(/color=([^<]+) size=([^<]+) face=\"([^<]+)\"/gi, "style='font-size:$2pt; font-family:$3;color:$1;'"); 
            input = input.replace(/color=([^<]+) size=([^<]+) face=([^<]+)/gi, "style='font-size:$2pt; font-family:$3; color:$1;'"); 				
            input = input.replace(/color=([^<]+) face=([^<]+) size=\"([^<]+)\"/gi, "style='font-size:$3pt; font-family:$2;color:$1;'"); 
            input = input.replace(/color=([^<]+) face=([^<]+) size=([^<]+)/gi, "style='font-size:$3pt; font-family:$2; color:$1;'"); 
		
		input = input.replace(/face=([^<]+) color=([^<]+) size=\"([^<]+)\"/gi, "style='font-size:$3pt; font-family:$1;color:$2;'"); 
            input = input.replace(/face=([^<]+) color=([^<]+) size=([^<]+)/gi, "style='font-size:$3pt; font-family:$1; color:$2;'"); 
            input = input.replace(/face=([^<]+) size=([^<]+) color=\"([^<]+)\"/gi, "style='font-size:$2pt; font-family:$1;color:$3;'"); 
            input = input.replace(/face=([^<]+) size=([^<]+) color=([^<]+)/gi, "style='font-size:$2pt; font-family:$1; color:$3;'"); 
		
	    input = input.replace(/size=([^<]+) color=([^<]+) face=\"([^<]+)\"/gi, "style='font-size:$1pt; font-family:$3;color:$2;'"); 
            input = input.replace(/size=([^<]+) color=([^<]+) face=([^<]+)/gi, "style='font-size:$1pt; font-family:$3; color:$2;'"); 
            input = input.replace(/size=([^<]+) face=([^<]+) color=\"([^<]+)\"/gi, "style='font-size:$1pt; font-family:$2;color:$3;'"); 
            input = input.replace(/size=([^<]+) face=([^<]+) color=([^<]+)/gi, "style='font-size:$1pt; font-family:$2; color:$3;'"); */

            //Added By Priti Mulay date:26 Jun 2013
            //Purpose :for IE9 browser
            FontDifference = 3;
            input = input.replace(/size=\"([^<]+)\" color=\"([^<]+)\" face=\"([^<]+)\"/gi, "style='font-size:$1pt; font-family:$3; color:$2;'");
            input = input.replace(/size=\"([^<]+)\" face=\"([^<]+)\" color=\"([^<]+)\"/gi, "style='font-size:$1pt; font-family:$2; color:$3;'");

            input = input.replace(/color=\"([^<]+)\" face=\"([^<]+)\" size=\"([^<]+)\"/gi, "style='font-size:$3pt; font-family:$2; color:$1;'");
            input = input.replace(/color=\"([^<]+)\" size=\"([^<]+)\" face=\"([^<]+)\"/gi, "style='font-size:$2pt; font-family:$3; color:$1;'");

            input = input.replace(/face=\"([^<]+)\" color=\"([^<]+)\" size=\"([^<]+)\"/gi, "style='font-size:$3pt; font-family:$1; color:$2;'");
            input = input.replace(/face=\"([^<]+)\" size=\"([^<]+)\" color=\"([^<]+)\"/gi, "style='font-size:$2pt; font-family:$1; color:$3;'");
        }
        else  //Firefox
        {
            FontDifference = 3;
            input = input.replace(/size=\"([^<]+)\" color=\"([^<]+)\" face=\"([^<]+)\"/gi, "style='font-size:$1pt; font-family:$3; color:$2;'");
            input = input.replace(/size=\"([^<]+)\" face=\"([^<]+)\" color=\"([^<]+)\"/gi, "style='font-size:$1pt; font-family:$2; color:$3;'");

            input = input.replace(/color=\"([^<]+)\" face=\"([^<]+)\" size=\"([^<]+)\"/gi, "style='font-size:$3pt; font-family:$2; color:$1;'");
            input = input.replace(/color=\"([^<]+)\" size=\"([^<]+)\" face=\"([^<]+)\"/gi, "style='font-size:$2pt; font-family:$3; color:$1;'");

            input = input.replace(/face=\"([^<]+)\" color=\"([^<]+)\" size=\"([^<]+)\"/gi, "style='font-size:$3pt; font-family:$1; color:$2;'");
            input = input.replace(/face=\"([^<]+)\" size=\"([^<]+)\" color=\"([^<]+)\"/gi, "style='font-size:$2pt; font-family:$1; color:$3;'");
        }
        var pt = input.match(/font-size:\d+pt/g);
        if (pt != null) {
            var i = 0;
            while (i < pt.length) {

                fontSize = parseFloat(pt[i].split(":")[1].split("pt")[0]);
                newSize = fontSize - FontDifference;
                original = "font-size:" + fontSize + "pt";
                newSize = (newSize * TargetViewSizeFactor) - (TargetViewSizeFactor - 1);
                updated = "font-size:0" + newSize + "pt";
                if (FontDifference == 0) {
                    updated = "font-size:0" + newSize;
                }

                input = input.replace(original, updated);
                i++;

            }
        }
    } catch (ex) { }
    return input;
} //replaceText

function OpenWebLink(webaddress) {
    try {
        var str = "http://";
        if (webaddress.indexOf(str) != 0)
        { window.open(str + webaddress); }
        else
        { window.open(webaddress); }
    } catch (ex) { }
}

// Modified by Bhagyashree - To resolve the Issue of scroll bar

function OpenButtonPopup(ButtonPopupId) {
    try {
        var textElement = null;
        var scrollElement = null;
        var textInnerElement = null;
        var videoElement;
        var videoId;
        var videoArray = null;
        var height = null;
        if (showPopup == true) {

            ShowHideControl('Stage' + ButtonPopupId, true);
            ShowHideControl('ButtonPopup' + ButtonPopupId, true);

            //if button popup has video
            videoId = 'ButtonPopupVideoTagId' + ButtonPopupId;
            videoElement = document.getElementById(videoId);
            if (videoElement != null) {
                //condition to stop/mute all other audios and videos
                videoArray = document.getElementsByTagName("video");
                if (videoArray.length >= 1) {
                    for (var index = 0; index < videoArray.length; index++) {
                        try {

                            videoArray[index].volume = 0;
                            if (videoArray[index].getAttribute("autoplay") == 'true')//Additional Media Video should stop.
                            { videoArray[index].pause(); }
                        } catch (ex) { }
                    }
                    buttonPopupMuteChk = false;
                    if (IsMute == false) {
                        toggleSoundButton();
                        buttonPopupMuteChk = true;
                    }
                }
                videoElement.load();
                videoElement.play();
                videoElement.volume = 1;
            }

            //if button popup has text
            textElement = document.getElementById("ButtonPopupText" + ButtonPopupId);
            if (textElement != null) {
                scrollElement = document.getElementById("ButtonPopupScroller" + ButtonPopupId);
                textInnerElement = document.getElementById("ButtonPopupInnerText" + ButtonPopupId);
                height = textInnerElement.offsetHeight;
                textInnerElement.style.height = height + "px";
                scrollElement.style.height = height + "px";

                gtbTextScroller = new jsScrollerForGTB(textElement, textElement.offsetWidth, textElement.offsetHeight);
                if (height > textElement.offsetHeight) {
                    ShowHideControl("gtbTextArrowUp" + ButtonPopupId, true);
                    ShowHideControl("gtbTextArrowDown" + ButtonPopupId, true);
                }
                else {
                    ShowHideControl("gtbTextArrowUp" + ButtonPopupId, false);
                    ShowHideControl("gtbTextArrowDown" + ButtonPopupId, false);
                }
            }
            showPopup = false;
        }
    }
    catch (ex) { }
} //OpenButtonPopup


function CloseButtonPopup(ButtonPopupId) {
    try {
        var videoElement;
        var videoId;
        var videoArray = null;
        ShowHideControl('Stage' + ButtonPopupId, false);
        ShowHideControl('ButtonPopup' + ButtonPopupId, false);
        showPopup = true;
        videoId = 'ButtonPopupVideoTagId' + ButtonPopupId;
        videoElement = document.getElementById(videoId);
        if (videoElement != null) {
            //condition to stop/mute all other audios and videos
            videoArray = document.getElementsByTagName("video");
            if (videoArray.length >= 1) {
                for (var index = 0; index < videoArray.length; index++) {
                    try {
                        videoArray[index].volume = 1;
                    } catch (ex) { }
                }
            }
            if (buttonPopupMuteChk == true)
            { toggleSoundButton(); }
            videoElement.pause();

        }

    }
    catch (ex) { }
} //CloseButtonPopup 

function DisableImageDrag() {
    try {
        function noDrag(e) {
            e.preventDefault();
        }
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].onmousedown = noDrag;
        }
    } catch (ex) { }
}

function ShowHideAdditionalMedia(display)
{
var gtbElement = null;
var videoElement = null;
//var temp1 = new Array();
var temp=0;
try{
if(display == false)
{
for(var i=1;i<=gtbCount;i++)
{
gtbElement = document.getElementById("MediaText"+i); //text
if(gtbElement != null)
{gtbElement.style.display = "none"; }  

gtbElement = document.getElementById("MediaImage"+i); //image
if(gtbElement != null)
{gtbElement.style.display = "none"; }

gtbElement = document.getElementById("MediaButton"+i); //button
if(gtbElement != null)
{gtbElement.style.display = "none"; }
gtbElement=null;
gtbElement = document.getElementById("MediaVideo"+i); //video

if(gtbElement != null)
{
gtbElement.style.display = "none"; 
//pause GTB video
videoElement = gtbElement.children[0]; //check condition 
temp=i;
//tanaji 13-6-2013 function call of pauseVideo
setTimeout(function() {
    pauseVideos(temp);
}, 500)
//setTimeout("pauseVideos(temp)",30);
if(videoElement != null)
{videoElement.pause();
}    
}
}//for
if(muteOtherAudio == true)
{toggleSoundButton();}
}
else
{
for(var i=1;i<=gtbCount;i++)
{
gtbElement = document.getElementById("MediaText"+i); //text
if(gtbElement != null)
{gtbElement.style.display = "block"; }  

gtbElement = document.getElementById("MediaImage"+i); //image
if(gtbElement != null)
{gtbElement.style.display = "block"; }

gtbElement = document.getElementById("MediaButton"+i); //button
if(gtbElement != null)
{gtbElement.style.display = "block"; }

gtbElement = document.getElementById("MediaVideo"+i); //video
if(gtbElement != null)
{
gtbElement.style.display = "block"; 
//pause GTB video
videoElement = gtbElement.children[0]; //check condition 
if(videoElement != null)
{videoElement.play();}    
}
}//for
if(muteOtherAudio == true && IsMute == false)
{toggleSoundButton();}
}
}catch(ex){}
}

function IsLoadedOnMobileDevice(){
	try{
		if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) 
			IsLoadOnMobile = true;
		else
			IsLoadOnMobile = false;
	}catch(ex){}
}

function StopAudio(){
	try{
		if(MyAudio != null){
			MyAudio.pause();			
			MyAudio.src = '';
		}
	}catch(ex){}
}

function AddRemoveVideoAttributes(action){
var videoArray = null;
var const_controls = "controls";
try{
	videoArray = document.getElementsByTagName("video");
    if (videoArray.length >= 1) {
		if(action == CONST_ADD){	
			for (var index = 0; index < videoArray.length; index++) {
				if(videoArray[index].getAttribute(CONST_HASCONTROLS) == "true")
					videoArray[index].setAttribute(const_controls,"control");			
			}//for
		}else{
			for (var index = 0; index < videoArray.length; index++){
				if(videoArray[index].getAttribute(const_controls) == null || 
				videoArray[index].getAttribute(const_controls) == "undefined" || 
				videoArray[index].getAttribute(const_controls) == ''){
					videoArray[index].setAttribute(CONST_HASCONTROLS,"false");		
				}else{
						videoArray[index].removeAttribute(const_controls);
						videoArray[index].setAttribute(CONST_HASCONTROLS,"true");	
				}
			}
		}//else
	}//video array length
}catch(ex){}
}

function InitializeAudioOnMobile(){
	try{
		MyAudio = document.getElementById('AudioTag'); //new Audio(soundfile);
            MyAudio.src = '';             
            MyAudio.load();
            MyAudio.play();		
	}catch(ex){}
}

//function AttachEventToScroller(scrollerObject, scrollUp, scrollDown, scrollLeft = "", scrollRight = "", stopScrollElement = "")
function AttachEventToScroller(scrollerObject, scrollUp, scrollDown, scrollLeft, scrollRight, stopScrollElement){
try{

	//handling null values
	if(scrollLeft == undefined)
		scrollLeft = "";

	if(scrollRight == undefined)
		scrollRight = "";
	
	if(stopScrollElement == undefined)
		stopScrollElement = "";
	
	if(IsLoadOnMobile == true){				
		/*if(stopScrollElement != null && stopScrollElement != ""  && $("#" + stopScrollElement).attr("eventattached") != "True"){		
			//$("#" + stopScrollElement).unbind("touchstart");
			$("#" + stopScrollElement).bind("click", function(e1){						
					scrollerObject.stopScroll();	
				//	alert(stopScrollElement);
					$("#" + stopScrollElement).attr("eventattached","True");
			});	
		}//stopScrollElement*/
			
		//attach touch event to start scrolling on up scroller element.	
		if(scrollUp != null && scrollUp != ""){
			$("#" + scrollUp).bind("touchstart", function(e11){		
				scrollerObject.startScroll(0, 5);	
				event.preventDefault();
			});
			
			$("#" + scrollUp).bind("touchend", function(e12){		
				scrollerObject.stopScroll();	
				event.preventDefault();
			});
		}

		if(scrollDown != null && scrollDown != ""){
		//attach touch event to start scrolling on down scroller element.	
			$("#" + scrollDown).bind("touchstart", function(e13){		
				scrollerObject.startScroll(0, -5);
				event.preventDefault();
			});
			
			$("#" + scrollDown).bind("touchend", function(e14){		
				scrollerObject.stopScroll();
				event.preventDefault();
			});
		}//scrollDown
			
		if(scrollLeft != null && scrollLeft != ""){
		//attach touch event to start scrolling on left scroller element.	
			$("#" + scrollLeft).bind("touchstart", function(e15){		
				scrollerObject.startScroll(5, 0);
				event.preventDefault();	
			});
			
			$("#" + scrollLeft).bind("touchend", function(e16){		
				scrollerObject.stopScroll();
				event.preventDefault();
			});
			
		}//scrollLeft
		if(scrollRight != null && scrollRight != ""){
		//attach touch event to start scrolling on right scroller element.	
			$("#" + scrollRight).bind("touchstart", function(e17){		
				scrollerObject.startScroll(-5, 0);
				event.preventDefault();
			});
			
			$("#" + scrollRight).bind("touchend", function(e18){		
				scrollerObject.stopScroll();
				event.preventDefault();
			});
		}//scrollRight
}else{		
	if(scrollUp != null && scrollUp != "" ){
			//attach mouse event to start scrolling on up scroller element.	
			$("#" + scrollUp).bind("mouseover", function(e6){		
				scrollerObject.startScroll(0, 5);
			});	

			//attach mouse event to stop scrolling on up scroller element.	
			$("#" + scrollUp).bind("mouseout", function(e7){		
				scrollerObject.stopScroll();
			});
		}//scrollUp
		
		if(scrollDown != null && scrollDown != ""){
			//attach mouse event to start scrolling on down scroller element.	
			$("#" + scrollDown).bind("mouseover", function(e8){		
				scrollerObject.startScroll(0, -5);
			});	

			//attach mouse event to stop scrolling on down scroller element.	
			$("#" + scrollDown).bind("mouseout", function(e9){		
				scrollerObject.stopScroll();
			});			
		}//scrollDown
		
		if(scrollLeft != null && scrollLeft != ""){
			//attach mouse event to start scrolling on left scroller element.	
			$("#" + scrollLeft).bind("mouseover", function(e10){		
				scrollerObject.startScroll(5, 0);
			});	

			//attach mouse event to stop scrolling on left scroller element.	
			$("#" + scrollLeft).bind("mouseout", function(e11){		
				scrollerObject.stopScroll();
			});			
		}//scrollLeft

		if(scrollRight != null && scrollRight != ""){
			//attach mouse event to start scrolling on right scroller element.	
			$("#" + scrollRight).bind("mouseover", function(e12){		
				scrollerObject.startScroll(-5, 0);
			});	

			//attach mouse event to stop scrolling on right scroller element.	
			$("#" + scrollRight).bind("mouseout", function(e13){		
				scrollerObject.stopScroll();
			});			
		}//scrollRight			
}
}catch(ex){}
}
