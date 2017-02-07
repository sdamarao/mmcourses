var interactivity_iPad_timer = null;
var glossaryTextScroll = null;
var moveScrollForAPW4 = null;
//var navigateForAPW4=null;
var openPopupScroll = null;
var confirmCode = null;
var callFrom = null;
var menuOption = new Array('outline', 'glossary', 'bookmarks');

var curSelectedView = "";
var isFirstCall = true;
var curSubChapter = -1;
var subChapterScroll = null;
var outlineScroll_ipad = null;
var searchScroll_ipad = null;
var glossaryItemScroll_ipad = null;
var toolsItemScroll_ipad = null;
var bookmarkScrollFor_ipad = null;



function selectSubChapter(chapNo) {
  //check condition for animation.
  if (document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv") {
    document.getElementById('gotoscrollpopup').className = "hideDiv hideAnimateDiv";
    document.getElementById("outlineSubChapters_" + chapNo).className = "courseMenuMain showDiv showAnimateDiv";
  }
  // change for the new outline structure.
  //document.getElementById("outlinemain").className="outlinemain hidePopUpDiv hideAnimatePopUpDiv";


  //document.getElementById('popupheader').innerHTML = "";
  document.getElementById('gotoscrollpopup').className = "hideDiv hideAnimatePopUpDiv";
  document.getElementById("outlineSubChapters_" + chapNo).className = "outlinesubchapterscrollpopup showDiv showAnimatePopUpDiv";
  document.getElementById("outlinesubchapterscrollpopup").className = "outlinesubchapterscrollpopup showDiv";
  curSubChapter = chapNo;


  //getScrollbar(subChpPopUpOfContent);
}

function selectOutlineFromSubChap() {
  document.getElementById("outlineSubChapters_" + curSubChapter).className = "courseMenuMain hideDiv hideAnimateDivLR";
  document.getElementById('outlinemain').className = "courseMenuMain showDiv showAnimateDivLR";
  curSubChapter = -1;

}

function selectMenu(viewName) {
  //Set the courseTitle position.
  setCourseTitlePosition();
  //This condition is added for animation effect.
  if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv showAnimateDiv");
  {
    document.getElementById('courseviewmain').className = "courseMenuMain showDiv"
  }
  if (document.getElementById('searchscrollpopup').className == "searchscrollpopup showDiv") {
    if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv showAnimateDiv") {
      document.getElementById('courseviewmain').className = "courseMenuMain showDiv"
    }
    if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv") {
      document.getElementById('courseviewmain').className = "courseMenuMain showDiv showAnimateDiv"
    }
  }
  //This condition is added for to check curSelectedView is outline.then it will convert into courseview.
  if (curSelectedView == "outline") {
    //curSelectedView = "courseview";
  }
  // This condition is added for to display the subchapter content.In this we set the curselectedview as a outline.
  if (document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv") {
    curSelectedView = "outline";
  }

  try {
    if (viewName == "courseview")
      closePopUp();
  }
  catch (err) {
    alert('close popup: ' + err);
  }
  //document.getElementById(curSelectedView+"icon").src = document.getElementById(curSelectedView+"icon").src.replace("over","normal");
  //HideCourseNavigatorAndPrg('none');
  if (isFirstCall) {
    isFirstCall = false;
  } else {

    if (curSubChapter > -1) {
      document.getElementById("outlineSubChapters_" + curSubChapter).className = "courseMenuMain hideDiv"; // hideAnimateDiv
      curSubChapter = -1;
    } else {
      //check condition for animation.
      if (document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv") {
        document.getElementById(curSelectedView + 'main').className = "courseMenuMain hideDiv hideAnimateDiv";
      }
    }
    //check condition for animation.
    if (document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv") {
      //setContentClassName(viewName);
      document.getElementById(viewName + 'main').className = "courseMenuMain showDiv showAnimateDiv";
    }
  }

  if (viewName.toLowerCase() == "outline" || viewName.toLowerCase() == "glossary" || viewName.toLowerCase() == "bookmarks") {
    document.getElementById(viewName + "main").className = "glossarymain showPopupDiv "; //showAnimatePopUpDiv			    
    if (curSelectedView.toLowerCase() != 'courseview' && curSelectedView != viewName) {
      document.getElementById(curSelectedView + "main").className = "glossarymain  hidePopUpDiv "; //hideAnimatePopUpDiv
    }
    SelectedMenu(viewName);
  }
  //document.getElementById(viewName+"icon").src = document.getElementById(viewName+"icon").src.replace("normal","over");
  //This curSelectedView is commented for the new layout structure.
  curSelectedView = viewName;


  switch (viewName) {
    case "courseview":
      //HideCourseNavigatorAndPrg('');
      //	document.getElementById('searchFieldDiv').className = "searchFieldHide";
      break;
    case "outline":
      //document.getElementById('searchFieldDiv').className = "searchFieldHide";
      //document.getElementById('outlinemain').className = "outlinemain showDiv";
      //document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv ";
      //SelectedMenu(viewName);
      if (outlineScroll_ipad != null) outlineScroll_ipad.destroy();
      if (!chkEBookFormat()) {
        outlineScroll_ipad = new iScroll("chapItem");
      }
      //outlineScroll_ipad = new iScroll("chapItem");

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
      //	document.getElementById('searchFieldDiv').className = "searchFieldFocus";
      break;
    case "tools":
      document.getElementById('toolsmain').className = "toolsmain showDiv showAnimatePopUpDiv";
      document.getElementById('gotoscrollpopup').className = " hidePopupDiv hideAnimatePopUpDiv";

      break;
    case "print":
      document.getElementById('printmain').className = "toolsmain showDiv showAnimatePopUpDiv";
      document.getElementById('gotoscrollpopup').className = " hidePopupDiv hideAnimatePopUpDiv";
      break;
    case "help":
      //document.getElementById('searchFieldDiv').className = "searchFieldHide";
      break;
  }
  //getScrollbar(printPopUp);
}




function setContentClassName(viewName) {
  if (document.getElementById('content').className == "") {

    document.getElementById('content').className = "contentDv hideDiv hideAnimateDiv"
    document.getElementById('content1').className = "contentDv showDiv showAnimateDivOut"
    //					document.getElementById(viewName+'main').className="courseMenuMain showDiv showAnimateDiv";
  }
}

