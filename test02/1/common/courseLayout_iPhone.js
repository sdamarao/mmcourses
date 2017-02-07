var interactivity_iPhone_timer=null;
var glossaryScroll=null;
var glossaryTextScroll=null;
var moveScrollForAPW4=null;
var navigateForAPW4=null;
var confirmCode=null;
var callFrom=null;
var menuOption=new Array ('outline','glossary','bookmarks');

			var curInterval = -1;
			var showInterval = 7000;
			
			
			var curSelectedView = "courseview";
			var isFirstCall = true;
			var curSubChapter = -1;
			var subChapterScroll=null;
			var bScroll = null;
			var openPopupScroll=null;
			function selectSubChapter(chapNo){
			    
				/*document.getElementById('back').innerHTML="Content";
				document.getElementById('back').addEventListener('click',function (){ selectOutlineFromSubChap();},false);
				document.getElementById('back').className=document.getElementById('back').className.replace("displayNone","displayVisible");
				document.getElementById('done').className=document.getElementById('done').className.replace("displayVisible","displayNone");*/
				showHideTabMenu_iphone('hide');
				document.getElementById("contentMenu").className="hideDiv hideAnimateDiv";
				//document.getElementById("outlineSubChapters_"+chapNo).className="courseMenuMain showDiv showAnimateDiv";
				document.getElementById("outlineSubChapters_"+chapNo).className="showDiv showAnimateDiv";
				if(subChapterScroll){
					subChapterScroll.destroy();
				}
				subChapterScroll=new iScroll("outlineSubChapters_CV_"+chapNo);
				curSubChapter = chapNo;
				
				//adjust main content div top, as on subchapter we close tabMenu div also refer in function TabMenu_iphone in common.js
				//adjustMainContentTop(false,false);
			}
			
			function selectOutlineFromSubChap(){
				
				document.getElementById("outlineSubChapters_"+curSubChapter).className=" hideDiv hideAnimatePopUpDivLR";
				document.getElementById('contentMenu').className="showDiv showAnimatePopUpDivLR";
				curSubChapter = -1;
				showHideTabMenu_iphone('show');
				clearInnerHtmlAndHideBackButton();
				document.getElementById('done').className=document.getElementById('done').className.replace("displayNone","displayVisible");
				//ref from common.js file
				//adjustMainContentTop(false,true);
			}
			
			function clearInnerHtmlAndHideBackButton(){
				document.getElementById('back').innerHTML='';
				document.getElementById('back').className=document.getElementById('back').className.replace("displayVisible","displayNone");
				document.getElementById('back').removeEventListener('click');
			}
			
			function hideTab(tabname){
				document.getElementById(tabname+'main').className="courseMenuMain hideDiv";
			}
			
			function selectMenu(viewName){
				if(viewName==curSelectedView && !isFirstCall){
					return;
				}
				//reset the maincontent div top which is set while bookmark click, ref in common.js file
				adjustMainContentTop(true,false);
				//document.getElementById(curSelectedView).style.backgroundColor = "";
				//document.getElementById(viewName).style.backgroundColor = "white";
				//document.getElementById(curSelectedView+"icon").src = document.getElementById(curSelectedView+"icon").src.replace("over","normal");
				//HideCourseNavigatorAndPrg('none');
				if(viewName == "courseview" && (curSelectedView=="bookmarks" || curSelectedView=="glossary"))
				{  
					document.getElementById(curSelectedView+'main').className="courseMenuMain hideDiv";
				}
				if(isFirstCall){
				     isFirstCall = false;
				}
				else if( (viewName == "outline" && curSelectedView=="courseview") )
				{
					if(curSubChapter > -1){
						document.getElementById("outlineSubChapters_"+curSubChapter).className="courseMenuMain hideDiv";
						
						curSubChapter = -1;
						document.getElementById('contentMenu').className="showDiv showAnimateDiv";
						document.getElementById(viewName+'main').className="courseMenuMain  showDiv";
					}
					document.getElementById("maincontent").className="hideByTop moveDown";
					//document.getElementById(viewName+'main').className="courseMenuMain showDiv moveUp";
					document.getElementById('menuParent').className="searchmain showDiv moveUp";
					
					document.getElementById(viewName+'main').className="courseMenuMain showDiv ";
				}
				else if(viewName == "courseview"){
				    
					document.getElementById("maincontent").className="showDiv moveUp";
					document.getElementById('menuParent').className="searchmain hideByTop moveDown";
					var temp=curSelectedView;
					var listener = function (event) {
										hideTab(temp);document.getElementById('menuParent').removeEventListener("webkitAnimationEnd",listener,false);
									};

					document.getElementById('menuParent').addEventListener("webkitAnimationEnd",listener,false);
					//document.getElementById(curSelectedView+'main').className="courseMenuMain hideDiv";
					setUnSetVideoSrc(true);
				}
				else{
				
					if(curSubChapter > -1){
					
						document.getElementById("outlineSubChapters_"+curSubChapter).className="hideDiv hideAnimateDiv";
						curSubChapter = -1;
						document.getElementById('contentMenu').className="showDiv showAnimateDiv";
					}else{
						
						document.getElementById(curSelectedView+'main').className="courseMenuMain hideDiv";
						document.getElementById(viewName+'main').className="courseMenuMain  showDiv";
					}
					
				}
				//document.getElementById(viewName+"icon").src = document.getElementById(viewName+"icon").src.replace("normal","over");
				curSelectedView = viewName;
				SelectedMenu(viewName);
				switch(viewName){
					
					case "courseview":
						//bodyBackground(false);
						HideCourseNavigatorAndPrg('');
						showHideTab_iphone('hide');
						hideShowBookMark('show');
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "outline":
					    //bodyBackground(true);
						adjustMainContentTop(false,true);
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "glossary":
						if(glossaryScroll!=null){
							glossaryScroll.destroy();
						}
						glossaryScroll =new iScroll("glsItem");
						//bodyBackground(true);
						adjustMainContentTop(false,true);
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "bookmarks":
					    //bodyBackground(true);
						adjustMainContentTop(false,true);
						if(bScroll!=null)
						bScroll.destroy();
						bScroll=new iScroll('bookmarkItem');
						break;
					case "search":
						document.getElementById('searchFieldDiv').className = "searchFieldFocus";
						break;
					case "tools":
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "print":
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "help":
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
				}
			}
			
			
			function bodyBackground(set){
			    
				var body=document.getElementsByTagName("body")[0];
				if(set==true){
					body.style.background="url(common/images/backgroundStripes.PNG)"
				}
				else{
					body.style.background="white"
				}
			}
			
			function SelectedMenu(viewName){
			  for(var i=0;i<menuOption.length;i++){
				var element=document.getElementById(menuOption[i]);
				var temp = "menubutton"+menuOption[i]+"Active";
				var ele = element.className;
				if(element!=null && element!='undefined'){
					element.className=ele.replace(temp,'');
					temp = "menubutton"+menuOption[i]+"Inactive";
					ele=element.className;
					element.className=ele.replace(temp,"")+" menubutton"+menuOption[i]+"Inactive";
					
					if(menuOption[i]==viewName){
						element.className=element.className+" menubutton"+menuOption[i]+"Active";
						}
					}

			  }
			}
		
			
			function animationStart(event) {
				/*document.getElementById('parentDiv'+hiddenParent).className = 'contentDv zindexLow';	
				if(curParent == '1'){
					curParent = '2';
					hiddenParent = '1';
				}else{
					curParent = '1'
					hiddenParent = '2';
				}*/
				
			}
			
			function animationEnd(event) {
				
				//document.getElementById('parentDiv'+hiddenParent).className = 'contentDv zindexLow';	
				//document.getElementById('parentDiv'+curParent).className = 'contentDv zindexHigh';	
				//document.getElementById('parent'+hiddenParent).contentWindow.navigatePage(pageList[pageToBeLoaded][0]);
			}
		
			
			function attachEventHandler() {
                //document.getElementById('maincontent').addEventListener( 'webkitAnimationEnd', function(event){animationEnd(event)}, false );
				//document.getElementById('parentDiv2').addEventListener( 'webkitAnimationEnd', function(event){animationEnd(event)}, false );
				//document.getElementById('maincontent').addEventListener( 'webkitAnimationStart', function(event){animationStart(event)}, false );
				//document.getElementById('parentDiv2').addEventListener( 'webkitAnimationStart', function(event){animationStart(event)}, false );
				//document.getElementById('parent'+hiddenParent).contentWindow.navigatePage(pageList[pageToBeLoaded][0]);
				document.getElementById("searchField").addEventListener( 'keydown', function(event){searchKeyPress(event)}, false );;
            }
	
	function searchFieldOnFocus(){
		document.getElementById('searchFieldDiv').className = "searchFieldFocus";
	}
	
	function searchFieldOnBlur(){
		document.getElementById('searchFieldDiv').className = "searchFieldBlur";
	}
	function HideCourseNavigatorAndPrg(display){
		//document.getElementById('buttons').style.display=display;
		//document.getElementById('OuterProgressBarBlock').style.display=display;
		//document.getElementById('PrevButton').style.display=display;
		//document.getElementById('PrevButtonDisabled').style.display=display;
		//document.getElementById('NextButton').style.display=display;
		//document.getElementById('NextButtonDisabled').style.display=display;
		//document.getElementById('InnerProgressBarBlock').style.display=display;
		//document.getElementById('divText').style.display=display;
		//document.getElementById('subchaptertitle').style.display=display;
		document.getElementById('showQuestionNumber').style.display=display;
		document.getElementById('submittest').style.display=display;
		document.getElementById('submittest_disable').style.display=display;
		document.getElementById('questionControlPanel').style.display=display;
	}
	
	function hideShowSearch(action){
		
	   if(action=='show'){
	   HideCourseNavigatorAndPrg('none');
		//bodyBackground(true);
		document.getElementById("searchmain").className="searchmain showDiv moveUp ";
		//document.getElementById("searchmain").addEventListener("webkitAnimationEnd", function(){bodyBackground(true);},false)
		hideShowMainContain('hide');
		hideShowBookMark('hide');
		setUnSetVideoSrc(false);
	   }
	   else
	   {
		//bodyBackground(false);
		 HideCourseNavigatorAndPrg('');
		document.getElementById("searchmain").className="searchmain hideByTop moveDown ";
		hideShowMainContain('show');
		hideShowBookMark('show');
		setUnSetVideoSrc(true);
	   }
	}
	
	function hideShowMainContain(action){
		if(action=="show"){
			document.getElementById("maincontent").className="showDiv moveUp ";
			hideShowHeaderFooter_iphone('show');
		}
		else{
			document.getElementById("maincontent").className="hideByTop moveDown ";
			hideShowHeaderFooter_iphone('');
		}
	}
	
	function ShowMainContent_iphone(page){
		int_HighLightMe = false;
		highlightMe=true;
		//The courseviewmain class is set for to add the animation effect.
		hideShowSearch('hide');
		if(mode=="review" || mode =="retake"){
			if(mode=="review")
				str = SWITCH_FROM_REVIEW;
			else
				str = SWITCH_FROM_RETAKE;
			if(isMobileUserAgent){
				outlineflag=0;
				if(isIphoneDevice){
					showIPhoneConfirm('',str,page,"search");
					return;
				}
				else{
					showConfirmPopup('',str,page,"search");
					return;
				}
			}else{
				var res = confirm(str);
				if(!res){
					return;
				}
			}
			
		}

		mode = 'study';
		resetFirstLastPage(); //HRB: Added to reset first and last page of CurrentChapter when going to search result from confirmation page.
		ShowStudyPage(page);
	}
	var supplementScroll=null;
	//added new function to show supplement and hide supplement
	function selectSupplements(){
		if(supplementScroll==null){
			supplementScroll=new iScroll("supplementsItem");
		}
		document.getElementById("supplementsParent").className="glossaryParent showDiv showAnimateDiv";
		document.getElementById("contentMenu").className="hideDiv hideAnimateDiv";
	}
	
	function selectCourseViewFromSupplements(){
		document.getElementById("supplementsParent").className="hideDiv hideAnimatePopUpDivLR";
		document.getElementById("contentMenu").className="showDiv showAnimatePopUpDivLR ";
	}
	
	function hideShowCalculator(action){
		if(action=="hide"){
			HideCourseNavigatorAndPrg('');
			document.getElementById("maincontent").className="showdiv moveUp";
			document.getElementById('calculatoriFrameParent').className=" hideByTop moveDown";
			setUnSetVideoSrc(true);
		}
		else{
			 HideCourseNavigatorAndPrg('none');
			document.getElementById("maincontent").className="hideByTop moveDown";
			document.getElementById('calculatoriFrameParent').className="calculatorBackground showDiv moveUp";
			setUnSetVideoSrc(false);
		}
	}
	
	 function pload(subchaptercount){
		s = new iScroll("outlinemainCV");
		
		//to test on safari desktop this statement are commented
		/*if((/iphone/gi).test(navigator.appVersion))
			document.body.style.zoom=screen.width/(51*2.6)*/
        document.ontouchmove=function(e){
            e.preventDefault();
        }
		if(document.captureEvents){
			document.captureEvents(Event.CLICK);
		}
		
	}
	
	function hideGradedAnswers(){
		document.getElementById("gradedAnsParent").className="hideDiv hideAnimateDiv";
		document.getElementById("gradedMask").style.visibility = "visible";
		document.getElementById("gradedAns").style.visibility = "hidden";
		document.getElementById("gradedAns").innerHTML = "";
	}
	
	function hideVideoTranscript(){
		document.getElementById("videoTrans").className="hideDiv hideAnimatePopUpDivLR";
		document.getElementById("content").className="showDiv showAnimatePopUpDivLR";
		setUnSetVideoSrc(true);
	}
	
	function hideToolsIFrameDiv(){
		document.getElementById("toolsiframe").src='';
	if(pageOrigin=="course"){
		document.getElementById("toolsiFrameParent").className="hideDiv hideAnimateDiv";
		document.getElementById("maincontent").className="showDiv showAnimateDiv";
		document.getElementById("menuParent").className="hideDiv";
	}
	else{
		document.getElementById("toolsiFrameParent").className="hideDiv hideAnimateDiv";
		document.getElementById("supplementsParent").className="showDiv showAnimateDiv";
	}
	}
	
	function showCertificateIFrameDiv(){
		document.getElementById("certificateiFrameParent").className="showDiv showAnimateDiv";
		document.getElementById("menuParent").className="searchmain hideDiv hideAnimateDiv";	
	}
	
	function hideCertificateIFrameDiv(){
		document.getElementById("certificateiFrameParent").className="hideDiv hideAnimateDiv";
		document.getElementById("menuParent").className="searchmain showDiv showAnimateDiv";
	}
	
	//@sha to show header footer div on content click
	function showHeaderFooter(event,doNotSetTimeOut)
	{
		if(doNotSetTimeOut==null || doNotSetTimeOut==false)
			setTimeout(hideShowHeaderFooter_iphone,10000);
		if(document.getElementById("header").className.indexOf("displayNone")>0)
		{
			hideShowHeaderFooter_iphone("show");
		}
		else
		{
			hideShowHeaderFooter_iphone();
		}
	}

	//Added to hide show  tab Menu
	function TabMenu_iphone()
	{
		if(mode=="test" || mode=="review" || mode=="retake")
		{
			HideCourseNavigatorAndPrg('none');
		}
		showHideTab_iphone('show');
		hideShowHeaderFooter_iphone();
		selectMenu("outline");
		adjustMainContentTop(false,true);
		hideShowBookMark('hide');
		setUnSetVideoSrc(false);
	}

	function adjustMainContentTop(setToZero, addTabMenuHeight){
	    document.getElementById("maincontent").style.position="absolute";
		if(setToZero!=null && setToZero==true)
		{
			document.getElementById("maincontent").style.top=0;
			return;
		}
		var tabTop_OffsetHeight=document.getElementById("tabTop").offsetHeight;
		var tabMenu_OffsetHeight=document.getElementById("tabMenu").offsetHeight;
		var adjustmentInTop=-10;
		var finalTop=0;
		if(addTabMenuHeight==true)
		{
			finalTop=tabTop_OffsetHeight+tabMenu_OffsetHeight-adjustmentInTop;
		}
		else 
		{
			finalTop=tabTop_OffsetHeight-adjustmentInTop;
		}
		document.getElementById("maincontent").style.top=tabTop_OffsetHeight+tabMenu_OffsetHeight-adjustmentInTop;
	}

	function showHideTab_iphone(action)
	{
		//document.getElementById("menuParent").className=action=="show"?"displayVisible":"displayNone";
		showHideTabMenu_iphone(action);
		//clear back div innerhtml and eventListener
		document.getElementById("back").innerHTML='';
		document.getElementById("back").removeEventListener('click');
	}

	function  showHideTabMenu_iphone(action)
	{
			document.getElementById("tabMenu").className=action=="show"?"displayVisible":"displayNone";;
	}

	function showGlossary_iphone(pageOrigin)
	{
		var tempGlossDescription;
		var index;
		var lastIndex;
		
		var glossaryText=document.getElementById('glossaryText');
		glossDescription=document.getElementById("glossiframe").contentWindow.document.body.innerHTML;
		
		if(glossDescription!=''){
				if(pageOrigin=="search"){
					document.getElementById("glossaryTextParent").className="glossaryParent showDiv showAnimateDiv";
					document.getElementById("searchmain").className="searchmain hideDiv hideAnimateDiv";
					document.getElementById("backGlossary").innerHTML = "Search";
				}else{
					document.getElementById("glossaryTextParent").className="glossaryParent showDiv showAnimateDiv";
					document.getElementById("contentMenu").className="hideDiv hideAnimateDiv";
					document.getElementById("backGlossary").innerHTML = "Glossary";
				}
		     
			
			
			//document.getElementById('back').innerHTML="Glossary";
			//document.getElementById('back').addEventListener('click',function (){ showGlossaryMenu_iphone();},false);
			//document.getElementById('back').className=document.getElementById('back').className.replace("displayNone","displayVisible");
			//document.getElementById('done').className=document.getElementById('done').className.replace("displayVisible","displayNone");
			//showHideTabMenu_iphone('hide');
			index = glossDescription.indexOf("<h3>");
			lastIndex = glossDescription.indexOf("</h3>");
			tempGlossDescription = glossDescription.substring(0,index);
			tempGlossDescription = tempGlossDescription+glossDescription.substring(lastIndex,glossDescription.length);
			glossDescription = tempGlossDescription;
			glossDescription = "<h3>"+document.getElementById("glossiframe").contentWindow.document.title+"</h3>"+tempGlossDescription;
			if(highlightMe){
			highlightMe = false;
			//start for discription
			forSerachKey=glossDescription;	
			forSerachKey=genrateHighlightData(forSerachKey);
			glossDescription = forSerachKey;
			}
			//end
			glossaryText.innerHTML=glossDescription;
			if(glossaryTextScroll!=null)
				glossaryTextScroll.destroy();
				
			glossaryTextScroll=new iScroll("glossaryText");
		}
	}

	function showGlossaryMenu_iphone(){
		if(pageOrigin=="search"){
			document.getElementById("glossaryTextParent").className="hideDiv hideAnimatePopUpDivLR";
			document.getElementById("searchmain").className="searchmain showDiv showAnimatePopUpDivLR";
		}else{
		
			var glossaryTextParent=document.getElementById('glossaryTextParent');
			glossaryTextParent.className="glossaryTextParent hideDiv hideAnimatePopUpDivLR";
			document.getElementById("contentMenu").className="showDiv showAnimatePopUpDivLR";
		}
		
		//document.getElementById('back').innerHTML="";
		//document.getElementById('back').removeEventListener('click');
		//document.getElementById('back').className=document.getElementById('back').className.replace("displayVisible","displayNone");
		//document.getElementById('done').className=document.getElementById('done').className.replace( "displayNone","displayVisible");
		//showHideTabMenu_iphone('show');
	}
	
	function closePopUp()
	{
		
		outlineflag=0;
		document.getElementById('popupL').style.visibility = "hidden";
		document.getElementById('confirmPopupL').style.visibility = "hidden";
		document.getElementById('backgroundpopup').style.visibility = "hidden";
		document.getElementById(currentDivId).style.backgroundColor = '';
		
		hideIPhonePopup();
		//hideIPhoneconfirmPopup();
					
		//Added for MCQ Interactivity. To show the next question when popup is closed.
		if(mcq_currentQuestionId!=null && mcq_currentQuestionId != 'undefined' && mcq_currentQuestionId>=0 && gbl_mcqSubmitClicked){
			try
			{
				gbl_mcqSubmitClicked=false;
				mcq_currentQuestionId=mcq_currentQuestionId+1;
				if(mcq_QuestionArr.length > mcq_currentQuestionId)
				{
					showMCQQuestions(mcq_currentQuestionId);
				}
			}
			catch(err){}
		}
		
		//Added to reset the backgorund image for Click and Reveal 
		if($get('iExample' + mcar1_id) != null && mcar1_id != -1)
		{
			$get('iExample' + mcar1_id).style.background ='url('+mcar1_InActiveImage+')';
			mcar1_id = -1;
		}
		
		//Added to reset the backgorund image for Concentric Circle
		if($get('contentConcentricCircle') != null && concentricCircle_id != -1)
		{
			$get('l'+concentricCircle_id).style.backgroundImage='url('+concentricCircleInActiveImage+')';
			concentricCircle_id = -1;
		}
		
		//Added to reset the backgorund image for Interactivity
		if($get('contentSteps') != null && steps_id != -1)
		{
			$get('step'+steps_id).src=steps_InActiveImages[steps_id-1];
			steps_id = -1;
		}
		
		//Added for Matching Interactivity. To disable the background.
		if($get('contentMatching') != null){
			try{
				HideMatchingPopup();
			}
			catch(err){}
		}
		
	}

