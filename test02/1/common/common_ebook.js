//Start HRB: (07/22/09)
//varibles i,j,k are removed with proper name like index,counter ,cnt
//Macros are used for the constants which are used in many places
//Elements are taken into objects for avoiding the unwanted processimg
//End HRB: (07/22/09)

//Global variables Declaration

var listitems;
var posArray = new Array();
var gl_bkshufflestart;
var bkshuffleflag = false
var bkmrk_buffer;
var direction = 1;

var enableSubmitTest = false;
var outlineanimating = false;
var toolsmenuanimating = false;
var curSubChapForTest;

var navDisableFlag = false;
var backDisabledFlag = false;
var nextDisabledFlag = false;

var TxtBkDescVar = "";

var navDiff = 0;
var IPAD_NAV_DIFF = 100;

//var navigateForAPW4 = null;
var pageOrigin = "";
var VisibleResponse = "";
var T = 0;
var L = 0;
var VisibleMenu = "";
var QuestionNumbers = "";
var mode = "study";
var CurrentTestQuestion = 0;
TestQuestion = new Array();
var CategoryList;
var CurrentChapter;
var FirstPage;
var LastPage;
var CurrentStudyPage;
var CurrentRemedialPage;
var RemedialArray = new Array();
var MainWin = null;
var CertificateWin = null;
var HelpWin = null;
var PrintWin = null;
var Status = new Array();
var TestChapter;
var scorm = false;
var courseoffset;
var printHeightAdjustmentFactor = 45;
var g_isOLP = false;
var strWordsArr = new Array();
var strPageArr = new Array();
//Start HRB: Added for mLearning

var isEbook = false;
var isNavButtonContent = false;
var checkStudyQuestion = false;
var forTrInRestoreState = "";
var recentSearch = "";

var bkMarkDeleteFlag = true;
var editBookMarkFlag = true;
var isTranscriptOpen = false;
//Start HRB: Added for mLearning

//start highlight text 
var forSerachKey = null, searchStr = "", highlightStartTag = null, highlightEndTag = null, bgColor = null;
bgColor = "yellow";
highlightStartTag = "<font style='background-color:" + bgColor + ";'>";
highlightEndTag = "</font>";
var highlightMe = false;
//end highlight text
//hrb start : added variables for bookmark
var bookmarkHeightAdjustmentFactor = 26;
var bookmarkFlag = true;
//hrb start : added for Firefox
var bookmarkFireFoxFlag = true;
var bookmarkArray = new Array()
var gbl_bookmarkStr = "";
var gbl_bkCounter = 0;
//hrb end : added variables for bookmark

//Hrb: added to test, whether outline is open
var outlineflag = 0;
//HRB: Added For Progress Bar 

var VisitedPages = new Array();
var percentageOfCompletion = 0;

//For getting the course title
var courseTitle;
//HRB: End of Added for outline chapter status

var isExitClicked = false;
var isGradeMyAnswerClicked = false;

var isStrVisitedPagesRestored = false;
var isbuildVisitedPagesArrayFuncCalled = false;

// start HRB : added to avoid looping on clicking the exit button
var timeout = false;
// end HRB : added to avoid looping on clicking the exit button

//Hrb:Added to calculate total no. of question attempted by user
var totalQuestionattempted;
//HRB: Added for showing chapter test description page
var isChapterTestPageShown = false;
//HRB: End of Added for showing chapter test description page

//Start HRB: Added for outline panel after all question attempted and chapter test submited
var isChapterTestSubmited = false;
//End HRB: Added for outline panel after all question attempted and chapter test submited

//hrb start : Added to save the no of attempts
var NoOfAttemptsChapterTestStr;
//hrb end : Added to save the no of attempts

//HRB: Added for max no of attempts
//var maxnoOfAttempts = 3;
// This variable is commented because number of attempts for test is fetched from metadata file in 'testAttempts' vaiable
//var MAXIMUM_NO_OF_ATTEMPT = 3;

var CHAPTER_TEST_PASSED = 9999;

var VisitedPageNumStr = "";
var CompletedChapterCodeStr = "";
var InCompletedChapterCodeStr = "";
var CurrentSubChapterCode = "";
//HRB: End of Added for outline chapter status

//hrb:added for passed chapters
var passedChapters = "";
var passedChapterDescStr = "";
//hrb:added for graded questions per chapter
var GradedQuestions;

//start Hrb: Added variables for Final Exam 
var finalQuestions = new Array();
var tempFinalExamQuestions = new Array();
var finalExamTotalQuestions = 0;
var takeFinalExamFromOutline = false;

//-1 -- Not Started, 0-- Incomplete, 1--Complete
var finalExamStatus = "-1";
//End hrb: Added variables for Final Exam 

//hrb start : added to save the state of test pass/fail page, congratulation page and remedial pages
var testDescriptionStr = "";
var passfailDescriptionStr = "";
//hrb start : to store remedial details

//hrb end : to store remedial details
var StatusStr = "";
var tempPassingDateStr = "";
//hrb end : added to save the state of test pass/fail page, congratulation page and remedial pages

//hrb:added to check whether certificate button is clicked
var iscertificateclicked = false;
//hrb:end of added to check whether certificate button is clicked

//hrb: start added to check whether div is opened through the search result
//hrb: end added to check whether div is opened through the search result

//hrb start 18/5/2009:added for performance standards
var selectedBandwidth = "high";
var hideVolumeIcon = "no";
//hrb end 18/5/2009:added for performance standards

//hrb start 19/5/2009: added to check whether click and reveal popup is open
var isRevalClicked = false;
//hrb end 19/5/2009: added to to check whether click and reveal popup is open

//hrb start 28/5/2009:added to count the no. of match pair
var cntMatchPair = 0;
//hrb end 28/5/2009:added to count the no. of match pair

//start Hrb(05/25/2009): Added for course previewer
var lessonMode = 'CREDIT';


//hrb start: added to check if course is expired
var isExpired = false;

//hrb end: added to check if course is expired
var expiredDate = '';

//hrb:added to store lesson status
var lesson_status = 'INCOMPLETE';
var isDemoCoursePopUpOnNextClick = false;
//End Hrb(05/25/2009): Added for course previewer

//Start Hrb(06/16/2009): Added for preserving test questions
var strChapterTestQuestionResponse;
var gbl_strChapterTestAttemptStatus;
var strChapterTestAttemptStatus;
var gbl_QuestionChapter;
var gbl_QuestionNumber;
var gbl_QuestionNumberSeq;
var arrFinalQuestions;
var arrChaterTestStartAttempt;
var arrChapterTestAttemptStatus;

//Values for these arrays will be set when user responses to chapter TQ
//used to crate the final string to save in xml file
var arrChapterQuestion;
var arrChapterQuestionResponse;
var activityThresholdValue = 0;
var arrStudyQuestionWithResponse;
//End Hrb(06/16/2009): Added for preserving test questions

//hrb start:added to store the prev mode in case of remedial pages
//hrb end:added to store the prev mode in case of remedial pages

var gbl_CourseCertificateURI = "";
var gbl_CourseShoppingCartURI = "";
var gbl_CourseFeedbackURI = "";
var gbl_CourseId = "";
var gbl_CurrentTestScore;
//hrb: Added to store the progress of chapter tests
//var gbl_completedQues = 0;

//start hrb:Added for match the pair question type
var gbl_ColQuestOpt = "";
var gbl_ColAnsOpt = "";
var gbl_QuestAnsPairStr = "";
var jg;
var gbl_TestQuestionArray = "";

//start Hrb: Added to check if question response/chapter test attempt status changed
var isQuestionResponseChanged = 0;
var isChapterTestAttemptChanged = 0;
//end Hrb: Added to check if question response/chapter test attempt status changed

//start Hrb(08/18/2009): Added to get the unselected TQs which is further required for randomization
var gbl_newQuestionSetyArray;

//CONSTANS DECLARATION
//HRB: Added for outline chapter status
var NOTSTARTED_STATUS_IMG = "common/images/dot_notStarted.gif";
var INCOMPLETED_STATUS_IMG = "common/images/dot_Incomplete.gif";
var COMPLETED_STATUS_IMG = "common/images/tick.gif";
var MATCHPAIR_SELECTED = "common/images/match-selected.gif";
var MATCHPAIR_DESELECTED = "common/images/match-column.gif";
var COURSE_PREVIEW_MESSAGE = "Thank you for previewing this course:<br>To complete the course, you'll need to first purchase it.<br>To purchase this course now, select the <i>Purchase</i> button.<br>";

var EXAM_POSITION_BYCHAPTER = "bychapter";
var EXAM_POSITION_BYCOURSE = "bycourse";

var LESSON_PREVIEWER_MODE = "COURSEPREVIEWER";
var LESSON_CREDIT_MODE = "CREDIT";
var LESSON_PILOTTESTING_MODE = "PILOTTESTING";
var COURSE_TYPE_MICROMASH = "MicroMash";

var TITLE_PAGE_NO = 0;
var WELCOME_PAGE_NO = 1;
var COURSEINFO_PAGE_NO = 2;
var LEARNING_OBJECTIVE_PAGE_NO = 3;

// start hrb 23/Apr/2009: Added for print pop menu
var PRINT_TOP_POS = "663px";
// end hrb 23/Apr/2009: Added for print pop menu
var DEFAULT_TOP_POS = "673px";
var SEARCH_TOP_POS = "645px";
// start hrb 22/Apr/2009: Added for bookmark pop menu
var BOOKMARK_TOP_POS = "518px";
// end hrb 22/Apr/2009: Added for bookmark pop menu

var OPEN_CERTIFICATE_LINK = "CERTIFICATE";
var OPEN_PURCHASE_LINK = "PURCHASE";
var OPEN_FEEDBACK_LINK = "FEEDBACK";
//Start Hrb: Showing pop up  is selected only one answer
var multipleChoiceSelectionMessage = "";
//End Hrb: Showing pop up  is selected only one answer

//@sha userAgentTag to check the conditional

var NOTSTARTED_STATUS_CLASS = "categoryIcon_template categoryIconNotAttempted";
var INCOMPLETED_STATUS_CLASS = "categoryIcon_template categoryIconInComplete";
var COMPLETED_STATUS_CLASS = "categoryIcon_template categoryIconComplete";
//@shaEnd

// Add variable for mouse position.
var x_pos = 0;
var y_pos = 0;


var saveStatusFunctionTimerPointer; //added to remove set time interval after course exit for iphone OLP player
var currentDivId = 'content';

var gbl_ServerURI = ""    //HRB:Added for mLearning courses.
var gbl_outlineForGlossary = false; // added fto check whether glossary is from outline or content
//@sha check that is not null or undefined
function isNotNullOrUndefined(controlId) {
  var ele = document.getElementById(controlId);
  if (ele == null || ele == 'undefined') {
    return false;
  }
  else {
    return true;
  }

}
//@shaEnd

//Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
var isFeedbackURLResponseSet = false;
var isCongratsLastPageSet = false;
//End HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode

//Start HRB: Added for mLearning Help Course.
var isHelpCourse = false;
//End HRB: Added for mLearning Help Course.

//added for 508 changes
var is508User = false;
var isNextPrevious = false;
var isshiftortab = false;
var isRestoreState = false;
//end added for 508 changes

var showPreviewPopUpFlag = false;
var isNextBtnUpHandlerFlag = false;

var ebookCourseVideoURI = "";

function fnSubmitAnswer(inputType, calledFromSearchPopup) {
  event = window.event;

  if (event != null && event.stopPropagation) {

    event.stopPropagation();
  }
  else if (window.event) {
    window.event.cancelBubble = true;
  }
  var objResponsediv = document.getElementById("responsediv");
  if (objResponsediv)
    objResponsediv.scrollTop = 0;

  if (searchpopupFlag == 'true')
    return;

  var noOfControls;
  var objProductBehaviour = document.getElementById("desired-product-behavior");

  //Start Hrb(06/16/2009): Added for preserving test questions
  if (objProductBehaviour != null) {
    if ((inputType == 'checkbox' || inputType == 'radio') && (objProductBehaviour.value == "study")) {
      //reset the flag to '1' when any question attempted
      isQuestionResponseChanged = 1;
      FillStudyQuestionArray();
    }
  }
  //end Hrb(06/16/2009): Added for preserving test question
  var curDocFrm = document.forms[0];
  if (curDocFrm.name != "frmQuestion" && document.forms.length > 1) {
    for (var cntFrm = 0; cntFrm < document.forms.length - 1; cntFrm++) {
      if (document.forms[cntFrm].name == "frmQuestion") {
        curDocFrm = document.forms[cntFrm];
        break;
      }
    }
  }

  if (inputType == 'checkbox' || inputType == 'radio') {
    noOfControls = curDocFrm.getElementsByTagName('input');
    var itr = 0;

    for (itr = 0; itr < noOfControls.length; itr++) {
      if (noOfControls[itr].checked == true) {
        break;
      }
    }

    if (itr >= noOfControls.length) {
      fnEnableSubmitAnswer(false);
      return;
    }

    fnEnableSubmitAnswer(true);
  }
  else if (inputType == 'text') {
    noOfControls = curDocFrm.getElementsByTagName('input');
    var textValue = noOfControls[0].value;

    textValue = textValue.replace(/^\s+/, '');

    if (textValue == "") {
      fnEnableSubmitAnswer(false);
      return;
    }
    else {
      fnEnableSubmitAnswer(true);
      return;
    }
  }
  else (inputType == 'mc-fibs' || inputType == '1-1-dd' || inputType == '1-m-dd' || inputType == 'match-pair')
  {
    fnEnableSubmitAnswer(true);
    return;
  }

}
//hrb end: Added to enable submit answer button after selecting any option

//hrb start 28-5-2009: function added to enable submit answer button on click of combo box
function fnSubmitCombo() {
  if (document.getElementById('selAnswer').selectedIndex == 0) {
    fnEnableSubmitAnswer(false);
  }
  else {
    fnSubmitAnswer('combobox');
  }
}
//hrb end 28-5-2009: function added to enable submit answer button on click of combo box

//hrb start 28-5-2009: function added to enable and disable submit answer button 
function fnEnableSubmitAnswer(enabled) {
  var objSubmitAnswerEnable = document.getElementById('submitAnswerEnable');
  var objSubmitAnswerDisable = document.getElementById('submitAnswerDisable');

  if (enabled) {
    if (objSubmitAnswerEnable)
      objSubmitAnswerEnable.style.visibility = 'visible';
    if (objSubmitAnswerDisable)
      objSubmitAnswerDisable.style.visibility = 'hidden';
  }
  else {
    if (objSubmitAnswerEnable)
      objSubmitAnswerEnable.style.visibility = 'hidden';
    if (objSubmitAnswerDisable)
      objSubmitAnswerDisable.style.visibility = 'visible';
  }
}
//hrb end 28-5-2009: function added to enable and disable submit answer button

function stripCharsInBag(s, bag) {
  var index;
  var returnString = "";
  for (index = 0; index < s.length; index++) {
    var c = s.charAt(index);
    if (bag.indexOf(c) == -1) returnString += c
  }
  return returnString;
}
var l_Page_No;
var l_Total_Page_No;

function ShowStudyPage(pagenumber) {
  //HRB: Added For Progress Bar 
  removeVideoControl();
  var key = '';
  var visitedPagesKey = '';
  //End by HRB
  var ChapterSpaceSubchapter = "";
  //Start Hrb: Added variables for the elements
  var objPrevButton = document.getElementById("PrevButton");
  var objPrevButtonDisabled = document.getElementById("PrevButtonDisabled");
  var objSubchaptertitle = document.getElementById("subchaptertitle");
  //change the document id. By default currentDivId is initialised to "content"
  var objContent = document.getElementById(currentDivId);
  var objOutlinebuttonL = document.getElementById("outlinebuttonL");
  var objNextButton = document.getElementById("NextButton");
  var objNextButtonDisabled = document.getElementById("NextButtonDisabled");
  var objBkDescription = document.getElementById("bkDescription");
  var objTxtbkDescription = document.getElementById("txtbkDescription");
  var objCoursetitle = document.getElementById('coursetitle');

  //HRB: Added for new title label div obj
  var divPageTitleObj = document.getElementById("divPageTitle");


  //End Hrb: Added variables for the elements

  bookmarkFlag = true;
  testDescriptionStr = "";
  StatusStr = "";
  tempPassingDateStr = "";

  //hrb : set isChapterTestPageShown = false;
  isChapterTestPageShown = false;
  //hrb : end of  isChapterTestPageShown = false;

  //hrb start : Added to hide if page is searched and loaded from search link or from bookmark link  
  document.getElementById("showQuestionNumber").style.visibility = "hidden";
  document.getElementById("questionControlPanel").style.visibility = "hidden";

  enableSubmitTest = false;
  //   document.getElementById("submittest").style.visibility = "hidden";
  //  document.getElementById("submittest_disable").style.visibility = "hidden";
  if (document.getElementById('submitAnswerDisable'))
    document.getElementById('submitAnswerDisable').style.visibility = 'visible';
  //hrb end : Added to hide  if page is searched and loaded from search link or from bookmark link  
  selectMenu("courseview");


  if (document.getElementById('responser') && document.getElementById('responser').style) {
    document.getElementById('responser').style.visibility = 'hidden';
  }
  if (document.getElementById('responsew') && document.getElementById('responsew').style)
    document.getElementById('responsew').style.visibility = 'hidden';

  //HRB: Added for outline chapter status
  var tmpVisitedPageNumStr = "," + VisitedPageNumStr;

  if (tmpVisitedPageNumStr.indexOf("," + pagenumber + ",") == -1) {
    if (VisitedPageNumStr == "") {
      VisitedPageNumStr = pagenumber + ",";
    }
    else {
      VisitedPageNumStr = VisitedPageNumStr + pagenumber + ",";
    }
  }

  for (var index = 0; index < CategoryList.length; index++) {
    if ((CategoryList[index].FirstQuestion <= pagenumber) &&
            (CategoryList[index].LastQuestion >= pagenumber) &&
            (CategoryList[index].CategoryCode.length > 2)) {
      objSubchaptertitle.innerHTML = CategoryList[index].CategoryCode + " " + CategoryList[index].Description;

      ChapterSpaceSubchapter = CategoryList[index].CategoryCode;

      //HRB: Added for outline sub chapter status
      CurrentSubChapterCode = CategoryList[index].CategoryCode;
      //HRB: Added for outline sub chapter status

      break;
    }
  }

  CurrentStudyPage = pagenumber;

  var str = "000";
  var istr = pagenumber.toString(10);

  parent.frames.frame_b.document.location = str.substring(0, 4 - istr.length) + istr + ".htm";

  objCoursetitle.innerHTML = courseTitle;

  if (pagenumber == TITLE_PAGE_NO) {
    objOutlinebuttonL.innerHTML = "Title Page<br><br>Click for Contents";
    objSubchaptertitle.innerHTML = "";
    divPageTitleObj.innerHTML = TITLE;

    if (objBkDescription) {
      objBkDescription.innerHTML = TITLE;
      objTxtbkDescription.value = TITLE;
      TxtBkDescVar = TITLE;
    }

    //HRB: Added For Progress Bar and changing the course title to checkpoint learning
    key = "Title Page";
    visitedPagesKey = pagenumber;
    BuildVisitedPagesArray(visitedPagesKey);

    /*
    skipping in ebook as custom title is not displayed in this case 
    //HRB: Set the course title
    if(typeof(customtitle) != 'undefined') {
    objCoursetitle.innerHTML = '<div style="font:knowledge;font-size:22px">' + customtitle + '</div>';
    }*/

    // skipping the updation of title to CHECKPOINT LEARNING in case of Title page
    //else
    //  objCoursetitle.innerHTML = '<div style="font:knowledge;font-size:22px">' + CHECKPOINT + '<sup><font size="2px">&#174;</font></sup>&nbsp;' + LEARNING + '</div>';


    //hrb:added to disable prev button on title page
    objPrevButton.style.display = "none";
    document.getElementById('btnBack').style.display = "none";

    objPrevButtonDisabled.style.display = "";
    //hrb:end of added to disable prev button on title page

    //start Hrb(22/04/2009): Added for preliminary pages from outlinepanel menu
    objNextButton.style.display = "";
    document.getElementById("btnNext").style.display = "none";

    objNextButtonDisabled.style.display = "none";
    updateStatus(key, INCOMPLETED_STATUS_IMG);
    //end Hrb(22/04/2009): Added for preliminary pages from outlinepanel menu
  }
  else if (pagenumber < CategoryList[0].FirstQuestion) {
    if (pagenumber == WELCOME_PAGE_NO) {
      divPageTitleObj.innerHTML = WELCOME;
      if (objBkDescription) {
        objBkDescription.innerHTML = WELCOME;
        objTxtbkDescription.value = WELCOME;
        TxtBkDescVar = WELCOME;
      }
    }
    else if (pagenumber == COURSEINFO_PAGE_NO) {
      divPageTitleObj.innerHTML = COURSE_INFORMATION;
      if (objBkDescription) {
        objBkDescription.innerHTML = COURSE_INFO;
        objTxtbkDescription.value = COURSE_INFORMATION;
        TxtBkDescVar = COURSE_INFORMATION;
      }
    }
    else if (pagenumber == LEARNING_OBJECTIVE_PAGE_NO) {
      divPageTitleObj.innerHTML = INTRODUCTION;
      if (objBkDescription) {
        objBkDescription.innerHTML = INTRO;
        objTxtbkDescription.value = INTRODUCTION;
        TxtBkDescVar = INTRODUCTION;
      }
    }

    objOutlinebuttonL.innerHTML = "Introduction<br><br>Page " + (pagenumber).toString(10) + " of " + (CategoryList[0].FirstQuestion - 1).toString(10)

    objPrevButton.style.display = "";
    document.getElementById('btnBack').style.display = "";

    objPrevButtonDisabled.style.display = "none";
    objSubchaptertitle.innerHTML = "";

    //HRB: Added For Progress Bar 
    key = "Introduction Page" + (pagenumber).toString(10);
    visitedPagesKey = pagenumber;
    BuildVisitedPagesArray(visitedPagesKey);
    //End by HRB

    //start Hrb(22/04/2009): Added for preliminary pages from outlinepanel menu
    objNextButton.style.display = "";
    document.getElementById("btnNext").style.display = "";

    objNextButtonDisabled.style.display = "none";
    updateStatus(key, INCOMPLETED_STATUS_IMG);
    //end Hrb(22/04/2009): Added for preliminary pages from outlinepanel menu
  }
  else {
    var l_CurrentChapter = parseInt(objSubchaptertitle.innerHTML.substring(0, 2), 10).toString(10);

    if (CurrentChapter != l_CurrentChapter) {
      CurrentChapter = l_CurrentChapter;
      for (var index = 0; index < CategoryList.length; index++) {
        if (CategoryList[index].CategoryCode == CurrentChapter.toString(10)) {
          FirstPage = CategoryList[index].FirstQuestion;
          LastPage = CategoryList[index].LastQuestion;
          break
        }
      }
    }
    if (mode == "study") {
      //hrb: start code added to display the sub chapter in the location bar
      for (var index = 0; index < CategoryList.length; index++) {
        if ((CategoryList[index].FirstQuestion <= pagenumber) && (CategoryList[index].LastQuestion >= pagenumber)) {
          chCode = CategoryList[index].CategoryCode;
          if (chCode.indexOf(" ") != -1)
            break;
        }
      }
      chCode = chCode.replace(" ", ".");
      //hrb: end code added to display the sub chapter in the location bar

      //hrb: changes for next and prev button
      objPrevButton.style.display = "";
      document.getElementById('btnBack').style.display = "";

      objPrevButtonDisabled.style.display = "none";
      document.getElementById("btnNext").style.display = "";
      objNextButton.style.display = "";

      objNextButtonDisabled.style.display = "none";
      //hrb:end of changes for next and prev button

      // quick decision in 5/22/07 pre-DT meeting decreed chapters to be lessons.  So below was "Ch ", is now "Lsn " Will this be done generally?
      l_Page_No = (pagenumber - FirstPage + 1).toString(10);
      l_Total_Page_No = (LastPage - FirstPage + 1).toString(10);

      objOutlinebuttonL.innerHTML = "Lsn " + ChapterSpaceSubchapter.replace(/ /, "") + " Study<br><br>Page " + l_Page_No + " of " + l_Total_Page_No

      divPageTitleObj.innerHTML = "<span style='font-family:K-Medium;'>" + CHAPTER + " " + chCode + ", </span>" + PAGE + " " + l_Page_No + " " + OF + " " + l_Total_Page_No;

      if (objBkDescription) {
        if (LANGUAGE == "en" || LANGUAGE == "en-uk") {
          objBkDescription.innerHTML = 'Ch ' + CurrentChapter + ' P ' + l_Page_No;
        }
        else {
          objBkDescription.innerHTML = 'C ' + CurrentChapter + ' P ' + l_Page_No;
        }

        TxtBkDescVar = CHAPTER + " " + chCode + ', ' + PAGE + " " + l_Page_No + " " + OF + " " + l_Total_Page_No; ;
        objTxtbkDescription.value = TxtBkDescVar;

      }

      //HRB: Added For Progress Bar 
      key = "Ch. " + ChapterSpaceSubchapter.replace(/ /, "") + " P. " + l_Page_No;
      visitedPagesKey = pagenumber;
      //End by HRB
    }

    if (mode == "remedial") {

      l_Page_No = (pagenumber - FirstPage + 1).toString(10);
      l_Total_Page_No = (LastPage - FirstPage + 1).toString(10);


      key = '';
      visitedPagesKey = '';

    }

    //HRB: Added For Progress Bar 
    if (visitedPagesKey != '')
      BuildVisitedPagesArray(visitedPagesKey);
    //End by HRB

    //Date: 16-Feb-2006 Harbinger: Added for updating status of chapter
    updateStatus(key, INCOMPLETED_STATUS_IMG);
  }

  if (mode == "nextchapter") {
    //hrb: changes for next and prev button
    objPrevButton.style.display = "";
    document.getElementById("btnNext").style.display = "";
    objNextButton.style.display = "";

    objPrevButtonDisabled.style.display = "none";
    objNextButtonDisabled.style.display = "none";
    //hrb:end of changes for next and prev button
  }

  if (mode == "study") {
    if (isEbookEthicCourse) { //If ethic course then storing bookmark in the form of chapter_number~page_number except for the first 4 pages in the course
      if (CurrentChapter > 1) {
        var curStudyPage = CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3;
        document.progress.Bookmark(CurrentChapter + "~" + curStudyPage);
      }
      else {
        if (CurrentStudyPage > 3) {
          document.progress.Bookmark(CurrentChapter + "~" + CurrentStudyPage);
        }
        else {
          document.progress.Bookmark(CurrentStudyPage);
        }
      }
    }
    else {
      document.progress.Bookmark(CurrentStudyPage);
    }
  }
  else {
    document.progress.Bookmark(0);
  }

  //start Hrb(05/25/2009): Added for course previewer
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters))
    fnSetMenuForDemoCourse();
  //End Hrb(05/25/2009): Added for course previewer


} // end ShowStudyPage()

//HRB: Added For Progress Bar
function BuildVisitedPagesArray(visitedPagesKey) {
  var toAdd = true
  var divInnerProgressBar = document.getElementById("InnerProgressBarBlock");
  var divText = document.getElementById("divText");
  var index = 0
  var l_visitedPagesLength = VisitedPages.length;
  var toAddRefVisitedPagesKey = visitedPagesKey + "";

  if (isEbookEthicCourse) { //If ethic course then building visited pages array in the form of chaper_number~page_number except for the first 4 pages in the course
    if (toAddRefVisitedPagesKey.indexOf("-") != -1 || toAddRefVisitedPagesKey.indexOf("T") != -1) {
      toAddRefVisitedPagesKey = CurrentChapter + "~" + visitedPagesKey;
    }
    else if (CurrentStudyPage > 3) {
      if (CurrentChapter > 1) {
        var index = 0;
        for (var itr = 0; itr < CategoryList.length; itr++) {
          if (CategoryList[itr].CategoryCode == (CurrentChapter - 1).toString()) {
            index = itr;
            break;
          }
        }
        toAddRefVisitedPagesKey = CurrentChapter + "~" + (parseInt(visitedPagesKey) - CategoryList[index].LastQuestion + 3);
      }
      else {
        toAddRefVisitedPagesKey = CurrentChapter + "~" + visitedPagesKey;
      }
    }
  }
  //check if the page is already visited or not, if not then add in the array
  for (index = 0; index < l_visitedPagesLength; index++) {
    if (VisitedPages[index] == toAddRefVisitedPagesKey) {
      toAdd = false;
      break;
    }
  }

  if (toAdd) {
    VisitedPages[index] = toAddRefVisitedPagesKey;
  }

  //set the percentage of course completion
  ShowPercentageOfCourseCompletion();

  if (isbuildVisitedPagesArrayFuncCalled == false) {
    isbuildVisitedPagesArrayFuncCalled = true;
  }
}

function ShowPercentageOfCourseCompletion() {
  if (isStrVisitedPagesRestored == false && isbuildVisitedPagesArrayFuncCalled == false) {
    return;
  }
  else {
    var divInnerProgressBar = document.getElementById("InnerProgressBarBlock");
    var divText = document.getElementById("divText");

    percentageOfCompletion = parseInt((parseInt(VisitedPages.length) / parseInt(TotalPagesInCourse)) * 100);
    divText.innerHTML = '<span style="font-family:K-Medium !important;" >' + percentageOfCompletion + "%</span>" + " Complete";
    divInnerProgressBar.style.width = percentageOfCompletion + "%";
  }
}

//HRB: Added for updating status of chapter
function updateStatus(chapterKey, statusImg) {
  var chapterNo = -1;
  var pageNo = -1;
  var isChapterCompleted = false; // This is flag used to indicate main chapter is comapleted. By default it is false i.e. Not completed.
  var isSubChapterCompleted = false; // This is flag used to indicate sub chapter is comapleted. By default it is false. i.e. Not completed.
  var subChFirstPageNo = GetFirstPage(CurrentSubChapterCode); //It will get current sub chapter first page no.
  var subChLastPageNo = GetLastPage(CurrentSubChapterCode); //It will get current sub chapter last page no.
  var subChapterImgId = CurrentSubChapterCode;
  var pageCount = 0;

  var title_page_index = chapterKey.indexOf("Title Page");
  var introduction_page_index = chapterKey.indexOf("Introduction Page");

  /*Start Hrb(22/04/2009): Added for setting status of preliminary pages */
  if (((title_page_index != -1) || (introduction_page_index != -1)) && statusImg == INCOMPLETED_STATUS_IMG) {
    if (title_page_index != -1) {
      addToInCompleteChapterList("Ti");
    }
    else {
      if (introduction_page_index != -1) {
        //get the page no.
        var arrPageNo = chapterKey.split("Introduction Page");

        if (arrPageNo[1] == "1")
          addToInCompleteChapterList("We1");
        else
          if (arrPageNo[1] == "2")
            addToInCompleteChapterList("We2");
          else
            if (arrPageNo[1] == "3")
              addToInCompleteChapterList("Le");
      }

    }

    addToInCompleteChapterList("Ci");

  }
  else if (((title_page_index != -1) || (introduction_page_index != -1)) && statusImg == COMPLETED_STATUS_IMG) {
    if (title_page_index != -1) {
      addToCompletedChapterList("Ti");
    }
    else {
      if (introduction_page_index != -1) {
        //get the page no.
        var arrPageNo = chapterKey.split("Introduction Page");

        if (arrPageNo[1] == "1")
          addToCompletedChapterList("We1");
        else
          if (arrPageNo[1] == "2")
            addToCompletedChapterList("We2");
          else
            if (arrPageNo[1] == "3")
              addToCompletedChapterList("Le");
      }
    }

    //check if all the preliminary pages are visited and seen, if yes then change the status of course information page
    if (CompletedChapterCodeStr.indexOf("Ti,") != -1 && CompletedChapterCodeStr.indexOf("We1,") != -1 && CompletedChapterCodeStr.indexOf("We2,") != -1 && CompletedChapterCodeStr.indexOf("Le") != -1) {
      addToCompletedChapterList("Ci");
    }

  }
  else {
    /*end Hrb(22/04/2009): Added for setting status of preliminary pages */

    //To get chapter no and page no from chapterKey string
    if (chapterKey.indexOf("Ch.") != -1) {
      chapterNo = chapterKey.substring(chapterKey.indexOf("Ch.") + 3, chapterKey.indexOf("P."));
      chapterNo = parseInt(chapterNo);
      pageNo = chapterKey.substring(chapterKey.indexOf("P.") + 2, chapterKey.length);
      pageNo = parseInt(pageNo);
    }

    /* Code block for checking and setting sub chapter status */
    //For to check all the pages of current sub chapter are visited. It will check from first page to last page of current sub chapter is in visited page num string.
    for (pageCount = subChFirstPageNo; pageCount <= subChLastPageNo; pageCount++) {
      //If any page no of current sub chapter is not present in  VisitedPageNumStr then break and isSubChapterCompleted will be false.
      if (VisitedPageNumStr.indexOf("," + pageCount + ",") == -1) {
        break;
      }
    }
    //If all page no from first page to last page of current sub chapter is present in VisitedPageNumStr then pageCount will be greater than subChLastPageNo and it will set isSubChapterCompleted to true.
    if (pageCount > subChLastPageNo) {
      isSubChapterCompleted = true;
    }

    if (subChapterImgId != "") {
      if (isSubChapterCompleted) {
        //Add current sub chapter code in completed chapter
        addToCompletedChapterList(subChapterImgId.replace(" ", ""));
        if (isHelpCourse) {
          addToCompletedChapterList(chapterNo + "Test");
        }
      }
      else {
        //Add current sub chapter code in incomplete chapter
        addToInCompleteChapterList(subChapterImgId.replace(" ", ""));
      }
    }
    /* End of Code block for checking and setting sub chapter status */

    /* Code block for checking and setting chapter test status */
    //To get test chapter no from  chapterKey string
    if (chapterKey.indexOf("Ch") != -1 && chapterKey.indexOf("Test") != -1) {
      var testQestionCount;
      var isAnyTestQAttempted = false;
      var isAllTestQAttempted = true;

      //start hrb: Added for no of questions to display
      var NoOfQuesToDisplayForChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10);
      //end Hrb: Added for no of questions to display

      subChapterImgId = chapterKey.substring(chapterKey.indexOf("Chapter") + 7, chapterKey.indexOf("TestQuestion"));
      subChapterImgId = parseInt(subChapterImgId);

      for (testQestionCount = 0; testQestionCount < NoOfQuesToDisplayForChap; testQestionCount++) {
        if (TestQuestion[testQestionCount].Answer == "") {
          isAllTestQAttempted = false;
        }
        else {
          isAnyTestQAttempted = true;
        }
      }

      if (isChapterTestSubmited) {
        isChapterTestSubmited = false;
        //Add current chapter test in completed chapter
        addToCompletedChapterList(subChapterImgId + "Test");
      }
      else {
        if (isAnyTestQAttempted) {
          //Add current chapter test in incomplete chapter
          addToInCompleteChapterList(subChapterImgId + "Test");
        }
      }
    }
    /* End of Code block for checking and setting chapter test status */

    /* Code block for checking and setting parent main chapter status */
    var mainChapterFirstPageNo = GetFirstPage(CurrentChapter);
    var mainChapterLastPageNo = GetLastPage(CurrentChapter);

    for (pageCount = mainChapterFirstPageNo; pageCount <= mainChapterLastPageNo; pageCount++) {
      if (VisitedPageNumStr.indexOf("," + pageCount + ",") == -1)
        break;
    }

    if (pageCount > mainChapterLastPageNo) {
      if ((CompletedChapterCodeStr.indexOf(CurrentChapter + "Test" + ",") != -1) || (FinalExam == EXAM_POSITION_BYCOURSE)) {
        isChapterCompleted = true;
      }
    }
    if (isChapterCompleted) {
      addToCompletedChapterList(CurrentChapter);
    }
    else {
      //Add current chapter in incomplete chapter
      addToInCompleteChapterList(CurrentChapter);
    }
    /* End of Code block for checking and setting parent main chapter status */
  }
}

function addToCompletedChapterList(chapterCodeStr) {
  var tmpCompletedChapterCodeStr = "," + CompletedChapterCodeStr;
  var objStatusImage = document.getElementById("istat" + chapterCodeStr);

  if (objStatusImage) {
    if (tmpCompletedChapterCodeStr.indexOf("," + chapterCodeStr + ",") == -1) {
      //Change current chapter status image as COMPLETED_STATUSIMG
      objStatusImage.className = COMPLETED_STATUS_CLASS;

      if (CompletedChapterCodeStr == "0") {
        CompletedChapterCodeStr = chapterCodeStr + ",";
      }
      else {
        CompletedChapterCodeStr = CompletedChapterCodeStr + chapterCodeStr + ",";
        objStatusImage.className = COMPLETED_STATUS_CLASS;
      }
      InCompletedChapterCodeStr.replace(chapterCodeStr + ",", "");
    }
  }
}

function addToInCompleteChapterList(chapterCodeStr) {
  var tmpInCompletedChapterCodeStr = "," + InCompletedChapterCodeStr;
  var objStatusImage = document.getElementById("istat" + chapterCodeStr);

  if (objStatusImage) {
    if (tmpInCompletedChapterCodeStr.indexOf("," + chapterCodeStr + ",") == -1) {
      //Change current chapter status image as INCOMPLETED_STATUSIMG
      objStatusImage.className = INCOMPLETED_STATUS_CLASS;
      if (InCompletedChapterCodeStr == "") {
        InCompletedChapterCodeStr = chapterCodeStr + ",";
      }
      else {
        InCompletedChapterCodeStr = InCompletedChapterCodeStr + chapterCodeStr + ",";
      }
    }
  }
}

function loadOutlineChapterStatus() {
  var completedChapterArr = new Array();
  var inCompletedChapterArr = new Array();
  var chapterCounter;
  var objStatusImage;

  if (InCompletedChapterCodeStr != "") {
    inCompletedChapterArr = InCompletedChapterCodeStr.split(",");

    for (chapterCounter = 0; chapterCounter < inCompletedChapterArr.length; chapterCounter++) {
      objStatusImage = document.getElementById("istat" + inCompletedChapterArr[chapterCounter]);

      if (objStatusImage) {
        objStatusImage.className = INCOMPLETED_STATUS_CLASS;
      }
    }
  }
  if (CompletedChapterCodeStr != "") {
    completedChapterArr = CompletedChapterCodeStr.split(",");

    for (chapterCounter = 0; chapterCounter < completedChapterArr.length; chapterCounter++) {
      objStatusImage = document.getElementById("istat" + completedChapterArr[chapterCounter]);

      if (objStatusImage) {
        objStatusImage.className = COMPLETED_STATUS_CLASS;
      }
    }
  }
}
//HRB:  End of added for updating status of chapter
var openPopupScroll = null;
//hrb: Added for showing glossary terms pop up within course window
function setGlossSrcLocation() {
  var glossDescription = document.getElementById("glossiframe").contentWindow.document.body.innerHTML;
  if (glossDescription != "") {
    if (highlightMe) {
      highlightMe = false;
      forSerachKey = glossDescription;
      forSerachKey = genrateHighlightData(forSerachKey);
      glossDescription = forSerachKey;
    }
    if (gbl_outlineForGlossary) {

      start = glossDescription.indexOf('<h1>');
      end = glossDescription.indexOf('</h1>');
      end = end + 5;

      //replacing "<h1>"+glossaryHead+"</h1>";
      var replaceText = glossDescription.substring(start, end);
      var newText = '<div style="font-family:K-Medium;margin-bottom:20px;">' + glossaryHead + '</div>';

      glossDescription = glossDescription.replace(replaceText, newText);
      document.getElementById('FAQGlossRight').innerHTML = glossDescription;
      document.getElementById('modaldiv').style.display = '';
      //     gbl_outlineForGlossary = false;
    }
    else {
      document.getElementById('nGeneralPopupHeader').innerHTML = glossaryHead;
      start = glossDescription.indexOf('<h1>');
      end = glossDescription.indexOf('</h1>');
      end = end + 5;

      //replacing "<h1>"+glossaryHead+"</h1>";
      var replaceText = glossDescription.substring(start, end);
      glossDescription = glossDescription.replace(replaceText, '');

      document.getElementById('nGeneralPopupBody').innerHTML = glossDescription;
      document.getElementById('nGeneralPopup').style.height = 325 + "px";
      document.getElementById('nGeneralPopup').style.width = 460 + "px";
      document.getElementById('nGeneralPopupBody').style.height = 260 + "px"
      document.getElementById('closeBtnnGeneralPopup').style.left = 425 + "px";
      document.getElementById('closeBtnnGeneralPopup').style.display = '';
      document.getElementById('closepopup-label').innerHTML = "close glossary";
      //aligning the div popup center
      var controlpageele = document.getElementById('controlpage');
      var nGeneralPopupele = document.getElementById('nGeneralPopup');
      nGeneralPopupele.style.left = 512 - (parseInt(nGeneralPopupele.style.width) / 2);

      nGeneralPopupele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupele.style.height) / 2);
      // end aligning the popup to center

      document.getElementById('modaldiv').style.display = '';
      document.getElementById('nGeneralPopup').style.display = '';
    }
  }
  /*  if (glossaryOutlineCall == true) {
  showGlossary_iphone(pageOrigin);
  glossaryOutlineCall = false;
  //getScrollbar(glossaryTextPopUp);
  return;
  }
  var objPopUpL = document.getElementById("popupL");
  var objPopUpL1 = document.getElementById("popupL1");
  var topOfPopup = parseInt(objPopUpL.style.top);
  var glossDescription;

  objPopUpL1.style.paddingLeft = "6";
    


  //hrb:added to remove heading
  var tempGlossDescription;
  var index;
  var lastIndex;

  if (isIE) {
  //objPopUpL1.style.height = 0;
  if (!highlightMe) {
  glossDescription = window.frames["glossiframe"].document.body.innerHTML;
  }else{
  //start for discription
  forSerachKey = window.frames["glossiframe"].document.body.innerHTML;
  forSerachKey = genrateHighlightData(forSerachKey);
  glossDescription = forSerachKey;
  //end
  }
  }
  else {
  if (!highlightMe) {
  glossDescription = document.getElementById("glossiframe").contentWindow.document.body.innerHTML;
  } else {
  //start for discription
  forSerachKey = document.getElementById("glossiframe").contentWindow.document.body.innerHTML;
  forSerachKey = genrateHighlightData(forSerachKey);
  glossDescription = forSerachKey;
  //end
  }
  }

  //if (isIE) {
  index = glossDescription.indexOf("<H3>");
  // }
  // else {
  index = glossDescription.indexOf("<h3>");
  //  }

  if (index != -1) {
  //  if (isIE) {
  //      lastIndex = glossDescription.indexOf("</H3>");
  //  }
  //  else {
  lastIndex = glossDescription.indexOf("</h3>");
  //   }
  tempGlossDescription = glossDescription.substring(0, index);
  tempGlossDescription = tempGlossDescription + glossDescription.substring(lastIndex+5, glossDescription.length);
  glossDescription = tempGlossDescription;
  }

  if (document.getElementById("glossiframe").contentWindow.document.title.length > 0 && glossDescription.length > 0)
  {
  glossDescription = "<h3>" + document.getElementById("glossiframe").contentWindow.document.title + "</h3>" + glossDescription;
  }
  if (glossDescription != "") {
  if(glossaryCall){
  objPopUpL1.innerHTML = glossDescription;
  objPopUpL.style.display = "block";
  //newly added for glossary show popup perfectly
  var popupHeaderArrow = document.getElementById("popupHeaderArrow");
  popupHeaderArrow.style.visibility = "visible";
  objPopUpL.style.visibility = "visible";
  }
  highlightMe = false;
  }



  //hrb:start code added to adjust the size and scroll bar of the glossary popup div dynamically
  if(!chkEBookFormat())
  {
  //if (openPopupScroll != null) openPopupScroll.destroy();
  //openPopupScroll = new iScroll("popupL1");
  //getScrollbar();
  }
  // getScrollbar(scrollpopup);
  //$("#scrollpopup").width("442px");
  //$(".jspDrag").height("82px");
  highlightMe = false;*/
}

function setiPadPopupLayout(objPopUpL, objPopUpL1) {

  // Calculate the title string length for to set the position of the popup.
  var popupHeaderArrow = document.getElementById("popupHeaderArrow");


  var popUpHeaderArrow_width = 26;
  var popUpHeaderArrow_height = 14;
  var font_size = 14;

  popupHeaderArrow.style.width = popUpHeaderArrow_width;
  popupHeaderArrow.style.height = popUpHeaderArrow_height;
  popupHeaderArrow.style.position = "absolute";

  content_div_width = 950
  content_div_height = 580

  var adjustLeft = 40;
  //follwing cond for set arrow pop loc to glosary point for ipad
  if (x_pos > 88 && x_pos < 550) {
    x_pos = x_pos - adjustLeft;
  } else if (x_pos > 550 && x_pos < 980) {
    x_pos = x_pos + 30;
  }

  objPopUpL.style.left = x_pos;
  //Add font size to the top part of the content.
  y_pos = y_pos + font_size;
  // substract 4 from the popUpHeaderArrow_height to overthe border of the upperarrow.
  objPopUpL.style.top = y_pos + popUpHeaderArrow_height - 4;
  height_sum = 200 + y_pos
  width_sum = 400 + x_pos

  popupHeaderArrow.style.top = y_pos;
  popupHeaderArrow.style.left = x_pos + popUpHeaderArrow_width;
  popupHeaderArrow.style.backgroundImage = "url(common/images/top.png)";

  if (height_sum >= content_div_height) {
    // substract font size from height.
    sub_y_pos = y_pos - 28;

    // 248 because height of popup is 200 + 30 px height of bottom + 18 height of bottom image.
    popup_ypos = sub_y_pos - 248;
    objPopUpL.style.left = x_pos;

    objPopUpL.style.top = popup_ypos;
    popupHeaderArrow.style.backgroundImage = "url(common/images/bottom.png)";
    popupHeaderArrow.style.top = sub_y_pos - 8;

    popupHeaderArrow.style.left = x_pos + popUpHeaderArrow_width;
  }
  if (width_sum >= content_div_width) {
    popup_xpos = x_pos - 400;
    objPopUpL.style.left = popup_xpos;
    popupHeaderArrow.style.top = y_pos;
    popupHeaderArrow.style.left = popup_xpos + 360;
    //popupHeaderArrow.style.left= popup_xpos + 200;
    // substract 4 from the popUpHeaderArrow_height to overthe border of the upperarrow.
    objPopUpL.style.top = y_pos + popUpHeaderArrow_height - 4;
  }

  if (height_sum >= content_div_height && width_sum >= content_div_width) {
    sub_y_pos1 = y_pos - 28;
    // 248 because height of popup is 200 + 30 px height of bottom + 18 height of bottom image.
    popup_ypos = sub_y_pos1 - 248;
    objPopUpL.style.left = x_pos - 400;

    objPopUpL.style.top = popup_ypos;
    popupHeaderArrow.style.backgroundImage = "url(common/images/bottom.png)";
    popupHeaderArrow.style.top = sub_y_pos1 - 8;

    popupHeaderArrow.style.left = x_pos - 48;
  }

}

function showPopup(loc, isSearchCall) {
  document.getElementById("glossiframe").src = loc;
  //added this statement for iphone where we show two different way to show the glossary
  if (glossaryOutlineCall == true) return;

  var objPopUpL = document.getElementById("popupL");
  var objPopUpL1 = document.getElementById("popupL1");

  //Change for the popup width & height.
  objPopUpL.style.width = "400";
  objPopUpL.style.height = "200";
  if (isSearchCall == true) {
    document.getElementById("scrollpopup").style.paddingRight = "14";
  }
  else {
    document.getElementById("scrollpopup").style.paddingRight = "6";
  }

  if (!chkEBookFormat()) {
    //if (openPopupScroll != null) { openPopupScroll.destroy(); }
    //openPopupScroll = new iScroll("popupL1");
    //getScrollbar();
  }
}
//hrb: End of Added for showing glossary terms pop up within course window

function Next() {

  try {
    takeFinalExamFromOutline = false;
    closePopUp();
    if (interactivity_iPad_timer != null && interactivity_iPad_timer != 'undefined') {
      clearTimeout(interactivity_iPad_timer);
      interactivity_iPad_timer = null;
    }


    //Start Hrb: Added different condition for final exam for course navigation
    if (FinalExam == EXAM_POSITION_BYCHAPTER) //no
    {
      switch (mode) {
        //hrb: added for review and retake functionality    
        case "review":
          {
            //Hrb: Final Exam, get the questions from no of questions to display
            if (CurrentTestQuestion == NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1]) {
              if (CurrentChapter == TotalChapters) {
                //  if (isNavigationNo != null && isNavigationNo != 'undefined') {
                //        isNavigationNo = true;
                //    }
              }
              else {
                CurrentChapter++;
                CurrentTestQuestion = 1;
                GenerateQuestionComboBox();
                TestInit();
                FillTestQuestionsArray(CurrentChapter);
                ShowTestQuestion(CurrentTestQuestion);
              }
            }
            else
              ShowTestQuestion(parseInt(CurrentTestQuestion) + 1);
            EnableDisableSubmitButton();
          }
          break;

        case "retake":
          {
            //Hrb: Final Exam, get the questions from no of questions to display
            if (CurrentTestQuestion == NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1]) {
              if (CurrentChapter == TotalChapters) {
                /*  if (isNavigationNo != null && isNavigationNo != 'undefined') {
                isNavigationNo = true;
                }*/
              }
              else {
                CurrentChapter++;
                CurrentTestQuestion = 1;
                GenerateQuestionComboBox();
                TestInit();
                FillTestQuestionsArray(CurrentChapter);
                ShowTestQuestion(CurrentTestQuestion);
              }
            }
            else
              ShowTestQuestion(parseInt(CurrentTestQuestion) + 1);
            EnableDisableSubmitButton();
          }
          break;
        case "nextchapter":
          {
            if (isCourseCompleted()) {
              /*if (isNavigationNo != null && isNavigationNo != 'undefined') {
              isNavigationNo = true;
              }*/
              return;
            }
            else {
              var NextChapter = parseInt(CurrentChapter, 10) + 1;

              if (NextChapter > TotalChapters) {
                /*   if (isNavigationNo != null && isNavigationNo != 'undefined') {
                isNavigationNo = true;
                }*/
                return;
              }
              else {
                Sc(NextChapter.toString(10));
              }

              if (NextChapter > TotalChapters) {
                document.getElementById("NextButton").style.display = "none";
                document.getElementById("btnNext").style.display = "none"
                document.getElementById("NextButtonDisabled").style.display = "none";
              }
            }
          }
          break;
        case "test":
          {
            //Hrb: Final Exam, get the questions from no of questions to display
            if (CurrentTestQuestion == NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1]) {
              if (CurrentChapter == TotalChapters) {

                /* if (isNavigationNo != null && isNavigationNo != 'undefined') {
                isNavigationNo = true;
                }*/
                return;
              }
              else {
                CurrentChapter++;
                var NextChapter = parseInt(CurrentChapter, 10);
                Sc(NextChapter.toString(10));
              }
            }
            else
              ShowTestQuestion(parseInt(CurrentTestQuestion) + 1);
          }
          break;
        case "remedial":
          {
            if (CurrentRemedialPage < RemedialArray.length - 1) {
              if (CurrentRemedialPage == -1) {
                document.getElementById("glossbuttonL").style.visibility = 'visible';
                document.getElementById("bookmarkbuttonL").style.visibility = 'hidden';
                document.getElementById("printbuttonL").style.visibility = 'visible';
                document.getElementById("controlpanel").style.visibility = 'hidden';

                //hrb: Added chapter test question combo box
                document.getElementById("questionControlPanel").style.visibility = 'hidden';
                //hrb: End of Added chapter test question combo box

                //hrb: Added chapter test question number
                document.getElementById("showQuestionNumber").style.visibility = 'hidden';
                //hrb: End of Added chapter test question number

                enableSubmitTest = false;
                document.getElementById("submittest").style.visibility = 'hidden';
                document.getElementById("submittest_disable").style.visibility = 'hidden';
                //no difference so far

                TestChapter = CurrentChapter;
              }
              CurrentRemedialPage++;

              if ((CurrentRemedialPage > 0) && (RemedialArray[CurrentRemedialPage] == RemedialArray[CurrentRemedialPage - 1]))
                Next();
              else
                ShowStudyPage(RemedialArray[CurrentRemedialPage]);
            }
            else {
              CurrentChapter = TestChapter;
              St(CurrentChapter);

              //hrb:  increment   CurrentRemedialPage at the end of remedial pages.
              if (courseType == COURSE_TYPE_MICROMASH) {
                CurrentRemedialPage++;
              }
            }
            //hrb: added code to hide the submit button
            document.getElementById("submittest_disable").style.visibility = 'hidden';
            // hrb: end of code to disable submit button 
          }
          break;
        default:
          {
            //hrb:reset the prevMode='' when mode='study'
            FileName = new String(parent.frames.frame_b.document.location);
            var s = FileName.lastIndexOf("/") + 1;
            index = FileName.substring(s, s + 4);

            //start Hrb(22/4/2009): preliminary pages status
            updatePreliminaryPageStatus(index, COMPLETED_STATUS_IMG);
            //end Hrb(22/4/2009): preliminary pages status      

            i = parseInt(index, 10) + 1;
            //hrb start: added for test page

            if (isNaN(i)) {
              isChapterTestPageShown = true;
              if (noOfattempts == CHAPTER_TEST_PASSED) {
                if ((CurrentChapter == TotalChapters)) {
                  /*  if (isNavigationNo != null && isNavigationNo != 'undefined') {
                  isNavigationNo = true;
                  }*/
                  return;
                }
                else {

                  var tempChapter = parseInt(CurrentChapter) + 1;

                  for (var index = 0; index < CategoryList.length; index++) {
                    if (CategoryList[index].CategoryCode == tempChapter.toString(10)) {
                      FirstPage = CategoryList[index].FirstQuestion;
                      LastPage = CategoryList[index].LastQuestion;
                      break;
                    }
                  }

                  i = FirstPage;
                  ShowStudyPage(i);
                }
              }
              else if (noOfattempts == testAttempts) {
                if (CurrentChapter == TotalChapters) {
                  /*  if (isNavigationNo != null && isNavigationNo != 'undefined') {
                  isNavigationNo = true;
                  }*/
                  return;
                }
                var tempChapter = parseInt(CurrentChapter) + 1;

                for (var index = 0; index < CategoryList.length; index++) {
                  if (CategoryList[index].CategoryCode == tempChapter.toString(10)) {
                    FirstPage = CategoryList[index].FirstQuestion;
                    LastPage = CategoryList[index].LastQuestion;
                    break;
                  }
                }

                i = FirstPage;
                ShowStudyPage(i);

              }
              else if (noOfattempts < testAttempts) {
                //start Hrb(05/25/2009): Added for course previewer
                if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
                  var tempChapter = parseInt(CurrentChapter) + 1;

                  if (tempChapter <= demoChapters) {
                    Sc(tempChapter);
                  } else {
                    showCoursePreviewPopUp();
                    isDemoCoursePopUpOnNextClick = true;

                  }
                }
                else {
                  GenerateQuestionComboBox();
                  St(CurrentChapter);
                }
                //End Hrb(05/25/2009): Added for course previewer

              }
              else {
                Sc(parseInt(CurrentChapter) + 1);
              }
            }

            //hrb end: added for test page
            else if ((i <= LastPage) || (Status[CurrentChapter - 1] == 1)) {
              if ((Status[CurrentChapter - 1] == 1) && (i > LastPage) && (CurrentChapter == TotalChapters)) {
                St(CurrentChapter);
              }
              else {
                if (noOfAttemptedTests[CurrentChapter - 1] >= testAttempts && i > LastPage) {
                  St(CurrentChapter);
                }
                else

                //start Hrb(05/25/2009): Added for course previewer
                {
                  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {

                    if ((parseInt(demoChapters) == 0) && (parseInt(i) == parseInt(CategoryList[0].FirstQuestion))) {
                      showCoursePreviewPopUp();
                      isDemoCoursePopUpOnNextClick = true;

                    }
                    else {
                      ShowStudyPage(i);
                    }
                  }
                  else {
                    ShowStudyPage(i);
                  }
                }
                //End Hrb(05/25/2009): Added for course previewer
              }
            }
            else {
              //start Hrb(05/25/2009): Added for course previewer
              if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
                var tempChapter = parseInt(CurrentChapter) + 1;

                if (parseInt(tempChapter) <= parseInt(demoChapters)) {
                  Sc(tempChapter);
                }
                else {
                  if (isNextBtnUpHandlerFlag) {
                    showPreviewPopUpFlag = true;
                  }

                  showCoursePreviewPopUp();

                  isDemoCoursePopUpOnNextClick = true;
                }
              }
              else {
                /*if(noOfattempts==CHAPTER_TEST_PASSED || noOfattempts>=testAttempts)
                {
                CurrentChapter++;
                Sc(CurrentChapter);
                }
                else
                {
                St(CurrentChapter);
                }*/
                if (isHelpCourse) {
                  /*    if (isNavigationNo != null && isNavigationNo != 'undefined') {
                  isNavigationNo = true;
                  }*/
                  return;
                }
                else {
                  St(CurrentChapter);
                }
              }
              //End Hrb(05/25/2009): Added for course previewer
            }
          }
      }
    }
    //start Hrb: Final Exam navigation
    else {
      switch (mode) {
        case "nextchapter":
          {
            if (scorm)
              Sc(1);
            else
              ShowCertificate();
          }
          break;
        case "test":
          {
            //if final exam is not started i.e. -1 then make it as incomplete
            if (finalExamStatus == "-1")
              UpdateFinalExamStatus("0"); //incomplete

            if (CurrentTestQuestion == finalExamTotalQuestions) {
              var isAllquestionsAttempted = true;

              //check if all the questions are attempted
              for (i = 0; i < finalExamTotalQuestions; i++) {
                if (TestQuestion[i].Answer == "") {
                  isAllquestionsAttempted = false;
                  break;
                }
              }

              if (isAllquestionsAttempted) {
                enableSubmitTest = true;
                document.getElementById("submittest_disable").style.visibility = 'hidden';
                document.getElementById("submittest").style.visibility = 'visible';

              }
              else {
                enableSubmitTest = false;
                document.getElementById("submittest_disable").style.visibility = 'visible';
                document.getElementById("submittest").style.visibility = 'hidden';

              }
              return;

            }
            else
              ShowFinalExamTestQuestion(parseInt(CurrentTestQuestion) + 1);
          }
          break;

        case "retake":
          {
            //if final exam is not started i.e. -1 then make it as incomplete
            if (finalExamStatus == "-1")
              UpdateFinalExamStatus("0"); //incomplete

            if (CurrentTestQuestion == finalExamTotalQuestions) {
              var isAllquestionsAttempted = true;

              //check if all the questions are attempted
              for (i = 0; i < finalExamTotalQuestions; i++) {
                if (TestQuestion[i].Answer == "") {
                  isAllquestionsAttempted = false;
                  break;
                }
              }

              if (isAllquestionsAttempted) {
                document.getElementById("submittest_disable").style.visibility = 'hidden';
                document.getElementById("submittest").style.visibility = 'visible';
              }
              else {
                document.getElementById("submittest_disable").style.visibility = 'visible';
                document.getElementById("submittest").style.visibility = 'hidden';
              }
              return;

            }
            else
              ShowFinalExamTestQuestion(parseInt(CurrentTestQuestion) + 1);
          }
          break;

        case "review":
          {
            //if final exam is not started i.e. -1 then make it as incomplete
            if (finalExamStatus == "-1")
              UpdateFinalExamStatus("0"); //incomplete

            if (CurrentTestQuestion == finalExamTotalQuestions) {
              var isAllquestionsAttempted = true;

              //check if all the questions are attempted
              for (i = 0; i < finalExamTotalQuestions; i++) {
                if (TestQuestion[i].Answer == "") {
                  isAllquestionsAttempted = false;
                  break;
                }
              }

              if (isAllquestionsAttempted) {
                document.getElementById("submittest_disable").style.visibility = 'hidden';
                document.getElementById("submittest").style.visibility = 'visible';
              }
              else {
                document.getElementById("submittest_disable").style.visibility = 'visible';
                document.getElementById("submittest").style.visibility = 'hidden';
              }
              return;

            }
            else
              ShowFinalExamTestQuestion(parseInt(CurrentTestQuestion) + 1);
          }
          break;

        case "remedial":
          {
            if (CurrentRemedialPage < RemedialArray.length - 1) {
              if (CurrentRemedialPage == -1) {
                document.getElementById("glossbuttonL").style.visibility = 'visible';
                document.getElementById("printbuttonL").style.visibility = 'visible';
                document.getElementById("controlpanel").style.visibility = 'hidden';

                document.getElementById("questionControlPanel").style.visibility = 'hidden';

                document.getElementById("showQuestionNumber").style.visibility = 'hidden';
                enableSubmitTest = false;
                document.getElementById("submittest").style.visibility = 'hidden';
                document.getElementById("submittest_disable").style.visibility = 'hidden';

                TestChapter = CurrentChapter;
              }
              CurrentRemedialPage++
              if ((CurrentRemedialPage > 0) && (RemedialArray[CurrentRemedialPage] == RemedialArray[CurrentRemedialPage - 1])) {
                Next();
              }
              else {
                ShowStudyPage(RemedialArray[CurrentRemedialPage]);
              }
            }
            else {
              CurrentChapter = TestChapter;
              ShowFinalExamTestQuestion(1);
            }
            document.getElementById("submittest_disable").style.visibility = 'hidden';
          }
          break;
        default:
          {
            FileName = new String(parent.frames.frame_b.document.location)

            var s = FileName.lastIndexOf("/") + 1;
            index = FileName.substring(s, s + 4);

            //start Hrb(22/4/2009): preliminary pages status
            updatePreliminaryPageStatus(index, COMPLETED_STATUS_IMG);
            //end Hrb(22/4/2009): preliminary pages status    

            i = parseInt(index, 10) + 1;

            if (FileName.indexOf("test_page") != -1) {
              //hrb:changes for final exam passing condition
              takeFinalExamFromOutline = false;

              //if final exam is not started i.e. -1 then make it as incomplete
              if (finalExamStatus == "-1")
                UpdateFinalExamStatus("0"); //incomplete
              if (noOfattempts == CHAPTER_TEST_PASSED)
                ShowStudyPage(0);
              else {
                ShowFinalExam();
              }
              //hrb:end of changes for final exam passing condition
            }
            else {
              if (noOfattempts < testAttempts) {
                if (((i <= LastPage) || (Status[CurrentChapter - 1] == 1)) && (!takeFinalExamFromOutline)) {
                  takeFinalExamFromOutline = false;
                  if ((Status[CurrentChapter - 1] == 1) && (i > LastPage) && (CurrentChapter == TotalChapters)) {
                    takeFinalExamFromOutline = false;
                    ShowFinalExam();

                    //if final exam is not started i.e. -1 then make it as incomplete
                    if (finalExamStatus == "-1")
                      UpdateFinalExamStatus("0"); //incomplete
                  }
                  else {
                    //start Hrb(05/25/2009): Added for course previewer
                    if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
                      if ((parseInt(demoChapters) == 0) && (parseInt(i) == parseInt(CategoryList[0].FirstQuestion))) {
                        showCoursePreviewPopUp();

                        isDemoCoursePopUpOnNextClick = true;

                      }
                      else {
                        ShowStudyPage(i);
                      }
                    }
                    else {
                      ShowStudyPage(i);
                    }
                    //End Hrb(05/25/2009): Added for course previewer
                  }
                }
                else {
                  if (CurrentChapter == TotalChapters) {
                    takeFinalExamFromOutline = false;
                    ShowFinalExam();
                    if (finalExamStatus == "-1")
                      UpdateFinalExamStatus("0"); //incomplete
                  }
                  else if (takeFinalExamFromOutline) {
                    takeFinalExamFromOutline = false;
                    ShowFinalExam();

                    //if final exam is not started i.e. -1 then make it as incomplete
                    if (finalExamStatus == "-1")
                      UpdateFinalExamStatus("0"); //incomplete
                  }
                  else {
                    takeFinalExamFromOutline = false;
                    CurrentChapter++;
                    var NextChapter = parseInt(CurrentChapter, 10);

                    //start Hrb(05/25/2009): Added for course previewer
                    if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
                      if (parseInt(NextChapter) <= parseInt(demoChapters)) {
                        Sc(NextChapter.toString(10));
                      }
                      else {
                        showCoursePreviewPopUp();
                        isDemoCoursePopUpOnNextClick = true;
                      }
                    }
                    else {
                      Sc(NextChapter.toString(10));
                    }
                    //End Hrb(05/25/2009): Added for course previewer
                  }
                }
              }
              //hrb start : added for final exam if user fails or passes
              else {
                if ((CurrentChapter == TotalChapters)) {
                  var tempChapter = parseInt(CurrentChapter);
                  for (var itr = 0; itr < CategoryList.length; itr++) {
                    if (CategoryList[itr].CategoryCode == tempChapter.toString(10)) {
                      FirstPage = CategoryList[itr].FirstQuestion;
                      LastPage = CategoryList[itr].LastQuestion;
                      break;
                    }
                  }
                  if (i <= LastPage) {
                    ShowStudyPage(i);
                  }
                  else if (i > LastPage) {
                    takeFinalExamFromOutline = false;
                    ShowFinalExam();
                  }
                }
                else {
                  var tempChapter = parseInt(CurrentChapter);
                  for (var itr = 0; itr < CategoryList.length; itr++) {
                    if (CategoryList[itr].CategoryCode == tempChapter.toString(10)) {
                      FirstPage = CategoryList[itr].FirstQuestion;
                      LastPage = CategoryList[itr].LastQuestion;
                      break;
                    }
                  }
                  if (i <= LastPage) {
                    ShowStudyPage(i);
                  }
                  else if (i > LastPage) {
                    tempChapter = parseInt(CurrentChapter) + 1;
                    Sc(tempChapter);

                  }
                }
              }
              //hrb end : added for final exam if user fails or passes      
            }
          }
      }
    }
    //end Hrb: Added different condition for final exam for course navigation
  }
  catch (err) { }
  //document.getElementById("mysection").style.display="block";
} // end Next()

function Prev() {
  //hrb:close open menu
  if (VisibleMenu != "") {
    document.getElementById(VisibleMenu + "x").onclick();
    VisibleMenu = "";
  }

  //hrb:close transcript
  if (parent.frames.frame_b.document.getElementById("transContent"))
    CloseTranscriptDiv();

  //hrb:added to close search box on click of prev button
  closePopUp();
  if (interactivity_iPad_timer != null && interactivity_iPad_timer != 'undefined') {
    clearTimeout(interactivity_iPad_timer);
    interactivity_iPad_timer = null;
  }
  hideCheckpoint();
  CloseCertificateDiv();

  //start Hrb: Added course navigation condition for final exam
  takeFinalExamFromOutline = false;

  if (FinalExam == EXAM_POSITION_BYCHAPTER) //no
  {
    switch (mode) {
      //hrb: added for review and retake functionality    
      case "review":
        {
          if (CurrentTestQuestion == 1) {
            if (CurrentChapter == 1) {
              /*    if (isNavigationNo != null && isNavigationNo != 'undefined') {
              isNavigationNo = true;
              }*/
              return;
            }
            else {
              CurrentChapter--;
            }
            CurrentTestQuestion = NoOfQuestionsToDisplayArray[CurrentChapter - 1];
            GenerateQuestionComboBox();
            TestInit();
            FillTestQuestionsArray(CurrentChapter);
            ShowTestQuestion(CurrentTestQuestion);
          }
          else
            ShowTestQuestion(parseInt(CurrentTestQuestion) - 1);
          EnableDisableSubmitButton();
        }
        break;
      case "retake":
        {
          if (CurrentTestQuestion == 1) {
            if (CurrentChapter == 1) {
              /*     if (isNavigationNo != null && isNavigationNo != 'undefined') {
              isNavigationNo = true;
              }*/
              return;
            }
            else {
              CurrentChapter--;
            }
            CurrentTestQuestion = NoOfQuestionsToDisplayArray[CurrentChapter - 1];
            GenerateQuestionComboBox();
            TestInit();
            FillTestQuestionsArray(CurrentChapter);
            ShowTestQuestion(CurrentTestQuestion);
          }
          else
            ShowTestQuestion(parseInt(CurrentTestQuestion) - 1);
          EnableDisableSubmitButton();
        }
        break;
      case "nextchapter":
        {
          //hrb: start added code to move from fail or congrates screen to last page of current chapter
          var tempChapter = parseInt(CurrentChapter);

          for (var i = 0; i < CategoryList.length; i++) {
            if (CategoryList[i].CategoryCode == tempChapter.toString(10)) {
              FirstPage = CategoryList[i].FirstQuestion;
              LastPage = CategoryList[i].LastQuestion;
              break;
            }
          }

          i = LastPage;
          mode = "study";
          ShowStudyPage(i);
          //hrb: end added code to move from fail or congrates screen to last page of current chapter

          return;
        }
        break;

      case "test":
        {
          //hrb: start changes to move previous from chapter test to chapter page
          if (CurrentTestQuestion == 1) {
            fnShowChapterTestDescrPage();
          }
          else
            ShowTestQuestion(parseInt(CurrentTestQuestion) - 1);
          //hrb: End changes to move previous from chapter test to chapter page
        }
        break;

      case "remedial":
        {
          if (CurrentRemedialPage <= 0)
            return;

          CurrentRemedialPage--;

          if (RemedialArray[CurrentRemedialPage] == RemedialArray[CurrentRemedialPage + 1]) {
            Prev();
          }
          else {
            ShowStudyPage(RemedialArray[CurrentRemedialPage])

          }

        }
        break;
      default:
        {

          FileName = new String(parent.frames.frame_b.document.location);
          var s = FileName.lastIndexOf("/") + 1;
          index = FileName.substring(s, s + 4);

          //start Hrb(22/4/2009): preliminary pages status
          updatePreliminaryPageStatus(index, COMPLETED_STATUS_IMG);
          //end Hrb(22/4/2009): preliminary pages status

          i = parseInt(index, 10) - 1;

          if (isNaN(i)) {
            var tempChapter = parseInt(CurrentChapter);
            for (var index = 0; index < CategoryList.length; index++) {
              if (CategoryList[index].CategoryCode == tempChapter.toString(10)) {
                FirstPage = CategoryList[index].FirstQuestion;
                LastPage = CategoryList[index].LastQuestion;
                break;
              }
            }
            i = LastPage;
            ShowStudyPage(i)
          }

          //HRB: end of added to goto the last page if test_page
          else if (i >= 0) {
            ShowStudyPage(i);
          }
          else if (i == -1) {
            /*     if (isNavigationNo != null && isNavigationNo != 'undefined') {
            isNavigationNo = true;
            }*/
          }
        }
    }
  }
  //start Hrb: Added the condition for Final Exam navigation
  else {

    switch (mode) {
      case "nextchapter":
        {
          //hrb start : Added to show previous page 
          var tempChapter = parseInt(CurrentChapter);

          for (var index = 0; index < CategoryList.length; index++) {
            if (CategoryList[index].CategoryCode == tempChapter.toString(10)) {
              FirstPage = CategoryList[index].FirstQuestion;
              LastPage = CategoryList[index].LastQuestion;
              break;
            }
          }
          i = LastPage;
          mode = "study";
          ShowStudyPage(i);
          //hrb end : Added to show previous page 

          return;
        }
        break;
      case "test":
        {
          //hrb  start : changes to move previous from Final Exam to chapter page
          if (CurrentTestQuestion == 1) {
            fnShowChapterTestDescrPage();
          }
          else
            ShowFinalExamTestQuestion(parseInt(CurrentTestQuestion) - 1);
        }
        break;
      case "retake":
        {
          //hrb  start : changes to move previous from Final Exam to chapter page
          if (CurrentTestQuestion == 1) {
            fnShowChapterTestDescrPage();
          }
          else
            ShowFinalExamTestQuestion(parseInt(CurrentTestQuestion) - 1);
        }
        break;
      case "review":
        {
          //hrb  start : changes to move previous from Final Exam to chapter page
          if (CurrentTestQuestion == 1) {
            fnShowChapterTestDescrPage();
          }
          else
            ShowFinalExamTestQuestion(parseInt(CurrentTestQuestion) - 1);
        }
        break;
      case "remedial":
        {
          if (CurrentRemedialPage <= 0)
            return;

          CurrentRemedialPage--;

          if (RemedialArray[CurrentRemedialPage] == RemedialArray[CurrentRemedialPage + 1]) {
            Prev();
          }
          else {
            ShowStudyPage(RemedialArray[CurrentRemedialPage]);
          }

        }
        break;
      default:
        {
          FileName = new String(parent.frames.frame_b.document.location);
          var s = FileName.lastIndexOf("/") + 1;
          index = FileName.substring(s, s + 4);

          //start Hrb(22/4/2009): preliminary pages status
          updatePreliminaryPageStatus(index, COMPLETED_STATUS_IMG);
          //end Hrb(22/4/2009): preliminary pages status  

          i = parseInt(index, 10) - 1;

          //HRB: added to goto the last page if test_page
          if (index == "test") {
            //hrb start : Added to show previous page 
            var tempChapter = parseInt(CurrentChapter);

            for (var index = 0; index < CategoryList.length; index++) {
              if (CategoryList[index].CategoryCode == tempChapter.toString(10)) {
                FirstPage = CategoryList[index].FirstQuestion;
                LastPage = CategoryList[index].LastQuestion;
                break;
              }
            }
            i = LastPage;
            ShowStudyPage(i);
            //hrb end : Added to show previous page 
          }
          //HRB: end of added to goto the last page if test_page

          if (i >= 0)
            ShowStudyPage(i);
        }
    }

  }

  //end Hrb: Added the condition for Final Exam navigation
  //document.getElementById("mysection").style.display="block";
} // end Prev()


function HideResponse() {
  try {
    if (VisibleResponse != "") {
      eval("document.getElementById('" + VisibleResponse + "ok').onclick()")
    }
  }
  catch (err) { }
}

function ShowResponse(div, startpos, endpos, direction, num) {
  //start Hrb: Added to take position and object one time
  var l_Value = endpos - startpos;
  var l_position = Math.abs(l_Value);
  var objDiv = document.getElementById(div);
  //end Hrb: Added to take position and object one time

  var x = (l_Value) / (l_position);

  if (num <= l_position / 50) {
    if (!direction) //vert if direction == 0
      objDiv.style.top = startpos + x * num * 50;
    else //horiz
      objDiv.style.left = startpos + x * num * 50;
    num++;
    setTimeout("ShowResponse('" + div + "'," + startpos + "," + endpos + "," + direction + "," + num + ")", 20);
  }
  else {
    if (!direction) //if direction == 0
      if (objDiv.style.top != endpos)
        objDiv.style.top = endpos;
      else
        if (objDiv.style.left != endpos)
          objDiv.style.left = endpos;
  }
  VisibleResponse = div;
}

function GradeQuestion(CorrectAnswer, trObject) {
  e = window.event;
  if (e != null && e.stopPropagation) {
    e.stopPropagation();
  }

  else if (window.event) {
    window.event.cancelBubble = true;
  }

  var x = ""
  var qtype = "";
  if (document.getElementById('optionTbl')) {
    if (document.getElementById('optionTbl').getElementsByTagName('input')[0].type == 'radio')
      document.getElementById('FeedBackPopup').getElementsByTagName('img')[0].style.display = '';
    else
      document.getElementById('FeedBackPopup').getElementsByTagName('img')[0].style.display = 'none';
  }
  else if (document.getElementById('Feedback')) {
    // enabling the feedback popup arrow for fib
    document.getElementById('FeedBackPopup').getElementsByTagName('img')[0].style.display = '';
  }
  //hrb: end of added to close any menu popup on click of submitanswer button

  //hrb 25/Mar/2009: Added for new question type drop down fill in the blanks
  if (document.getElementById("hdnQType")) {
    qtype = document.getElementById("hdnQType").value;
    x = qtype;

    if (qtype == "mc-fibs") {
      if (document.getElementById("selAnswer")) {
        x = document.getElementById("selAnswer").value;
      }
    }
  }
  //hrb 25/Mar/2009: End of Added for new question type drop down fill in the blanks
  else {
    var form = getFormElementFromQuestionDiv(currentDivId);
    if (form.getElementsByTagName('input').length > 1) {
      //hrb:commented to disable the feedback coming from down to top
      for (var d = 0; d <= form.getElementsByTagName('input').length - 1; d++) {
        if (CorrectAnswer.length > 1) {
          if (d < form.getElementsByTagName('input').length - 1) {
            eval("document.getElementById('" + form.answer1[d].value + "').style.display = ''");
            eval("document.getElementById('" + form.answer1[d + 1].value + "').style.display = ''");
          }
        }
        if (form.answer1[d].checked == true) {
          x = x + form.answer1[d].value.toUpperCase();
          if (form.answer1[d].value.toUpperCase() != CorrectAnswer) {

            eval("document.getElementById('" + form.answer1[d].value + "')" + ".style.display = ''");
          }
        }
        else {
          if (form.answer1[d].value.toUpperCase() != CorrectAnswer) {
            //hrb:document.getElementById added
            eval("document.getElementById('" + form.answer1[d].value + "')" + ".style.display = 'none'");
          }
        }
      }
    }
    else  //FIB
    {
      if (isNaN(CorrectAnswer)) {
        x = form.answer1.value.toUpperCase();
        CorrectAnswer = CorrectAnswer.toUpperCase();
      }
      else {
        x = stripCharsInBag(form.answer1.value.toUpperCase(), ",$")
        pos = x.indexOf(".");

        if (pos == 0)
          x = "0" + x;

        pos = x.indexOf(".");

        if ((pos > 0) && (pos <= x.length - 1)) {
          d = x.length - 1;
          while (x.charAt(d) == "0") {
            x = x.substring(0, x.length - 1);
            d--;
          }
          if (x.charAt(x.length - 1) == ".")
            x = x.substring(0, x.length - 1);
        }
      }
      if (document.getElementById('Feedback'))
        document.getElementById('Feedback').getElementsByTagName('div')[0].innerHTML = "";
    }
  }

  //start Hrb(06/24/09): Added for preserving test questions with grading
  if (parent.frames.frame_b.document.getElementById("isgraded")) {
    var isgraded = parent.frames.frame_b.document.getElementById("isgraded").value;
    var loc = parent.frames.frame_b.document.location.toString();
    var page = loc.substr(loc.lastIndexOf("/"));

    page = page.substring(1, page.indexOf("."));
  }
  else
    var isgraded = "no";
  //end Hrb(06/24/09): Added for preserving test questions with grading

  if (isgraded == "" || isgraded == "no") {
    if ((document.getElementById("desired-product-behavior").value == 'study' && suppressRemediation == "no") ||
       document.getElementById("desired-product-behavior").value != 'study') {
      if (VisibleResponse != "")
        eval("document.getElementById('" + VisibleResponse + "').style.visibility = 'hidden'");

      if (x == "") {
        if (isEbook) {
          showIPadPopup1(document.getElementById("needanswer"), trObject);
        }
        else
          showIPadPopup('', document.getElementById("needanswer").innerHTML, "500px", "44px", "100px", "724px", "692px");

        VisibleResponse = 'needanswer';
        return;
      }

      if ((x.length == 1) && (CorrectAnswer.length > 1) && (document.forms[0].length > 1)) {
        if (isEbook) {
          showIPadPopup1(document.getElementById("needmorethanone"), trObject);
        } else
          showIPadPopup('', document.getElementById("needmorethanone").innerHTML, "500px", "44px", "100px", "724px", "692px");

        VisibleResponse = 'needmorethanone';
        return;
      }
      if (x == CorrectAnswer) {
        if (document.getElementById('optionTbl')) {
          for (var i = 0; i < document.getElementById('optionTbl').rows.length - 1; i++) {
            if (typeof document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[1] != 'undefined') {
              if (document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.backgroundColor == 'rgb(1, 131, 191)') {
                document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].style.display = 'none';
                document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = '';
                document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.backgroundColor = 'rgb(119,162,47)';
              }
            }
          }
        }
        var inHtml = document.getElementById("responser").innerHTML;
        inHtml = inHtml.replace(/responsediv/ig, '');
        if (isEbook) {
          showIPadPopup1(document.getElementById("responser"), trObject);
        } else
          showIPadPopup('', inHtml, "500px", "44px", "100px", "724px", "692px");
        //Start Hrb(06/16/2009): Added for preserving test questions
        updateStudyQuestionResponseStatus("C");
        //End Hrb(06/16/2009): Added for preserving test questions

      }
      else {
        if (document.getElementById('optionTbl')) {
          for (var i = 0; i < document.getElementById('optionTbl').rows.length - 1; i++) {
            if (typeof document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[1] != 'undefined') {
              if (document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.backgroundColor == 'rgb(1, 131, 191)') {
                document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].style.display = 'none';
                document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = '';
                document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.backgroundColor = 'rgb(220, 10, 10)';
              }
            }
          }
        }
        PlaySound(false);

        if (qtype != "mc-fibs" && qtype != "1-1-dd" && qtype != "1-m-dd" && qtype != "match-pair") {
          x = x.replace(/^\s+/, '');
          if (x == '') {
            var inHtml = document.getElementById("responser").innerHTML;
            inHtml = inHtml.replace(/responsediv/ig, '');
            if (isEbook) {
              showIPadPopup1(document.getElementById("responser"), trObject);
            } else
              showIPadPopup('', inHtml, "500px", "44px", "100px", "724px", "692px");

            VisibleResponse = 'needanswer';
            return;
          }
          else {
            document.getElementById("needanswer").style.visibility = 'hidden';
            document.getElementById("useranswer").innerHTML = ANS_NOT_CORRECT.replace('<b>', '').replace('</b>', '') + x.toUpperCase() + ".";
          }
        }

        var inHtml = document.getElementById("responsew").innerHTML;
        inHtml = inHtml.replace(/responsediv/ig, '');
        if (isEbook) {
          showIPadPopup1(document.getElementById("responsew"), trObject);

        } else
          showIPadPopup('', inHtml, "500px", "44px", "100px", "724px", "692px");

        VisibleResponse = 'responsew';

        //Start Hrb(06/16/2009): Added for preserving test questions
        updateStudyQuestionResponseStatus("C");
        //End Hrb(06/16/2009): Added for preserving test questions

      }
    }
    //getScrollbar(scrollpopup);
    //  $("#scrollpopup").width("698px");

  }
  //hrb:Added to implement graded study questions
  else {
    if (x != "") {
      //Start Hrb(06/16/2009): Added for preserving test questions
      var index = fnSearchGradedQuestion(CurrentChapter, page);
      //end Hrb(06/16/2009): Added for preserving test questions

      if (x == CorrectAnswer) {
        GradedQuestions[index].Correct = "yes";

        //Start Hrb(06/16/2009): Added for preserving test questions
        updateStudyQuestionResponseStatus("C");
        //End Hrb(06/16/2009): Added for preserving test questions

      }
      else {
        GradedQuestions[index].Correct = "no";

        //Start Hrb(06/16/2009): Added for preserving test questions
        updateStudyQuestionResponseStatus("I");
        //End Hrb(06/16/2009): Added for preserving test questions

      }
    }
  }
  //hrb:End of Added to implement graded study questions
}

//hrb:function added to search graded question in course
function fnSearchGradedQuestion(CurrentChapter, QuestionID) {
  var index;
  var gradeQuestion;

  for (index = 0; index < totalGradedQuestions; index++) {
    gradeQuestion = GradedQuestions[index];

    if ((gradeQuestion.Chapter == CurrentChapter && gradeQuestion.QuestionID == QuestionID) || (gradeQuestion.Chapter == CurrentChapter && gradeQuestion.QuestionID == "")) {
      gradeQuestion.QuestionID = QuestionID;
      break;
    }
  }
  return index;
}

function ShowCorrectAnswer() {
  var objResponse = document.getElementById("responser");

  if (VisibleResponse != "")
  //eval("document.getElementById('"+ VisibleResponse + "').style.visibility = 'hidden'");
    document.getElementById(VisibleResponse).style.visibility = 'hidden';

  objResponse.style.visibility = 'visible';

  if (!isIE) {
    objResponse.style.border = 'solid thin #000000';
    objResponse.style.width = 643
    objResponse.style.height = 120
    objResponse.childNodes[3].style.width = 648
  }
  VisibleResponse = 'responser';
}


function SetTestQuestionAnswer(QuestionNumber) {
  if (document.forms.length == 0)
    return;

  var form = getFormElementFromQuestionDiv(currentDivId);
  if (form.length > 1) {
    for (var index = 0; index <= form.length - 1; index++) {
      //hrb: added to check the users response for each question
      if (FinalExam == EXAM_POSITION_BYCOURSE) {
        var eletr = form.answer1[index].parentElement.parentElement.getElementsByTagName('td');
        if (TestQuestion[QuestionNumber - 1].Answer.indexOf(form.answer1[index].value.toUpperCase()) != -1) {
          form.answer1[index].checked = true;
          form.answer1[index].parentElement.parentElement.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1,131,191)';
        }
        //form.answer1[index].parentElement.parentElement.parentElement.children[0].children[0].style.fontWeight = "bold";
        //form.answer1[index].parentElement.parentElement.parentElement.children[0].children[1].style.fontWeight = "bold";
      }
      else {
        var eletr = form.answer1[index].parentElement.parentElement.getElementsByTagName('td');
        var str = arrChapterQuestionResponse[CurrentChapter - 1][QuestionNumber - 1];
        if (str.substring(1).indexOf(form.answer1[index].value.toUpperCase()) != -1) {
          form.answer1[index].checked = true;
          eletr[0].style.backgroundColor = 'rgb(1,131,191)';
          //eletr[1].style.fontWeight = "bold";
          //eletr[2].style.fontWeight = "bold";
          //eletr[3].childNodes[1].style.backgroundImage='url("common/images/green_tick.gif")';
        }
      }
    }
  }
  else
    form.answer1.value = TestQuestion[QuestionNumber - 1].Answer;

}

function GradeTestQuestion(index) {
  var x = "";
  var form = getFormElementFromQuestionDiv(currentDivId);

  if (form == null || form.length == 0)
    return;

  if (form.length > 1)
    for (var index = 0; index <= form.length - 1; index++) {
      if (form.answer1) {
        if (form.answer1[index].checked == true) {
          x = x + form.answer1[index].value.toUpperCase();
        }
      }
    }
  else
    x = form.answer1.value.toUpperCase();

  TestQuestion[CurrentTestQuestion - 1].Answer = x;

  if (x == parent.frames.frame_b.CorrectAnswer) {
    TestQuestion[CurrentTestQuestion - 1].Correct = true;
  }
  else {
    TestQuestion[CurrentTestQuestion - 1].Correct = false;
  }

} // end GradeTestQuestion()


function TestQ(Answer, Correct) {
  this.Answer = Answer;
  this.Correct = Correct;
}

//hrb:class added for Grad question
function GradeQ(Chapter, QuestionID, Correct) {
  this.Chapter = Chapter;
  this.QuestionID = QuestionID;
  this.Correct = Correct;
}
//hrb:End of class added for Grad question

//hrb start : added class for bookmarks
function setBookMark(title, description, link) {
  this.bkTitle = title;
  this.bkDescription = description;
  this.bkLink = link;
}
//hrb end : added class for bookmarks

function TestInit() {
  document.getElementById("outlinebuttonL").innerHTML = "Lsn " + CurrentChapter + " Test";

  //start Hrb: Added condition for Final Exam
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    for (i = 0; i < finalExamTotalQuestions; i++) {
      TestQuestion[i] = new TestQ("", false);
    }
  }
  else {
    //start Hrb: Final Exam
    //get the no. of questions from No of questions to display
    var NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10);

    for (i = 0; i < NoOfQuesToDisplayChap; i++) {
      TestQuestion[i] = new TestQ("", false);
    }
  }
  for (var index = 0; index < CategoryList.length; index++) {
    if (CategoryList[index].CategoryCode == CurrentChapter.toString(10)) {
      FirstPage = CategoryList[index].FirstQuestion;
      LastPage = CategoryList[index].LastQuestion;
      break;
    }
  }
  //HRB: Added for loading style for attempted question select option from combo box 
  fnLoadAttemptedQuestStyle();
  //HRB: End of Added for loading style for attempted question select option from combo box
}

function ChapterInit(chapter) {
  CurrentChapter = chapter;
  for (var index = 0; index < CategoryList.length; index++) {
    if (CategoryList[index].CategoryCode == CurrentChapter.toString(10)) {
      FirstPage = CategoryList[index].FirstQuestion;
      LastPage = CategoryList[index].LastQuestion;
      break;
    }
  }
}

function Category(Code, FirstQuestion, LastQuestion, Description) {
  this.CategoryCode = Code;
  this.FirstQuestion = FirstQuestion;
  this.LastQuestion = LastQuestion;
  this.Description = Description;
}

function GetFirstPage(Category) {
  var fp = 1;
  for (var index = 0; index < CategoryList.length; index++) {
    if (CategoryList[index].CategoryCode == Category) {
      fp = CategoryList[index].FirstQuestion;
      break;
    }
  }
  return fp;
}

function GetLastPage(Category) {
  var lp = 1;
  for (var index = 0; index < CategoryList.length; index++) {
    if (CategoryList[index].CategoryCode == Category) {
      lp = CategoryList[index].LastQuestion;
      break;
    }
  }
  return lp;
}


function Menu(div, w, h, direction, num) {
  //hrb start 18/5/2009: added to enable the transcript button
  if (parent.frames.frame_b.document.getElementById("transContent")) {
    document.getElementById("transcriptbuttonLD").style.display = "none";
    document.getElementById("transcriptbuttonL").style.display = "";
  }
  //hrb end 18/5/2009: added to enable the transcript button
  hideCheckpoint();
  if (direction) //if direction = 1
  {
    //hrb:added to enable the certificate button
    CloseCertificateDiv()
    //hrb start 18/5/2009: added to close the transcript div
    if (parent.frames.frame_b.document.getElementById("transContent")) {
      CloseTranscriptDiv()
    }
    //hrb end 18/5/2009: added to close the transcript div
    //hrb:end of added to enable the certificate button
    if (num == 0) {
      if (VisibleMenu != "") {
        if (VisibleMenu != "searchTextButtonL") {
          //hrb:added to hide the search div
          if (document.getElementById("searchpopupL").style.visibility == "visible") {
            document.getElementById("searchpopupLx").onclick();
          }

          document.getElementById(VisibleMenu).style.visibility = 'hidden'
          document.getElementById(VisibleMenu).style.display = 'none'
          document.getElementById(VisibleMenu + "x").style.visibility = 'hidden'
          document.getElementById(VisibleMenu + "x").style.display = 'none'

          if (VisibleMenu == "searchL") {
            if (document.getElementById(VisibleMenu))
              document.getElementById(VisibleMenu).style.top = SEARCH_TOP_POS;
          }
          // start hrb 22/Apr/2009: Added for bookmark pop menu
          else if (VisibleMenu == "bookmarkL") {
            // hrb: Reset the top position of the bookmark menu item
            if (document.getElementById(VisibleMenu))
              document.getElementById(VisibleMenu).style.top = BOOKMARK_TOP_POS;
          }
          // end hrb 22/Apr/2009: Added for bookmark pop menu
          // start hrb 23/Apr/2009: Added for print pop menu
          else if (VisibleMenu == "printL") {
            // hrb: Reset the top position of the print menu item
            if (document.getElementById(VisibleMenu))
              document.getElementById(VisibleMenu).style.top = PRINT_TOP_POS;
          }
          // end hrb 23/Apr/2009: Added for print pop menu
          else {
            if (document.getElementById(VisibleMenu))
              document.getElementById(VisibleMenu).style.top = DEFAULT_TOP_POS;
          }

          if (VisibleMenu != div) {
            var tmpDivStr = VisibleMenu.substring(0, VisibleMenu.length - 1);
            if (document.getElementById(tmpDivStr + "buttonLD"))
              document.getElementById(tmpDivStr + "buttonLD").style.display = "none";
            if (document.getElementById(tmpDivStr + "buttonL"))
              document.getElementById(tmpDivStr + "buttonL").style.display = "";
          }
        }
        else {
          //hrb:is search button is clicked then search menu shuold not get enabled
          if (div == "searchL") {
            document.getElementById("searchbuttonLD").style.display = "";
            document.getElementById("searchbuttonL").style.display = "none";
          }
          else {
            document.getElementById("searchbuttonLD").style.display = "none";
            document.getElementById("searchbuttonL").style.display = "";
          }
        }
      }

      document.getElementById(div).style.visibility = 'visible';
      document.getElementById(div).style.display = '';

      VisibleMenu = div;
      //hrb: Added to hide the out line if open
      if (outlineflag) {
        document.getElementById('in1').onclick();
      }
      //hrb: end of Added to hide the out line
    }
  }
  //hrb: Added to hide glossary terms description popup
  //hrb: end code added to check whether authorBioPopUp is open directly or through search result page
  document.getElementById("popupL").style.visibility = 'hidden';
  document.getElementById("testPopUpLx").onclick();

  //start Hrb(05/25/2009): Added for course previewer
  if (!isDemoCoursePopUpOnNextClick)
    document.getElementById("coursePreviewerPopUpLx").onclick();
  //End Hrb(05/25/2009): Added for course previewer

  //hrb: Added to hide help description popup
  document.getElementById("helpPopUpL").style.visibility = 'hidden';
  //hrb: End of Added to hidehelp description popup

  if (w > h)
    x = w / 50 + 1;
  else
    x = h / 50 + 1;

  if (num <= x) {

    if (direction) //open if direction = 1
    {
      //hrb start 19/5/2009: added to close the clickAnd Reveal popup on click of menu
      if (isRevalClicked) {
        document.getElementById("ClickRevealPopUpLx").onclick();
        document.getElementById("ClickRevealPopUpL").onclick();
        isRevalClicked = false;
      }
      //hrb start 19/5/2009: added to close the clickAnd Reveal popup on click of menu       

      if (isIE && div == "searchL" && (LANGUAGE == "sp" || LANGUAGE == "fr")) {
        document.getElementById(div).style.width = num * 53
      }
      else {
        document.getElementById(div).style.width = num * 50
      }
      if (!isIE) {
        if (div == "printL") {
          document.getElementById(div).style.width = num * 50 + 7.5;
        }
        else {
          if (div == "searchL" && (LANGUAGE == "en" || LANGUAGE == "en-uk")) {
            document.getElementById(div).style.width = num * 49;
          }
          else {
            document.getElementById(div).style.width = num * 50 + 6.5;
          }
        }
        if (div == "searchL" && (LANGUAGE == "en" || LANGUAGE == "en-uk")) {
          document.getElementById(div + "1").style.width = num * 47;
        }
        else {
          document.getElementById(div + "1").style.width = num * 50 - 4;
        }
        document.getElementById(div + "1").scrollTop = 0;
      }
      if (div == "bookmarkL" || div == "printL") {
        if (num > 0) {
          // start hrb 22/Apr/2009: Added for bookmark pop menu
          if (div == "bookmarkL") {
            // Set the top - this will make effect that the pop up is opening from down to up
            if (bookmarkFlag == false) {
              // formatting the bookmark popup for firefox
              document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 15;
              document.getElementById(div + "1").style.top = 25;

              document.getElementById("bookmarkL1").style.padding = "10 5 5 5";
              document.getElementById("msrkBookmark").style.visibility = "hidden"
              if (!isIE) {
                // hrb : Added to adjust the dimension of bookmark popup on study page
                bookmarkFireFoxFlag = false;
              }
            }
            else {

              document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 15;
              document.getElementById(div + "1").style.top = 85;

              document.getElementById("msrkBookmark").style.visibility = "";
            }
          }
          // end hrb 22/Apr/2009: Added for bookmark pop menu
          else {
            document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 42;
          }
        }

        // formatting the bookmark popup for firefox
        if (!isIE) {

          document.getElementById('bookmarkTitle').style.width = 299;
          document.getElementById('msrkBookmark').style.height = 55;
          document.getElementById('bkDescription').style.padding = '0 10 0 0';
          document.getElementById('bookmarkL1').style.width = 300;
        }
      }
      else {
        //hrb start: check if top of seacsh is less than 400 then dont decrese  
        if (div == "searchL") {
          if (parseInt(document.getElementById(div).style.top) > 400)
            document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 42;
        }
        else
          document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 42;
        //hrb end: check if top of seacsh is less than 400 then dont decrese  
      }

      if ((VisibleMenu == "bookmarkL") && (num > 2)) {
        document.getElementById(div).style.height = (num - 2) * 50 - bookmarkHeightAdjustmentFactor;
      } else if ((VisibleMenu == "printL") && (num > 2)) {
        document.getElementById(div).style.height = (num - 2) * 49 + printHeightAdjustmentFactor;
        if (!isIE) {
          document.getElementById(div).style.height = (num - 2) * 49 + printHeightAdjustmentFactor + 23;
        }
      } else {
        document.getElementById(div).style.height = num * 49
      }

      if (num * 50 > 20 + 10) {
        if ((VisibleMenu == "bookmarkL") && (num > 2)) {
          if (bookmarkFlag == false) {
            document.getElementById(div + "1").style.height = (num - 2) * 50 + 40 - bookmarkHeightAdjustmentFactor;
          }
          else {
            document.getElementById(div + "1").style.height = (num - 2) * 50 - 20 - bookmarkHeightAdjustmentFactor;
          }

        } else if ((VisibleMenu == "printL") && (num > 2)) {

          document.getElementById(div + "1").style.height = (num - 2) * 50 - 15 + printHeightAdjustmentFactor;
        } else {

          document.getElementById(div + "1").style.height = num * 50 - 20 - 5 - 5;
          if (!isIE) {
            document.getElementById(div + "1").style.height = num * 50 - 20 - 18;
          }
        }
      }
      else
        document.getElementById(div + "1").style.height = 0
      if (div != "searchL") {
        var tmpDivStr = div.substring(0, div.length - 1);

        if (document.getElementById(tmpDivStr + "buttonL"))
          document.getElementById(tmpDivStr + "buttonL").style.display = "none";

        if (document.getElementById(tmpDivStr + "buttonLD"))
          document.getElementById(tmpDivStr + "buttonLD").style.display = "";
      }
    }
    else //close
    {
      // hrb: End of commented code to close the pop up from up to down side
      if (num > 0) {
        // start hrb 22/Apr/2009: Added for bookmark pop menu
        if (div == "bookmarkL") {
          // Set the top - this will make effect of closing the pop up from up to down
          document.getElementById("msrkBookmark").style.visibility = "";
          if (bookmarkFlag == false) {
            document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) + 15;
            document.getElementById(div + "1").style.top = 60;
          }
          else {
            document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) + 15;
            document.getElementById(div + "1").style.top = 65;
          }
        }
        // end hrb 22/Apr/2009: Added for bookmark pop menu
        else
          document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) + 42;
      }
      if (w > num * 50)
        document.getElementById(div).style.width = w - num * 50;
      else {
        document.getElementById(div).style.visibility = 'hidden';
        document.getElementById(div).style.display = 'none';
      }
      if (h > num * 50) {
        document.getElementById(div).style.height = h - num * 50;
        if (h - num * 50 > 20 + 10) {
          document.getElementById(div + "1").style.height = h - num * 50 - 20 - 10;
        }
        else
          document.getElementById(div + "1").style.height = 0;
      }
      else {
        document.getElementById(div).style.visibility = 'hidden';
        document.getElementById(div).style.display = 'none';

        if (div == "searchL") {
          document.getElementById(div).style.top = SEARCH_TOP_POS;
          if (!isIE) {
            document.getElementById("OuterBlock").style.borderTop = 'solid thin #9b9b9b'
          }
        }
        // start hrb 22/Apr/2009: Added for bookmark pop menu
        else if (div == "bookmarkL") {
          // Rest the top of the bookmark menu item
          document.getElementById(div).style.top = BOOKMARK_TOP_POS;
        }
        // end hrb 22/Apr/2009: Added for bookmark pop menu
        // start hrb 23/Apr/2009: Added for print pop menu
        else if (div == "printL") {
          // Rest the top of the print menu item
          document.getElementById(div).style.top = PRINT_TOP_POS;
        }
        // end hrb 23/Apr/2009: Added for print pop menu
        else {
          document.getElementById(div).style.top = DEFAULT_TOP_POS;
        }
        //HRB: Added for check exit is click and want to exit from system
        if (isExitClicked) {
          timeout = true;
          fnShowCloseAlert();
        }

      }

      var tmpDivStr = div.substring(0, div.length - 1);
      if (document.getElementById(tmpDivStr + "buttonLD"))
        document.getElementById(tmpDivStr + "buttonLD").style.display = "none";

      if (document.getElementById(tmpDivStr + "buttonL"))
        document.getElementById(tmpDivStr + "buttonL").style.display = "";
    }
    num++;
    if (!timeout) {
      setTimeout("Menu('" + div + "'," + w + "," + h + "," + direction + "," + num + ")", 5);
    }
    timeout = false;
    //Start Hrb(08/14/2009): Show the video after closing the menu items
    if (direction) //open if direction = 1
    {
      showOutlineOverVdo();

    }
    else {
      //start Hrb(08/19/2009): if certificate pop up is open then show the link to continue video instead of the video
      var objCertificatepopupL = document.getElementById("CertificatepopupL");

      if (objCertificatepopupL.style.visibility == 'visible')
        showOutlineOverVdo();
      else
        hideOutlineOverVdo();
    }
    //End Hrb(08/14/2009): Show the video after closing the menu items
  }
  else {
    if (direction) //if direction = 1
    {
      document.getElementById(div + "1").style.width = document.getElementById(div).clientWidth - document.getElementById(div + "1").style.pixelLeft;
      document.getElementById(div + "x").style.left = document.getElementById(div).clientWidth - 14;

      if (eval("document.getElementById('" + div + "').style.visibility") == "visible") {
        document.getElementById(div + "x").style.visibility = 'visible';
        document.getElementById(div + "x").style.display = '';
        document.getElementById(div).style.display = '';

        if (div == "glossL") {
          document.getElementById(div + "1").innerHTML = document.getElementById('terms').innerHTML;

        }
        if (div == "bookmarkL") {
          var newdiv = fncreateBkDiv();
          document.getElementById(div + "1").innerHTML = newdiv;
        }
      }
    }
    else {

      document.getElementById(div + "x").style.visibility = 'hidden';
      document.getElementById(div + "x").style.display = 'none';

      if (VisibleMenu == "searchL") {
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = SEARCH_TOP_POS;
      }
      // start hrb 22/Apr/2009: Added for bookmark pop menu
      else if (VisibleMenu == "bookmarkL") {
        // Reset the top of the bookmark menu item
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = BOOKMARK_TOP_POS;
      }
      // end hrb 22/Apr/2009: Added for bookmark pop menu
      // start hrb 23/Apr/2009: Added for print pop menu
      else if (VisibleMenu == "printL") {
        // Reset the top of the printL menu item
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = PRINT_TOP_POS;
      }
      // end hrb 23/Apr/2009: Added for print pop menu
      else {
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = DEFAULT_TOP_POS;
      }
    }
  }

  if (VisibleMenu != "searchL")
    document.getElementById("OuterBlock").style.visibility = "hidden";
  else {
    document.getElementById("searchbuttonL").style.display = "none";
    document.getElementById("searchbuttonLD").style.display = "";
  }

  // Hrb1; added for the Bookmark popup
  if (!isIE) {
    if (VisibleMenu == "bookmarkL" && document.getElementById("msrkBookmark").style.visibility == "hidden") {
      document.getElementById("bookmarkL1").style.height = parseInt(document.getElementById("bookmarkL1").style.height) - 7.5;
      document.getElementById("bookmarkL1").style.width = parseInt(document.getElementById("bookmarkL1").style.width) - 2.5
    }
    else
      if (!bookmarkFireFoxFlag) {

        document.getElementById("bookmarkL1").style.height = parseInt(document.getElementById("bookmarkL1").style.height) - 8;
        document.getElementById("bookmarkL1").style.width = parseInt(document.getElementById("bookmarkL1").style.width) - 2.5;
      }
  }

  //start Hrb(05/25/2009): Added for course previewer
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters))
    fnSetMenuForDemoCourse();
  //End Hrb(05/25/2009): Added for course previewer   

  if (!isIE) {
    if (VisibleMenu == "printL") {
      document.getElementById(VisibleMenu).style.height = 260;
    }
    if (VisibleMenu == "helpL") {
      document.getElementById(VisibleMenu).style.height = 250;
    }
  }


}

function Outline(div, img) {
  var objDiv = document.getElementById(div);

  if (objDiv.style.display == 'none') {
    objDiv.style.display = '';
    img.src = 'common/images/expand2.gif';
  }
  else {
    objDiv.style.display = 'none';
    img.src = 'common/images/expand.gif';
  }
}


function Collapse() {
  //start Hrb(25/04/09): Changed the index from 1 to 0 as 0thchapter is the course information
  for (var index = 0; index <= TotalChapters; index++) {
    document.getElementById("ch" + index).style.display = 'none';
    document.getElementById("i" + index).src = 'common/images/expand.gif';
  }
  //end Hrb(25/04/09): Changed the index from 1 to 0 as 0thchapter is the course information
}


//newly added variable for glossary term to keep track that it is call from outline
var glossaryOutlineCall = false;
var glossaryCall = false;
function O(loc, isOutlineCall, pageSrc, event) {

  if (!isOutlineCall)
    closePopUp(); // closing all the popups if not opened from course outline

  pageOrigin = pageSrc;
  if (event != null && event.stopPropagation) {
    event.stopPropagation();
  }
  else if (window.event) {
    window.event.cancelBubble = true;
  }

  //Date:19-Feb-2009: Harbinger[SagarG]: Added for glossary terms opening in new div popup within course window
  if (loc.indexOf("g/") == -1) {
    //opening supplement from the course
    var sFeatures = "left=100, top=120, width=400, height=300, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=no, titlebar=no";
    MainWin = window.open(loc, "_blank", sFeatures);
  }
  else {
    //Start:HRB Check whether current page is study question, if it is then set outline flag to true
    var desiredProduct = document.getElementById("desired-product-behavior");
    if (desiredProduct && desiredProduct.value) {
      isOutlineCall = true;
    }
    if (isOutlineCall == true) {
      glossaryOutlineCall = isOutlineCall;
      showPopup(loc);
    }
    else {
      //showPopup(loc);
      //12-1-11 start
      //var declration
      var curTop = 0, curLeft = 0, curWidth = 0;
      var pageWidth = 1024, popupWidth = 468, pageHeight = 647, popupHeight = 200;

      if (isEbook == true)
        pageHeight = 545;

      var popupTop = 0, popupLeft = 0;
      var popupArrowLeft = 0, popupArrowTop = 0;
      var forLeft = 0, forTop = 0;
      var arrowUrl = "";
      var popUpHeaderArrow_width = 26;
      var popUpHeaderArrow_height = 14;

      //geting top and left
      var ele = event.target || event.srcElement;
      curWidth = ele.offsetWidth;
      if (ele.offsetParent) {
        do {
          curTop += ele.offsetTop;
          curLeft += ele.offsetLeft;
        } while (ele = ele.offsetParent);
      }

      //if scroll any page than take take scroll y value for set popup top
      if (!chkEBookFormat()) {
        if (document.getElementById("adiv")) {
          curTop += moveScrollForAPW4.y;
        }
      }

      //setting a popup and its arrow
      popupArrowTop = curTop;
      popupArrowLeft = curLeft;
      popupTop = curTop;
      popupLeft = curLeft;

      forLeft = curLeft + popupWidth;
      forTop = curTop + popupHeight;

      popupTop += 27;
      popupArrowTop += 17;
      popupArrowLeft += 15;

      //for left
      if (forLeft > pageWidth) {
        popupLeft = pageWidth - popupWidth;
        popupLeft -= 10;
      }

      //for top
      if (forTop > pageHeight) {
        popupTop = curTop - popupHeight;
        if (isEbook)
          popupTop -= 43;
        else
          popupTop -= 50;
        popupArrowTop = curTop - 11;
        arrowUrl = "url(common/images/bottom.png)";
      } else {
        if (isEbook)
          popupTop += 1;
        arrowUrl = "url(common/images/top.png)";
      }
      //12-1-11 for arrow start 
      glossaryCall = true;
      document.getElementById("glossiframe").src = loc;
      var popupHeaderArrow = document.getElementById("popupHeaderArrow");
      var font_size = 14;

      popupHeaderArrow.style.width = popUpHeaderArrow_width;
      popupHeaderArrow.style.height = popUpHeaderArrow_height;
      popupHeaderArrow.style.position = "absolute";
      popupHeaderArrow.style.top = popupArrowTop;
      popupHeaderArrow.style.left = popupArrowLeft;
      popupHeaderArrow.style.backgroundImage = arrowUrl;

      //for arrow end
      var popupLObj = $get('popupL');
      popupLObj.style.top = popupTop + "px";
      popupLObj.style.left = popupLeft;
      //popupLObj.style.height=height;
      popupLObj.style.width = popupWidth;
      popupLObj.style.height = 200;
      document.getElementById("scrollpopup").style.width = 436;
      //showIPadPopup("", "",popupTop+"px",popupLeft+"px","200px",popupWidth+"px","436px");

    }
  }

}

function H(loc) {
  MainWin = window.open(loc, "GlossaryTerm", "left=70, top=125, height=300, width=400, fullscreen=0, toolbar=0, titlebar=1, resizable=1, scrollbars=1");
}

function O2(loc) {
  MainWin = window.open(loc, "GlossaryTerm", "left=100, top=120, height=300, width=400, fullscreen=0, toolbar=1, titlebar=1, resizable=1, scrollbars=1");
}

function runCmd(cmd) {
  var shell = new ActiveXObject("WScript.shell");
  shell.run(cmd, 1);
}

function executeCommands(inputparms) {
  // Instantiate the Shell object and invoke its execute method.
  var oShell = new ActiveXObject("Shell.Application");

  var commandtoRun = "C:\\Windows\\system32\\Notepad.exe";
  if (inputparms != "") {
    var commandParms = document.Form1.filename.value;
  }

  // Invoke the execute method.
  oShell.ShellExecute(commandtoRun, commandParms, "", "open", "1");
}

function OHTML_W_H(loc, W, H, scrolling) {
  var leftForCentered;
  var topForCentered;

  if (scrolling == 1) W = W + 20

  if (W > 790) W = 790

  leftForCentered = (800 - W) / 2

  if (H > 570) H = 570

  topForCentered = (600 - H) / 2 - 20;

  if (topForCentered < 0) topForCentered = 0

  MainWin = window.open(loc, "GlossaryTerm", "left=" + leftForCentered + ", top=" + topForCentered + ", height=" + H + ", width=" + W + ", fullscreen=0, toolbar=0, titlebar=1, resizable=1, scrollbars=" + scrolling);
}

function OpenNew(loc) {
  var sFeatures;

  if (PrintWin != null)
    PrintWin.close();
  sFeatures = "left=100, top=120, width=400, height=300, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";

  PrintWin = window.open(loc, "_blank", sFeatures);
}

function BeforePrint() {
  var objResponse = document.getElementById("responsew");
  var objQuestion = document.getElementById("question");

  T = objResponse.style.top;
  L = objResponse.style.left;
  objResponse.style.top = objQuestion.style.top + objQuestion.clientHeight;
  objResponse.style.left = objQuestion.style.left;
}

function AfterPrint() {
  var objResponse = document.getElementById("responsew");
  objResponse.style.top = T;
  objResponse.style.left = L;
}

function showOutlineOverVdo() {
  var vdoLeftPos = 0;
  var vdoTopPos = 0;
  var vdoWidth = 0;
  var vdoHeight = 0;

  if (document.embedMov) {
    if (document.getElementById("divVideo")) {
      var embedTagObj = document.getElementById("divVideo").getElementsByTagName("embed");
      if (document.embedMov) {
        document.embedMov.Stop();
      }
      document.getElementById("divVideo").style.visibility = "hidden";
      vdoLeftPos = document.getElementById("divVideo").offsetLeft;
      vdoTopPos = document.getElementById("divVideo").offsetTop;
      vdoWidth = document.getElementById("divVideo").offsetWidth;
      vdoHeight = document.getElementById("divVideo").offsetHeight;
    }

    if (document.getElementById("div_aboveVdo")) {
      document.getElementById("div_aboveVdo").style.display = "";
      document.getElementById("div_aboveVdo").style.left = vdoLeftPos + vdoWidth / 2;
      document.getElementById("div_aboveVdo").style.top = vdoTopPos + vdoHeight / 2;
    }
  }
}

function hideOutlineOverVdo() {
  if (document.embedMov) {
    if (document.getElementById("divVideo")) {
      document.getElementById("divVideo").style.visibility = "";
    }
    if (document.getElementById("div_aboveVdo")) {
      document.getElementById("div_aboveVdo").style.display = "none";
    }
    if (document.embedMov) {
      document.embedMov.Play();
    }
  }
}

function playMov() {
  hideOutlineOverVdo();
}

function OutlineShowHide() {
  var objOut1 = document.getElementById("out1");

  hideCheckpoint();

  if (objOut1.style.display == '') {
    objOut1.onclick();
    showOutlineOverVdo();
  }
  else {
    document.getElementById("in1").onclick()
    var objCertificatepopupL = document.getElementById("CertificatepopupL");

    //start Hrb(08/19/2009): if certificate pop up is open then show the link to continue video instead of the video
    if (objCertificatepopupL.style.visibility == 'visible')
      showOutlineOverVdo();
    else
      hideOutlineOverVdo();
  }
}

function GetNumberOfTestQuestions(Chapter) {
  return TestQuestionsArray[Chapter - 1];
}

//HRB: Added for showing test description page before going to test page.
function fnShowChapterTestDescrPage() {
  document.getElementById('showQuestionNumber').style.visibility = 'hidden';

  isChapterTestPageShown = true;

  //hrb:added to display test instruction
  var isShowTestFailPage = false;

  //hrb:changes for final exam
  if (FinalExam == EXAM_POSITION_BYCOURSE) //yes
  {
    if (noOfattempts < testAttempts)
      isShowTestFailPage = false;
    else
      isShowTestFailPage = true;
  }
  else {
    //hrb:below if condition is changed to check whether user has failed in any chapter for 3 times
    if (!isFailed())
      isShowTestFailPage = false;
    else
      isShowTestFailPage = true;
  }
  testDescriptionStr = "";

  if (isShowTestFailPage) {
    testDescriptionStr = "";
    testDescriptionStr = CurrentChapter + ',test_page_fail';
    //hrb start : Added for bookmark menu
    bookmarkFlag = false;
    //hrb end : Added for bookmark menu
    parent.frames.frame_b.document.location = "test_page_fail.htm";
  }
  else {
    testDescriptionStr = "";
    testDescriptionStr = CurrentChapter + ',test_page';
    //hrb start : Added for bookmark menu
    bookmarkFlag = false;
    //hrb end : Added for bookmark menu
    parent.frames.frame_b.document.location = "test_page.htm";
  }

  //hrb:end of changes for final exam
  document.getElementById("submittest_disable").style.visibility = "hidden";
  document.getElementById("submittest").style.visibility = "hidden";
  document.getElementById("questionControlPanel").style.visibility = 'hidden';

  fnHideCurrentQuestHeader();
  mode = "study";

  //start Hrb: Added condition for Final Exam
  if (FinalExam == EXAM_POSITION_BYCHAPTER)
    document.getElementById("divPageTitle").innerHTML = "&nbsp;" + CHAPTER + " " + CurrentChapter + ", " + TEST;
  else
    document.getElementById("divPageTitle").innerHTML = "&nbsp;" + FINAL_EXAM + ", " + TEST;
  //End Hrb: Added condition for Final Exam

  //HRB: Set the course title
  try {
    document.getElementById('coursetitle').innerHTML = courseTitle;
    AdjustCourseTitle(courseTitle);
  }
  catch (err) { }
  //HRB: End by hrb

  document.getElementById("PrevButton").style.display = "";
  document.getElementById("PrevButtonDisabled").style.display = "none";
  document.getElementById("btnBack").style.display = "";

  //hrb:changes to goto next chapter if failed in any chapter test for 3 times then disable the next button
  //if the course is having final exam and is failed three times then 
  if (isFailed() && (FinalExam == EXAM_POSITION_BYCOURSE)) {
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";
    document.getElementById("btnNext").style.display = "none";
  }
  //if the course is having chapter test and current chapter is the last chapter of the course which is failed then disable the next button
  else if (noOfattempts == testAttempts && (FinalExam == EXAM_POSITION_BYCHAPTER && CurrentChapter == TotalChapters)) {
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";
    document.getElementById("btnNext").style.display = "none";
  }
  else {
    document.getElementById("NextButton").style.display = "";
    document.getElementById("NextButtonDisabled").style.display = "none";
    document.getElementById("btnNext").style.display = "none";
  }

  //hrb: end of changes to goto next chapter if failed in any chapter test for 3 times
  return 0;
}

function fnHideCurrentQuestHeader() {
  document.getElementById("showQuestionNumber").innerHTML = "";
  CurrentTestQuestion = 0;
}
//HRB:end of function added for showing test description page before going to test page.

function St(Chapter) {


  if (outlineflag) {
    if (mode == "review" || mode == "retake") {
      var str = "";
      if (mode == "review") {
        str = eval("SWITCH_FROM_REVIEW_" + FinalExam.toUpperCase());
        showConfirmPopup('Review', str, Chapter, "St");
      }
      else {
        str = eval("SWITCH_FROM_RETAKE_" + FinalExam.toUpperCase());
        showConfirmPopup('Retake', str, Chapter, "St");
      }

      outlineflag = 0;

      return;


    }
  }

  var clickedfromchapter;
  //Start Hrb(06/16/2009): Added for preserving test questions
  var questionToPick;
  //end Hrb(06/16/2009): Added for preserving test question

  //hrb start: Show popup if course is expired
  if (isExpired) {

    document.getElementById("testPopUpL1").style.textAlign = "center";
    showAlertPopup(COURSE_EXPIRE, COURSE_HAS_EXPIRED);
    return;
  }
  //hrb end: Show popup if course is expired

  clickedfromchapter = CurrentChapter;

  CurrentChapter = Chapter;

  //start Hrb(05/25/2009): Added for course previewer
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {

    showCoursePreviewPopUp();
    CurrentChapter = clickedfromchapter;
    return;
  }
  //End Hrb(05/25/2009): Added for course previewer

  //preliminary pages status
  updatePreliminaryPageStatusFromOutline();
  //end preliminary pages status

  //HRB: Added for showing test description page before going to test page.
  if (outlineflag) {
    // Added to display the TestPopUp window in Firefox
    if (noOfattempts == testAttempts) {
      // var alertMsg = FAILED_CANNOT_RETAKE_TEST_PART3 + testAttempts + FAILED_CANNOT_RETAKE_TEST_PART2;
      closePopUp();
      //showIPadPopup(CHAPTER_TEST, alertMsg, "230px","315px", "125px", "350px", "436px");
      //  getScrollbar(scrollpopup);
      //  $("#scrollpopup").width("324px");
      CurrentChapter = clickedfromchapter;
      return;
    }
    //hrb: check if user has completed the course. noOfattempts = 9999 when complete
    else if (noOfattempts >= CHAPTER_TEST_PASSED) {
      closePopUp();
      //showIPadPopup(CHAPTER_TEST, CHAPTERTEST_PASS_INFO1, "230px","315px", "125px", "350px", "436px");
      //    getScrollbar(scrollpopup);
      //$("#scrollpopup").width("324px");
      CurrentChapter = clickedfromchapter;
      return;
    }
  }

  if (!isChapterTestPageShown) {
    fnShowChapterTestDescrPage();
    return;
  }
  else {
    testDescriptionStr = ""
    isChapterTestPageShown = false;
  }
  //HRB: End of Added for showing test description page before going to test page.

  // Start a test.
  // Can come here
  //   i)  from the outline, when selecting a chapter test
  //   ii) from the next button, when pressed on the last page of a chapter

  document.progress.Bookmark(0);
  testDescriptionStr = CurrentChapter + ',test_page';
  document.progress.testDescription(testDescriptionStr);

  TestInit();
  CurrentTestQuestion = 0;
  document.getElementById(currentDivId).innerHTML = "";

  //hrb: Added chapter test question combo box
  document.getElementById("questionControlPanel").style.visibility = 'hidden';
  //hrb: End of Added chapter test question combo box

  //hrb: Added chapter test question number
  document.getElementById("showQuestionNumber").style.visibility = 'visible';
  //hrb: End of Added chapter test question number
  enableSubmitTest = false;
  document.getElementById("submittest").style.visibility = 'hidden';
  document.getElementById("submittest_disable").style.visibility = 'visible';

  if (document.getElementById("subchaptertitle") != null)
    document.getElementById("subchaptertitle").innerHTML = "";

  //hrb: changes for next and prev button
  document.getElementById("PrevButtonDisabled").style.display = "none";
  document.getElementById("NextButton").style.display = "";
  document.getElementById("PrevButton").style.display = "";
  document.getElementById("NextButtonDisabled").style.display = "none";
  document.getElementById("btnNext").style.display = "";
  document.getElementById("btnBack").style.display = "";

  //hrb:end of changes for next and prev button

  //Start Hrb(06/16/2009): Added for preserving test questions
  FillTestQuestionsArray(Chapter);
  //End Hrb(06/16/2009): Added for preserving test questions


  //HRB : added to hide outline
  if (isNotNullOrUndefined("outlineL") && document.getElementById("outlineL").style.pixelLeft > 200) {
    // Outline is out, so control is here because user clicked on link in outline to test
    mode = "starttest";
  }
  else {
    // User clicked next button at end of chapter.
    // Used to have a Flash that introduced the test.
    // Here loaded test.htm into frame_b, which
    //   loaded starttest.swf, which
    //   played and then loaded starttest.htm, which
    //   called ShowTestQuestion.
    // But IE7 broke the Flash transfer, so we now skip the Flash and go right to starttest.htm,
    // letting it call ShowTestQuestion(1).
    // This is similar to above in OutlineHide(), where, for unknown reason,
    // we can go straight to ShowTestQuestion(1)
    // JDO 12/06/06

    //  parent.frames.frame_b.document.location.href = "starttest.htm";
    ShowTestQuestion(1);

  }

}

function Sc(chaptercode) {
  var chapterIndex;
  var index;

  //hrb start: Show popup if course is expired
  if (isExpired) {
    document.getElementById("testPopUpL1").style.textAlign = "center";
    showAlertPopup(COURSE_EXPIRE, COURSE_HAS_EXPIRED);
    return;
  }
  //hrb end: Show popup if course is expired

  index = chaptercode.toString(10).indexOf(' ');
  if (index != -1) {
    chapterIndex = chaptercode.toString(10).substring(0, index);
  }
  else {
    chapterIndex = chaptercode;
  }


  //start Hrb(05/25/2009): Added for course previewer
  if (outlineflag) {

    outlineflag = 0;

    if (mode == "review" || mode == "retake") {
      var str = "";
      if (mode == "review") {
        str = eval("SWITCH_FROM_REVIEW_" + FinalExam.toUpperCase());
        showConfirmPopup('Review', str, chaptercode, "sc");
      }
      else {
        str = eval("SWITCH_FROM_RETAKE_" + FinalExam.toUpperCase());
        showConfirmPopup('Retake', str, chaptercode, "sc");
      }

      return;
    }
    /* */
  }
  isDemoCoursePopUpOnNextClick = false;

  //start Hrb(05/25/2009): Added for course previewer 
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
    if (parseInt(chapterIndex) > parseInt(demoChapters)) {
      showCoursePreviewPopUp();

      //$("#scrollpopup").width("318px"); 
      //document.getElementById("popupL").style.left = "0px";
      //document.getElementById("popupL").style.zIndex = "6";
      //$("#popupL").zIndex("6");
      // CurrentChapter = clickedfromchapter;
      return;
    }
  }

  mode = "study";

  //hrb: Added chapter test question combo box
  document.getElementById("questionControlPanel").style.visibility = 'hidden';
  //hrb: End of Added chapter test question combo box

  //hrb: Added chapter test question number
  document.getElementById("showQuestionNumber").style.visibility = 'hidden';
  //hrb: End of Added chapter test question number

  document.getElementById("submittest").style.visibility = 'hidden';
  document.getElementById("submittest_disable").style.visibility = 'hidden';

  //start Hrb(22/4/2009): added preliminary pages status
  updatePreliminaryPageStatusFromOutline();
  //end Hrb(22/4/2009): added preliminary pages status


  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    if ((chaptercode >= 0 && chaptercode <= 3) || chaptercode == 'Ti' || chaptercode == 'We1' || chaptercode == 'We2' || chaptercode == 'Le') {
      CurrentChapter = 1;
      for (var itr = 0; itr < CategoryList.length; itr++) {
        if (CategoryList[itr].CategoryCode == CurrentChapter.toString(10)) {
          FirstPage = CategoryList[itr].FirstQuestion;
          LastPage = CategoryList[itr].LastQuestion;
          break;
        }
      }
    }
  }
  if (chaptercode == 0 || chaptercode == 'Ti') {
    ShowStudyPage(0);
  }
  else if (chaptercode == 'We1') {
    ShowStudyPage(1);
  }
  else if (chaptercode == 'We2') {
    ShowStudyPage(2);
  }
  else if (chaptercode == 'Le') {
    ShowStudyPage(3);
  }
  else {
    CurrentChapter = parseInt(chaptercode, 10).toString(10);

    for (var cnt = 0; cnt < CategoryList.length; cnt++) {
      if (CategoryList[cnt].CategoryCode == CurrentChapter.toString(10)) {
        FirstPage = CategoryList[cnt].FirstQuestion;
        LastPage = CategoryList[cnt].LastQuestion;
        break;
      }
    }

    ShowStudyPage(GetFirstPage(chaptercode));
  }
}

function ShowTestQuestion(index) {

  var ch;
  var NoOfQuesToDisplayChap;

  if (CurrentTestQuestion != 0) {
    GradeTestQuestion();
  }

  CurrentTestQuestion = index;
  ch = "0" + CurrentChapter;
  ch = ch.substring(ch.length - 2, ch.length);

  //Start Hrb(06/16/2009): Added for preserving test questions
  parent.frames.frame_b.document.location = "t" + ch + "-" + arrFinalQuestions[index - 1] + ".htm";
  //set the testdescriptionstr
  testDescriptionStr = CurrentChapter + "~T" + arrFinalQuestions[index - 1] + "~" + index;
  //End Hrb(06/16/2009): Added for preserving test questions

  NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10);

  document.getElementById("outlinebuttonL").innerHTML = "Lsn " + CurrentChapter + " Test<br><br>Question " + index + " of " + NoOfQuesToDisplayChap
  //end Hrb: Final Exam,get the questions from no of questions to display

  //hrb:changes for next and prev button
  document.getElementById("PrevButton").style.display = "";
  document.getElementById("NextButton").style.display = "";
  document.getElementById("PrevButtonDisabled").style.display = "none";
  document.getElementById("NextButtonDisabled").style.display = "none";

  document.getElementById("btnBack").style.display = "";
  document.getElementById("btnNext").style.display = "";
  //hrb:end of changes for next and prev button

  //start Hrb: Final Exam, get the questions from no of questions to display  

  if ((CurrentTestQuestion == NoOfQuesToDisplayChap) && (CurrentChapter == TotalChapters)) {
    //hrb:changes for next and prev button
    document.getElementById("NextButtonDisabled").style.display = "";
    document.getElementById("NextButton").style.display = "none";

    document.getElementById("btnNext").style.display = "none";
    //hrb:end of changes for next and prev button
  }

  if ((CurrentTestQuestion == 1) && (CurrentChapter == 1) && (mode == "review" || mode == "retake")) {
    document.getElementById("PrevButton").style.display = "none";
    document.getElementById("PrevButtonDisabled").style.display = "";

    document.getElementById("btnBack").style.display = "none";
  }
  //hrb: mode condition
  if (mode == 'study')
    mode = "test";
  //end Hrb: Final Exam, get the questions from no of questions to display

  //HRB: Added for setting the course title 
  document.getElementById('coursetitle').innerHTML = courseTitle;
  AdjustCourseTitle(courseTitle);
  //HRB: End by HRB

  // hrb Added For setting current question as combo box option value
  var selectedOption = "optq" + CurrentTestQuestion;
  if (document.getElementById(selectedOption)) {
    document.getElementById(selectedOption).selected = true;
  }
  // hrb :End of Added For setting current question as combo box option value

  //start hrb: Showing question number at the top
  //Hrb: Final Exam, get the questions from no of questions to display
  // if (mode == "review" || mode == "retake") {
  document.getElementById("showQuestionNumber").innerHTML = "<h1>" + CHAPTER_SPACE + parseInt(CurrentChapter) + " : " + TEST_QUESTION_BYCHAPTER + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + NoOfQuesToDisplayChap + "</h1>";
  document.getElementById("showQuestionNumber").style.width = 875;
  /*}
  else {
  document.getElementById("showQuestionNumber").innerHTML = "<h3>" + TEST_QUESTION + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + NoOfQuesToDisplayChap + "</h3>";
    
  }*/
  //end Hrb: Final Exam, get the questions from no of questions to display

  // For adjusting the top of the test question
  //if (!isIE) {
  document.getElementById("showQuestionNumber").style.top = 75;
  document.getElementById("showQuestionNumber").style.left = 70;

  //}

  //hrb: to show the  question no 
  document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + ", " + TEST + ", Q " + CurrentTestQuestion;
  //hrb : end of added code to show test question no
  //hrb:changes for next and prev button
  for (i = 0; i < NoOfQuesToDisplayChap; i++) {
    if (TestQuestion[i].Answer == "")
      break;
  }

  /*if(i==NoOfQuesToDisplayChap)
  //hrb: added to ensure next button is enabled for last question of chapter test for review workflow
  if((mode =='study' || mode =='test') && CurrentTestQuestion==NoOfQuesToDisplayChap)
  {
  document.getElementById("NextButton").style.display = "none";
  document.getElementById("NextButtonDisabled").style.display = "";
  }
  //hrb:end of changes for next and prev button*/
}

//start Hrb: Creted two functons based on final exam condition 
//Created two functions dependening on  whether course has final exam or chapter test
function SubmitTest() {
  event = window.event; //added coz of event undefined error-Rashmi
  if (event != null && event.stopPropagation) {
    event.stopPropagation();
  }

  else if (window.event) {
    window.event.cancelBubble = true;
  }
  //reset the flag to '1' when any test submitted
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    isChapterTestAttemptChanged = 1;
  }


  /*document.getElementById("glossbuttonL").style.visibility = '';
  document.getElementById("bookmarkbuttonL").style.visibility = '';
  document.getElementById("printbuttonL").style.visibility = '';
  document.getElementById("searchbuttonL").style.visibility = '';*/
  //hrb: Fixed Bug - Popups not being hidden on submit test. Called common function to hide popups 

  //Start HRB: Added for updating status of chapter test
  if (FinalExam == EXAM_POSITION_BYCOURSE)
    var key = "TestQuestion " + CurrentTestQuestion;
  else
    var key = "Chapter" + CurrentChapter + " TestQuestion " + CurrentTestQuestion;

  isChapterTestSubmited = true;

  //End HRB: Added for updating status of chapter test
  updateStatus(key, INCOMPLETED_STATUS_IMG);

  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    //hrb:changes for max 3 attempts
    noOfattempts++;

    if (noOfattempts <= testAttempts)
    //   SubmitFinalExam();
      showFinalExamConfirmationPage();
    else {
      Sc(1);
    }
  }
  else {
    SubmitChapterTest();
  }

  //reset the flag once submit the test
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    isQuestionResponseChanged = 0;
    isChapterTestAttemptChanged = 0;
  }
  UpdateProgressData(); //Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location

  if (saveStatusFunctionTimerPointer != null && saveStatusFunctionTimerPointer != 'undefined') {
    clearTimeout(saveStatusFunctionTimerPointer);
    if (activityThresholdValue != 0 && activityThresholdValue != -1)  //HRB: Added -1 check for the mLearning Help Course.
      saveStatusFunctionTimerPointer = setInterval("SaveProgressDataWithInterval()", activityThresholdValue);
  }


} // end SubmitTest()

function showFinalExamConfirmationPage() {
  GradeTestQuestion();
  CurrentTestQuestion = 0;
  document.getElementById("btnNext").style.display = "none";
  document.getElementById("btnBack").style.display = "";

  SetMode('nextchapter');

  CurrentChapter = TotalChapters;
  parent.frames.frame_b.document.location = "confirmation_page.htm";
  testDescriptionStr = CurrentChapter + ",confirmation_page";

  document.getElementById("showQuestionNumber").style.visibility = 'hidden';
  document.getElementById("submittest").style.visibility = 'hidden';

}

//startHrb: Changed the function name from SubmitTest() to SubmitChapterTest()
function SubmitChapterTest() {
  if (mode == "review" || mode == "retake") {
    CurrentChapter = TotalChapters;
    document.getElementById("PrevButton").style.display = "";
    document.getElementById("PrevButtonDisabled").style.display = "none";

    document.getElementById("btnBack").style.display = "";
    parent.frames.frame_b.document.location = "confirmation_page.htm";
    testDescriptionStr = CurrentChapter + ",confirmation_page";

    //hrb : added to disable the submit button
    document.getElementById("submittest").style.visibility = 'hidden';
    //hrb: end of added code to disable submit button
  }
  else {
    /*var NoOfQuesToDisplayChap;
    var CorrectCount = 0;
    var TestScore = 0;
    var qn;
    var rem = "";
    var chapterTestStatus;*/

    //hrb start : added to update the outline menu
    if (CurrentChapter == 0) {
      document.getElementById("istat" + "0" + "Test").className = COMPLETED_STATUS_CLASS;
      CompletedChapterCodeStr = CompletedChapterCodeStr + "0" + "Test" + ",";
    }
    else {
      document.getElementById("istat" + CurrentChapter + "Test").className = COMPLETED_STATUS_CLASS;
      CompletedChapterCodeStr = CompletedChapterCodeStr + CurrentChapter + "Test" + ",";
    }
    //hrb end : added to update the outline menu

    /*if(noOfAttemptedTests[CurrentChapter-1]==0)
    {
    if(gbl_completedQues!=0)
    gbl_completedQues = parseInt(gbl_completedQues,10) + parseInt(NoOfQuestionsToDisplayArray[CurrentChapter-1],10);
    else
    gbl_completedQues = parseInt(NoOfQuestionsToDisplayArray[CurrentChapter-1],10);
    }*/

    noOfAttemptedTests[CurrentChapter - 1]++;

    CurrentTestQuestion = 0;
    //Start HRB: Commented code to show same functionality for CREDIT and PILOTTESTING mode.

    if (CurrentChapter == TotalChapters) {
      document.getElementById("NextButton").style.display = "none";
      document.getElementById("NextButtonDisabled").style.display = "";

      document.getElementById("btnNext").style.display = "none";
    }
    else {
      document.getElementById("NextButton").style.display = "";
      document.getElementById("NextButtonDisabled").style.display = "none";
      document.getElementById("btnNext").style.display = "";
    }
    //}
    //End HRB: Commented code to show same functionality for CREDIT and PILOTTESTING mode.

    //hrb end 8/6/2009: check added to disable next button for piolt testing on last congrates page
    testDescriptionStr = CurrentChapter + ",congratslast_page";
    // HRB : Added for compliance

    //hrb:added to enable the certificate button
    //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
    /*if(lessonMode != LESSON_PILOTTESTING_MODE)
    {
    document.getElementById("certificatebuttonLDisabled").style.display = "none";
    document.getElementById("certificatebuttonLD").style.display = "none";
    document.getElementById("certificatebuttonL").style.display = "";
    }*/

    var chk = true;
    var cmp = true;
    for (var i = 0; i < TotalChapters; i++) {
      if (noOfAttemptedTests[i] == 0)
        chk = false;
    }

    for (var i = 0; i < arrChapterQuestionResponse.length; i++) {
      for (var j = 0; j < arrChapterQuestionResponse[i].length; j++) {
        if (arrChapterQuestionResponse[i][j] == "") {
          cmp = false;
          break;
        }
      }
    }

    if (chk == true || cmp == true) {
      CurrentChapter = TotalChapters;
      parent.frames.frame_b.document.location = "confirmation_page.htm";
      testDescriptionStr = CurrentChapter + ",confirmation_page";
      var isChapterCompleted;
      for (var i = 1; i <= TotalChapters; i++) {
        isChapterCompleted = false;
        document.getElementById("istat" + i + "Test").className = COMPLETED_STATUS_CLASS;
        addToCompletedChapterList(i + "Test");
        //start new code

        var mainChapterFirstPageNo = GetFirstPage(i);
        var mainChapterLastPageNo = GetLastPage(i);

        for (pageCount = mainChapterFirstPageNo; pageCount <= mainChapterLastPageNo; pageCount++) {
          if (VisitedPageNumStr.indexOf("," + pageCount + ",") == -1)
            break;
        }

        if (pageCount > mainChapterLastPageNo) {
          if ((CompletedChapterCodeStr.indexOf(i + "Test" + ",") != -1) || (FinalExam == EXAM_POSITION_BYCOURSE)) {
            isChapterCompleted = true;
          }
        }
        if (isChapterCompleted) {
          addToCompletedChapterList(i);
        }
        else {
          //Add current chapter in incomplete chapter
          addToInCompleteChapterList(i);
        }
        //end new code
      }
    }
    else {
      parent.frames.frame_b.document.location = "test_progress.htm";
      testDescriptionStr = CurrentChapter + ",test_progress";
      document.getElementById('btnNext').style.display = 'none';
    }
    //document.getElementById("divPageTitle").innerHTML = CHAPTER + " " +CurrentChapter+ ", Completed";
  }
  //hrb: Added chapter test question combo box
  document.getElementById("questionControlPanel").style.visibility = 'hidden';
  //hrb: End of Added chapter test question combo box

  //hrb: Added chapter test question number
  document.getElementById("showQuestionNumber").style.visibility = 'hidden';
  //hrb: End of Added chapter test question number

  //hrb : added to disable the submit button
  enableSubmitTest = false;
  document.getElementById("submittest").style.visibility = 'hidden';
  //hrb: end of added code to disable submit button
  mode = "nextchapter";
}

//hrb : the function written to display the fail page. appends the latest score

//hrb:added to check whether user is failed in any chapter for 3 times
function isFailed() {
  //hrb: changes to goto next chapter if failed in any chapter test for 3 times
  /*if (FinalExam != EXAM_POSITION_BYCOURSE) 
  {
  for(var index=0;index<=TotalChapters;index++)
  { 
  if(noOfAttemptedTests[index]>=testAttempts && noOfAttemptedTests[index] != CHAPTER_TEST_PASSED)
  return true;
  }
  return false;
  }
  else
  {*/
  if (noOfattempts >= testAttempts && noOfattempts != CHAPTER_TEST_PASSED)
    return true;
  else
    return false;
  //}
  //hrb: end of changes to goto next chapter if failed in any chapter test for 3 times
}
//hrb:end of added to check whether user is failed in any chapter for 3 times

// hrb : Added For making grayed background for attempted question from select question combo box
function fnSetQuestionAttempted() {
  // var selectedOption = "optq" + CurrentTestQuestion;
  //  document.getElementById(selectedOption).style.color = "gray";
}
// hrb : End of Added For making grayed background for attempted question from select question combo box

function fnLoadAttemptedQuestStyle() {
  var qCnt = 0;
  var selectQuestOptStr;

  //start Hrb: Final Exam, get the questions from no of questions to display
  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    var NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10);

    for (qCnt = 0; qCnt < NoOfQuesToDisplayChap; qCnt++) {
      selectQuestOptStr = "optq" + parseInt(qCnt + 1);
      if (TestQuestion[qCnt].Answer == "")//Not attempted question
      {
        if (document.getElementById(selectQuestOptStr)) {
          document.getElementById(selectQuestOptStr).style.color = "black";
        }
      }
      else {
        if (document.getElementById(selectQuestOptStr)) {
          document.getElementById(selectQuestOptStr).style.color = "gray";
        }
      }

    }
  }
  else {
    for (qCnt = 0; qCnt < finalExamTotalQuestions; qCnt++) {
      selectQuestOptStr = "optq" + parseInt(qCnt + 1);
      if (TestQuestion[qCnt].Answer == "")//Not attempted question
      {
        if (document.getElementById(selectQuestOptStr)) {
          document.getElementById(selectQuestOptStr).style.color = "black";
        }
      }
      else {
        if (document.getElementById(selectQuestOptStr)) {
          document.getElementById(selectQuestOptStr).style.color = "gray";
        }
      }
    }
  }
  //End Hrb: Final Exam, get the questions from no of questions to display
}


function bandwidthRowSelect(e) {
  var node = null;
  node = e.getElementsByTagName('input')[0];

  if (node.checked == true)
    node.checked = false;
  else
    node.checked = true;

  fnBandwidthChanged();

}

function selectRow(e, src, type, correctAnswer) {
  var node = null;
  var trNode = null;
  var trNodeParent = null;
  if (e.currentTarget.nodeName == "SPAN" || e.currentTarget.nodeName == "INPUT") {
    node = e.currentTarget.parentElement.parentElement.getElementsByTagName('input')[0];
    trNode = e.currentTarget.parentElement.parentElement;
    trNodeParent = trNode.parentElement;
  } else {
    node = e.currentTarget.parentElement.getElementsByTagName('input')[0];
    trNode = e.currentTarget.parentElement;
    trNodeParent = trNode.parentElement;
  }

  if (node.type == "radio") {
    node.checked = true;
  } else if (e.currentTarget.type != 'checkbox') {
    if (node.checked == true)
      node.checked = false;
    else
      node.checked = true;
  }

  var nodelength = 0;
  if (src != 'test')
    nodelength = document.getElementById('optionTbl').rows.length;
  else
    nodelength = document.getElementById('content').getElementsByTagName('input').length;

  if (node.type != "checkbox") {
    if (typeof trNode.getElementsByTagName('td')[0] != 'undefined') {
      if (trNode.getElementsByTagName('td')[0].getElementsByTagName('input')[0].style.display == 'none')
        return;
    }

    for (i = 0; i < nodelength; i++) {
      if (i % 2 != 0 && src != 'test') {
        $(trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('div')[0]).slideUp(500);

      }
      else {
        trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[1].style.fontWeight = 'normal';
        trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[2].style.fontWeight = 'normal';
        trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[3].getElementsByTagName('div')[0].style.backgroundImage = "";
        if (src != 'test') {
          trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = 'none';
          trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = 'none';
        }
        /*if(src == 'test')
        {
        trNodeParent.getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1,131,191)';  
        }*/
        trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('INPUT')[0].style.display = '';
        trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].style.backgroundColor = '';
      }
    }
    trimmedAns = trNode.getElementsByTagName('td')[1].innerHTML.split(".");
    trimmedAns = trimmedAns[0].split(">");
    if (trimmedAns[1] == correctAnswer) {
      trNode.getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = '';
      trNode.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(119, 162, 47)';
    }
    else if (src != 'test') {
      trNode.getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = '';
      trNode.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(220, 10, 10)';
    }
    if (src == 'test') {
      trNode.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1,131,191)';
    }
    if (src != 'test')
      trNode.getElementsByTagName('td')[0].getElementsByTagName('INPUT')[0].style.display = 'none';
    //trNode.getElementsByTagName('td')[1].style.fontWeight ="bold";
    //trNode.getElementsByTagName('td')[2].style.fontWeight ="bold";
    //  trNode.getElementsByTagName('td')[3].getElementsByTagName('div')[0].style.backgroundImage='url("common/images/green_tick.gif")';

  }
  else {
    $(trNodeParent.getElementsByClassName('stdquestrclass')[document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1].getElementsByTagName('td')[0].getElementsByTagName('div')[0]).slideUp(500);

    if (node.checked) {
      for (var i = 0; i < document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1; i++) {
        if (typeof document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0] != 'undefined' && typeof document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[1] != 'undefined') {
          document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = 'none';
          document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = 'none';
          document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName
          ('td')[0].getElementsByTagName('input')[0].style.display = '';
          if (document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].checked == true) {
            document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1, 131, 191)';
          }
        }
      }
      //trNode.getElementsByTagName('td')[1].style.fontWeight ="bold";
      //trNode.getElementsByTagName('td')[2].style.fontWeight ="bold";
      trNode.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1, 131, 191)';
    }
    else {
      trNode.getElementsByTagName('td')[1].style.fontWeight = "normal";
      trNode.getElementsByTagName('td')[2].style.fontWeight = "normal";
      //trNode.getElementsByTagName('td')[3].getElementsByTagName('div')[0].style.backgroundImage='';
      trNode.getElementsByTagName('td')[0].style.backgroundColor = '';
      trNode.getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = 'none';
      trNode.getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = 'none';

      for (var i = 0; i < document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1; i++) {
        if (typeof document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0] != 'undefined' && typeof document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[1] != 'undefined') {
          document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = 'none';
          document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = 'none';
          document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].style.display = '';
          if (document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].checked == true) {
            document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1, 131, 191)';
          }
        }
      }
      trNode.getElementsByTagName('td')[0].getElementsByTagName('input')[0].style.display = '';
    }
  }

  setTimeout(function () {
    if (node.type != "checkbox") {
      for (i = 0; i < nodelength; i++) {
        if (i % 2 != 0 && src != 'test') {
          trNodeParent.getElementsByClassName('stdquestrclass')[i].style.display = 'none';
          trNodeParent.getElementsByClassName('stdquestrclass')[i].getElementsByTagName('td')[0].getElementsByTagName('div')[0].innerHTML = "";


          document.getElementById('FeedBackHead').innerHTML = "";
          document.getElementById('FeedBackPopupL1').innerHTML = "";

        }

      }
    }
    if (node.type == "checkbox" && node.checked) {
      if (src != 'test') {
        trNodeParent.getElementsByClassName('stdquestrclass')[document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1].style.display = 'none';
        trNodeParent.getElementsByClassName('stdquestrclass')[document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1].getElementsByTagName('td')[0].getElementsByTagName('div')[0].innerHTML = "";
        document.getElementById('FeedBackHead').innerHTML = "";
        document.getElementById('FeedBackPopupL1').innerHTML = "";
      }
    }
    if (node.type == "checkbox" && node.checked == false) {
      trNodeParent.getElementsByClassName('stdquestrclass')[document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1].style.display = 'none';
      trNodeParent.getElementsByClassName('stdquestrclass')[document.getElementById('optionTbl').getElementsByClassName('stdquestrclass').length - 1].getElementsByTagName('td')[0].getElementsByTagName('div')[0].innerHTML = "";
      document.getElementById('FeedBackHead').innerHTML = "";
      document.getElementById('FeedBackPopupL1').innerHTML = "";
      //trNode.getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = 'none';
      //trNode.getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = 'none';

    }
    if (node.type == "radio") {

      //call GradeQuestion
      if (src != 'test') {
        GradeQuestion(correctAnswer, document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[trNode.rowIndex + 1]);
        document.getElementById('optionTbl').getElementsByClassName('stdquestrclass')[trNode.rowIndex + 1].style.display = '';

      }
    }
    if (src == "study" || src == "excercise") {
      fnSubmitAnswer(type, false);
    } else {
      TR(e);
    }
  }, '550'); // end of setTimeout
}
function TR(e) {
  event = e; //added coz event undefined error-rashmi
  if (event != null && event.stopPropagation) {
    event.stopPropagation();
  }

  else if (window.event) {
    window.event.cancelBubble = true;
  }

  //Start Hrb: Added the variable for progress bar
  var visitedPagesKey;
  var key;
  var NoOfQuesToDisplayChap;
  //End Hrb: Added the variable for progress bar

  //Start Hrb(06/16/2009): Added for preserving test questions
  //reset the flag to '1' when any question attempted
  isQuestionResponseChanged = 1;
  FillQuestionResponseArray();
  //End Hrb(06/16/2009): Added for preserving test questions


  //HRB: Added For Progress Bar 
  if (FinalExam == EXAM_POSITION_BYCOURSE)//yes
  {
    // Added to change attempted display icon in course outline Test Questions
    addToCompletedChapterList('0' + '-' + CurrentTestQuestion + 'TestQ');
    // end Added to change attempted display icon in course outline Test Questions

    key = "TestQuestion " + CurrentTestQuestion;
    visitedPagesKey = 'T' + CurrentTestQuestion;
  }
  else {

    addToCompletedChapterList(CurrentChapter + '-' + CurrentTestQuestion + 'TestQ');
    key = "Chapter" + CurrentChapter + " TestQuestion " + CurrentTestQuestion;
    visitedPagesKey = CurrentChapter + '-' + CurrentTestQuestion;
  }

  BuildVisitedPagesArray(visitedPagesKey);
  //End by HRB

  //hrb start 01-6-2009: added to check, if all check boxes are uchecked by the user
  if (document.forms[0].getElementsByTagName('input')[0].type == "checkbox") {
    noOfControls = document.forms[0].getElementsByTagName('input');
    for (var itr = 0; itr < noOfControls.length; itr++) {
      if (noOfControls[itr].checked == true)
        break;
    }
    if (itr < noOfControls.length) {
      TestQuestion[CurrentTestQuestion - 1].Answer = "x"
      //if  answer is given, mark combo item as attempted - for check box 
      fnSetQuestionAttempted();
    }
    else {
      TestQuestion[CurrentTestQuestion - 1].Answer = ""
      //if no answer is given, mark combo item as unattempted - for check box 
      var selectedOption = "optq" + CurrentTestQuestion;
      document.getElementById(selectedOption).style.color = "black";
    }

  }
  else {
    TestQuestion[CurrentTestQuestion - 1].Answer = "x";
    //if  answer is given, mark combo item as attempted - for radio button
    fnSetQuestionAttempted();
  }
  //hrb end 01-6-2009: added to check, if all check boxes are uchecked by the user

  //HRB:  Added for updating status of chapter
  updateStatus(key, INCOMPLETED_STATUS_IMG);
  //HRB:  End of added for updating status of chapter

  NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10);
  //start Hrb: Final Exam, get the questions from no of questions to display
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    for (var index = 0; index < finalExamTotalQuestions; index++) {
      if (TestQuestion[index].Answer == "") {
        //hrb start 01-6-2009: added to disable submit test, if all check boxes are uchecked by the user
        enableSubmitTest = false;
        document.getElementById("submittest").style.visibility = 'hidden';
        document.getElementById("submittest_disable").style.visibility = 'visible';
        //hrb end 01-6-2009: added to disable submit test, if all check boxes are uchecked by the user
        return;
      }
    }
  }
  else {
    //Hrb: Final Exam, get the questions from no of questions to display

    for (var index = 0; index < NoOfQuesToDisplayChap; index++) {
      if (TestQuestion[index].Answer == "") {
        //hrb start 01-6-2009: added to disable submit test, if all check boxes are uchecked by the user
        enableSubmitTest = false;
        document.getElementById("submittest").style.visibility = 'hidden';
        document.getElementById("submittest_disable").style.visibility = 'visible';
        //hrb end 01-6-2009: added to disable submit test, if all check boxes are uchecked by the user
        return;
      }
    }
  }
  //end Hrb: Final Exam, get the questions from no of questions to display
  if (mode == "retake") {
    if (getTotalQuestionCount() == NoOfQuestionAttempted()) {
      enableSubmitTest = true;
    }
    else {
      enableSubmitTest = false;
    }
  }
  else {
    enableSubmitTest = true;
  }
  if (enableSubmitTest) {
    document.getElementById("nsubmittest").style.visibility = 'visible';
    document.getElementById("nsubmittest_disable").style.visibility = 'hidden';
    document.getElementById("submittest").style.visibility = 'visible';
    document.getElementById("submittest_disable").style.visibility = 'hidden';
  }

  if ((mode == "study" || mode == "test") && CurrentTestQuestion == NoOfQuesToDisplayChap && FinalExam == EXAM_POSITION_BYCHAPTER) {
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";

    document.getElementById("btnNext").style.display = "none";
  }
  //hrb:end of changes for next and prev button 

  if (mode == "review" || mode == "retake") {
    EnableDisableSubmitButton();
  }
}

function SaveState() {
  //hrb start: donot save state if course is expired //HRB: Added condition if error occurred in retrieving course progress for AICC compliant courses.
  if (isExpired || (g_complianceType == "AICC" && typeof (isHACPError) != "undefined" && isHACPError))
    return;
  //hrb end: donot save state if course is expired 

  //hrb start: save the selected bandwidth
  document.progress.SelectedBandwidth(selectedBandwidth);
  //hrb end: restore the selected bandwidth

  // hrb start : added to save the state of test and congratulation pages
  if (testDescriptionStr == "")
    document.progress.testDescription("");
  else
    document.progress.testDescription(testDescriptionStr);

  if (passfailDescriptionStr == "")
    document.progress.passfailDescription("");
  else
    document.progress.passfailDescription(passfailDescriptionStr);

  document.progress.passedChapterDesc(passedChapterDescStr);
  //hrb: save the mode and currentprogress in xml
  document.progress.Mode(mode);
  //document.progress.CompletedQuestions(getCompletedQuestionCount()); 
  document.progress.ChapterTestScore(gbl_CurrentTestScore);
  //document.progress.ChapterTestAttempt(noOfattempts);

  document.progress.TestQuestionArray(gbl_TestQuestionArray);

  // hrb end : added to save the state of test and congratulation pages
  parent.parent.frames.frame_2.CurrentChapter = CurrentChapter;
  parent.parent.frames.frame_2.TestChapter = TestChapter;
  parent.parent.frames.frame_2.CurrentStudyPage = CurrentStudyPage;
  parent.parent.frames.frame_2.CurrentRemedialPage = CurrentRemedialPage;
  parent.parent.frames.frame_2.CurrentTestQuestion = CurrentTestQuestion;
  parent.parent.frames.frame_2.mode = mode;
  parent.parent.frames.frame_2.QuestionNumbers = QuestionNumbers;
  // hrb start : added to save the state of remedial pages

  //hrb:save the state of remedial pages for micromash courses
  //hrb end : commented since remedial pages need not to be stored

  StatusStr = "";

  //start Hrb: Final Exam, get the questions from no of questions to display
  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    var NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10);

    for (var index = 0; index < NoOfQuesToDisplayChap; index++)
      parent.parent.frames.frame_2.TestQuestion[index] = TestQuestion[index];

    //hrb start : Added to save the no of attempts
    //NoOfAttemptsChapterTestStr = noOfAttemptedTests.toString();
    // Made changes for suspend data. Made it similar to final exam;
    NoOfAttemptsChapterTestStr = noOfattempts.toString();
    document.progress.NoOfAttemptsChapterTest(NoOfAttemptsChapterTestStr);
    document.progress.ChapterTestAttemptMap(noOfAttemptedTests.toString());
    //hrb end : Added to save the no of attempts
  }
  else {
    for (var index = 0; index < finalExamTotalQuestions; index++)
      parent.parent.frames.frame_2.TestQuestion[index] = TestQuestion[index];

    document.progress.finalExamStatus(finalExamStatus);
    //hrb start : Added to save the no of attempts
    NoOfAttemptsChapterTestStr = noOfattempts.toString();
    document.progress.NoOfAttemptsChapterTest(NoOfAttemptsChapterTestStr);
    //hrb end : Added to save the no of attempts      
  }
  //ens Hrb: Final Exam, get the questions from no of questions to display  

  //hrb start:save the remedial page array

  //hrb end:save the remedial page array
  for (var index = 0; index < TotalChapters; index++)
    parent.parent.frames.frame_2.Status[index] = Status[index];

  StatusStr = Status.toString();
  document.progress.Status(StatusStr);

  //HRB: Added For Progress Bar 
  if (executedCommand != "preview")
    document.progress.VisitedPages(VisitedPages);

  //End by HRB
  gbl_bookmarkStr = "";
  for (itr = 0; itr < bookmarkArray.length; itr++) {
    if (bookmarkArray[itr]) {
      gbl_bookmarkStr = gbl_bookmarkStr + bookmarkArray[itr].bkTitle + '<fs>';
      gbl_bookmarkStr = gbl_bookmarkStr + bookmarkArray[itr].bkDescription + '<fs>';
      gbl_bookmarkStr = gbl_bookmarkStr + bookmarkArray[itr].bkLink + '<ts>';
    }

  }
  document.progress.bookmarkStr(gbl_bookmarkStr);

  //HRB: Added for saving chapter status
  document.progress.CompletedChapterCodeStr(CompletedChapterCodeStr);
  document.progress.InCompletedChapterCodeStr(InCompletedChapterCodeStr);
  //HRB: End of Added for saving chapter status

  //Start Hrb(06/16/2009): Added for preserving test questions
  fnSaveTestQuestionStudyQuestionResponse();
  document.progress.QuestionResponseChanged(isQuestionResponseChanged);
  document.progress.ChapterTestAttemptChanged(isChapterTestAttemptChanged);
  //End Hrb(06/16/2009): Added for preserving test questions
  document.progress.TotalChapters(TotalChapters);
  document.progress.Update();
  //hrb: end added to store the no of attempts for test 

}

function RestoreState(chapter) {
  try {
    addVersionInfo(versionInfo); //HRB: Added to display version number in Help Menu.

    //    if (FinalExam == EXAM_POSITION_BYCHAPTER) {
   // document.getElementById("submittest").innerHTML = "<img src ='common/images/submitanswers_on.gif' alt='" + ALT_TEST_SUBMITANSWERS + "'>";
   // document.getElementById("submittest_disable").innerHTML = "<img src ='common/images/submitanswers_off.gif'>";
    //    }
    // code for setting the content div dimensions for Firefox
    if (!isIE) {
      var objContent = document.getElementById(currentDivId);
      objContent.style.width = 1014;
      if (isEbook == true)
        objContent.style.height = 545;
      else
        objContent.style.height = 647;
    }

    if (document.progress.OnlineUser) {
      loadPage();

      var sub = getSubscription();

      if (sub != null) {
        //HRB: Added to check if course is Help course or not.Setting current study page to 0.
        isHelpCourse = sub.isHelpCourse;
        if (isHelpCourse) {
          document.progress.Bookmark(0);
        }

        g_isOLP = sub.offlinePlayer;
        sub.CurrentDocument = parent.frames.frame_a.document;
        //start Hrb(05/25/2009): Added for course previewer to get the lesson_mode from LMS for Online player
        lessonMode = sub.lesson_mode;
        lessonMode = lessonMode.toUpperCase();
        isExpired = sub.isExpired;
        expiredDate = sub.expiredDate;
        //End Hrb(05/25/2009): Added for course previewer to get the lesson_mode from LMS for Online player

        //Start Hrb(06/16/2009): Added for preserving test questions on activity threshold
        activityThresholdValue = sub.ActivitySubmissionThreshold;
        //End Hrb(06/16/2009): Added for preserving test questions on activity threshold

        is508User = sub.is508User; //HRB: Added to check if user is 508 or non-508

        //Start Hrb(07/16/2009): Added for certificate, feedback and shopping cart URI
        if (!g_isOLP) {
          gbl_CourseCertificateURI = sub.courseCertificateURI;

          if (lessonMode == LESSON_PREVIEWER_MODE)
            gbl_CourseShoppingCartURI = sub.courseShoppingCartURI;
          else if (lessonMode == LESSON_PILOTTESTING_MODE)
            gbl_CourseFeedbackURI = sub.courseFeedbackURI;

        }
        else {
          /*Start Hrb(08/23/09): Get the course ID if course is played in OLP, this is done as to show the certificate link Iin OLP*/
          gbl_CourseId = sub.courseId;

          //Start HRB: Added for mLearning courses.
          gbl_CourseCertificateURI = sub.courseCertificateURI;
          if (lessonMode == LESSON_PILOTTESTING_MODE)
            gbl_CourseFeedbackURI = sub.courseFeedbackURI;

          //End HRB: Added for mLearning courses.
        }
        //End Hrb(07/16/2009): Added for certificate, feedback and shopping cart URI

        //hrb start: Added to redirect to welcome page, if course is expired

        if (isExpired) {

          lesson_status = getDetails("LESSON_STATUS");
          lesson_status = lesson_status.toUpperCase();
          courseExpired();
          return;
        }
        //hrb end: Added to redirect to welcome page, if course is expired

        ebookCourseVideoURI = sub.ebookCourseVideoURI;
      }

    }
    //start Hrb (08/31/2009): Save the data after activityThreshold time(in ms) interval elapse
    if (activityThresholdValue != 0 && activityThresholdValue != -1)  //HRB: Added -1 check for the mLearning Help Course.
      saveStatusFunctionTimerPointer = setInterval("SaveProgressDataWithInterval()", activityThresholdValue);
    //end Hrb (08/31/2009): Save the data after activityThreshold time(in ms) interval elapse

    //hrb start: restore the selected bandwidth 
    // selectedBandwidth = document.progress.SelectedBandwidth();
    //hrb send: restore the selected bandwidth

    if (!isIE) {
      var divpagetitletemp = document.getElementById('divPageTitle');
      divpagetitletemp.style.border = 'none';
      divpagetitletemp.style.marginTop = 0;
      var searchTexttemp = document.getElementById('searchText');
      searchTexttemp.style.border = 'none';
      searchTexttemp.style.marginTop = 0;
      //searchTexttemp.style.marginLeft=0;
    }

    //hrb: added to restore the current progress
    if (FinalExam == EXAM_POSITION_BYCHAPTER) {
      //gbl_completedQues = document.progress.CompletedQuestions();
      gbl_CurrentTestScore = document.progress.ChapterTestScore();
    }

    gbl_bookmarkStr = document.progress.bookmarkStr();

    gbl_TestQuestionArray = document.progress.TestQuestionArray().split(',');

    if (gbl_bookmarkStr.length > 0) {
      gbl_bookmarkStr = gbl_bookmarkStr.split('<ts>');
    }
    for (itr = 0; itr < gbl_bookmarkStr.length - 1; itr++) {
      tmpbkArray = gbl_bookmarkStr[itr].split('<fs>');

      for (index = 0; index < tmpbkArray.length; index++) {
        bookmarkArray[itr] = new setBookMark(tmpbkArray[0], tmpbkArray[1], tmpbkArray[2]);
      }
    }

    gbl_bkCounter = bookmarkArray.length;
    //Add bookmork to bookmark div for iphone or ipad @sha
    createBookmarkli(bookmarkArray);



    //HRB: Added For Progress Bar and getting the course title
    var strVisitedPages = '';
    var tempArrayVisitedPages;
    if (document.getElementById('coursetitle') != null) {
      courseTitle = document.getElementById('coursetitle').innerHTML;

      AdjustCourseTitle(courseTitle)
    }
    //End by HRB

    DoResize(this);
    mode = parent.parent.frames.frame_2.mode;
    //hrb: added to restore the mode
    var modeFromProgress = document.progress.Mode();
    if (modeFromProgress != null && modeFromProgress != 'undefined' && modeFromProgress != '')
      mode = modeFromProgress;
    CurrentStudyPage = document.progress.Bookmark();

    if (isEbookEthicCourse && CurrentStudyPage.indexOf("~") != -1) {  //If ethic course then current study page will be in the form of chapter_number~page_number except for the first 4 pages in the course
      var arrStudyPage = CurrentStudyPage.split("~");
      if (arrStudyPage[0] > 1) {
        CurrentStudyPage = parseInt(CategoryList[arrStudyPage[0] - 1].LastQuestion) + parseInt(arrStudyPage[1]) - 3;
      }
      else {
        CurrentStudyPage = arrStudyPage[1];
      }
    }

    if (CurrentStudyPage > CategoryList[CategoryList.length - 1].LastQuestion)
      CurrentStudyPage = 0;

    //HRB: Added For Progress Bar 
    if (executedCommand == "preview") {
      VisitedPages.length = 0;
    }
    else {
      strVisitedPages = document.progress.VisitedPages();
      tempArrayVisitedPages = new Array()

      if (strVisitedPages != '') {
        isStrVisitedPagesRestored = true;
        tempArrayVisitedPages = strVisitedPages.split(",");

        if (tempArrayVisitedPages.length > 0) {
          VisitedPages = tempArrayVisitedPages;
        }
      }
    }
    //End by HRB

    CurrentTestQuestion = parent.parent.frames.frame_2.CurrentTestQuestion
    CurrentRemedialPage = parent.parent.frames.frame_2.CurrentRemedialPage
    CurrentChapter = chapter
    TestChapter = parent.parent.frames.frame_2.TestChapter

    //start Hrb: Final Exam, Get the total no. final exam questions
    GetTotalNumberOfQuestionToDisplay();
    //end Hrb: Final Exam, Get the total no. final exam questions

    //start Hrb(05/25/2009): Added for course previewer
    SetOutlinePanelAttributes();
    //End Hrb(05/25/2009): Added for course previewer

    //start Hrb: Final Exam, get the questions from no of questions to display
    if (FinalExam == EXAM_POSITION_BYCHAPTER) {
      var NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1], 10)

      for (var cnt = 0; cnt < NoOfQuesToDisplayChap; cnt++)
        TestQuestion[cnt] = parent.parent.frames.frame_2.TestQuestion[cnt];

      //hrb start : Added to save the no of attempts
      NoOfAttemptsChapterTestStr = document.progress.ChapterTestAttemptMap();

      if (NoOfAttemptsChapterTestStr.length == 0) {
        for (index = 0; index < TotalChapters; index++)
          noOfAttemptedTests[index] = 0;
      }
      else {
        noOfAttemptedTests = NoOfAttemptsChapterTestStr.split(',');
      }

      noOfattempts = document.progress.NoOfAttemptsChapterTest();
      //hrb end : Added to save the no of attempts
    }
    else {
      //hrb start : Added to save the no of attempts
      NoOfAttemptsChapterTestStr = document.progress.NoOfAttemptsChapterTest();
      if (NoOfAttemptsChapterTestStr.length == 0)
        noOfattempts = 0;
      else
        noOfattempts = NoOfAttemptsChapterTestStr;
      //hrb end : Added to save the no of attempts

      for (var index = 0; index < finalExamTotalQuestions; index++)
        TestQuestion[index] = parent.parent.frames.frame_2.TestQuestion[index]

      finalExamStatus = document.progress.finalExamStatus();

      if (finalExamStatus == "")
        finalExamStatus = "-1"

      UpdateFinalExamStatus(finalExamStatus);
    }
    //End Hrb: Final Exam, get the questions from no of questions to display

    //hrb:added to enable certificate button if course is completed
    //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
    //condition is add for to check certificatebuttonL status.
    if (isCourseCompleted() && lessonMode != LESSON_PILOTTESTING_MODE) {
      document.getElementById('certificateDivEle').style.display = 'block';
    }
    //hrb:end of added to enable certificate button if course is completed
    for (var index = 0; index < parent.parent.frames.frame_2.RemedialArray.length; index++)
      RemedialArray[index] = parent.parent.frames.frame_2.RemedialArray[index];

    for (var index = 0; index < TotalChapters; index++) {
      if ((document.progress.ChaptersPassed() & Math.pow(2, index + 1)) != 0) {
        Status[index] = 1;
      }
      else {
        Status[index] = 0;
      }

    }
    QuestionNumbers = parent.parent.frames.frame_2.QuestionNumbers;
    // hrb start : added to restore the state of remedial pages
    // hrb end : added to restore the state of remedial pages

    //HRB: Added For Progress Bar 
    GetTotalNumberOfPages();

    //Refresh the progress bar
    ShowPercentageOfCourseCompletion();
    //End by HRB

    //HRB: Added for retrieving outline chapter status
    VisitedPageNumStr = document.progress.VisitedPages();

    if (VisitedPageNumStr != "")
      VisitedPageNumStr = VisitedPageNumStr + ",";

    CompletedChapterCodeStr = document.progress.CompletedChapterCodeStr();
    InCompletedChapterCodeStr = document.progress.InCompletedChapterCodeStr();
    loadOutlineChapterStatus();
    //HRB: End of Added for retrieving outline chapter status

    //Start Hrb(06/16/2009): Added for preserving test questions
    testDescriptionStr = document.progress.testDescription();

    var blnIsTestQuestionBookmarked = false;

    if (testDescriptionStr.toString(10).indexOf("~") != -1) {
      blnIsTestQuestionBookmarked = true;
      //get the  chapter q no.
      var tempArray = testDescriptionStr.split("~");

      //Get the chapter no. and TQ no.
      gbl_QuestionChapter = tempArray[0];
      gbl_QuestionNumber = tempArray[1];
      gbl_QuestionNumberSeq = tempArray[2];

      CurrentChapter = gbl_QuestionChapter;
      TestInit();
    }


    //initialize the final array values with blank
    arrChapterQuestion = new Array(TotalChapters);

    arrChapterQuestionResponse = new Array(TotalChapters);
    arrStudyQuestionWithResponse = new Array(TotalChapters);
    arrChaterTestStartAttempt = new Array(TotalChapters);

    if (FinalExam == EXAM_POSITION_BYCHAPTER) {
      arrChapterTestAttemptStatus = new Array(TotalChapters);
    }
    else {
      arrChapterTestAttemptStatus = new Array(1);
      arrChapterTestAttemptStatus[0] = "";
    }

    for (var indexChap = 0; indexChap < TotalChapters; indexChap++) {
      if (FinalExam == EXAM_POSITION_BYCHAPTER) {
        arrChapterQuestion[indexChap] = new Array(NoOfQuestionsToDisplayArray[indexChap]);
        arrChapterQuestionResponse[indexChap] = new Array(NoOfQuestionsToDisplayArray[indexChap]);
        arrChapterTestAttemptStatus[indexChap] = "";
      }
      else if (FinalExam == EXAM_POSITION_BYCOURSE) {
        arrChapterQuestion[indexChap] = new Array(finalExamTotalQuestions);
        arrChapterQuestionResponse[indexChap] = new Array(finalExamTotalQuestions);
      }

      arrStudyQuestionWithResponse[indexChap] = new Array();

      arrChaterTestStartAttempt[indexChap] = 1;

      var l_ChapterQuestionLength = parseInt(arrChapterQuestion[indexChap].length, 10);
      for (var indexQ = 0; indexQ < l_ChapterQuestionLength; indexQ++) {
        arrChapterQuestion[indexChap][indexQ] = "";
        arrChapterQuestionResponse[indexChap][indexQ] = "";
      }
    }

    strChapterTestQuestionResponse = document.progress.QuestionResponse();

    tempArrayChapterTest = new Array();
    var counter;

    if (strChapterTestQuestionResponse != '') {
      tempArrayChapterTest = strChapterTestQuestionResponse.split(",");

      for (var indexChap = 0; indexChap < tempArrayChapterTest.length; indexChap++) {
        counter = 0;

        if (tempArrayChapterTest[indexChap] != "") {
          var tempArray = tempArrayChapterTest[indexChap].split("$");

          for (var indexQ = 0; indexQ < tempArray.length; indexQ++) {
            var tempTQ = new Array()

            tempTQ = tempArray[indexQ].split("~");

            //check if its study question/Test Question
            if (tempTQ.length > 2) {
              var sequence;
              var status;

              sequence = parseInt(tempTQ[3].split("|")[0]) - 1;

              //add the  respective elements
              arrChapterQuestion[indexChap][sequence] = tempTQ[2];
              arrChapterQuestionResponse[indexChap][sequence] = tempTQ[3].split("|")[1];

              if (blnIsTestQuestionBookmarked && (gbl_QuestionChapter == (parseInt(indexChap) + 1))) {
                status = arrChapterQuestionResponse[indexChap][sequence].toString().charAt(0);
                TestQuestion[sequence].Answer = arrChapterQuestionResponse[indexChap][sequence].toString().substr(1);

                if (status == "C")
                  TestQuestion[sequence].Correct = true;
                else if (status == "I")
                  TestQuestion[sequence].Correct = false;
              }

              //fill start attempt array
              if (FinalExam == EXAM_POSITION_BYCOURSE)
                arrChaterTestStartAttempt[0] = tempTQ[1];
              else if (FinalExam == EXAM_POSITION_BYCHAPTER)
                arrChaterTestStartAttempt[indexChap] = tempTQ[1];
            }
            else if (tempTQ.length = 2) //4~s123|CA
            {
              arrStudyQuestionWithResponse[indexChap][counter] = tempArray[indexQ];
              counter++;

              var chapter = parseInt(indexChap, 10) + 1;
              var page = tempTQ[1].split("|")[0].substr(1);
              var status = tempArray[indexQ].split("|")[1].charAt(0);

              //fill the graded questions array to calculate in final score
              if (totalGradedQuestions > 0) {
                var index = fnSearchGradedQuestion(chapter, page);

                if (status == "C") {
                  GradedQuestions[index].Correct = "yes"
                }
                else if (status == "I") {

                  GradedQuestions[index].Correct = "no"
                }

              }
            }
          }
        }
      }

    }
    else {
      for (var indexChap = 1; indexChap < TotalChapters; indexChap++)
        strChapterTestQuestionResponse = strChapterTestQuestionResponse + ",";
    }

    tempTestAttemptStatus = new Array();

    strChapterTestAttemptStatus = document.progress.ChapterTestAttemptStatus();

    if (strChapterTestAttemptStatus != '') {
      if (FinalExam == EXAM_POSITION_BYCOURSE)
        arrChapterTestAttemptStatus[0] = strChapterTestAttemptStatus;
      else {
        /*tempTestAttemptStatus = strChapterTestAttemptStatus.split(",");
  
        if (tempArrayChapterTest.length > 0)
        arrChapterTestAttemptStatus = tempTestAttemptStatus;*/
        arrChapterTestAttemptStatus[0] = strChapterTestAttemptStatus;
        var lastAttempt = arrChapterTestAttemptStatus[0].split("~")[1];
        for (var indexChap = 0; indexChap < TotalChapters; indexChap++) {
          if (noOfattempts == CHAPTER_TEST_PASSED) {
            arrChaterTestStartAttempt[indexChap] = parseInt(lastAttempt);
          } else {
            arrChaterTestStartAttempt[indexChap] = parseInt(lastAttempt) + 1;
          }
        }
      }
    }

    else {
      if (FinalExam == EXAM_POSITION_BYCHAPTER) {
        for (var indexChap = 1; indexChap < TotalChapters; indexChap++)
          strChapterTestAttemptStatus = strChapterTestAttemptStatus + ",";
      }
      else
        strChapterTestAttemptStatus = "";
    }

    //ResetChapterQuestionResponse();
    //End Hrb(06/16/2009): Added for preserving test questions

    //hrb: changed the parameter to CurrentChapter for remedial pages
    ChapterInit(CurrentChapter);
    // hrb start : added to restore the state of test and congratulation pages  

    passfailDescriptionStr = document.progress.passfailDescription();
    passedChapterDescStr = document.progress.passedChapterDesc();

    var mainChapterList = document.getElementById('courseOutline').getElementsByClassName('mainchapter')
    for (var cnt = 0; cnt < mainChapterList.length; ++cnt) {
      if (mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight > 22) {

        var adjust = (mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight - 15) / 2;
        mainChapterList[cnt].getElementsByTagName('div')[1].style.top = adjust;
        mainChapterList[cnt].getElementsByTagName('div')[3].style.top = adjust - 1;

      }
      if (isFF) {
        mainChapterList[cnt].getElementsByTagName('div')[0].style.height = mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight + 18;
      }
      else {
        var adjust = (mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight - 15) / 2;
        mainChapterList[cnt].getElementsByTagName('div')[0].style.minHeight = mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight + 18;
      }
    }

    //handling the height of the outline elements in case of firefox
    if (isFF) {
      var categoryElements = document.getElementById('forscroll').getElementsByClassName('outlinecategoryRowTemplate_template');
      for (var cnt = 0; cnt < categoryElements.length; ++cnt) {
        categoryElements[cnt].style.display = 'block';
        categoryElements[cnt].style.marginTop = 20;
      }
      var subcategoryElements = document.getElementById('forscroll').getElementsByClassName('outlinesubCategoryRowTemplate_template');
      for (var cnt = 0; cnt < subcategoryElements.length; ++cnt) {
        subcategoryElements[cnt].style.display = 'block';
        subcategoryElements[cnt].style.marginTop = 20;
      }
    }

    if (FinalExam == EXAM_POSITION_BYCOURSE)
      document.getElementById('OutlineTestBack').style.display = 'none';

    //Added to display modal if course is launched directly in the Portrait view
    if (typeof (parent.parent.parent.detectIPadOrientation) != 'undefined')
      setTimeout(function () { parent.parent.parent.detectIPadOrientation(); }, '500');

    if (testDescriptionStr != "") {
      //Start Hrb(06/16/2009): Added for preserving test questions
      if (blnIsTestQuestionBookmarked) {
        //hrb:set bookmarkFlag to false - to hide Add BookMarks on test pages
        bookmarkFlag = false;

        CurrentChapter = gbl_QuestionChapter;
        var ch = "0" + CurrentChapter;

        //mode = "test";
        CurrentTestQuestion = 0;

        if (FinalExam == EXAM_POSITION_BYCHAPTER) {
          FillTestQuestionsArray(CurrentChapter);

          GenerateQuestionComboBox();

          ShowTestQuestion(parseInt(gbl_QuestionNumberSeq));
          if (mode == "review" || mode == "retake")
            EnableDisableQuestionSelectionDropdown(false);
        }
        if (FinalExam == EXAM_POSITION_BYCOURSE) {
          GenerateQuestions();

          GenerateQuestionComboBox();

          ShowFinalExamTestQuestion(parseInt(gbl_QuestionNumberSeq));
          CurrentChapter = TotalChapters;
          if (mode == "review" || mode == "retake")
            EnableDisableQuestionSelectionDropdown(false);

        }

        document.getElementById("questionControlPanel").style.visibility = "hidden";
        fnLoadAttemptedQuestStyle();
      }
      else {
        //End Hrb(06/16/2009): Added for preserving test questions

        tmpArray = testDescriptionStr.split(',');
        CurrentChapter = tmpArray[0];
        tmpStr = tmpArray[1];

        if ((tmpStr == "test_page") || (tmpStr == "test_page_fail"))
          fnShowChapterTestDescrPage();
        else if (tmpStr == "congratslast_page") {
          document.getElementById('showQuestionNumber').style.visibility = 'hidden';
          if (FinalExam == EXAM_POSITION_BYCOURSE) {
            document.getElementById("divPageTitle").innerHTML = "&nbsp;" + FINAL_EXAM + TEST + ", " + COMPLETED;
          }
          else
            document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + " " + TEST + ", " + COMPLETED;

          passfailDescriptionStrArray = passfailDescriptionStr.split('<sp>');
          if (passfailDescriptionStrArray.length == 0) {
            gbl_CurrentTestScore = passfailDescriptionStr;
            document.progress.passfailDescription("");
          }
          else {
            tmpArray = passfailDescriptionStr.split('<sp>');
            gbl_CurrentTestScore = tmpArray[0];
            passedChapters = tmpArray[1];
            tempPassingDateStr = tmpArray[2];
          }

          mode = "nextchapter";
          //hrb start : Added for bookmark menu
          bookmarkFlag = false;
          //hrb end : Added for bookmark menu
          //hrb start 8/6/2009:check added to disable next button for piolt testing on last congrates page
          if (lessonMode == LESSON_PILOTTESTING_MODE) {
            document.getElementById("NextButton").style.display = "none";
            document.getElementById("NextButtonDisabled").style.display = "";

            document.getElementById("btnNext").style.display = "none";
          }
          else {
            document.getElementById("NextButton").style.display = "";
            document.getElementById("NextButtonDisabled").style.display = "none";
            document.getElementById("btnNext").style.display = "";
          }
          //hrb end 8/6/2009:check added to disable next button for piolt testing on last congrates page

          //Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
          isCongratsLastPageSet = true;
          isFeedbackURLResponseSet = true;
          //End HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
          parent.frames.frame_b.document.location = "congratslast_page.htm";

        }
        else if (tmpStr == "congrats_page") {
          tmpArray = passfailDescriptionStr.split('<sp>')

          gbl_CurrentTestScore = tmpArray[0]
          passedChapters = tmpArray[1]
          tempPassingDateStr = tmpArray[2]
          document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + ", " + COMPLETED;

          //hrb start : Added for bookmark menu
          bookmarkFlag = false;
          //hrb end : Added for bookmark menu        
          parent.frames.frame_b.document.location = "congrats_page.htm"

        }
        else if (tmpStr == 'fail_page') {
          document.getElementById('showQuestionNumber').style.visibility = "hidden";
          passfailDescriptionStr = document.progress.passfailDescription();

          if (FinalExam != EXAM_POSITION_BYCOURSE) {
            document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + ", " + TEST_FAILED;
            mode = "nextchapter";
          }
          else {
            document.getElementById("divPageTitle").innerHTML = "&nbsp;" + FINAL_EXAM + ", " + FAILED;
            gbl_CurrentTestScore = passfailDescriptionStr;
            document.getElementById("NextButton").style.display = "none";
            document.getElementById("NextButtonDisabled").style.display = "";

            document.getElementById("btnNext").style.display = "none";
            CurrentChapter = TotalChapters;
            mode = "nextchapter";
          }
          //hrb start : Added for bookmark menu
          bookmarkFlag = false;
          //hrb end : Added for bookmark menu 
          parent.frames.frame_b.document.location = "fail_page.htm";

        }
        //hrb: added to restore confirmation and test progress page
        else if (tmpStr == "confirmation_page") {
          document.getElementById('showQuestionNumber').style.visibility = 'hidden';
          parent.frames.frame_b.document.location = "confirmation_page.htm";
        }
        else if (tmpStr == "test_progress") {
          document.getElementById('showQuestionNumber').style.visibility = 'hidden';
          parent.frames.frame_b.document.location = "test_progress.htm";
          document.getElementById('btnNext').style.display = 'none';
        }

      }
      return;
    }

    // hrb end : added to restore the state of test and congratulation pages  
    switch (mode) {
      case "study":
        {
          ShowStudyPage(CurrentStudyPage);
        }
        break;
      case "test":
        {
          //start Hrb:Final Exam added only else part and if statement
          if (FinalExam == EXAM_POSITION_BYCHAPTER)
            St(CurrentChapter);
          else
            ShowFinalExamTestQuestion(1);
          //end Hrb:Final Exam added only else part and if statement
        }
        break;
      case "nextchapter":
        {
          mode = "test";
          document.getElementById(currentDivId).innerHTML = "";

          document.getElementById("controlpanel").style.visibility = 'visible';
          //hrb: Added chapter test question combo box
          document.getElementById("questionControlPanel").style.visibility = 'hidden';
          //hrb: End of Added chapter test question combo box

          //hrb: Added chapter test question number
          document.getElementById("showQuestionNumber").style.visibility = 'hidden';
          //hrb: End of Added chapter test question number
          enableSubmitTest = false;
          document.getElementById("submittest_disable").style.visibility = 'visible';
          document.getElementById("submittest").style.visibility = 'hidden';

          document.getElementById("subchaptertitle").innerHTML = "";
          //hrb:changes for next and prev button

          document.getElementById("PrevButtonDisabled").style.display = "";
          document.getElementById("NextButtonDisabled").style.display = "none";
          //hrb:end of changes for next and prev button
          SubmitTest();
        }
        break;
      case "remedial":
        {
          // hrb start : added to restore the state of remedial
          RemedialArrayStr = document.progress.RemedialArray();
          RemedialArray = RemedialArrayStr.split(',');

          StatusStr = document.progress.Status();
          Status = StatusStr.split(',');

          // hrb end : added to restore the state of remedial
          if (CurrentRemedialPage == -1) {
            mode = "test";
            document.getElementById(currentDivId).innerHTML = "";

            document.getElementById("controlpanel").style.visibility = 'visible';

            //hrb: Added chapter test question combo box
            document.getElementById("questionControlPanel").style.visibility = 'hidden';
            //hrb: End of Added chapter test question combo box

            //hrb: Added chapter test question number
            document.getElementById("showQuestionNumber").style.visibility = 'hidden';
            //hrb: End of Added chapter test question number
            enableSubmitTest = false;
            document.getElementById("submittest_disable").style.visibility = 'visible';
            document.getElementById("submittest").style.visibility = 'hidden';

            document.getElementById("subchaptertitle").innerHTML = ""
            //hrb:changes for next and prev button
            // PrevButton.innerHTML = "<img src ='common/images/test_prevgray.gif' border=0>"
            //NextButton.innerHTML = ""
            document.getElementById("PrevButton").style.display = "none";
            document.getElementById("NextButton").style.display = "";
            document.getElementById("PrevButtonDisabled").style.display = "";
            document.getElementById("NextButtonDisabled").style.display = "none";
            document.getElementById("btnNext").style.display = "";
            document.getElementById("btnBack").style.display = "none";
            //hrb:end of changes for next and prev button
            SubmitTest()
          }
          else {
            ShowStudyPage(RemedialArray[CurrentRemedialPage]);
          }
        }
        break;
    }
  }
  catch (err) { }


} // end RestoreState()

function Certificate() {
  if (CertificateWin != null)
    CertificateWin.close();

  var sFeatures = "left=50, top=20, width=700, height=420, directories=no, location=no, menubar=yes, resizable=yes, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";

  CertificateWin = window.open("document_of_progress.htm", "_blank", sFeatures);
}

function displayDocumentOfProgress() {
  if (typeof (CertificateWin.document) != 'undefined' && CertificateWin.document != 'undefined' && CertificateWin.document != null) {
    var sub = null;
    if (g_isOLP) {
      sub = getSubscription();
      if (sub != null && sub.userName != "") {
        CertificateWin.document.getElementById("document_of_progress_student").innerHTML = '<div id="congrats_page_student" style="font-family:Verdana;font-size:26px;Color:#000066">' + sub.userName + '</div>';
      }
    }
    if (passedChapterDescStr == "") {
      passedChapters = "0 " + OF + " " + TotalChapters + " " + CHAPTERS;

      if (CertificateWin.document.getElementById("chapter"))
        CertificateWin.document.getElementById("chapter").innerHTML = "   " + passedChapters;
      if (CertificateWin.document.getElementById("passingdate")) {
        var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        var today = new Date();
        if (tempPassingDateStr.length == 0)
          tempPassingDateStr = months[today.getMonth()] + "  " + today.getDate() + ",  " + today.getFullYear();
        CertificateWin.document.getElementById("passingdate").innerHTML = tempPassingDateStr;
      }
    }
    else {
      CertificateWin.document.getElementById("div1").style.display = "";
      tmpArray = passedChapterDescStr.split('<sp>');
      gbl_CurrentTestScore = tmpArray[0];
      passedChapters = tmpArray[1];
      tempPassingDateStr = tmpArray[2];

      if (FinalExam == EXAM_POSITION_BYCOURSE) {
        passedChapters = 'the Exam';
        CertificateWin.document.getElementById("div2").style.visibility = "hidden";
      }
      CertificateWin.document.getElementById("passpercent").innerHTML = "" + gbl_CurrentTestScore;
      if (CertificateWin.document.getElementById("chapter"))
        CertificateWin.document.getElementById("chapter").innerHTML = "   " + passedChapters;
      if (CertificateWin.document.getElementById("course"))
        CertificateWin.document.getElementById("course").innerHTML = document.getElementById('coursetitle').innerHTML;

      CertificateWin.document.getElementById("passingdate").innerHTML = tempPassingDateStr;

    }

    if (!isIE) {
      var objBoxDiv = CertificateWin.document.getElementById("boxdiv");
      if (CertificateWin.document.getElementById("boxdiv")) {
        CertificateWin.document.getElementById("boxdiv").style.width = 591;
        CertificateWin.document.getElementById("boxdiv").style.height = 204;
      }
    }
  }
}

function Register() {
  var Registered = false;

  if (!Registered)
    document.location = "regist.htm";
}



function LoadContent() {

  //clearing the video and interactivity elements.
  if (document.getElementById('interactivityForEbook'))
    document.getElementById('interactivityForEbook').src = '';

  if (document.getElementById('videoForEbook'))
    document.getElementById('videoForEbook').display = 'none';

  var myString = parent.frames.frame_b.location.href;
  var mySplitResult = myString.split("/");
  var lastWord = mySplitResult[mySplitResult.length - 1]
  var lastWordSplit = lastWord.split(".");
  if (document.getElementById("subChapterHeading")) {
    document.getElementById("subChapterHeading").style.cursor = 'auto';
  }
  if (document.getElementById("bkDescription").innerHTML.toLowerCase() == 'title' && lastWordSplit[lastWordSplit.length - 2] == '0000') {
    if ($('#catalog').attr('class') == "homebutton") {
      $('#catalog').removeClass('homebutton');
      $('#catalog').addClass('titlehomebutton');

    }
    document.getElementById('footer').style.display = 'none';
    document.getElementById('bookmarkDiv').parentElement.style.display = 'none';

    if (navigator.userAgent.match(/iPad/i) == null) {
      parent.frames.frame_b.document.getElementById('titlepageimage').style.height = 582;
    }

  }
  else {
    if ($('#catalog').attr('class') == "titlehomebutton") {
      $('#catalog').removeClass('titlehomebutton');
      $('#catalog').addClass('homebutton');

    }

    document.getElementById('footer').style.display = '';
    document.getElementById('bookmarkDiv').parentElement.style.display = '';
  }

  if (glossaryCall || authorBioCall) {
    glossaryCall = false;
    authorBioCall = false;
    closePopUp();
  }

  if (isTranscriptOpen) {
    document.getElementById('TranscriptpopupForEbook').style.display = 'none';
    isTranscriptOpen = false;
  }

  try {

    /*    if (isNavigationNo != null && isNavigationNo != 'undefined') {
    isNavigationNo = true;
    }
    */
    //Start Hrb(06/16/2009): Added for preserving test questions
    if (parent.frames.frame_b.document.getElementById("desired-product-behavior") != null) {
      if (parent.frames.frame_b.document.getElementById("desired-product-behavior").value == "study") {
        /*if( navigator.userAgent.match(/iPad/i) == null ) {
        for(i=0;i<parent.frames.frame_b.document.getElementById('optionTbl').rows.length;i++)
        {
        if(parent.frames.frame_b.document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.display == 'none')
        {
        parent.frames.frame_b.document.getElementById('optionTbl').getElementsByTagName('tr')[i].getElementsByTagName('td')[0].style.display = '';
        }
        }
        }*/
        setStudyQuestionResponse();


        //Start Hrb: Showing pop up  is selected only one answer
        if (parent.frames.frame_b.document.getElementById("needmorethanone") != null)
          multipleChoiceSelectionMessage = parent.frames.frame_b.document.getElementById("needmorethanone").innerHTML;
        //End Hrb: Showing pop up  is selected only one answer

      }
    }
    //End Hrb(06/16/2009): Added for preserving test questions

    //Start Hrb(08/12/2009): if course launched in the pilot testing mode, then don't show register credit message
    if (parent.frames.frame_b.document.getElementById("divCertificateToRegisterInfo") != null && lessonMode == LESSON_PILOTTESTING_MODE) {
      parent.frames.frame_b.document.getElementById("divCertificateToRegisterInfo").style.display = "none";
    }
    //End Hrb(08/12/2009): if course launched in the pilot testing mode, then don't show register credit message

    if (parent.frames.frame_b.document.getElementById("divCertificateBtn") != null && lessonMode == LESSON_PILOTTESTING_MODE) {
      parent.frames.frame_b.document.getElementById("divCertificateBtn").style.display = "none";
    }

    if (noOfattempts == CHAPTER_TEST_PASSED) {
      if (parent.frames.frame_b.document.getElementById("statusDiv"))
        if (FinalExam == EXAM_POSITION_BYCOURSE) {
          parent.frames.frame_b.document.getElementById("statusDiv").innerHTML = FINALEXAM_PASS_INFO;
          document.getElementById("NextButton").style.display = "none";
          document.getElementById("NextButtonDisabled").style.display = "";

          document.getElementById("btnNext").style.display = "none";
        }
        else {
          //if the current chapter is passed then show the message            
          //if(noOfAttemptedTests[CurrentChapter-1]==CHAPTER_TEST_PASSED)
          //hrb: display a message if the user has passed the test or exceeded the attempts
          if (noOfattempts == CHAPTER_TEST_PASSED) {
            parent.frames.frame_b.document.getElementById("statusDiv").innerHTML = CHAPTERTEST_PASS_INFO1;
            //mode="nextchapter";
          } else {
            var alertMsg = FAILED_CANNOT_RETAKE_TEST_PART1 + testAttempts + FAILED_CANNOT_RETAKE_TEST_PART2;
            parent.frames.frame_b.document.getElementById("statusDiv").innerHTML = alertMsg;
            //mode="nextchapter";
          }

          if (CurrentChapter == TotalChapters) {
            document.getElementById("NextButton").style.display = "none";
            document.getElementById("NextButtonDisabled").style.display = "";

            document.getElementById("btnNext").style.display = "none";
          }
        }
    }
    //hrb : added to set the no of attempt
    if (parent.frames.frame_b.document.getElementById("takenAttempts")) {

      if (FinalExam == EXAM_POSITION_BYCOURSE) {
        if (noOfattempts <= 1) {
          parent.frames.frame_b.document.getElementById("takenAttempts").innerHTML = "<b>" + noOfattempts + "</b>" + ' ' + TIME + ".";
        }
        else
          parent.frames.frame_b.document.getElementById("takenAttempts").innerHTML = "<b>" + noOfattempts + "</b>" + ' ' + TIMES + ".";
      }
      else {
        if (noOfAttemptedTests[CurrentChapter - 1] <= 1) {
          parent.frames.frame_b.document.getElementById("takenAttempts").innerHTML = "<b>" + noOfAttemptedTests[CurrentChapter - 1] + "</b>" + ' ' + TIME + "."; ;
        }
        else
          parent.frames.frame_b.document.getElementById("takenAttempts").innerHTML = "<b>" + noOfAttemptedTests[CurrentChapter - 1] + "</b>" + ' ' + TIMES + ".";

      }
      parent.frames.frame_b.document.getElementById("totalnoOfAttempts").innerHTML = testAttempts + ' ';
    }

    //hrb : end  of code added to set the no of attempt
    var questionscrollbar = false;
    //for navigation in mlearning course take current div id kept as content id
    //@sha searching in content instead of contentWindow. As for mlearning we use two div for navigation there are two question div present only there content div id are different

    if (parent.frames.frame_a.document.getElementById(currentDivId) != null) {
      //start  text highlight
      forSerachKey = parent.frames.frame_b.document.getElementById("content").innerHTML.replace(/tr_object/ig, "object").replace(/tr_embed/ig, "embed").replace(/tr_param/ig, "param").replace(/tr_userSelectedBandwidth/ig, selectedBandwidth).replace(/tr_isOLP/ig, g_isOLP).replace(/tr_hideVolumeIcon/ig, hideVolumeIcon).replace(/tr_video/ig, "video").replace(/tr_audio/ig, "audio").replace(/tr_source/ig, "source");
      if (forSerachKey.indexOf('interactivityForEbookogg') != -1 && isFF) {
        forSerachKey = forSerachKey.replace(/tr_ogg_iframe/ig, "iframe");
        forSerachKey = forSerachKey.replace('interactivityForEbookogg', 'interactivityForEbook');
      } else if (forSerachKey.indexOf('interactivityForEbook') != -1) {
        forSerachKey = forSerachKey.replace(/tr_iframe/ig, "iframe");
      }

      if (highlightMe) {
        highlightMe = false;
        forSerachKey = genrateHighlightData(forSerachKey);
      }
      parent.frames.frame_a.document.getElementById(currentDivId).innerHTML = forSerachKey;

      //end  text highlight
      //parent.frames.frame_a.document.getElementById(currentDivId).innerHTML = parent.frames.frame_b.document.getElementById("content").innerHTML.replace(/tr_object/ig,"object").replace(/tr_embed/ig,"embed").replace(/tr_param/ig,"param").replace(/tr_userSelectedBandwidth/ig,selectedBandwidth).replace(/tr_isOLP/ig,g_isOLP);
      var parentFrameContentDiv = parent.frames.frame_a.document.getElementById(currentDivId);

      if (parentFrameContentDiv.childNodes[3] != null && parentFrameContentDiv.childNodes[3].id == "question") {
        if (parentFrameContentDiv.childNodes[3].offsetHeight > 415) {
          parentFrameContentDiv.childNodes[3].style.pixelHeight = 415;
          questionscrollbar = true;
        }


        if (parentFrameContentDiv.childNodes[5] != null) {
          parentFrameContentDiv.childNodes[5].style.top = 40;

        }
        else {
          if ((document.getElementById("showQuestionNumber") != null)
             && (parentFrameContentDiv.childNodes[1] != null)) {
            parentFrameContentDiv.childNodes[3].style.top = 92;

            parentFrameContentDiv.childNodes[1].style.top = 60;
          }

        }
        addScrollToQuestionDiv();
        var form = getFormElementFromQuestionDiv(currentDivId);
        for (var d = 0; d <= form.getElementsByTagName('input').length - 1; d++) {
          if (form.answer1) {
            if (form.answer1[d] != null)
              form.answer1[d].parentNode.width = 30;
          }
        }

      }
      else if (parentFrameContentDiv.childNodes[8] != null && parentFrameContentDiv.childNodes[8].id == "question")//to apply scroll to study question
      {
        addScrollToQuestionDiv();
        var form = getFormElementFromQuestionDiv(currentDivId);
        for (var d = 0; d <= form.length - 1; d++) {
          if (form.answer1) {
            if (form.answer1[d] != null)
              form.answer1[d].parentNode.width = 30;
          }
        }
      }

      if (parent.frames.frame_a.document.getElementById("btm") != null) {
        if ((parent.frames.frame_a.document.getElementById("adiv").style) && (parent.frames.frame_a.document.getElementById("adiv").style.overflow == "auto")) {
          if (treatment == "b") {
            parent.frames.frame_a.document.getElementById("adiv").style.pixelHeight = 490;
            parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("adiv").style.pixelTop + 490;
          }
          else // treatment == "c"
          {
            //hrb start 21/5/2009: pixelHeight changed to 493 from 490, to avoid the scroll bar for flv file
            // parent.frames.frame_a.document.getElementById("adiv").style.height = 493
            parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("adiv").style.pixelTop + 493
            //hrb end 21/5/2009: pixelHeight changed to 493 from 490, to avoid the scroll bar for flv file
          }
        }
        else
          if (parent.frames.frame_a.document.getElementById("adiv").style && parent.frames.frame_a.document.getElementById("btm").style)
            parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("adiv").style.pixelTop + parent.frames.frame_a.document.getElementById("adiv").offsetHeight;

        // Added to adjust the height of adiv in Firefox


        var adivObjChild = document.getElementById(currentDivId);
        var adivObj;

        for (var i = 0; i < adivObjChild.childNodes.length; i++) {
          var adivObjTestChild = adivObjChild.childNodes[i];

          if (adivObjTestChild.id == "adiv") {
            adivObj = adivObjTestChild;
            break;

          }

        }
        if (adivObj != null) {

          if (!chkEBookFormat()) {

            var adivStyleObj = adivObj.getAttributeNode("style");
            var adivStyle = adivStyleObj.nodeValue;
            if (adivStyle.indexOf("height") > 0) //to remove height from style attribute
              adivStyle = adivStyle.substr(0, adivStyle.indexOf("height") - 1) + adivStyle.substr(adivStyle.indexOf("height") - 1).substr(adivStyle.indexOf(";") + 1);

            adivObj.removeAttribute("style");
            adivObj.setAttribute("style", adivStyle);
            adivObj.style.overflow = "hidden";
            adivObj.style.position = "relative";
            //moveScrollForAPW4 = new iScroll("adiv");
            //getScrollbar();
          }

          //if (moveScrollForAPW4 != null) {
          //moveScrollForAPW4.destroy();
          //}

          //  navigateForAPW4 = new navigate("adiv");
        }


      }

      // Adjusting the width of panelP div for firefox
      /*  if (!isIE) {
      if (parent.frames.frame_b.document.getElementById("panelP")) {
      document.getElementById("panelP").style.width = parseInt(document.getElementById("panelP").style.width) - 25;
      }

      if (parent.frames.frame_b.document.getElementById("panelS")) {
      document.getElementById("panelS").style.width = parseInt(document.getElementById("panelS").style.width) - 10;
      }
      // Added to play properly *.swf files in Firefox
      
      document.getElementById(currentDivId).style.overflow = "hidden";
      }*/

      nAdjustPanelOverflow();
    }


    document.getElementById('bandwidthopt').style.display = "none";
    document.getElementById('bandwidthopt').style.color = "gray";
    document.getElementById('rdohighbandwidth').disabled = true;
    document.getElementById('rdolowbandwidth').disabled = true;
    document.getElementById('audioOffImg').style.visibility = "hidden";
    document.getElementById('audioOnImg').style.visibility = "hidden";
    if (document.progress.OnlineUser && !g_isOLP)//is  Online
    {
      document.getElementById('bandwidthopt').style.color = "black";
      document.getElementById('rdohighbandwidth').disabled = false;
      document.getElementById('rdolowbandwidth').disabled = false;
      if (parent.frames.frame_b.document.getElementById("AVOisVideo")) {
        if (document.getElementById("bandwidthopt")) {
          // document.getElementById('bandwidthopt').style.display = "";

          if (selectedBandwidth == 'low') {
            document.getElementById('rdolowbandwidth').checked = true;
            document.getElementById('audioForEbook').style.display = "";
            document.getElementById('imgForEbook').style.display = "";
            document.getElementById('videoForEbook').style.display = "none";

            if (navigator.userAgent.match(/iPad/i) == null) {
              document.getElementById('audioOnImg').style.visibility = "visible";
              document.getElementById('audioForEbook').play();
            }
            else {
              document.getElementById('audioPlayButton').style.display = '';
            }
          }
          else {
            document.getElementById('rdohighbandwidth').checked = true;
            document.getElementById('audioForEbook').style.display = "none";
            document.getElementById('imgForEbook').style.display = "none";
            document.getElementById('videoForEbook').style.display = "";
            try {
              document.getElementById('videoForEbook').play();
            } catch (err) {
              // incase it breaks in safari when quicktime player is not installed.
            }
            document.getElementById('audioOffImg').style.visibility = "hidden";
            document.getElementById('audioOnImg').style.visibility = "hidden";
            document.getElementById('audioPlayButton').style.display = 'none';
          }
        }

        // change the source of the video to ebookCourseVideoURI
        if (ebookCourseVideoURI != "") {
          var videoframes = document.getElementById('videoForEbook').getElementsByTagName('source');
          try {
            for (var srccount = 0; srccount < videoframes.length; srccount++) {
              videosrc = videoframes[srccount].src;
              videofilename = videosrc.substring(videosrc.lastIndexOf('ebook/images/') + 13);
              videofilename = ebookCourseVideoURI + videofilename;
              videoframes[srccount].src = videofilename;
            }
          } catch (err) {
            // incase it breaks in safari when quicktime player is not installed.
          }
        }
      }

      EnableDisableLinks();
    }
    else {
      if (parent.frames.frame_b.document.getElementById("AVOisVideo")) {
        //   document.getElementById('bandwidthopt').style.display = "";
      }

      EnableDisablePermalinks();
    }
  
      //Added try-catch block to support LMS SCORM launch
      try {
          if (top.location.protocol == "file:") {
              EnableCPLLinksLocal();
          }
      } catch (ex) { }  
  
    setTimeout(function () {
      if (parent.frames.frame_b.document.getElementById("interactivityForEbook")) {
        if (isFF) {
          if (document.getElementById('content').getElementsByTagName('tr_iframe').length > 0)
            document.getElementById('content').getElementsByTagName('tr_iframe')[0].style.display = 'none';
        }
        else {
          if (document.getElementById('content').getElementsByTagName('tr_ogg_iframe').length > 0)
            document.getElementById('content').getElementsByTagName('tr_ogg_iframe')[0].style.display = 'none';
        }

        if (document.getElementById('trasDiv')) {
          //setting trasDiv top to offset top of enabled iframe - 30
          document.getElementById('trasDiv').style.top = document.getElementById('content').getElementsByTagName('iframe')[0].offsetTop - 30;
          document.getElementById('trasDiv').style.display = '';
        }
      }
      else if (parent.frames.frame_b.document.getElementById("videoForEbook") && document.getElementById('trasDiv')) {
        document.getElementById('trasDiv').style.top = document.getElementById("divVideo").offsetTop - 30;
        document.getElementById('TranscriptpopupForEbook').style.top = document.getElementById("divVideo").offsetTop + 18;
        document.getElementById('trasDiv').style.left = '720px';
        document.getElementById('trasDiv').style.display = '';
      }
      if (parent.frames.frame_b.document.getElementById("audioInteractivity") || parent.frames.frame_b.document.getElementById("audioControlId")) {

        if (document.getElementById('trasDiv')) {
          document.getElementById('trasDiv').style.top = document.getElementById('TranscriptpopupForInteractivity').offsetTop;
          document.getElementById('trasDiv').style.display = '';
        }
      }
    }, 100);

    if (parent.frames.frame_b.document.getElementById("interactivityForEbook") && typeof (parent.frames.frame_b.intialraptivityaudio) != 'undefined' && navigator.userAgent.match(/iPad/i) != null) {
      document.getElementById('modaldiv').style.display = '';
      document.getElementById('playaudio').style.display = '';
    }
    else if (parent.frames.frame_b.document.getElementById("audioInteractivity") && navigator.userAgent.match(/iPad/i) != null) {
      document.getElementById('modaldiv').style.display = '';
      document.getElementById('playaudio').style.display = '';
    }
    else {
      document.getElementById('playaudio').style.display = 'none';
      document.getElementById('modaldiv').style.display = 'none';
    }

    //hrb start:added to hide the credits for pilot Testing
    if (parent.frames.frame_b.document.getElementById("divcredits")) {
      if (lessonMode == LESSON_PILOTTESTING_MODE) {
        document.getElementById('divcredits').style.display = "none";
      }
    }
    //hrb end:added to hide the credits for pilot Testing

    //hrb end: code added to display image or video div     
    //hrb:set the expiration date
    if (lessonMode != LESSON_PILOTTESTING_MODE) {
      if (document.getElementById('spnExpire')) {
        if (expiredDate != '')
          document.getElementById('spnExpire').innerHTML = document.getElementById('spnExpire').innerHTML + expiredDate + "*";
      }
    }
    else {
      if (parent.frames.frame_b.document.getElementById("divFeedback")) {
        //Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
        document.getElementById('divFeedback').style.display = "";
        if (isFeedbackURLResponseSet) {
          document.getElementById('divFeedback').innerHTML = "<a href=\"javascript:parent.frames.frame_a.OpenLink('FEEDBACK')\">Feedback</a>"
          document.getElementById('divFeedback').style.cursor = "pointer";
          isCongratsLastPageSet = false;
          isFeedbackURLResponseSet = false;
        }
        //End HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
      }

    }
    //hrb: enable the combobox if mode is not review
    if (mode == "test")
      EnableDisableQuestionSelectionDropdown(true);
    bookMarkVisiblity();


    if (!chkEBookFormat()) {
      if (document.getElementById("panelPCourseinfo") != null) {
        //    panelPCourseinfoScroll = new iScroll("panelPCourseinfo");
        //getScrollbar();
      }

    }

    if (!chkEBookFormat()) {
      if (document.getElementById("panelPWelcome") != null) {
        //   panelPWelcomeScroll = new iScroll("panelPWelcome");
        //  navigateForAPW4 = new navigate("panelPWelcome");
        //getScrollbar();
      }
    }

    if (!chkEBookFormat()) {
      if (document.getElementById("authorscrolldiv") != null) {
        //   panelPWelcomeScroll = new iScroll("authorscrolldiv");
        // navigateForAPW4 = new navigate("authorscrolldiv");
        //getScrollbar(); 
      }
    }



    if (!chkEBookFormat()) {
      if (document.getElementById("LOScroll") != null) {
        // panelPWelcomeScroll = new iScroll("LOScroll");
        //   navigateForAPW4 = new navigate("LOScroll");
        //getScrollbar();
      }
    }

    setUnSetVideoSrc(true);
    var contentMCQ = document.getElementById("contentMCQ");
    if (!chkEBookFormat()) {
      if (contentMCQ) {
        //mcq_Scroll = new iScroll('mcqScrollDiv');
        //  mcq_navigate=new navigate('contentMCQ');
        //getScrollbar();
      }
    }


    navDiff = 0;

    if (document.getElementById('prelimpagedivinfo')) {
      document.getElementById('prelimpagedivinfo').style.display = "";
    }
    var interactivityDiv = document.getElementById('content').getElementsByTagName('div');
    for (var divCount = 0; divCount < interactivityDiv.length; divCount++) {
      if (interactivityDiv[divCount].id == 'wrapperInteractivityDiv') {
        interactivityDiv[divCount].style.display = "";
      }
      if (interactivityDiv[divCount].id == 'ulInteractivityDiv') {
        interactivityDiv[divCount].style.display = "";
      }
      else if (interactivityDiv[divCount].id == 'flashInteractivityDiv') {
        interactivityDiv[divCount].style.display = "";
      }
      else if (interactivityDiv[divCount].id == 'cplInstructionDiv') {
        interactivityDiv[divCount].style.display = "";
      }
      else if (interactivityDiv[divCount].id == 'cplGraphicDiv') {
        interactivityDiv[divCount].style.display = "";
      }
    }

    isRestoreState = false;


    if (document.getElementById("adiv") && document.getElementById("adiv").style.overflow == 'auto') {
      /*var element = $(document.getElementById("adiv")).jScrollPane({
      horizontalGutter:5,
      verticalGutter:5,
      'showArrows': false,
      maintainPosition:false,
      'horizontalDragMaxWidth': 0
      });
      var api = element.data('jsp');
      api.scrollToY(0);
      */
      /*$(document.getElementById("adiv")).jScrollPane({
      horizontalGutter:5,
      verticalGutter:5,
      'showArrows': false
      });
      /*$('.jspDrag').hide();
      $('.jspScrollable').mouseenter(function(){
      $('.jspDrag').stop(true, true).fadeIn('slow');
      });
      $('.jspScrollable').mouseleave(function(){
      $('.jspDrag').stop(true, true).fadeOut('slow');
      });*/
      $(document.getElementById("adiv")).removeAttr("tabindex");
      $(document.getElementById("adiv")).bind('jsp-scroll-y', closePopUp);


    }

    if ((parent.frames.frame_b.document.getElementById("desired-product-behavior") != null) && (parent.frames.frame_b.document.getElementById("desired-product-behavior").value == "study") && checkStudyQuestion) {
      checkStudyQuestion = false;

      GradeQuestion(parent.frames.frame_b.StudyQuesCorrectResponse, parent.frames.frame_a.document.getElementById('optionTbl').getElementsByTagName('tr')[forTrInRestoreState]);
      forTrInRestoreState = "";
    }

    /*if(document.getElementById("question"))
    {
    $(document.getElementById("question")).jScrollPane({
    horizontalGutter:5,
    verticalGutter:5,
    'showArrows': false
    });
    $('.jspDrag').hide();
    $('.jspScrollable').mouseenter(function(){
    $('.jspDrag').stop(true, true).fadeIn('slow');
    });
    $('.jspScrollable').mouseleave(function(){
    $('.jspDrag').stop(true, true).fadeOut('slow');
    });
    }*/

    //getScrollbar();
    if (document.getElementById("content_question")) {
      var ele = document.getElementById("content_question");
      if (navigator.userAgent.match(/iPad/i) != null)
        ele.style.height = 452;
      else
        ele.style.height = 488;

      ele.style.paddingRight = 20;

      if (ele.scrollHeight > ele.offsetHeight && navigator.userAgent.match(/iPad/i) != null)
        document.getElementById('FooterMask').style.visibility = 'visible';
    }

    if (document.getElementById('nsubmittest')) {
      if (enableSubmitTest) {
        document.getElementById("nsubmittest").style.visibility = "visible";
        document.getElementById("nsubmittest_disable").style.visibility = "hidden";

      }
      else {
        document.getElementById("nsubmittest").style.visibility = "hidden";
        document.getElementById("nsubmittest_disable").style.visibility = "visible";
      }
    }

    if (parent.frames.frame_b.document.getElementById('titlealigndiv')) {
      var center = 279; // center coordinate for ipad
      var beginButtonTop = parseInt($('#begincoursebtn').css('top'), 10);
      if (navigator.userAgent.match(/iPad/i) != null) {
        center = 287; // center coordinate for desktop
      }

      var titledivheight = $(document.getElementById('titlealigndiv')).height() + beginButtonTop; // 50 is top of begin course button
      divtop = center - (titledivheight / 2);
      document.getElementById('titlealigndiv').style.top = divtop;
    }

    //Added to remove unwanted spacing present in the bottom panel on the course information page
    courseInfoPageBottomDiv = $("[name = 'courseInfoPageBottomDiv']");
    if (courseInfoPageBottomDiv.length > 0) {
      courseInfoPageBottomDiv[0].innerHTML = courseInfoPageBottomDiv[0].innerHTML.replace(/&nbsp;/ig, "");

      //Added to reset the bottom panel top present on the course information page for the iPad Safari
      if (navigator.userAgent.match(/iPad/i) != null)
        courseInfoPageBottomDiv[0].style.top = 372;
    }
    setTimeout(function () {
      if (navigator.userAgent.match(/iPad/i) != null)
        parent.frames.frame_b.document.getElementById("content").innerHTML = "";
    }, '200');
  }
  catch (err) { }
  //  document.getElementById('mysection').style.width = 1014;
} //end loadcontent 

function muteAudio() {
  if (document.getElementById('audioForEbook').muted) {
    document.getElementById('audioForEbook').muted = false;
    document.getElementById('audioOffImg').style.visibility = 'hidden';
    document.getElementById('audioOnImg').style.visibility = 'visible';
  }
  else {
    document.getElementById('audioOnImg').style.visibility = 'hidden';
    document.getElementById('audioOffImg').style.visibility = 'visible';
    document.getElementById('audioForEbook').muted = true;
  }
}



//newly added function to check that bookmark is added or not. If test question then disable bookmark
function bookMarkVisiblity() {
  var arrNotBookmarkpage = ',test_page,test_page_fail,congratslast_page,congrats_page,fail_page,confirmation_page,test_progress';
  desArr = testDescriptionStr.split(',');
  var description = '';
  if (mode != 'test' && desArr != 'undefined' && desArr.length > 0) {

    description = "," + desArr[1];
  }
  else {
    description = '';
  }

  var bookmarkDiv = document.getElementById("bookmarkDiv");
  if (mode == "test" || mode == "retake" || mode == "review" || arrNotBookmarkpage.indexOf(description) >= 0 || CurrentStudyPage == 0) {
    hideShowBookMark('hide');
    return;
  }
  else {
    hideShowBookMark('show');
  }

  bkDesc = document.getElementById("bkDescription").innerHTML;
  txtbkDesc = document.getElementById("txtbkDescription").value;
  txtbkDesc = txtbkDesc.replace(/^\s+/, '');

  if (fnCheckIsBookmarkAdded(bkDesc)) {
    bookmarkDiv.className = 'bookMark bookMark_Done';
    bookmarkDiv.innerHTML = '<embed id="markunmarkbookmark" src="common/images/bookmarkdone-icon.svg" width="17px" height="32px"></embed>';
    document.getElementById('add-bookmark-label').innerHTML = "remove bookmark"

  }
  else {
    bookmarkDiv.className = 'bookMark';
    bookmarkDiv.innerHTML = '<embed id="markunmarkbookmark" src="common/images/bookmark-icon.svg" width="17px" height="32px"></embed>';
    document.getElementById('add-bookmark-label').innerHTML = "add bookmark"
  }
}

var searchScroll = null;
//hrb:niket search the text.
function DoSearchData() {
  searchresult = "";
  if (searchScroll != null) {
    searchScroll.destroy();
  }
  document.progress.SearchString(document.getElementById("searchText").value.trim());
  var OutputTarget = "";
  OutputTarget = document.progress.DoSearch();
  searchresult = document.progress.SearchResults();
  document.getElementById("searchItems").innerHTML = searchresult;

  if (searchresult == NO_PAGES_MATCHED && document.getElementById("searchText").value == '') {
    document.getElementById("searchText").value = "";
    document.getElementById("searchItems").innerHTML = "";
  }
  else {
    var searchItemElement = document.getElementById("searchItem");
    if (searchItemElement) {
      try {
        var searchItem = searchItemElement.getElementsByTagName("ul")[0].getElementsByTagName("li");
        var searchItemHeight = 0;
        for (var itemCnt = 0; itemCnt < searchItem.length; itemCnt++) {
          searchItemHeight += searchItem[itemCnt].offsetHeight;

        }
        searchItemElement.style.height = searchItemHeight + "px";
      }
      catch (err) { }
    }

    if (!chkEBookFormat()) {
      //getScrollbar();
      //searchScroll = new iScroll("searchItem");
    }
  }
}

//hrb-end:niket search the text.
function DoSearch() {
  searchStr = document.getElementById("searchText").value;
  if (document.getElementById("searchText").value == "") {
    if (document.getElementById("searchL").style.visibility != 'hidden') {
      document.getElementById("searchpopupLx").onclick();
      Menu('searchL', searchL.clientWidth, 200, 0, 0);
    }
    return;
  }
  document.getElementById("searchL1").innerHTML = 'Please wait...<br>';

  //hrb: close authorBioPopUp only if it is open through search result page

  Menu('searchL', 0, 200, 1, 0);

  if (Search == null) {
    document.progress.SearchString(document.getElementById("searchText").value.trim());
    var OutputTarget = "";
    OutputTarget = document.progress.DoSearch();
    document.getElementById("searchL1").innerHTML = document.progress.SearchResults()
  }
  else {
    Search.SearchString(document.getElementById("searchText").value);
    var OutputTarget = "                                                      ";
    OutputTarget = Search.doSearch();
    document.getElementById("searchL1").innerHTML = Search.SearchResults()

  }

  //hrb:added to enable the certificate button
  //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
  if (iscertificateclicked && lessonMode != LESSON_PILOTTESTING_MODE) {
    document.getElementById("certificatebuttonL").style.display = "";
    document.getElementById("certificatebuttonLD").style.display = "none";
    iscertificateclicked = false;
  }
  //hrb:end of added to enable the certificate button

  // added to display popup of search menu in Firefox
  if (!isIE) {
    if (LANGUAGE == "en" || LANGUAGE == "en-uk") {
      document.getElementById("searchL1").style.height = 210;
      document.getElementById("searchL1").style.width = 235;
      document.getElementById("OuterBlock").style.borderTop = '';
      document.getElementById("OuterBlock").style.width = 245;
      document.getElementById("SearchResultTitle").style.width = 239;
      document.getElementById("searchL").style.width = 247;
    }
    else {
      document.getElementById("searchL1").style.height = 210;
      document.getElementById("searchL1").style.width = 246;
      document.getElementById("OuterBlock").style.borderTop = '';
      document.getElementById("OuterBlock").style.width = 256;
      document.getElementById("SearchResultTitle").style.width = 250;
      document.getElementById("searchL").style.width = 258;
    }
  }
}

function DoResize(win) {
  if (document.body.clientWidth >= 1024) {
    courseoffset = (document.body.clientWidth - 1024) / 2;
  }
  else {
    courseoffset = 0;
  }
}

function PlaySound(correct) {
  if (document.getElementById('mysound') != null) {
    s = document.getElementById('mysound').name.split("-");
    if (correct)
      document.getElementById('mysound').src = "sounds/" + s[0] + ".wav";
    else
      document.getElementById('mysound').src = "sounds/" + s[1] + ".wav";
  }
}

function ShowSearchResult(pagenumber) {
  var str = "000";
  var istr = pagenumber.toString(10);

  sFlag = 1;
  document.getElementById("searchiframe").src = str.substring(0, 4 - istr.length) + istr + ".htm";
  document.getElementById("popuptitle").innerHTML = "<a href=#  class='clsSearchLinks' onclick=\"mode='study'; closePopUp(); ShowStudyPage(" + pagenumber + ");\">" + fnFindLink(pagenumber) + "</a>"

}

function fnFindLink(pagenumber) {
  if (pagenumber == TITLE_PAGE_NO) {
    return TITLE_PAGE;
  }
  else if (pagenumber == WELCOME_PAGE_NO) {
    return WELCOME_PAGE;
  }
  //hrb start 20/5/2009 : added for Course Information page
  else if (pagenumber == COURSEINFO_PAGE_NO) {
    return " Course Information page";
  }
  //hrb end 20/5/2009 : added for Course Information page
  else if (pagenumber == LEARNING_OBJECTIVE_PAGE_NO) {
    return INTRODUCTION_PAGE;
  }

  var chapterPage;
  var chapterCode;
  var linkPage;

  for (var index = 0; index < CategoryList.length; index++) {
    if ((CategoryList[index].FirstQuestion <= pagenumber) && (CategoryList[index].LastQuestion >= pagenumber)) {
      chapterCode = CategoryList[index].CategoryCode;
      chapterPage = pagenumber - CategoryList[index].FirstQuestion + 1;
      break;
    }
  }
  linkPage = CHAPTER_SPACE + chapterCode + ", " + PAGE_SPACE + chapterPage;
  return linkPage;
}
//stert for set BG color
function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) {
  searchTerm = searchTerm.replace(/"/g, ""); // remove double quotes
  searchTerm = searchTerm.replace(/'/g, ""); // remove single quotes
  searchTerm = searchTerm.replace(/\t/g, " "); // replace tabs with spaces
  searchTerm = searchTerm.replace(/ +/g, " "); // reduce multiple spaces to single space

  if (strWordsArr != null && strWordsArr != "undefined") {
    var dirWords = "," + strWordsArr.toString() + ",";
    if (dirWords.indexOf("," + searchTerm.toLowerCase() + ",") == -1)
      return bodyText;
  }
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();

  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i + 1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        if ((lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) && (lcBodyText.lastIndexOf("/style>", i) >= lcBodyText.lastIndexOf("<style", i))) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  return newText;
}
//end for set BG color
//hrb: Added for showing search terms pop up within course window
function setSearchSrcLocation(pagenumber) {

  var inner = document.getElementById("searchiframe").contentWindow.document.body.innerHTML;

  var objPopUpL = document.getElementById("popupL");
  var objPopUpL1 = document.getElementById("popupL1");
  var objsearchpopupTitle = document.getElementById('popuptitle')
  var popupTitle = document.getElementById('popuptitle').innerHTML

  showPopup(inner);

  objPopUpL.style.visibility = "";
  objPopUpL1.style.visibility = "";
  setiPadPopupLayout(objPopUpL, objPopUpL1)
  objPopUpL.style.width = "500";
  //objPopUpL1.style.width = "93%"
  objPopUpL1.style.paddingLeft = "9"
  var objSearchpopupL1 = document.getElementById("popupL1");
  objSearchpopupL1.innerHTML = popupTitle + document.getElementById("searchiframe").contentWindow.document.body.innerHTML;

  //Set the height & width for innerdivs in popupL1.
  var objContent = GetInnerDiv(objSearchpopupL1, currentDivId);
  if (objContent) {
    var objChild = objContent.childNodes;
    if (objChild != null) {
      for (var i = 0; i < objChild.length; i++) {
        if (objChild[i].nodeName == "DIV") {
          objChild[i].style.height = "180";
          objChild[i].style.width = "380";
          objChild[i].style.position = "relative";
          objChild[i].style.paddingRight = "1";
          objChild[i].style.left = "1";
        }
      }
    }
  }
  return;

  var objSearchpopupL1 = document.getElementById("searchpopupL1");
  var objSearchpopupL = document.getElementById("searchpopupL");

  if (isIE) {
    forSerachKey = window.frames["searchiframe"].document.body.innerHTML;
    forSerachKey = genrateHighlightData(forSerachKey);
    objSearchpopupL1.innerHTML = forSerachKey;
  }
  else {
    forSerachKey = document.getElementById("searchiframe").contentWindow.document.body.innerHTML;
    forSerachKey = genrateHighlightData(forSerachKey);
    objSearchpopupL1.innerHTML = forSerachKey;
    //objSearchpopupL1.innerHTML= document.getElementById("searchiframe").contentWindow.document.body.innerHTML;
    objSearchpopupL1.style.width = 646;
    objSearchpopupL1.style.height = 440;
    objSearchpopupL.style.height = 474;
    objSearchpopupL.style.width = 658;
    document.getElementById("searchpopupTitle").style.width = 650;

    //var objSearchDiv = document.getElementById("searchpopupL1")
    var objContent = GetInnerDiv(objSearchpopupL1, currentDivId);

    if (objContent) {
      var objQuestion = GetInnerDiv(objContent, "question");

      if (objQuestion) {
        objContent.childNodes[5].style.top = 40;
        objContent.childNodes[6].style.top = 70;
        objQuestion.style.top = 95;
      }

      if ((objQuestion != null) && (objQuestion.childNodes[3] != null)) {
        for (var d = 0; d <= objQuestion.childNodes[3].length - 1; d++) {
          if (objQuestion.childNodes[3].answer1[d] != null)
            objQuestion.childNodes[3].answer1[d].parentNode.width = 30;
        }
      }
    }
    document.getElementById("searchpopupL1").innerHTML = "<h6>&nbsp;</h6>" + document.getElementById("searchpopupL1").innerHTML;
  }
  highlightMe = false;
  document.getElementById("searchpopupL1").innerHTML = document.getElementById("searchpopupL1").innerHTML.replace(/tr_object/ig, "object").replace(/tr_embed/ig, "embed").replace(/tr_param/ig, "param").replace(/tr_userSelectedBandwidth/ig, selectedBandwidth).replace(/tr_isOLP/ig, g_isOLP).replace(/tr_hideVolumeIcon/ig, hideVolumeIcon);
}
//hrb  end : Added for showing search terms pop up within course window

//hrb:added for search textbox 
function ShowSearchTextBlock() {
  var objButtonLD;
  var objButtonL;
  //hrb: removed duplicate code 
  document.getElementById("searchbuttonL").style.display = "none";
  document.getElementById("resourcesLx").style.display = "none";
  document.getElementById("bookmarkLx").style.display = "none";
  document.getElementById("glossLx").style.display = "none";
  document.getElementById("helpLx").style.display = "none";
  document.getElementById("printLx").style.display = "none";
  document.getElementById("searchText").value = "";
  document.getElementById("searchText").style.visibility = "";
  document.getElementById("OuterBlock").style.visibility = "";

  //Date19-Feb-2009: Harbinger[SagarG]: Added for closing glossary terms popup on click of any other menu except Glossary
  document.getElementById("popupL").style.display = "none";
  document.getElementById("popupLx").style.display = "none";

  if (VisibleMenu != "" && VisibleMenu != "searchTextButtonL") {
    var tmpDivStr = VisibleMenu.substring(0, VisibleMenu.length - 1);
    var objVisibleMenu = document.getElementById(VisibleMenu);

    objButtonLD = document.getElementById(tmpDivStr + "buttonLD");
    objButtonL = document.getElementById(tmpDivStr + "buttonL");

    if (objButtonLD)
      objButtonLD.style.display = "none";

    if (objButtonL)
      objButtonL.style.display = "";


    if (VisibleMenu == "searchL") {
      if (objVisibleMenu)
        objVisibleMenu.style.top = SEARCH_TOP_POS;
    }
    // start hrb 22/Apr/2009: Added for bookmark pop menu
    else if (VisibleMenu == "bookmarkL") {
      // hrb: Reset the top position of the bookmark menu item
      if (objVisibleMenu)
        objVisibleMenu.style.top = BOOKMARK_TOP_POS;
    }
    // end hrb 22/Apr/2009: Added for bookmark pop menu

    // start hrb 23/Apr/2009: Added for print pop menu
    else if (VisibleMenu == "printL") {
      // hrb: Reset the top position of the print menu item
      if (objVisibleMenu)
        objVisibleMenu.style.top = PRINT_TOP_POS;
    }
    // end hrb 23/Apr/2009: Added for print pop menu
    else {
      if (objVisibleMenu)
        objVisibleMenu.style.top = DEFAULT_TOP_POS;
    }
  }

  VisibleMenu = "searchTextButtonL";
  document.getElementById("searchbuttonLD").style.display = "";

  //hrb: Added to hide glossary terms description popup
  document.getElementById("popupL").style.visibility = 'hidden';
  //hrb: End of Added to hide glossary terms description popup

  //hrb: Added to hide help description popup
  document.getElementById("helpPopUpL").style.visibility = 'hidden';
  //hrb: End of Added to hidehelp description popup

  //hrb:added to hide the outline if expanded
  if (document.getElementById("outlineL").style.pixelLeft > 200)
    OutlineShowHide();

  if (!isIE && outlineflag)
    OutlineShowHide();
  //hrb:end of added to hide the outline if expanded

  //hrb start 18/5/2009: added to close the transcript div
  if (parent.frames.frame_b.document.getElementById("transContent"))
    CloseTranscriptDiv();
  //hrb end 18/5/2009: added to close the transcript div

  //hrb:added to enable the certificate button
  CloseCertificateDiv();
  //hrb:end ofadded to enable the certificate button

  //hrb start 19/5/2009: added to close the clickAnd Reveal popup on click of search
  if (isRevalClicked) {
    document.getElementById("ClickRevealPopUpLx").onclick();
    document.getElementById("ClickRevealPopUpL").onclick();
    isRevalClicked = false;
  }
  //hrb end 19/5/2009: added to close the clickAnd Reveal popup on click of search

  if (!isIE) {
    var objOuterBlock = document.getElementById("OuterBlock");
    var objSearchText = document.getElementById("searchText");

    if (LANGUAGE == "sp" || LANGUAGE == "fr") {
      objOuterBlock.style.width = 255;
    }
    else {
      objOuterBlock.style.width = 245;
    }

    objOuterBlock.style.height = 28;
    objSearchText.style.verticalAlign = 'top';
    objSearchText.style.top = 4;
    objSearchText.style.height = 22;
    objOuterBlock.style.border = "solid thin #9B9B9B";
    objOuterBlock.style.top = 637;
  }

}
//hrb:end of added for search text box


function clickOnTab(what) {
  document.getElementById("changableBorder").src = "common/images/content_top_" + what + ".gif";
  document.getElementById("infoDiv").innerHTML = document.getElementById("info_" + what).innerHTML;
}

function mouseOverPaperClip(which) {
  var currentSrc = which.src;

  if (currentSrc.indexOf('_RO') == -1) {
    which.src = currentSrc.substring(0, currentSrc.length - 4) + "_RO.gif";
  }
}


function mouseOutPaperClip(which) {
  var currentSrc = which.src;
  var currentSrcLength = currentSrc.length;
  var contentId = "revealedContent" + currentSrc.substr(currentSrc.indexOf("Clip") + 5, 1);

  if ((currentSrc.indexOf('_RO') != -1) && (document.getElementById(contentId).style.visibility == 'hidden')) {
    which.src = currentSrc.substring(0, currentSrcLength - 7) + ".gif";
  }
}


function clickOnPaperClip(which) {
  var tempName = which.name;
  var contentId = "revealedContent" + tempName.substring(tempName.length - 1, tempName.length);

  document.getElementById(contentId).style.visibility = "visible";
}


function clickToRevealTemporarily(which) {
  var source = "info" + which;
  document.getElementById("revealedInfo").innerHTML = document.getElementById(source).innerHTML;
}


function clickOnKey1(which, ofHowMany) {
  var tempKeyID = "key" + which;

  for (var i = 1; i <= ofHowMany; i++) {
    document.getElementById('key' + i).src = 'common/images/bulletKeyBW.gif';
    document.getElementById('key' + i).onOff = 'off';
  }
  document.getElementById(tempKeyID).src = 'common/images/bulletKeyGold.gif';
  document.getElementById('infoDiv').innerHTML = document.getElementById('info' + which).innerHTML;
  document.getElementById('infoDiv').style.visibility = 'visible';

  if (!isIE) {
    document.getElementById('infoDiv').style.border = "solid medium #E0B35B";
  }
  document.getElementById(tempKeyID).onOff = 'on';
}


function clickOnKey2(which, ofHowMany, whatGraphic, state) {
  var tempKeyID = "key" + which;

  if (state == 'on') {

  }
  else {
    for (var i = 1; i <= ofHowMany; i++) {
      if (i != which) {
        document.getElementById('key' + i).src = 'common/images/' + whatGraphic + i + 'BW.gif';
        document.getElementById('key' + i).onOff = 'off';
      }
    }
    document.getElementById(tempKeyID).src = 'common/images/' + whatGraphic + which + 'RO.gif';
    document.getElementById('infoDiv').innerHTML = document.getElementById('info' + which).innerHTML;
    document.getElementById('infoDiv').style.visibility = 'visible';

    if (!isIE) {
      document.getElementById('infoDiv').style.border = "solid medium #E0B35B";
    }
    document.getElementById(tempKeyID).onOff = 'on';
  }
}

var CTRkey = 0;
var CTRscale = 1;
var CTRaddingMachine = 2;
var CTRcaptionBGcolor = new Array();
CTRcaptionBGcolor[CTRkey] = "#ffffff";
CTRcaptionBGcolor[CTRscale] = "#ffffff";
CTRcaptionBGcolor[CTRaddingMachine] = "#ffffff";

function clickToReveal(which, ofHowMany, whatGraphic, state, borderColor) {
  // usage e.g. clickToReveal(2,8,'key',this.onOff)
  var tempSrc
  var tempMostSrc
  var captionElement

  if (state == 'on') {
    tempSrc = document.getElementById('bullet' + which).src;
    tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
    document.getElementById('bullet' + which).src = tempMostSrc + "_off.gif";
    document.getElementById('infoDiv').innerHTML = "";
    document.getElementById('infoDiv').style.visibility = 'hidden';
    document.getElementById('bullet' + which).onOff = 'off';

    captionElement = document.getElementById('caption' + which);

    if (captionElement) {
      captionElement.style.backgroundColor = 'transparent';
      captionElement.style.borderColor = 'transparent';
    }
  }
  else {
    for (var index = 1; index <= ofHowMany; index++) {
      if (index != which) {
        tempSrc = document.getElementById('bullet' + index).src;
        tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet' + index).src = tempMostSrc + '_off.gif';
        document.getElementById('bullet' + index).onOff = 'off';
        captionElement = document.getElementById('caption' + index);
        if (captionElement) {
          captionElement.style.backgroundColor = 'transparent';
          captionElement.style.borderColor = 'transparent';
        }
      }
    }
    tempSrc = document.getElementById('bullet' + which).src;
    tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
    document.getElementById('bullet' + which).src = tempMostSrc + "_on.gif";

    captionElement = document.getElementById('caption' + which);

    if (captionElement) {
      captionElement.style.backgroundColor = "#FFFFFF";
      captionElement.style.border = "1 solid " + borderColor;
    }
    document.getElementById('infoDiv').innerHTML = document.getElementById('info' + which).innerHTML;
    document.getElementById('infoDiv').style.visibility = 'visible';
    if (!isIE) {
      document.getElementById('infoDiv').style.border = "solid medium #E0B35B";
    }
    document.getElementById('bullet' + which).onOff = 'on';
  }
} // end clickToReveal


function highlightPartner(anID, onOrOff) {
  // assume anID is of form CN, where C in {a,b} and N is an integer

  if (onOrOff == "on") {
    document.getElementById(anID).style.cursor = "pointer";
    document.getElementById("a" + anID.substring(1, anID.length)).style.backgroundColor = "#FFFF66";
    document.getElementById("b" + anID.substring(1, anID.length)).style.backgroundColor = "#FFFF66";
  }
  else {
    document.getElementById(anID).style.cursor = "default";
    document.getElementById("a" + anID.substring(1, anID.length)).style.backgroundColor = "transparent";
    document.getElementById("b" + anID.substring(1, anID.length)).style.backgroundColor = "transparent";
  }
}


function slideIn(theId, toX, toY) {
  var theObj = document.getElementById(theId);
  var fromX = theObj.style.pixelLeft;
  var fromY = theObj.style.pixelTop;

  var step = 10;

  var dX;
  var dY;
  var Dis;
  var numSteps;
  var stepX;
  var stepY;

  dX = toX - fromX;
  dY = toY - fromY;
  Dis = Math.sqrt(dX * dX + dY * dY);
  numSteps = Math.floor(Dis / step);
  stepX = Math.round(dX / numSteps);
  stepY = Math.round(dY / numSteps);

  doSliding(theId, fromX, fromY, toX, toY, stepX, stepY);

}  // end slideIn()


function doSliding(theId, startX, startY, stopX, stopY, stepX, stepY) {
  var theObj = document.getElementById(theId);
  var doneX = false;
  var doneY = false;

  if ((stopX - startX) == 0) {
    doneX = true;
  }
  else if (Math.abs(stopX - startX) >= Math.abs(stepX))
    theObj.style.pixelLeft = theObj.style.pixelLeft + stepX;

  else {
    theObj.style.pixelLeft = stopX;
  }

  if ((stopY - startY) == 0) {
    doneY = true;
    if (doneX && doneY) return
  }
  else if (Math.abs(stopY - startY) >= Math.abs(stepY))
    theObj.style.pixelTop = theObj.style.pixelTop + stepY;
  else
    theObj.style.pixelTop = stopY;

  setTimeout("doSliding('" + theId + "'," + theObj.style.pixelLeft + "," + theObj.style.pixelTop + "," + stopX + "," + stopY + "," + stepX + "," + stepY + ")", 15);

} // end doSliding()


var dragging = false;
var dropped = true;
N = (document.all) ? 0 : 1;
var draggedElement
var ob;
var dragX;
var dragY;
var defaultSelectHandler
var defaultDragHandler

function MD(e) {
  dragging = false;
  var draggedElement;
  if (!e) {
    var e = window.event;
  }
  if (e.target) {
    draggedElement = e.target;
  }
  else if (e.srcElement) {
    draggedElement = e.srcElement;
  }

  while (draggedElement.id.indexOf("dragable") != 0 && draggedElement.id != "") {

    draggedElement = draggedElement.parentNode;
  }

  if (draggedElement.id.indexOf("dragable") === 0) {
    ob = draggedElement.style;
    ob.zIndex = 200;
    dragging = true;
    dragX = event.offsetX;
    dragY = event.offsetY;
    defaultDragHandler = document.body.ondrag;
    defaultSelectHandler = document.body.onselectstart;
    document.body.ondrag = function () { return false; };
    document.body.onselectstart = function () { return false; };
  }

} // end MD()

function MM(e) {
  if (dragging && ob) {
    var nextLeft = event.clientX - dragX + document.body.scrollLeft - document.getElementById("adiv").style.pixelLeft - document.getElementById(currentDivId).style.pixelLeft;

    var nextTop = event.clientY - dragY + document.body.scrollTop - document.getElementById("adiv").style.pixelTop - document.getElementById(currentDivId).style.pixelTop;

    if (nextLeft > 0 - document.getElementById("adiv").style.pixelLeft &&
            nextLeft < document.getElementById(currentDivId).style.pixelWidth - draggedElement.offsetWidth)
      ob.pixelLeft = nextLeft;

    if (nextTop + draggedElement.offsetHeight < document.getElementById(currentDivId).style.pixelHeight - document.getElementById("adiv").style.pixelTop &&
            event.clientY > document.getElementById(currentDivId).style.pixelTop + dragY)
      ob.pixelTop = nextTop;

    return false;
  }
} //end MM()

function MU() {
  if (dragging) {
    dropped = true;
    dragging = false;
    ob.zIndex = 101;
    document.body.ondrag = defaultDragHandler;
    document.body.onselectstart = defaultSelectHandler;

    var iObj;
    var theObj;

    for (iObj in document.getElementById("adiv").childNodes) {
      var searching = true;
      theObj = document.getElementById("adiv").childNodes[iObj]

      if (theObj.nodeName === "DIV" &&
                theObj.id.indexOf("dropBin") === 0 &&
                droppedIn(theObj)) {
        showDropResponse(theObj);
        searching = false;
      }
      if (!searching) return
    }
    ob.pixelLeft = draggedElement.attributes.getNamedItem("origX").value;
    ob.pixelTop = draggedElement.attributes.getNamedItem("origY").value;
  }

} // end MU()

function droppedIn(bin) {
  var xx = event.clientX - document.getElementById("adiv").style.pixelLeft - document.getElementById(currentDivId).style.pixelLeft;
  var yy = event.clientY - document.getElementById("adiv").style.pixelTop - document.getElementById(currentDivId).style.pixelTop;

  if (xx > bin.offsetLeft && xx < bin.offsetLeft + bin.offsetWidth &&
        yy > bin.offsetTop && yy < bin.offsetTop + bin.offsetHeight)
    return (true);
  else
    return (false);

} // end droppedIn()

function showDropResponse(bin) {
  var droppedThingNum = draggedElement.id.substring(8, draggedElement.id.length + 1);
  var droppedIntoNum = bin.id.substring(7, bin.id.length + 1);
  var responseId = "dropResponse" + droppedThingNum + "in" + droppedIntoNum;

  document.getElementById("responseDiv").innerHTML = document.getElementById(responseId).innerHTML;

  // sendBackIfWrong
  if (document.getElementById(responseId).attributes.getNamedItem("correct").value === "no") {
    ob.pixelLeft = draggedElement.attributes.getNamedItem("origX").value;
    ob.pixelTop = draggedElement.attributes.getNamedItem("origY").value;
  }
} // end showDropResponse()

document.onmousedown = MD;
document.onmousemove = MM;
document.onmouseup = MU;
//hrb:added to close window on click of exit

function closeMainWin() {
  var isOutlineClosed = false;

  //hrb:added to hide the outline if expanded and other poups
  CloseCertificateDiv();

  //hrb start 18/5/2009: added to close the transcript div
  if (parent.frames.frame_b.document.getElementById("transContent"))
    CloseTranscriptDiv();
  //hrb end 18/5/2009: added to close the transcript div

  //hrb:end of added to hide the outline if expanded and other poups

  hideCheckpoint();
  isExitClicked = true;
  document.getElementById("testPopUpLx").onclick();

  //hrb start : added to hide course preview popup on content load
  document.getElementById("coursePreviewerPopUpLx").onclick();
  //hrb start : added to hide course preview popup on content load

  if (document.getElementById("authorBioPopUpL").style.visibility = 'visible') {
    document.getElementById("authorBioPopUpLx").onclick();
  }

  //hrb:end of added to hide the outline if expanded and other poups
  if (document.getElementById("outlineL").style.pixelLeft > 200) {
    isOutlineClosed = true;
    OutlineShowHide();
  }

  if (!isIE && outlineflag) {
    isOutlineClosed = true;
    OutlineShowHide();
  }
  //hrb start:added to show closing , if outline or menu is not visible
  if (isOutlineClosed == false) {
    fnShowCloseAlert();
  }
  //hrb end:added to show closing alert, if outline or menu is not visible

}

//hrb:function added to show alert message on closing of main window
function fnShowCloseAlert() {
  document.getElementById("quitbuttonL").style.display = "none";
  document.getElementById("quitbuttonLD").style.display = "";

  if (confirm(EXIT_MSG))
  // HRB : Added for compliance
    if (document.progress.OnlineUser) {
      updateCourse();

      // in case of cross domain case, cross domain wrapper will close the window.
      try {
        if (window.parent.parent.parent.opener.parent.frames["ContentMediator"]) {
          window.parent.parent.parent.opener.parent.close();
        }
      }
      catch (Exception) {
        try {
          if (typeof window.parent.parent.parent.parent.isCourseWithoutDebugSupport != 'undefined') {
            setTimeout("top.close()", 1000);
            return;
          }
        }
        catch (e) { }
      }
      top.close();
    } else {
      top.close();
    }
  else {
    isExitClicked = false;
    document.getElementById("quitbuttonLD").style.display = "none";
    document.getElementById("quitbuttonL").style.display = "";
  }
}

//hrb:End of added to close window on click of exit

//HRB: Added For Progress Bar and author Bio
function GetTotalNumberOfPages() {
  if (CategoryList.length > 0) {
    //get total number of pages in the published/previewed course
    TotalPagesInCourse = ((CategoryList[CategoryList.length - 1].LastQuestion) - (CategoryList[0].FirstQuestion) + 1)
    + (CategoryList[0].FirstQuestion);
  }

  //Start Hrb: Final Exam change
  TotalPagesInCourse += parseInt(finalExamTotalQuestions, 10);
  //end Hrb: Final exam change  
}

var authorBioCall = false;
function ShowAuthorBio(authorcode, e) {
  closePopUp();

  //var curTop = 0, curLeft = 0, curWidth = 0;
  // var ele = null;
  //11-1-11 start
  /*    if (e != null) {
  e.stopPropagation();
  ele = e.srcElement || e.target; //e.target is added for support in mozilla firefox-Rashmi
  if (ele != null && ele != 'undefined') {
  curWidth = ele.offsetWidth;
  if (ele.offsetParent) {
  do {
  curTop += ele.offsetTop;
  curLeft += ele.offsetLeft;
  } while (ele = ele.offsetParent);
  }
  }
  }*/
  var tempAuthorcode = "";
  var strAuthorImageCode;
  var strAuthorBioCode;

  strAuthorImageCode = "auImg_" + authorcode;
  strAuthorBioCode = "auBio_" + authorcode;

  var title = "Author Biography";
  var description = "";
  var image = null;

  if (authorcode.lastIndexOf(',') == (authorcode.length - 1))
    tempAuthorcode = authorcode;
  else
    tempAuthorcode = authorcode + ',';

  var bio = tempAuthorcode + '&nbsp;' + document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorBioCode).innerHTML;

  if (document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorImageCode) != null) {
    image = document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorImageCode).innerHTML;
  }

  description = "<table Border=\"0\" cellpadding=\"7\" cellspacing=\"0\" width=\"95%\" align=\"center\"" +
          "<tr>";
  if (image != null) {
    description = description + "<td id=\"TDImage\" style=\"width:5%;\"><div id=\"AuImage\">" + image + "</div></td>" +
                  "<td valign=\"middle\" style:\"width:100%\"><div id=\"AuName\" style=\"width:115px; word-wrap:break-word; font:Verdana, Arial, Helvetica, sans-serif; font-size: 20px; color:#000000;\">" + authorcode + "</div></td>" +
                  "</tr>"
  }
  else {
    description = description + "<td colspan=\"2\" style:\"width:100%\"><div id=\"AuName\" style=\"font:Verdana, Arial, Helvetica, sans-serif; font-size: 20px; color:#000000;\">" + authorcode + "</div></td>" +
                  "</tr>"
  }
  description = description + "<tr></tr>" +
          "<tr>" +
          "<td colspan=\"2\"><div id=\"AuBio\" style=\"font:Verdana, Arial, Helvetica, sans-serif; font-size: 13px; color:#000000;\">" + bio + "</div></td>" +
          "</tr>" +
          "</table>";

  /*var objPopUpL = document.getElementById("popupL");
  var objPopUpL1 = document.getElementById("popupL1");

  //11-1-11 for arrow start 
  var popupHeaderArrow = document.getElementById("popupHeaderArrow");

  var popUpHeaderArrow_width = 14;
  var popUpHeaderArrow_height = 26;
  var font_size = 14;

  popupHeaderArrow.style.width = popUpHeaderArrow_width;
  popupHeaderArrow.style.height = popUpHeaderArrow_height;
  popupHeaderArrow.style.position = "absolute";
  popupHeaderArrow.style.top = curTop;
  popupHeaderArrow.style.left = curLeft + curWidth + 4;
  popupHeaderArrow.style.backgroundImage = "url(common/images/arrow_left.png)";
  popupHeaderArrow.style.visibility = "visible";
  //for arrow end

  curTop -= 84;
  curLeft = curLeft + curWidth + 15;
  
  showIPadPopup(title, description, curTop + "px", curLeft + "px", "200px", "468px", "436px");
  getScrollbar(scrollpopup);
  $("#scrollpopup").width("442px");*/
  authorBioCall = true;
  if (authorcode.lastIndexOf(',') == (authorcode.length - 1))
    document.getElementById('nGeneralPopupHeader').innerHTML = authorcode.substring(0, authorcode.length - 1);
  else
    document.getElementById('nGeneralPopupHeader').innerHTML = authorcode;

  document.getElementById('nGeneralPopupBody').innerHTML = bio;
  document.getElementById('nGeneralPopup').style.height = 375;
  document.getElementById('nGeneralPopup').style.width = 600;

  //aligning the div popup center
  var controlpageele = document.getElementById('controlpage');
  var nGeneralPopupele = document.getElementById('nGeneralPopup');
  nGeneralPopupele.style.left = 512 - (parseInt(nGeneralPopupele.style.width) / 2);

  nGeneralPopupele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupele.style.height) / 2);
  // end aligning the popup to center

  document.getElementById('nGeneralPopupBody').style.height = 310 + "px";
  document.getElementById('closeBtnnGeneralPopup').style.left = 565 + "px";
  document.getElementById('closeBtnnGeneralPopup').style.display = '';
  document.getElementById('closepopup-label').innerHTML = "close author bio";
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('nGeneralPopup').style.display = '';
}

//HRB:End of Added to show the help window
function ShowHelp(helpitem) {
  if (HelpWin != null)
    HelpWin.close();

  var page = helpitem + ".htm";
  var sFeatures;
  sFeatures = "left=50, top=20, width=800, height=550, directories=no, location=no, menubar=yes, resizable=no, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";

  HelpWin = window.open(page, "_blank", sFeatures);
}
//HRB:End of Added to show the help window


// HRB : Added to integrate the congratuations page
function displayCongratsPage() {
  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    document.getElementById("divPageTitle").innerHTML = COURSE + ", " + PASSED;
  }

  var sub = null;
  if (g_isOLP) {
    sub = getSubscription();
    if (sub != null && sub.userName != "") {
      if (document.getElementById("congrats_page_student"))
        document.getElementById("congrats_page_student").innerHTML = '<div id="congrats_page_student" style="font-family:Verdana;font-size:26px;Color:#000066">' + sub.userName + '</div>';
    }
  }

  document.getElementById("passpercent").innerHTML = "" + gbl_CurrentTestScore + "%";

  // drawing of circle starts
  var c = document.getElementById("circleCanvas");
  var ctx = c.getContext("2d");
  var percentage = gbl_CurrentTestScore / 100;
  var degrees = percentage * 360;
  radians = 1.5 * Math.PI + degrees * (Math.PI) / 180;

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#77A22E';
  ctx.arc(70, 75, 50, 1.5 * Math.PI, radians);
  ctx.stroke();


  var c1 = document.getElementById("circleCanvas");
  var ctx1 = c1.getContext("2d");

  ctx1.beginPath();
  ctx1.lineWidth = 4;
  ctx1.strokeStyle = '#E0E0E0';
  ctx1.arc(70, 75, 50, radians, 1.5 * Math.PI);
  ctx1.stroke();


  if (navigator.userAgent.match(/iPad/i) == null) {
    c1.style.left = 297;
  }
  if (isFF || isChrome) {
    c1.style.left = 310;
  }
  // drawing of circle end

  if (document.getElementById("chapter"))
    document.getElementById("chapter").innerHTML = "   " + passedChapters;

  if (document.getElementById("course"))
    document.getElementById("course").innerHTML = document.getElementById('coursetitle').innerHTML;

  if (document.getElementById("passingdate")) {
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var today = new Date();

    if (tempPassingDateStr.length == 0)
      tempPassingDateStr = months[today.getMonth()] + "  " + today.getDate() + ",  " + today.getFullYear();
    document.getElementById("passingdate").innerHTML = tempPassingDateStr
  }

  if (gbl_CurrentTestScore == 0) {
    passfailDescriptionStr = "0" + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    passedChapterDescStr = "0" + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
  }
  else {
    passfailDescriptionStr = gbl_CurrentTestScore + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    passedChapterDescStr = gbl_CurrentTestScore + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
  }

  if (isCourseCompleted() && lessonMode == LESSON_CREDIT_MODE) {  //HRB: Added condition to disable next button for PILOTTESTING mode.
    document.getElementById("NextButton").style.display = "";
    document.getElementById("NextButtonDisabled").style.display = "none";
    document.getElementById("PrevButton").style.display = "";
    document.getElementById("PrevButtonDisabled").style.display = "none";

    document.getElementById("btnNext").style.display = "none";

    document.getElementById("btnBack").style.display = "";
  }

  if (!isIE) {
    if (document.getElementById("boxdiv")) {
      document.getElementById("boxdiv").style.width = 591;
      document.getElementById("boxdiv").style.height = 204;
    }
    if (document.getElementById("textdiv")) {
      document.getElementById("textdiv").style.height = 190;
    }
  }
} // end of displayCongratsPage
// HRB : end addition to integrate the congratuations page

function fnSetPassingPercent(PassingPercent) {
  gbl_PassingPercent = PassingPercent;
}

//hrb: function to set the progress on progress page load
function displayProgressPage() {
  if (CurrentChapter == TotalChapters) {
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";
    document.getElementById('beginNextChapterBtn').style.display = 'none';
    document.getElementById("btnNext").style.display = "none";
  }
  document.getElementById("compQues").innerHTML = getCompletedQuestionCount();
  document.getElementById("totQues").innerHTML = getTotalQuestionCount();
  document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + ", Completed";
}
//hrb : the function written to display the fail page. appends the latest score
function displayFailPage() {
  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    document.getElementById("divPageTitle").innerHTML = COURSE + ", " + FAILED;
  }

  if (passfailDescriptionStr.length > 0) {
    document.getElementById("scorepercent").innerHTML = document.getElementById("scorepercent").innerHTML + "" + passfailDescriptionStr.replace('<sp>', "") + "%";
  }
  else
    document.getElementById("scorepercent").innerHTML = document.getElementById("scorepercent").innerHTML + gbl_CurrentTestScore + "%";

  //if(noOfAttemptedTests[CurrentChapter-1]>=testAttempts)
  if (noOfattempts >= testAttempts) {
    parent.frames.frame_a.document.getElementById("retake").style.cursor = "default";
    parent.frames.frame_a.document.getElementById("retake").src = " ";
    // hrb start : added for new GUI
    if (FinalExam == EXAM_POSITION_BYCOURSE) {
      parent.frames.frame_a.document.getElementById("retake").src = "common/images/retake_test_dis.gif";
      parent.frames.frame_a.document.getElementById("attemptsleft").innerHTML = "no more attempts ";
      parent.frames.frame_a.document.getElementById("nomoreAttempts").style.visibility = "";
    }
    else {
      parent.frames.frame_a.document.getElementById("retake").src = "common/images/retakeallchaptertests_off.gif";
      $("#retake").removeClass("btnNormalDefault").addClass("btnNormalInactive");
    }
    //hrb end : added for new GUI
  }
  // hrb start : added for new GUI
  else {
    if (FinalExam == EXAM_POSITION_BYCOURSE) {
      var attemptsleft = testAttempts - parseInt(noOfattempts);
      if (document.getElementById("attemptsleft") != null) {
        if (attemptsleft <= 1) {
          parent.frames.frame_a.document.getElementById("attemptsleft").innerHTML = attemptsleft + " more attempt ";
        }
        else
          parent.frames.frame_a.document.getElementById("attemptsleft").innerHTML = attemptsleft + " more attempts ";
      }
      parent.frames.frame_a.document.getElementById("nomoreAttempts").style.visibility = "hidden";
    }
  }
  // hrb end : added for new GUI
  if (CurrentChapter == TotalChapters) {
    if (FinalExam == EXAM_POSITION_BYCOURSE) {
      parent.frames.frame_a.document.getElementById("NextChap").style.cursor = "default";
      parent.frames.frame_a.document.getElementById("NextChap").src = " ";
      parent.frames.frame_a.document.getElementById("NextChap").src = "common/images/goto_next_ch_dis.gif";
    }
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";

    document.getElementById("btnNext").style.display = "none";
  }
} //end dispalyFailPage

//HRB : added to retake the test after failing
function fnRetakeTest() {
  if (noOfattempts < testAttempts) {
    if (FinalExam == EXAM_POSITION_BYCOURSE) {
      CurrentChapter = TotalChapters;
      TestInit();
      CurrentTestQuestion = 0;
      GenerateQuestions();

      GenerateQuestionComboBox();

      //Start Hrb(06/16/2009): Added for preserving test questions
      fnLoadAttemptedQuestStyle();
      //End Hrb(06/16/2009): Added for preserving test questions

      SetMode("retake");

      ShowFinalExamTestQuestion(1);
      //document.getElementById("questionControlPanel").style.visibility = 'visible';
      document.getElementById("showQuestionNumber").style.visibility = 'visible';
      document.getElementById("btnBack").style.display = "none";
      EnableDisableQuestionSelectionDropdown(false);
      return;
    }
    initTest();
    SetMode("retake");
    EnableDisableSubmitButton();
    EnableDisableQuestionSelectionDropdown(false);
    document.getElementById('btnBack').style.display = "none";
  }
} //end retakeTest

function resetTest() {
  for (var i = 0; i < TotalChapters; i++) {
    noOfAttemptedTests[i] = 0;
  }
  ResetChapterQuestionResponse();
  //gbl_completedQues = 0;
  strChapterTestQuestionResponse = "";
}

//hrb : fn added to go to next chapter after failing the test
function fnGotoNextChapter() {
  var NextChapter = parseInt(CurrentChapter, 10) + 1;
  if (NextChapter > TotalChapters) {
    parent.frames.frame_a.document.getElementById("NextChap").style.cursor = "default";
    parent.frames.frame_a.document.getElementById("NextChap").src = "common/images/goto_next_ch_dis.gif";
  }
  else
    Sc(NextChapter);
} //end of nGotoNextChapter

//hrb: fn added to review the course again afetr failing the test
function fnReviewChapter() {
  //hrb:check added for chapter review pages
  //hrb: first page of the chapter will be shown in case of pass on line
  resetTest();
  CurrentChapter = 1;
  document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + ", " + TEST_FAILED;
  Sc(CurrentChapter);
  ResetChapterQuestionResponse();

} //end of fnReviewChapter

//hrb start: added function for bookmark
function fnAddBookMark() {
  bkDesc = document.getElementById("bkDescription").innerHTML;
  txtbkDesc = document.getElementById("txtbkDescription").value.trim();
  gbl_bkCounter = bookmarkArray.length;
  //txtbkDesc = txtbkDesc.replace(/^\s+/, '');
  $("#txtbkDescription").blur(); //To hide the ipad keyboard

  if (fnIsDuplicateBookmark(txtbkDesc)) {
    /*showIPadPopup('', BOOKMARK_EXIST, "230px","315px", "125px", "350px", "436px");
    getScrollbar(scrollpopup);
    $("#scrollpopup").width("324px");*/
    alert(BOOKMARK_EXIST);
    document.getElementById('txtbkDescription').focus();
    return -1;
  }
  else if (txtbkDesc == "") {
    /*showIPadPopup('', BOOKMARK_DESCRIPTION, "230px","315px", "125px", "350px", "436px");
    getScrollbar(scrollpopup);
    $("#scrollpopup").width("324px");*/
    alert(BOOKMARK_DESCRIPTION);
    document.getElementById('txtbkDescription').focus();
    return -1;
  }
  else {
    var curPage = CurrentStudyPage;

    if (isEbookEthicCourse && CurrentStudyPage > 3) { //If ethic course then storing bookmark in the form of chapter_number~page_number except for the first 4 pages in the course
      if (CurrentChapter > 1) {
        curPage = CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3;
        curPage = CurrentChapter + "~" + curPage;
      }
      else {
        curPage = CurrentChapter + "~" + curPage;
      }
    }

    appendNewBookMark(curPage, txtbkDesc, bkDesc);
    document.getElementById("bookmarkAdd").style.display = "none";
    document.getElementById('subChapterdivpointer').style.display = "none";
    bookmarkDiv.className = 'bookMark bookMark_Done';
    bookmarkDiv.innerHTML = '<embed id="markunmarkbookmark" src="common/images/bookmarkdone-icon.svg" width="17px" height="32px"></embed>';
    document.getElementById('add-bookmark-label').innerHTML = "remove bookmark";

    bookmarkArray[gbl_bkCounter] = new setBookMark(bkDesc, txtbkDesc, curPage);
    gbl_bkCounter++;
    /*document.getElementById('bookmarkaddedcontainer').style.display='';
    animateBookmarkAdded(0);
    setTimeout(function(){
    //$("#bookmarkaddedcontainer").fadeOut(1000);
    animateBookmarkHide(0);
    },'1500');*/

  }
  return 1;
}
//hrb end: added function for bookmark

//hrb add: function for remove gray effect from background.
function fnRemoveGrayEffect() {
  // Remove gray effect from background.
  document.getElementById("backgroundbookmark").style.visibility = "hidden";
}
//hrb end: function for remove gray effect from background.

function fnIsDuplicateBookmark(desc, editBkCall) {
  for (itr = 0; itr < bookmarkArray.length; itr++) {
    try {
      //hrb: 10-Dec-2010 as for mlearning course we didnt provide text for bookmark
      //when delete the global bookmark count doesnt get decrement , bcoz of this some null value are introdue in bookmarkArray. 
      //to avoid this null bookmark entries we introduce if statement

      if (bookmarkArray[itr] != null && bookmarkArray[itr].bkDescription != null) {
        if (bookmarkArray[itr].bkDescription.toLowerCase() == desc.toLowerCase().trim()) {
          return true;
        }
      }
    }
    catch (err) {
      //showIPhonePopup('', "INVALID_BOOKMARK", true);

      if (typeof (editBkCall) == 'undefined')
        showIPadPopup('', BOOKMARK_EXIST, "230px", "315px", "125px", "350px", "436px");


      //getScrollbar(scrollpopup);
      //$("#scrollpopup").width("324px");
      return false;
    }
  }
  return false;
}

//hrb: start
function fncreateBkDiv() {
  var divStr = "";

  for (itr = 0; itr < bookmarkArray.length; itr++) {
    newdivStr = "";
    try {
      if (bookmarkArray[itr]) {
        newdivStr = "";   // commented -- multiple initialization

        newdivStr = '<table><tr><td style="width:70" ><a href=# onclick= "fnShowBookmarkPage(';
        newdivStr = newdivStr + bookmarkArray[itr].bkLink + ')" class="clsGlossaryLinks" title="' + GO_TO_PAGE_TOOLTIP + '" ';

        newdivStr = newdivStr + ' >';
        newdivStr = newdivStr + bookmarkArray[itr].bkTitle;
        newdivStr = newdivStr + '</a></td>';
        newdivStr = newdivStr + ' <td><input type="text" class="clsBookmarkTextBox" value = "' + bookmarkArray[itr].bkDescription + '"';

        newdivStr = newdivStr + '  readonly="true"><img src="common/images/bookmark_delete.gif" alt="' + DELETE_BOOKMARK_TOOLTIP + '" onclick="fndeleteBookMark(' + itr + ')" ';
        newdivStr = newdivStr + ' style="position:relative; cursor:pointer;top:3px; left:5px" '

        newdivStr = newdivStr + ' /></td></tr></table>';
        divStr = divStr + newdivStr;
      }
    }
    catch (err) {
      // showIPhonePopup('', DELETE_BOOKMARK_WARNING, true);
      showIPadPopup('', DELETE_BOOKMARK_WARNING, "230px", "315px", "125px", "350px", "436px");
      //getScrollbar(scrollpopup);
      //$("#scrollpopup").width("324px");
      continue;
    }
  }
  gbl_bkCounter = bookmarkArray.length;
  return divStr;
}
//hrb :end



//hrb start: added function to delete bookmark
function fndeleteBookMark(desc) {
  fnDeleteBookMark_ipad(desc);
  if (document.getElementById('BookmarkContainerdiv').style.display == 'none') {
    document.getElementById('bookmarkaddedcontainer').style.display = '';
    $("#bookmarkaddedcontainer").fadeOut(2000);
  }
  return;
}
//hrb end: added function to delete bookmark


function fnDeleteBookMark_mlearning(desc) {
  for (itr = 0; itr < bookmarkArray.length; itr++) {
    try {
      if (bookmarkArray[itr] != null && bookmarkArray[itr].bkDescription && bookmarkArray[itr].bkDescription != '') {
        //Note: for mlearning we pass book mark description for delete as we didnot have bookmark index
        if (itr == desc || (bookmarkArray[itr].bkDescription == desc)) {
          bookmarkArray.splice(itr, 1);
          var newdiv = '';
          newdiv = createBookmarkli(bookmarkArray);
          break;
        }
      }
    }
    catch (err) {

      //showIPhonePopup('', DELETE_BOOKMARK_WARNING + err, true);
      showIPadPopup('', DELETE_BOOKMARK_WARNING, "230px", "315px", "125px", "350px", "436px");
      //  getScrollbar(scrollpopup);
      //$("#scrollpopup").width("324px");
    }
  }

}


//hrb start : added to show the bookmark page
function fnShowBookmarkPage(bkpage) {
  if (isEbookEthicCourse && bkpage.indexOf("~") != -1) {  //If ethic course then bookmarked page will be in the form of chapter_number~page_number except for the first 4 pages in the course
    var arrBookmarkPage = bkpage.split("~");
    if (parseInt(arrBookmarkPage[0]) > 1) {
      bkpage = CategoryList[parseInt(arrBookmarkPage[0]) - 1].LastQuestion + parseInt(arrBookmarkPage[1]) - 3;
    }
    else {
      bkpage = parseInt(arrBookmarkPage[1]);
    }
  }

  if (!editBookMarkFlag)
    return;

  closePopUp();
  if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv showAnimateDiv") {
    document.getElementById('courseviewmain').className = "courseMenuMain showDiv"
  }
  if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv") {
    document.getElementById('courseviewmain').className = "courseMenuMain showDiv showAnimateDiv"
  }

  if (mode == "review" || mode == "retake") {

    if (mode == "review") {
      str = eval("SWITCH_FROM_REVIEW_" + FinalExam.toUpperCase());
      showConfirmPopup('Review', str, bkpage, "bookmark");
    }
    else {
      str = eval("SWITCH_FROM_RETAKE_" + FinalExam.toUpperCase());
      showConfirmPopup('Retake', str, bkpage, "bookmark");
    }

    outlineflag = 0;

    return;
  }
  mode = 'study';
  ShowStudyPage(bkpage);
  //hrb start : Added to refresh bookmark menu

}
//hrb end : added to show the bookmark page


//start Hrb: Added final exam related functions
function SubmitFinalExam() {

  if (finalExamStatus == "0")
    UpdateFinalExamStatus("1"); //complete

  if (mode == "study" || mode == "remedial")
    return;

  //grade the answers given by the learner 
  // if (CurrentTestQuestion != 0)
  //    GradeTestQuestion();

  //check if all questions in final exam are answered or not
  for (index = 0; index < finalExamTotalQuestions; index++) {
    if (TestQuestion[index].Answer == "")
      return;
  }

  //document.getElementById("controlpanel").style.visibility = 'hidden';
  //document.getElementById("questionControlPanel").style.visibility = 'hidden';
  document.getElementById("showQuestionNumber").style.visibility = 'hidden';

  CalculateFinalExamPercentage();
}


function CalculateFinalExamPercentage() {
  var CorrectCount = 0;
  var TestScore = 0;
  var qn;
  var rem = "";
  //hrb start:added to CorrectCount
  for (i = 0; i < finalExamTotalQuestions; i++) {
    if (TestQuestion[i].Correct)
      CorrectCount = CorrectCount + 1;
  }
  //hrb end:added to CorrectCount
  //hrb:  check added for  getting remedial pages for micromash courses.
  totalQuestionattempted = parseInt(finalExamTotalQuestions) + parseInt(totalGradedQuestions);
  var index
  for (index = 0; index < totalGradedQuestions; index++) {
    if (GradedQuestions[index].Correct == "yes")
      CorrectCount++;
  }

  TestScore = parseInt(CorrectCount * 100 / totalQuestionattempted);
  gbl_CurrentTestScore = TestScore;
  var finalTestStatus = gbl_CurrentTestScore + ":"
  //hrb:changes for next and prev button

  //hrb start 8/6/2009:check added to disable next button for piolt testing on last congrates page
  if (lessonMode != LESSON_PILOTTESTING_MODE) {
    document.getElementById("NextButton").style.display = "";
    document.getElementById("NextButtonDisabled").style.display = "none";
    document.getElementById("btnNext").style.display = "";
  }
  //hrb end 8/6/2009:check added to disable next button for piolt testing on last congrates page

  //hrb:end of changes for next and prev button
  document.getElementById("submittest").style.visibility = 'hidden';

  //Start Hrb(06/16/2009): Added for preserving test questions
  var lastAttempt = 0;
  gbl_strChapterTestAttemptStatus = "0~";

  //get the last attempt
  if (arrChapterTestAttemptStatus[0] != "")
    lastAttempt = arrChapterTestAttemptStatus[0].split("~")[1];

  lastAttempt++;
  gbl_strChapterTestAttemptStatus = gbl_strChapterTestAttemptStatus + lastAttempt + "~" + gbl_CurrentTestScore + "~";
  //End Hrb(06/16/2009): Added for preserving test questions

  if (TestScore >= gbl_PassingPercent) {
    isGradeMyAnswerClicked = true;

    //hrb start:added test status pass
    finalTestStatus = finalTestStatus + "P";
    //hrb end:added test status pass

    //start Hrb(06/16/2009): Added for preserving test question
    gbl_strChapterTestAttemptStatus = gbl_strChapterTestAttemptStatus + "P";
    //End Hrb(06/16/2009): Added for preserving test questions

    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var today = new Date();
    tempPassingDateStr = months[today.getMonth()] + "  " + today.getDate() + ",  " + today.getFullYear();

    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var ampm = 'AM';
    var hours = today.getHours();
    if (hours >= 12) {
      ampm = 'PM';
      hours = (hours % 12) == 0 ? 12 : (hours % 12);
    }
    var minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var seconds = today.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var dateTestPassedStr = days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;

    //hrb:added to indicate texam passed
    noOfattempts = CHAPTER_TEST_PASSED;
    document.progress.DateTestPassed(dateTestPassedStr);
    document.progress.Update();

    //Start Hrb(06/30/2009): Added to change the lesson status. Set it as Failed only when attempts are more than 3 for all chapters 
    //and status is Failed even for any single chapter.
    if (document.progress.OnlineUser) {
      setDetails("LESSON_STATUS", "passed");
    }
    //End Hrb(06/30/2009): Added to change the lesson status. Set it as Failed only when attempts are more than 3 for all chapters 
    //and status is Failed even for any single chapter.

    //hrb:added to enable the certificate button
    //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
    if (lessonMode != LESSON_PILOTTESTING_MODE) {
      showmLearningCertificate();
    }
    //hrb:end of added to enable the certificate button

    //hrb start : Added for bookmark menu
    bookmarkFlag = false;
    //hrb end : Added for bookmark menu

    //Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
    isCongratsLastPageSet = true;
    //End HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode

    mode = "nextchapter";

    //hrb start: added to update test attempts
    ChangeTestAttemptStatus(finalTestStatus);
    //hrb end: added to update test attempts

    //Start Hrb(06/16/2009): Added for preserving test questions
    arrChapterTestAttemptStatus[0] = gbl_strChapterTestAttemptStatus;
    UpdateProgressData();
    //end Hrb(06/16/2009): Added for preserving test question

    //hrb start : Added to display proper date on document of progress    
    parent.frames.frame_b.document.location = "congratslast_page.htm";
    document.getElementById("divPageTitle").innerHTML = "Exam Completed";
    testDescriptionStr = CurrentChapter + ",congratslast_page";
    if (gbl_CurrentTestScore == 0) {
      passfailDescriptionStr = "0" + '<sp>' + passedChapters;
      passedChapterDescStr = "0" + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }
    else {
      passfailDescriptionStr = gbl_CurrentTestScore + '<sp>' + passedChapters;
      passedChapterDescStr = gbl_CurrentTestScore + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }
    isGradeMyAnswerClicked = false;
  }
  else {
    //hrb start:added test status fail
    finalTestStatus = finalTestStatus + "F";
    //hrb end:added test status fail

    //Start Hrb(06/16/2009): Added for preserving test questions
    gbl_strChapterTestAttemptStatus = gbl_strChapterTestAttemptStatus + "F";
    //End Hrb(06/16/2009): Added for preserving test questions

    //hrb start : Added for bookmark menu
    bookmarkFlag = false;
    //hrb end : Added for bookmark menu     

    parent.frames.frame_b.document.location = "fail_page.htm";
    testDescriptionStr = CurrentChapter + ",fail_page";

    if (gbl_CurrentTestScore == 0) {
      passfailDescriptionStr = "0" + '<sp>' + passedChapters;
      passedChapterDescStr = "0" + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }
    else {
      passfailDescriptionStr = gbl_CurrentTestScore + '<sp>' + passedChapters;
      passedChapterDescStr = gbl_CurrentTestScore + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }
    //hrb: to show the  failed message
    document.getElementById("divPageTitle").innerHTML = "&nbsp;" + FINAL_EXAM + " " + FAILED;
    mode = "nextchapter";

    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";

    document.getElementById("btnNext").style.display = "none";

    CurrentRemedialPage = -1;

    //Start Hrb(06/30/2009): Added to change the lesson status. Set it as Failed only when attempts are more than 3 for all chapters 
    //and status is Failed even for any single chapter.
    if (document.progress.OnlineUser) {
      if (isFailed())
        setDetails("LESSON_STATUS", "failed");

    }
    //End Hrb(06/30/2009): Added to change the lesson status. Set it as Failed only when attempts are more than 3 for all chapters 
    //and status is Failed even for any single chapter.

    //hrb start: added to update test attempts
    ChangeTestAttemptStatus(finalTestStatus);
    //hrb end: added to update test attempts

    arrChapterTestAttemptStatus[0] = gbl_strChapterTestAttemptStatus;
    UpdateProgressData();
    // clearing the seletions for chapter test question for fail.
    resetTest();

  }

}

//Hrb: Final Exam
function displayFinalExamFailPage() {
  if (noOfattempts >= testAttempts) {
    // hrb start : added for new GUI
    if (parent.frames.frame_a.document.getElementById("attemptsleft") != null) {
      parent.frames.frame_a.document.getElementById("attemptsleft").innerHTML = NO_ATTEMPTS_LEFT_MSG + " ";
    }
    parent.frames.frame_a.document.getElementById("nomoreAttempts").style.visibility = "";
    //hrb end : added for new GUI
    $("#retake").removeClass("btnnormaldefault").addClass("btnNormalInactive");
  }
  else {
    var attemptsleft = testAttempts - parseInt(noOfattempts);
    if (parent.frames.frame_a.document.getElementById("attemptsleft") != null) {
      if (attemptsleft <= 1) {
        parent.frames.frame_a.document.getElementById("attemptsleft").innerHTML = attemptsleft + " " + MORE_ATTEMPT + " ";
      }
      else {
        parent.frames.frame_a.document.getElementById("attemptsleft").innerHTML = attemptsleft + " " + MORE_ATTEMPTS + " ";
      }
    }
    parent.frames.frame_a.document.getElementById("nomoreAttempts").style.visibility = "hidden";
  }
  document.getElementById("scorepercent").innerHTML = document.getElementById("scorepercent").innerHTML + "" + gbl_CurrentTestScore + "%";
}
//Hrb: Final Exam 

function ShowFinalExam() {
  //hrb start:show popup if course is expired
  if (isExpired) {
    document.getElementById("testPopUpL1").style.textAlign = "center";
    showAlertPopup(COURSE_EXPIRE, COURSE_HAS_EXPIRED);
    return;
  }
  //hrb end:show popup if course is expired
  //start Hrb(05/25/2009): Added for course previewer
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
    showCoursePreviewPopUp();

    isDemoCoursePopUpOnNextClick = true;
    return;
  }
  //End Hrb(05/25/2009): Added for course previewer

  //hrb start : Added to set current chapter as last chapter
  CurrentChapter = TotalChapters;
  //hrb end : Added to set current chapter as last chapter

  //HRB: Start of code to set status of preliminary pages
  updatePreliminaryPageStatusFromOutline();
  //HRB: End of code to set status of preliminary pages

  if (outlineflag) {
    document.getElementById("lbltestPopUpTitle").innerHTML = FINAL_EXAM;
    // Added to display the TestPopUp window in Firefox

    if (noOfAttemptedTests[CurrentChapter - 1] == testAttempts || noOfattempts == testAttempts) {
      var finalExamAlertMsg = FINALEXAM_FAIL_INFO_PART1 + testAttempts + FINALEXAM_FAIL_INFO_PART2;
      showAlertPopup(FINAL_EXAM, finalExamAlertMsg);
      return;
    }
    else if (noOfAttemptedTests[CurrentChapter - 1] >= CHAPTER_TEST_PASSED || noOfattempts >= CHAPTER_TEST_PASSED) {

      showAlertPopup(FINAL_EXAM, FINALEXAM_PASS_INFO);
      return;
    }
  }
  if (!isChapterTestPageShown) {
    //hrb:changes for enabling next button
    document.getElementById("NextButton").style.display = "";
    document.getElementById("NextButtonDisabled").style.display = "none";
    document.getElementById("btnNext").style.display = "";
    //hrb:end of changes for enabling next button
    fnShowChapterTestDescrPage();
    return;
  }
  else {
    isChapterTestPageShown = false;
  }

  testDescriptionStr = CurrentChapter + ',test_page';
  document.progress.testDescription(testDescriptionStr);
  document.progress.Bookmark(0);

  TestInit();
  CurrentTestQuestion = 0;
  document.getElementById(currentDivId).innerHTML = "";

  //hrb start : Changes to enable menu's on test pages
  if (!scorm) {
    document.getElementById("searchText").style.visibility = '';
    //  document.getElementById("searchbuttonL").style.visibility = '';
  }
  //hrb start : Changes to enable menu's on test pages
  // document.getElementById("controlpanel").style.visibility = 'visible';

  document.getElementById("questionControlPanel").style.visibility = 'hidden';
  document.getElementById("showQuestionNumber").style.visibility = 'visible';
  enableSubmitTest = false;
  document.getElementById("submittest_disable").style.visibility = 'visible';
  document.getElementById("submittest").style.visibility = 'hidden';
  document.getElementById("subchaptertitle").innerHTML = "";
  //hrb:changes for next and prev button
  // PrevButton.innerHTML = "<img src='common/images/test_prevgray.gif' border=0>"
  //NextButton.innerHTML = ""
  document.getElementById("PrevButton").style.display = "none";
  document.getElementById("NextButton").style.display = "";
  document.getElementById("PrevButtonDisabled").style.display = "";
  document.getElementById("NextButtonDisabled").style.display = "none";
  document.getElementById("btnNext").style.display = "";
  document.getElementById("btnBack").style.display = "none";
  //hrb:end of changes for next and prev button
  if (isNotNullOrUndefined("outlineL") && document.getElementById("outlineL").style.pixelLeft > 200) {
    // Outline is out, so control is here because user clicked on link in outline to test
    mode = "starttest";
  }
  else {
    parent.frames.frame_b.document.location.href = "starttest.htm";
  }

  //get the chapters randomly from total chapters
  GenerateQuestions();

  GenerateQuestionComboBox();

  //Start Hrb(06/16/2009): Added for preserving test questions
  fnLoadAttemptedQuestStyle();
  //End Hrb(06/16/2009): Added for preserving test questions

  ShowFinalExamTestQuestion(1);

}

function GetRandomQuestionsFromChapters() {
  var i;

  //Start Hrb(06/16/2009): Added for preserving test questions
  var questionToPick;
  var questionCount = 0;
  var indexCnt = 0;
  var l_ChapterQuestion;

  tempFinalExamQuestions.length = finalExamTotalQuestions;

  finalQuestions.length = 0;

  for (var index = 0; index < finalExamTotalQuestions; index++) {
    finalQuestions[index] = "";
    tempFinalExamQuestions[index] = "";
  }
  //End Hrb(06/16/2009): Added for preserving test questions

  for (i = 0; i < TotalChapters; i++) {
    var TestQuestions = new Array();
    var NumberPicked = 0
    var NumberOfTestQuestions = TestQuestionsArray[parseInt(i, 10)];

    questionCount = 0;

    for (var cnt = 0; cnt <= NumberOfTestQuestions - 1; cnt++) {
      //Start Hrb(06/16/2009): Added for preserving test questions
      TestQuestions[cnt] = "0"
      //End Hrb(06/16/2009): Added for preserving test questions
    }

    //Start Hrb(06/16/2009): Added for preserving test questions
    l_ChapterQuestion = arrChapterQuestion[i].length;
    for (var indexQ = 0; indexQ < l_ChapterQuestion; indexQ++) {
      var question = arrChapterQuestion[parseInt(i, 10)][indexQ];
      var response = arrChapterQuestionResponse[parseInt(i, 10)][indexQ];
      var result;

      if (question != "") {
        question = question.substr(1);
        TestQuestions[question - 1] = "1" + "~" + indexQ;
        questionCount++;

        //initiate the TestQuestion.correct and TestQuestion.Answer array
        result = response.charAt(0);

        if (result == "C") {
          TestQuestion[indexQ].Correct = true;
        } else if (result == "I") {
          TestQuestion[indexQ].Correct = false;
        }

        TestQuestion[indexQ].Answer = response.substr(1);
      }
    }

    questionToPick = parseInt(NoOfQuestionsToDisplayArray[i]) - parseInt(questionCount);
    //End Hrb(06/16/2009): Added for preserving test questions

    //while(NumberPicked < NoOfQuestionsToDisplayArray[i])
    while (NumberPicked < questionToPick) {
      r = NumberOfTestQuestions * Math.random() + 1;
      temp = r.toString();
      r = parseInt(temp, 10);
      if (TestQuestions[r - 1] == "0") {
        TestQuestions[r - 1] = "1";
        NumberPicked++;
      }

    }

    //Start Hrb(06/16/2009): Added for preserving test questions
    arrFinalQuestions = new Array(parseInt(finalExamTotalQuestions))

    var str = "";

    for (var j = 0; j <= NumberOfTestQuestions - 1; j++) {
      var sequence = "";

      if (TestQuestions[j].indexOf("~") != -1) {
        sequence = TestQuestions[j].split("~")[1];
        var k = j + 1;
        if (k < 10) {
          str = str + "0" + k + " ";
          finalQuestions[sequence] = parseInt(i, 10) + 1 + "|" + "0" + k;

        }
        else {
          str = str + k + " ";
          finalQuestions[sequence] = parseInt(i, 10) + 1 + "|" + k;
        }
      }
    }

    //End Hrb(06/16/2009): Added for preserving test questions
    for (var j = 0; j <= NumberOfTestQuestions - 1; j++) {
      if (TestQuestions[j] == "1") {
        var k = j + 1;
        if (k < 10) {
          str = str + "0" + k + " ";
          tempFinalExamQuestions[indexCnt] = parseInt(i, 10) + 1 + "|" + "0" + k;
          indexCnt++;

        }
        //End Hrb(06/16/2009): Added for preserving test questions

        else {
          str = str + k + " ";
          tempFinalExamQuestions[indexCnt] = parseInt(i, 10) + 1 + "|" + k;
          indexCnt++;

        }
      }
    }
    //End Hrb(06/16/2009): Added for preserving test questions
  }
}

function RandomizeArray(myArray) {
  var i = myArray.length;
  if (i == 0)
    return false;

  while (--i) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempi = myArray[i];
    var tempj = myArray[j];
    myArray[i] = tempj;
    myArray[j] = tempi;
  }
}

function GenerateQuestions() {
  var lastIndexFound = 0;

  //Get random questions from each chapter

  if (gbl_TestQuestionArray == "")
    GetRandomQuestionsFromChapters();
  else {
    finalQuestions = gbl_TestQuestionArray;
    TestQuestion.length = 0;

    //initializing TesQuestion array
    for (i = 0; i < finalQuestions.length; i++)
      TestQuestion[i] = new TestQ("", false);

    //creating TestQuestino array in case where we are restoring questions from suspend data.
    for (i = 0; i < TotalChapters; i++) {
      var result;
      for (j = 0; j < finalQuestions.length; j++) {
        var response = arrChapterQuestionResponse[i][j];
        if (response != "") {
          result = response.charAt(0);
          if (result == "C")
            TestQuestion[j].Correct = true;
          else if (result == "I")
            TestQuestion[j].Correct = false;

          TestQuestion[j].Answer = response.substr(1);
        }
      }
    }
  }

  //Start Hrb(06/16/2009): Added for preserving test questions

  RandomizeArray(tempFinalExamQuestions);
  gbl_TestQuestionArray = finalQuestions;

  for (var index = 0; index < parseInt(tempFinalExamQuestions.length, 10); index++) {
    if (tempFinalExamQuestions[index] != "") {
      for (var cnt = lastIndexFound; cnt < finalExamTotalQuestions; cnt++) {
        if (finalQuestions[cnt] == "") {
          finalQuestions[cnt] = tempFinalExamQuestions[index];
          lastIndexFound = cnt;
          break;

        }
      }
    }
  }

  for (i = 0; i < finalExamTotalQuestions; i++) {
    if (TestQuestion[i].Answer == "")
      break;
  }

  if (i == finalExamTotalQuestions) {
    enableSubmitTest = true;
    document.getElementById("submittest").style.visibility = 'visible';
    document.getElementById("submittest_disable").style.visibility = 'hidden';
  }
  else {
    enableSubmitTest = false;
    document.getElementById("submittest").style.visibility = 'hidden';
    document.getElementById("submittest_disable").style.visibility = 'visible';
  }
  //End Hrb(06/16/2009): Added for preserving test questions

}

function ShowFinalExamTestQuestion(index) {

  if (finalQuestions.length == 0) {
    return;

  }
  else {

    document.getElementById("showQuestionNumber").style.top = 75;
    document.getElementById("showQuestionNumber").style.left = 70;

    if (CurrentTestQuestion != 0) {

      GradeTestQuestion();
    }

    CurrentTestQuestion = index;

    var chapterQuestion = finalQuestions[index - 1].split("|");

    var ch = "0" + chapterQuestion[0];
    ch = ch.substring(ch.length - 2, ch.length);

    parent.frames.frame_b.document.location = "t" + ch + "-" + chapterQuestion[1] + ".htm";

    //Start Hrb(06/16/2009): Added for preserving test questions
    //set the testdescriptionstr
    testDescriptionStr = ch + "~T" + chapterQuestion[1] + "~" + index;
    //End Hrb(06/16/2009): Added for preserving test questions

    document.getElementById("outlinebuttonL").innerHTML = FINAL_EXAM + " " + TEST + "<br><br> " + QUESTION + index + " " + OF + finalExamTotalQuestions;

    //hrb:changes for next and prev button
    document.getElementById("PrevButton").style.display = "";
    document.getElementById("NextButton").style.display = "";
    document.getElementById("PrevButtonDisabled").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "none";
    document.getElementById("btnNext").style.display = "";
    document.getElementById("btnBack").style.display = "";

    //hrb:end of changes for next and prev button
    if (CurrentTestQuestion == 1) {
      //hrb  start : changes to move previous from Final Exam to chapter page
      document.getElementById("PrevButtonDisabled").style.display = "none";
      document.getElementById("PrevButton").style.display = "";

      document.getElementById("btnBack").style.display = "";
      //hrb end : changes to move previous from Final Exam to chapter page
      //hrb:end of changes for prev button
    }

    if ((CurrentTestQuestion == 1) && (mode == "review" || mode == "retake")) {

      document.getElementById("btnBack").style.display = "none";
    }


    if ((CurrentTestQuestion == finalExamTotalQuestions)) {
      //hrb:changes for next and prev button
      document.getElementById("NextButtonDisabled").style.display = "";
      document.getElementById("NextButton").style.display = "none";

      document.getElementById("btnNext").style.display = "none";
      //hrb:end of changes for next and prev button
    }

    if (mode == "study")
      mode = "test";

    document.getElementById('coursetitle').innerHTML = courseTitle;
    AdjustCourseTitle(courseTitle);

    var selectedOption = "optq" + CurrentTestQuestion;

    if (document.getElementById(selectedOption)) {
      document.getElementById(selectedOption).selected = true;
    }
    document.getElementById("showQuestionNumber").innerHTML = "<h1>" + TEST_QUESTION_BYCOURSE + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + finalExamTotalQuestions + "</h1>";
    document.getElementById("showQuestionNumber").style.width = 875;
    document.getElementById("divPageTitle").innerHTML = " " + FINAL_EXAM + ", " + TEST + " Q " + CurrentTestQuestion;
  }
}

function GenerateQuestionComboBox() {

  var combo = document.getElementById('selQuestion');
  var finalExamQuestionCombo_box = document.getElementById('selQuestion');

  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    finalExamQuestionCombo_box.innerHTML = "";

    // Add questions
    for (i = 1; i <= finalExamTotalQuestions; i++) {
      var choice = document.createElement('option');
      choice.id = "optq" + i;
      choice.value = i;
      choice.appendChild(document.createTextNode(QUESTION + ' ' + i));
      finalExamQuestionCombo_box.appendChild(choice);
    }
  }
  else {
    finalExamQuestionCombo_box.innerHTML = "";

    // Add questions
    var NoOfQuesToDisplayForChap = NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1];
    for (i = 1; i <= NoOfQuesToDisplayForChap; i++) {
      var choice = document.createElement('option');

      choice.id = "optq" + i;
      choice.value = i;
      choice.appendChild(document.createTextNode(QUESTION + ' ' + i));
      finalExamQuestionCombo_box.appendChild(choice);
    }

  }
}

function ShowQuestions(index) {
  isNextPrevious = true;
  //hrb end 20/5/2009: added to hide the outline menu on going to othere question from combo box
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    ShowFinalExamTestQuestion(index);
  }
  else {
    ShowTestQuestion(index);
  }

}

function GetTotalNumberOfQuestionToDisplay() {
  if (NoOfQuestionsToDisplayArray.length > 0) {
    for (var index = 0; index < NoOfQuestionsToDisplayArray.length; index++)
      finalExamTotalQuestions += parseInt(NoOfQuestionsToDisplayArray[index], 10);
  }
}

function UpdateFinalExamStatus(strFinalExamStatus) {
  if (strFinalExamStatus == "-1") {
    document.getElementById("istatFE").className = NOTSTARTED_STATUS_CLASS;
  }
  else if (strFinalExamStatus == "0") {
    document.getElementById("istatFE").className = INCOMPLETED_STATUS_CLASS;
  }
  else if (strFinalExamStatus == "1") {
    document.getElementById("istatFE").className = COMPLETED_STATUS_CLASS;
  }
  finalExamStatus = strFinalExamStatus;
}
//end Hrb: Added final exam related functions


//hrb start 4/6/2009: : function added to checked, if clickAnd Reveal is clicked from search popup
function isClickedFromSearch(evt) {
  if (document.getElementById("searchpopupL").style.visibility == "visible") {
    // Temporary variables to hold mouse x-y pos.s
    var tempX = 0;
    var tempY = 0;
    var e = (window.event) ? window.event : evt;
    tempX = e.clientX + document.body.scrollLeft;
    tempY = e.clientY + document.body.scrollTop;
    if (tempX < 0) { tempX = 0 }
    if (tempY < 0) { tempY = 0 }
    var left = parseInt(document.getElementById("searchpopupL").style.left);
    var top = parseInt(document.getElementById("searchpopupL").style.top);
    var clientHeight = parseInt(document.getElementById("searchpopupL").clientHeight);
    var clientWidth = parseInt(document.getElementById("searchpopupL").clientWidth);
    //check the co-ordinates of click
    if (tempX >= left && tempX <= left + clientWidth && tempY >= top && tempY <= top + clientHeight) {
      return true;
    }
    else {
      return false;
    }
  }
  return false;

}

//hrb:function added to show the certificate page on completion of course
function ShowCertificate() {
  var win;

  //hrb start:open window if course is expired
  if (isExpired) {
    if (document.progress.OnlineUser) {
      /*Start Hrb(08/13/09): Added the function call to open the link/pop up on certificate web page */
      if (!g_isOLP)
        OpenCertificateLink(gbl_CourseCertificateURI);
    }

    return;
  }
  //hrb end:open window if course is expired
  //hrb start 20/5/2009: added to close the clickAnd Reveal popup on click of certificate menu
  if (isRevalClicked) {
    document.getElementById("ClickRevealPopUpLx").onclick();
    document.getElementById("ClickRevealPopUpL").onclick();
    isRevalClicked = false;
  }
  //hrb start 20/5/2009: added to close the clickAnd Reveal popup on click of certificate menu

  if (VisibleMenu != "") {
    if (VisibleMenu != "searchTextButtonL") {
      document.getElementById(VisibleMenu).style.visibility = 'hidden';
      document.getElementById(VisibleMenu + "x").style.visibility = 'hidden';

      var tmpDivStr = VisibleMenu.substring(0, VisibleMenu.length - 1);

      if (document.getElementById(tmpDivStr + "buttonLD"))
        document.getElementById(tmpDivStr + "buttonLD").style.display = "none";
      if (document.getElementById(tmpDivStr + "buttonL"))
        document.getElementById(tmpDivStr + "buttonL").style.display = "";

      if (VisibleMenu == "searchL") {
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = SEARCH_TOP_POS;
      }
      // start hrb 22/Apr/2009: Added for bookmark pop menu
      else if (VisibleMenu == "bookmarkL") {
        // hrb: Reset the top position of the bookmark menu item
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = BOOKMARK_TOP_POS;
      }
      // end hrb 22/Apr/2009: Added for bookmark pop menu

      // start hrb 23/Apr/2009: Added for print pop menu
      else if (VisibleMenu == "printL") {
        // hrb: Reset the top position of the print menu item
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = PRINT_TOP_POS;
      }
      // end hrb 23/Apr/2009: Added for print pop menu
      else {
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = DEFAULT_TOP_POS;
      }
      if (VisibleMenu == "searchL") {
        document.getElementById("searchTextButtonLx").onclick();
      }
    }
    else {
      document.getElementById("searchTextButtonLx").onclick();
    }
  }

  //Hrb(07/09/2009): Added to check for online user as to show blank page in Online player instead of pop up

  if (document.progress.OnlineUser) {
    /*Start Hrb(08/23/09): Added the functions to open the link/pop up on certificate web page */
    if (g_isOLP) {
      var isInternetConnected = true;
      var sub = getSubscription();

      if (sub != null) {
        //if not connected to internet then show the certificate pop up, else the OLP would open the web page
        gbl_ServerURI = sub.serverURI;
        checkInternetConnected(gbl_ServerURI);
      }
    }
    else
      OpenCertificateLink(gbl_CourseCertificateURI);

    /*End Hrb(08/23/09): Added the functions to open the link/pop up on certificate URL*/

  } else {
    OpenCertificatePopUp();
  }


}
//hrb:end of function added to show the certificate page on completion of course

//hrb:function added to check whether course is completed
function isCourseCompleted() {
  if (noOfattempts == CHAPTER_TEST_PASSED)
    return true;
  else
    return false;
}
//hrb: end of function added to check whether course is completed

//hrb: function added for closing the certifcatediv
function CloseCertificateDiv() {
  //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
  if (iscertificateclicked && lessonMode != LESSON_PILOTTESTING_MODE) {
    document.getElementById("certificatebuttonL").style.display = "";
    document.getElementById("certificatebuttonLD").style.display = "none";
    iscertificateclicked = false;
    document.getElementById("CertificatepopupL").style.visibility = 'hidden';
    document.getElementById("CertificatepopupL1").innerHTML = "";

  }

  //HRB: Added for mLearning Courses.
  if (iscertificateclicked && lessonMode != LESSON_PILOTTESTING_MODE) {
    iscertificateclicked = false;
    closeCertificateFrame();

  }
}
function CloseTranscriptDiv() {

}
//hrb:end of function added for closing the certifcatediv

//start hrb:Added for match the pair question type

function fnSetColQuestOpt(questColOpt) {
  if (document.getElementById("imgMatchCol" + questColOpt)) {
    document.getElementById("imgMatchCol" + questColOpt).src = "common/images/match-selected.gif";

    if (gbl_ColQuestOpt != "") {
      if (document.getElementById("imgMatchCol" + gbl_ColQuestOpt)) {
        document.getElementById("imgMatchCol" + gbl_ColQuestOpt).src = MATCHPAIR_DESELECTED;
      }
    }
  }
  gbl_ColQuestOpt = questColOpt;
  if (gbl_ColAnsOpt != "") {
    addMatchPairAns(gbl_ColQuestOpt, gbl_ColAnsOpt);
  }
}

function fnSetColAnsOpt(ansColOpt) {
  var objImgMatchCol = document.getElementById("imgMatchCol" + ansColOpt);

  if (objImgMatchCol) {
    objImgMatchCol.src = MATCHPAIR_SELECTED;
    if (gbl_ColQuestOpt != "") {
      if (document.getElementById("imgMatchCol" + gbl_ColAnsOpt)) {
        document.getElementById("imgMatchCol" + gbl_ColAnsOpt).src = MATCHPAIR_DESELECTED;
      }
    }
  }
  gbl_ColAnsOpt = ansColOpt;
  if (gbl_ColQuestOpt != "") {
    addMatchPairAns(gbl_ColQuestOpt, gbl_ColAnsOpt);
  }
}

function addMatchPairAns(matchPairColQuest, matchPairColAns) {
  var questAnsMatchPairArr = new Array();
  var cntOldMatchPair;

  if (gbl_QuestAnsPairStr.indexOf(",") != -1) {
    questAnsMatchPairArr = gbl_QuestAnsPairStr.split(",");
    gbl_QuestAnsPairStr = "";

    for (cntOldMatchPair = 0; cntOldMatchPair < questAnsMatchPairArr.length; cntOldMatchPair++) {
      if (questAnsMatchPairArr[cntOldMatchPair] != "") {
        if (questAnsMatchPairArr[cntOldMatchPair].indexOf(matchPairColQuest) == -1 && questAnsMatchPairArr[cntOldMatchPair].indexOf(matchPairColAns) == -1) {
          gbl_QuestAnsPairStr = gbl_QuestAnsPairStr + questAnsMatchPairArr[cntOldMatchPair] + ",";
        }
      }
    }
  }

  gbl_QuestAnsPairStr = gbl_QuestAnsPairStr + matchPairColQuest + "~" + matchPairColAns + ",";

  //hrb start 28-5-2009: added to enable  submit answer button after matching all pairs
  if (gbl_QuestAnsPairStr.split("~").length > cntMatchPair) {
    fnSubmitAnswer("match-pair");
  }
  else {
    fnEnableSubmitAnswer(false);
  }
  //hrb end 28-5-2009: added to enable  submit answer button after matching all pairs
  gbl_ColQuestOpt = "";
  gbl_ColAnsOpt = "";
  drawMatchPair();
}

function drawMatchPair() {
  var matchOpt;
  var matchOptPair = gbl_QuestAnsPairStr.split(",");
  var cntPair;
  var optX1;
  var optY1;
  var optX2;
  var optY2;
  jg.clear();

  for (cntPair = 0; cntPair < matchOptPair.length; cntPair++) {
    matchOpt = matchOptPair[cntPair].split("~");
    if (matchOpt.length >= 2) {
      if (document.getElementById("imgMatchColOpt" + matchOpt[0]) && document.getElementById("imgMatchColOpt" + matchOpt[1])) {
        if (document.getElementById("imgMatchCol" + matchOpt[0])) {
          document.getElementById("imgMatchCol" + matchOpt[0]).src = MATCHPAIR_DESELECTED;
        }

        if (document.getElementById("imgMatchCol" + matchOpt[1])) {
          document.getElementById("imgMatchCol" + matchOpt[1]).src = MATCHPAIR_DESELECTED;
        }
        if (isIE) {
          optX1 = document.getElementById("imgMatchColOpt" + matchOpt[0]).offsetLeft + document.getElementById(currentDivId).offsetLeft + document.getElementById("matchContent").offsetLeft + document.getElementById("tdMatchOptChoice" + matchOpt[0]).offsetWidth + 80;
          optY1 = document.getElementById("imgMatchColOpt" + matchOpt[0]).offsetTop + document.getElementById(currentDivId).offsetTop + document.getElementById("matchContent").offsetTop;
          optX2 = document.getElementById("imgMatchColOpt" + matchOpt[1]).offsetLeft + document.getElementById(currentDivId).offsetLeft + document.getElementById("matchContent").offsetLeft + document.getElementById("tdMatchOptChoice" + matchOpt[1]).offsetWidth - 40;
          optY2 = document.getElementById("imgMatchColOpt" + matchOpt[1]).offsetTop + document.getElementById(currentDivId).offsetTop + document.getElementById("matchContent").offsetTop;
        }
        else {
          optX1 = document.getElementById("imgMatchColOpt" + matchOpt[0]).offsetLeft + document.getElementById(currentDivId).offsetLeft + document.getElementById("matchContent").offsetLeft + document.getElementById("tdMatchOptChoice" + matchOpt[0]).offsetWidth + 10;
          optY1 = document.getElementById("imgMatchColOpt" + matchOpt[0]).offsetTop + document.getElementById(currentDivId).offsetTop + document.getElementById("matchContent").offsetTop + 8;
          optX2 = document.getElementById("imgMatchColOpt" + matchOpt[1]).offsetLeft + document.getElementById(currentDivId).offsetLeft + document.getElementById("matchContent").offsetLeft;
          optY2 = document.getElementById("imgMatchColOpt" + matchOpt[1]).offsetTop + document.getElementById(currentDivId).offsetTop + document.getElementById("matchContent").offsetTop + 8;
        }
        jg.setColor("#000000"); // black
        jg.drawLine(optX1, optY1, optX2, optY2); // co-ordinates related to "myCanvas"
        jg.paint();
      }
    }
  }
}


function fnCreateDrawingPanel() {
  jg = new jsGraphics(currentDivId);
  gbl_QuestAnsPairStr = "";
  gbl_ColQuestOpt = "";
  gbl_ColAnsOpt = "";
}
//end hrb:Added for match the pair question type

//hrb:function to adjut the  course title
function AdjustCourseTitle(title) {

  var objCoursetitle = document.getElementById("coursetitle");
  var fixedDivSize;
  var currentDivSize;
  var currentFontSize;
  var intFontSize;

  objCoursetitle.innerHTML = title;
  objCoursetitle.style.height = "auto";
  objCoursetitle.style.top = (document.getElementById('header').offsetHeight / 2) - (objCoursetitle.offsetHeight / 2);
  fixedDivSize = 42;
  currentDivSize = objCoursetitle.clientHeight;
  currentFontSize = parseFloat(window.getComputedStyle(objCoursetitle, null).getPropertyValue('font-size')) + "px";
  intFontSize = currentFontSize.substring(0, 2);

  while (currentDivSize > fixedDivSize) {
    objCoursetitle.style.fontSize = eval("(intFontSize--)+'px'");
    currentDivSize = objCoursetitle.clientHeight;
  }

  parent.parent.document.getElementById('loadMyPage').style.display = "none";
  objCoursetitle.style.visibility = 'visible';

}
//hrb:end of function to adjut the  course title

//Star Hrb: (22/4/2009) Functions for Preliminary page status
function updatePreliminaryPageStatus(pageNo, status) {
  var l_pageNo = parseInt(pageNo, 10);

  if (l_pageNo == 0)
    updateStatus("Title Page", status);
  else if (l_pageNo == 1)
    updateStatus("Introduction Page1", status);
  else if (l_pageNo == 2)
    updateStatus("Introduction Page2", status);
  else if (l_pageNo == 3)
    updateStatus("Introduction Page3", status);
}

function updatePreliminaryPageStatusFromOutline() {

  if (InCompletedChapterCodeStr.indexOf("Ti,") != -1) {
    updatePreliminaryPageStatus(0, COMPLETED_STATUS_IMG);
  }
  if (InCompletedChapterCodeStr.indexOf("We1,") != -1)

    updatePreliminaryPageStatus(1, COMPLETED_STATUS_IMG);

  if (InCompletedChapterCodeStr.indexOf("We2,") != -1)

    updatePreliminaryPageStatus(2, COMPLETED_STATUS_IMG);


  if (InCompletedChapterCodeStr.indexOf("Le,") != -1)
    updatePreliminaryPageStatus(3, COMPLETED_STATUS_IMG);

}
//end Hrb: (22/4/2009) Functions for Preliminary page status

//hrb:start function to close the search box
function fnCloseSearchBox() {
  Menu('searchL', document.getElementById("searchL").clientWidth, 200, 0, 0);

  document.getElementById("OuterBlock").style.visibility = 'hidden';

  if (document.getElementById("searchpopupL").style.visibility == "visible") {
    document.getElementById("searchpopupLx").onclick();
  }

}
//hrb:end function to close the search box

//hrb start : function to update the test attempts
function ChangeTestAttemptStatus(testStatus) {
  var perChapterStatus;
  var l_currentChapter = parseInt(CurrentChapter) - 1;

  if (FinalExam != EXAM_POSITION_BYCOURSE) {
    //hrb: add the status for current chapter in global string for chapter test
    if (noOfattempts == 1) {
      g_TestAttempts = testStatus;
    }
    else
      g_TestAttempts = g_TestAttempts + "$" + testStatus;

  }
  else {
    //hrb: add the status for current test in global string for final test
    if (noOfattempts == 1) {
      g_TestAttempts = testStatus;
    }
    else
      g_TestAttempts = g_TestAttempts + "$" + testStatus;

  }
  //hrb : calculate the course score
  CalculateCourseScore();
}
//hrb end : function to update the test attempts

//hrb start: function to calculate the test score for course course
function CalculateCourseScore() {
  var perChapterAttempts;
  var totalCourseScore = 0;
  var perAttemptsDetail;
  var lastAttemptDetail;
  var lastAttemptScore;

  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    lastAttemptDetail = g_TestAttempts.split("$");
    lastAttemptScore = lastAttemptDetail[lastAttemptDetail.length - 1].substring(0, lastAttemptDetail[lastAttemptDetail.length - 1].indexOf(":"));

    if (!isNaN(parseInt(lastAttemptScore)))
      totalCourseScore = parseInt(lastAttemptScore);
  }
  else {
    //hrb: for final exam
    lastAttemptDetail = g_TestAttempts.split("$");
    lastAttemptScore = lastAttemptDetail[lastAttemptDetail.length - 1].substring(0, lastAttemptDetail[lastAttemptDetail.length - 1].indexOf(":"));

    if (!isNaN(parseInt(lastAttemptScore)))
      totalCourseScore = parseInt(lastAttemptScore);
  }

  totalCourseScore = parseInt(totalCourseScore);
}
//hrb end: function to calculate the test score for course course
// hrb: EnableDisableLinks is just for cpllinks
function EnableDisableLinks() {
  if (document.progress.OnlineUser) {
    var sub = getSubscription();
    if (sub != null) {
      sub.CurrentDocument = parent.frames.frame_a.document;
      sub.EnableDisableLinks();
    }
  }
}

// hrb: EnableDisablePermalinks is just for permalinks
function EnableDisablePermalinks() {
  if (document.progress.OnlineUser && !g_isOLP) {
    var sub = getSubscription();
    if (sub != null) {
      sub.setPermaLinks();
    }
  }
}

function ViewDocument(id) {
  if (document.progress.OnlineUser) {
    var sub = getSubscription();

    if (sub != null) {
      sub.ViewDocument(id);
    }
  }
}

function ShowSubscriptionMessage() {
  if (document.progress.OnlineUser) {
    var sub = getSubscription();

    if (sub != null) {
      sub.ShowSubscriptionMessage();
    }
  }
}

// start hrb 13/May/2009: Added for Checkpoint Subscriber Information and non Checkpoint Subscriber pop ups
function hideCheckpoint() {
  // REMOVED
}
// end hrb 13/May/2009: Added for Checkpoint Subscriber Information and non Checkpoint Subscriber pop ups

//hrb start 18/5/2009: function added to change the bandwidth
function fnBandwidthChanged() {
  closePopUp();
  var objRdohighbandwidth = document.getElementById('rdohighbandwidth');
  var objRdolowbandwidth = document.getElementById('rdolowbandwidth');

  if (objRdohighbandwidth.checked) {
    selectedBandwidth = objRdohighbandwidth.value;
  }
  else if (objRdolowbandwidth.checked) {
    selectedBandwidth = objRdolowbandwidth.value;
  }
  LoadContent();
}

//hrb end 18/5/2009: function added to change the bandwidth
function showTranscript() {
  //hrb start 20/5/2009: added to close the clickAnd Reveal popup on click of transcript menu
  if (isRevalClicked) {
    document.getElementById('ClickRevealPopUpLx').onclick();
    document.getElementById('ClickRevealPopUpL').onclick();
    isRevalClicked = false;
  }
  //hrb start 20/5/2009: added to close the clickAnd Reveal popup on click of transcript menu
  if (VisibleMenu != "") {
    if (VisibleMenu != "searchTextButtonL") {

      document.getElementById(VisibleMenu).style.visibility = 'hidden';
      document.getElementById(VisibleMenu + "x").style.visibility = 'hidden';

      var tmpDivStr = VisibleMenu.substring(0, VisibleMenu.length - 1);

      if (document.getElementById(tmpDivStr + "buttonLD"))
        document.getElementById(tmpDivStr + "buttonLD").style.display = "none";
      if (document.getElementById(tmpDivStr + "buttonL"))
        document.getElementById(tmpDivStr + "buttonL").style.display = "";

      if (VisibleMenu == "searchL") {
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = SEARCH_TOP_POS;
        document.getElementById('searchTextButtonLx').onclick()
      }
      else if (VisibleMenu == "bookmarkL") {
        // hrb: Reset the top position of the bookmark menu item
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = BOOKMARK_TOP_POS;
      }
      else if (VisibleMenu == "printL") {
        // hrb: Reset the top position of the print menu item
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = PRINT_TOP_POS;
      }
      else {
        if (document.getElementById(VisibleMenu))
          document.getElementById(VisibleMenu).style.top = DEFAULT_TOP_POS;
      }
    }
    else {
      document.getElementById('searchTextButtonLx').onclick();
    }
  }
  document.getElementById('transcriptbuttonLD').style.display = "";
  document.getElementById('transcriptbuttonLDis').style.display = "none";
  document.getElementById('transcriptbuttonL').style.display = "none";
  //hrb: Added to hide glossary terms description popup

  document.getElementById('popupL').style.visibility = 'hidden';
  //hrb: End of Added to hide glossary terms description popup

  //hrb: Added to hide help description popup
  document.getElementById('helpPopUpL').style.visibility = 'hidden';
  document.getElementById('testPopUpLx').onclick();

  //hrb start : added to hide course preview popup on content load
  document.getElementById("coursePreviewerPopUpLx").onclick();
  //hrb start : added to hide course preview popup on content load

  //hrb: End of Added to hidehelp description popup

  //hrb:added to hide the outline if expanded
  if (document.getElementById('outlineL').style.pixelLeft > 200)
    OutlineShowHide();

  if (!isIE && outlineflag)
    OutlineShowHide();

  //hrb:end of added to hide the outline if expanded
  if (document.getElementById('authorBioPopUpL').style.visibility = 'visible') {
    document.getElementById('authorBioPopUpLx').onclick();
  }

  document.getElementById('transcriptpopupL').style.visibility = "visible";

  if (isIE) {
    document.getElementById('transcriptpopupL').style.top = 583;
  }
  document.getElementById('transcriptpopupL').style.top = 588;

  if (!isIE) {
    document.getElementById('transcriptpopupL1').style.width = 836;
    document.getElementById('transcriptpopupL1').style.height = 46;
    document.getElementById('transcriptPopUpTitle').style.height = 13;
  }

  //hrb start 20/5/2009: added to close the certificate popup on click of transcript menu
  if (document.getElementById('CertificatepopupL').style.visibility == "visible") {
    document.getElementById('CertificateLx').onclick();
  }
  //hrb end 20/5/2009: added to close the certificate popup on  click of transcript menu

}


//hrb start 27-5-2009: function added to disable ctrl key combination and F5
function fnDisableKeys(e) {
  //list all CTRL + key combinations you want to disable
  var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j', 'r');
  var key;
  var isCtrl;

  var objProductBehaviour = document.getElementById("desired-product-behavior");

  if (window.event) {
    key = window.event.keyCode;     //IE
    //check for F5
    if (window.event.keyCode == 116) {
      window.event.returnValue = false;
      window.event.keyCode = 0;
      return false;
    }

    if (window.event.keyCode == 9) {
      return false;
    }

    //start Supress the enter key on practice excercise with text box 
    if (objProductBehaviour != null) {
      if ((document.forms[0].getElementsByTagName('input')[0].type == 'text') && (objProductBehaviour.value == "exercise"))
        if (window.event.keyCode == 13)
          return false;
    }
    //end Supress the enter key on practice excercise with text box 

    if (window.event.ctrlKey)
      isCtrl = true;
    else
      isCtrl = false;
  }
  else {
    key = e.which;     //firefox
    //check for F5
    if (e.keyCode == 116) {
      return false;
    }

    if (e.keyCode == 9) {
      return false;
    }

    //start Supress the enter key on practice excercise with text box 
    if (objProductBehaviour != null) {
      if ((document.forms[0].getElementsByTagName('input')[0].type == 'text') && (objProductBehaviour.value == "exercise"))
        if (e.keyCode == 13)
          return false;
    }
    //end Supress the enter key on practice excercise with text box 

    if (e.ctrlKey)
      isCtrl = true;
    else
      isCtrl = false;
  }

  //if ctrl is pressed check if other key is in forbidenKeys array
  if (isCtrl) {
    for (i = 0; i < 7; i++) {
      //case-insensitive comparation
      if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

//hrb end 27-5-2009: function added to disable ctrl key combination and F5



function mouseDown(e) {
  e = e || event;
  if (e.which) {
    if (e.which == 1)
      return true;
    else
      return false;
  }
  else if (e.button) {
    if (e.button == 1)
      return true;
    else
      return false;
  }
}
//End Hrb(06/02/2009): Added to Disable right select menu


//start Hrb(05/25/2009): Added for course previewer
function SetOutlinePanelAttributes() {
  var strElement;

  if ((lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) || isExpired || isHelpCourse) {
    //Get the no. of chapters to show in the course demo
    for (var chapterIndex = parseInt(demoChapters) + 1; chapterIndex <= TotalChapters; chapterIndex++) {
      strElement = 'istat' + chapterIndex;

      setAttributes_mlearning(strElement);

      var l_SubChapters = arrSubChapters[chapterIndex];
      for (var subChapterIndex = 1; subChapterIndex <= l_SubChapters; subChapterIndex++) {
        if (subChapterIndex == l_SubChapters) {
          strElement = 'istat' + chapterIndex + "Test";
        }
        else
          strElement = 'istat' + chapterIndex + String.fromCharCode(eval(64 + subChapterIndex));
        setAttributes_mlearning(strElement, true);
      }
    }
    for (var demoChap = 1; demoChap <= demoChapters; demoChap++) {
      strElement = 'istat' + demoChap + "Test";
      setAttributes_mlearning(strElement, true);
    }
    if (FinalExam == EXAM_POSITION_BYCOURSE)
      setAttributes_mlearning('istatFE');
  }

}

function setAttributes(objElement) {
  var obj = document.getElementById(objElement);
  obj.style.color = "gray";
  obj.onmouseover = "gray";
  obj.onmouseout = "gray";
  obj.title = ""
  obj.style.cursor = "default"
}


function setAttributes_mlearning(objElement, changeOnClick) {
  var obj = document.getElementById(objElement);
  if (obj == null || obj == 'undefined') {
    return;
  }
  var parentObj = obj.parentNode;
  if (isHelpCourse) {
    parentObj.style.display = "none";
    return;
  }

  var childNodes = parentObj.childNodes;

  for (var obCnt = 0; obCnt < childNodes.length; obCnt++) {
    if (childNodes[obCnt] != null && childNodes[obCnt].style != null)
      childNodes[obCnt].style.color = "gray";
  }
  obj.style.color = "gray";

  obj.title = ""
  obj.style.cursor = "default"
}


function fnSetMenuForDemoCourse() {
  var searchEle = document.getElementById("searchText");
  var glossaryEle = document.getElementById("glossaryDiv");
  var bookmarkEle = document.getElementById("bookmarks");
  var bookmarkDivEle = document.getElementById("bookmarkDiv");
  var certificateDivEle = document.getElementById("certificatemain");
  var printDivEle = document.getElementById("print");
  var bookmarkShowDiv = document.getElementById("help");
  var search = document.getElementById("search");
  document.getElementById("outline").style.cursor = 'auto';
  if (searchEle.removeAttribute) {
    $(searchEle).removeAttr("onclick");
  }
  if (glossaryEle.removeAttribute) {
    $(glossaryEle).removeAttr("onclick");
    glossaryEle.getElementsByTagName("*")[0].style.cursor = 'auto';
  }
  if (bookmarkEle.removeAttribute) {
    $(bookmarkEle).removeAttr("onclick");
    bookmarkEle.style.cursor = 'auto';

    setTimeout(function () { document.getElementById("bookmarks-icon").getSVGDocument().getElementsByTagName("svg")[0].removeAttribute("onclick"); document.getElementById("bookmarks-icon").getSVGDocument().getElementsByTagName("svg")[0].style.cursor = 'auto'; }, '100');
  }
  if (bookmarkDivEle.removeAttribute) {
    $(bookmarkDivEle.parentElement).removeAttr("onclick");
    bookmarkDivEle.style.cursor = 'auto';

    setTimeout(function () { document.getElementById("markunmarkbookmark").getSVGDocument().getElementsByTagName("svg")[0].removeAttribute("onclick"); document.getElementById("markunmarkbookmark").getSVGDocument().getElementsByTagName("svg")[0].style.cursor = 'auto'; }, '100');
  }
  if (search.removeAttribute) {
    $(search).removeAttr("onclick");
    search.style.cursor = 'auto';

    setTimeout(function () { document.getElementById("search-icon").getSVGDocument().getElementsByTagName("svg")[0].removeAttribute("onclick"); document.getElementById("search-icon").getSVGDocument().getElementsByTagName("svg")[0].style.cursor = 'auto'; }, '100');
  }
  if (printDivEle.removeAttribute) {
    $(printDivEle).removeAttr("onclick");
    printDivEle.style.cursor = 'auto';

    setTimeout(function () { document.getElementById("print-icon").getSVGDocument().getElementsByTagName("svg")[0].removeAttribute("onclick"); document.getElementById("print-icon").getSVGDocument().getElementsByTagName("svg")[0].style.cursor = 'auto'; document.getElementById("print-icon").getSVGDocument().getElementsByTagName("svg")[0].onclick = function () { return false; } }, '100');
  }

  if (bookmarkShowDiv.removeAttribute) {
    $(bookmarkShowDiv).removeAttr("onclick");
    bookmarkShowDiv.style.cursor = 'auto';
  }
}

//End Hrb(05/25/2009): Added for course previewer


//hrb start:added to close the search result popup
function fnCloseSearchPopup() {
  searchpopupFlag = false;
  document.getElementById('popupL').style.visibility = 'hidden';
  document.getElementById('searchpopupL1').innerHTML = '';
  document.getElementById('searchpopupLx').style.visibility = 'hidden';
  document.getElementById('searchpopupL').style.visibility = 'hidden';
  if (document.frmQuestion)
    fnSubmitAnswer(document.forms[0].getElementsByTagName('input')[0].type, true);

}
//hrb start:added to close the search result popup

//Start Hrb(06/16/2009): Added for preserving test questions
function FillQuestionResponseArray() {
  var tempStr = parent.frames.frame_b.document.location.toString();

  var index = tempStr.toString().lastIndexOf("/");

  tempStr = tempStr.substr(parseInt(index, 10) + 1);

  var chapterNo = tempStr.split("-")[0].toString().substr(1);

  var testQuestionID = tempStr.split("-")[1].split(".")[0];

  var sequence = parseInt(CurrentTestQuestion) - 1;
  var response = "";

  var form = getFormElementFromQuestionDiv(currentDivId);
  if (form.getElementsByTagName('input').length > 1)
    for (var d = 0; d <= form.length - 1; d++) {
      if (form.answer1[d].checked == true) {
        response = response + form.answer1[d].value.toUpperCase();
      }
    }
  else
    response = form.answer1.value.toUpperCase();

  if (response != "") {
    if (response == parent.frames.frame_b.CorrectAnswer) {
      response = "C" + response;
    }
    else {
      response = "I" + response;
    }

    //fill the array
    arrChapterQuestion[chapterNo - 1][sequence] = "T" + testQuestionID;
    arrChapterQuestionResponse[chapterNo - 1][sequence] = response;

  }
  else {
    //fill the array
    arrChapterQuestion[chapterNo - 1][sequence] = "";
    arrChapterQuestionResponse[chapterNo - 1][sequence] = "";
  }
}

function SaveQuestionWithResponses() {
  var strQuestionResponse = "";
  var Qcnt;
  var Ccnt = 0;
  var isTQAttempted;
  var startAttempt;

  //Start Hrb(06/16/2009): Added for preserving test questions
  if (FinalExam == EXAM_POSITION_BYCOURSE)
    startAttempt = arrChaterTestStartAttempt[0];
  //End Hrb(06/16/2009): Added for preserving test questions

  //get the questions with responses 
  for (var indexChap = 0; indexChap < TotalChapters; indexChap++) {
    if (Ccnt > 0)
      strQuestionResponse = strQuestionResponse + ",";

    Qcnt = 0;
    isTQAttempted = false;

    if (FinalExam == EXAM_POSITION_BYCHAPTER) //yes
      startAttempt = arrChaterTestStartAttempt[indexChap];

    var l_ChapterQuestionLength = parseInt(arrChapterQuestion[indexChap].length, 10);
    for (var indexQ = 0; indexQ < l_ChapterQuestionLength; indexQ++) {
      if (arrChapterQuestion[indexChap][indexQ] != "" && arrChapterQuestionResponse[indexChap][indexQ] != "") {
        if (Qcnt > 0)
          strQuestionResponse = strQuestionResponse + "$";

        strQuestionResponse = strQuestionResponse + (parseInt(indexChap) + 1) + "~" + startAttempt + "~" + arrChapterQuestion[indexChap][indexQ] + "~" + (parseInt(indexQ) + 1);

        //set the response
        strQuestionResponse = strQuestionResponse + "|" + arrChapterQuestionResponse[indexChap][indexQ];

        isTQAttempted = true;
        Qcnt++;
      }
    }

    var isStudyQ = false;

    var l_StudyQuestionWithResponseLength = parseInt(arrStudyQuestionWithResponse[indexChap].length, 10);
    for (var indexQ = 0; indexQ < l_StudyQuestionWithResponseLength; indexQ++) {
      if (arrStudyQuestionWithResponse[indexChap][indexQ] != "") {
        if (isTQAttempted || isStudyQ)
          strQuestionResponse = strQuestionResponse + "$";

        strQuestionResponse = strQuestionResponse + arrStudyQuestionWithResponse[indexChap][indexQ];
        isStudyQ = true;
      }
    }

    Ccnt++;
  }

  var arrNewQuestionResponse = strQuestionResponse.split(',');
  var arrQuestionRepsonse = strChapterTestQuestionResponse.split(',');
  for (var indexQ = 0; indexQ <= arrNewQuestionResponse.length; indexQ++) {
    if (arrNewQuestionResponse[indexQ] != null && arrNewQuestionResponse[indexQ] != '') {
      arrQuestionRepsonse[indexQ] = arrNewQuestionResponse[indexQ];
    }
  }
  strChapterTestQuestionResponse = arrQuestionRepsonse.join(',');
  //strChapterTestQuestionResponse = strQuestionResponse;
}
function FillStudyQuestionArray() {
  //Add update study questions array
  var loc = parent.frames.frame_b.document.location.toString();
  var page = loc.substr(loc.lastIndexOf("/"));
  var SQ;
  var response = "";
  var curPage = "0000";

  var l_CurrentChapter = parseInt(CurrentChapter) - 1;
  var arrLength = parseInt(arrStudyQuestionWithResponse[l_CurrentChapter].length);

  page = page.substring(1, page.indexOf("."));

  if (isEbookEthicCourse && CurrentChapter > 1) {
    curPage = "000" + (CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3);
    if (curPage.length > 4)
      curPage = curPage.substring(curPage.length - 4);
  }
  var curDocFrm = document.forms[0];
  if (curDocFrm.name != "frmQuestion" && document.forms.length > 1) {
    for (var cntFrm = 0; cntFrm < document.forms.length - 1; cntFrm++) {
      if (document.forms[cntFrm].name == "frmQuestion") {
        curDocFrm = document.forms[cntFrm];
        break;
      }
    }
  }

  if (curDocFrm.getElementsByTagName('input').length > 1) {
    for (var d = 0; d <= curDocFrm.getElementsByTagName('input').length - 1; d++) {
      if (curDocFrm.answer1[d].checked == true) {
        response = response + curDocFrm.answer1[d].value.toUpperCase();
      }
    }
  } else {
    response = curDocFrm.answer1.value.toUpperCase();
  }

  for (var indexSQ = 0; indexSQ < arrLength; indexSQ++) {

    if (arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] != "") {
      SQ = arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ].split("|")[0].split("~")[1];

      //update
      if (("S" + page == SQ) || (isEbookEthicCourse && ("S" + curPage == SQ))) {
        if (response == "") {
          arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = "";
        }
        else {
          if (isEbookEthicCourse) {
            if (CurrentChapter > 1) {
              curPage = "000" + (CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3);
              if (curPage.length > 4)
                curPage = curPage.substring(curPage.length - 4);
              arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = CurrentChapter + "~S" + curPage + "|I" + response;
            }
            else {
              arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = CurrentChapter + "~S" + page + "|I" + response;
            }
          }
          else {
            arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = CurrentChapter + "~S" + page + "|I" + response;
          }
        }
        break;
      }
    } //if

  } //for

  //add
  if (indexSQ >= parseInt(arrLength) && response != "") {
    if (isEbookEthicCourse) {
      if (CurrentChapter > 1) {
        curPage = "000" + (CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3);
        if (curPage.length > 4)
          curPage = curPage.substring(curPage.length - 4);
        arrStudyQuestionWithResponse[l_CurrentChapter][arrLength] = CurrentChapter + "~S" + curPage + "|I" + response;
      }
      else {
        arrStudyQuestionWithResponse[l_CurrentChapter][arrLength] = CurrentChapter + "~S" + page + "|I" + response;
      }
    }
    else {
      arrStudyQuestionWithResponse[l_CurrentChapter][arrLength] = CurrentChapter + "~S" + page + "|I" + response;
    }
  }
} //func


function setStudyQuestionResponse() {
  var arrLength = parseInt(arrStudyQuestionWithResponse[parseInt(CurrentChapter) - 1].length);
  var Answer;
  var pageNo;
  var arrSQ;
  var curPage = "0000";

  var loc = parent.frames.frame_b.document.location.toString();
  var page = loc.substr(loc.lastIndexOf("/"));
  currentPage = page.substring(1, page.indexOf("."));

  if (parent.frames.frame_b.document.forms.length == 0)
    return

  if (parent.frames.frame_b.document.getElementById('submitAnswerEnable'))
    parent.frames.frame_b.document.getElementById('submitAnswerEnable').style.visibility = 'hidden';
  if (parent.frames.frame_b.document.getElementById('submitAnswerDisable'))
    parent.frames.frame_b.document.getElementById('submitAnswerDisable').style.visibility = 'visible';

  for (var indexSQ = 0; indexSQ < arrLength; indexSQ++) {
    arrSQ = new Array();

    if (arrStudyQuestionWithResponse[parseInt(CurrentChapter) - 1][indexSQ] != "") {
      arrSQ = arrStudyQuestionWithResponse[parseInt(CurrentChapter) - 1][indexSQ].split("|");

      Answer = arrSQ[1];

      pageNo = arrSQ[0].split("~")[1].substr(1);

      if (isEbookEthicCourse && CurrentChapter > 1) {
        curPage = "000" + (CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3);
        if (curPage.length > 4)
          curPage = curPage.substring(curPage.length - 4);
      }

      if ((currentPage == pageNo) || (isEbookEthicCourse && (curPage == pageNo))) {
        Answer = Answer.substr(1);

        noOfControls = parent.frames.frame_b.document.getElementsByTagName('input');

        for (itr = 0; itr < noOfControls.length; itr++) {

          if ((noOfControls[itr].type == "radio") || (noOfControls[itr].type == "checkbox")) {
            if (Answer.indexOf(noOfControls[itr].value.toUpperCase()) != -1) {
              noOfControls[itr].setAttribute("checked", "checked");

              //noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[1].style.fontWeight="bold";
              //noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[2].style.fontWeight="bold";
              //if(noOfControls[itr].type != "checkbox")
              //{
              noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].getElementsByTagName('INPUT')[0].style.display = 'none';
              trimmedAns = noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[1].innerHTML.split(".");
              trimmedAns = trimmedAns[0].split(">");
              if (noOfControls[itr].type != "checkbox") {
                if (trimmedAns[1] == parent.frames.frame_b.StudyQuesCorrectResponse) {
                  noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].getElementsByTagName('div')[0].style.display = '';
                  noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(119,162,47)';
                }
                else {
                  noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].getElementsByTagName('div')[1].style.display = '';
                  noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(220, 10, 10)';
                }
                parent.frames.frame_b.document.getElementById('optionTbl').getElementsByTagName('tr')[noOfControls[itr].parentElement.parentElement.rowIndex + 1].style.display = '';
              }
              else {
                noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].style.backgroundColor = 'rgb(1, 131, 191)';
                noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[0].getElementsByTagName('input')[0].style.display = '';
              }
              //}       //noOfControls[itr].parentElement.parentElement.getElementsByTagName('td')[3].getElementsByTagName('div')[0].style.backgroundImage='url("common/images/green_tick.gif")';
              //forTrInRestoreState = parent.frames.frame_b.document.getElementById('optionTbl').getElementsByTagName('tr')[noOfControls[itr].parentElement.parentElement.rowIndex+1];
              forTrInRestoreState = noOfControls[itr].parentElement.parentElement.rowIndex + 1;
              if (noOfControls[itr].type == "radio")
                checkStudyQuestion = true;
            }
          }
        }
        if (Answer != "") {
          if (parent.frames.frame_b.document.getElementById('submitAnswerEnable'))
            parent.frames.frame_b.document.getElementById('submitAnswerEnable').style.visibility = 'visible';
          if (parent.frames.frame_b.document.getElementById('submitAnswerDisable'))
            parent.frames.frame_b.document.getElementById('submitAnswerDisable').style.visibility = 'hidden';
        }
        break;
      }
    }
  } //for
} //func


function ResetChapterQuestionResponseOnSubmit() {

  var lastSumbitAttemptNo = 0;
  var lastStartAttempt;

  //check the attempt status after submit
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    if (arrChapterTestAttemptStatus[0] != "")
    //get the last submit attempt no.
      lastSumbitAttemptNo = arrChapterTestAttemptStatus[0].split("~")[1];

    lastStartAttempt = arrChaterTestStartAttempt[0];

    if (parseInt(lastSumbitAttemptNo) >= parseInt(lastStartAttempt)) //then generate new test questions
    {
      lastStartAttempt = parseInt(lastSumbitAttemptNo) + 1;

      for (var indexCh = 0; indexCh < TotalChapters; indexCh++) {
        var l_ChapterQuestion = parseInt(arrChapterQuestion[indexCh].length, 10)
        for (var indexQ = 0; indexQ < l_ChapterQuestion; indexQ++) {
          arrChapterQuestion[indexCh][indexQ] = "";
          arrChapterQuestionResponse[indexCh][indexQ] = "";
        }

        arrChaterTestStartAttempt[indexCh] = lastStartAttempt;

        //Also reset the study questions responses if the chapter test is submitted
        arrStudyQuestionWithResponse[indexCh].length = 0;

      }

    }

  }
  else if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    var l_CurrentChapter = parseInt(CurrentChapter) - 1;

    /*if(arrChapterTestAttemptStatus[l_CurrentChapter] != "")
    //get the last submit attempt no.
    lastSumbitAttemptNo = arrChapterTestAttemptStatus[l_CurrentChapter].split("~")[1];
      
    lastStartAttempt = arrChaterTestStartAttempt[l_CurrentChapter];
      
    if (parseInt(lastSumbitAttemptNo) >= parseInt(lastStartAttempt)) //then generate new test questions
    {*/
    var arrLength = parseInt(arrStudyQuestionWithResponse[l_CurrentChapter].length);
    var NoOfQuesToDisplayForChapter = parseInt(NoOfQuestionsToDisplayArray[l_CurrentChapter]);

    for (var indexQ = 0; indexQ < NoOfQuesToDisplayForChapter; indexQ++) {
      arrChapterQuestion[l_CurrentChapter][indexQ] = "";
      arrChapterQuestionResponse[l_CurrentChapter][indexQ] = "";
    }

    //Also reset the study questions responses if the chapter test is submitted
    for (var indexSQ = 0; indexSQ < arrLength; indexSQ++) {
      arrStudyQuestionWithResponse[l_CurrentChapter].length = 0;
    }

    //lastStartAttempt = parseInt(lastSumbitAttemptNo) + 1;
    //}

    arrChaterTestStartAttempt[l_CurrentChapter] = lastStartAttempt;
  }

}

function ResetChapterQuestionResponse() {
  var lastSumbitAttemptNo = 0;
  var lastStartAttempt;
  var isTestQExist = false;

  //check the attempt status after submit
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    //also check if any test question is there, if yes then we will get the start attempt and then compare 
    //else do not clear anything
    for (var index1 = 0; index1 < TotalChapters; index1++) {
      var l_ChapterQuestion = parseInt(arrChapterQuestion[index1].length, 10)
      for (var index2 = 0; index2 < l_ChapterQuestion; index2++) {
        if (arrChapterQuestion[index1][index2] != "") {
          isTestQExist = true;
          break;
        }
      }
    }

    if (arrChapterTestAttemptStatus[0] != "")
    //get the last submit attempt no.
      lastSumbitAttemptNo = arrChapterTestAttemptStatus[0].split("~")[1];

    lastStartAttempt = arrChaterTestStartAttempt[0];

    if (parseInt(lastSumbitAttemptNo) >= parseInt(lastStartAttempt) && isTestQExist) //then generate new test questions
    {
      lastStartAttempt = parseInt(lastSumbitAttemptNo) + 1;

      for (var indexCh = 0; indexCh < TotalChapters; indexCh++) {
        var l_ChapterQuestion = parseInt(arrChapterQuestion[indexCh].length, 10);
        for (var indexQ = 0; indexQ < l_ChapterQuestion; indexQ++) {
          arrChapterQuestion[indexCh][indexQ] = "";
          arrChapterQuestionResponse[indexCh][indexQ] = "";
        }

        arrChaterTestStartAttempt[indexCh] = lastStartAttempt;

        //Also reset the study questions responses if the chapter test is submitted
        arrStudyQuestionWithResponse[indexCh].length = 0;

      }

    }

    if (!isTestQExist)
      lastStartAttempt = parseInt(lastSumbitAttemptNo) + 1;

    arrChaterTestStartAttempt[indexCh] = lastStartAttempt;

  }
  else if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    lastSumbitAttemptNo = 0;
    if (arrChapterTestAttemptStatus[0] != "")
    //get the last submit attempt no.
      lastSumbitAttemptNo = arrChapterTestAttemptStatus[0].split("~")[1];

    lastStartAttempt = arrChaterTestStartAttempt[0];

    if (parseInt(lastSumbitAttemptNo) >= parseInt(lastStartAttempt)) //then generate new test questions 
    {
      lastStartAttempt = parseInt(lastSumbitAttemptNo) + 1;
      for (var indexCh = 0; indexCh < TotalChapters; indexCh++) {
        //also check if any test question is there, if yes then we will get the start attempt and then compare 

        var NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[indexCh], 10)
        for (var indexQ = 0; indexQ < NoOfQuesToDisplayChap; indexQ++) {
          arrChapterQuestion[indexCh][indexQ] = "";
          arrChapterQuestionResponse[indexCh][indexQ] = "";
        }

        //Also reset the study questions responses if the chapter test is submitted
        // arrStudyQuestionWithResponse[indexCh].length = 0;
        arrChaterTestStartAttempt[indexCh] = lastStartAttempt;
      }
    } //for
  } //if

} //func

function fnSaveTestQuestionStudyQuestionResponse() {

  SaveQuestionWithResponses();
  document.progress.QuestionResponse(strChapterTestQuestionResponse);

  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    /*for (var i=0; i<TotalChapters; i++)
    {
    if (i==0)
    strChapterTestAttemptStatus = arrChapterTestAttemptStatus[i];
    else
    strChapterTestAttemptStatus = strChapterTestAttemptStatus + "," + arrChapterTestAttemptStatus[i];
    }*/
    strChapterTestAttemptStatus = arrChapterTestAttemptStatus[0];
  }
  else if (FinalExam == EXAM_POSITION_BYCOURSE) {
    strChapterTestAttemptStatus = arrChapterTestAttemptStatus[0];
  }

  document.progress.ChapterTestAttemptStatus(strChapterTestAttemptStatus);
}


function updateStudyQuestionResponseStatus(status) {
  var l_CurrentChapter = parseInt(CurrentChapter, 10) - 1;
  var arrLength = parseInt(arrStudyQuestionWithResponse[l_CurrentChapter].length, 10);
  var Answer;
  var pageNo;
  var arrSQ;
  var curPage = "0000";

  var loc = parent.frames.frame_b.document.location.toString();
  var page = loc.substr(loc.lastIndexOf("/"));
  currentPage = page.substring(1, page.indexOf("."));

  if (isEbookEthicCourse && CurrentChapter > 1) {
    curPage = "000" + (CurrentStudyPage - CategoryList[CurrentChapter - 1].LastQuestion + 3);
    if (curPage.length > 4)
      curPage = curPage.substring(curPage.length - 4);
  }

  // if (isNotNullOrUndefined("searchpopupL") && document.getElementById("searchpopupL").style.visibility == "hidden") {
  if (parent.frames.frame_b.document.forms[0]) {
    if (parent.frames.frame_b.document.forms[0].length == 0)
      return;
  }
  for (var indexSQ = 0; indexSQ < arrLength; indexSQ++) {
    arrSQ = new Array();

    if (arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] != "") {
      arrSQ = arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ].split("|");

      Answer = arrSQ[1].substr(1);

      pageNo = arrSQ[0].split("~")[1].substr(1);

      if ((currentPage == pageNo) || (isEbookEthicCourse && (curPage == pageNo))) {
        arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = arrSQ[0] + "|" + status + Answer;
      }
    }
  }
  //   }
}
//End Hrb(06/16/2009): Added for preserving test questions

function showCoursePreviewPopUp() {

  var title = COURSE_PREVIEW_MESSAGE_TITLE_IPAD;
  var desc = COURSE_PREVIEW_MESSAGE_IPAD;
  document.getElementById('nGeneralPopupHeader').innerHTML = title;
  document.getElementById('nGeneralPopupBody').innerHTML = desc;
  document.getElementById("nGeneralPopup").style.display = '';
  //document.getElementById("nGeneralPopupL").innerHTML = '<b>'+title+'</b><br/>'+desc;
  document.getElementById('modaldiv').style.display = '';
  document.getElementById("closeBtnnGeneralPopup").style.display = "none";
  document.getElementById('purchaseCancel').style.display = 'block';
  document.getElementById('purchaseCancel').style.top = 340;
  document.getElementById('nGeneralPopup').style.height = 195;
  document.getElementById('nGeneralPopup').style.width = 380;
  document.getElementById('nGeneralPopupBody').style.height = 270;
  document.getElementById('purchaseCancel').style.paddingLeft = 20;

  //aligning the div popup center
  var controlpage = document.getElementById('controlpage');
  var nGeneralPopup = document.getElementById('nGeneralPopup');

  nGeneralPopup.style.left = 512 - (parseInt(nGeneralPopup.style.width) / 2);

  nGeneralPopup.style.top = controlpage.offsetTop + (controlpage.offsetHeight / 2) - (parseInt(nGeneralPopup.style.height) / 2);

  document.getElementById('purchaseCancel').style.left = 512 - (parseInt(nGeneralPopup.style.width) / 2);

  document.getElementById('purchaseCancel').style.top = controlpage.offsetTop + (controlpage.offsetHeight / 2) + 45;
  // end aligning the popup to center

  document.getElementById('purchaseCancel').innerHTML = '<div style="display:\'\';left:10px;top:10px;width:150px;float:left;" onClick="closePopUp();OpenLink(\'PURCHASE\');" class="btnLightDefault">Purchase</div><div style="display:\'\';left:35px;top:10px;float:left;width:150px;height:26px;" onClick="closePopUp();" class="btnNormalDefault">Cancel</div>'

}

//hrb start:Added to show the alert messages
function showAlertPopup(title, msg) {
  if (!isIE) {
    document.getElementById("testPopUpL").style.height = 166;
    document.getElementById("testPopUpL").style.width = 390;
    document.getElementById("testPopUpL1").style.height = 110;
    document.getElementById("testPopUpL1").style.width = 356;
    document.getElementById("testPopUpTitle").style.width = 380;
  }
  document.getElementById("lbltestPopUpTitle").innerHTML = title;
  document.getElementById("testPopUpL1").innerHTML = msg;
  document.getElementById("testPopUpL").style.visibility = "visible";
}
//hrb end:Added to show the alert messages

//hrb start:Added to redirect to welcome page
function courseExpired() {
  //redirect to welcome page
  parent.frames.frame_b.document.location = "0000.htm"
  document.getElementById("outlinebuttonL").innerHTML = "Title Page<br><br>Click for Contents";
  document.getElementById("divPageTitle").innerHTML = "Title";
  //set course title
  if (typeof (customtitle) != 'undefined') {
    AdjustCourseTitle('<div style="font:knowledge;font-size:22px">' + customtitle + '</div>');
  }
  else
    AdjustCourseTitle('<div style="font:knowledge;font-size:22px">CHECKPOINT<sup><font size="2px">&#174;</font></sup>&nbsp;LEARNING</div>')
  //disable next and prev button
  document.getElementById("PrevButton").style.display = "none";
  document.getElementById("PrevButtonDisabled").style.display = "";
  document.getElementById("NextButton").style.display = "none";
  document.getElementById("NextButtonDisabled").style.display = "";

  document.getElementById("btnNext").style.display = "none";
  document.getElementById("btnBack").style.display = "none";
  //disable menu button
  document.getElementById("searchbuttonL").style.display = "none";
  document.getElementById("glossbuttonL").style.display = "none";
  document.getElementById("resourcesbuttonL").style.display = "none";
  document.getElementById("bookmarkbuttonL").style.display = "none";
  document.getElementById("helpbuttonL").style.display = "none";
  document.getElementById("printbuttonL").style.display = "none";
  //disable menu button
  document.getElementById("searchbuttonLDis").style.display = "";
  document.getElementById("glossbuttonLDis").style.display = "";
  document.getElementById("resourcesbuttonLDis").style.display = "";
  document.getElementById("bookmarkbuttonLDis").style.display = "";
  document.getElementById("helpbuttonLDis").style.display = "";
  document.getElementById("printbuttonLDis").style.display = "";

  //enable the certificate button if lesson status is passed
  //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
  if (lesson_status == "PASSED" && lessonMode != LESSON_PILOTTESTING_MODE) {
    showmLearningCertificate();
  }
  //gray out the outline menu
  demoChapters = -1;
  SetOutlinePanelAttributes();
}
//hrb end:Added to redirect to welcome page

function FillTestQuestionsArray(Chapter) {
  var r = 0;
  var TestQuestions = new Array();
  var NumberPicked = 0;
  var temp = "";

  var l_Chapter = parseInt(Chapter, 10) - 1;
  var NumberOfTestQuestions = TestQuestionsArray[l_Chapter];

  //Start Hrb(06/16/2009): Added for preserving test questions
  //if the questions are already repeated then make those questions to 1
  var questionCount = 0;

  for (var index = 0; index <= NumberOfTestQuestions - 1; index++) {
    TestQuestions[index] = "0";
  }

  //check if to generate new set of questions or show already attempted
  var NoOfQuesToDisplayChap = parseInt(NoOfQuestionsToDisplayArray[l_Chapter], 10);

  for (var indexQ = 0; indexQ < NoOfQuesToDisplayChap; indexQ++) {
    var question = arrChapterQuestion[l_Chapter][indexQ];
    var response = arrChapterQuestionResponse[l_Chapter][indexQ];
    var result;

    if (question != "") {
      question = question.substr(1);
      TestQuestions[question - 1] = "1" + "~" + indexQ;
      questionCount++;

      //initiate the TestQuestion.correct and TestQuestion.Answer array
      result = response.charAt(0);

      if (result == "C") {
        TestQuestion[indexQ].Correct = true;

      } else if (result == "I") {
        TestQuestion[indexQ].Correct = false;

      }
      TestQuestion[indexQ].Answer = response.substr(1);
      fnLoadAttemptedQuestStyle();
    }
  }

  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
    for (i = 0; i < NoOfQuesToDisplayChap; i++) {
      if (TestQuestion[i].Answer == "")
        break;
    }

    if (i == NoOfQuesToDisplayChap) {
      if (mode == "retake") {
        if (getTotalQuestionCount() == NoOfQuestionAttempted()) {
          enableSubmitTest = true;
          document.getElementById("submittest").style.visibility = 'visible';
          document.getElementById("submittest_disable").style.visibility = 'hidden';
        }
        else {
          enableSubmitTest = false;
        }
      }
      else {
        enableSubmitTest = true;
        document.getElementById("submittest").style.visibility = 'visible';
        document.getElementById("submittest_disable").style.visibility = 'hidden';
      }
    }
    else {
      enableSubmitTest = false;
      document.getElementById("submittest").style.visibility = 'hidden';
      document.getElementById("submittest_disable").style.visibility = 'visible';
    }
  }

  questionToPick = NoOfQuesToDisplayChap - parseInt(questionCount, 10);
  //End Hrb(06/16/2009): Added for preserving test questions

  gbl_newQuestionSetyArray = new Array(questionToPick);

  //start Hrb: Final Exam
  //check if the nuberpicked is less than the no of questions to display
  while (NumberPicked < questionToPick) {
    r = NumberOfTestQuestions * Math.random() + 1;
    temp = r.toString();

    r = parseInt(temp, 10)
    if (TestQuestions[r - 1] == "0") {
      TestQuestions[r - 1] = "1";
      gbl_newQuestionSetyArray[NumberPicked] = "";
      NumberPicked++
    }
  }
  //end Hrb: Final Exam, check if the nuberpicked is less than the no of questions to display

  //Start Hrb(06/16/2009): Added for preserving test questions
  arrFinalQuestions = new Array(NoOfQuesToDisplayChap)

  for (var j = 0; j < arrFinalQuestions.length; j++) {
    arrFinalQuestions[j] = "";
  }
  //End Hrb(06/16/2009): Added for preserving test questions

  var str = ""

  //Start Hrb(06/16/2009): Added for preserving test questions

  for (var i = 0; i <= NumberOfTestQuestions - 1; i++) {
    var sequence = "";

    if (TestQuestions[i].indexOf("~") != -1) {
      sequence = TestQuestions[i].split("~")[1];
      var k = i + 1;
      if (k < 10) {
        str = str + "0" + k + " ";
        arrFinalQuestions[sequence] = "0" + k;

      }
      else {
        str = str + k + " ";
        arrFinalQuestions[sequence] = k;
      }
    }

  }

  //End Hrb(06/16/2009): Added for preserving test questions

  for (var i = 0; i <= NumberOfTestQuestions - 1; i++) {
    if (TestQuestions[i] == 1) {
      var k = i + 1;

      //Start Hrb(06/16/2009): Added for preserving test questions
      for (var j = 0; j < gbl_newQuestionSetyArray.length; j++) {
        if (gbl_newQuestionSetyArray[j] == "") {
          if (k < 10)
            gbl_newQuestionSetyArray[j] = "0" + k;
          else
            gbl_newQuestionSetyArray[j] = k;

          break;
        }
      }

      //End Hrb(06/16/2009): Added for preserving test questions
    }
  }

  RandomizeArray(gbl_newQuestionSetyArray);

  for (var i = 0; i < gbl_newQuestionSetyArray.length; i++) {
    var k = gbl_newQuestionSetyArray[i];

    str = str + k + " ";

    //Start Hrb(06/16/2009): Added for preserving test questions
    for (var j = 0; j < arrFinalQuestions.length; j++) {
      if (arrFinalQuestions[j] == "") {
        arrFinalQuestions[j] = k;
        break;
      }
    }
    //End Hrb(06/16/2009): Added for preserving test questions

  }

  QuestionNumbers = str
} //func

function UpdateProgressData() {
  document.progress.Mode(mode);
  fnSaveTestQuestionStudyQuestionResponse();
  document.progress.Update();

  //update the LMS database for online player
  if (document.progress.OnlineUser) {
    commitProgressInfo();
  }

}

/*Start Hrb(08/23/09): Added the functions to open the link/pop up on certificate, shoppingcart, Feedback URL*/
function OpenLink(type) {
  if (type == OPEN_PURCHASE_LINK) {
    //OpenCertificateLink(gbl_CourseShoppingCartURI); 
    if (g_isOLP) {
      var isInternetConnected = true;
      var sub = getSubscription();

      if (sub != null) {
        //if connected to internet then show the Buy course web page, else show alert message
        isInternetConnected = sub.getCourseCetificate(OPEN_PURCHASE_LINK);

        if (!isInternetConnected) {
          //  showIPhonePopup('', PURCHASE_COURSE_MSG, true);
          showIPadPopup('', PURCHASE_COURSE_MSG, "230px", "315px", "125px", "350px", "436px");
          //  getScrollbar(scrollpopup);
          //  $("#scrollpopup").width("324px");

        }
      }
    }
    else {
      OpenCertificateLink(gbl_CourseShoppingCartURI);
    }
  }
  else if (type == OPEN_FEEDBACK_LINK) {
    OpenCertificateLink(gbl_CourseFeedbackURI);

  }
}


function OpenCertificateLink(loc) {
  var sFeatures;
  var win;

  var winLeftPos = (screen.availWidth - 1024) / 2;
  var winTopPos = 0; if (screen.availHeight > 768) { winTopPos = (screen.availHeight - 768) / 2; }

  sFeatures = "left=" + winLeftPos + ", top=" + winTopPos + ", height=670, width=1010, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";

  win = window.open(loc, "_blank", sFeatures);
}

function OpenCertificatePopUp() {
  showCertifcateFrame();
}
/*End Hrb(08/23/09): Added the functions to open the link/pop up on certificate, shoppingcart, Feedback URL*/

//Start Hrb(08/03/09): Added to commit the course progressdata after the threshold value 
function SaveProgressDataWithInterval() {
  SaveState();

  //update the LMS database for online player

  if (document.progress.OnlineUser) {
    commitProgressInfo();
  }

  //reset the flags
  isQuestionResponseChanged = 0;
  isChapterTestAttemptChanged = 0;
}
//End Hrb(08/03/09): Added to commit the course progressdata after the threshold value 

function searchWordFromIndexArr(strSearchWord) {
  var tmpIndexArrCounter = 0;
  for (tmpIndexArrCounter = 0; tmpIndexArrCounter < strWordsArr.length; tmpIndexArrCounter++) {
    if (strWordsArr[tmpIndexArrCounter].toLowerCase() == strSearchWord.toLowerCase()) {
      return tmpIndexArrCounter;
    }
  }
  return -1;
}

//hrb: returns the no. of test questions completed - Used to track the progress
function getCompletedChapterTestCount() {
  var cnt = 0;
  for (var i = 0; i < noOfAttemptedTests.length; i++) {
    if (noOfAttemptedTests[i] != 0)
      cnt += NoOfQuestionsToDisplayArray[i];
  }
  return cnt;
}

// hrb: returns the total number of test questions in the course
function getTotalQuestionCount() {
  var cnt = 0;
  for (var index = 0; index < NoOfQuestionsToDisplayArray.length; index++) {
    cnt += parseInt(NoOfQuestionsToDisplayArray[index], 10);
  }
  return cnt;
}

function getCompletedQuestionCount() {
  var cnt = 0;
  /*for(var i=0;i<noOfAttemptedTests.length;i++)
  {
  if(noOfAttemptedTests[i] != 0){
  cnt += parseInt(NoOfQuestionsToDisplayArray[i]);
  }
  }*/
  for (var i = 0; i < arrChapterQuestionResponse.length; i++) {
    for (var j = 0; j < arrChapterQuestionResponse[i].length; j++) {
      if (arrChapterQuestionResponse[i][j] != "")
        cnt += 1;
    }
  }
  return cnt;
}
//hrb:  Calculate the users score on grade my answers 
function getTotalPercentage() {
  var totalScore = 0
  var correctCnt = 0
  for (var i = 0; i < TotalChapters; i++) {
    for (var j = 0; j < arrChapterQuestionResponse[i].length; j++) {
      var str = arrChapterQuestionResponse[i][j].substring(0, 1);
      if (str == "C")
        correctCnt++;
    }
  }
  totalScore = (correctCnt / getTotalQuestionCount()) * 100;
  return parseInt(totalScore, 10);
}


//hrb: handles navigation on grade my answers
function gradeMyAnswers() {

  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    SubmitFinalExam();
    gbl_TestQuestionArray = "";
    return;
  }
  isChapterTestAttemptChanged = 1;
  var chapterTestStatus;
  var correctCnt = 0;
  gbl_CurrentTestScore = getTotalPercentage();

  chapterTestStatus = gbl_CurrentTestScore + ":"; //$

  gbl_strChapterTestAttemptStatus = "0~";

  //Start Hrb(06/16/2009): Added for preserving test questions
  var lastAttempt = 0;
  gbl_strChapterTestAttemptStatus = "0~";

  //get the last attempt
  if (arrChapterTestAttemptStatus[0] != "")
    lastAttempt = arrChapterTestAttemptStatus[0].split("~")[1];

  lastAttempt++;
  gbl_strChapterTestAttemptStatus = gbl_strChapterTestAttemptStatus + lastAttempt + "~" + gbl_CurrentTestScore + "~";
  //End Hrb(06/16/2009): Added for preserving test questions

  if (gbl_CurrentTestScore >= gbl_PassingPercent) {
    isGradeMyAnswerClicked = true;
    //hrb start: test status Pass

    chapterTestStatus = chapterTestStatus + "P"; //$
    gbl_strChapterTestAttemptStatus = gbl_strChapterTestAttemptStatus + "P";
    arrChapterTestAttemptStatus[0] = gbl_strChapterTestAttemptStatus;
    //hrb end: test status Pass

    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var today = new Date();
    tempPassingDateStr = months[today.getMonth()] + "  " + today.getDate() + ",  " + today.getFullYear();

    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var ampm = 'AM';
    var hours = today.getHours();
    if (hours >= 12) {
      ampm = 'PM';
      hours = (hours % 12) == 0 ? 12 : (hours % 12);
    }
    var minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var seconds = today.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var dateTestPassedStr = days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.progress.PassedChapter(parseInt(CurrentChapter, 10));
    document.progress.DateTestPassed(dateTestPassedStr);
    document.progress.Update();

    //[CurrentChapter-1] = 1; not required

    //Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
    isCongratsLastPageSet = true;
    //End HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode

    if (document.progress.OnlineUser) {
      setDetails("LESSON_STATUS", "passed");
    }
    noOfattempts++;
    ChangeTestAttemptStatus(chapterTestStatus); //$
    noOfattempts = CHAPTER_TEST_PASSED;
    updateOutlineStatus();

    UpdateProgressData(); //Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed
    try {
      top.frmHidden.CommitSyncProgressData(); //iOLP function which will commit and synchronize the progress information.
    } catch (err) { }

    //hrb start : Added to display proper date on document of progress
    parent.frames.frame_b.document.location = "congratslast_page.htm";

    if (lessonMode == LESSON_PILOTTESTING_MODE) {
      document.getElementById("NextButton").style.display = "none";
      document.getElementById("NextButtonDisabled").style.display = "";

      document.getElementById("btnNext").style.display = "none";
    }
    else {
      document.getElementById("NextButton").style.display = "";
      document.getElementById("NextButtonDisabled").style.display = "none";
      document.getElementById("btnNext").style.display = "none";
    }

    //hrb end 8/6/2009: check added to disable next button for piolt testing on last congrates page
    testDescriptionStr = CurrentChapter + ",congratslast_page";
    if (gbl_CurrentTestScore == 0) {
      passfailDescriptionStr = "0" + '<sp>' + passedChapters;
      passedChapterDescStr = "0" + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }
    else {
      passfailDescriptionStr = gbl_CurrentTestScore + '<sp>' + passedChapters;
      passedChapterDescStr = gbl_CurrentTestScore + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }

    //hrb:added to enable the certificate button
    //Start Hrb(08/12/2009): if course not launched in the pilot testing mode, then only show certificate on passing the course
    if (lessonMode != LESSON_PILOTTESTING_MODE) {
      showmLearningCertificate();
    }
    //hrb:end of added to enable the certificate button 
    document.getElementById("divPageTitle").innerHTML = COURSE + ", " + PASSED;

    isGradeMyAnswerClicked = false;
    if (lessonMode != LESSON_PILOTTESTING_MODE) {
      document.getElementById('certificateDivEle').style.display = 'block';
    }
  } else {

    //hrb start: test status fail
    chapterTestStatus = chapterTestStatus + "F"; //$
    //hrb end: test status fail

    gbl_strChapterTestAttemptStatus = gbl_strChapterTestAttemptStatus + "F";

    //hrb start : Added for bookmark menu
    bookmarkFlag = false;
    //hrb end : Added for bookmark menu

    parent.frames.frame_b.document.location = "fail_page.htm";
    testDescriptionStr = CurrentChapter + ",fail_page";
    if (gbl_CurrentTestScore == 0) {
      passfailDescriptionStr = "0" + '<sp>' + passedChapters;
      passedChapterDescStr = "0" + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }
    else {
      passfailDescriptionStr = gbl_CurrentTestScore + '<sp>' + passedChapters;
      passedChapterDescStr = gbl_CurrentTestScore + '<sp>' + passedChapters + '<sp>' + tempPassingDateStr;
    }

    document.getElementById("divPageTitle").innerHTML = COURSE + ", " + FAILED;
    arrChapterTestAttemptStatus[0] = gbl_strChapterTestAttemptStatus;
    updateOutlineStatus();

    noOfattempts++;

    //Start Hrb(06/30/2009): Added to change the lesson status. Set it as Failed only when attempts are more than 3 for all chapters 
    //and status is Failed even for any single chapter.
    if (document.progress.OnlineUser) {
      if (isFailed())
        setDetails("LESSON_STATUS", "failed");
    }
    //End Hrb(06/30/2009): Added to change the lesson status. Set it as Failed only when attempts are more than 3 for all chapters 

    ChangeTestAttemptStatus(chapterTestStatus); //$
    //hrb end: added to update test attempt status
    UpdateProgressData();
    resetTest();
  }

  /*  if (gbl_CurrentTestScore >= gbl_PassingPercent) {
  mLearningUpdateProgressData(); //Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed
  top.frmHidden.CommitSyncProgressData(); //iOLP function which will commit and synchronize the progress information.
  }*/
  //reset the flag once submit the test
  isQuestionResponseChanged = 0;
  isChapterTestAttemptChanged = 0;

  //hrb end: added to update test attempt status
}
function updateOutlineStatus() {
  for (var i = 0; i < noOfAttemptedTests.length; i++) {
    if (noOfAttemptedTests[i] == 0) {
      document.getElementById("istat" + (i + 1) + "Test").src = COMPLETED_STATUS_IMG;
      CompletedChapterCodeStr = CompletedChapterCodeStr + (i + 1) + "Test" + ",";
    }
  }
}

function openPermaLink(linkId, PermaURL) {

  var curLink = document.getElementById(linkId);
  if (curLink != null && (curLink.tagName == 'A' || curLink.tagName == 'a') && curLink.style.cursor == 'pointer') {
    window.open(PermaURL);
  } else {
    return false;
  }
}

function SetMode(pMode) {
  mode = pMode
}

function displayConfirmationPage() {
  document.getElementById("NextButton").style.display = "none";
  document.getElementById("NextButtonDisabled").style.display = "";
  document.getElementById("divPageTitle").innerHTML = COURSE + ", " + COMPLETED;

  document.getElementById("btnNext").style.display = "none";
  /*document.getElementById("PrevButton").style.display = "none";
  document.getElementById("PrevButtonDisabled").style.display = "";*/
}

function initTest() {
  CurrentChapter = 1;
  CurrentTestQuestion = 1;
  isChapterTestPageShown = true;
  GenerateQuestionComboBox();
  St(CurrentChapter);
}

// Start review  answer by setting first chapter first question
function reviewMyAnswers() {
  if (FinalExam == EXAM_POSITION_BYCOURSE) {

    SetMode("review");
    ShowFinalExamTestQuestion(1);
    document.getElementById("showQuestionNumber").style.visibility = 'visible';
    document.getElementById("submittest").style.visibility = 'visible';
    return;
  }
  initTest();
  SetMode("review");
  EnableDisableSubmitButton();
  EnableDisableQuestionSelectionDropdown(false);
  document.getElementById("btnBack").style.display = "none";
}

//Enable disable question selection combo box
function EnableDisableQuestionSelectionDropdown(isEnabled) {
  var selCombo = document.getElementById("selQuestion");
  if (isEnabled) {
    selCombo.disabled = false
  }
  else {
    selCombo.disabled = true
  }
}

//Check that total Question Attempted is equal to total Question than enable submit button else disable it
//It used in review and retake mode
function EnableDisableSubmitButton() {
  var totalQuestions = getTotalQuestionCount();
  var noOfQuestionAttempted = NoOfQuestionAttempted();
  if (totalQuestions == noOfQuestionAttempted) {
    fnEnableSubmitTest(true);
  }
  else {
    fnEnableSubmitTest(false);
  }
}

//Return no. of question attempted in chapter test for all chapters
function NoOfQuestionAttempted() {
  var noOfQuestionAttempted = 0
  for (var chapter = 0; chapter < TotalChapters; chapter++) {
    for (var question = 0; question < arrChapterQuestionResponse[chapter].length; question++) {
      if (arrChapterQuestionResponse[chapter][question] != null && arrChapterQuestionResponse[chapter][question] != 'undefined' && arrChapterQuestionResponse[chapter][question] != '') {
        noOfQuestionAttempted++
      }
    }
  }
  return noOfQuestionAttempted
}

function fnEnableSubmitTest(enabled) {

  var objSubmitAnswerEnable = document.getElementById('submittest');
  var objSubmitAnswerDisable = document.getElementById('submittest_disable');

  if (enabled) {
    if (objSubmitAnswerEnable)
      objSubmitAnswerEnable.style.visibility = 'visible';
    if (objSubmitAnswerDisable)
      objSubmitAnswerDisable.style.visibility = 'hidden';
  }
  else {
    if (objSubmitAnswerEnable)
      objSubmitAnswerEnable.style.visibility = 'hidden';
    if (objSubmitAnswerDisable)
      objSubmitAnswerDisable.style.visibility = 'visible';
  }
}

var gradedAnsScroll = null;
var gradedDivHeight = 0;

function viewGradedAnswers() {
  isNavButtonContent = true;
  event = window.event;
  gradedDivHeight = 0;
  //window.open('graded_answers.htm');
  loc = "graded_answers.htm";
  document.getElementById('gradedAnsweriframe').src = loc;

  document.getElementById('modaldiv').style.display = '';
  /*document.getElementById('nGradedAnswerPopupL').innerHTML="<h3> Please wait while page is loading...</h3>";
  document.getElementById('nGradedAnswerPopup').style.display='';
  */
  document.getElementById('nGeneralPopupHeader').innerHTML = 'Graded Answers';
  document.getElementById('nGeneralPopupBody').innerHTML = "<h1> Please wait while page is loading...</h1>";

  document.getElementById('nGeneralPopup').style.height = 574;
  document.getElementById('nGeneralPopup').style.width = 770;
  document.getElementById('nGeneralPopupBody').style.height = 507;
  document.getElementById('closeBtnnGeneralPopup').style.left = 735;
  document.getElementById('closepopup-label').innerHTML = "close graded answers";

  //aligning the div popup center
  var controlpageele = document.getElementById('controlpage');
  var nGeneralPopupele = document.getElementById('nGeneralPopup');
  nGeneralPopupele.style.left = 512 - (parseInt(nGeneralPopupele.style.width) / 2);

  nGeneralPopupele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupele.style.height) / 2);
  // end aligning the popup to center

  document.getElementById('closeBtnnGeneralPopup').style.display = '';
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('nGeneralPopup').style.display = '';

  //appendQues();


}

//@sha 20-oct-2010 to add new li to bookmark ul
var bkindex = 0;

window.onmousemove = function (event) { shuffle(event); };
window.onmouseup = function (event) { shuffleend(event); };

function appendNewBookMark(pageNo, bookMarkDescription, bkDesc) {
  var greaterSign = ">";

  var liStartWithClassName = '<li id="' + bkindex + '" class="bookmarkRowTemplate"';
  var liEnd = "</li>";
  var onClickEvent = " onclick='fnShowBookmarkPage(\"" + pageNo + "\");' ";
  var divStartTag = "<div class='BookmarkLabel_template' style='width:240px;' onclick = 'allowEditBookmark(this.parentElement.parentElement);'"
  var divStartbkchpagenoTag = "<div"
  var divEndTag = "</div>"
  var deleteImg = "<div id='" + bkindex + "' style='display:none;height:25px;width:25px;float:left;position:relative;top:1px;' onclick='nDeleteBookmark(this);event.stopPropagation();' ><img src=\"common/images/delete-bkmark.png\" alt=\"delete bookmark\" role='button'></img> </div> </div>";

  var arrowImg = "<div style=\"position:relative;float:left;width:8px;height:13px;background-repeat:no-repeat;top:7px;right:-15px;\"><embed src=\"common/images/gr-arrow.svg\" width=\"8px\" height=\"11px\"></embed></div>"

  var seperator = "<div style='background:#EDEDED;height:45px;width:1px;position:relative;top:-10px;right:-235px;display:none;' ></div>"


  var shuffleImg = "<div id='" + bkindex + "' style='display:none;height:25px;width:25px;float:left;top:5px;background:url(common/images/move-bkmark.png);background-repeat:no-repeat;position:relative;right:-45px;' ontouchstart='shufflestart(this,event);event.stopPropagation();' ontouchmove='shuffle(event);event.stopPropagation();' ontouchend='shuffleend(event);event.stopPropagation();' onmousedown='shufflestart(this,event);event.stopPropagation();' aria-labelledby='label-" + bkindex + "' role='button'></div>";

  var deletebutton = "<div style='display:none;height:25px;width:40px;background:red;float:left;' onclick='nDeleteBookmark(this);event.stopPropagation();' >Delete </div>"
  var newLi = liStartWithClassName + onClickEvent + greaterSign;
  newLi = newLi + deleteImg + "<div style='float:left;position:relative;left:6px;top:4px;'>" + divStartTag + greaterSign;
  newLi = newLi + bookMarkDescription + divEndTag;
  newLi = newLi + divStartbkchpagenoTag + " style='font-family:K-Light;font-size:14px;display:none;'" + greaterSign;
  newLi = newLi + bkDesc;
  newLi = newLi + divEndTag + "</div>" + deletebutton + shuffleImg + arrowImg + seperator + "<p id='label-" + bkindex + "' style='display:none;'> reorder " + bookMarkDescription + "</p>" + liEnd;
  var ulInnerHTML = document.getElementById("ulBookmarks").innerHTML
  ulInnerHTML = ulInnerHTML + newLi;
  document.getElementById("ulBookmarks").innerHTML = ulInnerHTML;

  bkindex++;
}

function createBookmarkli(bookmarks) {
  //initialize to blank
  document.getElementById("ulBookmarks").innerHTML = "";
  if (bookmarks.length > 0) {
    for (var bookmark = 0; bookmark < bookmarks.length; bookmark++) {
      if (bookmarks[bookmark] != null && bookmarks[bookmark] != undefined)
        appendNewBookMark(bookmarks[bookmark].bkLink, bookmarks[bookmark].bkDescription, bookmarks[bookmark].bkTitle);
    }
  }
}


function getScrollbar(obj) {
  //alert("get");
  //var divTags = document.getElementsByTagName("div");
  //for(var i=0;i<divTags.length;i++)
  //{
  //if(divTags[i].getAttribute("name") == 'glsItemMainName')
  //{
  var element = $(obj).jScrollPane({
    horizontalGutter: 5,
    verticalGutter: 5,
    'showArrows': false,
    maintainPosition: false,
    'horizontalDragMaxWidth': 0
  });
  /*$('.jspDrag').hide();
  $('.jspScrollable').mouseenter(function(){
  $('.jspDrag').stop(true, true).fadeIn('slow');
  });
  $('.jspScrollable').mouseleave(function(){
  $('.jspDrag').stop(true, true).fadeOut('slow');
  });*/

  $(obj).removeAttr("tabindex");

  var api = element.data('jsp');
  api.scrollToY(0);
  //this.tabIndex = -1;

  //}
  //}
}

//@shaend

// This function returns the value of mouse-x & mouse-y position.
function init() {
  if (navigator.userAgent.match(/iPad/i) == null) {
    //document.getElementById("footer").style.bottom = " 25px ";
    document.getElementById("maincontent").style.height = " 610px ";
    document.getElementById("catalog").style.bottom = "12px ";
    //document.getElementById("gradedAnsParent").style.height = " 673px ";
    //document.getElementById("toolsDiv").style.height = " 669px ";
    document.getElementById("controlpage").style.height = "715px";
    document.getElementById("forscroll").style.height = "610px";

  }

  // adding stylesheet for ie for buttons shadow.
  if (isIE) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", "common/ie_ebook.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }

  //aligning next/ previous button to center
  var controlpageele = document.getElementById("controlpage");
  document.getElementById('btnBack').style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (document.getElementById('btnBack').getElementsByTagName('img')[0].offsetHeight / 2);

  document.getElementById('btnNext').style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (document.getElementById('btnNext').getElementsByTagName('img')[0].offsetHeight / 2);

  //aligning the FAQGloss popup in center
  var FAQGlossele = document.getElementById('FAQGloss');
  FAQGlossele.style.left = 512 - (parseInt(FAQGlossele.style.width) / 2);

  FAQGlossele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(FAQGlossele.style.height) / 2);


  /*var divTags = document.getElementsByTagName("div");
  for(var i=0;i<divTags.length;i++)
  {
  if(divTags[i].getAttribute("name") == 'glsItemMainName')
  {
  divTags[i].style.overflowY = 'hidden';
  }
  }*/


  //set the tools iframe display none.
  document.getElementById('toolsDiv').style.visibility = "hidden";
  document.getElementById('toolsdesc').style.visibility = "hidden";
  //set the certificate iframe display none.
  document.getElementById('certificateDiv').style.display = "none";
  // Set the popup hidden. Then on click of link it will show the popup.
  document.getElementById('gotopopupL').style.visibility = "hidden";
  document.getElementById('popupHeaderArrow').style.visibility = "hidden";
  // Set the popup hidden. Then on click of link it will show the popup.
  document.getElementById('popupL').style.visibility = "hidden";

  // Set the bookmark hidden. Then on click of link it will show the bookmark.
  //document.getElementById('bookmarkL').style.visibility = "hidden";
  /*  if ((/ipad/gi).test(navigator.appVersion)) {
  if (window.Event) {
  document.captureEvents(Event.TOUCHEND);
  //document.attachEvent(Event.TOUCHEND);
  }
  document.ontouchend = getCursorXY;
  }
  else {
  if (window.Event) {
  //document.captureEvents(Event.MOUSEMOVE);
  //document.attachEvent(Event.MOUSEMOVE);
  document.addEventListener("onmousemove",getCursorXY);
  }
  //document.onmousemove = getCursorXY;
  }*/
}

function getCursorXY(e) {
  try {
    x_pos = (window.Event) ? (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageX : e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    y_pos = (window.Event) ? (/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion) ? e.changedTouches[0].pageY : e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  }
  catch (err) {
  }
}



function showGlossaryTermDesc(loc, title) {
  document.getElementById('popuptitle').innerHTML = title;
  document.getElementById("glossiframe").src = loc;
  var popup = document.getElementById("popup");
  var popupParent = popup.parentNode;

  var glossDescription = document.getElementById("glossiframe").contentWindow.document.body.innerHTML;
  popup.innerHTML = glossDescription;

  popupParent.style.display = "";
  if (!chkEBookFormat()) {
    //getScrollbar();
    //pp = new iScroll("popup");
  }
}


function closePopupDiv(ele, popupid) {
  var popup = document.getElementById(popupid);
  ele.style.display = 'none';
  popup.parentNode.style.display = 'none';
}



function getFormElementFromQuestionDiv(contentId) {
  var contentTemp = document.getElementById(contentId);

  var qu = document.getElementById("question");

  if (qu != null) {
    for (var i = 0; i < qu.childNodes.length; i++) {
      if (qu.childNodes[i].nodeName == "FORM") {
        return qu.childNodes[i];
      }
    }
  }
}

/*Add new function to add and remove bookmark for iphone*/

function markUnmarkBookmark() {
  if (lessonMode == LESSON_PREVIEWER_MODE) {
    return;
  }

  closePopUp();
  var bookmarkDiv = document.getElementById("bookmarkDiv");
  if (bookmarkDiv.className.indexOf("bookMark_Done") < 0) {
    var pointer = document.getElementById('subChapterdivpointer');
    pointer.style.display = '';
    pointer.style.top = 66;
    pointer.style.left = 379;
    document.getElementById("addbkmrkclear").style.display = "";
    document.getElementById("bookmarkAdd").style.display = "";
    document.getElementById('txtbkDescription').value = TxtBkDescVar;
    // adding focus twice due to behaviour in ipad
    // document.getElementById('txtbkDescription').focus();
    document.getElementById('txtbkDescription').focus();

  }
  else {
    var bookmarkDesc = document.getElementById("bkDescription").innerHTML;
    var textbkDesc = document.getElementById("txtbkDescription").value;
    textbkDesc = textbkDesc.replace(/^\s+/, '');
    fndeleteBookMark(bookmarkDesc);
    bookmarkDiv.className = 'bookMark';
    bookmarkDiv.innerHTML = '<embed id="markunmarkbookmark" src="common/images/bookmark-icon.svg" width="17px" height="32px"></embed>';
    document.getElementById('add-bookmark-label').innerHTML = "add bookmark";
  }
}

//Move from common.js file
function hideShowBookMark(action) {

  var bookmarkDiv = document.getElementById("bookmarkDiv").parentElement;
  if (action == "hide") {
    bookmarkDiv.style.display = 'none';
  }
  else {
    bookmarkDiv.style.display = '';
  }
}

//hrb:added to toggle content div for mlearning course
function togglePage() {
  if (currentDivId == "content") {
    currentDivId = "content1";
  }
  else {
    currentDivId = "content";
  }
}
var transcrollipad;
function openTranscriptPopupIPad() {

  if (isTranscriptOpen) {
    closeTranscript();
    return;
  }

  if (document.getElementById("videoForEbook")) {
    isTranscriptOpen = true;
    var inHTML = document.getElementById('transContent').innerHTML;

    var scrollpopupForEbookObj = $get('TranscriptpopupForEbook');
    var popupL1ForEbookObj = $get('TranscriptpopupL1');
    var description = inHTML;


    popupL1ForEbookObj.innerHTML = description;
    scrollpopupForEbookObj.style.display = 'block';
    document.getElementById('onOffImg').getElementsByTagName('div')[0].innerHTML = '<embed src="common/images/on-bt.svg"></embed>';
    document.getElementById('transcriptlabel').innerHTML = "Transcripts on, turn transcripts off";
    //scrollpopupForEbookObj.style.backgroundColor='#D3D3D3';
    document.getElementById('videoForEbook').style.width = "555px";

    if (popupL1ForEbookObj.scrollHeight > popupL1ForEbookObj.offsetHeight && navigator.userAgent.match(/iPad/i) != null)
      document.getElementById('FooterMask').style.visibility = 'visible';

  }
  else if (document.getElementById("interactivityForEbook")) {

    isTranscriptOpen = true;
    var inHTML = document.getElementById('transContent').innerHTML;

    var scrollpopupForEbookObj = $get('TranscriptpopupForInteractivity');
    var popupL1ForEbookObj = $get('InteractivityTranscriptpopupL1');
    var description = inHTML;

    //document.getElementById('interactivityForEbook').style.top=20;
    document.getElementById('content').getElementsByTagName('iframe')[0].style.top = 20;
    popupL1ForEbookObj.innerHTML = description;
    $(scrollpopupForEbookObj).slideDown(400);
    document.getElementById('onOffImg').getElementsByTagName('div')[0].innerHTML = '<embed src="common/images/on-bt.svg"></embed>';
    document.getElementById('transcriptlabel').innerHTML = "Transcripts on, turn transcripts off";

    if (popupL1ForEbookObj.scrollHeight > popupL1ForEbookObj.offsetHeight && navigator.userAgent.match(/iPad/i) != null)
      document.getElementById('FooterMask').style.visibility = 'visible';

  }
  else if (document.getElementById("audioInteractivity") || document.getElementById("audioControlId")) {

    isTranscriptOpen = true;
    var inHTML = document.getElementById('transContent').innerHTML;

    var scrollpopupForEbookObj = $get('TranscriptpopupForInteractivity');
    var popupL1ForEbookObj = $get('InteractivityTranscriptpopupL1');
    var description = inHTML;

    popupL1ForEbookObj.innerHTML = description;
    $(scrollpopupForEbookObj).slideDown(400);
    document.getElementById('onOffImg').getElementsByTagName('div')[0].innerHTML = '<embed src="common/images/on-bt.svg"></embed>';
    document.getElementById('transcriptlabel').innerHTML = "Transcripts on, turn transcripts off";

    if (popupL1ForEbookObj.scrollHeight > popupL1ForEbookObj.offsetHeight && navigator.userAgent.match(/iPad/i) != null)
      document.getElementById('FooterMask').style.visibility = 'visible';

  }
  // checking footer mask of the panel

  if (document.getElementById('adiv') && document.getElementById('panelHeaderMask')) {
    setTimeout(function () {
      ele = document.getElementById('adiv');
      if (ele.scrollHeight > ele.offsetHeight && navigator.userAgent.match(/iPad/i) != null)
        document.getElementById('panelFooterMask').style.visibility = 'visible';
    }, '400');
  }

}
function closeTranscript() {
  if (document.getElementById('videoForEbook')) {
    document.getElementById('TranscriptpopupForEbook').style.display = 'none';
    document.getElementById('onOffImg').getElementsByTagName('div')[0].innerHTML = '<embed src="common/images/off-bt.svg"></embed>';
    document.getElementById('transcriptlabel').innerHTML = "Transcripts off, turn transcripts on";
    document.getElementById('videoForEbook').style.width = '800px';
  }
  else if (document.getElementById('interactivityForEbook')) {
    $(document.getElementById('TranscriptpopupForInteractivity')).slideUp(400, function () { document.getElementById('content').getElementsByTagName('iframe')[0].style.top = 10; });
    document.getElementById('onOffImg').getElementsByTagName('div')[0].innerHTML = '<embed src="common/images/off-bt.svg"></embed>';
    document.getElementById('transcriptlabel').innerHTML = "Transcripts off, turn transcripts on";
  }
  else if (document.getElementById('audioInteractivity') || document.getElementById("audioControlId")) {
    $(document.getElementById('TranscriptpopupForInteractivity')).slideUp(400);
    document.getElementById('onOffImg').getElementsByTagName('div')[0].innerHTML = '<embed src="common/images/off-bt.svg"></embed>';
    document.getElementById('transcriptlabel').innerHTML = "Transcripts off, turn transcripts on";
  }

  isTranscriptOpen = false;
}

var transScrolliphone = null;
function openTranscriptPopupIPhone() {
  document.getElementById("content").className = "hideDiv hideAnimateDiv";
  document.getElementById("videoTrans").className = "showDiv showAnimateDiv";
  hideShowHeaderFooter_iphone('');

  if (event)
    event.stopPropagation();

  document.getElementById("videoTransContent").innerHTML = parent.frames.frame_b.document.getElementById('transContent').innerHTML;
  document.getElementById("videoTransContent").style.visibility = "visible";

  if (transScrolliphone != null) {
    transScrolliphone.destroy();
  }
  if (!chkEBookFormat()) {
    //getScrollbar();
    //transScrolliphone = new iScroll("videoTransContent");
  }
  setUnSetVideoSrc(false);
}

//Start HRB: Added function to show certificate for mLearning courses.
function showmLearningCertificate() {
  //parent.frames.frame_a.document.getElementById("certificatemain").childNodes.item(1).className = 'subChapterLabel_template';
  //  parent.frames.frame_a.document.getElementById("certificateRowArrow").style.display = "";
  //  parent.frames.frame_a.document.getElementById("certificatemain").addEventListener('click', function() { ShowCertificate() }, false);
}
//End HRB: Added function to show certificate for mLearning courses.

function addScrollToQuestionDiv() {
  //add  scroll to question div  logic read question div innerHTML ,read inter html of question and set it blank, create new div and add scroll to it , set question inner HTML
  if (mode == "test" || mode == "retake" || mode == "review" || mode == "study") {
    var elements = document.getElementById(currentDivId).childNodes;
    for (var i = 0; i < elements.length; i++) {

      if (elements[i].id == "question" && elements[i].scrollHeight >= elements[i].offsetHeight) {
        var questionInnerHTML = elements[i].innerHTML;
        elements[i].innerHTML = "";
        //if (!chkEBookFormat())
        //  elements[i].style.overflow = 'hidden';
        //else
        //elements[i].style.overflow = 'hidden';
        elements[i].removeAttribute('id');
        elements[i].setAttribute('id', currentDivId + "_question");

        var newQuestionDiv = document.createElement('div');
        newQuestionDiv.id = "question";

        newQuestionDiv.style.width = elements[i].width;
        newQuestionDiv.innerHTML = questionInnerHTML;
        elements[i].appendChild(newQuestionDiv);
        if (!chkEBookFormat()) {
          //getScrollbar();
          //questionScroll=new iScroll("question",{abjustmentHeight:20});
        }
        //getScrollbar(content_question);
      }
    }
  }
}
function getForm(divId) {
  var child = document.getElementById(divId).childNodes;

  for (var i = 0; i < child.length; i++) {
    if (child[i].nodeName == "FORM") {
      return child[i];
    }
  }
  return null;
}

/*
function removeScrollForSearch(){
if(document.getElementById("searchL1").innerHTML == "") {
var element = $('#glsItemMainId').jScrollPane({});
var api = element.data('jsp');
//api.destroy();
}
}*/
//Start HRB: Added to search on return key of IPhone and IPad. 
function searchOnEnterKey(e) {

  //Replaced e.charCode with e.keyCode in the condn below
  if (document.getElementById("searchText").value.trim() != "")
    document.getElementById('searchCancelButton').style.display = '';
  else
    document.getElementById('searchCancelButton').style.display = 'none';

  if (e != null && e.keyCode == 13) {
    searchStr = document.getElementById("searchText").value;
    callSearchFns();
  }
}
//End HRB: Added to search on return key of IPhone and IPad.

function addBookmarkOnEnterKey(e) {
  if (document.getElementById('txtbkDescription').value.trim() == '')
    document.getElementById('addbkmrkclear').style.display = 'none';
  else
    document.getElementById('addbkmrkclear').style.display = '';

  if (e != null && e.keyCode == 13) {
    fnAddBookMark();
  }
}

//Start HRB: Added to check user is connected to internet or not.
function checkInternetConnected(loc) {
  try {
    var oImg = document.createElement("img");
    oImg.setAttribute('src', loc + '/connection_mlearning.png');
    oImg.setAttribute('id', 'check');
    oImg.setAttribute('style', 'display:none');
    oImg.setAttribute('onerror', 'errorInternetConnected();');
    oImg.setAttribute('onload', 'successInternetConnected();');
  }
  catch (e) { }
}

function errorInternetConnected() {
  OpenCertificatePopUp();
}
function successInternetConnected() {
  top.frmHidden.openCertificateFeedbackURL(gbl_CourseCertificateURI); //HRB:Calling iOLP function to open new window.
}
//End HRB: Added to check user is connected to internet or not.

//Start HRB: Added to show Help Menu for mLearning courses.
function showMLearningHelp() {
  // showIPhonePopup('', 'Help functionality is in progress.');
  showIPadPopup('', 'Help functionality is in progress.', "230px", "315px", "125px", "350px", "436px");
  //getScrollbar(scrollpopup);
  $("#scrollpopup").width("324px");
}
//End HRB: Added to show Help Menu for mLearning courses.

//Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed
function mLearningUpdateProgressData() {
  document.progress.Mode(mode);
  fnSaveTestQuestionStudyQuestionResponse();
  document.progress.Update();

  //update the LMS database for online player
  if (document.progress.OnlineUser) {
    mLearningCommitProgressInfo();
  }

}
//End HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed


function removeVideoControl() {
  try {
    var videoDiv = document.getElementById("divVideo");
    if (videoDiv) {
      var parent = videoDiv.parentNode;
      parent.removeChild(videoDiv);
      parent.style.display = "none";
    }
    var audioDiv = document.getElementById("divAudioMLearning");
    if (audioDiv) {
      var parent = audioDiv.parentNode;
      parent.removeChild(audioDiv);

    }
  }
  catch (err) {
  }
}
function playAudioFile() {
  if (event) event.stopPropagation();
  var audioControl = document.getElementById("divAudioMLearning").childNodes;
  for (var audioCCnt = 0; audioCCnt < audioControl.length; audioCCnt++) {

    if (audioControl[audioCCnt]) {
      if (audioControl[audioCCnt].nodeName == "AUDIO") {
        audioControl[audioCCnt].play();
        document.getElementById("divAudioMLearningPlay").removeAttribute('onclick');
        document.getElementById("divAudioMLearningPlay").className += " played";
        break;
      }
      if (audioControl[audioCCnt].nodeName == "IFRAME") {
        var au = audioControl[audioCCnt].contentDocument.getElementsByTagName("audio");
        if (au.length > 0) {
          au[0].play();
          document.getElementById("divAudioMLearningPlay").removeAttribute('onclick');
          document.getElementById("divAudioMLearningPlay").className += " played";
          break;
        }
      }
    }
  }
}

function genrateHighlightData(forSerachKey) {
  //searchStr=document.getElementById("searchText").value;
  searchStr = searchStr.trim();
  var splitSearchStr = new Array();
  splitSearchStr = searchStr.split(' ');
  for (var searchStrCount = 0; searchStrCount < splitSearchStr.length; searchStrCount++) {
    if (splitSearchStr[searchStrCount] != null && splitSearchStr[searchStrCount] != '') {
      forSerachKey = doHighlight(forSerachKey, splitSearchStr[searchStrCount], highlightStartTag, highlightEndTag);
    }
  }
  //searchStr=null;
  return forSerachKey;
}
function setUnSetVideoSrc(setSrc) {
  var videoDiv = document.getElementById("divVideo");
  if (videoDiv && document.getElementById('videoIFrameSrc')) {
    var iframeSrc = document.getElementById('videoIFrameSrc').value;
    var videoIframe = videoDiv.childNodes[3];
    if (setSrc)
      videoIframe.src = iframeSrc;
    else
      videoIframe.src = '';
    //var navigateOnVideo=new navigate("divVideo");

  }
}

//HRB Start: Added to reset first and last page of CurrentChapter when going to search result from confirmation page. 
function resetFirstLastPage() {
  var tmpPageLocation = parent.frames.frame_b.location.toString().toLowerCase();
  tmpPageLocation = tmpPageLocation.substring(tmpPageLocation.lastIndexOf('/') + 1)
  if (tmpPageLocation == 'confirmation_page.htm') {
    for (var index = 0; index < CategoryList.length; index++) {
      if (CategoryList[index].CategoryCode == CurrentChapter.toString(10)) {
        FirstPage = CategoryList[index].FirstQuestion;
        LastPage = CategoryList[index].LastQuestion;
        break
      }
    }
  }
}
//HRB End: Added to reset first and last page of CurrentChapter when going to search result from confirmation page. 

//HRB: Function to provide reveal functionality in ul
function ulreveal(temp_item, rel_pos, even_odd, alignment, shared, state, total_item, bullet_spacing, popup_width, popup_height) {
  if (popup_width == null || popup_width == 0)
    popup_width = 250;
  if (popup_height == null || popup_height == 0)
    popup_height = 140;

  var buffer_width = 25;
  var divsrc = 'li-info_' + temp_item;
  var temparr = temp_item.split('_');
  var panelDivLeft = document.getElementById("content").getElementsByTagName("div")[0].offsetLeft;
  var panelDivWidth = document.getElementById("content").getElementsByTagName("div")[0].offsetWidth;
  var bullet_spacing = 0;

  if (bullet_spacing != null || bullet_spacing != 0) {
    bullet_spacing = (bullet_spacing - document.getElementById(rel_pos).offsetHeight) / 2;
  }

  if (shared == 'yes') {
    //HRB: For shared area

    var divpopup = 'reveal-popupL' + temparr[0];

    document.getElementById(divpopup).innerHTML = document.getElementById(divsrc).innerHTML;
    var temp = document.getElementById(divpopup).innerHTML;
    document.getElementById('reveal-popup' + temparr[0]).style.display = "";

    var objPopUpL1 = document.getElementById(divpopup);
    var objPopUpL = document.getElementById('reveal-popup' + temparr[0]);
    objPopUpL1.style.overflowX = "";
    objPopUpL1.style.overflowY = "";

    objPopUpL.style.width = popup_width;
    objPopUpL.style.height = popup_height;
    objPopUpL1.style.width = popup_width;
    if (!isIE) {
      objPopUpL1.style.width = popup_width - 11;
      document.getElementById("reveal-popupTitle" + temparr[0]).style.width = popup_width - 7;
    }

    //HRB: If height exceeds then give scroll
    if (parseInt(objPopUpL1.clientHeight) > popup_height - 25) {
      objPopUpL1.style.height = popup_height - 25;
      objPopUpL1.style.overflowY = "auto";
    }
    objPopUpL.style.width = objPopUpL1.offsetWidth;
    objPopUpL.style.height = objPopUpL1.offsetHeight;

    if (!isIE) {
      objPopUpL.style.height = 'auto';
      objPopUpL1.style.height = 'auto';
      objPopUpL1.style.overflow = 'auto';
      objPopUpL.style.maxHeight = popup_height + document.getElementById("reveal-popupTitle" + temparr[0]).offsetHeight;
      objPopUpL1.style.maxHeight = popup_height - document.getElementById("reveal-popupTitle" + temparr[0]).offsetHeight;
    }

    if (alignment == 'vertical') {
      if (even_odd == 'even') {

        objPopUpL.style.top = document.getElementById(rel_pos).offsetTop + (document.getElementById(rel_pos).offsetHeight / 2) - (objPopUpL.offsetHeight / 4) - bullet_spacing;
      }
      else {
        objPopUpL.style.top = document.getElementById(rel_pos).offsetTop + (document.getElementById(rel_pos).offsetHeight / 2) - (objPopUpL.offsetHeight / 2) - bullet_spacing;
      }
      objPopUpL.style.left = document.getElementById("content").getElementsByTagName("div")[0].offsetLeft + document.getElementById(rel_pos).offsetLeft + document.getElementById(rel_pos).offsetWidth + buffer_width;
    }
    else {
      objPopUpL.style.top = document.getElementById("content").getElementsByTagName("div")[0].offsetTop + document.getElementById(rel_pos).offsetTop + document.getElementById(rel_pos).offsetHeight + buffer_width;
      if (even_odd == 'even') {
        objPopUpL.style.left = document.getElementById(rel_pos).offsetLeft + (document.getElementById(rel_pos).offsetWidth / 2) - (objPopUpL.offsetWidth / 4);
      }
      else {
        objPopUpL.style.left = document.getElementById(rel_pos).offsetLeft + (document.getElementById(rel_pos).offsetWidth / 2) - (objPopUpL.offsetWidth / 2);
      }

      if (parseInt(objPopUpL.style.left) < parseInt(panelDivLeft)) {
        objPopUpL.style.left = panelDivLeft;
      }

      if ((parseInt(objPopUpL.style.left) + popup_width) > (parseInt(panelDivLeft) + parseInt(panelDivWidth))) {
        objPopUpL.style.left = parseInt(objPopUpL.style.left) - (parseInt(objPopUpL.style.left) + popup_width) - (parseInt(panelDivLeft) + parseInt(panelDivWidth));
      }
    }
  }
  else {
    //HRB: For non-shared area

    var divpopup = 'li-popupL' + temp_item;

    document.getElementById(divsrc).style.display = "";
    var objPopUpL1 = document.getElementById(divpopup);
    var objPopUpL = document.getElementById(divsrc);
    objPopUpL1.style.overflowX = "";
    objPopUpL1.style.overflowY = "";

    objPopUpL.style.width = popup_width;
    objPopUpL.style.height = popup_height;
    objPopUpL1.style.width = popup_width;

    if (!isIE) {
      objPopUpL1.style.width = popup_width - 11;
      document.getElementById("li-popupTitle" + temp_item).style.width = popup_width - 7;
    }

    //hrb: if height exceed  then give scroll
    if (parseInt(objPopUpL1.clientHeight) > popup_height - 25) {
      objPopUpL1.style.height = popup_height - 25;
      objPopUpL1.style.overflowY = "auto";
    }
    objPopUpL.style.width = objPopUpL1.offsetWidth;
    objPopUpL.style.height = objPopUpL1.offsetHeight;

    if (!isIE) {
      objPopUpL.style.height = 'auto';
      objPopUpL1.style.height = 'auto';
      objPopUpL1.style.overflow = 'auto';
      objPopUpL.style.maxHeight = popup_height + document.getElementById("li-popupTitle" + temp_item).offsetHeight;
      objPopUpL1.style.maxHeight = popup_height - document.getElementById("li-popupTitle" + temp_item).offsetHeight;
    }

    if (alignment == 'vertical') {
      objPopUpL.style.top = document.getElementById(rel_pos).offsetTop + (document.getElementById(rel_pos).offsetHeight / 2) - (objPopUpL.offsetHeight / 2) - bullet_spacing;
      objPopUpL.style.left = document.getElementById("content").getElementsByTagName("div")[0].offsetLeft + document.getElementById(rel_pos).offsetLeft + document.getElementById(rel_pos).offsetWidth + buffer_width;
    }
    else {
      objPopUpL.style.top = document.getElementById("content").getElementsByTagName("div")[0].offsetTop + document.getElementById(rel_pos).offsetTop + document.getElementById(rel_pos).offsetHeight + buffer_width;
      objPopUpL.style.left = document.getElementById(rel_pos).offsetLeft + (document.getElementById(rel_pos).offsetWidth / 2) - (objPopUpL.offsetWidth / 2);

      if (parseInt(objPopUpL.style.left) < parseInt(panelDivLeft)) {
        objPopUpL.style.left = panelDivLeft;
      }

      if ((parseInt(objPopUpL.style.left) + popup_width) > (parseInt(panelDivLeft) + parseInt(panelDivWidth))) {
        objPopUpL.style.left = parseInt(objPopUpL.style.left) - ((parseInt(objPopUpL.style.left) + popup_width) - (parseInt(panelDivLeft) + parseInt(panelDivWidth)));
      }
    }
  }
  togglestate(state, shared, temp_item, total_item, 'false');
}

//HRB: Closing popup using x button on popup
function togglestate(state, shared, temp_item, total_item, xflag) {
  if (xflag == 'true' && shared == 'yes') {
    for (var i = 1; i <= total_item; i++) {
      if (document.getElementById('bullet' + temp_item + i).onOff == 'on') {
        temp_item = temp_item + i;
        break;
      }
    }
  }
  var temparr = temp_item.split('_');
  var divsrc = 'li-info_' + temp_item;

  if (state == 'on') {
    document.getElementById("bullet" + temp_item).onOff = 'off';
    if (shared == 'yes') {
      document.getElementById('reveal-popup' + temparr[0]).style.display = "none";
    }
    else {
      document.getElementById(divsrc).style.display = "none";

    }

    //HRB; Change image
    var tempSrc = document.getElementById('bullet' + temp_item).src;
    var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
    document.getElementById('bullet' + temp_item).src = tempMostSrc + '_off.gif';
  }
  else {
    //HRB: Reseting all the other images to off

    if (shared == 'yes') {
      for (var cnt = 1; cnt <= total_item; cnt++) {
        document.getElementById('bullet' + temparr[0] + '_' + cnt).onOff = 'off';
        var tempSrc = document.getElementById('bullet' + temparr[0] + '_' + cnt).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet' + temparr[0] + '_' + cnt).src = tempMostSrc + '_off.gif';
      }
    }

    //HRB: Change image
    document.getElementById("bullet" + temp_item).onOff = 'on';
    var tempSrc = document.getElementById('bullet' + temp_item).src;
    var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
    document.getElementById('bullet' + temp_item).src = tempMostSrc + '_on.gif';
  }
}

function chkEBookFormat() {
  if (isEbook && (isIE || isFF || isChrome || isSafari)) {
    return true;
  }
  else {
    return false;
  }
}

function setSelectedVolume(volume) {
  try {
    var myFlvPlayerObj = isIE ? document.all.flvPlayer : document.flvPlayer;
    myFlvPlayerObj.SetVariable("CommandVideo", volume);
  }
  catch (err) { }
}


function ulhidereveal(state, shared, temp_item, total_item) {
  if (shared == 'no') {
    if (document.getElementById('li-info_' + temp_item).style.display == 'none') {
      document.getElementById('li-info_' + temp_item).style.display = '';
    }
    else {
      document.getElementById('li-info_' + temp_item).style.display = 'none';
    }
  }
  else if (shared == 'yes') {
    var temparr = temp_item.split('_');
    var divpopup = 'ulreveal-popup' + temparr[0];
    if (state != 'on') {
      if (document.getElementById(divpopup)) {
        document.getElementById(divpopup).innerHTML = document.getElementById('li-info_' + temp_item).innerHTML;
        document.getElementById(divpopup).style.display = ''
      }
    }
    else {
      document.getElementById(divpopup).style.display = 'none';
    }
  }
  switchbulletimg(state, shared, temp_item, total_item);
}

function switchbulletimg(state, shared, temp_item, total_item) {
  var temparr = temp_item.split('_');
  if (state == 'on') {
    document.getElementById("bullet" + temp_item).onOff = 'off';
    //HRB; Change image
    var tempSrc = document.getElementById('bullet' + temp_item).src;
    var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
    document.getElementById('bullet' + temp_item).src = tempMostSrc + '_off.gif';
  }
  else {
    //HRB: Reseting all the other images to off

    if (shared == 'yes') {
      for (var cnt = 1; cnt <= total_item; cnt++) {
        document.getElementById('bullet' + temparr[0] + '_' + cnt).onOff = 'off';
        var tempSrc = document.getElementById('bullet' + temparr[0] + '_' + cnt).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet' + temparr[0] + '_' + cnt).src = tempMostSrc + '_off.gif';
      }
    }

    //HRB: Change image
    document.getElementById("bullet" + temp_item).onOff = 'on';
    var tempSrc = document.getElementById('bullet' + temp_item).src;
    var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
    document.getElementById('bullet' + temp_item).src = tempMostSrc + '_on.gif';
  }
}


function hideNavButton() {

  if (!navDisableFlag) {
    navDisableFlag = true;
    if (document.getElementById("btnBack").style.display == "none")
      backDisabledFlag = true;
    if (document.getElementById("btnNext").style.display == "none")
      nextDisabledFlag = true;
    document.getElementById("btnNext").style.display = "none";
    document.getElementById("btnBack").style.display = "none";
  }
}
function showNavButton() {
  if (navDisableFlag && !isNavButtonContent) {
    if (!nextDisabledFlag)
      document.getElementById("btnNext").style.display = "";
    if (!backDisabledFlag)
      document.getElementById("btnBack").style.display = "";
    navDisableFlag = false;
    backDisabledFlag = false;
    nextDisabledFlag = false;
  }
}

// code to handle chk508Compliance condition used in object.js
function chk508Compliance() {
  return false;
}

function checkInteractivityAnchors(iframe) {

  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var anchors = innerDoc.getElementsByTagName('a');

  if (anchors.length > 0) {
    for (anchorcount = 0; anchorcount < anchors.length; anchorcount++) {
      if (anchors[anchorcount].href == iframe.src + "#") {
        anchors[anchorcount].removeAttribute('href');
      }
    }
  }
}

var isOutlineOpen = false;
var isSearchResultOpen = false;

function closeSubChapterPopup() {
  document.getElementById('OutlineTestBack').style.visibility = 'hidden';
  document.getElementById('subChapterdivpointer').style.display = 'none';
  document.getElementById('outlinesubchapterL').innerHTML = "";
  document.getElementById('outlinesubchapterL').scrollTop = 0;
  subChapterDiv.style.display = 'none';

  var mainChapterlist = document.getElementsByClassName('mainchapter');
  //reseting background color of mainchapter li's
  for (i = 0; i < mainChapterlist.length; i++) {
    mainChapterlist[i].style.background = "#F0F0F0";
  }
  document.getElementById('mainchapter').style.background = "#F0F0F0";
}


function ShowHideOutline() {

  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters) && document.getElementById("nGeneralPopup").style.display != 'none')
    return;

  closePopUp();

  //checking for subchapter div. if open close it. 
  subChapterDiv = document.getElementById('courseOutlinesubchapter');

  if (subChapterDiv.style.display != 'none') {
    closeSubChapterPopup();
  }

  if (isOutlineOpen && !outlineanimating) {
    OutlineHide(0);
  }
  else if (!outlineanimating) {

    if (isTranscriptOpen) {
      closeTranscript();
    }
    hideVideoControls();
    document.getElementById('forscroll').scrollTop = 0;
    OutlineShow(0);
  }

}

// function for animation in outline
function OutlineShow(num) {

  var l_position;
  var l_value;
  var objOutlineL = document.getElementById("outlinebookcontainer");
  document.getElementById('blockaction').style.display = '';

  outlineanimating = true;
  isOutlineOpen = true;

  startpos = -302;
  endpos = 0;

  l_value = endpos - startpos;
  l_position = Math.abs(l_value);

  var x = (l_value) / (l_position);

  if (num <= l_position / 50) {
    objOutlineL.style.left = startpos + x * num * 50;
    num++;
    setTimeout("OutlineShow(" + num + ")", 100);
  }
  else {
    outlineanimating = false;
    if (objOutlineL.style.left != endpos)
      objOutlineL.style.left = endpos;
  }

}

function OutlineHide(num) {

  var l_position;
  var l_value;
  var x;
  var objOutlineL = document.getElementById("outlinebookcontainer");

  outlineanimating = true;
  isOutlineOpen = false;
  //hrb: reset the flag to show that it has been closed

  startpos = 0;
  endpos = -302;

  l_value = endpos - startpos;
  l_position = Math.abs(l_value);

  x = (l_value) / (l_position);

  if (num <= l_position / 50) {
    objOutlineL.style.left = startpos + x * num * 50;
    num++;
    setTimeout("OutlineHide(" + num + ")", 100);
  }
  else {
    outlineanimating = false;
    document.getElementById('blockaction').style.display = 'none';
    if (objOutlineL.style.left != endpos)
      objOutlineL.style.left = endpos;
  }

} // end OutlineHide()

// function for animation in tools menu start
function HideMenu(num, level) {

  var l_position;
  var l_value;
  var objOutlineL = document.getElementById("animdiv");
  objOutlineL.style.display = '';

  toolsmenuanimating = true;

  if (level == 1) {
    startpos = -312;
    endpos = 0;
  }
  else if (level == 2) {
    startpos = -612;
    endpos = -312;
  }

  l_value = endpos - startpos;
  l_position = Math.abs(l_value);

  var x = (l_value) / (l_position);

  if (num <= l_position / 50) {
    objOutlineL.style.left = startpos + x * num * 50;
    num++;
    setTimeout("HideMenu(" + num + ")", 100);
  }
  else {
    toolsmenuanimating = false;
    if (objOutlineL.style.left != endpos)
      objOutlineL.style.left = endpos;
  }

}


function ShowMenu(num, level) {

  var l_position;
  var l_value;
  var x;


  toolsmenuanimating = true;

  var objOutlineL = document.getElementById("animdiv");
  if (level == 1) {
    startpos = 0;
    endpos = -312;
  }
  else if (level == 2) {
    startpos = -312;
    endpos = -612;
  }

  l_value = endpos - startpos;
  l_position = Math.abs(l_value);

  x = (l_value) / (l_position);

  if (num <= l_position / 50) {
    objOutlineL.style.left = startpos + x * num * 50;
    num++;
    setTimeout("ShowMenu(" + num + "," + level + ")", 100);
  }
  else {
    toolsmenuanimating = false;
    if (objOutlineL.style.left != endpos)
      objOutlineL.style.left = endpos;
  }

} // end Hide()

function nSelectMenu(view) {

  var containerdiv = document.getElementById('containerdiv');
  var contentdiv = document.getElementById('contentdiv2');
  var contentdivhead = document.getElementById('contentdiv2head');

  if (!toolsmenuanimating) {
    hideVideoControls();
    if (view == "print") {
      contentdivhead.innerHTML = "Print";
      contentdiv.innerHTML = document.getElementById('nprintPopUp').innerHTML;
      containerdiv.style.height = 248;
      ShowMenu(0, 1);
    }
    else if (view == "tools") {
      contentdivhead.innerHTML = "Course References";
      contentdiv.innerHTML = document.getElementById('ntoolsPopUp').innerHTML;
      document.getElementById('ToolsBack').style.display = '';
      containerdiv.style.height = 255;
      ShowMenu(0, 1);
    }
    else if (view == "glossary") {
      //closePopUp();
      document.getElementById('containerdiv').style.display = 'none';
      document.getElementById('gotoUpArrow').style.display = 'none';

      gbl_outlineForGlossary = true;
      contentdivhead.innerHTML = "Glossary";
      contentdiv.innerHTML = document.getElementById('nglossaryPopUp').innerHTML;
      containerdiv.style.height = 380;
      //ShowMenu(0,1);
      document.getElementById('FAQGloss').style.display = 'block';
      document.getElementById('FAQGlossHead').innerHTML = 'Glossary';
      document.getElementById('FAQGlossHead').style.fontWeight = 'bold';
      document.getElementById('FAQGlossLeft').innerHTML = document.getElementById('nglossaryPopUp').innerHTML;
      document.getElementById('closefaq-label').innerHTML = "close glossary menu";
      // adjusting height if the content is more.
      // setting time-out as 1st element's height was not getting adjusted in iPad
      setTimeout(function () {
        var GlossaryList = document.getElementById('FAQGlossLeft').getElementsByTagName('li');
        for (var cnt = 0; cnt < GlossaryList.length; ++cnt) {
          //if(GlossaryList[cnt].scrollHeight > 32) {
          if (isFF) {
            GlossaryList[cnt].style.height = GlossaryList[cnt].scrollHeight + 11;
          }
          else {
            GlossaryList[cnt].style.minHeight = GlossaryList[cnt].scrollHeight + 11;
          }
          //}
        }
      }, '1');
      document.getElementById('modaldiv').style.display = '';
    }
    else if (view == "help") {
      //contentdivhead.innerHTML="Help";
      //contentdiv.innerHTML= document.getElementById('helpItem').innerHTML;
      //containerdiv.style.height=380;
      //ShowMenu(0,1);
      //closePopUp();
      document.getElementById('containerdiv').style.display = 'none';
      document.getElementById('gotoUpArrow').style.display = 'none';

      //if(FinalExam == EXAM_POSITION_BYCOURSE)
      //{
      document.getElementById('nGeneralPopupHeader').innerHTML = 'FAQs';
      var tempfaq = document.getElementById("suppiframe").contentWindow.document.body.innerHTML;
      if (!isSafari || navigator.userAgent.match(/iPad/i) != null)
        tempfaq = tempfaq.replace(/"&nbsp;&nbsp;/ig, '"');
      document.getElementById('nGeneralPopupBody').innerHTML = tempfaq;

      document.getElementById('nGeneralPopup').style.height = 574;
      document.getElementById('nGeneralPopup').style.width = 770;
      document.getElementById('nGeneralPopupBody').style.height = 507;
      document.getElementById('closeBtnnGeneralPopup').style.left = 735;
      document.getElementById('closepopup-label').innerHTML = "close FAQ";

      //aligning the div popup center
      var controlpageele = document.getElementById('controlpage');
      var nGeneralPopupele = document.getElementById('nGeneralPopup');
      nGeneralPopupele.style.left = 512 - (parseInt(nGeneralPopupele.style.width) / 2);

      nGeneralPopupele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupele.style.height) / 2);
      // end aligning the popup to center

      document.getElementById('closeBtnnGeneralPopup').style.display = '';
      document.getElementById('nGeneralPopup').style.display = '';
      /*}
      else
      {
      document.getElementById('FAQGloss').style.display = 'block';
      document.getElementById('FAQGlossHead').innerHTML = 'FAQs';
      document.getElementById('FAQGlossHead').style.fontWeight = 'bold';
      document.getElementById('FAQGlossLeft').innerHTML = document.getElementById('helpItem').innerHTML;
      document.getElementById('closefaq-label').innerHTML="close FAQ menu";
      }*/
      document.getElementById('modaldiv').style.display = '';
    }
    else if (view == "calculator") {
      var inner = document.getElementById("cal").innerHTML;
      document.getElementById('ToolsBack').style.display = '';
      contentdivhead.innerHTML = "Calculator";
      contentdiv.innerHTML = inner;
      containerdiv.style.height = 480;
      contentdiv.getElementsByTagName('iframe')[0].style.display = '';
      contentdiv.getElementsByTagName('iframe')[0].style.visibility = 'visible';

      ShowMenu(0, 1);
    }
  }
}

// function for animation in tools menu end
function closeFAQGloss() {
  document.getElementById('FAQGloss').style.display = 'none';
  document.getElementById('modaldiv').style.display = 'none';
  document.getElementById('FAQGlossRight').innerHTML = "";
  gbl_outlineForGlossary = false;
  closePopUp();
}
function showToolsMenu() {
  closePopUp();
  hideVideoControls();
  document.getElementById('gotoUpArrow').style.display = "";
  document.getElementById('gotoUpArrow').style.left = 783;
  document.getElementById('gotoUpArrow').className = "gotoArrow outlineArrow";
  document.getElementById('containerdiv').style.height = 370;
  document.getElementById('containerdiv').style.display = '';
  document.getElementById('animdiv').style.left = 0;

}

// function for new glossary popup
var glossaryHead;
function showGlossaryPopup(loc, heading, event) {
  if (gbl_outlineForGlossary) {
    var element = event.target;
    var arrOfGlossaryTerms = element.parentElement.parentElement.getElementsByTagName('li');
    var curEle;
    if (element.tagName.toLowerCase() != 'li') {
      arrOfGlossaryTerms = element.parentElement.parentElement.getElementsByTagName('li');
      curEle = element.parentElement;
    }
    else {
      arrOfGlossaryTerms = element.parentElement.getElementsByTagName('li');
      curEle = element;
    }
    for (var i = 0; i < arrOfGlossaryTerms.length; i++) {
      arrOfGlossaryTerms[i].style.backgroundColor = "#FFFFFF";
    }

    curEle.style.backgroundColor = "#E0E0E0";
  }
  glossaryHead = heading;
  document.getElementById("glossiframe").src = loc;
  //waiting for page load
  /*setTimeout(function(){
   
  },"100");*/

}

function closeGeneralPopup() {
  closePopUp();
  if (isOutlineOpen && !outlineanimating) {
    OutlineHide(0);
  }
  document.getElementById('courseOutlinesubchapter').style.display = 'none';
  document.getElementById('subChapterdivpointer').style.display = 'none';
  document.getElementById('nGeneralPopupHeader').innerHTML = "";
  document.getElementById('nGeneralPopupBody').innerHTML = "";
  document.getElementById('modaldiv').style.display = 'none';
  document.getElementById('nGeneralPopup').style.display = 'none';
  document.getElementById('nGeneralPopupOkHeader').innerHTML = "";
  document.getElementById('nGeneralPopupOkBody').innerHTML = "";
  document.getElementById('nGeneralPopupOk').style.display = 'none';
  document.getElementById('purchaseCancel').style.display = 'none';

}


function ShowHideSubChapter(sub_no, source) {

  var mainChapterlist = document.getElementsByClassName('mainchapter');

  //reseting background color of mainchapter li's
  for (i = 0; i < mainChapterlist.length; i++) {
    mainChapterlist[i].style.background = "#F0F0F0";
  }
  document.getElementById('mainchapter').style.background = "#F0F0F0";

  if (sub_no != 0)
    mainChapterlist[sub_no - 1].style.background = "#E0E0E0";
  else
    document.getElementById('mainchapter').style.background = "#E0E0E0";

  curSubChapForTest = source;

  var ele = document.getElementById('sub_' + sub_no);

  //setting pointer to the position
  var pointer = document.getElementById('subChapterdivpointer');
  var scrollTop = document.getElementById('forscroll').scrollTop;
  curSubTop = source.offsetTop;
  pointer.style.display = '';
  var pointerTop = curSubTop + 51 + source.getElementsByTagName("div")[0].offsetTop - scrollTop;
  var maxArrowTop = (document.getElementById('controlpage').offsetHeight) - 88;

  if (pointerTop > maxArrowTop)
    pointerTop = maxArrowTop

  pointer.style.top = pointerTop;
  pointer.style.left = 288;
  // setting subchapter popup top
  var maxTop = document.getElementById('controlpage').offsetHeight;
  maxTop = maxTop - 300 - 50; // maxTop - subchapterDiv's height - footer height
  currentTop = curSubTop + 41 - scrollTop;
  if (currentTop < maxTop)
    document.getElementById('courseOutlinesubchapter').style.top = currentTop;
  else
    document.getElementById('courseOutlinesubchapter').style.top = maxTop;

  document.getElementById('OutlineTestBack').style.visibility = 'hidden';
  //document.getElementById('subChapterHeading').style.left=10;
  //resetting scroll for subchpater div 
  document.getElementById('outlinesubchapterL').scrollTop = 0;

  if (sub_no > 0)
    document.getElementById('subChapterHeading').innerHTML = sub_no + ". " + source.getElementsByTagName('div')[1].innerHTML;
  else
    document.getElementById('subChapterHeading').innerHTML = source.getElementsByTagName('div')[1].innerHTML;



  //added setTimeout() because of issue in ipad where it was not refreshing the list for the first subchapter when on video or interactivity page. 
  setTimeout(function () {
    document.getElementById('outlinesubchapterL').innerHTML = ele.innerHTML;
    document.getElementById('courseOutlinesubchapter').style.display = '';
    // setting timeout as 1st element's min-height was not getting adjust
    setTimeout(function () {
      var mainChapterList = document.getElementById('outlinesubchapterL').getElementsByClassName('subchapterlist')
      for (var cnt = 0; cnt < mainChapterList.length; ++cnt) {
        if (mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight > 22) {

          var adjust = (mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight - 15) / 2;
          mainChapterList[cnt].getElementsByTagName('div')[1].style.top = adjust;
          mainChapterList[cnt].getElementsByTagName('div')[3].style.top = adjust - 1;

        }
        if (isFF) {
          mainChapterList[cnt].getElementsByTagName('div')[0].style.height = mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight + 18;

        }
        else {
          mainChapterList[cnt].getElementsByTagName('div')[0].style.minHeight = mainChapterList[cnt].getElementsByTagName('div')[0].scrollHeight + 18;
        }
      }
    }, '1');
  }, '1');
}

function openToolsPopUp(loc) {
  window.open(loc, "_blank", "");
}


function createRecentSearch() {

  document.getElementById('searchHead').innerHTML = "Recent Searches";
  //enable cancel button for search
  //document.getElementById('searchCancelButton').style.display='';

  var temphtml = '';
  var ulstart = "<ul class='categoryList'> ", ulend = " </ul> ";

  if (recentSearch != "") {
    var recentSearchArr = recentSearch.split("##@$");
    for (i = recentSearchArr.length - 1; i >= 0; i--) {
      temphtml = temphtml + "<li class='categoryRowTemplate_template'>";
      temphtml = temphtml + "<div class='nonChapterLabel_template' style='top:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;' onclick='document.getElementById(\"searchText\").value=\"" + recentSearchArr[i] + "\";document.getElementById(\"searchCancelButton\").style.display=\"\";DoSearch_ipad();'>" + recentSearchArr[i] + "</div></li>";
    }
  }
  document.getElementById('searchResult').style.visibility = 'visible';
  isSearchResultOpen = true;
  document.getElementById("searchL1").innerHTML = ulstart + temphtml + ulend;

}
/*
function loadSupplement(){
var ele = document.getElementById('suppiframe');
  
//returning if it is the initial frame load
if(ele.src.indexOf('\control.htm')!=-1)
return;
    
var supcontent= ele.contentWindow.document.body.innerHTML;
supcontent= "<div class='categoryView' style='height:473px;overflow-y:auto;word-wrap:break-word;' >"+supcontent+"</div>"
document.getElementById('FAQGlossRight').style.backgroundColor="white";
document.getElementById('FAQGlossRight').innerHTML = supcontent;
document.getElementById('FAQGlossRight').style.backgroundColor="#FAFAFA";

}*/


function ShowHideTest(test_no, heading) {
  outlineflag = 0;
  if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
    showCoursePreviewPopUp();

    //$("#scrollpopup").width("318px"); 
    //document.getElementById("popupL").style.left = "0px";
    //document.getElementById("popupL").style.zIndex = "6";
    //$("#popupL").zIndex("6");
    // CurrentChapter = clickedfromchapter;
    return;
  }
  else if (noOfattempts >= CHAPTER_TEST_PASSED) {
    var title = CHAPTER_TEST;
    var desc = CHAPTERTEST_PASS_INFO1;
    document.getElementById('nGeneralPopupOkHeader').innerHTML = title;
    document.getElementById('nGeneralPopupOkBody').innerHTML = desc;
    document.getElementById('modaldiv').style.display = '';
    document.getElementById('nGeneralPopupOk').style.height = 215;
    document.getElementById('nGeneralPopupOk').style.width = 380;
    document.getElementById('nGeneralPopupOkBody').style.height = 270;
    document.getElementById('okBtnnGeneralPopup').style.left = 145;

    //aligning the div popup center
    var controlpageele = document.getElementById('controlpage');
    var nGeneralPopupOkele = document.getElementById('nGeneralPopupOk');
    nGeneralPopupOkele.style.left = 512 - (parseInt(nGeneralPopupOkele.style.width) / 2);
    nGeneralPopupOkele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupOkele.style.height) / 2);
    //end aligning the div popup center

    document.getElementById("nGeneralPopupOk").style.display = '';
    return;
  }
  else if (noOfattempts == testAttempts) {
    var title = CHAPTER_TEST;
    var alertMsg = FAILED_CANNOT_RETAKE_TEST_PART3 + testAttempts + FAILED_CANNOT_RETAKE_TEST_PART2;
    document.getElementById('nGeneralPopupOkHeader').innerHTML = title;
    document.getElementById('nGeneralPopupOkBody').innerHTML = alertMsg;

    document.getElementById('modaldiv').style.display = '';
    document.getElementById('nGeneralPopupOk').style.height = 215;
    document.getElementById('nGeneralPopupOk').style.width = 380;
    document.getElementById('nGeneralPopupOkBody').style.height = 270;
    document.getElementById('okBtnnGeneralPopup').style.left = 145;

    //aligning the div popup center
    var controlpageele = document.getElementById('controlpage');
    var nGeneralPopupOkele = document.getElementById('nGeneralPopupOk');
    nGeneralPopupOkele.style.left = 512 - (parseInt(nGeneralPopupOkele.style.width) / 2);
    nGeneralPopupOkele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupOkele.style.height) / 2);
    //end aligning the div popup center

    document.getElementById("nGeneralPopupOk").style.display = '';
    return;
  }
  else {
    ele = document.getElementById(test_no);
    document.getElementById('OutlineTestBack').style.visibility = 'visible';
    //document.getElementById('subChapterHeading').style.left =90;
    //document.getElementById('subChapterHeading').innerHTML="Chapter Test";
    document.getElementById('subChapterHeading').innerHTML = heading;
    document.getElementById('outlinesubchapterL').scrollTop = 0;
    document.getElementById('outlinesubchapterL').innerHTML = ele.innerHTML;
    document.getElementById('courseOutlinesubchapter').style.display = '';
  }
}


function selectTestQuestionFromOutline(chapNo, index) {
  if (FinalExam == EXAM_POSITION_BYCOURSE) {
    if (mode != "test") {
      isChapterTestPageShown = true;
      ShowFinalExam();
      ShowQuestions(index);
      ShowHideOutline();
    }
    else {
      ShowQuestions(index);
      ShowHideOutline();
    }

    outlineflag = 0;
    return;
  }

  if (mode != "test" || parseInt(chapNo) != parseInt(CurrentChapter)) {
    isChapterTestPageShown = true;
    St(chapNo);
    ShowQuestions(index);
    ShowHideOutline();
  }
  else {
    ShowQuestions(index);
    ShowHideOutline();
  }
  outlineflag = 0;
}


function showBookMarkMenu() {
  if (lessonMode == LESSON_PREVIEWER_MODE) {
    return;
  }

  closePopUp();
  hideVideoControls();
  document.getElementById('gotoUpArrow').style.display = "";
  document.getElementById('gotoUpArrow').style.left = 848;
  document.getElementById('gotoUpArrow').className = "gotoArrow outlineArrow";
  document.getElementById('bookmarksContent').innerHTML = document.getElementById('bookmarkItem').innerHTML;
  document.getElementById('BookmarkContainerdiv').style.display = '';
  document.getElementById('bkeditbtn').style.visibility = 'visible';

  if (document.getElementById('ulBookmarks').innerHTML == '') {
    document.getElementById('bookmarksContent').innerHTML = "<div style='position:absolute; left:67px;top:22px;'>No Bookmarks Added.</div>";
    document.getElementById('bkeditbtn').style.visibility = 'hidden';
  }
  else
    document.getElementById('bkeditbtn').style.visibility = 'visible';
}

// hiding/showing all the delete options from the bookmark menu
function showHideBkmrkDeleteOpt(action) {

  var ulele = document.getElementById('bookmarkItem').getElementsByTagName('li');

  for (licount = 0; licount < ulele.length; licount++) {

    var divele = ulele[licount].getElementsByTagName('div');

    if (action == "show") {
      divele[0].style.display = '';
      divele[5].style.display = '';
      divele[6].style.right = 10;
      divele[7].style.display = '';
      divele[1].style.width = 180;
      divele[2].style.width = 180;
    }
    else {
      divele[0].style.display = 'none';
      divele[5].style.display = 'none';
      divele[6].style.right = -15;
      divele[7].style.display = 'none';
      divele[1].style.width = 240;
      divele[2].style.width = 240;
      bkMarkDeleteFlag = true;
    }
  }
  document.getElementById('bookmarksContent').innerHTML = document.getElementById('bookmarkItem').innerHTML;
}


// hiding all the delete button from bookmark menu
function HideBkmrkDeleteBtn() {

  var ulele = document.getElementById('bookmarkItem').getElementsByTagName('li');

  for (licount = 0; licount < ulele.length; licount++) {
    var divele = ulele[licount].getElementsByTagName('div');
    //change the background image to horizontal
    divele[0].style.backgroundColor = 'black';
    divele[4].style.display = 'none';
    divele[5].style.display = '';
  }
  document.getElementById('bookmarksContent').innerHTML = document.getElementById('bookmarkItem').innerHTML;
}

function ShowBkmrkDeleteBtn(ele) {
  if (bkMarkDeleteFlag) {
    action = "show";
    bkMarkDeleteFlag = false;
  }
  else {
    action = "hide";
    bkMarkDeleteFlag = true;
  }

  //index=ele.currentTarget.parentElement.id;
  index = ele.id;
  var divli = document.getElementById('bookmarkItem').getElementsByTagName('li')
  var divele;
  for (licount = 0; licount < divli.length; licount++) {
    if (index == divli[licount].id) {
      divele = divli[licount];
      break;
    }
  }

  var delbtn = divele.getElementsByTagName('div')[4];

  if (action == 'show') {
    // change the background image to vertical
    divele.getElementsByTagName('div')[5].style.display = 'none';
    divele.getElementsByTagName('div')[0].style.backgroundColor = 'gray';
    delbtn.style.display = '';
  }
  else {
    // change the background image to horizontal
    divele.getElementsByTagName('div')[5].style.display = '';
    divele.getElementsByTagName('div')[0].style.backgroundColor = 'black';
    delbtn.style.display = 'none';
  }

  document.getElementById('bookmarksContent').innerHTML = document.getElementById('bookmarkItem').innerHTML;
}


function nDeleteBookmark(ele) {
  index = ele.parentElement.id;
  var divli = document.getElementById('bookmarkItem').getElementsByTagName('li')
  var divele;
  $(ele.parentElement).slideUp(200);

  setTimeout(function () {
    try {
      for (licount = 0; licount < divli.length; licount++) {
        if (index == divli[licount].id) {
          divele = divli[licount];
          break;
        }
      }

      var delbtn = divele.getElementsByTagName('div')[3];
      var bookmarkDesc = delbtn.innerHTML;

      fndeleteBookMark(bookmarkDesc);
      showHideBkmrkDeleteOpt("show");

      var bookmarkDescL = document.getElementById("bkDescription").innerHTML;
      if (bookmarkDescL == bookmarkDesc) {
        bookmarkDiv.innerHTML = '<embed id="markunmarkbookmark" src="common/images/bookmark-icon.svg" width="17px" height="32px"></embed>';
        bookmarkDiv.className = 'bookMark';
        document.getElementById('add-bookmark-label').innerHTML = "add bookmark";
      }
      if (divli.length == 0)
        editBookMark();

      bkMarkDeleteFlag = true;
    } catch (e) { alert('cannot delete bookmark'); }
  }, '200');
}

function editBookMark() {
  if (editBookMarkFlag) {
    showHideBkmrkDeleteOpt('show');
    editBookMarkFlag = false;
    document.getElementById('bkeditbtn').innerHTML = "Done";
    //populate the bookmarkTopArray
    initBkShuffle();
  }
  else {
    if (document.getElementById('bookmarkItem').getElementsByTagName('li').length > 0) {
      showHideBkmrkDeleteOpt('hide');
      editBookMarkFlag = true;
      document.getElementById('bkeditbtn').innerHTML = "Edit";
    } else {
      document.getElementById('bkeditbtn').innerHTML = "Edit";
      document.getElementById('bkeditbtn').style.visibility = "hidden";
      document.getElementById('bookmarksContent').innerHTML = "<div style='position:absolute; left:67px;top:22px;'>No Bookmarks Added.</div>";
    }
  }

}

function nShowPrintPopUp() {
  document.getElementById('contentdiv3head').innerHTML = "Print";
  document.getElementById('contentdiv3').innerHTML = document.getElementById('nprintChaptersPopUp').innerHTML;
  document.getElementById('containerdiv').style.height = 260;
  ShowMenu(0, 2);
}




function initBkShuffle() {
  listitems = document.getElementById('bookmarksContent').getElementsByTagName('ul')[0].getElementsByTagName('li');
  paneltop = $('#bookmarksContent').offset().top;
  for (i = 0; i < listitems.length; i++) {
    var l = listitems[i].offsetTop + paneltop + 20;
    posArray[i] = l;
  }

}

var pos = -1;

function shufflestart(ele, event) {

  try {
    index = ele.id;
    gl_bkshufflestart = ele;
    var curPosY;
    if (event.targetTouches)
      curPosY = event.targetTouches[0].pageY;
    else
      curPosY = event.pageY;


    document.getElementById('shufflebkmrk').style.top = curPosY - 24;
    var divele = ele.parentElement;
    document.getElementById('shufflebkmrk').getElementsByTagName('ul')[0].innerHTML = divele.outerHTML;

    document.getElementById('shufflebkmrk').style.display = '';
    bkshuffleflag = true;

  } catch (e) { }

}

function shuffle(event) {

  try {
    //event = window.event;
    event.preventDefault();
    if (!bkshuffleflag)
      return;

    var curPosY;
    var scrolltop = document.getElementById('bookmarksContent').scrollTop;
    if (event.targetTouches)
      curPosY = event.targetTouches[0].pageY;
    else
      curPosY = event.pageY;



    if (curPosY < (document.getElementById('BookmarkContainerdiv').offsetHeight + 24) && curPosY > posArray[0]) {

      curPosY = curPosY + scrolltop;
      document.getElementById('shufflebkmrk').style.top = curPosY - 24 - scrolltop;
      if (curPosY >= posArray[$(gl_bkshufflestart.parentElement).index()]) {
        curPosY = curPosY + 15;
        for (var range = 0; range < posArray.length; range++) {
          if (curPosY > posArray[range] && (range + 1 == posArray.length || curPosY < posArray[range + 1])) {
            pos = range; break;
          }
        }
      }
      else {
        curPosY = curPosY - 15;
        for (var range = posArray.length - 1; range >= 0; range--) {
          if (curPosY < posArray[range] && (range == 0 || curPosY > posArray[range - 1])) {
            pos = range; break;
          }
        }

      }

    }


  } catch (e) { }
}


function shuffleend(event) {
  try {
    if (!bkshuffleflag)
      return;

    start = $(gl_bkshufflestart.parentElement).index();
    if (start == pos || pos == -1) {
      document.getElementById('shufflebkmrk').style.display = 'none';
      return;
    }

    bkshuffleflag = false;
    if (pos > start) {
      // shuffle down.
      direction = 1;
      updateBookmarkArray();
      $(gl_bkshufflestart.parentElement).slideUp(400, shuffleend_shuffledown);
    }
    else if (pos < start) {
      // shuffle up
      direction = 0;
      updateBookmarkArray();
      $(gl_bkshufflestart.parentElement).slideUp(400, shuffleend_shuffleup);
    }

    document.getElementById('shufflebkmrk').style.display = 'none';
  } catch (e) {
    document.getElementById('shufflebkmrk').style.display = 'none';
  }

}

function shuffleend_shuffledown() {
  var templi = document.getElementById('shufflebkmrk').getElementsByTagName('ul')[0];
  $(document.getElementById('bookmarksContent').getElementsByTagName('li')[pos]).after(templi.innerHTML);
  document.getElementById('bookmarksContent').getElementsByTagName('li')[pos + 1].style.display = 'none';
  $(document.getElementById('bookmarksContent').getElementsByTagName('li')[pos + 1]).slideDown(600, shuffleend_removeli);

}

function shuffleend_shuffleup() {
  var templi = document.getElementById('shufflebkmrk').getElementsByTagName('ul')[0];
  $(document.getElementById('bookmarksContent').getElementsByTagName('li')[pos]).before(templi.innerHTML);
  document.getElementById('bookmarksContent').getElementsByTagName('li')[pos].style.display = 'none';
  $(document.getElementById('bookmarksContent').getElementsByTagName('li')[pos]).slideDown(600, shuffleend_removeli);
}

function shuffleend_removeli() {
  $(gl_bkshufflestart.parentElement).remove();
  document.getElementById('bookmarkItem').innerHTML = document.getElementById('bookmarksContent').innerHTML;

}


function updateBookmarkArray() {

  //code to delete from bookmarkArray
  var title = gl_bkshufflestart.parentElement.getElementsByTagName('div')[3].innerHTML;
  for (itr = 0; itr < bookmarkArray.length; itr++) {
    if (bookmarkArray[itr].bkTitle == title) {
      bkmrk_buffer = bookmarkArray[itr];
      bookmarkArray.splice(itr, 1);

      break;
    }

  }

  // code to add it in bookmarkArray
  var divli = document.getElementById('bookmarksContent').getElementsByTagName('li');

  if (direction == 1)
    target_title = divli[pos].getElementsByTagName('div')[3].innerHTML;
  else
    target_title = divli[pos].getElementsByTagName('div')[3].innerHTML;

  for (itr = 0; itr < bookmarkArray.length; itr++) {
    if (bookmarkArray[itr].bkTitle == target_title) {
      bookmarkArray.splice((itr + direction), 0, bkmrk_buffer);
      break;
    }

  }

}

var bkmark_orig;
var bkmark_origname;
var liele;

function allowEditBookmark(ele) {
  if (!editBookMarkFlag) {
    divs = ele.getElementsByTagName('div');
    document.getElementById('txtbkEditDescription').value = divs[2].innerHTML;
    liele = ele;
    bkmark_origname = divs[2].innerHTML;
    bkmark_orig = divs[3].innerHTML;
    document.getElementById('BookmarkContainerdiv').style.display = 'none';
    document.getElementById('bookmarkEdit').style.display = '';
    // adding focus twice due to behaviour in ipad
    //document.getElementById('txtbkEditDescription').focus();
    document.getElementById('txtbkEditDescription').focus();

  }

}

function EditBookMarkBack() {
  $("#txtbkEditDescription").blur();
  var newTitle = "";
  var desc = document.getElementById('txtbkEditDescription').value;
  if (desc.trim() == '')
    newTitle = bkmark_origname;
  else
    newTitle = document.getElementById('txtbkEditDescription').value;

  if (fnIsDuplicateBookmark(desc, true)) {
    newTitle = bkmark_origname;
  }

  for (itr = 0; itr < bookmarkArray.length; itr++) {
    if (bookmarkArray[itr].bkTitle == bkmark_orig) {
      bookmarkArray[itr].bkDescription = newTitle;
      liele.getElementsByTagName('div')[2].innerHTML = newTitle;
      break;
    }
  }
  document.getElementById('bookmarkEdit').style.display = 'none';
  document.getElementById('editbkmrkclear').style.display = '';
  document.getElementById('BookmarkContainerdiv').style.display = '';
  document.getElementById('bookmarkItem').innerHTML = document.getElementById('bookmarksContent').innerHTML;

}

function editBookmarkOnEnterKey(e) {
  if (document.getElementById('txtbkEditDescription').value.trim() == '')
    document.getElementById('editbkmrkclear').style.display = 'none';
  else
    document.getElementById('editbkmrkclear').style.display = '';

  if (e != null && e.keyCode == 13) {
    EditBookMarkBack();
  }
}

function showSearchMenu() {
  if (lessonMode == LESSON_PREVIEWER_MODE) {
    return;
  }

  closePopUp();
  hideVideoControls();
  document.getElementById('gotoUpArrow').style.display = "";
  document.getElementById('gotoUpArrow').style.left = 968;
  document.getElementById('gotoUpArrow').className = "gotoArrow outlineArrow";
  document.getElementById('searchcontainer').style.display = '';
  createRecentSearch();
  // adding focus twice due to behaviour in ipad
  //document.getElementById('searchText').focus();
  if (navigator.userAgent.match(/iPad/i) == null)
    document.getElementById('searchText').focus();

}

function showPrintMenu() {
  if (lessonMode == LESSON_PREVIEWER_MODE) {
    return;
  }

  var containerdiv = document.getElementById('containerdiv');
  var contentdiv = document.getElementById('contentdiv2');
  var contentdivhead = document.getElementById('contentdiv2head');

  closePopUp();
  hideVideoControls();
  document.getElementById('ToolsBack').style.display = 'none';
  document.getElementById('gotoUpArrow').style.display = "";
  document.getElementById('gotoUpArrow').style.left = 908;
  document.getElementById('gotoUpArrow').className = "gotoArrow outlineArrow";



  containerdiv.style.display = '';
  contentdivhead.innerHTML = "Print";

  contentdiv.innerHTML = document.getElementById('nprintPopUp').innerHTML;
  containerdiv.style.height = 260;
  endpos = -312;
  var objOutlineL = document.getElementById("animdiv");
  objOutlineL.style.left = endpos;
}

function showGradedAnswer() {
  var gradedAnswerContent = document.getElementById("gradedAnsweriframe").contentWindow.document.body.innerHTML;
  //document.getElementById('nGradedAnswerPopupL').innerHTML = gradedAnswerContent;
  document.getElementById('nGeneralPopupHeader').innerHTML = 'Graded Answers';
  document.getElementById('nGeneralPopupBody').innerHTML = gradedAnswerContent;

  divider = document.getElementById('nGeneralPopupBody').getElementsByClassName('divider');
  divider[divider.length - 1].style.display = 'none';

  document.getElementById('nGeneralPopup').style.height = 574;
  document.getElementById('nGeneralPopup').style.width = 770;
  document.getElementById('nGeneralPopupBody').style.height = 507;
  document.getElementById('closeBtnnGeneralPopup').style.left = 735;
  document.getElementById('closepopup-label').innerHTML = "close graded answers";
  //aligning the div popup center
  var controlepageele = document.getElementById('controlpage')
  var nGeneralPopupele = document.getElementById('nGeneralPopup');
  nGeneralPopupele.style.left = 512 - (parseInt(nGeneralPopupele.style.width) / 2);
  nGeneralPopupele.style.top = controlepageele.offsetTop + (controlepageele.offsetHeight / 2) - (parseInt(nGeneralPopupele.style.height) / 2);

  // end aligning the div popup center

  document.getElementById('closeBtnnGeneralPopup').style.display = '';
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('nGeneralPopup').style.display = '';
  document.getElementById('modaldiv').style.display = '';



  //document.getElementById('nGradedAnswerPopup').style.display='';

}


var imagesArray = new Array();
var currImgIndex = 0;
var isanimating = false;
var alttextArray = new Array();
function initImageArray() {
  imagesArray = ['navdemo01.png', 'navdemo02.png', 'navdemo03.png', 'navdemo04.png', 'navdemo05.png', 'navdemo06.png', 'navdemo07.png', 'navdemo08.png', 'navdemo09.png', 'navdemo10.png', 'navdemo11.png', 'navdemo12.png', 'navdemo13.png', 'navdemo14.png', 'navdemo15.png', 'navdemo16.png'];

  alttextArray[0] = "Select the Safari Action icon to add the Checkpoint Learning website to your home screen.";
  alttextArray[1] = "Tap the Table of Contents icon to see the course outline. Tap a chapter title to see subchapters.";
  alttextArray[2] = "Tap the arrows to navigate to the previous or next screen.";
  alttextArray[3] = "Tap the Search icon to use the search function.";
  alttextArray[4] = "Tap the Print icon to print the entire course or certain sections of the course.";
  alttextArray[5] = "Tap the Add Bookmark icon to bookmark a page in the course.";
  alttextArray[6] = "Tap the Bookmarks icon to see list of pages you have bookmarked.";
  alttextArray[7] = "Tap the Toolbox icon to access your resources.";
  alttextArray[8] = "Tap Glossary to see glossary terms. Tap a term to see its definition.";
  alttextArray[9] = "Supplement materials are located under Course References.";
  alttextArray[10] = "Select FAQs to display userful information about the course and support.";
  alttextArray[11] = "Tap the Transcripts button to view or read the content for video and audio clips.";
  alttextArray[12] = "After successfully completing the course, you can access your Certificate from the Table of Contents.";
  alttextArray[13] = "The Page Counter feature in the lower left displays the current chapter number and page number.";
  alttextArray[14] = "The Progress Bar indicator in the lower center displays the percentage of the course you have completed so far.";
  alttextArray[15] = "Tap Exit & Resume Later to leave the course at any time. Your course progress will be saved.";

  document.getElementsByClassName('visible')[0].getElementsByTagName('img')[0].src = "common/images/" + imagesArray[0];
  document.getElementsByClassName('visible')[0].getElementsByTagName('img')[0].alt = alttextArray[0];
  document.getElementById('carouselnav').innerHTML = '';
  for (i = 0; i < imagesArray.length; i++) {
    divele = document.createElement('div');
    divele.className = "disabled";

    divembed = document.createElement('embed');
    divembed.src = "common/images/nav-dot1.svg";

    divele.appendChild(divembed);

    document.getElementById('carouselnav').appendChild(divele);
    test = document.createElement('div');
    test.className = "divmask";
    test.value = i;
    test.addEventListener("click", function () { gotoNavDemoScreen(this); });

    document.getElementById('carouselnav').appendChild(test);
  }
  $(document.getElementsByClassName('disabled')[0]).addClass('enabled');
  document.getElementsByClassName('disabled')[0].innerHTML = "<embed src='common/images/nav-dot2.svg'/>";

}

function changeNext() {
  if (isanimating) {
    document.getElementById('carouselnavmask').style.display = '';
    return;
  }
  isanimating = true;
  document.getElementById('carouselnavmask').style.display = '';
  currImgIndex++;
  if (currImgIndex == imagesArray.length)
    currImgIndex = 0;

  var visiblediv = document.getElementsByClassName('visible')[0];
  var invisiblediv = document.getElementsByClassName('invisible')[0];
  invisiblediv.getElementsByTagName('img')[0].src = "common/images/" + imagesArray[currImgIndex];
  invisiblediv.getElementsByTagName('img')[0].alt = alttextArray[currImgIndex];

  invisiblediv.style.left = 0 + $('#carousel').width();
  visiblediv.style.left = 0;
  $(visiblediv).animate({ "left": '-=' + 968 }, 1000);
  $(invisiblediv).animate({ "left": '-=' + 968 }, 1000, function () { isanimating = false; document.getElementById('carouselnavmask').style.display = 'none'; });
  $(visiblediv).removeClass("visible").addClass("invisible");
  $(invisiblediv).removeClass("invisible").addClass("visible");
  document.getElementsByClassName('enabled')[0].innerHTML = "<embed src='common/images/nav-dot1.svg'></embed>";
  $(document.getElementsByClassName('enabled')[0]).removeClass('enabled');
  document.getElementsByClassName('disabled')[currImgIndex].innerHTML = "<embed src='common/images/nav-dot2.svg'></embed>";
  $(document.getElementsByClassName('disabled')[currImgIndex]).addClass('enabled');


}

function changePrev() {
  if (isanimating) {
    document.getElementById('carouselnavmask').style.display = '';
    return;
  }
  isanimating = true;
  document.getElementById('carouselnavmask').style.display = '';
  currImgIndex--;
  if (currImgIndex == -1)
    currImgIndex = imagesArray.length - 1;

  var visiblediv = document.getElementsByClassName('visible')[0];
  var invisiblediv = document.getElementsByClassName('invisible')[0];
  invisiblediv.getElementsByTagName('img')[0].src = "common/images/" + imagesArray[currImgIndex];
  invisiblediv.getElementsByTagName('img')[0].alt = alttextArray[currImgIndex];
  invisiblediv.style.left = 0 - $('#carousel').width();
  visiblediv.style.left = 0;
  $(visiblediv).animate({ "left": '+=' + 968 }, 1000);
  $(invisiblediv).animate({ "left": '+=' + 968 }, 1000, function () { isanimating = false; document.getElementById('carouselnavmask').style.display = 'none'; });
  $(visiblediv).removeClass("visible").addClass("invisible");
  $(invisiblediv).removeClass("invisible").addClass("visible");
  document.getElementsByClassName('enabled')[0].innerHTML = "<embed src='common/images/nav-dot1.svg'></embed>";
  $(document.getElementsByClassName('enabled')[0]).removeClass('enabled');
  $(document.getElementsByClassName('disabled')[currImgIndex]).addClass('enabled');
  document.getElementsByClassName('disabled')[currImgIndex].innerHTML = "<embed src='common/images/nav-dot2.svg'></embed>";

}

function gotoNavDemoScreen(currentRadio) {
  var imgpos = parseInt(currentRadio.value);
  if (imgpos > currImgIndex) {
    currImgIndex = imgpos - 1;
    changeNext();
  }
  else if (imgpos < currImgIndex) {
    currImgIndex = imgpos + 1;
    changePrev();
  }
  else
    return;
}
function nShowNavigationDemo() {
  closePopUp();
  hideVideoControls();
  initImageArray();
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('navigationdemo').style.display = '';

}

function resetMask(ele) {
  if (navigator.userAgent.match(/iPad/i) == null)
    return;

  var maxScroll = ele.scrollHeight - ele.offsetHeight;

  if (ele.scrollTop == 0)
    document.getElementById('HeaderMask').style.visibility = 'hidden';
  else
    document.getElementById('HeaderMask').style.visibility = 'visible';

  if (ele.scrollTop == maxScroll)
    document.getElementById('FooterMask').style.visibility = 'hidden';
  else
    document.getElementById('FooterMask').style.visibility = 'visible';

}

function resetPanelMask(ele) {
  if (navigator.userAgent.match(/iPad/i) == null)
    return;

  var panel_name = $(ele).attr('name');
  var maxScroll = ele.scrollHeight - ele.offsetHeight;

  if (ele.scrollTop == 0)
    document.getElementById(panel_name + 'HeaderMask').style.visibility = 'hidden';
  else
    document.getElementById(panel_name + 'HeaderMask').style.visibility = 'visible';

  if (ele.scrollTop == maxScroll)
    document.getElementById(panel_name + 'FooterMask').style.visibility = 'hidden';
  else
    document.getElementById(panel_name + 'FooterMask').style.visibility = 'visible';

}

function nGeneralFramesetPopupOkBtn() {
  document.getElementById('nGeneralFramesetPopup').style.display = 'none';
  document.getElementById('orientationmodaldiv').style.display = 'none';
  if (document.getElementById('videoForEbook') && parent.parent.parent.isVideoControlEnabled) {
    $('#videoForEbook').attr('controls', 'controls');
  }
}



// adjusting panel height and scroll
function nAdjustPanelOverflow() {
  var panel_apw, panel_lp, panel_ls, panel_hp, panel_hs, panel_gp, panel_gt, panel_mp, panel_ms, panel_gs, panel_gpw, panel_jp, panel_js, panel_kp, panel_ks, panel_np, panel_ns, panel_nt, panel_op, panel_os, panel_ot = "";

  if (getPanelForName('panelapw')) {
    panel_apw = getPanelForName('panelapw');
    if (panel_apw) {
      panel_apw.style.height = 493;
      adjustHeaderFooterMask(panel_apw, 'panelapw');
    }
  }
  else if (getPanelForName('panellp') || getPanelForName('panells')) {
    panel_lp = getPanelForName('panellp');
    panel_ls = getPanelForName('panells');

    if (panel_lp) {
      if (panel_ls) {
        panel_ls.style.height = 210;
        panel_lp.style.height = 240;

        if (panel_ls.scrollHeight > panel_ls.offsetHeight)
          panel_ls.style.overflowY = "auto";
        adjustHeaderFooterMask(panel_ls, 'panells');
      }
      else
        panel_lp.style.height = 493;

      if (panel_lp.scrollHeight > panel_lp.offsetHeight)
        panel_lp.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_lp, 'panellp');
    }

  }
  else if (getPanelForName('panelhp') || getPanelForName('panelhs')) {
    panel_hp = getPanelForName('panelhp');
    panel_hs = getPanelForName('panelhs');

    if (panel_hp) {
      panel_hp.style.height = 493;

      if (panel_hp.scrollHeight > panel_hp.offsetHeight)
        panel_hp.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_hp, "panelhp");
    }

    if (panel_hs) {
      panel_hs.style.height = 493;

      if (panel_hs.scrollHeight > panel_hs.offsetHeight)
        panel_hs.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_hs, 'panelhs');
    }

  }
  else if (getPanelForName('panelgs') || getPanelForName('panelgp') || getPanelForName('panelgt') || getPanelForName('panelgpw')) {
    panel_gs = getPanelForName('panelgs');
    panel_gp = getPanelForName('panelgp');
    panel_gt = getPanelForName('panelgt');
    panel_gpw = getPanelForName('panelgpw');

    if (panel_gs) {
      panel_gs.style.height = 493;

      if (panel_gs.scrollHeight > panel_gs.offsetHeight)
        panel_gs.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_gs, 'panelgs');
    }
    if (panel_gp) {
      panel_gp.style.height = 493;

      if (panel_gp.scrollHeight > panel_gp.offsetHeight)
        panel_gp.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_gp, 'panelgp');
    }

    if (panel_gt) {
      panel_gt.style.height = 493;

      if (panel_gt.scrollHeight > panel_gt.offsetHeight)
        panel_gt.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_gt, 'panelgt');
    }

    if (panel_gpw) {
      panel_gpw.style.height = 493;

      if (panel_gpw.scrollHeight > panel_gpw.offsetHeight)
        panel_gpw.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_gpw, 'panelgpw');
    }
  }
  else if (getPanelForName('panelmp') || getPanelForName('panelms')) {
    panel_mp = getPanelForName('panelmp');
    panel_ms = getPanelForName('panelms')

    if (panel_mp) {
      panel_mp.style.height = 493;

      if (panel_mp.scrollHeight > panel_mp.offsetHeight)
        panel_mp.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_mp, 'panelmp');
    }
    if (panel_ms) {
      panel_ms.style.height = 493;

      if (panel_ms.scrollHeight > panel_ms.offsetHeight)
        panel_ms.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_ms, 'panelms');
    }
  }
  else if (getPanelForName('paneljp') || getPanelForName('paneljs')) {
    panel_jp = getPanelForName('paneljp');
    panel_js = getPanelForName('paneljs');

    if (panel_jp) {
      if (panel_js) {
        panel_js.style.height = 300;
        panel_jp.style.height = 145;

        if (panel_js.scrollHeight > panel_js.offsetHeight)
          panel_js.style.overflowY = "auto";

        adjustHeaderFooterMask(panel_js, "paneljs");
      }
      else
        panel_jp.style.height = 493;

      if (panel_jp.scrollHeight > panel_jp.offsetHeight)
        panel_jp.style.overflowY = "auto";

      adjustHeaderFooterMask(panel_jp, "paneljp");
    }
  }
  else if (getPanelForName('panelkp') || getPanelForName('panelks')) {
    panel_kp = getPanelForName('panelkp');
    panel_ks = getPanelForName('panelks');

    if (panel_kp) {
      if (panel_ks) {
        panel_ks.style.height = 120;
        panel_kp.style.height = 320;

        if (panel_ks.scrollHeight > panel_ks.offsetHeight)
          panel_ks.style.overflowY = "auto";
        adjustHeaderFooterMask(panel_ks, 'panelks');
      }
      else
        panel_kp.style.height = 493;

      if (panel_kp.scrollHeight > panel_kp.offsetHeight)
        panel_kp.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_kp, 'panelkp');
    }
  }
  else if (getPanelForName('panelnp') || getPanelForName('panelns') || getPanelForName('panelnt')) {
    panel_np = getPanelForName('panelnp');
    panel_ns = getPanelForName('panelns');
    panel_nt = getPanelForName('panelnt');

    if (panel_np) {
      if (panel_ns || panel_nt) {
        panel_np.style.height = 140;

        if (panel_ns) {
          panel_ns.style.height = 125;

          if (panel_ns.scrollHeight > panel_ns.offsetHeight)
            panel_ns.style.overflowY = "auto";
          adjustHeaderFooterMask(panel_ns, "panelns");
        }

        if (panel_nt) {
          panel_nt.style.height = 125;

          if (panel_nt.scrollHeight > panel_nt.offsetHeight)
            panel_nt.style.overflowY = "auto";
          adjustHeaderFooterMask(panel_nt, "panelnt");
        }
      }
      else
        panel_np.style.height = 493;

      if (panel_np.scrollHeight > panel_np.offsetHeight)
        panel_np.style.overflowY = "auto";

      adjustHeaderFooterMask(panel_np, "panelnp");

    }
  }
  else if (getPanelForName('panelop') || getPanelForName('panelos') || getPanelForName('panelot')) {
    panel_op = getPanelForName('panelop');
    panel_os = getPanelForName('panelos');
    panel_ot = getPanelForName('panelot');

    if (panel_op) {
      if (panel_ot)
        panel_op.style.height = 355;
      else
        panel_op.style.height = 493;

      if (panel_op.scrollHeight > panel_op.offsetHeight)
        panel_op.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_op, 'panelop');

    }

    if (panel_os) {
      if (panel_ot)
        panel_os.style.height = 355;
      else
        panel_os.style.height = 493;

      if (panel_os.scrollHeight > panel_os.offsetHeight)
        panel_os.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_os, 'panelos');

    }

    if (panel_ot) {
      panel_ot.style.height = 120;

      if (panel_ot.scrollHeight > panel_ot.offsetHeight)
        panel_ot.style.overflowY = "auto";
      adjustHeaderFooterMask(panel_ot, 'panelot');
    }
  }
}

function getPanelForName(name) {
  var panels;
  panels = $("[name = '" + name + "']");
  if (panels.length > 0)
    return panels[0];
  else
    return null;
}

function adjustHeaderFooterMask(panel, panel_name) {
  panel.style.wordWrap = "break-word";
  var header = document.getElementById(panel_name + 'HeaderMask');
  var footer = document.getElementById(panel_name + 'FooterMask');
  header.style.width = footer.style.width = panel.offsetWidth;
  header.style.left = footer.style.left = panel.offsetLeft;

  header.style.top = panel.offsetTop;
  footer.style.marginTop = panel.offsetTop + $(panel).height() - 9;

  if (panel.scrollHeight > panel.offsetHeight && navigator.userAgent.match(/iPad/i) != null)
    document.getElementById(panel_name + 'FooterMask').style.visibility = 'visible';
}

function showFinalExamPopup(source) {
  var mainChapterlist = document.getElementsByClassName('mainchapter');

  //reseting background color of mainchapter li's
  for (i = 0; i < mainChapterlist.length; i++) {
    mainChapterlist[i].style.background = "#F0F0F0";
  }
  document.getElementById('mainchapter').style.background = "#F0F0F0";
  document.getElementById('FinalExamNode').style.background = "#E0E0E0";

  //setting pointer to the position
  var pointer = document.getElementById('subChapterdivpointer');
  var scrollTop = document.getElementById('forscroll').scrollTop;
  curSubTop = source.offsetTop;
  pointer.style.display = '';
  pointer.style.top = curSubTop + 53 - scrollTop;
  pointer.style.left = 288;

  // setting popup top
  var maxTop = document.getElementById('controlpage').offsetHeight;
  maxTop = maxTop - 300 - 44; // maxTop - subchapterDiv's height - footer height
  currentTop = curSubTop + 41 - scrollTop;
  if (currentTop < maxTop)
    document.getElementById('courseOutlinesubchapter').style.top = currentTop;
  else
    document.getElementById('courseOutlinesubchapter').style.top = maxTop;

  document.getElementById('OutlineTestBack').style.visibility = 'hidden';

  //resetting scroll for subchpater div 
  document.getElementById('outlinesubchapterL').scrollTop = 0;

  ShowHideTest('test_FE', 'Exam');
}

function playAudioInteractivity() {
  try {
    if (typeof (parent.frames.frame_b.intialraptivityaudio) != 'undefined' && navigator.userAgent.match(/iPad/i) != null) {
      var div = document.getElementById('interactivityForEbook').contentWindow.document.getElementsByTagName('div');
      var audio = parent.frames.frame_b.intialraptivityaudio;

      for (var cnt = 0; cnt < div.length; cnt++) {
        if ($(div[cnt]).attr("sound") == "./" + audio + ".mp3" || $(div[cnt]).attr("sound") == "./" + audio + ".ogg") {
          document.getElementById('interactivityForEbook').contentWindow.PlaySound($(div[cnt]).attr("id"));
          break;
        }
      }
    }
    else {
      document.getElementById('audioInteractivity').play();
    }
    document.getElementById('playaudio').style.display = 'none';
    document.getElementById('modaldiv').style.display = 'none';
  }
  catch (err) {
    document.getElementById('playaudio').style.display = 'none';
    document.getElementById('modaldiv').style.display = 'none';
  }
}

function closeNavDemo() {
  document.getElementById('navigationdemo').style.display = 'none';
  document.getElementById('modaldiv').style.display = 'none';
  closePopUp();
}

// function added for touch navigation in Navigation Demo

function navTouchStart(e) {
  var me = this;
  me.StartX = e.targetTouches[0].pageX;
}


function navTouchEnd(e) {

  var me = this;
  var endX = e.changedTouches[0].pageX;

  var difference = me.StartX - endX;

  if (difference < 0)
    difference = difference * (-1);

  if (me.StartX > endX) {
    if (parseInt(me.StartX, 10) > 0 && difference > 100) {
      changeNext();
    }
  }
  else {
    if (parseInt(me.StartX, 10) > 0 && difference > 100) {
      changePrev();
    }
  }

}

// end functions for touch navigation Navigation Demo


function nShowPrivacyPolicy() {
  //var inner = '<div style="height:425px;width:293px;margin-left:7px;overflow-y:auto;word-wrap:break-word;">'+document.getElementById("privacyiframe").contentWindow.document.body.innerHTML+'</div>';

  var inner = document.getElementById('privacy').innerHTML;
  var containerdiv = document.getElementById('containerdiv');
  var contentdiv = document.getElementById('contentdiv2');
  var contentdivhead = document.getElementById('contentdiv2head');
  document.getElementById('ToolsBack').style.display = '';
  contentdivhead.innerHTML = "Privacy Policy";
  contentdiv.innerHTML = inner;
  containerdiv.style.height = 480;
  contentdiv.getElementsByTagName('iframe')[0].style.display = '';
  contentdiv.getElementsByTagName('iframe')[0].style.visibility = 'visible';

  ShowMenu(0, 1);
}

function showAttemptAllFinalExamPopup() {
  if (FinalExam != EXAM_POSITION_BYCOURSE) {
    return;
  }
  document.getElementById('nGeneralPopupHeader').innerHTML = "Final Exam";
  document.getElementById('nGeneralPopupBody').innerHTML = ATTEMPT_ALL_FINAL_EXAM_MSG;
  document.getElementById('nGeneralPopup').style.height = 250;
  document.getElementById('nGeneralPopup').style.width = 450;

  //aligning the div popup center
  var controlpageele = document.getElementById('controlpage');
  var nGeneralPopupele = document.getElementById('nGeneralPopup');
  nGeneralPopupele.style.left = 512 - (parseInt(nGeneralPopupele.style.width) / 2);

  nGeneralPopupele.style.top = controlpageele.offsetTop + (controlpageele.offsetHeight / 2) - (parseInt(nGeneralPopupele.style.height) / 2);
  // end aligning the popup to center

  document.getElementById('nGeneralPopupBody').style.height = 180 + "px";
  document.getElementById('closeBtnnGeneralPopup').style.left = 425 + "px";
  document.getElementById('closeBtnnGeneralPopup').style.display = '';
  document.getElementById('closepopup-label').innerHTML = "close popup";
  document.getElementById('modaldiv').style.display = '';
  document.getElementById('nGeneralPopup').style.display = '';
}

function EnableCPLLinksLocal(){
  var cpllinkArray = top.opener.cpllinks;
  var linkMapArray = top.opener.linkCourseMap;
  var anchorlinks= document.getElementById('content').getElementsByTagName('a');
  for(i=0;i<anchorlinks.length;i++)
  {
    link=anchorlinks[i];
    for(index=0;index<cpllinkArray.length;index++)
    {
      if(link.id==cpllinkArray[index])
      {
      link.setAttribute("href", "javascript: LocalViewDocument('" + link.id + ","+linkMapArray[index]+"');");
      link.style= "font-weigth:bold;color:blue;cursor;pointer;";
      }
    }
  }
}

var CheckpointUrl = "https://checkpoint.riag.com/app/find";
var CheckpointLearningSSOUrl = "https://checkpointlearning.thomsonreuters.com/ssm/cpredirect";
var CheckpointLearningSSOUrlParam = "resume";

function LocalViewDocument(linkid,courseid)
{
  var sFeatures = "toolbar=no,menubar=no,location=no,resizable=yes,status=no,scrollbars=yes";
  var cpLinkURL = CheckpointUrl + "?linkType=srcLink&SrcDocId=cpelearn:" + courseid + "&source=cpelearn:" + linkid +"&rs=cpl0.1";
  //var url = CheckpointLearningSSOUrl +"?"+ CheckpointLearningSSOUrlParam + "=" + escape(cpLinkURL);
  var url = cpLinkURL;
  window.open(url,'winViewDoc',sFeatures);
}