function animationStart(event) {
  document.getElementById('parentDiv' + hiddenParent).className = 'contentDv zindexLow';
  if (curParent == '1') {
    curParent = '2';
    hiddenParent = '1';
  } else {
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
  //document.getElementById("searchField").addEventListener( 'keydown', function(event){searchKeyPress(event)}, false );;
}

function searchFieldOnFocus() {
  //document.getElementById('searchFieldDiv').className = "searchFieldFocus";
  createRecentSearch();
}

function searchFieldOnBlur() {
  //	document.getElementById('searchFieldDiv').className = "searchFieldBlur";
}

function searchKeyPress(event) {
  /*if(event.which==13){
  //document.getElementById('searchFieldDiv').className = "searchFieldFocus";
  if(document.getElementById("searchField").value.length>0){
  selectMenu('search');
  }
  }*/
}

function HideCourseNavigatorAndPrg(display) {
  //document.getElementById('buttons').style.display=display;
  //document.getElementById('OuterProgressBarBlock').style.display=display;
  //document.getElementById('PrevButton').style.display=display;
  //document.getElementById('PrevButtonDisabled').style.display=display;
  //document.getElementById('NextButton').style.display=display;
  //document.getElementById('NextButtonDisabled').style.display=display;
  //document.getElementById('InnerProgressBarBlock').style.display=display;
  //document.getElementById('divText').style.display=display;
  document.getElementById('subchaptertitle').style.display = display;
  document.getElementById('showQuestionNumber').style.display = display;
  document.getElementById('submittest').style.display = display;
  document.getElementById('submittest_disable').style.display = display;
  document.getElementById('questionControlPanel').style.display = display;
}

/* Add this function for ipad new search layout  */
function ShowMainContent_iphone(page) {
  highlightMe = true;
  //The courseviewmain class is set for to add the animation effect.
  closePopUp();
  if (mode == "review" || mode == "retake") {
    if (mode == "review") {
      str = SWITCH_FROM_REVIEW;
      showConfirmPopup('Review', str, page, "search");
    }
    else {
      str = SWITCH_FROM_RETAKE;
      showConfirmPopup('Retake', str, page, "search");
    }

    return;

  }

  mode = 'study';
  resetFirstLastPage(); //HRB: Added to reset first and last page of CurrentChapter when going to search result from confirmation page.	
  ShowStudyPage(page);

}


function hideShowSearch(id) {
  document.getElementById('searchText').style.visibility = "hidden";
  document.getElementById('searchText').style.display = "none";
  document.getElementById('gotosearchpopupL').style.visibility = "hidden";
}

/*End */

function setCourseTitlePosition() {

  course_title = document.getElementById('coursetitle').innerHTML
  AdjustCourseTitle(course_title)
}

function callSearchFns() {
  $("#searchText").blur(); //To hide the ipad keyboard

  document.getElementById('searchResult').style.visibility = 'visible';

  if (document.getElementById('searchText').value == "") {
    clearSearchText();
  }
  else {
    DoSearch_ipad();
  }
}

//hrb-end:niket search the text.
function DoSearch_ipad() {
  isSearchResultOpen = true;
  document.getElementById("searchL1").style.visibility = "";
  document.getElementById('searchText').style.display = "block";
  document.getElementById("searchL1").innerHTML = 'Please wait...<br>';
  document.getElementById('searchHead').innerHTML = "Search Results";
  var ulstart = "<ul class='categoryList'> ", ulend = " </ul> ";
  if (Search == null) {
    var searchText = document.getElementById("searchText").value.trim();
    var searchTextIsUnique = true;
    var repeatedIndex = 0;
    searchStr = searchText;
    if (searchText != "") {
      if (recentSearch == "") {
        recentSearch = searchText;
      }
      else {
        // add to existing array
        var recentSearchArr = recentSearch.split("##@$");
        var no_of_search = 10;
        var tempstr = "";

        for (i = 0; i < recentSearchArr.length; i++) {
          if (searchText.toLowerCase() == recentSearchArr[i].toLowerCase()) {
            searchTextIsUnique = false;
            repeatedIndex = i;
            break;
          }
        }

        if (!searchTextIsUnique && recentSearchArr.length > 1) {
          for (i = 0; i < recentSearchArr.length; i++) {
            if (i != repeatedIndex) {
              tempstr = tempstr + recentSearchArr[i] + "##@$";
            }
          }
          tempstr = tempstr.substring(0, tempstr.lastIndexOf("##@$"));
          recentSearch = tempstr;
          recentSearchArr = recentSearch.split("##@$");
          searchTextIsUnique = true;
        }

        tempstr = "";
        if (searchTextIsUnique) {
          if (recentSearchArr.length == no_of_search) {
            for (i = 1; i < no_of_search; i++) {
              tempstr = tempstr + recentSearchArr[i] + "##@$";
            }
            recentSearch = tempstr;
            recentSearch = recentSearch + searchText;
          }
          else {
            recentSearch = recentSearch + "##@$" + searchText;
          }
        }
      }
    }
    document.progress.SearchString(document.getElementById("searchText").value.trim());
    var OutputTarget = "";
    OutputTarget = document.progress.DoSearch();
    document.getElementById("searchL1").innerHTML = ulstart + document.progress.SearchResults() + ulend;
  }
  else {
    Search.SearchString(document.getElementById("searchText").value);
    var OutputTarget = "                                                      ";
    OutputTarget = Search.doSearch();

    document.getElementById("searchL1").innerHTML = ulstart + Search.SearchResults() + ulend;
  }
  //if(searchScroll_ipad!=null){
  //	searchScroll_ipad.destroy();
  //}
  //if(!chkEBookFormat())
  //{
  //searchScroll_ipad = new iScroll("searchL1");
  //}
  // searchScroll_ipad = new iScroll("searchL1");
  //	getScrollbar(glsItemMainId);
}

function clearSearchText() {
  if (document.getElementById('searchText').value == "") {
    document.getElementById('searchL1').innerHTML = "";
    //var element = $('#glsItemMainId').jScrollPane({});
    //var api = element.data('jsp');
    //api.destroy();

  }
}

function pload(subchaptercount) {
  document.ontocuhmove = function (e) {
    e.preventDefault();
  }

  /*for (i=1 ; i<=subchaptercount; i ++)
  {
  newStr = "subchapItem_" + i;
  d = new iScroll(newStr);
  }*/
}


/* popup related functions */
function showGotoPopUp() {
  closePopUp();
  var desiredProduct = document.getElementById("desired-product-behavior");
  //check that is it study question page show that means glossary comes in study question response so didn't close popup
  if ((!desiredProduct) || (desiredProduct && desiredProduct.value != "study")) {
    closePopUp();
  }

  hideShowBookmarkIcon("none");
  hideShowVideoControl("none");
  document.getElementById('gotoUpArrow').style.display = "";
  document.getElementById('gotoUpArrow').className = "gotoArrow outlineArrow";
  document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
  //document.getElementById('searchscrollpopup').className="searchscrollpopup hideDiv"


  if (document.getElementById('gotosearchpopupL').style.display = "block") {
    document.getElementById('gotosearchpopupL').style.display = "none";
  }
  if (document.getElementById('gotocalcpopupL').style.display = "block") {
    document.getElementById('gotocalcpopupL').style.display = "none";
  }
  //Set the popup style display.
  setPopUpvisibility();
  //Check this condition for animation effect.
  if (document.getElementById('outlinemain').className == "outlinemain showDiv showAnimatePopUpDiv") {
    document.getElementById('outlinemain').className = "hideDiv";
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
  }
  if (document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv") {
    document.getElementById('outlinesubchapterscrollpopup').className = "outlinesubchapterscrollpopup hideDiv";
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
  }
  if (document.getElementById('glossarymain').className == "glossarymain showDiv showAnimatePopUpDiv") {
    document.getElementById('glossarymain').className = "glossarymain hidePopUpDiv";
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
  }
  if (document.getElementById('glossarycontent').className.indexOf("showPopupDiv") != -1) {
    document.getElementById('glossarycontent').className = "glossarycontent hidePopUpDiv";
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
  }

  if (document.getElementById('bookmarksmain').className == "bookmarksmain showDiv showAnimatePopUpDiv") {
    document.getElementById('glossarymain').className = "glossarymain hidePopUpDiv";
    document.getElementById('glossarycontent').className = "glossarycontent hidePopUpDiv";
    document.getElementById('outlinemain').className = "outlinemain hidePopUpDiv";
    document.getElementById('bookmarksmain').className = "bookmarksmain hidePopUpDiv";
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv";
  }
  if (document.getElementById('toolsmain').className == "toolsmain showDiv showAnimatePopUpDiv") {
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
  curSelectedView = "outline";
  document.getElementById(curSelectedView + "main").className = "glossarymain showPopupDiv";
  hideShowBookmark();
  hideShowGotoPopupBorder('');

}


// This function shows the gotopopup.

function showOutLine() {
  //Set the popup style display.
  setPopUpvisibility();
  document.getElementById('gotopopupL').style.visibility = "";
  if (outlineScroll_ipad != null) outlineScroll_ipad.destroy();
  if (!chkEBookFormat()) {
    outlineScroll_ipad = new iScroll("chapItem");
  }
  //outlineScroll_ipad = new iScroll("chapItem");
  //getScrollbar(contentPopUp);
}

function showGlossary() {
  //Set the popup style display.
  setPopUpvisibility();
  document.getElementById('gotopopupL').style.visibility = "";
  if (glossaryItemScroll_ipad != null) glossaryItemScroll_ipad.destroy();
  if (!chkEBookFormat()) {
    //glossaryItemScroll_ipad=new iScroll("glsItem");
    //getScrollbar(glossaryPopUp);
  }
  //getScrollbar(glossaryPopUp);
  //$("#glossaryPopUp").width("300px");
  //glossaryItemScroll_ipad=new iScroll("glsItem");
}


function showBookmarks() {
  if (isIE) {
    $(".bookmarkRowTemplate").css("padding-top", "18px");
    //$(".jspDrag").height("82px");
    //$(".bookmarkRowTemplate")[0].padding-top("18px");
  }
  //Set the popup style display.
  setPopUpvisibility();
  document.getElementById('gotopopupL').style.visibility = "";
  if (bookmarkScrollFor_ipad != null) {
    bookmarkScrollFor_ipad.destroy();
  }
  if (!chkEBookFormat()) {
    //bookmarkScrollFor_ipad = new iScroll("bookmarkItem");
  }
  //bookmarkScrollFor_ipad = new iScroll("bookmarkItem");
  //getScrollbar(bookmarkPopUp);
}


function showTools() {
  //Set the popup style display.
  setPopUpvisibility();
  document.getElementById('gotopopupL').style.visibility = "";
  if (toolsItemScroll_ipad != null) toolsItemScroll_ipad.destroy();
  if (!chkEBookFormat()) {
    //toolsItemScroll_ipad = new iScroll("toolsItem");
  }

  //	getScrollbar(toolsPopUp);
  //toolsItemScroll_ipad = new iScroll("toolsItem");
}

//This function shows the previous menus.
function showPreviousMenu() {
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters) && (document.getElementById('popupL').style.visibility == 'visible')) {
    closePopUp();
  }
  //Set the popup style display.
  setPopUpvisibility();

  showMainMenuFromGlossary();

  showMainMenuFromBookMarks();

  showGlossaryMenu();

  showMainMenuFromOutline();

  showOutlineMenuFromTools();

  showOutlineMenuFromPrint();

  showOutlineMenuFromSubChapter();
}