//Start HRB: Added to show the popup for interactivity and Set title and description.
function showIPhonePopup(title, description, interactivityPopup){
	if(openPopupScroll!=null){ openPopupScroll.destroy();}

	if(interactivityPopup != null && interactivityPopup == true)
	{
		$get('bottom').className="popBottom popBottomok";
	}
	$get('backgroundpopup').style.visibility='visible';
	$get('popupL').style.visibility='visible';
	$get('popupL').style.display='block';
	$get('popuptitle').innerHTML=title;
	forSerachKey=description;
	if(int_HighLightMe){
		forSerachKey=genrateHighlightData(forSerachKey);
	}
	$get('popupL1').innerHTML=forSerachKey;
	//$get('popupL1').innerHTML=description;

	openPopupScroll = new iScroll("popupL1");
	
}
//End HRB: Added to show the popup for interactivity and Set title and description.

//Start HRB: Added to hide the popup for interactivity and Reset title and description.
function hideIPhonePopup(){
	if(openPopupScroll!=null){ openPopupScroll.destroy();}

	$get('bottom').className="popBottom";
	$get('backgroundpopup').style.visibility='hidden';
	$get('popupL').style.display='none';
	$get('popuptitle').innerText='';
	$get('popupL1').innerText='';
}
//End HRB: Added to hide the popup for interactivity and Reset title and description.

