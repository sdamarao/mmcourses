// Global variables.
var g_flagfinish = false;
var g_startDate;
var g_isInitialized = false;
var suspend_data_separator = "<!>";
var g_complianceType = "";
var g_lesson_mode = "normal";
var g_credit = "credit";
//7-2-09:global variable added for lesson status
var g_lesson_status;

var g_curReqStartDate;	//Added for computing start date for each progress request

/* 
//	class defination of glossaryWord
//	Object of this class can hold glossary term and the description file path of the glossary term
*/
function glossaryWord(term, termDesc, courseInstance) {
    this.word = term;
    this.descFilePath = termDesc;
    this.courseInstaceId = courseInstance;
}
/* HRB: end of class glossaryWord */

/* 
//	class defination of resourceItem
//	Object of this class can hold resource name and the resource (i.e. file) path 
*/
function resourceItem(resourceName, resourcePath, courseInstance) {
    this.resourceName = resourceName;
    this.resourcePath = resourcePath;
    this.courseInstaceId = courseInstance;
}
/* HRB: end of class resourceItem */


// set type of course
function setcomplianceType() {
    var sUrl = parent.parent.window.document.location.search;
    sUrl = sUrl.toUpperCase();

    if (sUrl.indexOf("AICC_URL") != -1) {
        g_complianceType = "AICC";
    } else {
        var api = getAPIHandle();

        if (api != null) {
            // TODO: check scorm type
            g_complianceType = "SCORM12";
        }
    }
}

// Gets progress information from LMS and cache it on client side.
function loadPage() {
    setcomplianceType();

    if (g_complianceType == "AICC") {
        aicc_loadPage();
    } else if (g_complianceType == "SCORM12") {
        sco_loadPage();
    }
}

// Updates progress information from cached data to LMS.
function updateCourse() {
    if (g_complianceType == "AICC") {
        aicc_updateCourse();
    } else if (g_complianceType == "SCORM12") {
        sco_updateCourse();
    }
}

// Updates progress information from cached data to LMS.
function commitProgressInfo() {
    if (g_complianceType == "AICC") {
        aicc_commitProgressInfo();
    } else if (g_complianceType == "SCORM12") {
        sco_commitProgressInfo();
    }
}

// Generates suspend data string for elements stored in xml.
function getSuspendData() {
    var suspend_data = document.progress.buildLMSDataPackage();
	
	//Adding current progress request total time in suspend data
	suspend_data = suspend_data + suspend_data_separator + "curReqTime=" + CurRequestTime;
    // add course completion percentage
    suspend_data = suspend_data + suspend_data_separator + "PercentCompletion=" + percentageOfCompletion;
    // add test attempts information
    suspend_data = suspend_data + suspend_data_separator + "TestAttempts=" + g_TestAttempts;

    return suspend_data;
}

function getProgressInfo() {
    if (g_complianceType == "AICC") {
        aicc_getProgressInfo();
    } else if (g_complianceType == "SCORM12") {
        sco_getProgressInfo();
    }
}

// Cache progress information from courseware.
function setDetails(element, value) {
    if (g_complianceType == "AICC") {
        aicc_setDetails(element, value);
    } else if (g_complianceType == "SCORM12") {
        sco_setDetails(element, value);
    }
}

// get progress information.
function getDetails(element) {
    //7-2-09: added return
    if (g_complianceType == "AICC") {
        return aicc_getDetails(element);
    } else if (g_complianceType == "SCORM12") {
        return sco_getDetails(element);
    }
}

// Remove all trailing and leading spaces since they are not significant.
function trimAllSpaces(input) {
    if (input) {
        return input.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        return "";
    }
}