function showMainMenuFromGlossary() {

  var glossaryContent = document.getElementById('glossarycontent');
  var desiredProduct = document.getElementById('desired-product-behavior');

  if ((glossaryContent.className == "glossarycontent showPopupDiv showAnimatePopUpDiv") || (desiredProduct && desiredProduct.value == "study" && glossaryContent.className == "glossarycontent showPopupDiv ")) {

    if (pageOrigin != null && pageOrigin != 'undefined' && pageOrigin.toLowerCase() == "search") {
      document.getElementById('gotosearchpopupL').className = "gotoscrollpopup showPopupDiv showAnimatePopUpDivLR";
      document.getElementById('glossarycontent').className = "hidePopUpDiv hideAnimatePopUpDivLR";
      document.getElementById('popupheader').innerHTML = "Go to";

    }
    else {
      document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showPopupDiv showAnimatePopUpDivLR";
      document.getElementById('glossarycontent').className = "hidePopUpDiv hideAnimatePopUpDivLR";
      document.getElementById('popupheader').innerHTML = "Go to";

    }
  }
}

function showMainMenuFromBookMarks() {
  if (document.getElementById('bookmarksmain').className == "bookmarksmain showDiv showAnimatePopUpDiv") {
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv showAnimatePopUpDivLR";
    document.getElementById('bookmarksmain').className = "hidePopUpDiv hideAnimatePopUpDivLR";
    document.getElementById('popupheader').innerHTML = "Go to";
    document.getElementById('subChapterBack').style.display = "none";
  }
}

function showGlossaryMenu() {
  if (document.getElementById('glossarycontent').className == "glossarycontent showDiv showAnimatePopUpDiv") {
    document.getElementById('glossarymain').className = "glossarymain showPopupDiv showAnimatePopUpDiv";
    document.getElementById('glossarycontent').className = "glossarycontent hidePopUpDiv hideAnimatePopUpDiv";
    document.getElementById('popupheader').innerHTML = "Go to";
    document.getElementById('subChapterBack').style.display = "none";
    document.getElementById('subChapterBack').innerHTML = "Goto";
  }
}

function showMainMenuFromOutline() {
  if (document.getElementById('outlinemain').className == "outlinemain showDiv showAnimatePopUpDiv") {
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv showAnimatePopUpDiv";
    document.getElementById('outlinemain').className = "outlinemain hidePopUpDiv hideAnimatePopUpDiv";
    document.getElementById('popupheader').innerHTML = "Go to";
    document.getElementById('subChapterBack').style.display = "none";
  }
  if (document.getElementById('outlinemain').className == "outlinemain showDiv showAnimatePopUpDiv") {
    document.getElementById('gotoscrollpopup').className = "gotoscrollpopup showDiv showAnimatePopUpDiv";
    document.getElementById('outlinemain').className = "outlinemain hidePopUpDiv hideAnimatePopUpDiv";
    document.getElementById('popupheader').innerHTML = "Contents";
    document.getElementById('subChapterBack').style.display = "block";
  }
}