//HRB: Function to close search result
function closeSerachResultsIphone()
{
document.getElementById('searchText').value = "";
DoSearchData();
}

//@sha Newly added function for iphone to hide the header and footer div after 3 sec
function hideShowHeaderFooter_iphone(action){
	var headerDiv=document.getElementById("header");
	var footerDiv=document.getElementById("footer");
	if(action=="show"){
		footerDiv.className=" displayVisible";
		headerDiv.className=" displayVisible";
	}
	else{
		headerDiv.className=" displayNone";
		footerDiv.className=" displayNone";
	}
}

function hideShowHelp(action){
		
   if(action=='show'){
   HideCourseNavigatorAndPrg('none');
	//bodyBackground(true);
	document.getElementById("helpMain").className="searchmain showDiv moveUp ";
	//document.getElementById("searchmain").addEventListener("webkitAnimationEnd", function(){bodyBackground(true);},false)
	hideShowMainContain('hide');
	hideShowBookMark('hide');
	setUnSetVideoSrc(false);
   }
   else
   {
	//bodyBackground(false);
	 HideCourseNavigatorAndPrg('');
	document.getElementById("helpMain").className="searchmain hideByTop moveDown ";
	hideShowMainContain('show');
	hideShowBookMark('show');
	setUnSetVideoSrc(true);
   }
}
var helpContentScroll=null; 
function showHelpsFrame(loc){
	document.getElementById("backgroundpopup").style.visibility = "visible";
	document.getElementById("helpiframe").src=loc;
	document.getElementById("helpiFrameParent").className="showDiv showAnimateDiv";
	document.getElementById("helpMain").className="hideDiv hideAnimateDiv";
	document.getElementById("helpMain").addEventListener("webkitAnimationEnd", function(){document.getElementById("backgroundpopup").style.visibility = "hidden";},false)
	
}