function getXMLHttp() {
    var xmlHttp = null;

    try {  // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {  // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }

    return xmlHttp;
}

/************************************************************************************************/
// Below are the function related to time
/************************************************************************************************/

function startTimer() {
    g_startDate = new Date().getTime();
   g_curReqStartDate = g_startDate;
}

function computeTime() {
    var formattedTime = "";

    if (g_startDate != 0) {
        var currentDate = new Date().getTime();
        var elapsedSeconds = ((currentDate - g_startDate) / 1000);
        formattedTime = convertTotalSeconds(elapsedSeconds);
    } else {
        formattedTime = "00:00:00";
    }

    return formattedTime;
}

//Compute total time for each progress request
function computeCurReqTime(){
   var formattedTime = "";
   
   if ( g_curReqStartDate != 0 ){
	  var currentDate = new Date().getTime();
      var elapsedSeconds = ( (currentDate - g_curReqStartDate) / 1000 );
      formattedTime = convertTotalSeconds( elapsedSeconds );
   }else{
      formattedTime = "00:00:00";
   }

	return formattedTime;
}

/*******************************************************************************
** this function will convert seconds into hours, minutes, and seconds in
** CMITimespan type format - HHHH:MM:SS.SS (Hours has a max of 4 digits &
** Min of 2 digits
*******************************************************************************/

function convertTotalSeconds(ts) {
    var sec = (ts % 60);

    ts -= sec;
    var tmp = (ts % 3600);  //# of seconds in the total # of minutes
    ts -= tmp;              //# of seconds in the total # of hours

    // convert seconds to conform to CMITimespan type (e.g. SS.00)
    sec = Math.round(sec * 100) / 100;

    var strSec = new String(sec);
    var strWholeSec = strSec;
    var strFractionSec = "";

    if (strSec.indexOf(".") != -1) {
        strWholeSec = strSec.substring(0, strSec.indexOf("."));
        strFractionSec = strSec.substring(strSec.indexOf(".") + 1, strSec.length);
    }

    if (strWholeSec.length < 2) {
        strWholeSec = "0" + strWholeSec;
    }
    strSec = strWholeSec;

    if (strFractionSec.length) {
        strSec = strSec + "." + strFractionSec;
    }

    if ((ts % 3600) != 0)
        var hour = 0;
    else
        var hour = (ts / 3600);

    if ((tmp % 60) != 0)
        var min = 0;
    else
        var min = (tmp / 60);

    if ((new String(hour)).length < 2)
        hour = "0" + hour;
    if ((new String(min)).length < 2)
        min = "0" + min;

    var rtnVal = hour + ":" + min + ":" + strSec;

    return rtnVal;
}

// global variable definitions for subscription functionality.
var _MSGTOSHOW = false;

function findSubscription(win) {
    // Check to see if the window (win) contains the Subscription
    // if the window (win) does not contain the Subscription and
    // the window (win) has a parent window and the parent window  
    // is not the same as the window (win)
    var findSubscriptionTries = 0;

    try {
        while ((win.Subscription == null) && (win.parent != null) && (win.parent != win)) {
            // increment the number of findSubscriptionTries
            findSubscriptionTries++;

            // Note: 5 is an arbitrary number, but should be more than sufficient
            if (findSubscriptionTries > 5) {
                if (_MSGTOSHOW) {
                    alert("Error finding Subscription object -- too deeply nested.");
                    _MSGTOSHOW = false;
                }
                return null;
            }

            // set the variable that represents the window being 
            // being searched to be the parent of the current window
            // then search for the API again
            win = win.parent;
        }

        if ((win.Subscription == null) && (win.opener != null) && (typeof (win.opener) != "undefined")) {
            var theSubscription = findSubscription(win.opener);

            return theSubscription;
        }

        return win.Subscription;
    } catch (ex) {
        return null;
    }
}

/*******************************************************************************
**
** Function getSubscription()
** Inputs:  none
** Return:  If an tSubscription object is found, it's returned, otherwise null is returned
**
** Description:
** This function looks for an object named getSubscription, first in the current window's 
** frame hierarchy and then, if necessary, in the current window's opener window
** hierarchy (if there is an opener window).
**
*******************************************************************************/
function getSubscription() {
    var theSubscription = findSubscription(window);

    if ((theSubscription == null) && (window.opener != null) && (typeof (window.opener) != "undefined")) {
        theSubscription = findSubscription(window.opener);
    }
    if (theSubscription == null) {
        if (_MSGTOSHOW) {
            alert("Unable to find Subscription");
            _MSGTOSHOW = false;
        }
    }

    return theSubscription;
}

// Check browser type
/*
check the browser type
Return Value : type of Browser
*/
function checkBrowser() {
    if (/MSIE/i.test(navigator.userAgent)) {
        isIE = true;
        return 'IE';
    }
    else if (/FireFox/i.test(navigator.userAgent)) {
        isFF = true;
        return 'FF';
    }
    else if (/Chrome/i.test(navigator.userAgent)) {
        isChrome = true;
        return 'CHROME';
    }
    else if (/Safari/i.test(navigator.userAgent)) {
        isSafari = true;
        return 'SAFARI';
    }
    else if (/Macintosh/i.test(navigator.userAgent)) {
        isMac = true;
        return 'MAC';
    }
    /*
    if(navigator.platform.match("Mac"))
    {
    isMacOS=true;
    return 'MacOS';
    }*/
}

//Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
function enableFeedbackURL() {
	if (lessonMode == LESSON_PILOTTESTING_MODE && isCongratsLastPageSet) {
		if (parent.frames.frame_b.document.getElementById("divFeedback")) {
			document.getElementById('divFeedback').innerHTML = "<a href=\"javascript:parent.frames.frame_a.OpenLink('FEEDBACK')\">Feedback</a>"
			document.getElementById('divFeedback').style.cursor = "pointer";
			document.getElementById('divFeedback').style.display = "";
			isCongratsLastPageSet = false;
		}
		else {
			isFeedbackURLResponseSet = true;
		}
	}
}
//End HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode

//HRB : Start Add version info in help menu
function addVersionInfo(versionInfo)
{
	var versionStr="Version: ";
	if(!isMobileUserAgent)
	{
		if(isEbookCourseEnabled)
			versionStr= "Mobile Enabled Version: ";
	
		var helpL1Div=document.getElementById("helpL1");
		var versionAnchor=document.createElement("span");
		versionAnchor.className="clsGlossaryLinks";
		versionAnchor.style.cursor="default"
		versionAnchor.style.color="#90a0a8";
		versionAnchor.tabIndex="38";
		versionAnchor.style.border="4px solid transparent";
		versionAnchor.onfocus=function(){onfocuselement(this)};
		versionAnchor.onblur=function(){onblurelement(this)};
		versionInfo=versionInfo.replace("_",".");
		var finalStr=versionStr+versionInfo;
		versionAnchor.innerHTML=finalStr;
		var brEle=document.createElement("br");
		helpL1Div.appendChild(brEle);
		helpL1Div.appendChild(versionAnchor);
	}
	else
	{
	
		var helpDiv="";
		
		if(isEbook)
		{
			versionStr= "Mobile Enabled Version: ";
			helpDiv=document.getElementById("versionDiv");
			versionInfo=versionInfo.replace("_",".");
			var finalStr=versionStr+versionInfo;
			helpDiv.innerHTML='<div class="categoryRowTemplate_template" style="border-top-width:1px; background:#FAFAFA;" ><div class="toolsLabel_template ResourcesMenu " style="cursor:auto;">'+finalStr+'</div></div>'
			
		}else
		{
			helpDiv=document.getElementById("helpItem");
			var helpUL=helpDiv.getElementsByTagName("ul");
			var versionList=document.createElement("li");
			versionList.className="subcategoryrowtemplate_template";
			versionInfo=versionInfo.replace("_",".");
			var finalStr=versionStr+versionInfo;
			versionList.innerHTML='<div class="nonchapterlabel_template subChapterLabel_InActive_template" style="cursor:auto">'+finalStr+'</div>';
			helpUL[0].appendChild(versionList);
		}
	}
}
//HRB : End Add version info in help menu