function showOutlineMenuFromTools() {
  if (document.getElementById('toolsmain').className == "toolsmain showDiv showAnimatePopUpDiv") {
    document.getElementById('outlinemain').className = "glossarymain showPopupDiv";
    document.getElementById('gotoscrollpopup').className = "outlinemain showDiv showAnimatePopUpDivLR";
    document.getElementById('toolsmain').className = "outlinesubchapterscrollpopup hideDiv hideAnimatePopUpDivLR";
    document.getElementById('popupheader').innerHTML = "Go to";
    document.getElementById('subChapterBack').style.display = "none";
    document.getElementById('subChapterBack').innerHTML = "";
    curSelectedView = "outline";
  }
}


function showOutlineMenuFromPrint() {
  if (document.getElementById('printmain').className == "toolsmain showDiv showAnimatePopUpDiv") {
    document.getElementById('outlinemain').className = "glossarymain showPopupDiv";
    document.getElementById('gotoscrollpopup').className = "outlinemain showDiv showAnimatePopUpDivLR";
    document.getElementById('printmain').className = "outlinesubchapterscrollpopup hideDiv hideAnimatePopUpDivLR";
    document.getElementById('popupheader').innerHTML = "Go to";
    document.getElementById('subChapterBack').style.display = "none";
    document.getElementById('subChapterBack').innerHTML = "";
    curSelectedView = "outline";
  }
}


function showOutlineMenuFromSubChapter() {
  if (document.getElementById('outlinesubchapterscrollpopup').className == "outlinesubchapterscrollpopup showDiv") {
    //document.getElementById('outlinemain').className = "outlinemain showDiv showAnimatePopUpDiv";
    document.getElementById('gotoscrollpopup').className = "outlinemain showDiv showAnimatePopUpDivLR";
    document.getElementById('outlinesubchapterscrollpopup').className = "";
    document.getElementById("outlineSubChapters_" + curSubChapter).className = "outlinesubchapterscrollpopup hideDiv hideAnimatePopUpDivLR";
    document.getElementById('popupheader').innerHTML = "Go to";
    document.getElementById('subChapterBack').style.display = "none";
    document.getElementById('subChapterBack').innerHTML = "";
  }
}

/*End show previous menu functions */

function setPopUpvisibility() {
  //Set the popup style display.
  /*document.getElementById('gotostatictop').style.display = "block";
  document.getElementById('gotoleftimage').style.display = "block";
  document.getElementById('gotorightimage').style.display = "block";
  document.getElementById('gotobottom').style.display = "block";*/
}
/* Start the search popup functions */
function showSearchPopUp() {
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
  document.getElementById('gotosearchpopupL').className = "gotoscrollpopup showDiv"

  document.getElementById('searchText').style.display = "block";
  document.getElementById('searchText').style.visibility = "";
  if (document.getElementById('searchText').value == "")
    document.getElementById('searchL1').innerHTML = "";

  setDivClassName();
  hideShowBookmark();
  hideShowGotoPopupBorder('');
  if (searchScroll_ipad != null) {
    searchScroll_ipad.destroy();
  }
  if (!chkEBookFormat()) {
    searchScroll_ipad = new iScroll("searchL1");
  }
  //searchScroll_ipad = new iScroll("searchL1");
  if (isFF)
    document.getElementById('searchText').style.paddingLeft = 28;
}

function setDivClassName() {
  document.getElementById('gotoscrollpopup').className = "hideDiv";
  document.getElementById('outlinemain').className = "hideDiv";
  document.getElementById('outlinesubchapterscrollpopup').className = "hideDiv";
  document.getElementById('glossarymain').className = "hideDiv";
  document.getElementById('glossarycontent').className = "hideDiv";
  document.getElementById('bookmarksmain').className = "hideDiv";
}

//Show the tools iframe.
function showToolsFrame(loc, event) {
  var ele = event.target || event.srcElement;

  var arrHelpItems;
  var curEle;
  if (ele.tagName.toLowerCase() != 'li') {
    arrHelpItems = ele.parentElement.parentElement.getElementsByTagName('li');
    curEle = ele.parentElement;
  }
  else {
    arrHelpItems = ele.parentElement.getElementsByTagName('li');
    curEle = ele;
  }

  for (var i = 0; i < arrHelpItems.length; i++) {
    arrHelpItems[i].style.backgroundColor = "#FFFFFF";
  }
  curEle.style.backgroundColor = '#E0E0E0';
  //background:#E0E0E0;

  document.getElementById('suppiframe').src = loc;
}

//Show the Certificate iframe.
function showCertifcateFrame() {
  closePopUp();
  //hideNavButton();
  //document.getElementById('certificateDiv').style.display = "";
  //document.getElementById('header').style.display = "none";
  //document.getElementById('certificateHeader').style.display = "block";
  //document.getElementById('nGeneralPopupBody').innerHTML = window.frames['certificateDesc'].document.body.innerHTML;
  document.getElementById('nGeneralPopupBody').innerHTML = $('#certificateDesc').contents().find('html').html();
  document.getElementById('nGeneralPopupHeader').innerHTML = "Certificate";
  document.getElementById('nGeneralPopup').style.height = 570 + "px";
  document.getElementById('nGeneralPopup').style.top = 70 + "px";
  document.getElementById('nGeneralPopup').style.left = 100 + "px";
  document.getElementById('nGeneralPopup').style.width = 800 + "px";
  document.getElementById('nGeneralPopupBody').style.height = 515 + "px"
  document.getElementById('closeBtnnGeneralPopup').style.left = 750 + "px";
  document.getElementById('closeBtnnGeneralPopup').style.display = '';
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('nGeneralPopup').style.display = '';
}

function showGradedAnswers() {
  document.getElementById('gradedAnsParent').style.display = "";
  document.getElementById('header').style.display = "none";
  document.getElementById('gradedAnsHeader').style.display = "block";
}

function closeGradedAnswers() {
  document.getElementById('gradedAnsParent').style.display = "none";
  document.getElementById("gradedMask").style.visibility = "visible";
  document.getElementById("gradedAns").style.visibility = "hidden";
  document.getElementById('header').style.display = "block";
  document.getElementById('gradedAnsHeader').style.display = "none";
  var forms = document.getElementById("gradedAns").getElementsByTagName("form").length;
  for (var i = 0; i < forms; i++) {
    document.getElementById("gradedAns").getElementsByTagName("form")[0].parentNode.removeChild(document.getElementById("gradedAns").getElementsByTagName("form")[0]);
  }
  isNavButtonContent = false;

}

function setGradePageScroll() {
  var tempinnerHTML = document.getElementById("gradedAns").innerHTML;
  document.getElementById("gradedAns").innerHTML = "";
  var divele = document.createElement("div");
  divele.setAttribute("id", "childGradedAns");
  divele.setAttribute("style", "overflow:hidden;width:1020px;height:673px;");
  document.getElementById("gradedAns").appendChild(divele);
  document.getElementById("childGradedAns").innerHTML = tempinnerHTML;

  //getScrollbar(childGradedAns);
}