function hideHelpIFrameDiv(){
	document.getElementById("helpiFrameParent").className="hideDiv hideAnimatePopUpDivLR";
	document.getElementById("helpMain").className="searchMain showDiv showAnimatePopUpDivLR";
}

function showIPhoneConfirm(title, description, code, from){
	if(openPopupScroll!=null){ openPopupScroll.destroy();}

	$get('backgroundpopup').style.visibility='visible';
	$get('confirmPopupL').style.visibility='visible';
	$get('confirmPopupL').style.display='block';
	$get('confirmPopuptitle').innerHTML=title;
	$get('confirmPopupL1').innerHTML=description;

	openPopupScroll = new iScroll("confirmPopupL1");
	confirmCode=code;
	callFrom=from;
	
}


function closeconfirmPopUpOk()
	{
		
		if(callFrom=="sc")
			Sc(confirmCode);
		else if(callFrom=="St")
			St(confirmCode);
		else
		{
			mode = "study";
			ShowMainContent_iphone(confirmCode);
		
		}
		hideIPhoneconfirmPopup();
		
		
	}
function closeconfirmPopUp()
	{
		hideIPhoneconfirmPopup();
	}
	
function hideIPhoneconfirmPopup(){
		outlineflag=0;
		document.getElementById('confirmPopupL').style.visibility = "hidden";
		document.getElementById('backgroundpopup').style.visibility = "hidden";
		document.getElementById(currentDivId).style.backgroundColor = '';
		$get('confirmPopuptitle').innerText='';
		$get('confirmPopupL1').innerText='';
}