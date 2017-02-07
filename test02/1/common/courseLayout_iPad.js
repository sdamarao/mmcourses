var interactivity_iPad_timer=null;
var glossaryTextScroll=null;
var moveScrollForAPW4=null;
var navigateForAPW4=null;
var openPopupScroll=null;
var confirmCode=null;
var callFrom=null;
var menuOption=new Array ('outline','glossary','bookmarks');
			
			var curSelectedView = "";
			var isFirstCall = true;
			var curSubChapter = -1;
			var subChapterScroll=null;
			var outlineScroll_ipad=null;
			var searchScroll_ipad = null;
			var glossaryItemScroll_ipad=null;
			var toolsItemScroll_ipad=null;
			var bookmarkScrollFor_ipad=null;
			
			
			
			function selectSubChapter(chapNo){
				//check condition for animation.
				if(document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv")
				{
					document.getElementById('gotoscrollpopup').className="hideDiv hideAnimateDiv";
					document.getElementById("outlineSubChapters_"+chapNo).className="courseMenuMain showDiv showAnimateDiv";
				}
				// change for the new outline structure.
				//document.getElementById("outlinemain").className="outlinemain hidePopUpDiv hideAnimatePopUpDiv";
				
				
				//document.getElementById('popupheader').innerHTML = "";
				document.getElementById('gotoscrollpopup').className="hideDiv hideAnimatePopUpDiv";
				document.getElementById("outlineSubChapters_"+chapNo).className="outlinesubchapterscrollpopup showDiv showAnimatePopUpDiv";
				document.getElementById("outlinesubchapterscrollpopup").className="outlinesubchapterscrollpopup showDiv";
				curSubChapter = chapNo;
					var newStr = "subchapItem_" + chapNo;
					if(subChapterScroll!=null)subChapterScroll.destroy();
					subChapterScroll = new iScroll(newStr);
				if(outlineScroll_ipad!=null)outlineScroll_ipad.destroy();
						outlineScroll_ipad = new iScroll("chapItem");
			}
			
			function selectOutlineFromSubChap(){
				document.getElementById("outlineSubChapters_"+curSubChapter).className="courseMenuMain hideDiv hideAnimateDivLR";
				document.getElementById('outlinemain').className="courseMenuMain showDiv showAnimateDivLR";
				curSubChapter = -1;
				
			}
			
		function selectMenu(viewName){
				//Set the courseTitle position.
				setCourseTitlePosition();
				//This condition is added for animation effect.
				if(document.getElementById('courseviewmain').className =="courseMenuMain showDiv showAnimateDiv");
				{
					document.getElementById('courseviewmain').className = "courseMenuMain showDiv"
				}
				if(document.getElementById('searchscrollpopup').className == "searchscrollpopup showDiv")				
				{
					if(document.getElementById('courseviewmain').className =="courseMenuMain showDiv showAnimateDiv")
					{
						document.getElementById('courseviewmain').className = "courseMenuMain showDiv"
					}
					if(document.getElementById('courseviewmain').className == "courseMenuMain showDiv")
					{	
						document.getElementById('courseviewmain').className = "courseMenuMain showDiv showAnimateDiv"
					}
				}
				//This condition is added for to check curSelectedView is outline.then it will convert into courseview.
				if(curSelectedView == "outline")
				{
					//curSelectedView = "courseview";
				}
				// This condition is added for to display the subchapter content.In this we set the curselectedview as a outline.
				if(document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv")
				{
					curSelectedView = "outline";
				}
				
				try
				{
				    if(viewName=="courseview")
					 closePopUp();
				}
				catch(err){
					alert('close popup: '+err);
				}
				//document.getElementById(curSelectedView+"icon").src = document.getElementById(curSelectedView+"icon").src.replace("over","normal");
				//HideCourseNavigatorAndPrg('none');
				if(isFirstCall){
					isFirstCall = false;
				}else{
					
					if(curSubChapter > -1){
						document.getElementById("outlineSubChapters_"+curSubChapter).className="courseMenuMain hideDiv";// hideAnimateDiv
						curSubChapter = -1;
					}else{	
						//check condition for animation.
						if(document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv")
						{
							document.getElementById(curSelectedView +'main').className="courseMenuMain hideDiv hideAnimateDiv";
						}
					}
					//check condition for animation.
					if(document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv")
					{
						//setContentClassName(viewName);
						document.getElementById(viewName+'main').className="courseMenuMain showDiv showAnimateDiv";
					}
				}
				
				if(viewName.toLowerCase()=="outline" || viewName.toLowerCase()=="glossary" || viewName.toLowerCase()=="bookmarks"){
					document.getElementById(viewName+"main").className = "glossarymain showPopupDiv ";//showAnimatePopUpDiv			    
					if(curSelectedView.toLowerCase()!='courseview' && curSelectedView!=viewName){
						document.getElementById(curSelectedView+"main").className = "glossarymain  hidePopUpDiv ";//hideAnimatePopUpDiv
						}
					SelectedMenu(viewName);
				}
				//document.getElementById(viewName+"icon").src = document.getElementById(viewName+"icon").src.replace("normal","over");
				//This curSelectedView is commented for the new layout structure.
				curSelectedView = viewName;
				
				
				switch(viewName){
					case "courseview":
						//HideCourseNavigatorAndPrg('');
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "outline":
						//document.getElementById('searchFieldDiv').className = "searchFieldHide";
						//document.getElementById('outlinemain').className = "outlinemain showDiv";
						//document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv ";
						//SelectedMenu(viewName);
						if(outlineScroll_ipad!=null)outlineScroll_ipad.destroy();
						outlineScroll_ipad = new iScroll("chapItem");
						
						break;
					case "glossary":
						//document.getElementById('searchFieldDiv').className = "searchFieldHide";
						//document.getElementById('glossarymain').className = "glossarymain showDiv showAnimatePopUpDiv";
						//document.getElementById('gotoscrollpopup').className = "gotoscrollpopup hidePopUpDiv hideAnimatePopUpDiv";
						//SelectedMenu(viewName);
						break;
					case "bookmarks":
						//document.getElementById('searchFieldDiv').className = "searchFieldHide";
						//document.getElementById('bookmarksmain').className = "bookmarksmain showDiv showAnimatePopUpDiv";
						//document.getElementById('gotoscrollpopup').className = "gotoscrollpopup hidePopUpDiv hideAnimatePopUpDiv";
						//SelectedMenu(viewName);
						break;
					case "search":
						document.getElementById('searchFieldDiv').className = "searchFieldFocus";
						break;
					case "tools":
						document.getElementById('toolsmain').className = "toolsmain showDiv showAnimatePopUpDiv";
						document.getElementById('gotoscrollpopup').className = " hidePopupDiv hideAnimatePopUpDiv";
					
						break;
					case "print":
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
					case "help":
						document.getElementById('searchFieldDiv').className = "searchFieldHide";
						break;
				}
			}
			
			
			
			
			function setContentClassName(viewName)
			{
				if(document.getElementById('content').className == "")
				{
					
					document.getElementById('content').className = "contentDv hideDiv hideAnimateDiv"
					document.getElementById('content1').className = "contentDv showDiv showAnimateDivOut"
//					document.getElementById(viewName+'main').className="courseMenuMain showDiv showAnimateDiv";
				}
			}
			
			function animationStart(event) {
				document.getElementById('parentDiv'+hiddenParent).className = 'contentDv zindexLow';	
				if(curParent == '1'){
					curParent = '2';
					hiddenParent = '1';
				}else{
					curParent = '1'
					hiddenParent = '2';
				}
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
	
	function searchKeyPress(event){
		if(event.which==13){
			//document.getElementById('searchFieldDiv').className = "searchFieldFocus";
			if(document.getElementById("searchField").value.length>0){
				selectMenu('search');
			}
		}
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
		document.getElementById('subchaptertitle').style.display=display;
		document.getElementById('showQuestionNumber').style.display=display;
		document.getElementById('submittest').style.display=display;
		document.getElementById('submittest_disable').style.display=display;
		document.getElementById('questionControlPanel').style.display=display;
	}
	
	/* Add this function for ipad new search layout  */
	function ShowMainContent_iphone(page)
	{
		int_HighLightMe = false;
		highlightMe=true;
		//The courseviewmain class is set for to add the animation effect.
		document.getElementById('courseviewmain').className = "courseMenuMain showDiv";
		hideShowSearch('gotosearchpopupL');
		closePopUp();
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
		
		mode='study';
		resetFirstLastPage();	//HRB: Added to reset first and last page of CurrentChapter when going to search result from confirmation page.	
		ShowStudyPage(page);
		
	}	

		
	function hideShowSearch(id)
	{
		document.getElementById('searchText').style.visibility = "hidden";
		document.getElementById('searchText').style.display = "none";
		document.getElementById('gotosearchpopupL').style.visibility = "hidden";
	}

	/*End */

	function setCourseTitlePosition()
	{
		
		course_title = document.getElementById('coursetitle').innerHTML
		AdjustCourseTitle(course_title)
	}
	
function callSearchFns()
{
	if(document.getElementById('searchText').value == "")
	{
		clearSearchText();
	}
	else
	{
		DoSearch_ipad();
	}
}

//hrb-end:niket search the text.
function DoSearch_ipad()
{
	document.getElementById("searchL1").style.visibility = "";
	document.getElementById('searchText').style.display = "block";
	document.getElementById("searchL1").innerHTML = 'Please wait...<br>';
var ulstart="<ul class='categoryList'> ", ulend=" </ul> ";
	if (Search == null)
	{
		document.progress.SearchString(document.getElementById("searchText").value.trim());
		var OutputTarget = "";
		OutputTarget = document.progress.DoSearch();
		document.getElementById("searchL1").innerHTML =ulstart+ document.progress.SearchResults()+ulend;
	}
	else
	{
		Search.SearchString(document.getElementById("searchText").value);
		var OutputTarget = "                                                      ";
		OutputTarget = Search.doSearch();
		
		document.getElementById("searchL1").innerHTML =ulstart+ Search.SearchResults()+ulend;
	}
   if(searchScroll_ipad!=null){
		searchScroll_ipad.destroy();
	}
    searchScroll_ipad = new iScroll("searchL1");
}

function clearSearchText()
{
	if(document.getElementById('searchText').value == "")
	{
		document.getElementById('searchL1').innerHTML = "";
	}
}
	
  function pload(subchaptercount){
		document.ontocuhmove=function (e){
			e.preventDefault();
		}
		
		/*for (i=1 ; i<=subchaptercount; i ++)
		{
			newStr = "subchapItem_" + i;
			d = new iScroll(newStr);
		}*/
	}
	
	
	/* popup related functions */
	function showGotoPopUp()
	{
		var desiredProduct=document.getElementById("desired-product-behavior");
		//check that is it study question page show that means glossary comes in study question response so didn't close popup
		if((!desiredProduct) ||(desiredProduct &&  desiredProduct.value!="study"))
		{
			closePopUp();
		}
		
		hideShowBookmarkIcon("none");
		hideShowVideoControl("none");
		document.getElementById('gotoUpArrow').style.display = "";
		document.getElementById('gotoUpArrow').className="gotoArrow outlineArrow";
		document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		//document.getElementById('searchscrollpopup').className="searchscrollpopup hideDiv"
		
		
		if(document.getElementById('gotosearchpopupL').style.display="block")
		{
			document.getElementById('gotosearchpopupL').style.display="none";
		}
		if(document.getElementById('gotocalcpopupL').style.display="block")
		{
			document.getElementById('gotocalcpopupL').style.display="none";
		}
		//Set the popup style display.
		setPopUpvisibility();
		//Check this condition for animation effect.
		if(document.getElementById('outlinemain').className == "outlinemain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('outlinemain').className = "hideDiv";
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		}
		if(document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv")
		{
			document.getElementById('outlinesubchapterscrollpopup').className = "outlinesubchapterscrollpopup hideDiv";
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		}
		if(document.getElementById('glossarymain').className == "glossarymain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('glossarymain').className = "glossarymain hidePopUpDiv";
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		}
		if(document.getElementById('glossarycontent').className.indexOf("showPopupDiv")!=-1 )
		{
			document.getElementById('glossarycontent').className = "glossarycontent hidePopUpDiv";
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		}

		if(document.getElementById('bookmarksmain').className == "bookmarksmain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('glossarymain').className = "glossarymain hidePopUpDiv";
			document.getElementById('glossarycontent').className = "glossarycontent hidePopUpDiv";
			document.getElementById('outlinemain').className = "outlinemain hidePopUpDiv";
			document.getElementById('bookmarksmain').className = "bookmarksmain hidePopUpDiv";
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		}
		if(document.getElementById('toolsmain').className == "toolsmain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('toolsmain').className = "toolsmain hidePopUpDiv";
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
		}
		
		document.getElementById('gotopopupL').style.visibility = "";
		document.getElementById('gotopopupL').style.display = "block";
		document.getElementById('subChapterBack').style.display = "none";
		document.getElementById('popupheader').innerHTML = "Go to";
		document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv ";
		//selectMenu("outline");
		showOutLine();
		SelectedMenu("outline");
		curSelectedView="outline";
		document.getElementById(curSelectedView+"main").className = "glossarymain showPopupDiv";	
		hideShowBookmark();
		hideShowGotoPopupBorder('');
		
	}
	
	
// This function shows the gotopopup.
    
	function showOutLine()
	{
		//Set the popup style display.
		setPopUpvisibility();
		document.getElementById('gotopopupL').style.visibility = "";
		if(outlineScroll_ipad!=null)outlineScroll_ipad.destroy();
		outlineScroll_ipad = new iScroll("chapItem");
	}
    
	function showGlossary()
	{
		//Set the popup style display.
		setPopUpvisibility();
		document.getElementById('gotopopupL').style.visibility = "";
		if(glossaryItemScroll_ipad!=null) glossaryItemScroll_ipad.destroy();
		glossaryItemScroll_ipad=new iScroll("glsItem");
	}

	
	function showBookmarks()
	{
		//Set the popup style display.
		setPopUpvisibility();
		document.getElementById('gotopopupL').style.visibility = "";
		if(bookmarkScrollFor_ipad!=null){
			bookmarkScrollFor_ipad.destroy();
		}
		bookmarkScrollFor_ipad = new iScroll("bookmarkItem");
	}

	
	function showTools()
	{
		//Set the popup style display.
		setPopUpvisibility();
		document.getElementById('gotopopupL').style.visibility = "";
		if(toolsItemScroll_ipad!=null)toolsItemScroll_ipad.destroy();
		toolsItemScroll_ipad = new iScroll("toolsItem");
	}

	//This function shows the previous menus.
	function showPreviousMenu()
	{
		//Set the popup style display.
		setPopUpvisibility();

		showMainMenuFromGlossary();
		
		showMainMenuFromBookMarks();
		
		showGlossaryMenu();
		
		showMainMenuFromOutline();

		showOutlineMenuFromTools();
		
		showOutlineMenuFromSubChapter();
	}

	function showMainMenuFromGlossary()
	{
		
		var glossaryContent=document.getElementById('glossarycontent');
		var desiredProduct=document.getElementById('desired-product-behavior');
		
		if((glossaryContent.className == "glossarycontent showPopupDiv showAnimatePopUpDiv") || (desiredProduct && desiredProduct.value=="study" && glossaryContent.className == "glossarycontent showPopupDiv "))
		{
			
			if(pageOrigin!=null && pageOrigin!='undefined' && pageOrigin.toLowerCase()=="search")
			{
				document.getElementById('gotosearchpopupL').className = "gotoscrollpopup showPopupDiv showAnimatePopUpDivLR";
				document.getElementById('glossarycontent').className = "hidePopUpDiv hideAnimatePopUpDivLR";
				document.getElementById('popupheader').innerHTML = "Go to";
				
			}
			else
			{
				document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showPopupDiv showAnimatePopUpDivLR";
				document.getElementById('glossarycontent').className = "hidePopUpDiv hideAnimatePopUpDivLR";
				document.getElementById('popupheader').innerHTML = "Go to";
				
			}
		}
	}

	function showMainMenuFromBookMarks()
	{
		if(document.getElementById('bookmarksmain').className == "bookmarksmain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv showAnimatePopUpDivLR";
			document.getElementById('bookmarksmain').className = "hidePopUpDiv hideAnimatePopUpDivLR";
			document.getElementById('popupheader').innerHTML = "Go to";
			document.getElementById('subChapterBack').style.display = "none";
		}
	}

	function showGlossaryMenu()
	{
		if(document.getElementById('glossarycontent').className == "glossarycontent showDiv showAnimatePopUpDiv")
		{
			document.getElementById('glossarymain').className = "glossarymain showPopupDiv showAnimatePopUpDiv";
			document.getElementById('glossarycontent').className = "glossarycontent hidePopUpDiv hideAnimatePopUpDiv";
			document.getElementById('popupheader').innerHTML = "Go to";
			document.getElementById('subChapterBack').style.display = "none";
			document.getElementById('subChapterBack').innerHTML = "Goto";
		}
	}

	function showMainMenuFromOutline()
	{
		if(document.getElementById('outlinemain').className == "outlinemain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv showAnimatePopUpDiv";
			document.getElementById('outlinemain').className = "outlinemain hidePopUpDiv hideAnimatePopUpDiv";
			document.getElementById('popupheader').innerHTML = "Go to";
			document.getElementById('subChapterBack').style.display = "none";
		}
		if(document.getElementById('outlinemain').className == "outlinemain showDiv showAnimatePopUpDiv")
		{
			document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv showAnimatePopUpDiv";
			document.getElementById('outlinemain').className = "outlinemain hidePopUpDiv hideAnimatePopUpDiv";
			document.getElementById('popupheader').innerHTML = "Contents";
			document.getElementById('subChapterBack').style.display = "block";
		}
	}


	function showOutlineMenuFromTools()
	{
		if(document.getElementById('toolsmain').className == "toolsmain showDiv showAnimatePopUpDiv")
		{
		  document.getElementById('outlinemain').className = "glossarymain showPopupDiv";
			document.getElementById('gotoscrollpopup').className = "outlinemain showDiv showAnimatePopUpDivLR";
			document.getElementById('toolsmain').className = "outlinesubchapterscrollpopup hideDiv hideAnimatePopUpDivLR";
			document.getElementById('popupheader').innerHTML = "Go to";
			document.getElementById('subChapterBack').style.display = "none";
			document.getElementById('subChapterBack').innerHTML = "";
			curSelectedView="outline";
		}
	}

	function showOutlineMenuFromSubChapter()
	{
		if(document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv")
		{
			//document.getElementById('outlinemain').className = "outlinemain showDiv showAnimatePopUpDiv";
			document.getElementById('gotoscrollpopup').className = "outlinemain showDiv showAnimatePopUpDivLR";
			document.getElementById('outlinesubchapterscrollpopup').className = "";
			document.getElementById("outlineSubChapters_"+curSubChapter).className="outlinesubchapterscrollpopup hideDiv hideAnimatePopUpDivLR";
			document.getElementById('popupheader').innerHTML = "Go to";
			document.getElementById('subChapterBack').style.display = "none";
			document.getElementById('subChapterBack').innerHTML = "";
		}
	}

	/*End show previous menu functions */

	function setPopUpvisibility()
	{
		//Set the popup style display.
		/*document.getElementById('gotostatictop').style.display = "block";
		document.getElementById('gotoleftimage').style.display = "block";
		document.getElementById('gotorightimage').style.display = "block";
		document.getElementById('gotobottom').style.display = "block";*/
	}
	/* Start the search popup functions */
	function showSearchPopUp()
	{
		closePopUp();
		hideShowBookmarkIcon("none");
		//Hide the goto popup.
		document.getElementById('gotoUpArrow').style.display = "";
		document.getElementById('gotoUpArrow').className = "gotoArrow searchArrow";
		document.getElementById('gotocalcpopupL').style.display = "none";
		/*document.getElementById('gotoleftimage').style.display = "block";
		document.getElementById('gotorightimage').style.display = "block";
		document.getElementById('gotobottom').style.display = "block";
		document.getElementById('gotostatictop').style.display = "block";*/
		
		document.getElementById('gotopopupL').style.visibility = "";
		document.getElementById('gotopopupL').style.display = "block";
		document.getElementById('gotosearchpopupL').style.visibility = "";
		document.getElementById('gotosearchpopupL').style.display = "block";
		document.getElementById('gotosearchpopupL').className="gotoscrollpopup showDiv"
		
		document.getElementById('searchText').style.display = "block";
		document.getElementById('searchText').style.visibility = "";
		if(document.getElementById('searchText').value == "")
			document.getElementById('searchL1').innerHTML = "";
			
		setDivClassName();
		hideShowBookmark();
		hideShowGotoPopupBorder('');
		if(searchScroll_ipad!=null){
			searchScroll_ipad.destroy();
		}
		searchScroll_ipad = new iScroll("searchL1");
	}

	function setDivClassName()
	{
		document.getElementById('gotoscrollpopup').className = "hideDiv";
		document.getElementById('outlinemain').className = "hideDiv";
		document.getElementById('outlinesubchapterscrollpopup').className = "hideDiv";
		document.getElementById('glossarymain').className = "hideDiv";
		document.getElementById('glossarycontent').className = "hideDiv";
		document.getElementById('bookmarksmain').className = "hideDiv";
	}
	
	//Show the tools iframe.
	function showToolsFrame(loc)
	{
		//Start HRB: Changes made to display popup when select supplement link.
		if(loc.indexOf('images/') != -1){
			showIPhonePopup("",MLEARNING_SUPPLEMENT_MSG);
			return;
		}
		//End HRB: Changes made to display popup when select supplement link.
		
		//set the tools iframe display none.
		document.getElementById('toolsDiv').style.visibility = "visible";
		document.getElementById('toolsDiv').style.display = "";
		document.getElementById('header').style.display = "none";
		document.getElementById('toolsheader').style.display = "block";
		document.getElementById('toolsdesc').style.visibility = "visible";
		document.getElementById("toolsdesc").src = loc; //nLoc.substring(0,nLoc.lastIndexOf("/")+1)+
		//document.getElementById("toolsheader").style.opacity="0.7";
		
	}
	
	//Show the Certificate iframe.
	function showCertifcateFrame()
	{
		closePopUp();
		document.getElementById('certificateDiv').style.display = "";
		document.getElementById('header').style.display = "none";
		document.getElementById('certificateHeader').style.display = "block";
	}
	
	function showGradedAnswers(){
		document.getElementById('gradedAnsParent').style.display = "";
		document.getElementById('header').style.display = "none";
		document.getElementById('gradedAnsHeader').style.display = "block";
	}
	
	function closeGradedAnswers(){
		document.getElementById('gradedAnsParent').style.display = "none";
		document.getElementById("gradedMask").style.visibility = "visible";
		document.getElementById("gradedAns").style.visibility = "hidden";
		document.getElementById('header').style.display = "block";
		document.getElementById('gradedAnsHeader').style.display = "none";
		var forms = document.getElementById("gradedAns").getElementsByTagName("form").length;
		for(var i=0;i<forms;i++){
				document.getElementById("gradedAns").getElementsByTagName("form")[0].parentNode.removeChild(document.getElementById("gradedAns").getElementsByTagName("form")[0]);
		}
	}

	//This function close the tools description iframe.
	function closeToolsFrame()
	{
		document.getElementById('header').style.display = "block";
		document.getElementById('toolsheader').style.display = "none";
		document.getElementById('toolsDiv').style.display = "none";
		document.getElementById('toolsdesc').style.visibility = "hidden";
		document.getElementById("toolsheader").style.display="none";
		document.getElementById("toolsdesc").src = "";
	}
	
	//This function close the Certificate description iframe.
	function closeCertificateFrame()
	{
		document.getElementById('header').style.display = "block";
		document.getElementById('certificateHeader').style.display = "none";
		document.getElementById('certificateDiv').style.display = "none";
	}

	//This function exist the course for ipad.
	function exitCourseForIpad(){
		var elementByTag=document.getElementById("divVideo");
		 if(elementByTag){
			var frame=elementByTag.childNodes[3];
			var videoElements=frame.contentWindow.document.getElementsByTagName("video");
			if(videoElements && videoElements.length>0)
				videoElements[0].pause();
		 }
		 removeVideoControl();
		 updateCourse();
		 if(saveStatusFunctionTimerPointer!=null && saveStatusFunctionTimerPointer!='undefined')
		 {
			clearTimeout(saveStatusFunctionTimerPointer);
		 }
		top.frmHidden.exitCourse();
	}
	function openTranscriptPopupIPad()
	{
		var popupHeaderArrow = document.getElementById("popupHeaderArrow");
		var objpopupLTras = document.getElementById("popupL");
		objpopupLTras.style.display = "";
		objpopupLTras.style.visibility = "visible";
		objpopupLTras.style.top = "530px";
		objpopupLTras.style.left = "30px";
		objpopupLTras.style.height = "50px";
		objpopupLTras.style.width = "908px";
		popupHeaderArrow.style.backgroundImage= "url(common/images/bottom.png)";
		document.getElementById('popupHeaderArrow').style.visibility = "visible";
		document.getElementById('popupHeaderArrow').style.display = "";
		document.getElementById('popupHeaderArrow').style.top = "618px";
		document.getElementById('popupHeaderArrow').style.left = "887px";
		document.getElementById('popupL1').innerHTML = "This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!This is transctipt for iPad...!!!!";
		document.getElementById('scrollpopup').style.paddingLeft= "12px"; 
		document.getElementById('scrollpopup').style.width = "95%"
	}

	function showCalculator()
	{
		closePopUp();
		//Hide the goto popup.
		document.getElementById('gotosearchpopupL').style.display = "none";
		document.getElementById('gotocalcpopupL').style.display = "block";
		/*document.getElementById('gotorightimage').style.display = "none";
		document.getElementById('gotoleftimage').style.display = "none";
		document.getElementById('gotostatictop').style.display = "none";*/
		document.getElementById('gotoUpArrow').style.display = "";
		document.getElementById('gotoUpArrow').className="gotoArrow calculatorArrow";
		
		document.getElementById('gotocalleftimage').style.display = "block";
		document.getElementById('gotocalrightimage').style.display = "block";
		document.getElementById('gotocalbottom').style.display = "block";
		
		document.getElementById('gotopopupL').style.visibility = "hidden";
		document.getElementById('gotopopupL').style.display = "none";
		document.getElementById('gotocalcpopupL').style.visibility = "";
		document.getElementById('gotocalcpopupL').style.display = "block";
		document.getElementById('califrame').style.visibility = "";
		document.getElementById('califrame').style.display = "block";
		//document.getElementById('searchL1').innerHTML = "";
			
		setDivClassName()
		hideShowBookmark("none");
		hideShowBookmarkIcon("none");
	}

	function showHelp()
	{
		hideShowBookmark("none");
		alert("Help");
	}
	
	
	function closePopUp()
	{	
		
		outlineflag=0;
		//This function set all the popup div's class name as a hideDiv.
		hideGotopopupDivs();
		//Set the popup style display.
		if(document.getElementById('gotopopupL').style.visibility != "hidden")
		{
			document.getElementById('gotopopupL').style.visibility = "hidden";
		}
		
		hideShowGotoPopupBorder('none');

		if(isIphoneDevice)
		{
			document.getElementById('popupL').style.visibility = "hidden";
			document.getElementById(currentDivId).style.backgroundColor = '';
		}
		if(document.getElementById('gotosearchpopupL').style.visibility != "hidden")
		{
			document.getElementById('gotosearchpopupL').style.visibility = "hidden";
			document.getElementById('searchText').style.display = "none";
			document.getElementById('searchText').style.visibility = "";
		}
		if(document.getElementById('gotocalcpopupL').style.visibility != "hidden")
		{
			document.getElementById('gotocalcpopupL').style.visibility = "hidden";
			document.getElementById('cal').style.visibility = "";
		}
		
		// This function close the open popup window .
		if(document.getElementById('popupL').style.visibility != "hidden")
		{
			document.getElementById('popupL').style.visibility = "hidden";
			document.getElementById('popupHeaderArrow').style.visibility = "hidden";
			document.getElementById('courseviewmain').style.backgroundColor = '';
			document.getElementById(currentDivId).style.backgroundColor = '';
			//openPopupScroll=null;
			//document.getElementById('popupL1Msg').innerText='';
		}
		if(document.getElementById("bookmarkAdd").style.display==""){
			document.getElementById("bookmarkAdd").style.display="none";
		}
		if(curSelectedView!=null && curSelectedView!=''&&curSelectedView!="courseview" ){
			document.getElementById(curSelectedView+"main").className = "glossarymain hidePopUpDiv ";
		}
		
		//Added to reset the backgorund image for Steps Interactivity
		if($get('contentSteps') != null && steps_id != -1)
		{
			$get('step'+steps_id).src=steps_InActiveImages[steps_id-1];
			steps_id = -1;
		}
		
		//Added to reset the backgorund image for Click and Reveal Type2
		if(mcar1_ContentArr != null && $get('contentMultipleClickAndRevealHorizontal', true) != null)
		{
			for(var cnt=0; cnt<mcar1_ContentArr.length; cnt++)
			{
				$get('iExample' + cnt).style.background ='url('+mcar1_InActiveImage+')';
				$get('popupLClickNReveal'+cnt, true).style.display='none';
			}
		}
		
		//Added to hide the Left Arrow image for Click and Reveal Type3 Interactivity
		if($get('multipleClickAndRevealLeftArrow') != null)
		{
			$get('multipleClickAndRevealLeftArrow').style.display='none';
		}
		
		//Added to reset the backgorund image for Concentric Circle
		if($get('contentConcentricCircle') != null && concentricCircle_id != -1)
		{
			$get('l'+concentricCircle_id).style.backgroundImage='url('+concentricCircleInActiveImage+')';
			concentricCircle_id = -1;
		}
		document.getElementById("gotoUpArrow").style.display="none";
		hideShowBookmarkIcon("");
		hideShowHelp('none');
		hideShowVideoControl("");
	}

	function hideGotopopupDivs()
	{
		/*document.getElementById('searchscrollpopup').className = "hideDiv";
		document.getElementById('gotoscrollpopup').className = "hideDiv";
		document.getElementById('outlinemain').className = "hideDiv";
		document.getElementById('outlinesubchapterscrollpopup').className = "hideDiv";
		document.getElementById('glossarymain').className = "hideDiv";
		document.getElementById('glossarycontent').className = "hideDiv";
		document.getElementById('bookmarksmain').className = "hideDiv";*/
	}
	
	function showGlossary_iphone()
	{
		var tempGlossDescription;
		var index;
		var lastIndex;
		
		var glossaryText=document.getElementById('glossaryText');
		glossDescription=document.getElementById("glossiframe").contentWindow.document.body.innerHTML;
		
		if(glossDescription!=''){
		   document.getElementById('gotopopupL').style.visibility = "";
		   
		   if(pageOrigin!=null && pageOrigin !='undefined' && pageOrigin.toLowerCase()=="search"){
			    
				document.getElementById('gotosearchpopupL').className = "hidePopupDiv hideAnimatePopUpDiv";
				document.getElementById('glossarycontent').className = "glossarycontent showPopupDiv showAnimatePopUpDiv";
				document.getElementById('glsTextBack').innerHTML = "Search";
		   }
		   else{
				var desiredProduct=document.getElementById("desired-product-behavior");
				if(desiredProduct && desiredProduct.value=="study"){
					showGotoPopUp();
					selectMenu('glossary');
					if(glossaryItemScroll_ipad!=null) glossaryItemScroll_ipad.destroy();
						glossaryItemScroll_ipad=new iScroll("glsItem");
					document.getElementById('gotoscrollpopup').className = "hidePopupDiv ";
					document.getElementById('glossarycontent').className = "glossarycontent showPopupDiv ";
					
				}
				else{
					document.getElementById('gotoscrollpopup').className = "hidePopupDiv hideAnimatePopUpDiv";
					document.getElementById('glossarycontent').className = "glossarycontent showPopupDiv showAnimatePopUpDiv";
				}
				document.getElementById('glsTextBack').innerHTML = "Glossary";
			}
			document.getElementById('popupheader').innerHTML = "";
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
			//start for discription
			if(highlightMe){
			highlightMe = false;
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
	function showIPadPopup(title, description, top, left,height,width, scrollPopupWidth, scrollPopupPaddingRight){
		
	var popupLObj=$get('popupL');
	popupLObj.style.visibility='visible';
	popupLObj.style.display='block';
	forSerachKey=description;
	if(int_HighLightMe){
		forSerachKey=genrateHighlightData(forSerachKey);
	}
	description=forSerachKey;
	if(title != ''){
		forSerachKey=title;
	if(int_HighLightMe){
		forSerachKey=genrateHighlightData(forSerachKey);
	}
	title=forSerachKey;
		$get('popupL1').innerHTML='<b>'+title+'</b><br/>'+description;
	}
	else{
		$get('popupL1').innerHTML=description;
	}
	
	if(top!=null && top!='undefined'){
		popupLObj.style.top=top;
	}
	if(left!=null && left!='undefined'){
		popupLObj.style.left=left;
	}
	if(height!=null && height!='undefined'){
		popupLObj.style.height=height;
	}
	if(width!=null && width!='undefined'){
		popupLObj.style.width=width;
	}
	
	if(scrollPopupWidth!=null && scrollPopupWidth !='undefined'){
		document.getElementById("scrollpopup").style.width=scrollPopupWidth;
	}
	if(scrollPopupPaddingRight!=null && scrollPopupPaddingRight !='undefined'){
		document.getElementById("scrollpopup").style.paddingRight=scrollPopupPaddingRight;
	}
	if(openPopupScroll!=null){ openPopupScroll.destroy();}
		openPopupScroll = new iScroll("popupL1");
}
//End HRB: Added to show the popup for interactivity and Set title and description.

//Start HRB: Added to hide the popup for interactivity and Reset title and description.
function hideIPadPopup(){
	
	$get('popupL').style.display='none';
	$get('popuptitle').innerText='';
	$get('popupL1').innerText='';
	document.getElementById('popupHeaderArrow').style.visibility = "hidden";
	//to hide left arrow in click and reveal type 3
	if($get('multipleClickAndRevealLeftArrow') != null)
	{
		$get('multipleClickAndRevealLeftArrow').style.display='none';
	}
}

	function closePopUpMsg()
	{
		document.getElementById(currentDivId).style.backgroundColor = '';
		hideIPhonePopup();
		hideIPhoneConfirmPopup();
		//Added for MCQ Interactivity. To show the next question when popup is closed.
		if(mcq_currentQuestionId!=null && mcq_currentQuestionId != 'undefined' && mcq_currentQuestionId>=0){
			try
			{
				mcq_currentQuestionId=mcq_currentQuestionId+1;
				if(mcq_QuestionArr.length > mcq_currentQuestionId)
				{
					showMCQQuestions(mcq_currentQuestionId);
				}
			}
			catch(err){}
		}
		
		//Added for Matching Interactivity. To disable the background when popup is closed.
		if($get('contentMatching') != null){
			try{
				HideMatchingPopup();
			}
			catch(err){}
		}
	}

	//Start HRB: Added to show the popup for interactivity and Set title and description.
	function showIPhonePopup(title, description, interactivityPopup){
		if(interactivityPopup != null && interactivityPopup == true)
		{
			$get('bottomMsg').className="popBottomMsg popBottomok";
		}
		
		$get('backgroundpopup').style.visibility='visible';
		$get('popupMsg').style.visibility='visible';
		$get('popupMsg').style.display='block';
		$get('popuptitleMsg').innerHTML=title;
		//$get('popupL1Msg').innerHTML=description;
		forSerachKey=description;
		if(int_HighLightMe){
			forSerachKey=genrateHighlightData(forSerachKey);
		}
		$get('popupL1Msg').innerHTML=forSerachKey;
		
		$get('popuptitleMsg').style.textAlign='center';  
		$get('popuptitleMsg').style.fontWeight='bold';
		$get('popuptitleMsg').style.lineHeight='3.5em';
		if(openPopupScroll!=null){ openPopupScroll.destroy();}
			openPopupScroll = new iScroll("popupL1Msg");
	}
	
	//Start HRB: Added to hide the popup for interactivity and Reset title and description.
	function hideIPhonePopup(){
		$get('bottomMsg').className="popBottomMsg";
		$get('backgroundpopup').style.visibility='hidden';
		$get('popupMsg').style.display='none';
		$get('popuptitleMsg').innerText='';
		$get('popupL1Msg').innerText='';
	}
	//End HRB: Added to hide the popup for interactivity and Reset title and description.
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
	
function closeSerachResultsIpad()
{
document.getElementById('searchText').value = "";
callSearchFns()
}	function fnCheckIsBookmarkAdded(title)
	{
	    for(itr=0; itr<bookmarkArray.length; itr++)
		{
	       try
		   {
		       //hrb: 10-Dec-2010 as for mlearning course we didnt provide text for bookmark
			   //when delete the global bookmark count doesnt get decrement , bcoz of this some null value are introdue in bookmarkArray. 
			   //to avoid this null bookmark entries we introduce if statement
			   
			  if(bookmarkArray[itr]!=null && bookmarkArray[itr].bkTitle!=null)
			  {
				if(bookmarkArray[itr].bkTitle==title)
				{
					return true;
				}
			  }
			   
		   }
		   catch(err)
		   {
				alert("INVALID_BOOKMARK");
				return false;
		   }		
		}
		return false;
	}
	
	function fnDeleteBookMark_ipad(title){
		for(itr=0; itr<bookmarkArray.length; itr++)
		{
	       try
		   {
		       if(bookmarkArray[itr]!=null && bookmarkArray[itr].bkTitle && bookmarkArray[itr].bkTitle!='')
			   {
					//Note: for mlearning we pass book mark description for delete as we didnot have bookmark index
					if((isMobileUserAgent==true && bookmarkArray[itr].bkTitle==title))
					{		
						bookmarkArray.splice(itr,1);	
						var newdiv = '';
						newdiv=createBookmarkli(bookmarkArray);
						break; 
					}
			   }
		   }
		   catch(err)
		   {
				alert(DELETE_BOOKMARK_WARNING+err);
		   }	
		}
	}
	
	
	function hideShowBookmark(action){
		document.getElementById("bookmarkAdd").style.display=action;
	}
	
	function hideShowBookmarkIcon(action){
		document.getElementById("bookmarkDiv").style.display=action;
	}

	function hideShowGotoPopupBorder(action){
		document.getElementById('gotopopupRight').style.display=action;
		document.getElementById('gotopopupLeft').style.display=action;
	}
	

	function hideShowHelp(display){
		if(display.toLowerCase()=="none"){
			document.getElementById('gotoHelp').className="hideDiv"
		}
		else{
			closePopUp();
			hideShowBookmarkIcon("none");
			
			document.getElementById('gotoUpArrow').style.display = "";
			document.getElementById('gotoUpArrow').className = "gotoArrow helpArrow";
			document.getElementById('gotocalcpopupL').style.display = "none";
			
			
			document.getElementById('gotopopupL').style.visibility = "";
			document.getElementById('gotopopupL').style.display = "block";
			
			document.getElementById('gotoHelp').className="gotoscrollpopup showDiv"
			setDivClassName();
			hideShowBookmark();
			hideShowGotoPopupBorder('');
		}
	}
	
	//start confirm popup box
	function closeconfirmPopUpMsg()
	{
		document.getElementById(currentDivId).style.backgroundColor = '';
		hideIPhoneConfirmPopup();
		
	}
	
	function closeconfirmPopUpMsgOk()
	{
		outlineflag=0;
		document.getElementById(currentDivId).style.backgroundColor = '';
		hideIPhoneConfirmPopup();
		if(callFrom=="sc")
			Sc(confirmCode);
		else if(callFrom=="St")
			St(confirmCode);
		else
		{
			mode = "study";
			ShowMainContent_iphone(confirmCode);
		
		}
	}

	//Start HRB: Added to show the popup for confirm box  and Set title and description.
	function showConfirmPopup(title, description, code, from){
		
		confirmCode=code;
		callFrom=from;
		$get('backgroundpopup').style.visibility='visible';
		$get('confirmPopupMsg').style.visibility='visible';
		$get('confirmPopupMsg').style.display='block';
		$get('confirmPopuptitleMsg').innerHTML=title;
		$get('confirmPopupL1Msg').innerHTML=description;
		
		$get('confirmPopuptitleMsg').style.textAlign='center';  
		$get('confirmPopuptitleMsg').style.fontWeight='bold';
		$get('confirmPopuptitleMsg').style.lineHeight='3.5em';
		if(openPopupScroll!=null){ openPopupScroll.destroy();}
			openPopupScroll = new iScroll("confirmPopupL1Msg");
	}
	
	//Start HRB: Added to hide the popup for confirm box  and Reset title and description.
	function hideIPhoneConfirmPopup(){
		
		$get('backgroundpopup').style.visibility='hidden';
		$get('confirmPopupMsg').style.display='none';
		$get('confirmPopuptitleMsg').innerText='';
		$get('confirmPopupL1Msg').innerText='';
	}
	//End HRB: Added to hide the popup for confirm box and Reset title and description.
	//end confirm box
	
	//Start HRB: Added to hide video control on menu click
	function hideShowVideoControl(display){
		var videoElement=document.getElementsByTagName("video");
		for(var videoCnt=0;videoCnt<videoElement.length;videoCnt++){
			videoElement[videoCnt].parentNode.style.display=display;
			if(display=="none")
			{
				$get('backgroundForVideo').style.display="";
			}
			else
			{
				$get('backgroundForVideo').style.display="none";
				
			}
		} 
	}
	//End HRB: Added to hide video control on menu click