//This function close the tools description iframe.
function closeToolsFrame() {
  document.getElementById('header').style.display = "block";
  document.getElementById('toolsheader').style.display = "none";
  document.getElementById('toolsDiv').style.display = "none";
  document.getElementById('toolsdesc').style.visibility = "hidden";
  document.getElementById("toolsheader").style.display = "none";
  document.getElementById("toolsdesc").src = "";

  //resetPrintPageScroll();

}

//This function close the Certificate description iframe.
function closeCertificateFrame() {
  document.getElementById('header').style.display = "block";
  document.getElementById('certificateHeader').style.display = "none";
  document.getElementById('certificateDiv').style.display = "none";
}

//This function exist the course for ipad home button.
function onYesForExitCourse() {
  var videoElements = document.getElementsByTagName("video");
  if (videoElements && videoElements.length > 0) {
    try {
      videoElements[0].pause();
    } catch (e)
				{ }
  }
  var audioElements = document.getElementsByTagName("audio");
  if (audioElements && audioElements.length > 0) {
    try {
      audioElements[0].pause();
    } catch (e)
				{ }
  }
  updateCourse();
  if (saveStatusFunctionTimerPointer != null && saveStatusFunctionTimerPointer != 'undefined') {
    clearTimeout(saveStatusFunctionTimerPointer);
  }

  // in case of cross domain case, cross domain wrapper will close the window.
  try {
    if (window.parent.parent.parent.opener.parent.frames["ContentMediator"]) {
      //window.parent.parent.parent.opener.parent.close();
      document.getElementById('purchaseCancel').style.display = 'none';
      document.getElementById("nGeneralPopup").style.display = 'none';
      document.getElementById('modaldiv').style.display = 'none';
      parent.parent.document.getElementById('loadMyPage').style.display = "";
      setTimeout(function () { window.parent.parent.parent.opener.parent.close(); }, '3000');
    }
  }
  catch (Exception) {
    try {
      if (typeof window.parent.parent.parent.parent.isCourseWithoutDebugSupport != 'undefined') {
        //setTimeout("top.close()", 1000);
        document.getElementById('purchaseCancel').style.display = 'none';
        document.getElementById("nGeneralPopup").style.display = 'none';
        document.getElementById('modaldiv').style.display = 'none';
        parent.parent.document.getElementById('loadMyPage').style.display = "";
        setTimeout(function () { top.close(); }, '3000');
        return;
      }
    }
    catch (e) { }
  }
  top.close();
}
function exitCourseForIpad() {

  hideVideoControls();
  document.getElementById('nGeneralPopupHeader').innerHTML = 'Exit';
  document.getElementById('nGeneralPopupBody').innerHTML = 'Exiting the course will save your progress.' + ' Are you sure you want to exit?';
  document.getElementById("nGeneralPopup").style.display = '';

  document.getElementById('closeBtnnGeneralPopup').style.display = 'none';
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('purchaseCancel').style.display = 'block';
  document.getElementById('nGeneralPopup').style.height = 195;
  document.getElementById('nGeneralPopup').style.width = 380;
  document.getElementById('nGeneralPopupBody').style.height = 270;
  document.getElementById('purchaseCancel').style.paddingLeft = 20;
  //aligning the div popup center
  var controlpageele = document.getElementById('controlpage');
  var nGeneralPopoupele = document.getElementById('nGeneralPopup');

  nGeneralPopoupele.style.left = 512 - (parseInt(nGeneralPopoupele.style.width) / 2);
  nGeneralPopoupele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopoupele.style.height) / 2);

  document.getElementById('purchaseCancel').style.left = 512 - (parseInt(nGeneralPopoupele.style.width) / 2);
  document.getElementById('purchaseCancel').style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) + 23;
  // end aligning the popup to center

  document.getElementById('purchaseCancel').innerHTML = '<div  style="display:\'\';left:10px;top:10px;float:left;width:130px;" class="btnLightDefault" role="button" onClick="closeGeneralPopup();">No</div><div style="display:\'\';left:60px;top:10px;float:left;width:130px;height:26px;" onClick="onYesForExitCourse();" class="btnNormalDefault" role="button">Yes</div>';

}

//This function exist the course for close button.
function exitCourseFromClose() {

  var videoElements = document.getElementsByTagName("video");
  if (videoElements && videoElements.length > 0)
    videoElements[0].pause();

  var audioElements = document.getElementsByTagName("audio");
  if (audioElements && audioElements.length > 0)
    audioElements[0].pause();

  updateCourse();

  if (saveStatusFunctionTimerPointer != null && saveStatusFunctionTimerPointer != 'undefined') {
    clearTimeout(saveStatusFunctionTimerPointer);
  }
}

function openTranscriptPopupIPad() {/*
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
		document.getElementById('scrollpopup').style.width = "95%"*/
}

function showCalculator() {
  closePopUp();
  //Hide the goto popup.
  document.getElementById('gotosearchpopupL').style.display = "none";
  document.getElementById('gotocalcpopupL').style.display = "block";
  /*document.getElementById('gotorightimage').style.display = "none";
  document.getElementById('gotoleftimage').style.display = "none";
  document.getElementById('gotostatictop').style.display = "none";*/
  document.getElementById('gotoUpArrow').style.display = "";
  document.getElementById('gotoUpArrow').className = "gotoArrow calculatorArrow";

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

function showHelp() {
  hideShowBookmark("none");
  alert("Help");
}


function closePopUp() {
  if (document.getElementById('bookmarkaddedcontainer').style.display != 'none') {
    document.getElementById('bookmarkaddedcontainer').style.display = 'none';
  }
  if (showPreviewPopUpFlag) {
    showPreviewPopUpFlag = false;
    return;
  }
  var purchaseCancelImg = document.getElementById('purchaseCancel');
  if (purchaseCancelImg.style.display == 'block') {
    //document.getElementById('courseOutlinesubchapter').style.display = 'none';
    //document.getElementById('subChapterdivpointer').style.display = 'none';
    purchaseCancelImg.style.display = 'none';
    document.getElementById('nGeneralPopup').style.display = 'none';
    document.getElementById('modaldiv').style.display = 'none';

    if (isOutlineOpen && !outlineanimating) {
      //OutlineHide(0);
      ShowHideOutline();
    }
  }
  if (navigator.userAgent.match(/iPad/i) != null && document.getElementById("videoForEbook")) {
    $("#videoForEbook").attr("controls", "controls");
  }


  if (document.getElementById('searchcontainer').style.display != 'none') {
    document.getElementById('searchText').blur();
    document.getElementById('searchcontainer').style.display = 'none';
    document.getElementById('searchText').value = "";
    document.getElementById('searchCancelButton').style.display = 'none';
  }

  if (document.getElementById('bookmarkEdit').style.display != 'none') {
    document.getElementById('bookmarkEdit').style.display = 'none';
    EditBookMarkBack();
  }

  showNavButton();


  //outlineflag=0;
  //This function set all the popup div's class name as a hideDiv.
  hideGotopopupDivs();
  //Set the popup style display.
  if (document.getElementById('gotopopupL').style.visibility != "hidden") {
    document.getElementById('gotopopupL').style.visibility = "hidden";
  }

  hideShowGotoPopupBorder('none');


  /*if(isTranscriptOpen)
  {
  closeTranscript();
  }*/

  //closing feedback popup
  if (document.getElementById('FeedBackPopup').style.display != 'none') {
    document.getElementById('FeedBackPopup').style.display = 'none';
    document.getElementById('FeedBackPopupL1').innerHTML = '';
    document.getElementById('FeedBackHead').innerHTML = '';
  }

  if (document.getElementById('containerdiv').style.display != 'none') {
    document.getElementById('animdiv').style.left = 0;
    document.getElementById('containerdiv').style.display = 'none';
  }

  if (document.getElementById('BookmarkContainerdiv').style.display != 'none') {
    document.getElementById('bookmarksContent').innerHTML;
    //HideBkmrkDeleteBtn();
    showHideBkmrkDeleteOpt('hide');
    if (!editBookMarkFlag) {
      editBookMarkFlag = true;
      document.getElementById('bkeditbtn').innerHTML = "Edit"
    }
    document.getElementById('BookmarkContainerdiv').style.display = 'none'
  }

  if (document.getElementById('gotosearchpopupL').style.visibility != "hidden") {
    //document.getElementById('gotosearchpopupL').style.visibility = "hidden";
    //document.getElementById('searchText').style.display = "none";
    //document.getElementById('searchText').style.visibility = "";
  }
  if (document.getElementById('gotocalcpopupL').style.visibility != "hidden") {
    document.getElementById('gotocalcpopupL').style.visibility = "hidden";
    document.getElementById('cal').style.visibility = "";
  }

  // This function close the open popup window .
  if (document.getElementById('popupL').style.visibility != "hidden") {
    document.getElementById('popupL').style.visibility = "hidden";
    document.getElementById('popupHeaderArrow').style.visibility = "hidden";
    document.getElementById('courseviewmain').style.backgroundColor = '';
    document.getElementById(currentDivId).style.backgroundColor = '';
    //openPopupScroll=null;
    //document.getElementById('popupL1Msg').innerText='';
  }
  if (document.getElementById("bookmarkAdd").style.display == "") {
    $("#txtbkDescription").blur();
    document.getElementById("bookmarkAdd").style.display = "none";
    document.getElementById('subChapterdivpointer').style.display = "none";
  }
  if (curSelectedView != null && curSelectedView != '' && curSelectedView != "courseview") {
    document.getElementById(curSelectedView + "main").className = "glossarymain hidePopUpDiv ";
  }


  document.getElementById("gotoUpArrow").style.display = "none";
  //hideShowBookmarkIcon("");
  hideShowHelp('none');
  hideShowVideoControl("");
}

function hideGotopopupDivs() {
  /*document.getElementById('searchscrollpopup').className = "hideDiv";
  document.getElementById('gotoscrollpopup').className = "hideDiv";
  document.getElementById('outlinemain').className = "hideDiv";
  document.getElementById('outlinesubchapterscrollpopup').className = "hideDiv";
  document.getElementById('glossarymain').className = "hideDiv";
  document.getElementById('glossarycontent').className = "hideDiv";
  document.getElementById('bookmarksmain').className = "hideDiv";*/
}

function showGlossary_iphone() {
  var tempGlossDescription;
  var index;
  var lastIndex;

  var glossaryText = document.getElementById('glossaryText');
  glossDescription = document.getElementById("glossiframe").contentWindow.document.body.innerHTML;

  if (glossDescription != '') {
    document.getElementById('gotopopupL').style.visibility = "";

    if (pageOrigin != null && pageOrigin != 'undefined' && pageOrigin.toLowerCase() == "search") {

      document.getElementById('gotosearchpopupL').className = "hidePopupDiv hideAnimatePopUpDiv";
      document.getElementById('glossarycontent').className = "glossarycontent showPopupDiv showAnimatePopUpDiv";
      document.getElementById('glsTextBack').innerHTML = "Search";
    }
    else {
      var desiredProduct = document.getElementById("desired-product-behavior");
      if (desiredProduct && desiredProduct.value == "study") {
        showGotoPopUp();
        selectMenu('glossary');
        if (glossaryItemScroll_ipad != null) glossaryItemScroll_ipad.destroy();
        if (!chkEBookFormat()) {
          glossaryItemScroll_ipad = new iScroll("glsItem");
        }
        //glossaryItemScroll_ipad=new iScroll("glsItem");
        document.getElementById('gotoscrollpopup').className = "hidePopupDiv ";
        document.getElementById('glossarycontent').className = "glossarycontent showPopupDiv ";

      }
      else {
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
    tempGlossDescription = glossDescription.substring(0, index);
    tempGlossDescription = tempGlossDescription + glossDescription.substring(lastIndex, glossDescription.length);
    glossDescription = tempGlossDescription;
    glossDescription = "<h3>" + document.getElementById("glossiframe").contentWindow.document.title + "</h3>" + tempGlossDescription;
    //start for discription
    if (highlightMe) {
      highlightMe = false;
      forSerachKey = glossDescription;
      forSerachKey = genrateHighlightData(forSerachKey);
      glossDescription = forSerachKey;
    }
    //end
    glossaryText.innerHTML = glossDescription;
    if (glossaryTextScroll != null)
      glossaryTextScroll.destroy();

    if (!chkEBookFormat()) {
      glossaryTextScroll = new iScroll("glossaryText");
    }
    //glossaryTextScroll=new iScroll("glossaryText");
  }
}
function showIPadPopup(title, description, top, left, height, width, scrollPopupWidth, scrollPopupPaddingRight) {

  var popupLObj = $get('popupL');
  popupLObj.style.visibility = 'visible';
  popupLObj.style.display = 'block';
  forSerachKey = description;
  description = forSerachKey;
  if (title != '') {
    forSerachKey = title;
    title = forSerachKey;
    title = forSerachKey;
    title = forSerachKey;
    $get('popupL1').innerHTML = '<b>' + title + '</b><br/>' + description;
  }
  else {
    $get('popupL1').innerHTML = description;
  }

  if (top != null && top != 'undefined') {
    popupLObj.style.top = top;
  }
  if (left != null && left != 'undefined') {
    popupLObj.style.left = left;
  }
  if (height != null && height != 'undefined') {
    popupLObj.style.height = height;
  }
  if (width != null && width != 'undefined') {
    popupLObj.style.width = width;
  }

  if (scrollPopupWidth != null && scrollPopupWidth != 'undefined') {
    document.getElementById("scrollpopup").style.width = scrollPopupWidth;
  }
  if (scrollPopupPaddingRight != null && scrollPopupPaddingRight != 'undefined') {
    document.getElementById("scrollpopup").style.paddingRight = scrollPopupPaddingRight;
  }
  //if(openPopupScroll!=null){ openPopupScroll.destroy();}
  if (!chkEBookFormat()) {
    //openPopupScroll = new iScroll("popupL1");
  }
  //openPopupScroll = new iScroll("popupL1");
}
//End HRB: Added to show the popup for interactivity and Set title and description.

function showIPadPopup1(ele, trObject) {
  closePopUp();

  var id = ele.id;
  var childdivs = ele.getElementsByTagName('div');

  if (id == "responsew" || id == "responser") {
    //answer is incorrect
    var ans;
    var tempans = "";
    var i;

    if (id == "responser")
      ans = childdivs[1].innerHTML.substring(22, childdivs[1].innerHTML.length - 1);
    else
      ans = childdivs[1].innerHTML.substring(25, childdivs[1].innerHTML.length - 1);

    if (document.getElementById('Feedback')) {
      // qtype = fib
      document.getElementById('FeedBackHead').innerHTML = childdivs[1].innerHTML;
    }
    else {
      for (i = 0; i < ans.length - 1; i++) {
        tempans = tempans + ans[i] + ',';
      }
      tempans = tempans + ans[i];
      document.getElementById('FeedBackHead').innerHTML = childdivs[1].innerHTML.replace(ans, tempans);
    }
    inhtml = ele.innerHTML.replace(/responsediv/ig, '');
    document.getElementById('FeedBackPopupL1').innerHTML = childdivs[2].innerHTML;
    /*if(id=="responsew")
    document.getElementById("FeedBackImg").src="common/images/incorrect_ans.png";
    else
    document.getElementById("FeedBackImg").src="common/images/correct_ans.png";*/
  }
  else {
    document.getElementById('FeedBackHead').innerHTML = ele.innerHTML;
    //document.getElementById("FeedBackImg").src="common/images/notfound.png";
  }

  if (trObject != 'undefined') trObject.getElementsByTagName('div')[0].innerHTML = document.getElementById('FeedBackPopup').innerHTML;


  trObject.style.display = '';
  $(trObject.getElementsByTagName('div')[0]).slideDown(500);
  var ele = document.getElementById('content_question');
  if (ele && ele.scrollHeight > ele.offsetHeight)
    document.getElementById('FooterMask').style.visibility = 'visible';


  //document.getElementById('FeedBackPopup').style.top = $("#optionTbl").offset().top;

  //document.getElementById('FeedBackPopup').style.display='';

  /*
  var scrollpopupForEbookObj = $get('scrollpopupForEbook');
  var popupL1ForEbookObj = $get('popupL1ForEbook');
	
  document.getElementById('transheader').innerHTML=title;
  popupL1ForEbookObj.innerHTML = "";
	

  scrollpopupForEbookObj.style.display='block';
  popupL1ForEbookObj.innerHTML = description;
  if(top!=null && top!='undefined'){
  scrollpopupForEbookObj.style.top = top;
  }
  else
  {
  scrollpopupForEbookObj.style.top = $("#optionTbl").offset().top;
  }
  if(left!=null && left!='undefined'){
  scrollpopupForEbookObj.style.left = left;
  scrollpopupForEbookObj.style.height = "450px";
  scrollpopupForEbookObj.style.backgroundColor='#D3D3D3';
  document.getElementById("trasClose").style.display = '';
  document.getElementById("trasClose").style.top = '0px' ;
  document.getElementById("trasClose").style.left = '288px';
  }
  else
  {
  scrollpopupForEbookObj.style.left = '644px';
  popupL1ForEbookObj.style.height = '150px';
  scrollpopupForEbookObj.style.backgroundColor='white';
  }
	
	
  /*scrollpopupForEbookobj.style.visibility='visible';
  forSerachKey=description;
  description=forSerachKey;
  if(title != ''){
  forSerachKey=title;
  title=forSerachKey;
  title=forSerachKey;
  title=forSerachKey;
  $get('scrollpopupForEbook').innerHTML='<b>'+title+'</b><br/>'+description;
  }
  else{
  $get('scrollpopupForEbook').innerHTML=description;
  }
	
  if(top!=null && top!='undefined'){
  scrollpopupForEbookobj.style.top=top;
  }
  if(left!=null && left!='undefined'){
  scrollpopupForEbookobj.style.left=left;
  }
  if(height!=null && height!='undefined'){
  scrollpopupForEbookobj.style.height=height;
  }
  if(width!=null && width!='undefined'){
  scrollpopupForEbookobj.style.width=width;
  }*/
}


//Start HRB: Added to hide the popup for interactivity and Reset title and description.
function hideIPadPopup() {

  $get('popupL').style.display = 'none';
  $get('popuptitle').innerText = '';
  $get('popupL1').innerText = '';
  document.getElementById('popupHeaderArrow').style.visibility = "hidden";
  //to hide left arrow in click and reveal type 3

}

function closePopUpMsg() {
  document.getElementById(currentDivId).style.backgroundColor = '';
  hideIPhoneConfirmPopup();
}
function SelectedMenu(viewName) {

  for (var i = 0; i < menuOption.length; i++) {
    var element = document.getElementById(menuOption[i]);
    var temp = "menubutton" + menuOption[i] + "Active";
    var ele = element.className;
    if (element != null && element != 'undefined') {
      element.className = ele.replace(temp, '');
      temp = "menubutton" + menuOption[i] + "Inactive";
      ele = element.className;
      element.className = ele.replace(temp, "") + " menubutton" + menuOption[i] + "Inactive";

      if (menuOption[i] == viewName) {
        element.className = element.className + " menubutton" + menuOption[i] + "Active";
      }
    }

  }
}

function closeSerachResultsIpad() {
  document.getElementById('searchText').value = "";
  callSearchFns()
}

function fnCheckIsBookmarkAdded(title) {
  for (itr = 0; itr < bookmarkArray.length; itr++) {
    try {
      //hrb: 10-Dec-2010 as for mlearning course we didnt provide text for bookmark
      //when delete the global bookmark count doesnt get decrement , bcoz of this some null value are introdue in bookmarkArray. 
      //to avoid this null bookmark entries we introduce if statement

      if (bookmarkArray[itr] != null && bookmarkArray[itr].bkTitle != null) {
        if (bookmarkArray[itr].bkTitle == title) {
          return true;
        }
      }

    }
    catch (err) {
      alert("INVALID_BOOKMARK");
      return false;
    }
  }
  return false;
}

function fnDeleteBookMark_ipad(title) {
  for (itr = 0; itr < bookmarkArray.length; itr++) {
    try {
      if (bookmarkArray[itr] != null && bookmarkArray[itr].bkTitle && bookmarkArray[itr].bkTitle != '') {
        //Note: for mlearning we pass book mark description for delete as we didnot have bookmark index
        if (bookmarkArray[itr].bkTitle == title) {
          bookmarkArray.splice(itr, 1);
          var newdiv = '';
          newdiv = createBookmarkli(bookmarkArray);
          break;
        }
      }
    }
    catch (err) {
      alert(DELETE_BOOKMARK_WARNING + err);
    }
  }
}


function hideShowBookmark(action) {
  document.getElementById("bookmarkAdd").style.display = action;
}

function hideShowBookmarkIcon(action) {
  document.getElementById("bookmarkDiv").parentElement.style.display = action;
}

function hideShowGotoPopupBorder(action) {
  document.getElementById('gotopopupRight').style.display = action;
  document.getElementById('gotopopupLeft').style.display = action;
}


function hideShowHelp(display) {
  if (display.toLowerCase() == "none") {
    //document.getElementById('gotoHelp').className="hideDiv"
  }
  else {
    closePopUp();
    hideShowBookmarkIcon("none");

    document.getElementById('gotoUpArrow').style.display = "";
    document.getElementById('gotoUpArrow').className = "gotoArrow helpArrow";
    document.getElementById('gotocalcpopupL').style.display = "none";


    document.getElementById('gotopopupL').style.visibility = "";
    document.getElementById('gotopopupL').style.display = "block";

    //document.getElementById('gotoHelp').className="gotoscrollpopup showDiv"
    setDivClassName();
    hideShowBookmark();
    hideShowGotoPopupBorder('');
  }
}

//start confirm popup box
function closeconfirmPopUpMsg() {
  document.getElementById(currentDivId).style.backgroundColor = '';
  closeGeneralPopup();
  //hideIPhoneConfirmPopup();

}

function closeconfirmPopUpMsgOk() {
  //outlineflag=0;
  document.getElementById(currentDivId).style.backgroundColor = '';
  closeGeneralPopup();
  //hideIPhoneConfirmPopup();
  if (callFrom == "sc")
    Sc(confirmCode);
  else if (callFrom == "St")
    St(confirmCode);
  else {
    mode = "study";
    ShowMainContent_iphone(confirmCode);

  }
}

//Start HRB: Added to show the popup for confirm box  and Set title and description.
function showConfirmPopup(title, description, code, from) {
  confirmCode = code;
  callFrom = from;
  document.getElementById('nGeneralPopupHeader').innerHTML = title;
  document.getElementById('nGeneralPopupBody').innerHTML = description;
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('closeBtnnGeneralPopup').style.display = 'none';
  document.getElementById('nGeneralPopup').style.height = 260 + "px";
  document.getElementById('nGeneralPopup').style.width = 380 + "px";
  document.getElementById('nGeneralPopupBody').style.height = 270 + "px";
  document.getElementById('purchaseCancel').style.paddingLeft = 20 + "px";

  //aligning the div popup center
  var controlpage = document.getElementById('controlpage');
  var nGeneralPopup = document.getElementById('nGeneralPopup');

  nGeneralPopup.style.left = 512 - (parseInt(nGeneralPopup.style.width) / 2);

  nGeneralPopup.style.top = controlpage.offsetTop + (controlpage.offsetHeight / 2) - (parseInt(nGeneralPopup.style.height) / 2);

  document.getElementById('purchaseCancel').style.left = 512 - (parseInt(nGeneralPopup.style.width) / 2);

  document.getElementById('purchaseCancel').style.top = controlpage.offsetTop + (controlpage.offsetHeight / 2) + 70;
  // end aligning the popup to center

  document.getElementById('purchaseCancel').innerHTML = '<div  style="display:\'\';left:10px;top:10px;float:left;width:130px;" class="btnLightDefault" role="button" onClick="closeconfirmPopUpMsg();">Cancel</div><div style="display:\'\';left:60px;top:10px;float:left;width:130px;height:26px;" onClick="closeconfirmPopUpMsgOk();" class="btnNormalDefault" role="button">Ok</div>';
  document.getElementById("nGeneralPopup").style.display = '';
  document.getElementById('purchaseCancel').style.display = '';
}

//Start HRB: Added to hide the popup for confirm box  and Reset title and description.
function hideIPhoneConfirmPopup() {

  $get('backgroundpopup').style.visibility = 'hidden';
  $get('confirmPopupMsg').style.display = 'none';
  $get('confirmPopuptitleMsg').innerText = '';
  $get('confirmPopupL1Msg').innerText = '';
}
//End HRB: Added to hide the popup for confirm box and Reset title and description.
//end confirm box

//Start HRB: Added to hide video control on menu click
function hideShowVideoControl(display) {
  var videoElement = document.getElementsByTagName("video");
  for (var videoCnt = 0; videoCnt < videoElement.length; videoCnt++) {
    videoElement[videoCnt].parentNode.style.display = display;
    if (display == "none") {
      $get('backgroundForVideo').style.display = "";
    }
    else {
      $get('backgroundForVideo').style.display = "none";

    }
  }
}
//End HRB: Added to hide video control on menu click

// function copied form iscroll.js

function $get(id) {
  var ele = document.getElementById(id);
  if (ele == null) {
    ele = parent.frames.frame_b.document.getElementById(id);
  }
  return ele;
}



function openPrintPage(printPageLocation) {
  //	document.getElementById('printPageFrame').src = printPageLocation;
  window.open(printPageLocation);
}
function hideVideoControls() {
  if (navigator.userAgent.match(/iPad/i) != null && document.getElementById("videoForEbook")) {
    $("#videoForEbook").removeAttr("controls");
  }
}

// function added for touch navigation 

function touchStart(e) {
  //alert(e.targetTouches[0].pageX);
  var me = this;
  me.StartX = e.targetTouches[0].pageX;
}


function touchEnd(e) {
  var me = this;
  var endX = e.changedTouches[0].pageX;

  var difference = me.StartX - endX;

  if (difference < 0) difference = difference * (-1);
  navDiff = difference;

  if (me.StartX > endX) {
    if (parseInt(me.StartX, 10) > 0 && difference > 100) {
      Next();
    }
  }
  else {
    if (parseInt(me.StartX, 10) > 0 && difference > 100) {
      Prev();
    }
  }

}

// end functions for touch navigation


// functions to add and remove ontouch Listeners in content div.

function removeTouchListeners() {
  $('#content').removeAttr('ontouchstart');
  $('#content').removeAttr('ontouchend');
}

function addTouchListeners() {
  document.getElementById('content').ontouchstart = function (event) { touchStart(event) };
  document.getElementById('content').ontouchend = function (event) { touchEnd(event) };
}


// end functions to add and remove ontouch Listeners in content div.

function submitExercise(event, ele) {
  if (ele.value == "")
    $(document.getElementById('Feedback').getElementsByTagName('div')[0]).slideUp(500);
  else if (event.keyCode == 13) {
    GradeQuestion(parent.frames[1].StudyQuesCorrectResponse, document.getElementById('Feedback'));
    ele.blur();
  }
}