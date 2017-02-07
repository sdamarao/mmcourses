 //Start HRB: (07/22/09)
//varibles i,j,k are removed with proper name like index,counter ,cnt
//Macros are used for the constants which are used in many places
//Elements are taken into objects for avoiding the unwanted processimg
//End HRB: (07/22/09)

//Global variables Declaration
var navDiff = 0;
var IPAD_NAV_DIFF = 100;
var IPHONE_NAV_DIFF = 80;

var navigateForAPW4 = null;
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
var isMobileUserAgent = false;
var isIphoneDevice = false;
//Start HRB: Added for mLearning

//start highlight text 
var forSerachKey = null, searchStr = "", highlightStartTag = null, highlightEndTag = null, bgColor = null;
bgColor = "yellow";
highlightStartTag = "<font style='background-color:" + bgColor + ";'>";
highlightEndTag = "</font>";
var highlightMe = false;
//end highlight text
if (isMobileUserAgent == false && !isIE) {
    printHeightAdjustmentFactor = 37;
}
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
var isGradeMyAnswerClicked= false;

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
var isSearchClicked = false;
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
var gbl_TestQuestionArray="";

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
var is508User=false;
var isNextPrevious=false;
var isshiftortab=false;
var isRestoreState=false;
//end added for 508 changes

function fnSubmitAnswer(inputType, calledFromSearchPopup) {

    if (isMobileUserAgent == true && event != null) {

        event.stopPropagation();
    }
    var objResponsediv = document.getElementById("responsediv");

    if (objResponsediv)
        objResponsediv.scrollTop = 0;

    if (searchpopupFlag == 'true')
        return;

    // Hrb : Added condition disable the submit answer button  if user  selects the option from search popup
    if ((isNotNullOrUndefined("searchpopupL") && document.getElementById("searchpopupL").style.visibility == "hidden") || isMobileUserAgent) {
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

        if (inputType == 'checkbox' || inputType == 'radio') {
            noOfControls = document.forms[0].getElementsByTagName('input');
            var itr = 0;

            for (itr = 0; itr < noOfControls.length; itr++) {
                if (noOfControls[itr].checked == true)
                    break;
            }

            if (itr >= noOfControls.length) {
                fnEnableSubmitAnswer(false);
                return;
            }

            fnEnableSubmitAnswer(true);
        }
        else if (inputType == 'text') {
            noOfControls = document.forms[0].getElementsByTagName('input');
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
    else if (document.getElementById('submitAnswerEnable').style.visibility == 'visible') {
        fnEnableSubmitAnswer(false);
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

    var l_Page_No;
    var l_Total_Page_No;

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
    document.getElementById("submittest").style.visibility = "hidden";
    document.getElementById("submittest_disable").style.visibility = "hidden";
    if (document.getElementById('submitAnswerDisable'))
        document.getElementById('submitAnswerDisable').style.visibility = 'visible';
    //hrb end : Added to hide  if page is searched and loaded from search link or from bookmark link  
    if (isMobileUserAgent == false) {
        //hrb start : added to open link onclick of search link of popup and close the poup 
        if (document.getElementById("searchpopupL1"))
            document.getElementById("searchpopupL1").innerHTML = "";
        if (document.getElementById("searchlblPopupTitle"))
            document.getElementById("searchlblPopupTitle").innerHTML = "";
        if (document.getElementById("searchpopupL").style.visibility == "visible") {
            document.getElementById("searchpopupLx").onmousedown();
        }

        //hrb end : added to open link onclick of search link of popup and close the popup
        document.getElementById("bookmarkbuttonL").style.visibility = 'visible';
        document.getElementById("glossbuttonL").style.visibility = 'visible';
        document.getElementById("printbuttonL").style.visibility = 'visible';
        document.getElementById("searchbuttonL").style.visibility = 'visible';
    }
    else {
        selectMenu("courseview");
    }

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
    
    if (isMobileUserAgent == false) {
        // hrb start : added condition to avoid error onload of search popup
        if (objContent.style)
            objContent.style.pixelHeight = document.body.clientHeight - objContent.style.pixelTop
        // hrb end : added condition to avoid error onload of search popup

        //HRB: Set the course title

        AdjustCourseTitle(courseTitle)
        //HRB: End by hrb
    }
    if (pagenumber == TITLE_PAGE_NO) {
        objOutlinebuttonL.innerHTML = "Title Page<br><br>Click for Contents";
        objSubchaptertitle.innerHTML = "";
        divPageTitleObj.innerHTML = TITLE;

        if (objBkDescription) {
            objBkDescription.innerHTML = TITLE;
            objTxtbkDescription.value = TITLE;
        }

        //HRB: Added For Progress Bar and changing the course title to checkpoint learning
        key = "Title Page";
        visitedPagesKey = pagenumber;
        BuildVisitedPagesArray(visitedPagesKey);

        //HRB: Set the course title
        if (isIphoneDevice) {
            
      if(typeof(customtitle) != 'undefined') {
        objCoursetitle.innerHTML = '<div >' + customtitle + '</div>';
      }
      else
        objCoursetitle.innerHTML = '<div >' + CHECKPOINT + '<sup>&#174;</sup>&nbsp;' + LEARNING + '</div>';
      
        }
        else{
      if(typeof(customtitle) != 'undefined') {
        objCoursetitle.innerHTML = '<div style="font:knowledge;font-size:22px">' + customtitle + '</div>';
      }
      else
        objCoursetitle.innerHTML = '<div style="font:knowledge;font-size:22px">' + CHECKPOINT + '&nbsp;' + LEARNING + '<sup><font size="2px">&#174;</font></sup></div>';
      
      }
        //HRB:Set the position of checkpoint learning course title.
        /*if(isMobileUserAgent==true)
        {
        objCoursetitle.style.left = "250px"
        } */
        //End by HRB

        //hrb:added to disable prev button on title page
        objPrevButton.style.display = "none";
        objPrevButtonDisabled.style.display = "";
        //hrb:end of added to disable prev button on title page

        //start Hrb(22/04/2009): Added for preliminary pages from outlinepanel menu
        objNextButton.style.display = "";
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
            }
        }
        else if (pagenumber == COURSEINFO_PAGE_NO) {
            divPageTitleObj.innerHTML = COURSE_INFORMATION;
            if (objBkDescription) {
                objBkDescription.innerHTML = COURSE_INFO;
                objTxtbkDescription.value = COURSE_INFORMATION;
            }
        }
        else if (pagenumber == LEARNING_OBJECTIVE_PAGE_NO) {
            divPageTitleObj.innerHTML = INTRODUCTION;
            if (objBkDescription) {
                objBkDescription.innerHTML = INTRO;
                objTxtbkDescription.value = INTRODUCTION;
            }
        }

        objOutlinebuttonL.innerHTML = "Introduction<br><br>Page " + (pagenumber).toString(10) + " of " + (CategoryList[0].FirstQuestion - 1).toString(10)

        objPrevButton.style.display = "";
        objPrevButtonDisabled.style.display = "none";
        objSubchaptertitle.innerHTML = "";

        //HRB: Added For Progress Bar 
        key = "Introduction Page" + (pagenumber).toString(10);
        visitedPagesKey = pagenumber;
        BuildVisitedPagesArray(visitedPagesKey);
        //End by HRB

        //start Hrb(22/04/2009): Added for preliminary pages from outlinepanel menu
        objNextButton.style.display = "";
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
            objPrevButtonDisabled.style.display = "none";
            objNextButton.style.display = "";
            objNextButtonDisabled.style.display = "none";
            //hrb:end of changes for next and prev button

            // quick decision in 5/22/07 pre-DT meeting decreed chapters to be lessons.  So below was "Ch ", is now "Lsn " Will this be done generally?
            l_Page_No = (pagenumber - FirstPage + 1).toString(10);
            l_Total_Page_No = (LastPage - FirstPage + 1).toString(10);

            objOutlinebuttonL.innerHTML = "Lsn " + ChapterSpaceSubchapter.replace(/ /, "") + " Study<br><br>Page " + l_Page_No + " of " + l_Total_Page_No

            divPageTitleObj.innerHTML = CHAPTER + " " + chCode + ", " + PAGE + " " + l_Page_No + " " + OF + " " + l_Total_Page_No;

            if (objBkDescription) {
                if (LANGUAGE == "en" || LANGUAGE == "en-uk") {
                    objBkDescription.innerHTML = 'Ch ' + CurrentChapter + ' P ' + l_Page_No;
                }
                else {
                    objBkDescription.innerHTML = 'C ' + CurrentChapter + ' P ' + l_Page_No;
                }

        
        // code changed to make it uniform with ebook view.
                //objTxtbkDescription.value = CHAPTER + " " + CurrentChapter + ', ' + PAGE + " " + l_Page_No;
        
        objTxtbkDescription.value = CHAPTER + " " + chCode + ', ' + PAGE + " " + l_Page_No + " " + OF + " " + l_Total_Page_No;

            }

            //HRB: Added For Progress Bar 
            key = "Ch. " + ChapterSpaceSubchapter.replace(/ /, "") + " P. " + l_Page_No;
            visitedPagesKey = pagenumber;
            //End by HRB
        }

        if (mode == "remedial") {

            l_Page_No = (pagenumber - FirstPage + 1).toString(10);
            l_Total_Page_No = (LastPage - FirstPage + 1).toString(10);
            if (isMobileUserAgent == false) {
                document.getElementById("bookmarkbuttonL").style.visibility = 'hidden';
                divPageTitleObj.innerHTML = CHAPTER + " " + CurrentChapter + ", " + REVIEW + l_Page_No + " " + OF + " " + l_Total_Page_No;

                // quick decision in 5/22/07 pre-DT meeting decreed chapters to be lessons.  So below was "Ch ", is now "Lsn " Will this be done generally?
                objOutlinebuttonL.innerHTML = "Lsn " + ChapterSpaceSubchapter.replace(/ /, "") + " Review<br><br>Page " + l_Page_No + " of " + l_Total_Page_No;
            }
            //HRB: Added For Progress Bar 
            key = '';
            visitedPagesKey = '';
            //End by HRB
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
        objNextButton.style.display = "";
        objPrevButtonDisabled.style.display = "none";
        objNextButtonDisabled.style.display = "none";
        //hrb:end of changes for next and prev button
    }

    if (mode == "study") {
        document.progress.Bookmark(CurrentStudyPage);
    }
    else
        document.progress.Bookmark(0);

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

    //check if the page is already visited or not, if not then add in the array
    for (index = 0; index < l_visitedPagesLength; index++) {
        if (VisitedPages[index] == visitedPagesKey) {
            toAdd = false;
            break;
        }
    }

    if (toAdd) {
        VisitedPages[index] = visitedPagesKey;
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
        divText.innerHTML = percentageOfCompletion + "%";
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
            if (isMobileUserAgent == false) {
                objStatusImage.src = COMPLETED_STATUS_IMG;
            }
            else {
                objStatusImage.className = COMPLETED_STATUS_CLASS;
            }

            if (CompletedChapterCodeStr == "0") {
                CompletedChapterCodeStr = chapterCodeStr + ",";
            }
            else {
                CompletedChapterCodeStr = CompletedChapterCodeStr + chapterCodeStr + ",";

                if (isMobileUserAgent == false) {
                    objStatusImage.src = COMPLETED_STATUS_IMG;
                }
                else {
                    objStatusImage.className = COMPLETED_STATUS_CLASS;
                }
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
            if (isMobileUserAgent == false) {
                objStatusImage.src = INCOMPLETED_STATUS_IMG;
            }
            else {
                objStatusImage.className = INCOMPLETED_STATUS_CLASS;
            }

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
                if (isMobileUserAgent == false) {
                    objStatusImage.src = INCOMPLETED_STATUS_IMG;
                }
                else {
                    objStatusImage.className = INCOMPLETED_STATUS_CLASS;
                }
            }
        }
    }
    if (CompletedChapterCodeStr != "") {
        completedChapterArr = CompletedChapterCodeStr.split(",");

        for (chapterCounter = 0; chapterCounter < completedChapterArr.length; chapterCounter++) {
            objStatusImage = document.getElementById("istat" + completedChapterArr[chapterCounter]);

            if (objStatusImage) {
                if (isMobileUserAgent == false) {
                    objStatusImage.src = COMPLETED_STATUS_IMG;
                }
                else {
                    objStatusImage.className = COMPLETED_STATUS_CLASS;
                }
            }
        }
    }
}
//HRB:  End of added for updating status of chapter
var openPopupScroll = null;
//hrb: Added for showing glossary terms pop up within course window
function setGlossSrcLocation() {

    if (isMobileUserAgent == true && glossaryOutlineCall == true) {
        showGlossary_iphone(pageOrigin);
        glossaryOutlineCall = false;
        return;
    }
    var objPopUpL = document.getElementById("popupL");
    var objPopUpL1 = document.getElementById("popupL1");
    var topOfPopup = parseInt(objPopUpL.style.top);
    var glossDescription;

    if (isMobileUserAgent == true) {
        //set glossary ipad popupL1 width & height.
        //objPopUpL1.style.width = "92%";
        objPopUpL1.style.paddingLeft = "6";
    }


    /*if(isMobileUserAgent==true && isIphoneDevice==false){
    //start of code to set width of the glossary popup to original one.
    document.getElementById('scrollpopup').style.paddingLeft= "6px"; 
    document.getElementById('scrollpopup').style.width = "368px"
    //end of code to set width of the glossary popup to original one.
    }*/
    //hrb:added to remove heading
    var tempGlossDescription;
    var index;
    var lastIndex;

    if (isMobileUserAgent == false) {
        objPopUpL.style.top = "470px";
    }


    if (isIE) {
        objPopUpL1.style.height = 0;
        if (!highlightMe) {
            document.getElementById("lblPopupTitle").innerHTML = window.frames["glossiframe"].document.title;
            glossDescription = window.frames["glossiframe"].document.body.innerHTML;
        } else {
            //start for Title
            forSerachKey = window.frames["glossiframe"].document.title;
            forSerachKey = genrateHighlightData(forSerachKey);
            document.getElementById("lblPopupTitle").innerHTML = forSerachKey;
            //end
            //start for discription
            forSerachKey = window.frames["glossiframe"].document.body.innerHTML;
            forSerachKey = genrateHighlightData(forSerachKey);
            glossDescription = forSerachKey;
            //end
        }
    }
    else {
        if (isMobileUserAgent == false) {
            if (!highlightMe) {
                document.getElementById("lblPopupTitle").innerHTML = document.getElementById("glossiframe").contentWindow.document.title;
            } else {
                //start for Title
                forSerachKey = document.getElementById("glossiframe").contentWindow.document.title;
                forSerachKey = genrateHighlightData(forSerachKey);
                document.getElementById("lblPopupTitle").innerHTML = forSerachKey;
                //end
            }
        }
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

    if (isIE) {
        index = glossDescription.indexOf("<H1>");
    }
    else {
        index = glossDescription.indexOf("<h1>");
    }

    if (index != -1) {
        if (isIE) {
            lastIndex = glossDescription.indexOf("</H1>");
        }
        else {
            lastIndex = glossDescription.indexOf("</h1>");
        }
        tempGlossDescription = glossDescription.substring(0, index);
        tempGlossDescription = tempGlossDescription + glossDescription.substring(lastIndex+5, glossDescription.length);
        glossDescription = tempGlossDescription;
    }

    //hrb:end of added to remove heading
    if (isMobileUserAgent == true) {
        if (document.getElementById("glossiframe").contentWindow.document.title.length > 0 && glossDescription.length > 0)
            glossDescription = "<h1>" + document.getElementById("glossiframe").contentWindow.document.title + "</h1>" + glossDescription;
    }


    if (glossDescription != "") {

        if (isMobileUserAgent == false) {
            objPopUpL.style.visibility = "";
            objPopUpL.style.display = "";
            objPopUpL1.style.visibility = "";
            objPopUpL1.style.display = "";
            document.getElementById("popupLx").style.visibility = "";
            document.getElementById("popupLx").style.display = "";
      if(chk508Compliance()) {
        var titlehead;
        if(isIE) {
          titlehead=window.frames["glossiframe"].document.title;
        }
        else {
          titlehead=document.getElementById("glossiframe").contentWindow.document.title;
        }
        objPopUpL1.innerHTML = '<h4>'+titlehead+'</h4>'+glossDescription;
      }
      else {
        objPopUpL1.innerHTML = glossDescription;
      }     
        } else {
            if (!isIphoneDevice) {
        if(glossaryCall){
                objPopUpL1.innerHTML = glossDescription;
                objPopUpL.style.display = "block";
                //newly added for glossary show popup perfectaly
                var popupHeaderArrow = document.getElementById("popupHeaderArrow");
                popupHeaderArrow.style.visibility = "visible";
                objPopUpL.style.visibility = "visible";
                /*if( (document.getElementById('popupL').style.visibility == "" || document.getElementById('popupL').style.visibility == "visible"))
                {
                document.getElementById('popupHeaderArrow').style.visibility = "";
                }*/
        }
            }
            else {
                showIPhonePopup('', glossDescription);
            }
        }
        //call the setiPadPopupLayout function to show the glossary popup.
        /*if(isMobileUserAgent && isIphoneDevice==false)
        {
        setiPadPopupLayout(objPopUpL,objPopUpL1);
        }*/
        highlightMe = false;
    }



    //hrb:start code added to adjust the size and scroll bar of the glossary popup div dynamically
    if (isMobileUserAgent == false) {
        objPopUpL1.style.overflowX = "";
        objPopUpL1.style.overflowY = "";

        //hrb: if width exceed 500px then give scroll
        if (parseInt(objPopUpL1.clientWidth) > 500) {
            objPopUpL1.style.width = 500;
            objPopUpL1.style.overflowX = "auto";
        }
        //hrb: if hight exceed 150px then give scroll
        if (parseInt(objPopUpL1.clientHeight) > 150) {
            objPopUpL1.style.height = 150;
            objPopUpL1.style.overflowY = "auto";
        }
        objPopUpL1.offsetWidth
        objPopUpL.style.width = objPopUpL1.offsetWidth;
        objPopUpL.style.height = objPopUpL1.offsetHeight;

        if (!isIE) {
            objPopUpL.style.height = 'auto';
            objPopUpL1.style.height = 'auto';
            objPopUpL1.style.overflow = 'auto';
            objPopUpL.style.maxHeight = 175;
            objPopUpL1.style.maxHeight = 123;
      if(chk508Compliance()) {
        objPopUpL.style.width = 341;
      }
        }

        //hrb:End code added to adjust the size and scroll bar of the glossary popup div dynamically
        //hrb:start code added to adjust the popup div for glosaary, in case heading is of 2 or 3 line
        if (objPopUpL.clientHeight >= 192 && objPopUpL.clientHeight < 209) {
            objPopUpL.style.top = topOfPopup - 20 + "px";
        }
        else if (objPopUpL.clientHeight >= 209) {
            objPopUpL.style.top = topOfPopup - 40 + "px";
        }
        //hrb:end code added to adjust the popup div for glosaary, in case heading is of 2 or 3 line  
    }
    else {
        //As on iphone facing some scroll related issue we stop the verticle scroll for the purpose now
        if (openPopupScroll != null) openPopupScroll.destroy();
        openPopupScroll = new iScroll("popupL1");
    }

    highlightMe = false;
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
    //popupHeaderArrow.style.backgroundImage = "url(common/images/top.png)";

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
    if (isMobileUserAgent == true) {
        document.getElementById("glossiframe").src = loc;
        //added this statement for iphone where we show two different way to show the glossary
        if (isMobileUserAgent == true && glossaryOutlineCall == true) return;
    }

    var objPopUpL = document.getElementById("popupL");
    var objPopUpL1 = document.getElementById("popupL1");

    if (isIphoneDevice == true && loc != null && loc != 'undefined' && loc != '') {
        document.getElementById("backgroundpopup").style.visibility = "visible";

    }


    if (isMobileUserAgent == false) {
        objPopUpL.style.visibility = "visible";
        document.getElementById("popupLx").style.visibility = "";
        objPopUpL.style.width = "340";
        objPopUpL.style.height = "140";
        objPopUpL1.style.width = "340";
        if (!isIE) {
            objPopUpL1.style.width = "329";
            document.getElementById("popupTitle").style.width = "333";
        }
    }
    else if (isMobileUserAgent) {
        if (isIphoneDevice == false) {
            //Change for the popup width & height.
            objPopUpL.style.width = "400";
            objPopUpL.style.height = "200";
        }
    }


    if (isMobileUserAgent == false) {
        objPopUpL1.style.height = "140";
        //dated 4th march 2009: Setting source location of respective glossary selected from glossary menu
        objPopUpL1.innerHTML = "";
        document.getElementById("glossiframe").src = loc;
        //hrb: start added to move scroll bar to top
        objPopUpL1.scrollTop = 0;
        //hrb: end added to move scroll bar to top
    }
    if (isMobileUserAgent == true && isIphoneDevice == false) {
        if (isSearchCall == true) {
            document.getElementById("scrollpopup").style.paddingRight = "14";
        }
        else {
            document.getElementById("scrollpopup").style.paddingRight = "6";
        }
        if (openPopupScroll != null) { openPopupScroll.destroy(); }
        openPopupScroll = new iScroll("popupL1");
    }
}
//hrb: End of Added for showing glossary terms pop up within course window

function Next() {
    try {
        takeFinalExamFromOutline = false;

        if (isMobileUserAgent == false) {
            //hrb:close open menu
            if (VisibleMenu != "") {
                document.getElementById(VisibleMenu + "x").onmousedown();
                VisibleMenu = "";
            }

            //hrb:close transcript
            if (parent.frames.frame_b.document.getElementById("transContent")) {
                CloseTranscriptDiv();
            }

            //hrb:added to close search box on click of next button
            if (document.getElementById("searchpopupL").style.visibility == "visible")
                document.getElementById("searchpopupLx").onmousedown();


           // if(document.getElementById("OuterBlock").style.visibility== "visible")
        document.getElementById("searchTextButtonLx").onmousedown();

            hideCheckpoint();

            //hrb:close certificate popup
            CloseCertificateDiv();
        }
        else {
            closePopUp();
            if (isIphoneDevice) {
                if (interactivity_iPhone_timer != null && interactivity_iPhone_timer != 'undefined') {
                    clearTimeout(interactivity_iPhone_timer);
                    interactivity_iPhone_timer = null;
                }
            }
            else {
                if (interactivity_iPad_timer != null && interactivity_iPad_timer != 'undefined') {
                    clearTimeout(interactivity_iPad_timer);
                    interactivity_iPad_timer = null;
                }
            }
        }

        //Start Hrb: Added different condition for final exam for course navigation
        if (FinalExam == EXAM_POSITION_BYCHAPTER) //no
        {
            if (isMobileUserAgent == false) {
                if (document.getElementById("outlineL").style.pixelLeft > 200)
                    OutlineShowHide();

                if (!isIE && outlineflag)
                    OutlineShowHide();
            }

            switch (mode) {
                //hrb: added for review and retake functionality 
                case "review":
                    {
                        //Hrb: Final Exam, get the questions from no of questions to display
                        if (CurrentTestQuestion == NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1]) {
                            if (CurrentChapter == TotalChapters) {
                                if (isMobileUserAgent == false) {
                                    reviewMyAnswers();
                                } /*else if(isIphoneDevice==false){
            togglePage();
          }*/
                                if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }
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
                                if (isMobileUserAgent == false) {
                                    reviewMyAnswers();
                                } /*else if(isIphoneDevice==false){
            togglePage();
          }*/
                                if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }
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
                            /*if(isMobileUserAgent == true)
                            {
                            if(isIphoneDevice==false){
                            togglePage();
                            break;
                            }
                            }
                            else
                            {
                            if (scorm)
                            Sc(1);
                            else
                            ShowCertificate();
                            }*/
                            if (isMobileUserAgent) {
                                if (isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }
                                return;
                            }
                            else {
                                if (scorm)
                                    Sc(1);
                else {
                                    ShowCertificate();
                  if(chk508Compliance()) {
                    document.getElementById("CertificatepopupL1").focus();
                    isNextPrevious=false;
                  }
                }
                            }
                        }
                        else {
                            var NextChapter = parseInt(CurrentChapter, 10) + 1;

                            if (isMobileUserAgent == true && NextChapter > TotalChapters) {
                                if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }
                                return;
                            }
                            else {
                                Sc(NextChapter.toString(10));
                            }

                            if (NextChapter > TotalChapters) {
                                document.getElementById("NextButton").style.display = "none";
                                document.getElementById("NextButtonDisabled").style.display = "";
                            }
                        }
                    }
                    break;
                case "test":
                    {
                        //Hrb: Final Exam, get the questions from no of questions to display
                        if (CurrentTestQuestion == NoOfQuestionsToDisplayArray[parseInt(CurrentChapter, 10) - 1]) {
                            if (CurrentChapter == TotalChapters) {
                                /*if(isMobileUserAgent==true) // added to persist on same page if user on last chapter last question - nikhil
                                {
                                if(isIphoneDevice==false){
                                togglePage();
                                }
                                }*/
                                if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }
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
                                    if (isMobileUserAgent == true) {
                                        /*if(isIphoneDevice==false){
                                        togglePage();
                                        }*/
                                        if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                            isNavigationNo = true;
                                        }
                                        return;
                                    }
                                    i = 0;
                                    ShowStudyPage(i);
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
                                if (isMobileUserAgent && CurrentChapter == TotalChapters) {
                                    if (isNavigationNo != null && isNavigationNo != 'undefined') {
                                        isNavigationNo = true;
                                    }
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
                                    if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                        isNavigationNo = true;
                                    }
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
            if (isMobileUserAgent == false) {
                //code written for navigation if course has final exam 
                if (document.getElementById("outlineL").style.pixelLeft > 200)
                    OutlineShowHide();

                if (!isIE && outlineflag) {
                    OutlineShowHide();
                }
            }
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
        if (isMobileUserAgent == false) {
            //HRB: Close the author bio on going on next page
            document.getElementById('authorBioPopUpL').style.visibility = 'hidden';
            //HRB: End By HRB

            document.getElementById('RolloverRevealPopUpL').style.visibility = 'hidden';
            document.getElementById('ClickRevealPopUpL').style.visibility = 'hidden';
            document.getElementById('ClickRevealPopUpLx').style.visibility = 'hidden';
        }
    }
    catch (err) { }
} // end Next()

function Prev() {
    //hrb:close open menu
    if (VisibleMenu != "") {
    if (isMobileUserAgent == false)
      document.getElementById(VisibleMenu + "x").onmousedown();
    else
      document.getElementById(VisibleMenu + "x").onclick();
        VisibleMenu = "";
    }

    //hrb:close transcript
    if (parent.frames.frame_b.document.getElementById("transContent"))
        CloseTranscriptDiv();

    //hrb:added to close search box on click of prev button
    if (isMobileUserAgent == false) {
        if (document.getElementById("searchpopupL").style.visibility == "visible")
            document.getElementById("searchpopupLx").onmousedown();
      //  if(document.getElementById("OuterBlock").style.visibility== "visible")
      document.getElementById("searchTextButtonLx").onmousedown();
    }
    else {
        closePopUp();
        if (isIphoneDevice) {
            if (interactivity_iPhone_timer != null && interactivity_iPhone_timer != 'undefined') {
                clearTimeout(interactivity_iPhone_timer);
                interactivity_iPhone_timer = null;
            }
        }
        else {
            if (interactivity_iPad_timer != null && interactivity_iPad_timer != 'undefined') {
                clearTimeout(interactivity_iPad_timer);
                interactivity_iPad_timer = null;
            }
        }
    }
    hideCheckpoint();

    CloseCertificateDiv();

    //start Hrb: Added course navigation condition for final exam
    takeFinalExamFromOutline = false;

    if (FinalExam == EXAM_POSITION_BYCHAPTER) //no
    {
        if (isMobileUserAgent == false) {
            //HRB : added to hide outline  
            if (document.getElementById("outlineL").style.pixelLeft > 200)
                OutlineShowHide();

            if (!isIE && outlineflag)
                OutlineShowHide();
        }
        switch (mode) {
            //hrb: added for review and retake functionality 
            case "review":
                {
                    if (CurrentTestQuestion == 1) {
                        if (CurrentChapter == 1) {
                            if (isMobileUserAgent == true) {
                                /*if(isIphoneDevice==false)
                                togglePage();*/
                                if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }
                                return;
                            } else {
                                CurrentChapter = TotalChapters;
                            }
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
                            if (isMobileUserAgent == true) {
                                if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                                    isNavigationNo = true;
                                }

                                /*if(isIphoneDevice==false)
                                togglePage();*/
                                return;
                            } else {
                                CurrentChapter = TotalChapters;
                            }
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
                        if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                            isNavigationNo = true;
                        }
                    }
                    /*else if(i==-1){ // re-vist condition - nikhil - added to persist on the title page on prev()
                    if(isMobileUserAgent==true)
                    {
                    if(isIphoneDevice==false){
                    togglePage();
                    return;
                    }
                    }
                    }*/
                }
        }
    }
    //start Hrb: Added the condition for Final Exam navigation
    else {

        if (isMobileUserAgent == false) {
            if (document.getElementById("outlineL").style.pixelLeft > 200)
                OutlineShowHide();

            if (!isIE && outlineflag)
                OutlineShowHide();
        }
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
    if (isMobileUserAgent == false) {
        //Start HRB: Close the author bio on going on next page
        document.getElementById('authorBioPopUpL').style.visibility = 'hidden';
        //End HRB:: Close the author bio on going on next page

        document.getElementById('RolloverRevealPopUpL').style.visibility = 'hidden';
        document.getElementById('ClickRevealPopUpL').style.visibility = 'hidden';
        document.getElementById('ClickRevealPopUpLx').style.visibility = 'hidden';
    }
} // end Prev()


function HideResponse() {
    try {
        if (VisibleResponse != ""){
            if (isMobileUserAgent == false)
        eval("document.getElementById('" + VisibleResponse + "ok').onmousedown()")
      else
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

function GradeQuestion(CorrectAnswer) {

    if (isMobileUserAgent == true && event != null) {
        event.stopPropagation();

    }

    var x = ""
    var qtype = "";

    //hrb: added to close any menu popup on click of submitanswer button
    HideMenuPopup();
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
        if (form.length > 1) {
            //hrb:commented to disable the feedback coming from down to top
            for (var d = 0; d <= form.length - 1; d++) {
                if (CorrectAnswer.length > 1) {
                    if (d < form.length - 1) {
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
                if (isMobileUserAgent == true) {
                    if (isIphoneDevice == true)
                        showIPhonePopup('', document.getElementById("needanswer").innerHTML);
                    else
                        showIPadPopup('', document.getElementById("needanswer").innerHTML, "500px", "44px", "100px", "724px", "692px");
                }
                else {
                    document.getElementById("needanswer").style.visibility = 'visible';
                    //hrb:added
                }
                VisibleResponse = 'needanswer';
                return;
            }

            if ((x.length == 1) && (CorrectAnswer.length > 1) && (document.forms[0].length > 1)) {
                if (isMobileUserAgent == true) {
                    if (isIphoneDevice == true)
                        showIPhonePopup('', document.getElementById("needmorethanone").innerHTML);
                    else
                        showIPadPopup('', document.getElementById("needmorethanone").innerHTML, "500px", "44px", "100px", "724px", "692px");
                }
                else {
                    //Start Hrb: Showing pop up  is selected only one answer
                    showAlertPopup(REMINDER, multipleChoiceSelectionMessage);
                    //End Hrb: Showing pop up  is selected only one answer
                }
                //hrb:added
                VisibleResponse = 'needmorethanone';
                return;
            }
            if (x == CorrectAnswer) {
                if (isMobileUserAgent == true) {
                    if (isIphoneDevice == true) {
                        var inHtml = document.getElementById("responser").innerHTML;
                        inHtml = inHtml.replace(/responsediv/ig, '');
                        showIPhonePopup('', inHtml);
                    }
                    else {
                        var inHtml = document.getElementById("responser").innerHTML;
                        inHtml = inHtml.replace(/responsediv/ig, '');
                        showIPadPopup('', inHtml, "500px", "44px", "100px", "724px", "692px");
                    }
                }
                else {
                    PlaySound(true);
                    ShowCorrectAnswer();
                }
                //Start Hrb(06/16/2009): Added for preserving test questions
                updateStudyQuestionResponseStatus("C");
                //End Hrb(06/16/2009): Added for preserving test questions

            }
            else {
                PlaySound(false);

                if (qtype != "mc-fibs" && qtype != "1-1-dd" && qtype != "1-m-dd" && qtype != "match-pair") {
                    x = x.replace(/^\s+/, '');
                    if (x == '') {
                        if (isMobileUserAgent == true) {
                            if (isIphoneDevice == true) {

                                var inHtml = document.getElementById("responser").innerHTML;
                                inHtml = inHtml.replace(/responsediv/ig, '');
                                showIPhonePopup('', inHtml);
                            }
                            else {
                                var inHtml = document.getElementById("responser").innerHTML;
                                inHtml = inHtml.replace(/responsediv/ig, '');
                                showIPadPopup('', inHtml, "500px", "44px", "100px", "724px", "692px");
                            }
                        }
                        else
                            document.getElementById("needanswer").style.visibility = 'visible';
                        VisibleResponse = 'needanswer';
                        return;
                    }
                    else {
                        document.getElementById("needanswer").style.visibility = 'hidden';
                        document.getElementById("useranswer").innerHTML = ANS_NOT_CORRECT + x.toUpperCase() + ".";
                    }
                }
                if (isMobileUserAgent == true) {
                    if (isIphoneDevice == true) {
                        var inHtml = document.getElementById("responsew").innerHTML;
                        inHtml = inHtml.replace(/responsediv/ig, '');
                        showIPhonePopup('', inHtml);
                    }
                    else {
                        var inHtml = document.getElementById("responsew").innerHTML;
                        inHtml = inHtml.replace(/responsediv/ig, '');
                        showIPadPopup('', inHtml, "500px", "44px", "100px", "724px", "692px");
                    }
                }
                else {
                    document.getElementById("responsew").style.visibility = 'visible';
                }

                if (!isIE && isMobileUserAgent == false) {
                    document.getElementById("responsew").style.border = 'solid thin #000000';
                    document.getElementById("responsew").style.width = 643;
                    if (document.getElementById("useranswer")) {
                        document.getElementById("useranswer").parentNode.style.width = 648;
                    }
                }

                VisibleResponse = 'responsew';

                //Start Hrb(06/16/2009): Added for preserving test questions
                updateStudyQuestionResponseStatus("C");
                //End Hrb(06/16/2009): Added for preserving test questions

            }
        }
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

    if (isMobileUserAgent == false) {
        if (document.forms[0].length > 1) {
            for (var index = 0; index <= document.forms[0].length - 1; index++) {
                //hrb: added to check the users response for each question
                if (FinalExam == EXAM_POSITION_BYCOURSE) {
                    if (TestQuestion[QuestionNumber - 1].Answer.indexOf(document.forms[0].answer1[index].value.toUpperCase()) != -1)
                        document.forms[0].answer1[index].checked = true;
                }
                else {
                    var str = arrChapterQuestionResponse[CurrentChapter - 1][QuestionNumber - 1];
                    if (str.substring(1).indexOf(document.forms[0].answer1[index].value.toUpperCase()) != -1)
                        document.forms[0].answer1[index].checked = true;
                }
            }
        }
        else
            document.forms[0].answer1.value = TestQuestion[QuestionNumber - 1].Answer;
    }
    else {
        var form = getFormElementFromQuestionDiv(currentDivId);
        if (form.length > 1) {
            for (var index = 0; index <= form.length - 1; index++) {
                //hrb: added to check the users response for each question
                if (FinalExam == EXAM_POSITION_BYCOURSE) {
                    if (TestQuestion[QuestionNumber - 1].Answer.indexOf(form.answer1[index].value.toUpperCase()) != -1)
                        form.answer1[index].checked = true;
                }
                else {
                    var str = arrChapterQuestionResponse[CurrentChapter - 1][QuestionNumber - 1];
                    if (str.substring(1).indexOf(form.answer1[index].value.toUpperCase()) != -1)
                        form.answer1[index].checked = true;
                }
            }
        }
        else
            form.answer1.value = TestQuestion[QuestionNumber - 1].Answer;
    }
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
            if (isMobileUserAgent == false)
              document.getElementById("searchpopupLx").onmousedown();
            else
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
        if (isMobileUserAgent == false)
          document.getElementById('in1').onmousedown();
        else
          document.getElementById('in1').onclick();
            }
            //hrb: end of Added to hide the out line
        }
    }
    //hrb: Added to hide glossary terms description popup
    //hrb: start code added to check whether authorBioPopUp is open directly or through search result page
    if (div != "searchL" && isSearchClicked == false) {
    if (isMobileUserAgent == false)
      document.getElementById("authorBioPopUpLx").onmousedown();
    else
      document.getElementById("authorBioPopUpLx").onclick();
    }
    //hrb: end code added to check whether authorBioPopUp is open directly or through search result page
    document.getElementById("popupL").style.visibility = 'hidden';
  if (isMobileUserAgent == false)
      document.getElementById("testPopUpLx").onmousedown();
  else
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
          
            if(chk508Compliance()) {
              document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 43;
              //adjusting div for 508
            }
            else {
                document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 42;
            }
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
          if(chk508Compliance()) {
            document.getElementById(div + "1").getElementsByTagName('a')[0].focus();
          }         
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

  if(chk508Compliance() && VisibleMenu == "bookmarkL") {
    if(document.getElementById('msrkBookmark').style.visibility == 'hidden') {
      document.getElementById("bookmarkLx").focus();
    }
    else {
      document.getElementById('txtbkDescription').focus();
    }
  }
  
  if(!isIE) {
    if(VisibleMenu == "printL") {
      document.getElementById(VisibleMenu).style.height = 260;
    }
    if(VisibleMenu == "helpL") {
      document.getElementById(VisibleMenu).style.height = 250;
    }
  }
  
  if(!isMobileUserAgent && is508Course) {
    if(VisibleMenu=="glossL") {
      if(parseInt(document.getElementById(VisibleMenu+"1").style.height) > 0)
        document.getElementById(VisibleMenu+"1").style.height = parseInt(document.getElementById(VisibleMenu+"1").style.height) - 3;
    }
    if(VisibleMenu=="resourcesL") {
      if(!isIE) {
        document.getElementById(VisibleMenu+"1").style.height = parseInt(document.getElementById(VisibleMenu+"1").style.height) - 3;
      }
      else {
        document.getElementById(VisibleMenu+"1").style.height = 215;
      }
    }
  }
  
  if(!isMobileUserAgent && (isSafari || isChrome) && (VisibleMenu== "glossL" || VisibleMenu == "resourcesL" || VisibleMenu == "helpL")){
    document.getElementById(VisibleMenu+"1").style.width = 245;
  }
  else if(!isMobileUserAgent && (isSafari || isChrome) && VisibleMenu == "bookmarkL"){
    if(isSafari) {
      document.getElementById(VisibleMenu+"1").style.width = 299;
      document.getElementById("bookmarkTitle").style.width = 298;
    } 
    else {
      document.getElementById(VisibleMenu+"1").style.width = 300;
      document.getElementById("bookmarkTitle").style.width = 299;
    }
  }
  else if(!isMobileUserAgent && (isSafari || isChrome) && VisibleMenu == "printL"){
    document.getElementById(VisibleMenu+"1").style.width = 295;
  }
  else if(!isMobileUserAgent && (isSafari || isChrome) && VisibleMenu == "searchL"){
    document.getElementById(VisibleMenu+"1").style.width = 235;
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
var glossaryCall=false;
function O(loc, isOutlineCall, pageSrc) {
    if (isMobileUserAgent == true) {
        pageOrigin = pageSrc;
        if (event != null) {
            event.stopPropagation();
        }

    }

    //Date:19-Feb-2009: Harbinger[SagarG]: Added for glossary terms opening in new div popup within course window
    if (loc.indexOf("g/") == -1) {
        if (isMobileUserAgent == true) {
            showIPhonePopup("", MLEARNING_SUPPLEMENT_MSG);
            return;
        }
        var sFeatures = "left=100, top=120, width=400, height=300, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=no, titlebar=no"
        MainWin = window.open(loc, "_blank", sFeatures);
    }
    else {
        if (isMobileUserAgent == true) {
            //Start:HRB Check whether current page is study question, if it is then set outline flag to true
            var desiredProduct = document.getElementById("desired-product-behavior");
            if (!isIphoneDevice && desiredProduct && desiredProduct.value) {
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
                var popupTop = 0, popupLeft = 0;
                var popupArrowLeft = 0, popupArrowTop = 0;
                var forLeft = 0, forTop = 0;
                var arrowUrl = "";
                var popUpHeaderArrow_width = 26;
                var popUpHeaderArrow_height = 14;

                //geting top and left
                var ele = event.srcElement;
                curWidth = ele.offsetWidth;
                if (ele.offsetParent) {
                    do {
                        curTop += ele.offsetTop;
                        curLeft += ele.offsetLeft;
                    } while (ele = ele.offsetParent);
                }

    //if scroll any page than take take scroll y value for set popup top
    if(document.getElementById("adiv"))
      curTop+=moveScrollForAPW4.y;
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
                    popupTop -= 50;
                    popupArrowTop = curTop - 11;
                    arrowUrl = "url(common/images/bottom.png)";
                } else {
                   // arrowUrl = "url(common/images/top.png)";
                }
                //12-1-11 for arrow start 
    glossaryCall=true;
                document.getElementById("glossiframe").src = loc;
                if (isMobileUserAgent && !isIphoneDevice) {
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
                    popupLObj.style.top = popupTop;
                    popupLObj.style.left = popupLeft;
                    //popupLObj.style.height=height;
                    popupLObj.style.width = popupWidth;
                    popupLObj.style.height = 200;
                    document.getElementById("scrollpopup").style.width = 436;
                    //showIPadPopup("", "",popupTop+"px",popupLeft+"px","200px",popupWidth+"px","436px");
                }
            }
        }
        else {
            //Date:19-Feb-2009: Harbinger[SagarG]: Added for glossary terms opening in new div popup within course window
            showPopup(loc);
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
  
  if(chk508Compliance()) {
    sFeatures = "left=100, top=120, width=400, height=300, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=no, titlebar=no";
  }
  else {
    sFeatures = "left=100, top=120, width=400, height=300, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";
  }
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
    HideMenuPopup();
    if (isMobileUserAgent == false) {
        if (document.getElementById("outlineL").style.pixelLeft > 200) {
            OutlineShowHide();
        }
    }
}

function OutlineShowHide() {
    var objOut1 = document.getElementById("out1");

    hideCheckpoint();

    if (objOut1.style.display == '') {
    if (isMobileUserAgent == false)
        objOut1.onmousedown();
    else
      objOut1.onclick();
      
        showOutlineOverVdo();
    }
    else {
    if (isMobileUserAgent == false)
      document.getElementById("in1").onmousedown()
    else
      document.getElementById("in1").onclick()
        var objCertificatepopupL = document.getElementById("CertificatepopupL");

        //start Hrb(08/19/2009): if certificate pop up is open then show the link to continue video instead of the video
        if (objCertificatepopupL.style.visibility == 'visible')
            showOutlineOverVdo();
        else
            hideOutlineOverVdo();
    }
}

function OutlineShow(num) {
    var l_position;
    var l_value;
    var objOutlineL = document.getElementById("outlineL");

    //HRB: Added to hide  menu popup on the opening of outline
    HideMenuPopup();

    //HRB: End of Added to hide  menu  popup on the opening of outline
    showOutlineOverVdo();
    //Hrb: setting flag to indicate that it is open

    outlineflag = 1;

    objOutlineL.style.pixelWidth = 0;

    startpos = 20;
    endpos = 280;

    l_value = endpos - startpos;
    l_position = Math.abs(l_value);

    var x = (l_value) / (l_position);

    if (num <= l_position / 50) {
        objOutlineL.style.left = startpos + x * num * 50;
        num++;
        setTimeout("OutlineShow(" + num + ")", 20);
    }
    else {
        if (objOutlineL.style.left != endpos)
            objOutlineL.style.left = endpos;
    }

    // formatting of the outline panel in firefox
    if (!isIE) {
        objOutlineL.style.width = 30;
        objOutlineL.childNodes[8].style.width = 277;
        objOutlineL.childNodes[8].style.height = 490;
    }
  
  // expanding the table of contents of main chapters and hiding the expand and collapse image for 508
  if (chk508Compliance()) {
    for(var currentChap=0;currentChap<=TotalChapters; currentChap++) {    
        document.getElementById('ch'+currentChap).style.display="";
        document.getElementById('i'+currentChap).style.visibility="hidden";
    }
  }
}

function OutlineHide(num) {
    var l_position;
    var l_value;
    var x;
    var objOutlineL = document.getElementById("outlineL");

    //hrb: reset the flag to show that it has been closed
    outlineflag = 0;

    if (lessonMode == LESSON_PREVIEWER_MODE) {
        if (document.getElementById("coursePreviewerPopUpL").style.visibility != 'hidden') {
            document.getElementById("coursePreviewerPopUpLx").onclick();
        }
    }
    else {
        if (document.getElementById("testPopUpL").style.visibility != 'hidden'){
            if (isMobileUserAgent == false)
        document.getElementById("testPopUpLx").onmousedown();
      else
        document.getElementById("testPopUpLx").onclick();
    }
    }

    startpos = 280;
    endpos = 6;

    l_value = endpos - startpos;
    l_position = Math.abs(l_value);

    x = (l_value) / (l_position);

    if (num <= l_position / 50) {
        objOutlineL.style.left = startpos + x * num * 50;
        num++;
        setTimeout("OutlineHide(" + num + ")", 20);
    }
    else {
        if (objOutlineL.style.left != endpos)
            objOutlineL.style.left = endpos;

        objOutlineL.style.pixelWidth = 0;

        if (mode == "starttest") {
            // Used to have a Flash that introduced the test.
            // Here loaded test.htm into frame_b, which
            //   loaded starttest.swf, which
            //     played and then loaded starttest.htm, which
            //       called ShowTestQuestion.
            // But IE7 broke the Flash transfer, so we now skip the Flash and go right to ShowTestQuestion.
            // Similar below in St()
            // JDO 12/06/06
            // previously: parent.frames.frame_b.document.location = "test.htm"

            ShowTestQuestion(1);
        }
    }
    //hrb start:added to show closing alert after hiding the outline menu
    if (parseInt(objOutlineL.style.left) == endpos && isExitClicked) {
        fnShowCloseAlert();
    }
    //hrb end:added to show closing alert after hiding the outline menu

    //start Hrb(08/19/2009): if certificate pop up is open then show the link to continue video instead of the video
    var objCertificatepopupL = document.getElementById("CertificatepopupL");

    if (objCertificatepopupL.style.visibility == 'visible')
        showOutlineOverVdo();
    else
        hideOutlineOverVdo();
  
  if(chk508Compliance()) {
    document.getElementById('courseOutlineDiv').style.display='none';
  }
} // end OutlineHide()

function GetNumberOfTestQuestions(Chapter) {
    return TestQuestionsArray[Chapter - 1];
}

//HRB: Added for showing test description page before going to test page.
function fnShowChapterTestDescrPage() {
  document.getElementById('showQuestionNumber').style.visibility='hidden';
    
    //HRB : added to hide outline
    if (outlineflag && isMobileUserAgent == false) {
        if (document.getElementById("outlineL").style.pixelLeft > 200)
            OutlineShowHide();

        if (!isIE && outlineflag) {
            OutlineShowHide();
        }
        outlineflag = 0;
    }
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
    if (isMobileUserAgent == false) {
        document.getElementById("glossbuttonL").style.visibility = 'visible';
        document.getElementById("printbuttonL").style.visibility = 'visible';
        document.getElementById("searchbuttonL").style.visibility = 'visible';
        document.getElementById("coursetd").background = "common/images/menubackground-c.gif";
    }

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

    //hrb:changes to goto next chapter if failed in any chapter test for 3 times then disable the next button
    //if the course is having final exam and is failed three times then 
    if (isFailed() && (FinalExam == EXAM_POSITION_BYCOURSE)) {
        document.getElementById("NextButton").style.display = "none";
        document.getElementById("NextButtonDisabled").style.display = "";
    }
    //if the course is having chapter test and current chapter is the last chapter of the course which is failed then disable the next button
    else if (noOfattempts == testAttempts && (FinalExam == EXAM_POSITION_BYCHAPTER && CurrentChapter == TotalChapters)) {
        document.getElementById("NextButton").style.display = "none";
        document.getElementById("NextButtonDisabled").style.display = "";
    }
    else {
        document.getElementById("NextButton").style.display = "";
        document.getElementById("NextButtonDisabled").style.display = "none";
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
            if (mode == "review")
                str = eval("SWITCH_FROM_REVIEW_" + FinalExam.toUpperCase());
            else
                str = eval("SWITCH_FROM_RETAKE_" + FinalExam.toUpperCase());
        
      str= str.replace(/&nbsp;/g,' ');
            if (isMobileUserAgent == true) {
                outlineflag = 0;
                if (isIphoneDevice == true) {
                    showIPhoneConfirm('', str, Chapter, "St");
                    return;
                }
                else {

                    showConfirmPopup('', str, Chapter, "St");
                    return;
                }
            } else {
                var res = confirm(str);
                if (!res) {
                    return;
                }
            }

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
            var alertMsg = FAILED_CANNOT_RETAKE_TEST_PART3 + testAttempts + FAILED_CANNOT_RETAKE_TEST_PART2;
            if (isMobileUserAgent) {
                showIPhonePopup(CHAPTER_TEST, alertMsg);
            } else {
                showAlertPopup(CHAPTER_TEST, alertMsg);
            }

            CurrentChapter = clickedfromchapter;
            return;
        }
        //hrb: check if user has completed the course. noOfattempts = 9999 when complete
        else if (noOfattempts >= CHAPTER_TEST_PASSED) {
            if (isMobileUserAgent == true) {
                showIPhonePopup(CHAPTER_TEST, CHAPTERTEST_PASS_INFO1);
            } else {
                showAlertPopup(CHAPTER_TEST, CHAPTERTEST_PASS_INFO1);
            }

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

    //hrb end : Commented for opening other windows and navigate to other pages even if tools window is open
    if (isMobileUserAgent == false) {
        document.getElementById("glossLx").onmousedown();
        document.getElementById("helpLx").onmousedown();
        document.getElementById("printLx").onmousedown();
    }
    TestInit();
    CurrentTestQuestion = 0;
    document.getElementById(currentDivId).innerHTML = "";

    //hrb start : Changes to enable menu's on test pages
    if (!scorm && isMobileUserAgent == false) {
        document.getElementById("searchText").style.visibility = '';
        document.getElementById("searchbuttonL").style.visibility = '';
    }
    if (isMobileUserAgent == false) {
        document.getElementById("glossbuttonL").style.visibility = '';
        document.getElementById("bookmarkbuttonL").style.visibility = '';
        document.getElementById("printbuttonL").style.visibility = '';

        //hrb start : Changes to enable menu's on test pages
        document.getElementById("controlpanel").style.visibility = 'visible';
    }
    //hrb: Added chapter test question combo box
    document.getElementById("questionControlPanel").style.visibility = 'visible';
    //hrb: End of Added chapter test question combo box

    //hrb: Added chapter test question number
    document.getElementById("showQuestionNumber").style.visibility = 'visible';
    //hrb: End of Added chapter test question number

    document.getElementById("submittest").style.visibility = 'hidden';
    document.getElementById("submittest_disable").style.visibility = 'visible';

    if (document.getElementById("subchaptertitle") != null)
        document.getElementById("subchaptertitle").innerHTML = "";

    //hrb: changes for next and prev button
    document.getElementById("PrevButtonDisabled").style.display = "none";
    document.getElementById("NextButton").style.display = "";
    document.getElementById("PrevButton").style.display = "";
    document.getElementById("NextButtonDisabled").style.display = "none";
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

        parent.frames.frame_b.document.location.href = "starttest.htm";

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
    if (lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) {
        if (parseInt(chapterIndex) > parseInt(demoChapters)) {
            showCoursePreviewPopUp();
            return;
        }
    }
  
    //start Hrb(05/25/2009): Added for course previewer
    if (outlineflag) {
        if (isMobileUserAgent == false) {
            if (document.getElementById("outlineL").style.pixelLeft > 200)
                OutlineShowHide();

            if (!isIE && outlineflag) {
                OutlineShowHide();
            }
        }

        outlineflag = 0;

        if (mode == "review" || mode == "retake") {
            var str = "";
            if (mode == "review")
                str = eval("SWITCH_FROM_REVIEW_" + FinalExam.toUpperCase());
            else
                str = eval("SWITCH_FROM_RETAKE_" + FinalExam.toUpperCase());
      str= str.replace(/&nbsp;/g,' ');
            if (isMobileUserAgent == true) {
                if (isIphoneDevice == true) {
                    showIPhoneConfirm('', str, chaptercode, "sc");
                    return;
                }
                else {

                    showConfirmPopup('', str, chaptercode, "sc");
                    return;
                }
            } else {
                var res = confirm(str);
                if (!res) {
                    return;
                }
            }
        }
        /* */
    }
    isDemoCoursePopUpOnNextClick = false;

    //End Hrb(05/25/2009): Added for course previewer
    if (isMobileUserAgent == false)
        document.getElementById("testPopUpLx").onmousedown();




    mode = "study";


    if (!scorm && isMobileUserAgent == false) {
        document.getElementById("searchbuttonL").style.visibility = 'visible';
    }

    //hrb: Added chapter test question combo box
    document.getElementById("questionControlPanel").style.visibility = 'hidden';
    //hrb: End of Added chapter test question combo box

    //hrb: Added chapter test question number
    document.getElementById("showQuestionNumber").style.visibility = 'hidden';
    //hrb: End of Added chapter test question number

    document.getElementById("submittest").style.visibility = 'hidden';
    document.getElementById("submittest_disable").style.visibility = 'hidden';

    if (isMobileUserAgent == false) {
        document.getElementById("glossbuttonL").style.visibility = 'visible';
        document.getElementById("bookmarkbuttonL").style.visibility = 'visible';
        document.getElementById("printbuttonL").style.visibility = 'visible';
        document.getElementById("controlpanel").style.visibility = 'hidden';



        if (scorm)
            document.getElementById("coursetd").background = "common/images/scormmenubackground.gif";
        else if (treatment == "b")
            document.getElementById("coursetd").background = "common/images/menubackground-c.gif";
        else // treatment == "c"
            document.getElementById("coursetd").background = "common/images/menubackground-c.gif";
    }
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
    //hrb:end of changes for next and prev button

    //start Hrb: Final Exam, get the questions from no of questions to display  

    if ((CurrentTestQuestion == NoOfQuesToDisplayChap) && (CurrentChapter == TotalChapters)) {
        //hrb:changes for next and prev button
        document.getElementById("NextButtonDisabled").style.display = "";
        document.getElementById("NextButton").style.display = "none";
        //hrb:end of changes for next and prev button
    }

    if ((CurrentTestQuestion == 1) && (CurrentChapter == 1) && (mode == "review" || mode == "retake")) {
        document.getElementById("PrevButton").style.display = "none";
        document.getElementById("PrevButtonDisabled").style.display = "";
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
    if (mode == "review" || mode == "retake") {
  
    if(chk508Compliance()) {
        document.getElementById("showQuestionNumber").innerHTML = "<h1 tabindex='7' onFocus='onfocuselement(this);' onBlur='onblurelement(this);' style='border:4px solid transparent;' >" + CHAPTER_SPACE + parseInt(CurrentChapter) + " : " + TEST_QUESTION_BYCHAPTER + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + NoOfQuesToDisplayChap + "</h1>";
    }
    else {
        document.getElementById("showQuestionNumber").innerHTML = "<h1>" + CHAPTER_SPACE + parseInt(CurrentChapter) + " : " + TEST_QUESTION_BYCHAPTER + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + NoOfQuesToDisplayChap + "</h1>";
    }
  }
    else {
    if(chk508Compliance()) {
        document.getElementById("showQuestionNumber").innerHTML = "<h1 tabindex='7' onFocus='onfocuselement(this);' onBlur='onblurelement(this);' style='border:4px solid transparent;'  >" + TEST_QUESTION_BYCHAPTER + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + NoOfQuesToDisplayChap + "</h1>";
    }
    else {
        document.getElementById("showQuestionNumber").innerHTML = "<h1>" + TEST_QUESTION_BYCHAPTER + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + NoOfQuesToDisplayChap + "</h1>";
    }
  }
    //end Hrb: Final Exam, get the questions from no of questions to display

    // For adjusting the top of the test question
    if (!isIE) {
        if (isMobileUserAgent == false) {
            document.getElementById("showQuestionNumber").style.top = 111;
        }
        else {
            if (isIphoneDevice == false) {
                document.getElementById("showQuestionNumber").style.top = 75;
                document.getElementById("showQuestionNumber").style.left = 60;
            }
        }
    }

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
    if (isMobileUserAgent == true && event != null) {
        event.stopPropagation();
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
    hidePopups();

    //Start HRB: Added for updating status of chapter test
    if (FinalExam == EXAM_POSITION_BYCOURSE)
        var key = "TestQuestion " + CurrentTestQuestion;
    else
        var key = "Chapter" + CurrentChapter + " TestQuestion " + CurrentTestQuestion;

    isChapterTestSubmited = true;

    //End HRB: Added for updating status of chapter test
    updateStatus(key, INCOMPLETED_STATUS_IMG);

    if (outlineflag && isMobileUserAgent == false) {
        if (document.getElementById("outlineL").style.pixelLeft > 200)
            OutlineShowHide();

        if (!isIE && outlineflag) {
            OutlineShowHide();
        }
        outlineflag = 0;
    }

    if (FinalExam == EXAM_POSITION_BYCOURSE) {
        //hrb:changes for max 3 attempts
        noOfattempts++;

        if (noOfattempts <= testAttempts)
      //SubmitFinalExam();
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
  if(isMobileUserAgent==true )
  {
    UpdateProgressData(); //Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location
    
     if(saveStatusFunctionTimerPointer!=null && saveStatusFunctionTimerPointer!='undefined')
     {
      clearTimeout(saveStatusFunctionTimerPointer);
      if(activityThresholdValue != 0 && activityThresholdValue != -1) //HRB: Added -1 check for the mLearning Help Course.
        saveStatusFunctionTimerPointer=setInterval ("SaveProgressDataWithInterval()", activityThresholdValue);
     }
  }
    
} // end SubmitTest()


function showFinalExamConfirmationPage()
{
  GradeTestQuestion();
  CurrentTestQuestion=0;
  document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";
  document.getElementById("PrevButton").style.display = "";
    document.getElementById("PrevButtonDisabled").style.display = "none";
  SetMode("nextchapter");
  
  CurrentChapter = TotalChapters;
    parent.frames.frame_b.document.location = "confirmation_page.htm";
    testDescriptionStr = CurrentChapter + ",confirmation_page";
  
    document.getElementById("questionControlPanel").style.visibility = 'hidden';
    document.getElementById("showQuestionNumber").style.visibility = 'hidden';
    document.getElementById("submittest").style.visibility = 'hidden';
  
}

//startHrb: Changed the function name from SubmitTest() to SubmitChapterTest()
function SubmitChapterTest() {
    if (mode == "review" || mode == "retake") {
        CurrentChapter = TotalChapters;
        document.getElementById("PrevButton").style.display = "";
        document.getElementById("PrevButtonDisabled").style.display = "none";
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
            if (isMobileUserAgent == false) {
                document.getElementById("istat" + "0" + "Test").src = COMPLETED_STATUS_IMG;
            }
            else {
                document.getElementById("istat" + "0" + "Test").className = COMPLETED_STATUS_CLASS;
            }
            CompletedChapterCodeStr = CompletedChapterCodeStr + "0" + "Test" + ",";
        }
        else {
            if (isMobileUserAgent == false) {
                document.getElementById("istat" + CurrentChapter + "Test").src = COMPLETED_STATUS_IMG;
            }
            else {
                document.getElementById("istat" + CurrentChapter + "Test").className = COMPLETED_STATUS_CLASS;
            }
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
        if (isMobileUserAgent == false) {
            document.getElementById("controlpanel").style.visibility = 'hidden';
            //document.getElementById("NextButton").style.display = "";
            //document.getElementById("NextButtonDisabled").style.display = "none";
            //hrb:end of changes for next and prev button
            document.getElementById("outlinebuttonL").innerHTML = "Lsn " + CurrentChapter + " Test";
        }
        //Start HRB: Commented code to show same functionality for CREDIT and PILOTTESTING mode.
        /*if(lessonMode == LESSON_PILOTTESTING_MODE)
        {
        document.getElementById("NextButton").style.display = "none";
        document.getElementById("NextButtonDisabled").style.display = "";
        }
        else
        {*/
        if (CurrentChapter == TotalChapters) {
            document.getElementById("NextButton").style.display = "none";
            document.getElementById("NextButtonDisabled").style.display = "";
        }
        else {
            document.getElementById("NextButton").style.display = "";
            document.getElementById("NextButtonDisabled").style.display = "none";
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
                if (isMobileUserAgent == false)
                    document.getElementById("istat" + i + "Test").src = COMPLETED_STATUS_IMG;
                else
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
    var selectedOption = "optq" + CurrentTestQuestion;
    document.getElementById(selectedOption).style.color = "gray";
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

function selectRow(e, src, type) {
    var node = null;
    if (e.currentTarget.nodeName == "SPAN") {
        node = e.currentTarget.parentElement.parentElement.children[0].childNodes[0];
    } else {
        node = e.currentTarget.parentElement.children[0].childNodes[0];
    }

    if (node.type == "radio") {
        node.checked = true;
    } else {
        if (node.checked == true)
            node.checked = false;
        else
            node.checked = true;
    }

    if (src == "study" || src == "excercise") {
        fnSubmitAnswer(type, false);
    } else {
        TR();
    }
}
function TR() {

    if (isMobileUserAgent && event != null) {
        event.stopPropagation();
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
        key = "TestQuestion " + CurrentTestQuestion;
        visitedPagesKey = 'T' + CurrentTestQuestion;
    }
    else {
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
                document.getElementById("submittest").style.visibility = 'hidden';
                document.getElementById("submittest_disable").style.visibility = 'visible';
                //hrb end 01-6-2009: added to disable submit test, if all check boxes are uchecked by the user
                return;
            }
        }
    }
    //end Hrb: Final Exam, get the questions from no of questions to display

    document.getElementById("submittest").style.visibility = 'visible';
    document.getElementById("submittest_disable").style.visibility = 'hidden';

    if ((mode == "study" || mode == "test") && CurrentTestQuestion == NoOfQuesToDisplayChap) {
        document.getElementById("NextButton").style.display = "none";
        document.getElementById("NextButtonDisabled").style.display = "";
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
    
      //  if (FinalExam == EXAM_POSITION_BYCHAPTER) {
      //document.getElementById("submittest").innerHTML = "<img src ='common/images/submitanswers_on.gif' alt='"+ALT_TEST_SUBMITANSWERS+"'>";
            //document.getElementById("submittest_disable").innerHTML = "<img src ='common/images/submitanswers_off.gif'>";
      //  }
        // code for setting the content div dimensions for Firefox
        if (!isIE) {
            var objContent = document.getElementById(currentDivId);
            if (isMobileUserAgent == false) {
                objContent.style.width = 945;
                objContent.style.height = 633;
            }
            else {
                if (isIphoneDevice == false) {
                    objContent.style.width = 1014;
                    objContent.style.height = 647;
                }
                else {
                    objContent.style.width = 318;
                    objContent.style.height = 458;
                }
            }
        }

        if (document.progress.OnlineUser) //temporary commented isMobileUserAgent || isMobileUserAgent
        {
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
        
        is508User = sub.is508User;  //HRB: Added to check if user is 508 or non-508

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
                    if (isMobileUserAgent) {
                        gbl_CourseCertificateURI = sub.courseCertificateURI;
                        if (lessonMode == LESSON_PILOTTESTING_MODE)
                            gbl_CourseFeedbackURI = sub.courseFeedbackURI;
                    }
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
            }

        }
        //start Hrb (08/31/2009): Save the data after activityThreshold time(in ms) interval elapse
        if (activityThresholdValue != 0 && activityThresholdValue != -1)  //HRB: Added -1 check for the mLearning Help Course.
            saveStatusFunctionTimerPointer = setInterval("SaveProgressDataWithInterval()", activityThresholdValue);
        //end Hrb (08/31/2009): Save the data after activityThreshold time(in ms) interval elapse

        //hrb start: restore the selected bandwidth 
        selectedBandwidth = document.progress.SelectedBandwidth();
        //hrb send: restore the selected bandwidth
    
    if(chk508Compliance()) {
      isRestoreState = true;
      isNextPrevious = true;
      document.getElementById('courseOutlineDiv').style.display = 'none';
      selectedBandwidth = "low";
      hideVolumeIcon = "yes";
      //if(FinalExam == EXAM_POSITION_BYCHAPTER) {
        document.getElementById("submittest").innerHTML = "<img tabindex='8' style='border:4px solid transparent;' src ='common/images/submitanswers_on.gif' alt='"+ALT_TEST_SUBMITANSWERS+"' onFocus='onfocuselement(this);' onBlur='onblurelement(this);' onKeyUp='if(chkEnterKey(event)){isNextPrevious=true;SubmitTest();}' onClick='if(chkEnterKey(event)){isNextPrevious=true;SubmitTest();}'>";
      //}
      if(!isIE) {
        document.getElementById("divPageTitle").style.height = 10;
        document.getElementById("divPageTitle").style.left = 675;
        document.getElementById("divPageTitle").style.top = 677;
      }
      else {
        document.getElementById('divPageTitle').style.marginTop = -3;
      }
    }
    else {
      removeTabIndex(document);
      if(!isIE) {
        var divpagetitletemp= document.getElementById('divPageTitle');
        divpagetitletemp.style.border= 'none';
        divpagetitletemp.style.marginTop=0;
        var searchTexttemp= document.getElementById('searchText');
        searchTexttemp.style.border= 'none';
        searchTexttemp.style.marginTop=0;
        searchTexttemp.style.marginLeft=0;
      }
      if(!isMobileUserAgent){
      document.getElementById('divPageTitle').style.border = "#9b9b9b 1px solid";
      document.getElementById('divPageTitle').style.marginTop = 0;
      }
    }
    
        //hrb: added to restore the current progress
        if (FinalExam == EXAM_POSITION_BYCHAPTER) {
            //gbl_completedQues = document.progress.CompletedQuestions();
            gbl_CurrentTestScore = document.progress.ChapterTestScore();
        }

        gbl_bookmarkStr = document.progress.bookmarkStr();
    
    
    gbl_TestQuestionArray= document.progress.TestQuestionArray().split(',');
      
        if (gbl_bookmarkStr.length > 0) {
            gbl_bookmarkStr = gbl_bookmarkStr.split('<ts>');
        }
        for (itr = 0; itr < gbl_bookmarkStr.length - 1; itr++) {
            tmpbkArray = gbl_bookmarkStr[itr].split('<fs>');

            for (index = 0; index < tmpbkArray.length; index++) {
                bookmarkArray[itr] = new setBookMark(tmpbkArray[0], tmpbkArray[1], tmpbkArray[2]);
            }
        }

        //Add bookmork to bookmark div for iphone or ipad @sha
        if (isMobileUserAgent) {
            createBookmarkli(bookmarkArray);
            if (isIphoneDevice == true) {
                setTimeout(hideShowHeaderFooter_iphone, 10000);
            }
        }

        //HRB: Added For Progress Bar and getting the course title
        var strVisitedPages = '';
        var tempArrayVisitedPages;
        if (document.getElementById('coursetitle') != null) {
            courseTitle = document.getElementById('coursetitle').innerHTML;

            AdjustCourseTitle(courseTitle)
        }
        //End by HRB
    
    //Hiding the coursetitle div for 508 in IE after adjusting the font of the course title
    if(chk508Compliance() && isIE){
      document.getElementById("coursetitle").style.display='none';
    }
  
        DoResize(this);
        mode = parent.parent.frames.frame_2.mode;
        //hrb: added to restore the mode
        var modeFromProgress = document.progress.Mode();
        if (modeFromProgress != null && modeFromProgress != 'undefined' && modeFromProgress != '')
            mode = modeFromProgress;
        CurrentStudyPage = document.progress.Bookmark();
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
            if (isMobileUserAgent == true)    //HRB: Condition added for the mLearning course.
            {
                showmLearningCertificate();
            }
            else {
                document.getElementById("certificatebuttonL").style.display = ""
                document.getElementById("certificatebuttonLDisabled").style.display = "none"
                document.getElementById("certificatebuttonLD").style.display = "none"
            }
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

                document.getElementById("questionControlPanel").style.visibility = "visible";
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
          document.getElementById('showQuestionNumber').style.visibility='hidden';
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
                    }
                    else {
                        document.getElementById("NextButton").style.display = "";
                        document.getElementById("NextButtonDisabled").style.display = "none";
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
          document.getElementById('showQuestionNumber').style.visibility="hidden";
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
          document.getElementById('showQuestionNumber').style.visibility='hidden';
                    parent.frames.frame_b.document.location = "confirmation_page.htm";
                }
                else if (tmpStr == "test_progress") {
          document.getElementById('showQuestionNumber').style.visibility='hidden';
                    parent.frames.frame_b.document.location = "test_progress.htm";
                }

            }
      if(chk508Compliance()) {
        isNextPrevious=true;
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

                    //hrb start : Changes to enable menu's on test pages
                    if (!scorm && isMobileUserAgent == false) {
                        document.getElementById("searchText").style.visibility = ''
                        document.getElementById("searchbuttonL").style.visibility = ''
                    }
                    if (isMobileUserAgent == false) {
                        document.getElementById("glossbuttonL").style.visibility = '';
                        document.getElementById("bookmarkbuttonL").style.visibility = '';
                        document.getElementById("printbuttonL").style.visibility = '';
                    }
                    //hrb start : Changes to enable menu's on test pages
                    document.getElementById("controlpanel").style.visibility = 'visible';
                    //hrb: Added chapter test question combo box
                    document.getElementById("questionControlPanel").style.visibility = 'hidden';
                    //hrb: End of Added chapter test question combo box

                    //hrb: Added chapter test question number
                    document.getElementById("showQuestionNumber").style.visibility = 'hidden';
                    //hrb: End of Added chapter test question number

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

                        if (!scorm && isMobileUserAgent == false) {
                            document.getElementById("searchText").style.visibility = 'hidden';
                            document.getElementById("searchbuttonL").style.visibility = 'hidden';
                        }

                        if (isMobileUserAgent == false) {
                            document.getElementById("glossbuttonL").style.visibility = 'hidden';
                            document.getElementById("bookmarkbuttonL").style.visibility = 'hidden';
                            document.getElementById("printbuttonL").style.visibility = 'hidden';

                            document.getElementById("helpbuttonL").style.pixelLeft = 373;
                            document.getElementById("quitbuttonL").style.pixelLeft = 453;
                            document.getElementById("helpbuttonL").style.pixelTop = 25;
                            document.getElementById("quitbuttonL").style.pixelTop = 25;
                        }
                        document.getElementById("controlpanel").style.visibility = 'visible';

                        //hrb: Added chapter test question combo box
                        document.getElementById("questionControlPanel").style.visibility = 'hidden';
                        //hrb: End of Added chapter test question combo box

                        //hrb: Added chapter test question number
                        document.getElementById("showQuestionNumber").style.visibility = 'hidden';
                        //hrb: End of Added chapter test question number

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
  
  try{
    if(document.getElementById('audioControlId')){
      var audioControlId=document.getElementById('audioControlId');
      audioControlId.stop();
    }
    }catch(e){} 

    if(glossaryCall || authorBioCall){
    glossaryCall=false;
    authorBioCall=false;
    closePopUp();
  }
    try {
    if(!chk508Compliance()) {
        removeTabIndex(parent.frames.frame_b.document);
    }
    else{
      if(isIE && isRestoreState && parent.frames.frame_b.document.getElementById('question')){
        parent.frames.frame_b.document.getElementById('question').style.display = 'none';
      }
    }
    
        if (isMobileUserAgent == false) {
            //hrb start : added to hide test page popup
            if (document.getElementById("testPopUpLx")) {
                document.getElementById("testPopUpLx").onmousedown();
            }
            //hrb end : added to hide test page popup

            //hrb start : added to hide course preview popup on content load
            if (document.getElementById("coursePreviewerPopUpLx")) {
                document.getElementById("coursePreviewerPopUpLx").onclick();
            }
            //hrb start : added to hide course preview popup on content load
        }
        else {
            if (isMobileUserAgent && isNavigationNo != null && isNavigationNo != 'undefined') {
                isNavigationNo = true;
            }
        }


        //Start Hrb(06/16/2009): Added for preserving test questions
        if (parent.frames.frame_b.document.getElementById("desired-product-behavior") != null) {
            if (parent.frames.frame_b.document.getElementById("desired-product-behavior").value == "study") {

                setStudyQuestionResponse();

        //hiding submit answer for 508 user 
        if(isIE && isRestoreState && chk508Compliance() && parent.frames.frame_b.document.getElementById("submitAnswerEnable")){
          parent.frames.frame_b.document.getElementById("submitAnswerEnable").style.display="none"
        }
  
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


        if (noOfattempts == CHAPTER_TEST_PASSED) {
            if (parent.frames.frame_b.document.getElementById("statusDiv"))
                if (FinalExam == EXAM_POSITION_BYCOURSE) {
                parent.frames.frame_b.document.getElementById("statusDiv").innerHTML = FINALEXAM_PASS_INFO;
                document.getElementById("NextButton").style.display = "none";
                document.getElementById("NextButtonDisabled").style.display = "";
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
            forSerachKey = parent.frames.frame_b.document.getElementById("content").innerHTML.replace(/tr_object/ig, "object").replace(/tr_embed/ig, "embed").replace(/tr_param/ig, "param").replace(/tr_userSelectedBandwidth/ig, selectedBandwidth).replace(/tr_isOLP/ig, g_isOLP).replace(/tr_hideVolumeIcon/ig, hideVolumeIcon);
            if (highlightMe) {
                highlightMe = false;
                forSerachKey = genrateHighlightData(forSerachKey);
            }
            parent.frames.frame_a.document.getElementById(currentDivId).innerHTML = forSerachKey;

            //end  text highlight
            //parent.frames.frame_a.document.getElementById(currentDivId).innerHTML = parent.frames.frame_b.document.getElementById("content").innerHTML.replace(/tr_object/ig,"object").replace(/tr_embed/ig,"embed").replace(/tr_param/ig,"param").replace(/tr_userSelectedBandwidth/ig,selectedBandwidth).replace(/tr_isOLP/ig,g_isOLP);
            if (isMobileUserAgent == false) {
                if (parent.frames.frame_a.document.getElementById("question") != null) {
                    if (parent.frames.frame_a.document.getElementById("question").offsetHeight > 415) {
                        parent.frames.frame_a.document.getElementById("question").style.pixelHeight = 415;
                        questionscrollbar = true;
                    }
                    // for formatting the question pages for Firefox
                    if (!isIE) {
                        if ((parent.frames.frame_a.document.getElementById(currentDivId).childNodes[5]) != null) {
                            parent.frames.frame_a.document.getElementById(currentDivId).childNodes[5].style.top = 40;

                        }
                        else {
                            if ((document.getElementById("showQuestionNumber") != null)
                       && (parent.frames.frame_a.document.getElementById(currentDivId).childNodes[1] != null)) {
                                parent.frames.frame_a.document.getElementById("question").style.top = 92;
                          //      parent.frames.frame_a.document.getElementById("content").childNodes[1].style.top = 60;
                            }

                        }
                        for (var d = 0; d <= document.forms[0].length - 1; d++) {
                            if (document.forms[0].answer1) {
                                if (document.forms[0].answer1[d] != null)
                                    document.forms[0].answer1[d].parentNode.width = 30;
                            }
                        }
                    }
                }
            }
            else {
                var parentFrameContentDiv = parent.frames.frame_a.document.getElementById(currentDivId);

                if (parentFrameContentDiv.childNodes[3] != null && parentFrameContentDiv.childNodes[3].id == "question") {
                    if (parentFrameContentDiv.childNodes[3].offsetHeight > 415) {
                        parentFrameContentDiv.childNodes[3].style.pixelHeight = 415;
                        questionscrollbar = true;
                    }
                    // for formatting the question pages for Firefox
                    if (!isIE) {
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
                        for (var d = 0; d <= form.length - 1; d++) {
                            if (form.answer1) {
                                if (form.answer1[d] != null)
                                    form.answer1[d].parentNode.width = 30;
                            }
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
            }

            if (parent.frames.frame_a.document.getElementById("btm") != null) {
                if (parent.frames.frame_a.question != null && isMobileUserAgent == false) {
                    if (questionscrollbar)
                        parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("question").offsetTop + 415;
                    else
                        parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("question").offsetTop + parent.frames.frame_a.document.getElementById("question").offsetHeight;
                }
                else {
                    if ((parent.frames.frame_a.document.getElementById("adiv").style) && (parent.frames.frame_a.document.getElementById("adiv").style.overflow == "auto")) {
                        if (treatment == "b") {
                            parent.frames.frame_a.document.getElementById("adiv").style.pixelHeight = 490;
                            parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("adiv").style.pixelTop + 490;
                        }
                        else // treatment == "c"
                        {
                            //hrb start 21/5/2009: pixelHeight changed to 493 from 490, to avoid the scroll bar for flv file
                            parent.frames.frame_a.document.getElementById("adiv").style.pixelHeight = 493
                            parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("adiv").style.pixelTop + 493
                            //hrb end 21/5/2009: pixelHeight changed to 493 from 490, to avoid the scroll bar for flv file
                        }
                    }
                    else
                        if (parent.frames.frame_a.document.getElementById("adiv").style && parent.frames.frame_a.document.getElementById("btm").style)
                        parent.frames.frame_a.document.getElementById("btm").style.pixelTop = parent.frames.frame_a.document.getElementById("adiv").style.pixelTop + parent.frames.frame_a.document.getElementById("adiv").offsetHeight;

                    // Added to adjust the height of adiv in Firefox
                    if (!isIE) {
                        if (isMobileUserAgent == false) {
                            parent.frames.frame_a.document.getElementById("adiv").style.overflow = "auto";
                            parent.frames.frame_a.document.getElementById("adiv").style.maxHeight = 450;
                        }
                        else {
                            var adivObj = document.getElementById(currentDivId).childNodes["adiv"]; //for ipad there are multiple div so we take adiv from current div
                            if (adivObj != null) {
                                var adivStyleObj = adivObj.getAttributeNode("style");
                                var adivStyle = adivStyleObj.nodeValue;
                                if (adivStyle.indexOf("height") > 0) //to remove height from style attribute
                                    adivStyle = adivStyle.substr(0, adivStyle.indexOf("height") - 1) + adivStyle.substr(adivStyle.indexOf("height") - 1).substr(adivStyle.indexOf(";") + 1);

                                adivObj.removeAttribute("style");
                                adivObj.setAttribute("style", adivStyle);
                                adivObj.style.overflow = "hidden";
                                adivObj.style.position = "relative";

                                if (moveScrollForAPW4 != null) {
                                    //moveScrollForAPW4.destroy();
                                }
                                moveScrollForAPW4 = new iScroll("adiv");
                                navigateForAPW4 = new navigate("adiv");
                            }
                        }

                    }
                }
            }

            // Adjusting the width of panelP div for firefox
        /*    if (!isIE) {
                if (parent.frames.frame_b.document.getElementById("panelP")) {
                    document.getElementById("panelP").style.width = parseInt(document.getElementById("panelP").style.width) - 25;
                }

                if (parent.frames.frame_b.document.getElementById("panelS")) {
                    document.getElementById("panelS").style.width = parseInt(document.getElementById("panelS").style.width) - 10;
                }
                // Added to play properly *.swf files in Firefox
                if (isMobileUserAgent == false)
                    document.getElementById(currentDivId).style.overflow = "auto";
                else
                    document.getElementById(currentDivId).style.overflow = "hidden";

            }*/
      nAdjustPanelOverflow();

        }
    
    
        if (isMobileUserAgent == false) {
            //hrb start: code added to enable transcript button
            document.getElementById('transcriptbuttonL').style.display = "none";
            document.getElementById('transcriptbuttonLD').style.display = "none";
            document.getElementById('transcriptbuttonLDis').style.display = "";
        }
        //hrb:added check for lessonmode=coursePreviewer
        if (lessonMode != LESSON_PREVIEWER_MODE) {
            if (parent.frames.frame_b.document.getElementById("transContent") && isMobileUserAgent == false) {
                document.getElementById('transcriptbuttonLDis').style.display = "none";
                document.getElementById('transcriptbuttonL').style.display = "";
                document.getElementById('transcriptpopupL1').innerHTML = "";
        document.getElementById('transcriptpopupL1').innerHTML = parent.frames.frame_b.document.getElementById('transContent').innerHTML;
                document.getElementById("transcriptpopupL1").scrollTop = 0;
            }
            else {
                if (isMobileUserAgent == false) {
                    document.getElementById("transcriptbuttonL").style.display = "none";
                    document.getElementById("transcriptpopupL1").innerHTML = "";
                }
            }
        }
        if (isMobileUserAgent == false) {
            //hrb end: code added to enable transcript button
            //hrb start: code added to display image or video div
            document.getElementById('bandwidthopt').style.display = "none";
            document.getElementById('bandwidthopt').style.color = "gray";
            document.getElementById('rdohighbandwidth').disabled = true;
            document.getElementById('rdolowbandwidth').disabled = true;
      document.getElementById("audiodiv").style.display = "none";
        }
    if (document.progress.OnlineUser && !g_isOLP)//is  Online
        {
            document.getElementById('bandwidthopt').style.color = "black";
            document.getElementById('rdohighbandwidth').disabled = false;
            document.getElementById('rdolowbandwidth').disabled = false;

            if (parent.frames.frame_b.document.getElementById("AVOisVideo")) {
                if (document.getElementById("bandwidthopt")) {
                    document.getElementById('bandwidthopt').style.display = "";

                    if (selectedBandwidth == 'low') {
                        document.getElementById('rdolowbandwidth').checked = true;
                    }
                    else {
                        document.getElementById('rdohighbandwidth').checked = true;
                    }
                }
                if (selectedBandwidth == 'low' && !document.getElementById("AVOisFLVPlayer")) {

                    if (parent.frames.frame_b.document.getElementById("divVideo"))
                        document.getElementById('divVideo').style.display = "none";

                    if (parent.frames.frame_b.document.getElementById("divAudio")) {
                        document.getElementById('divAudio').style.display = "";
                        parent.frames.frame_a.document.getElementById("divAudio").innerHTML = parent.frames.frame_b.document.getElementById("divAudio").innerHTML.replace(/tr_audio_object/ig, "object").replace(/tr_audio_embed/ig, "embed").replace(/tr_audio_param/ig, "param")
                    }
                    if (parent.frames.frame_b.document.getElementById("divImage"))
                        document.getElementById('divImage').style.display = "";
                }

            }
            //HRB: to by pass CPLLinks
      if (!isMobileUserAgent)
                EnableDisableLinks();
        }
        else {
            if (parent.frames.frame_b.document.getElementById("AVOisVideo")) {
                document.getElementById('bandwidthopt').style.display = "";
            }
            //HRB: to by pass CPLLinks
      if (!isMobileUserAgent)
                EnableDisablePermalinks();

        }
    
        //Added try-catch block to support LMS SCORM launch
        try {
            if(top.location.protocol == "file:")
            {
                EnableCPLLinksLocal();  
            }
        } catch (ex) { }

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
                    document.getElementById('spnExpire').innerHTML =  document.getElementById('spnExpire').innerHTML+ expiredDate + "*";
            }
        }
        else {
            if (parent.frames.frame_b.document.getElementById("divFeedback")) {
                //Start HRB: Enable feedbackURL on CongratsLastPage in PilotTestingMode
                document.getElementById('divFeedback').style.display = "";
                if (isFeedbackURLResponseSet && !isMobileUserAgent) {
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
        if (isMobileUserAgent) {
            bookMarkVisiblity();
        }

        if (document.getElementById("panelPCourseinfo") != null) {
            panelPCourseinfoScroll = new iScroll("panelPCourseinfo");
        }
        if (document.getElementById("panelPWelcome") != null) {
            panelPWelcomeScroll = new iScroll("panelPWelcome");
            navigateForAPW4 = new navigate("panelPWelcome");
        }
        if (document.getElementById("authorscrolldiv") != null) {
            panelPWelcomeScroll = new iScroll("authorscrolldiv");
            navigateForAPW4 = new navigate("authorscrolldiv");
        }
        if (document.getElementById("LOScroll") != null) {
            panelPWelcomeScroll = new iScroll("LOScroll");
            navigateForAPW4 = new navigate("LOScroll");
        }

        if (isMobileUserAgent) {
    setUnSetVideoSrc(true);
            var contentMCQ = document.getElementById("contentMCQ");
            if (contentMCQ) {
                mcq_Scroll = new iScroll('mcqScrollDiv');
      mcq_navigate=new navigate('contentMCQ');
            }
    navDiff = 0;
        }
    
    if(chk508Compliance()) {
      if(document.getElementById('headingforjaws')) {
        document.getElementById('headingforjaws').style.display="";
      }
      if(document.getElementById('prelimpagediv')) {
        document.getElementById('prelimpagediv').style.display="";
        if(document.getElementById('panelT') && !isIE)
          document.getElementById('panelT').style.top=415;
      }
      if(document.getElementById('congratsdiv')&& !isIE) {
        document.getElementById('congratsdiv').style.position='relative';
        document.getElementById('congratsdiv').style.marginTop=-30;
      }
      var graphicDiv = document.getElementById('content').getElementsByTagName('div');
      for(var graphicDivCnt=0; graphicDivCnt<graphicDiv.length;++graphicDivCnt) {
        if(graphicDiv[graphicDivCnt].id == 'cplGraphicDiv' || graphicDiv[graphicDivCnt].id == 'flashInteractivityDiv') {
          var parentDiv = graphicDiv[graphicDivCnt].parentNode;
          graphicDiv[graphicDivCnt].parentNode.removeChild(graphicDiv[graphicDivCnt]);
          if(parentDiv.parentNode.id == 'content' && parentDiv.innerHTML.trim() == '') {
            if(parentDiv.tabIndex) {
              parentDiv.removeAttribute("tabIndex");
            }
          }
        }
      }
    
      if(isNextPrevious) {
        moveFocusToBody();
        isNextPrevious=false;
      }
      
      var interactivityDiv=document.getElementById('content').getElementsByTagName('div');
      for(var divCount=0;divCount<interactivityDiv.length;divCount++) {
        if(interactivityDiv[divCount].id == 'wrapperInfoDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == 'ulInfoDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == 'flashInfoDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == '508InstructionDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == 'wrapperInteractivityDiv' || interactivityDiv[divCount].id == 'ulInteractivityDiv' || interactivityDiv[divCount].id == 'flashInteractivityDiv' || interactivityDiv[divCount].id == 'cplInstructionDiv') {
          interactivityDiv[divCount].innerHTML="";
        }
      }
      
      if (parent.frames.frame_b.document.getElementById("AVOisVideo") && document.getElementById("bandwidthopt")) {
        document.getElementById("bandwidthopt").style.display = 'none';
        if(document.getElementById("bottommenubar").style.display != 'none')
          document.getElementById('transcriptbuttonL').getElementsByTagName('img')[0].focus();
        if((parseInt(document.getElementById("content").offsetTop) + parseInt(document.getElementById("divVideo").offsetHeight) + parseInt(document.getElementById("divVideo").offsetTop)) > 590) {
          document.getElementById("audiodiv").style.top = 590;
        }
        else {
          document.getElementById("audiodiv").style.top = (parseInt(document.getElementById("content").offsetTop) + parseInt(document.getElementById("divVideo").offsetHeight) + parseInt(document.getElementById("divVideo").offsetTop));
        }
        document.getElementById("audiodiv").style.display = "";
        document.getElementById("audiodiv").getElementsByTagName("img")[0].src = "common/images/audio_on.png";
      }
      
      parent.frames.frame_b.document.getElementById("content").innerHTML = "";
    }
    else {  
      if(document.getElementById('prelimpagedivinfo')) {
        document.getElementById('prelimpagedivinfo').style.display="";
      }
      var interactivityDiv=document.getElementById('content').getElementsByTagName('div');
      for(var divCount=0;divCount<interactivityDiv.length;divCount++) {
        if(interactivityDiv[divCount].id == 'wrapperInteractivityDiv') {
          interactivityDiv[divCount].style.display="";
        }
        if(interactivityDiv[divCount].id == 'ulInteractivityDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == 'flashInteractivityDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == 'cplInstructionDiv') {
          interactivityDiv[divCount].style.display="";
        }
        else if(interactivityDiv[divCount].id == 'cplGraphicDiv') {
          interactivityDiv[divCount].style.display="";
        }
      }
    }
    
    //HRB: displaying the course elements after the is body is loaded only on course launch for 508 user
    if(isRestoreState && isIE && chk508Compliance()) {
      setTimeout(function(){show508CourseElements();},'500');
    }
    isRestoreState = false;
    }
    catch (err) { }
} //end loadcontent 

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
    if (mode == "test" || mode == "retake" || mode == "review" || arrNotBookmarkpage.indexOf(description) >= 0) {
        hideShowBookMark('hide');
        return;
    }
    else {
        hideShowBookMark('show');
    }

    bkDesc = document.getElementById("bkDescription").innerHTML;
    txtbkDesc = document.getElementById("txtbkDescription").value;
    txtbkDesc = txtbkDesc.replace(/^\s+/, '');

    if (isIphoneDevice == true) {
        if (fnIsDuplicateBookmark(txtbkDesc)) {
            bookmarkDiv.className = "bookMark bookMark_Done";
        }
        else {
            bookmarkDiv.className = "bookMark";
        }
    }
    else {
        if (fnCheckIsBookmarkAdded(bkDesc)) {
            bookmarkDiv.className = "bookMark bookMark_Done";
        }
        else {
            bookmarkDiv.className = "bookMark";
        }
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
        searchScroll = new iScroll("searchItem");
    }
}

//hrb-end:niket search the text.
function DoSearch() {
    searchStr = document.getElementById("searchText").value;
    if (document.getElementById("searchText").value == "") {
        if (document.getElementById("searchL").style.visibility != 'hidden') {
      if (isMobileUserAgent == false)
        document.getElementById("searchpopupLx").onmousedown();
      else
        document.getElementById("searchpopupLx").onclick();
            Menu('searchL', searchL.clientWidth, 200, 0, 0);
        }
        return;
    }
    document.getElementById("searchL1").innerHTML = 'Please wait...<br>';

    //hrb: close authorBioPopUp only if it is open through search result page
    if (isSearchClicked) {
    if (isMobileUserAgent == false)
        document.getElementById("authorBioPopUpLx").onmousedown();
    else
      document.getElementById("authorBioPopUpLx").onclick();
        isSearchClicked = false;
    }
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
    if (isMobileUserAgent == false) {
        if (document.getElementById('submitAnswerEnable'))
            document.getElementById('submitAnswerEnable').style.visibility = 'hidden';

        if (document.getElementById('submitAnswerDisable'))
            document.getElementById('submitAnswerDisable').style.visibility = 'visible';

        document.getElementById("searchpopupL").style.visibility = "visible";
        document.getElementById("searchpopupLx").style.visibility = "visible";
    }

    var str = "000";
    var istr = pagenumber.toString(10);

    sFlag = 1;
    document.getElementById("searchiframe").src = str.substring(0, 4 - istr.length) + istr + ".htm";

    //hrb start: changed mode to study 
    if (isMobileUserAgent == false)
    if(chk508Compliance()) {
      document.getElementById("searchlblPopupTitle").innerHTML = "<a href=#  class='clsSearchLinks' onmousedown=\"mode='study'; highlightMe=true; ShowStudyPage(" + pagenumber + ");if(!isIE && chk508Compliance()){fnCloseSearchBox();VisibleMenu='';}\">" + fnFindLink(pagenumber) + "</a>"
    }
    else {
      document.getElementById("searchlblPopupTitle").innerHTML = "<a href=#  class='clsSearchLinks' onmousedown=\"mode='study'; highlightMe=true; ShowStudyPage(" + pagenumber + ");\">" + fnFindLink(pagenumber) + "</a>"
    }
    else
        document.getElementById("popuptitle").innerHTML = "<a href=#  class='clsSearchLinks' onclick=\"mode='study'; closePopUp(); ShowStudyPage(" + pagenumber + ");\">" + fnFindLink(pagenumber) + "</a>"
    //hrb end: changed mode to study

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

    if (isMobileUserAgent) {
        var inner = document.getElementById("searchiframe").contentWindow.document.body.innerHTML;

        var objPopUpL = document.getElementById("popupL");
        var objPopUpL1 = document.getElementById("popupL1");
        var objsearchpopupTitle = document.getElementById('popuptitle')
        var popupTitle = document.getElementById('popuptitle').innerHTML

        showPopup(inner);

        objPopUpL.style.visibility = "";
        objPopUpL1.style.visibility = "";
        if (isIphoneDevice == false) {
            setiPadPopupLayout(objPopUpL, objPopUpL1)

            objPopUpL.style.width = "500";
            //objPopUpL1.style.width = "93%"
            objPopUpL1.style.paddingLeft = "9"
        }
        var objSearchpopupL1 = document.getElementById("popupL1");
        objSearchpopupL1.innerHTML = popupTitle + document.getElementById("searchiframe").contentWindow.document.body.innerHTML;
        // To remove the text in the popup title for iphone search popup.
        if (isIphoneDevice) {
            objsearchpopupTitle.innerHTML = "";
        }
        //Set the height & width for innerdivs in popupL1.
        var objContent = GetInnerDiv(objSearchpopupL1, currentDivId);
        if (objContent) {
            var objChild = objContent.childNodes;
            if (objChild != null) {
                for (var i = 0; i < objChild.length; i++) {
                    if (objChild[i].nodeName == "DIV") {
                        if (isIphoneDevice == false) {
                            objChild[i].style.height = "180";
                            objChild[i].style.width = "380";
                            objChild[i].style.position = "relative";
                            objChild[i].style.paddingRight = "1";
                            objChild[i].style.left = "1";
                        }
                        if (isIphoneDevice) {
                            objChild[i].style.height = "146";
                            objChild[i].style.width = "186";
                            objChild[i].style.position = "relative";
                            objChild[i].style.overflow = "hidden";
                            objChild[i].style.paddingRight = "1";
                            objChild[i].style.left = "1";
                        }
                    }
                }
            }
        }
        return;
    }
  else {
    //Added to hide or display interactivity div depending on type of user
    var interactivityDiv;
    var searchIframeDoc; 
    if(isIE) {
      searchIframeDoc = document.getElementById("searchiframe").contentWindow.document;
      if(searchIframeDoc.getElementById('content') != null)
        interactivityDiv=document.getElementById("searchiframe").contentWindow.document.getElementById('content').getElementsByTagName('div');
    }
    else {
      searchIframeDoc = document.getElementById("searchiframe").contentDocument;
      if(searchIframeDoc.getElementById('content') != null)
        interactivityDiv=document.getElementById("searchiframe").contentDocument.getElementById('content').getElementsByTagName('div');
    }
    if(chk508Compliance()) {
      if(searchIframeDoc.getElementById('content') != null) {
        if(searchIframeDoc.getElementById('headingforjaws')) {
          searchIframeDoc.getElementById('headingforjaws').style.display="";
        }
        for(var divCount=0;divCount<interactivityDiv.length;divCount++) {
          if(interactivityDiv[divCount].id == 'wrapperInfoDiv') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'ulInfoDiv') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'flashInfoDiv') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'prelimpagediv') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'wrapperInteractivityDiv' || interactivityDiv[divCount].id == 'ulInteractivityDiv' || interactivityDiv[divCount].id == 'flashInteractivityDiv' || interactivityDiv[divCount].id == 'cplInstructionDiv') {
            interactivityDiv[divCount].innerHTML="";
          }
        }
      }
    }
    else {
      if(searchIframeDoc.getElementById('content') != null) {
        for(var divCount=0;divCount<interactivityDiv.length;divCount++) {
          if(interactivityDiv[divCount].id == 'wrapperInteractivityDiv') {
            interactivityDiv[divCount].style.display="";
          }
          if(interactivityDiv[divCount].id == 'ulInteractivityDiv') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'flashInteractivityDiv') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'prelimpagedivinfo') {
            interactivityDiv[divCount].style.display="";
          }
          else if(interactivityDiv[divCount].id == 'cplInstructionDiv') {
            interactivityDiv[divCount].style.display="";
          }
        }
        removeTabIndex(searchIframeDoc);
      }
    }
  }
  
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
    document.getElementById("searchpopupL1").innerHTML="<h6>&nbsp;</h6>"+document.getElementById("searchpopupL1").innerHTML;
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
    hidePopups();
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
        if(chk508Compliance())
      objSearchText.style.height = 26;
    else
      objSearchText.style.height = 22;
        objOuterBlock.style.border = "solid thin #9B9B9B";
    objOuterBlock.style.top = 637;
    }
  if(!isMobileUserAgent && (isSafari || isChrome)){
    document.getElementById('searchTextButtonLx').style.left=6;
  }
}
//hrb:end of added for search text box

//hrb:  common function to  hide popups
function hidePopups() {
    if (isMobileUserAgent == false) {
        document.getElementById("searchL").style.display = "none";
        document.getElementById("resourcesL").style.display = "none";
        document.getElementById("glossL").style.display = "none";
        document.getElementById("helpL").style.display = "none";
        document.getElementById("printL").style.display = "none";
        document.getElementById("bookmarkL").style.display = "none";
    }
}

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
        document.body.ondrag = function() { return false; };
        document.body.onselectstart = function() { return false; };
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
    if (VisibleMenu != "")
        HideMenuPopup();
    else {
    if (isMobileUserAgent == false)
        document.getElementById("testPopUpLx").onmousedown();
    else
      document.getElementById("testPopUpLx").onclick();

        //hrb start : added to hide course preview popup on content load
        document.getElementById("coursePreviewerPopUpLx").onclick();
        //hrb start : added to hide course preview popup on content load

        if (document.getElementById("authorBioPopUpL").style.visibility = 'visible'){
            if (isMobileUserAgent == false)
        document.getElementById("authorBioPopUpLx").onmousedown();
      else
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
}

function exitCourseForIphone() {
    //if(confirm(EXIT_MSG)){
   removeVideoControl();
    updateCourse();
    if (saveStatusFunctionTimerPointer != null && saveStatusFunctionTimerPointer != 'undefined') {
        clearTimeout(saveStatusFunctionTimerPointer);
    }
    top.frmHidden.exitCourse();
    //}
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
                //window.parent.parent.parent.opener.parent.close();
        setTimeout(function(){window.parent.parent.parent.opener.parent.close();}, '3000');
            }
        }
        catch (Exception) {
            try {
                if (typeof window.parent.parent.parent.parent.isCourseWithoutDebugSupport != 'undefined') {
                    //setTimeout("top.close()", 1000);
          setTimeout(function(){top.close();}, '3000');
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
    var curTop = 0, curLeft = 0, curWidth = 0;
    var ele = null;
    //11-1-11 start
    if (e != null) {
        e.stopPropagation();
        ele = e.srcElement;
        if (ele != null && ele != 'undefined') {
            curWidth = ele.offsetWidth;
            if (ele.offsetParent) {
                do {
                    curTop += ele.offsetTop;
                    curLeft += ele.offsetLeft;
                } while (ele = ele.offsetParent);
            }
        }
    }
    //end

    var strAuthorImageCode;
    var strAuthorBioCode;

    strAuthorImageCode = "auImg_" + authorcode;
    strAuthorBioCode = "auBio_" + authorcode;

    //11-1-11 start


    //end

    if (isMobileUserAgent == true) {

        var title = "Author Biography";
        var description = "";
        var image = null;
        var bio = ' <br>' + authorcode + '&nbsp;' + document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorBioCode).innerHTML;

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

        if (isIphoneDevice == true) {

            showIPhonePopup(title, description);
        } else {

            var objPopUpL = document.getElementById("popupL");
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
            //setiPadPopupLayout(objPopUpL,objPopUpL1);  commented 11-1-11

            //showIPadPopup(title, description);
            //11-1-11 start
            curTop -= 84;
            curLeft = curLeft + curWidth + 15;
      authorBioCall = true;
            showIPadPopup(title, description, curTop + "px", curLeft + "px", "200px", "468px", "436px");
            //end
        }

    } else {
        //hrb: set the scroll position to top 
        document.getElementById("authorBioPopUpL1").scrollTop = 0;
        document.getElementById("authorBioPopUpL").style.visibility = "";
        document.getElementById("authorBioPopUpLx").style.visibility = "";
        document.getElementById("authorBioPopUpL").style.width = "650px";
        document.getElementById("authorBioPopUpL").style.height = "400px";
        document.getElementById("authorBioPopUpL1").style.width = "650px";
        document.getElementById("authorBioPopUpL1").style.height = "400px";

        if (!isIE) {
            document.getElementById("authorBioPopUpL").style.width = "662px";
            document.getElementById("authorBioPopUpTitle").style.width = "98.8%";
            if(is508Course) {
        document.getElementById("authorBioPopUpL").style.height = "437px";
      }
      else {
        document.getElementById("authorBioPopUpL").style.height = "430px";
      }
            document.getElementById("authorBioPopUpL1").style.height = "395px";
        }

        document.getElementById("AuName").innerHTML = authorcode;

        if (document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorImageCode) != null) {
            document.getElementById("TDImage").style.display = "";
            document.getElementById("AuImage").innerHTML = document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorImageCode).innerHTML;
        }
        else {
            document.getElementById("TDImage").style.display = "none";
      if(chk508Compliance()) {
        document.getElementById('headingforjaws').style.display="";
      }
        }

        if (document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorBioCode) != null) {
            document.getElementById("AuBio").innerHTML = ' <br>' + authorcode + '&nbsp;' + document.getElementById("authorIframe").contentWindow.document.getElementById(strAuthorBioCode).innerHTML;
        }
    }
}

//HRB:End of Added to show the help window
function ShowHelp(helpitem) {
    if (HelpWin != null)
        HelpWin.close();

    var page = helpitem + ".htm";
    var sFeatures;
  if(chk508Compliance()) {
    sFeatures = "left=50, top=20, width=800, height=550, directories=no, location=no, menubar=no, resizable=no, scrollbars=yes, status=no, toolbar=no, titlebar=no";
  }
  else {
    sFeatures = "left=50, top=20, width=800, height=550, directories=no, location=no, menubar=yes, resizable=no, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";
  }

    HelpWin = window.open(page, "_blank", sFeatures);
}
//HRB:End of Added to show the help window

//HRB: Added to hide the popup menu
function HideMenuPopup() {
    if (isMobileUserAgent == false) {
        //hrb start : Added to hide all the popups 
        document.getElementById("testPopUpLx").onmousedown();

        //hrb start : added to hide course preview popup on content load
        document.getElementById("coursePreviewerPopUpLx").onclick();
        //hrb start : added to hide course preview popup on content load

        document.getElementById("popupLx").onmousedown();
        document.getElementById("authorBioPopUpLx").onmousedown();
        document.getElementById("ClickRevealPopUpLx").onclick();
        document.getElementById("ClickRevealPopUpL").onclick();

        if (document.getElementById("searchpopupL").style.visibility == "visible") {
            document.getElementById("searchpopupLx").onmousedown();
        }
        //hrb end : Added to hide all the popups 

        //hrb:added to enable the certificate button
        CloseCertificateDiv();

        //hrb start 18/5/2009: added to close the transcript div
        if (parent.frames.frame_b.document.getElementById("transContent")) {
            CloseTranscriptDiv();
        }
        //hrb end 18/5/2009: added to close the transcript div

        //hrb:end of added to enable the certificate button
        if (VisibleMenu != "") {
            eval("document.getElementById('" + VisibleMenu + "x').onmousedown()")
            VisibleMenu = "";
        }
    }
}
//HRB: end of Added to hide the popup menu
//End by HRB

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

    document.getElementById("passpercent").innerHTML = "" + gbl_CurrentTestScore;

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
    /*if(CurrentChapter==TotalChapters && !isCourseCompleted()) 
    {
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";
    }*/
    if (isCourseCompleted() && lessonMode == LESSON_CREDIT_MODE) {  //HRB: Added condition to disable next button for PILOTTESTING mode.
        document.getElementById("NextButton").style.display = "";
        document.getElementById("NextButtonDisabled").style.display = "none";
        document.getElementById("PrevButton").style.display = "";
        document.getElementById("PrevButtonDisabled").style.display = "none";
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
        document.getElementById("scorepercent").innerHTML =  document.getElementById("scorepercent").innerHTML+"" + passfailDescriptionStr.replace('<sp>',"")+"%";
    }
    else
        document.getElementById("scorepercent").innerHTML = document.getElementById("scorepercent").innerHTML +gbl_CurrentTestScore+"%";

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
      if(chk508Compliance()) {
        parent.frames.frame_a.document.getElementById("retake").tabIndex = "-1";
      }
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
    }
} //end dispalyFailPage

//HRB : added to retake the test after failing
function fnRetakeTest() {
    if (noOfattempts < testAttempts) {
    hidePopups();
    
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
      document.getElementById("questionControlPanel").style.visibility = 'visible';
      document.getElementById("showQuestionNumber").style.visibility = 'visible';
      document.getElementById("PrevButtonDisabled").style.display = "";
      document.getElementById("PrevButton").style.display = "none";
      EnableDisableQuestionSelectionDropdown(false);
      
      return;
    }
        initTest();
        SetMode("retake");
        EnableDisableSubmitButton();
        EnableDisableQuestionSelectionDropdown(false);
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
    hidePopups();
    resetTest();
    CurrentChapter = 1;
    document.getElementById("divPageTitle").innerHTML = CHAPTER + " " + CurrentChapter + ", " + TEST_FAILED;
    Sc(CurrentChapter);
    ResetChapterQuestionResponse();

} //end of fnReviewChapter

//hrb start: added function for bookmark
function fnAddBookMark() {

    bkDesc = document.getElementById("bkDescription").innerHTML;
    txtbkDesc = document.getElementById("txtbkDescription").value;
    txtbkDesc = txtbkDesc.replace(/^\s+/, '');

    if (fnIsDuplicateBookmark(txtbkDesc)) {
        if (isMobileUserAgent == true)
            showIPhonePopup('', BOOKMARK_EXIST, true);
        else
            alert(BOOKMARK_EXIST);
        return -1;
    }
    else if (txtbkDesc == "") {
        if (isMobileUserAgent == true)
            showIPhonePopup('', BOOKMARK_DESCRIPTION, true);
        else
            alert(BOOKMARK_DESCRIPTION);

        return -1;
    }
    else {
        if (isMobileUserAgent == false) {
      if(chk508Compliance()) {
        newdivStr = '<table><tr><td style="width:70" ><a href=# onmousedown= "if(!chk508Compliance()){fnShowBookmarkPage(' + CurrentStudyPage + ')}"';
      }
      else {
        newdivStr = '<table><tr><td style="width:70" ><a href=# onmousedown= "fnShowBookmarkPage(' + CurrentStudyPage + ')"';
      }
            newdivStr = newdivStr + ' class="clsGlossaryLinks" title="' + GO_TO_PAGE_TOOLTIP +'"';
      if(chk508Compliance()) {
        newdivStr = newdivStr + ' tabindex ="32" onFocus="onfocuselement(this);" onBlur="onblurelement(this);" onKeyUp="if(chkEnterKey(event)){fnShowBookmarkPage('+ CurrentStudyPage + ')}" onClick="if(chkEnterKey(event)){fnShowBookmarkPage('+ CurrentStudyPage + ')}" style="border:4px solid transparent"' ;
      }
      newdivStr = newdivStr +'>';
            newdivStr = newdivStr + bkDesc;
            newdivStr = newdivStr + '</a></td><td><input type="text" class="clsBookmarkTextBox" value=';
      if(chk508Compliance()) {
        newdivStr = newdivStr + '"' + txtbkDesc + '"  readonly="true"><img src="common/images/bookmark_delete.gif" alt="' + DELETE_BOOKMARK_TOOLTIP + '" onmousedown="if(!chk508Compliance()){fndeleteBookMark(' + gbl_bkCounter + ')}" ';
        newdivStr = newdivStr + ' tabindex ="32" onFocus="onfocuselement(this);" onBlur="onblurelement(this);" onKeyDown="if(chkEnterKey(event)){fndeleteBookMark('+ gbl_bkCounter +');}" onclick="if(chkEnterKey(event)){fndeleteBookMark(' + gbl_bkCounter+ ')}" style="border:4px solid transparent;position:relative;cursor:pointer;top:3px; left:5px" ';
      }
      else {
        newdivStr = newdivStr + '"' + txtbkDesc + '"  readonly="true"><img src="common/images/bookmark_delete.gif" alt="' + DELETE_BOOKMARK_TOOLTIP + '" onmousedown="fndeleteBookMark(' + gbl_bkCounter + ')" ';
        newdivStr = newdivStr + ' style="position:relative; cursor:pointer;top:3px; left:5px"'
      }
      newdivStr = newdivStr + '/></td></tr></table>';
            document.getElementById("bookmarkL1").innerHTML = document.getElementById("bookmarkL1").innerHTML + newdivStr;
        }
        else {
            appendNewBookMark(CurrentStudyPage, txtbkDesc, bkDesc);
            if (isIphoneDevice == false) {
                document.getElementById("bookmarkAdd").style.display = "none";
                bookmarkDiv.className = "bookMark bookMark_Done";
            }
        }
        bookmarkArray[gbl_bkCounter] = new setBookMark(bkDesc, txtbkDesc, CurrentStudyPage);
        gbl_bkCounter++;
        //alert("Bookmark added successfully")
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

function fnIsDuplicateBookmark(desc) {
    for (itr = 0; itr < bookmarkArray.length; itr++) {
        try {
            //hrb: 10-Dec-2010 as for mlearning course we didnt provide text for bookmark
            //when delete the global bookmark count doesnt get decrement , bcoz of this some null value are introdue in bookmarkArray. 
            //to avoid this null bookmark entries we introduce if statement
            if (isMobileUserAgent == true) {
                if (bookmarkArray[itr] != null && bookmarkArray[itr].bkDescription != null) {
                    if (bookmarkArray[itr].bkDescription == desc) {
                        return true;
                    }
                }
            }
            else {
                if (bookmarkArray[itr].bkDescription) {
                    if (bookmarkArray[itr].bkDescription == desc) {
                        return true;
                    }
                }
                else
                    return false;
            }
        }
        catch (err) {
            if (isMobileUserAgent == true)
                showIPhonePopup('', "INVALID_BOOKMARK", true);
            else
                alert("INVALID_BOOKMARK");

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
        if(isMobileUserAgent == false) {
          if(chk508Compliance()) {
            newdivStr = '<table><tr><td style="width:70" ><a href=# onmousedown= "if(!chk508Compliance()){fnShowBookmarkPage(';
            newdivStr = newdivStr + bookmarkArray[itr].bkLink + ')}" class="clsGlossaryLinks" title="' + GO_TO_PAGE_TOOLTIP + '" ';
          }
          else {
            newdivStr = '<table><tr><td style="width:70" ><a href=# onmousedown= "fnShowBookmarkPage(';
            newdivStr = newdivStr + bookmarkArray[itr].bkLink + ')" class="clsGlossaryLinks" title="' + GO_TO_PAGE_TOOLTIP + '" ';
          }
        }
        else {
          newdivStr = '<table><tr><td style="width:70" ><a href=# onclick= "fnShowBookmarkPage(';
          newdivStr = newdivStr + bookmarkArray[itr].bkLink + ')" class="clsGlossaryLinks" title="' + GO_TO_PAGE_TOOLTIP + '" ';
        }
        if(chk508Compliance()) {
          newdivStr = newdivStr + 'tabindex ="32" onFocus="onfocuselement(this);" onBlur="onblurelement(this);" onKeyUp="if(chkEnterKey(event)){fnShowBookmarkPage('+ bookmarkArray[itr].bkLink + ')}" onClick="if(chkEnterKey(event)){fnShowBookmarkPage('+ bookmarkArray[itr].bkLink + ')}" style="border:4px solid transparent"' ;
        }
        newdivStr = newdivStr +' >';
                newdivStr = newdivStr + bookmarkArray[itr].bkTitle;
                newdivStr = newdivStr + '</a></td>';
                newdivStr = newdivStr + ' <td><input type="text" class="clsBookmarkTextBox" value = "' + bookmarkArray[itr].bkDescription + '"';
        if(isMobileUserAgent == false) {
          if(chk508Compliance()) {
            newdivStr = newdivStr + '  readonly="true"><img src="common/images/bookmark_delete.gif" alt="' + DELETE_BOOKMARK_TOOLTIP + '" onmousedown="if(!chk508Compliance()){fndeleteBookMark(' + itr + ')}" ';
            newdivStr = newdivStr + ' tabindex ="32" onFocus="onfocuselement(this);" onBlur="onblurelement(this);" onKeyDown="if(chkEnterKey(event)){fndeleteBookMark('+ itr +');}" onclick="if(chkEnterKey(event)){fndeleteBookMark(' + itr + ')}" style="border:4px solid transparent;position:relative;cursor:pointer;top:3px; left:5px" ';
          }
          else {
            newdivStr = newdivStr + '  readonly="true"><img src="common/images/bookmark_delete.gif" alt="' + DELETE_BOOKMARK_TOOLTIP + '" onmousedown="fndeleteBookMark(' + itr + ')" ';
            newdivStr = newdivStr + ' style="position:relative; cursor:pointer;top:3px; left:5px" '
          }
        }
        else {
          newdivStr = newdivStr + '  readonly="true"><img src="common/images/bookmark_delete.gif" alt="' + DELETE_BOOKMARK_TOOLTIP + '" onclick="fndeleteBookMark(' + itr + ')" ';
          newdivStr = newdivStr + ' style="position:relative; cursor:pointer;top:3px; left:5px" '
        }
        newdivStr = newdivStr + ' /></td></tr></table>';
                divStr = divStr + newdivStr;
            }
        }
        catch (err) {
            if (isMobileUserAgent == true)
                showIPhonePopup('', DELETE_BOOKMARK_WARNING, true);
            else
                alert(DELETE_BOOKMARK_WARNING);

            continue;
        }
    }
    gbl_bkCounter = bookmarkArray.length;
    return divStr;
}
//hrb :end



//hrb start: added function to delete bookmark
function fndeleteBookMark(desc) {
    if (isMobileUserAgent == true) {
        if (isIphoneDevice == true) {
            fnDeleteBookMark_mlearning(desc);
        }
        else {
            fnDeleteBookMark_ipad(desc);
        }
        return;
    }

    if (confirm(DELETE_BOOKMARK_CONFIRMATION)) {
        for (itr = 0; itr < bookmarkArray.length; itr++) {
            try {
                if (bookmarkArray[itr].bkDescription) {

                    if (itr == desc) {
                        bookmarkArray.splice(itr, 1);
                        var newdiv = fncreateBkDiv();
                        eval("document.getElementById('bookmarkL1').innerHTML= newdiv");
                        break;
                    }
                }
                else
                    break;
            }
            catch (err) {
                if (isMobileUserAgent == true)
                    showIPhonePopup('', DELETE_BOOKMARK_WARNING, true);
                else
                    alert(DELETE_BOOKMARK_WARNING);

            }
        }
    if(chk508Compliance()) {
      document.getElementById('txtbkDescription').focus();
    }
    }
    else
        return;
}
//hrb end: added function to delete bookmark


function fnDeleteBookMark_mlearning(desc) {
    for (itr = 0; itr < bookmarkArray.length; itr++) {
        try {
            if (bookmarkArray[itr] != null && bookmarkArray[itr].bkDescription && bookmarkArray[itr].bkDescription != '') {
                //Note: for mlearning we pass book mark description for delete as we didnot have bookmark index
                if (itr == desc || (isMobileUserAgent == true && bookmarkArray[itr].bkDescription == desc)) {
                    bookmarkArray.splice(itr, 1);
                    var newdiv = '';
                    newdiv = createBookmarkli(bookmarkArray);
                    break;
                }
            }
        }
        catch (err) {
            if (isMobileUserAgent == true)
                showIPhonePopup('', DELETE_BOOKMARK_WARNING + err, true);
            else
                alert(DELETE_BOOKMARK_WARNING + err);

        }
    }

}

//hrb start : added to show the bookmark page
function fnShowBookmarkPage(bkpage) {
    if (isMobileUserAgent) {
        closePopUp();
        if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv showAnimateDiv") {
            document.getElementById('courseviewmain').className = "courseMenuMain showDiv"
        }
        if (document.getElementById('courseviewmain').className == "courseMenuMain showDiv") {
            document.getElementById('courseviewmain').className = "courseMenuMain showDiv showAnimateDiv"
        }
    }

    if (mode == "review" || mode == "retake") {
        if (isIphoneDevice == true)
            selectMenu("courseview");
        if (mode == "review")
            str = eval("SWITCH_FROM_REVIEW_" + FinalExam.toUpperCase());
        else
            str = eval("SWITCH_FROM_RETAKE_" + FinalExam.toUpperCase());
      
    str= str.replace(/&nbsp;/g,' ');
        if (isMobileUserAgent) {
            outlineflag = 0;
            if (isIphoneDevice) {
                showIPhoneConfirm('', str, bkpage, "bookmark");
                return;
            }
            else {
                showConfirmPopup('', str, bkpage, "bookmark");
                return;
            }
        } else {
            var res = confirm(str);
            if (!res) {
                return;
            }
        }

    }
    mode = 'study';
    ShowStudyPage(bkpage);
    //hrb start : Added to refresh bookmark menu
    if (isMobileUserAgent == false) {
        Menu('bookmarkL', 0, 250, 1, 0);
    if(chk508Compliance()) {
      document.getElementById('txtbkDescription').focus();
    }
  }
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

    document.getElementById("controlpanel").style.visibility = 'hidden';
    document.getElementById("questionControlPanel").style.visibility = 'hidden';
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
    if(hours >= 12) {
      ampm = 'PM';
      hours = (hours%12) == 0 ? 12 : (hours%12);
    }
    var minutes = today.getMinutes();
    if(minutes < 10) {
      minutes = "0" + minutes;
    }
    var seconds = today.getSeconds();
    if(seconds < 10) {
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
            if (isMobileUserAgent == true)    //HRB: Condition added for the mLearning course.
            {
                showmLearningCertificate();
            }
            else {
                document.getElementById("certificatebuttonLDisabled").style.display = "none";
                document.getElementById("certificatebuttonLD").style.display = "none";
                document.getElementById("certificatebuttonL").style.display = "";
            }
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
    parent.frames.frame_a.document.getElementById("retake").src = "common/images/retake_test_dis.gif";
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
    document.getElementById("scorepercent").innerHTML = document.getElementById("scorepercent").innerHTML+"" + gbl_CurrentTestScore+"%";
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
  
  if(isMobileUserAgent == false){
    document.getElementById("glossLx").onmousedown();
    document.getElementById("helpLx").onmousedown();
    document.getElementById("printLx").onmousedown();
  }
  else{
    document.getElementById("glossLx").onclick();
    document.getElementById("helpLx").onclick();
    document.getElementById("printLx").onclick();
  }

    TestInit();
    CurrentTestQuestion = 0;
    document.getElementById(currentDivId).innerHTML = "";

    //hrb start : Changes to enable menu's on test pages
    if (!scorm) {
        document.getElementById("searchText").style.visibility = '';
        document.getElementById("searchbuttonL").style.visibility = '';
    }
    if (isMobileUserAgent == false) {
        document.getElementById("glossbuttonL").style.visibility = '';
        document.getElementById("bookmarkbuttonL").style.visibility = '';
        document.getElementById("printbuttonL").style.visibility = '';
    }
    //hrb start : Changes to enable menu's on test pages
    document.getElementById("controlpanel").style.visibility = 'visible';

    document.getElementById("questionControlPanel").style.visibility = 'visible';
    document.getElementById("showQuestionNumber").style.visibility = 'visible';
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
  if(gbl_TestQuestionArray == "")
    GetRandomQuestionsFromChapters(); 
  else 
  {
    finalQuestions = gbl_TestQuestionArray;
    TestQuestion.length=0;
    
    //initializing TesQuestion array
    for(i=0;i<finalQuestions.length;i++)
      TestQuestion[i]=new TestQ("",false);
      
    //creating TestQuestino array in case where we are restoring questions from suspend data.
    for(i=0;i<TotalChapters;i++)
    {
      var result;
      for(j=0;j<finalQuestions.length;j++ )
      {
        var response = arrChapterQuestionResponse[i][j];
        if(response != "")
        {
          result = response.charAt(0);
          if (result == "C")
            TestQuestion[j].Correct = true;
           else if (result == "I") 
            TestQuestion[j].Correct = false;
          
          TestQuestion[j].Answer= response.substr(1);
        }
      }
    } 
  }

  //Start Hrb(06/16/2009): Added for preserving test questions
    RandomizeArray(tempFinalExamQuestions);
    gbl_TestQuestionArray= finalQuestions;
  
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
        document.getElementById("submittest").style.visibility = 'visible';
        document.getElementById("submittest_disable").style.visibility = 'hidden';
    }
    else {
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

        //hrb:end of changes for next and prev button
        if (CurrentTestQuestion == 1) {
            //hrb  start : changes to move previous from Final Exam to chapter page
            document.getElementById("PrevButtonDisabled").style.display = "none";
            document.getElementById("PrevButton").style.display = "";
            //hrb end : changes to move previous from Final Exam to chapter page
            //hrb:end of changes for prev button
        }
    
    if ((CurrentTestQuestion == 1) && (mode == "review" || mode == "retake")) {
      document.getElementById("PrevButton").style.display = "none";
      document.getElementById("PrevButtonDisabled").style.display = "";
    }
    
        if ((CurrentTestQuestion == finalExamTotalQuestions)) {
            //hrb:changes for next and prev button
            document.getElementById("NextButtonDisabled").style.display = "";
            document.getElementById("NextButton").style.display = "none";
            //hrb:end of changes for next and prev button
        }
    if(mode == "study") 
      mode = "test";

        document.getElementById('coursetitle').innerHTML = courseTitle;
        AdjustCourseTitle(courseTitle);

        var selectedOption = "optq" + CurrentTestQuestion;

        if (document.getElementById(selectedOption)) {
            document.getElementById(selectedOption).selected = true;
        }
        document.getElementById("showQuestionNumber").innerHTML = "<h1>" + TEST_QUESTION_BYCOURSE + " " + (parseInt(CurrentTestQuestion)) + " " + OF + " " + finalExamTotalQuestions + "</h1>";
        if (CurrentTestQuestion >= 1) {
          document.getElementById("divPageTitle").innerHTML = " " + FINAL_EXAM + " " + TEST + " " + CurrentTestQuestion;
        }
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
  isNextPrevious=true;
    if (isMobileUserAgent == false) {
        //hrb start 20/5/2009: added to hide the outline menu on going to othere question from combo box
        if (document.getElementById("outlineL").style.pixelLeft > 200)
            OutlineShowHide();

        if (!isIE && outlineflag) {
            OutlineShowHide();
        }
    }
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
        if (isMobileUserAgent == false) {
            document.getElementById("istatFE").src = NOTSTARTED_STATUS_IMG;
        }
        else {
            document.getElementById("istatFE").src = NOTSTARTED_STATUS_CLASS;
        }
    }
    else if (strFinalExamStatus == "0") {
        if (isMobileUserAgent == false) {
            document.getElementById("istatFE").src = INCOMPLETED_STATUS_IMG;
        }
        else {
            document.getElementById("istatFE").src = INCOMPLETED_STATUS_CLASS;
        }
    }
    else if (strFinalExamStatus == "1") {
        if (isMobileUserAgent == false) {
            document.getElementById("istatFE").src = COMPLETED_STATUS_IMG;
        }
        else {
            document.getElementById("istatFE").src = COMPLETED_STATUS_CLASS;
        }
    }
    finalExamStatus = strFinalExamStatus;
}
//end Hrb: Added final exam related functions

//start hrb: added function to open a calculator from tools menu
function OpenCalculator() {
    try {
        //hrb start:code added to open the swf Calculator
        var sFeatures;
        var win;

        if (!isIE)
            sFeatures = "left=170, top=130, height=328, width=250, directories=no, location=no, menubar=no, resizable=no, scrollbars=no, status=no, toolbar=no, titlebar=no";
        else
            sFeatures = "left=170, top=130, height=328, width=233, directories=no, location=no, menubar=no, resizable=no, scrollbars=no, status=no, toolbar=no, titlebar=no";

        win = window.open("calculator.htm", "Calculator", sFeatures);
        //hrb end:code added to open the swf Calculator
    }
    catch (E) {
        if (isMobileUserAgent == true)
            showIPhonePopup('', CALULATOR_OPEN_FAIL_MSG, true);
        else
            alert(CALULATOR_OPEN_FAIL_MSG);

    }
}
//end hrb: added function to open a calculator from tools menu

//start Hrb: Added the functions for click reveal/roll over pop up
function ShowClickAndReveal(e, id, linktext, titletext, image, para, xpos, ypos, height, width) {

  if(isMobileUserAgent)
  {
    if(event)event.stopPropagation();
    var title = titletext.toLowerCase().match("[.gif|.jpg|.png|.bmp]")?titletext.substring(0,titletext.lastIndexOf(".")):titletext;
    var imageTag='';
    if (image != '')
    {
      imageTag='<img src="images/'+image+'"></img><br/><br/>';
    }
    
    if(document.getElementById(para))
    {
      para = document.getElementById(para).innerHTML;
      para = para.replace(/&lt;/g,"<");
      para = para.replace(/&gt;/g,">");
      para = "<div class='qtext'>" + para + "</div>";
    }
    
    if(isIphoneDevice)
    {
      showIPhonePopup(title,imageTag+para);
    }
    else
    {
      if(navDiff<IPAD_NAV_DIFF){
        var curTop=0,curLeft=0,curWidth=0;
        var pageWidth=1024,popupWidth=468,pageHeight=647,popupHeight=200;
        var popupTop=0,popupLeft=0;
        var popupArrowLeft=0,popupArrowTop=0;
        var forLeft=0,forTop=0;
        var arrowUrl="";
        var popUpHeaderArrow_width = 26;
        var popUpHeaderArrow_height = 14;
          
        //geting top and left
        var ele=event.srcElement;
        curWidth=ele.offsetWidth;
        if(ele.offsetParent){
          do
          {
            curTop+=ele.offsetTop;
            curLeft+=ele.offsetLeft;
          }while(ele=ele.offsetParent);
        }

        //if scroll any page than take take scroll y value for set popup top
        if(document.getElementById("adiv"))
          curTop+=moveScrollForAPW4.y;
        //setting a popup and its arrow
        popupArrowTop=curTop;
        popupArrowLeft=curLeft;
        popupTop=curTop;
        popupLeft=curLeft;

        forLeft=curLeft+popupWidth;
        forTop=curTop+popupHeight;

        popupTop+=27;
        popupArrowTop+=17;
        popupArrowLeft+=15;

        //for left
        if(forLeft>pageWidth)
        {
          popupLeft=pageWidth-popupWidth;
          popupLeft-=10;
          popupArrowLeft-=15;
        }

        //for top
        if(forTop>pageHeight)
        {
          popupTop=curTop-popupHeight;
          popupTop-=43;
          popupArrowTop=curTop-11;
          arrowUrl="url(common/images/bottom.png)";
        }else
        {
          //arrowUrl="url(common/images/top.png)";
        }


        if(isMobileUserAgent && !isIphoneDevice){
          var popupHeaderArrow=document.getElementById("popupHeaderArrow");
          var font_size = 14;
          
          popupHeaderArrow.style.width=popUpHeaderArrow_width;
          popupHeaderArrow.style.height=popUpHeaderArrow_height;
          popupHeaderArrow.style.position="absolute";
          popupHeaderArrow.style.top = popupArrowTop;
          popupHeaderArrow.style.left= popupArrowLeft;
          popupHeaderArrow.style.backgroundImage=arrowUrl;
          popupHeaderArrow.style.visibility = "visible";

          //for arrow end
          var popupLObj=$get('popupL');
          popupLObj.style.top=popupTop;
          popupLObj.style.left=popupLeft;
          //popupLObj.style.height=height;
          popupLObj.style.width=popupWidth;
          popupLObj.style.height=200;
          document.getElementById("scrollpopup").style.width=436;
          //showIPadPopup("", "",popupTop+"px",popupLeft+"px","200px",popupWidth+"px","436px");
          
        }
        showIPadPopup(title+"<br/>",imageTag+para);
      }
    }
    return;
  }
    var objClickRevealPopUpL1 = document.getElementById("ClickRevealPopUpL1");
    var objClickRevealPopUpL = document.getElementById("ClickRevealPopUpL");
    var objClickPopUpImage = document.getElementById("ClickPopUpImage");
    var templinkindex;

    //hrb start 4/6/2009: added to close the menu on click of clickAnd Reveal, if not clicked from search popup
    if (!isClickedFromSearch(e)) {
        HideMenuPopup();
    }

    isRevalClicked = true;
    //hrb start 4/6/2009: : added to close the menu on click of clickAnd Reveal, if not clicked from search popup

    //hrb end 19/5/2009: added to close the menu on click of clickAnd Reveal

    objClickRevealPopUpL.style.visibility = "visible";
    document.getElementById("ClickRevealPopUpLx").style.visibility = "visible";

    // start hrb 25 Apr 09 : Done change for adjusting height and width of popup block of click reveal
    if (height != '' && width != '') {
        objClickRevealPopUpL1.scrollTop = 0;
        objClickRevealPopUpL.style.width = width
        objClickRevealPopUpL.style.height = height
        objClickRevealPopUpL1.style.width = width
        objClickRevealPopUpL1.style.height = height
        if (!isIE) {
            document.getElementById("ClickRevealPopUpTitle").style.width = (width - 6);
            objClickRevealPopUpL1.style.width = (width - 10);
            objClickRevealPopUpL1.style.height = (height - 35);
        }
    }
    else {
        objClickRevealPopUpL1.scrollTop = 0;
        objClickRevealPopUpL.style.width = "340px"
        objClickRevealPopUpL.style.height = "140px"
        objClickRevealPopUpL1.style.width = "340px"
        objClickRevealPopUpL1.style.height = "140px"
        if (!isIE) {
            document.getElementById("ClickRevealPopUpTitle").style.width = 340;
            objClickRevealPopUpL1.style.width = 336;
            objClickRevealPopUpL1.style.height = 135;
            objClickRevealPopUpL.style.width = 348;
            objClickRevealPopUpL.style.height = "auto";
        }
    }

    //check if link is an image ,if yes then show the name of image else show the text
    templinkindex = linktext.toUpperCase();
    //HRB: start of code change to add title to the pop up of the click n reveal.
    var temptitletext = titletext.toUpperCase();
    //HRB: start of code change to add title to the pop up of the click n reveal.
    //document.getElementById("lblClickReveal").innerHTML = titletext;
    if ((temptitletext.indexOf(".GIF") == -1) && (temptitletext.indexOf(".JPG") == -1) && (temptitletext.indexOf(".PNG") == -1) && (temptitletext.indexOf(".BMP") == -1))
        document.getElementById("lblClickReveal").innerHTML = titletext;
    else
        document.getElementById("lblClickReveal").innerHTML = titletext.substring(0, titletext.lastIndexOf("."));
    //HRB: end of code change to add title to the pop up of the click n reveal.
    if (image != '') {
        document.getElementById("TDClickPopUpImage").style.display = "";
        objClickPopUpImage.style.display = "";
        objClickPopUpImage.src = "images/" + image;
    }
    else {
        document.getElementById("TDClickPopUpImage").style.display = "none";
        objClickPopUpImage.style.display = "none";
    }

    if (document.getElementById(para)) {
        para = document.getElementById(para).innerHTML;
        para = para.replace(/&lt;/g, "<");
        para = para.replace(/&gt;/g, ">");
        para = "<div class='qtext'>" + para + "</div>";
    }

    if (para != '')
        document.getElementById("ClickPopUpPara").innerHTML = para;
    else
        document.getElementById("ClickPopUpPara").innerHTML = "";

    SetPopupPosition(e, objClickRevealPopUpL, xpos, ypos);
}


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
//hrb end 4/6/2009: : function added to checked, if clickAnd Reveal is clicked from search popup
function ShowRollOverAndReveal(e, id, linktext, image, para, xpos, ypos, height, width) {

    //var obj = document.getElementById("RolloverRevealPopUpL");
    var objRolloverRevealPopUpL = document.getElementById("RolloverRevealPopUpL");
    var objRolloverRevealPopUpL1 = document.getElementById("RolloverRevealPopUpL1");
    var objRolloverPopUpImage = document.getElementById("RolloverPopUpImage");

    objRolloverRevealPopUpL.style.visibility = "visible";

    if (height != '' && width != '') {
        objRolloverRevealPopUpL1.scrollTop = 0;
        objRolloverRevealPopUpL.style.width = width;
        objRolloverRevealPopUpL.style.height = height;
        objRolloverRevealPopUpL1.style.width = width;
        objRolloverRevealPopUpL1.style.height = height;
    }
    else {
        objRolloverRevealPopUpL1.scrollTop = 0;
        objRolloverRevealPopUpL.style.width = "340px";
        objRolloverRevealPopUpL.style.height = "140px";
        objRolloverRevealPopUpL1.style.width = "340px";
        objRolloverRevealPopUpL1.style.height = "140px";
    }

    if (image != '') {
        document.getElementById("TDRolloverImage").style.display = "";
        objRolloverPopUpImage.style.display = "";
        objRolloverPopUpImage.src = "images/" + image;
    }
    else {
        document.getElementById("TDRolloverImage").style.display = "none";
        objRolloverPopUpImage.style.display = "none";
    }

    if (document.getElementById(para)) {
        para = document.getElementById(para).innerHTML;
        para = para.replace(/&lt;/g, "<");
        para = para.replace(/&gt;/g, ">");
        para = "<div class='qtext'>" + para + "</div>";
    }

    if (para != '')
        document.getElementById("RolloverPopUpPara").innerHTML = para
    else
        document.getElementById("RolloverPopUpPara").innerHTML = "";

    SetPopupPosition(e, objRolloverRevealPopUpL, xpos, ypos);

}

// end hrb 25 Apr 09 : Done change for adjusting height and width of popup block of click reveal


function HideRollOverPopUp() {
    document.getElementById("RolloverRevealPopUpL").style.visibility = "hidden";

}


function SetPopupPosition(e, obj, xpos, ypos) {

    // start hrb 25 Apr Done change for adjuxting height and width of popup block of click reveal
    if (xpos != '' && ypos != '') {
        mX = xpos;
        mY = ypos;
    }
    else {
        if (navigator.appName == "Microsoft Internet Explorer") {
            mX = event.clientX;
            mY = event.clientY;
        }
        else {
            mX = e.pageX;
            mY = e.pageY;
        }
    }

    // end hrb 25 Apr Done change for adjuxting height and width of popup block of click reveal   
    obj.style.left = mX + "px";
    obj.style.top = parseInt(mY) + 8 + "px";

    if (parseInt(parseInt(mX) + parseInt(obj.offsetWidth) + 50) > parseInt(document.getElementById('coursetd').offsetWidth)) {
        obj.style.left = parseInt(document.getElementById('coursetd').offsetWidth) - parseInt(obj.offsetWidth) - 25 + 'px';
    }

    if (parseInt(parseInt(mY) + parseInt(obj.offsetHeight) + 115) > (parseInt(document.getElementById('coursetd').offsetHeight))) {
        obj.style.top = parseInt(document.getElementById('coursetd').offsetHeight) - parseInt(obj.offsetHeight) - 58 + 'px';

    }

}
//end Hrb: Added the functions for click reveal/roll over pop up

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
        if (isMobileUserAgent == false) 
          document.getElementById("searchTextButtonLx").onmousedown();
        else
          document.getElementById("searchTextButtonLx").onclick();
            }
        }
        else {
      if (isMobileUserAgent == false) 
        document.getElementById("searchTextButtonLx").onmousedown();
      else
        document.getElementById("searchTextButtonLx").onclick();
        }
    }

    if (isMobileUserAgent == false) {
        //hrb: Added to hide glossary terms description popup
        document.getElementById("popupL").style.visibility = 'hidden';
        //hrb: End of Added to hide glossary terms description popup

        //hrb: Added to hide help description popup
        document.getElementById("helpPopUpL").style.visibility = 'hidden';
        document.getElementById("testPopUpLx").onmousedown();

        //hrb start : added to hide course preview popup on content load
        document.getElementById("coursePreviewerPopUpLx").onclick();
        //hrb start : added to hide course preview popup on content load

        //hrb:added to hide the outline if expanded
        if (document.getElementById("outlineL").style.pixelLeft > 200)
            OutlineShowHide();

        if (!isIE && outlineflag) {
            OutlineShowHide();
        }

        //hrb:end of added to hide the outline if expanded
        iscertificateclicked = true;

        if (document.getElementById("authorBioPopUpL").style.visibility = 'visible')
            document.getElementById("authorBioPopUpLx").onmousedown();
    }
    //Hrb(07/09/2009): Added to check for online user as to show blank page in Online player instead of pop up
  if(chk508Compliance()){
    OpenCertificatePopUp();
  }
  else{
    if (document.progress.OnlineUser) {
      /*Start Hrb(08/23/09): Added the functions to open the link/pop up on certificate web page */
      if (g_isOLP) {
        var isInternetConnected = true;
        var sub = getSubscription();

        if (sub != null) {
          //if not connected to internet then show the certificate pop up, else the OLP would open the web page
          if (isMobileUserAgent) {
            gbl_ServerURI = sub.serverURI;
            checkInternetConnected(gbl_ServerURI);
          }
          else {
            isInternetConnected = sub.getCourseCetificate(OPEN_CERTIFICATE_LINK);

            if (!isInternetConnected)
              OpenCertificatePopUp();
          }
        }
      }
      else
        OpenCertificateLink(gbl_CourseCertificateURI);

      /*End Hrb(08/23/09): Added the functions to open the link/pop up on certificate URL*/

    } else {
      OpenCertificatePopUp();
    }
  }

    if (isMobileUserAgent == false) {
        //hrb start 20/5/2009: added to close the transcript popup on click of certifcate menu
        if (document.getElementById("transcriptpopupL").style.visibility == "visible") {
            document.getElementById("transcriptPopUpLx").onmousedown();
        }
        //hrb end 20/5/2009: added to close the transcript popup on click of certifcate menu
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
    if (isMobileUserAgent && iscertificateclicked && lessonMode != LESSON_PILOTTESTING_MODE) {
        iscertificateclicked = false;
        if (isIphoneDevice) {
            hideCertificateIFrameDiv();
        }
        else {
            closeCertificateFrame();
        }
    }
}
function CloseTranscriptDiv() {
    if (isMobileUserAgent == false) {
        document.getElementById("transcriptbuttonL").style.display = '';
        document.getElementById("transcriptpopupL").style.visibility = 'hidden'
        document.getElementById("transcriptbuttonLD").style.display = 'none';
    }
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

    if (!isIE) {
        objCoursetitle.style.height = "auto";
    }

    fixedDivSize = 42;
    currentDivSize = objCoursetitle.clientHeight;
    currentFontSize = objCoursetitle.style.fontSize;
    intFontSize = currentFontSize.substring(0, 2);

    while (currentDivSize > fixedDivSize) {
        objCoursetitle.style.fontSize = eval("(intFontSize--)+'px'");
        currentDivSize = objCoursetitle.clientHeight;
    }

    if (isMobileUserAgent) {
        parent.parent.document.getElementById('loadMyPage').style.display = "none";
    }

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
    if (isMobileUserAgent == false) 
      document.getElementById("searchpopupLx").onmousedown();
    else
      document.getElementById("searchpopupLx").onclick();
    }

    if (isSearchClicked) {
    if (isMobileUserAgent == false)
      document.getElementById("authorBioPopUpLx").onmousedown();
    else
      document.getElementById("authorBioPopUpLx").onclick();
    }

    isSearchClicked = false;
}
//hrb:end function to close the search box

//hrb start : function to update the test attempts
function ChangeTestAttemptStatus(testStatus) {
    var perChapterStatus;
    var l_currentChapter = parseInt(CurrentChapter) - 1;

    if (FinalExam != EXAM_POSITION_BYCOURSE) {
        //hrb: add the status for current chapter in global string for chapter test
        /*perChapterStatus = g_TestAttempts.split(",");
    
    if(noOfAttemptedTests[l_currentChapter] == 1)
        {
        perChapterStatus[l_currentChapter] = testStatus;
        }
        else
        perChapterStatus[l_currentChapter] = perChapterStatus[l_currentChapter]+"$"+testStatus;
    
    g_TestAttempts=perChapterStatus.join(",");*/
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
        //hrb: for chapter test
        /*perChapterAttempts = g_TestAttempts.split(",");
    
    for(i=0;i<perChapterAttempts.length;i++)
        {
        perAttemptsDetail = perChapterAttempts[i].split("$");
        lastAttemptDetail = perAttemptsDetail[perAttemptsDetail.length-1];
        lastAttemptScore = lastAttemptDetail.substring(0,lastAttemptDetail.indexOf(":"));
      
      if(!isNaN(parseInt(lastAttemptScore)))
        totalCourseScore=totalCourseScore+parseInt(lastAttemptScore);
        }
        totalCourseScore=totalCourseScore/perChapterAttempts.length;*/

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
  if (document.progress.OnlineUser && !chk508Compliance()) {
        var sub = getSubscription();
        if (sub != null) {
            sub.CurrentDocument = parent.frames.frame_a.document;
            sub.EnableDisableLinks();
        }
    }
}

// hrb: EnableDisablePermalinks is just for permalinks
function EnableDisablePermalinks() {
    if (document.progress.OnlineUser && !g_isOLP && !chk508Compliance()) {
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
    if (isMobileUserAgent == false) {
        var objNonCheckpointSubscriberL = document.getElementById('nonCheckpointSubscriberL');
        var objCheckpointSubscriberInfoL = document.getElementById('checkpointSubscriberInfoL');

        // hrb: Disable the Checkpoint pop ups
        objNonCheckpointSubscriberL.style.visibility = 'hidden';
        objNonCheckpointSubscriberL.style.display = 'none';
        objCheckpointSubscriberInfoL.style.visibility = 'hidden';
        objCheckpointSubscriberInfoL.style.display = 'none';
    }
}
// end hrb 13/May/2009: Added for Checkpoint Subscriber Information and non Checkpoint Subscriber pop ups

//hrb start 18/5/2009: function added to change the bandwidth
function fnBandwidthChanged() {
    var objRdohighbandwidth = document.getElementById('rdohighbandwidth');
    var objRdolowbandwidth = document.getElementById('rdolowbandwidth');

    if (objRdohighbandwidth.checked)
        selectedBandwidth = objRdohighbandwidth.value;
    else if (objRdolowbandwidth.checked)
        selectedBandwidth = objRdolowbandwidth.value;

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
                if (isMobileUserAgent == false)
          document.getElementById('searchTextButtonLx').onmousedown()
        else
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
       if (isMobileUserAgent == false)
        document.getElementById('searchTextButtonLx').onmousedown();
       else
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
  if (isMobileUserAgent == false)
    document.getElementById('testPopUpLx').onmousedown();
  else
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
    if (document.getElementById('authorBioPopUpL').style.visibility = 'visible'){
    if (isMobileUserAgent == false)
      document.getElementById('authorBioPopUpLx').onmousedown();
    else
      document.getElementById('authorBioPopUpLx').onclick();
  }

    document.getElementById('transcriptpopupL').style.visibility = "visible";
  
  if(isIE) {
    document.getElementById('transcriptpopupL').style.top = 583;
  }
  else {
    if(chk508Compliance()) {
      document.getElementById('transcriptpopupL').style.top = 586;
    }
    else {
      document.getElementById('transcriptpopupL').style.top = 588;
    }
  } 
  
    if (!isIE) {
        document.getElementById('transcriptpopupL1').style.width = 836;
        document.getElementById('transcriptpopupL1').style.height = 46;
        document.getElementById('transcriptPopUpTitle').style.height = 13;
    }

    //hrb start 20/5/2009: added to close the certificate popup on click of transcript menu
    if (document.getElementById('CertificatepopupL').style.visibility == "visible") {
    if (isMobileUserAgent == false)
        document.getElementById('CertificateLx').onmousedown();
    else
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
    
    if(!chk508Compliance() && window.event.keyCode == 9 ) { 
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
    
    if(!chk508Compliance() && e.keyCode == 9 ) { 
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


//Start Hrb(06/02/2009): Added to Disable right select menu
function ShowMenu(div, w, h, direction, num, e) {
    if (div == "bookmarkL" && isMobileUserAgent) {
        document.getElementById("backgroundbookmark").style.visibility = "";
        document.getElementById("bookmarkL").style.visibility = "";
    }
    if (div == "searchL" && isMobileUserAgent) {
        document.getElementById("searchL").style.visibility = "";
        document.getElementById("backgroundbookmark").style.visibility = "";
    }
    else {
        if (mouseDown(e)||chkEnterKey(e))
            Menu(div, w, h, direction, num);
    }
  if(!isMobileUserAgent) { 
    if(div=="helpL" || (!chk508Compliance() && div=="printL")) {
      document.getElementById(div).style.top = parseInt(document.getElementById(div).style.top) - 5;  
    }
    if(div=="bookmarkL") {
      var titleText = BOOKMARK_MSG1 + document.getElementById("txtbkDescription").value;
      if(document.getElementById("txtbkDescription").value == TITLE || document.getElementById("txtbkDescription").value == WELCOME || document.getElementById("txtbkDescription").value == COURSE_INFORMATION || document.getElementById("txtbkDescription").value == INTRODUCTION) {
        titleText += BOOKMARK_MSG2;
      }
      document.getElementById("txtbkDescription").title = titleText;
    }
  }
}


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
    if (!isMobileUserAgent) {
        var strElement;
        //hrb start:added for learning objective
        if (isExpired) {
            setAttributes("trch0SubCh4");
        }
        //hrb end:added for learning objective
        if ((lessonMode == LESSON_PREVIEWER_MODE && parseInt(demoChapters) <= parseInt(TotalChapters)) || isExpired) {
            //Get the no. of chapters to show in the course demo
            for (var chapterIndex = parseInt(demoChapters) + 1; chapterIndex <= TotalChapters; chapterIndex++) {
                strElement = 'spCh' + chapterIndex;

                setAttributes(strElement);

                var l_SubChapters = arrSubChapters[chapterIndex];
                for (var subChapterIndex = 1; subChapterIndex < l_SubChapters; subChapterIndex++) {

                    strElement = 'trch' + chapterIndex + 'SubCh' + subChapterIndex;
                    setAttributes(strElement);

                    strElement = 'ch' + chapterIndex + 'SubCh' + subChapterIndex;
                    setAttributes(strElement);

                    strElement = 'ch' + chapterIndex + 'SubChT' + subChapterIndex;
                    setAttributes(strElement);

                }
            }

            if (FinalExam == EXAM_POSITION_BYCHAPTER) {
                for (var chapterIndex = 1; chapterIndex <= TotalChapters; chapterIndex++) {
                    strElement = 'trChTest' + chapterIndex
                    setAttributes(strElement);

                    strElement = 'chTest' + chapterIndex
                    setAttributes(strElement);

                    strElement = 'chTestT' + chapterIndex
                    setAttributes(strElement);

                }
            }
            else if (FinalExam == EXAM_POSITION_BYCOURSE) {
                strElement = 'spFinalExam'
                setAttributes(strElement);

                strElement = 'spFinalExamT'
                setAttributes(strElement);
            }
        }
    }
    else {
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
        }
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
    if (changeOnClick) {
        parentObj.removeAttribute("onclick");
        if (isIphoneDevice) {
            parentObj.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
        }
        else {
            parentObj.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPAD, COURSE_PREVIEW_MESSAGE_IPAD); }, false);
        }
    }
    for (var obCnt = 0; obCnt < childNodes.length; obCnt++) {
        if (childNodes[obCnt] != null && childNodes[obCnt].style != null)
            childNodes[obCnt].style.color = "gray";
        if (changeOnClick && childNodes[obCnt].removeAttribute) {
            childNodes[obCnt].removeAttribute("onclick");
            if (isIphoneDevice) {
                childNodes[obCnt].addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
            }
            else {
                childNodes[obCnt].addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPAD, COURSE_PREVIEW_MESSAGE_IPAD); }, false);
            }
        }
    }
    obj.style.color = "gray";

    obj.title = ""
    obj.style.cursor = "default"
}


function fnSetMenuForDemoCourse() {
    if (isMobileUserAgent == false) {
        document.getElementById("glossbuttonLDis").style.display = "";
        document.getElementById("glossbuttonL").style.display = "none";
        //document.getElementById("glossbuttonLD").innerHTML ="";
        //document.getElementById("glossbuttonLD").style.cursor = "default"
        document.getElementById("searchbuttonLDis").style.display = "";
        document.getElementById("searchbuttonL").style.display = "none";
        //document.getElementById("searchbuttonLD").innerHTML ="";
        //document.getElementById("searchbuttonLD").style.cursor = "default"
        document.getElementById("bookmarkbuttonLDis").style.display = "";
        document.getElementById("bookmarkbuttonL").style.display = "none";
        //document.getElementById("bookmarkbuttonLD").innerHTML ="";
        //document.getElementById("bookmarkbuttonLD").style.cursor = "default"
        document.getElementById("printbuttonLDis").style.display = "";
        document.getElementById("printbuttonL").style.display = "none";
        //document.getElementById("printbuttonLD").innerHTML ="";
        //document.getElementById("printbuttonLD").style.cursor = "default"
        //document.getElementById("transcriptbuttonLD").style.display = "none"; 
        //document.getElementById("transcriptbuttonL").style.display = "none";  
    }
    else {
        var searchEle = document.getElementById("search");
        var glossaryEle = document.getElementById("glossary");
        var bookmarkEle = document.getElementById("bookmarks");
        var bookmarkDivEle = document.getElementById("bookmarkDiv");
        var certificateDivEle = document.getElementById("certificatemain");

        if (isIphoneDevice) {
            if (searchEle.removeAttribute) {
                searchEle.removeAttribute("onclick");
                searchEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
            }
            if (glossaryEle.removeAttribute) {
                glossaryEle.removeAttribute("onclick");
                glossaryEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
            }
            if (bookmarkEle.removeAttribute) {
                bookmarkEle.removeAttribute("onclick");
                bookmarkEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
            }
            if (bookmarkDivEle.removeAttribute) {
                bookmarkDivEle.removeAttribute("onclick");
                bookmarkDivEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
            }
            certificateDivEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
        }
        else {
            if (searchEle.removeAttribute) {
                searchEle.removeAttribute("onclick");
                searchEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPAD, COURSE_PREVIEW_MESSAGE_IPAD); }, false);
            }
            if (glossaryEle.removeAttribute) {
                glossaryEle.removeAttribute("onclick");
                glossaryEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPAD, COURSE_PREVIEW_MESSAGE_IPAD); }, false);
            }
            if (bookmarkEle.removeAttribute) {
                bookmarkEle.removeAttribute("onclick");
                bookmarkEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPAD, COURSE_PREVIEW_MESSAGE_IPAD); }, false);
            }
            if (bookmarkDivEle.removeAttribute) {
                bookmarkDivEle.removeAttribute("onclick");
                bookmarkDivEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPAD, COURSE_PREVIEW_MESSAGE_IPAD); }, false);
            }
            certificateDivEle.addEventListener("click", function() { showIPhonePopup(COURSE_PREVIEW_MESSAGE_TITLE_IPHONE, COURSE_PREVIEW_MESSAGE_IPHONE); }, false);
        }
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
    if (isMobileUserAgent == false) {
        if (document.forms[0].length > 1)
            for (var d = 0; d <= document.forms[0].length - 1; d++) {
            if (document.forms[0].answer1[d].checked == true) {
                response = response + document.forms[0].answer1[d].value.toUpperCase();
            }
        }
        else
            response = document.forms[0].answer1.value.toUpperCase();
    }
    else {

        var form = getFormElementFromQuestionDiv(currentDivId);
        if (form.length > 1)
            for (var d = 0; d <= form.length - 1; d++) {
            if (form.answer1[d].checked == true) {
                response = response + form.answer1[d].value.toUpperCase();
            }
        }
        else
            response = form.answer1.value.toUpperCase();
    }
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

    var l_CurrentChapter = parseInt(CurrentChapter) - 1;
    var arrLength = parseInt(arrStudyQuestionWithResponse[l_CurrentChapter].length);

    page = page.substring(1, page.indexOf("."));

  var curDocFrm = document.forms[0];
  if(curDocFrm.name != "frmQuestion" && document.forms.length > 1) {
    for(var cntFrm = 0; cntFrm < document.forms.length-1; cntFrm++) {
      if(document.forms[cntFrm].name == "frmQuestion") {
        curDocFrm = document.forms[cntFrm];
        break;
      }
    }
  }
  
    if (curDocFrm.length > 1) {
        for (var d = 0; d <= curDocFrm.length - 1; d++) {
            if (curDocFrm.answer1[d].checked == true) {
                response = response + curDocFrm.answer1[d].value.toUpperCase();
            }
        }
    } else {
        response =curDocFrm.answer1.value.toUpperCase();
    }

    for (var indexSQ = 0; indexSQ < arrLength; indexSQ++) {

        if (arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] != "") {
            SQ = arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ].split("|")[0].split("~")[1];

            //update
            if ("S" + page == SQ) {
                if (response == "") {
                    arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = "";
                }
                else {
                    arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = CurrentChapter + "~S" + page + "|I" + response;

                }
                break;
            }
        } //if

    } //for

    //add
    if (indexSQ >= parseInt(arrLength) && response != "") {
        arrStudyQuestionWithResponse[l_CurrentChapter][arrLength] = CurrentChapter + "~S" + page + "|I" + response;

    }
} //func


function setStudyQuestionResponse() {

    var arrLength = parseInt(arrStudyQuestionWithResponse[parseInt(CurrentChapter) - 1].length);
    var Answer;
    var pageNo;
    var arrSQ;

    var loc = parent.frames.frame_b.document.location.toString();
    var page = loc.substr(loc.lastIndexOf("/"));
    currentPage = page.substring(1, page.indexOf("."));

    if ((document.getElementById("searchpopupL") != null && document.getElementById("searchpopupL").style.visibility == "hidden") || (isMobileUserAgent)) {
        //desktop code 
        if (isMobileUserAgent == false) {
            if (document.forms.length == 0)
                return
        }
        else { //mlearning
            if (parent.frames.frame_b.document.forms.length == 0)
                return
        }
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

                if (currentPage == pageNo) {
                    Answer = Answer.substr(1);

                    noOfControls = parent.frames.frame_b.document.getElementsByTagName('input');

                    for (itr = 0; itr < noOfControls.length; itr++) {

                        if ((noOfControls[itr].type == "radio") || (noOfControls[itr].type == "checkbox")) {
                            if (Answer.indexOf(noOfControls[itr].value.toUpperCase()) != -1) {
                                if (isIE) {
                                    noOfControls[itr].checked = true;
                                }
                                else {
                                    noOfControls[itr].setAttribute("checked", "checked")
                                }
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
    } //if
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

    var loc = parent.frames.frame_b.document.location.toString();
    var page = loc.substr(loc.lastIndexOf("/"));
    currentPage = page.substring(1, page.indexOf("."));

    if ((isNotNullOrUndefined("searchpopupL") && document.getElementById("searchpopupL").style.visibility == "hidden") || isMobileUserAgent) {
        if (parent.frames.frame_b.document.forms[0]) {
            if (parent.frames.frame_b.document.forms[0].length == 0)
                return
        }
        for (var indexSQ = 0; indexSQ < arrLength; indexSQ++) {
            arrSQ = new Array();

            if (arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] != "") {
                arrSQ = arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ].split("|");

                Answer = arrSQ[1].substr(1);

                pageNo = arrSQ[0].split("~")[1].substr(1);

                if (currentPage == pageNo)
                    arrStudyQuestionWithResponse[l_CurrentChapter][indexSQ] = arrSQ[0] + "|" + status + Answer;

            }
        }
    }
}
//End Hrb(06/16/2009): Added for preserving test questions

function showCoursePreviewPopUp() {
    if (isMobileUserAgent == false) {
        document.getElementById("coursePreviewerPopUpL").style.visibility = "";
        document.getElementById("coursePreviewerPopUpL1").innerHTML = COURSE_PREVIEW_MESSAGE;

        if (!isIE) {
            document.getElementById("coursePreviewerPopUpL").style.height = 186;
            document.getElementById("coursePreviewerPopUpL").style.width = 390;
            document.getElementById("coursePreviewerPopUpL1").style.height = 130;
            document.getElementById("coursePreviewerPopUpL1").style.width = 356;
            document.getElementById("coursePreviewerPopUpTitle").style.width = 380;
            document.getElementById("tblCoursePreview").style.width = 300;
        }
    } else {
        var title = COURSE_PREVIEW_MESSAGE_TITLE_IPAD;
        var desc = COURSE_PREVIEW_MESSAGE_IPAD;
        if (isIphoneDevice == true) {
            title = COURSE_PREVIEW_MESSAGE_TITLE_IPHONE;
            desc = COURSE_PREVIEW_MESSAGE_IPHONE;
        }
        showIPhonePopup(title, desc, false);
    }
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
  
  if(chk508Compliance()) {
    document.getElementById("testPopUpL1").focus();
  }
}
//hrb end:Added to show the alert messages

//hrb start:Added to redirect to welcome page
function courseExpired() {
    //redirect to welcome page
    parent.frames.frame_b.document.location = "0000.htm"
    document.getElementById("outlinebuttonL").innerHTML = "Title Page<br><br>Click for Contents";
    document.getElementById("divPageTitle").innerHTML = "Title";
    //set course title
  if(typeof(customtitle) != 'undefined') {
    AdjustCourseTitle('<div style="font:knowledge;font-size:22px">' + customtitle + '</div>');
  }
  else
    AdjustCourseTitle('<div style="font:knowledge;font-size:22px">CHECKPOINT&nbsp;LEARNING<sup><font size="2px">&#174;</font></sup></div>')
    //disable next and prev button
    document.getElementById("PrevButton").style.display = "none";
    document.getElementById("PrevButtonDisabled").style.display = "";
    document.getElementById("NextButton").style.display = "none";
    document.getElementById("NextButtonDisabled").style.display = "";
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
        if (isMobileUserAgent == true)    //HRB: Condition added for the mLearning course.
        {
            showmLearningCertificate();
        }
        else {
            document.getElementById("certificatebuttonLDisabled").style.display = "none";
            document.getElementById("certificatebuttonLD").style.display = "none";
            document.getElementById("certificatebuttonL").style.display = "";
        }
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
            document.getElementById("submittest").style.visibility = 'visible';
            document.getElementById("submittest_disable").style.visibility = 'hidden';
        }
        else {
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
    //added isMobileUserAgent condition only to test course on OLP 
    if (document.progress.OnlineUser || isMobileUserAgent == true) {
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
                    if (isMobileUserAgent == true)
                        showIPhonePopup('', PURCHASE_COURSE_MSG, true);
                    else
                        alert(PURCHASE_COURSE_MSG);
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
    if (isMobileUserAgent) {
        if (isIphoneDevice) {
            showCertificateIFrameDiv();
        }
        else {
            showCertifcateFrame();
        }
    }
    else {
        var objCertificatepopupL1 = document.getElementById("CertificatepopupL1");
        var objCertificatepopupL = document.getElementById("CertificatepopupL");

        document.getElementById("certificatebuttonLD").style.display = "";
        document.getElementById("certificatebuttonL").style.display = "none";
  
    if(chk508Compliance()) {
      objCertificatepopupL1.innerHTML = '<h6>&nbsp;</h6>'+CERTIFICATE_508_MSG;
      objCertificatepopupL.style.width="400px";
      objCertificatepopupL.style.height="200px";
      objCertificatepopupL1.style.width="400px";
      objCertificatepopupL1.style.height="200px";
      objCertificatepopupL.style.top="195px";
      objCertificatepopupL.style.left="295px";
      
      if(!isIE) {
        objCertificatepopupL1.style.width="388px";
        objCertificatepopupL.getElementsByTagName('div')[0].style.width="98%";
        objCertificatepopupL1.style.height="154px";
      }
    }
    else {
      if (isIE) {
        objCertificatepopupL1.innerHTML = window.frames["Certificateiframe"].document.body.innerHTML;
      }
      else {
        objCertificatepopupL1.innerHTML = document.getElementById("Certificateiframe").contentWindow.document.body.innerHTML;
        objCertificatepopupL1.style.width = "630px";
        objCertificatepopupL.style.width = "642px";
        objCertificatepopupL.style.height = "485px";
      }
    }

        showOutlineOverVdo();
        objCertificatepopupL.style.visibility = "visible";
    }


}
/*End Hrb(08/23/09): Added the functions to open the link/pop up on certificate, shoppingcart, Feedback URL*/

//Start Hrb(08/03/09): Added to commit the course progressdata after the threshold value 
function SaveProgressDataWithInterval() {
    SaveState();

    //update the LMS database for online player
    //added isMobileUserAgent Condition to test OLP player in mlearning
    if (document.progress.OnlineUser || isMobileUserAgent == true) {
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
    gbl_TestQuestionArray="";
    return;
  }
    isChapterTestAttemptChanged = 1;
    var chapterTestStatus;
    if (isMobileUserAgent == false) {
        if (document.getElementById("outlineL").style.pixelLeft > 200)
            OutlineShowHide();

        if (!isIE && outlineflag)
            OutlineShowHide();
    }
    hidePopups();
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
    if(hours >= 12) {
      ampm = 'PM';
      hours = (hours%12) == 0 ? 12 : (hours%12);
    }
    var minutes = today.getMinutes();
    if(minutes < 10) {
      minutes = "0" + minutes;
    }
    var seconds = today.getSeconds();
    if(seconds < 10) {
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
        if (!isMobileUserAgent) {
            UpdateProgressData();
        }
    
        //hrb start : Added to display proper date on document of progress
        parent.frames.frame_b.document.location = "congratslast_page.htm";

        if (lessonMode == LESSON_PILOTTESTING_MODE) {
            document.getElementById("NextButton").style.display = "none";
            document.getElementById("NextButtonDisabled").style.display = "";
        }
        else {
            document.getElementById("NextButton").style.display = "";
            document.getElementById("NextButtonDisabled").style.display = "none";
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
            if (isMobileUserAgent == true)    //HRB: Condition added for the mLearning course.
            {
                showmLearningCertificate();
            }
            else {
                document.getElementById("certificatebuttonLDisabled").style.display = "none";
                document.getElementById("certificatebuttonLD").style.display = "none";
                document.getElementById("certificatebuttonL").style.display = "";
            }
        }
        //hrb:end of added to enable the certificate button 
        document.getElementById("divPageTitle").innerHTML = COURSE + ", " + PASSED;        
    
    isGradeMyAnswerClicked = false;
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

    if (isMobileUserAgent == true && gbl_CurrentTestScore >= gbl_PassingPercent) {
        mLearningUpdateProgressData(); //Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed
        top.frmHidden.CommitSyncProgressData(); //iOLP function which will commit and synchronize the progress information.
    }
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
    //HRB: to bypass CPLlink and Perm link for mlearning
  if (isMobileUserAgent && !chk508Compliance()) {
        return;
    }
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
    /*document.getElementById("PrevButton").style.display = "none";
    document.getElementById("PrevButtonDisabled").style.display = "";*/
}

function initTest() {
    if (isMobileUserAgent == false) {
        if (document.getElementById("outlineL").style.pixelLeft > 200)
            OutlineShowHide();

        if (!isIE && outlineflag)
            OutlineShowHide();
    }
    hidePopups();
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
    document.getElementById("questionControlPanel").style.visibility = 'visible';
    document.getElementById("showQuestionNumber").style.visibility = 'visible';
    document.getElementById("submittest").style.visibility = 'visible';
    
    return;
  }
  initTest();
    SetMode("review");
    EnableDisableSubmitButton();
    EnableDisableQuestionSelectionDropdown(false);
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

    /*var objSubmitAnswerEnable = null;
    var objSubmitAnswerDisable = null;
  
  var nodes = document.getElementById(currentDivId).getElementsByTagName('div');
    for(var i=0;i<nodes.length;i++){
    if(nodes[i].id=="submitAnswerEnable")
    objSubmitAnswerEnable = nodes[i];
      
    if(nodes[i].id=="submitAnswerDisable")
    objSubmitAnswerDisable = nodes[i];
    }*/

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
    gradedDivHeight = 0;
    if (isMobileUserAgent == false) {
        sFeatures = "left=100, top=120, width=600, height=500, directories=no, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=yes, titlebar=yes";
        window.open("graded_answers.htm", "_blank", sFeatures);
    } else {
        if (event != null) {
            event.stopPropagation();
        }
        document.getElementById("gradedAns").innerHTML = "";
        document.getElementById("gradedAnsParent").className = "showDiv";
        if (isIphoneDevice == true) {
            hideShowHeaderFooter_iphone('');
        } else {
            showGradedAnswers();
        }
        appendQues();
    }
}
function onIFrameLoad(data) {
    if (isIE) {
        var ie_var = "srcElement";
        var moz_var = "target";
        var prop_var = "myid";
        var prop_var1 = "data";
        data = data[ie_var][prop_var1].split("_"); // 0-chapter, 1-pagenumber, 2-User Response;
    }
    else {
        data = data.split("_"); // 0-chapter, 1-pagenumber, 2-User Response;
    }

    iframeid = "fr_" + data[0] + "_" + data[1];
    var correctRes = window.frames[iframeid].CorrectAnswer;
    var userRes = data[2];
    userRes = userRes.substring(1);
    var iframe = document.getElementById(iframeid);
    var doc = null;
    if (iframe.contentDocument)
    // Firefox, Opera
        doc = iframe.contentDocument;
    else if (iframe.contentWindow)
    // Internet Explorer
        doc = iframe.contentWindow.document;
    else if (iframe.document)
    // Others?
        doc = iframe.document;

    var q_type = doc.forms[0].getElementsByTagName('input')[0].type;

    var quesCont = document.createElement("div");
    quesCont.id = data[0] + "_" + data[1];

    var titleDiv = document.createElement("div");
    titleDiv.style.height = "15px";
    titleDiv.style.width = "100%";
    titleDiv.style.fontWeight = "bold";
    titleDiv.style.fontSize = "11";
    titleDiv.style.padding = "2 0 2 5";
    titleDiv.style.backgroundColor = "#979797";
    titleDiv.style.color = "white";
    //titleDiv.innerHTML = "Chapter - "+data[0]+" Question - "+data[3];
    titleDiv.innerHTML = "Question - " + data[3];
    quesCont.appendChild(titleDiv);

    var ques = document.createElement("p");
    ques.innerHTML = doc.getElementsByTagName('p')[0].innerHTML;
    ques.style.margin = "5px";
    ques.style.padding = "0px";
    ques.style.fontSize = "14";
    quesCont.appendChild(ques);

    var q_form = document.createElement("form");
    q_form.setAttribute("name", "quesForm");

    var q_table = document.createElement("table");
    q_table.style.cellspacing = 5;
    q_table.style.fontSize = "12";
    q_table.style.border = 0;

    var rows = doc.forms[0].getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var optionText = rows[i].children[2].firstChild.innerHTML;
        var val = rows[i].children[0].children[0].value; // options - A/B/C/D
        var row = document.createElement("tr");

        var col0 = document.createElement("td");
        col0.style.verticalAlign = "top";
        var col1 = document.createElement("td");
        col1.style.verticalAlign = "top";

        var col2 = document.createElement("td");
        col2.innerHTML = val + ".";
        col2.style.verticalAlign = "top";

        var col3 = document.createElement("td");
        col3.innerHTML = optionText;

        var inp = document.createElement("input");

        if (q_type == "radio")
            inp.setAttribute("type", "radio");
        else
            inp.setAttribute("type", "checkbox");
        inp.setAttribute("valign", "top");
        inp.setAttribute("name", "opt");
        inp.setAttribute("disabled", "true");
        inp.setAttribute("value", val);
        inp.setAttribute("tabindex", i);
        inp.setAttribute("title", "Answer " + val);
        inp.style.margin = "0px";
        inp.style.width = "15px";
        inp.style.height = "15px";

        if (q_type == "radio") {
            if (val == userRes) {
                if (isIE)
                    inp.CHECKED = "checked";
                else
                    inp.setAttribute("checked", "checked");

                if (userRes != correctRes)
                    col0.innerHTML = "<img src='common/images/incorrect.gif' width='16' height='16'/>";
                else
                    col0.innerHTML = "<img src='common/images/green_tick.gif' width='16' height='16'/>";

            }
            else if (val == correctRes) {
                col0.innerHTML = "<img src='common/images/green_tick.gif' width='16' height='16'/>";
            }
        }
        else {
            if (userRes.indexOf(val) != -1) {
                if (isIE)
                    inp.CHECKED = "checked";
                else
                    inp.setAttribute("checked", "checked");

            }
            if (correctRes.indexOf(val) == -1)
                col0.innerHTML = "<img src='common/images/incorrect.gif' width='16' height='16'/>";
            else
                col0.innerHTML = "<img src='common/images/green_tick.gif' width='16' height='16'/>";
        }
        col1.appendChild(inp);

        row.appendChild(col0);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        q_table.appendChild(row);
    }
    q_form.appendChild(q_table);
    if (isIE) {
        var temp = document.createElement(q_form);
        temp.innerHTML = q_form.innerHTML;
        quesCont.appendChild(temp);
    } else {
        quesCont.appendChild(q_form);
    }

    document.getElementById("div_" + data[0] + "_" + data[1]).appendChild(quesCont);
    gradedDivHeight += document.getElementById("div_" + data[0] + "_" + data[1]).offsetHeight;
    document.getElementById("gradedAns").style.height = gradedDivHeight;
    if (gradedAnsScroll != null) {
        gradedAnsScroll.destroy();
    }
    gradedAnsScroll = new iScroll("gradedAns");

    //hide the loading mask when the last question of last chapter is loaded
    if (TotalChapters == parseInt(data[0]) && NoOfQuestionsToDisplayArray[TotalChapters - 1] == parseInt(data[3])) {
        document.getElementById("gradedMask").style.visibility = "hidden";
        document.getElementById("gradedAns").style.visibility = "visible";
    }

}

function appendQues() {
    for (var i = 0; i < TotalChapters; i++) {
        for (var j = 0; j < arrChapterQuestion[i].length; j++) {
            var title = "";
            for (var k = 0; k < CategoryList.length; k++) {
                if (CategoryList[k].CategoryCode == i + 1) {
                    title = CategoryList[k].Description;
                    break;
                }
            }
            var ch = "0" + parseInt(i + 1, 10);
            ch = ch.substring(ch.length - 2, ch.length);

            var page_loc = arrChapterQuestion[i][j].substr(1, arrChapterQuestion[i][j].length);
            var frame_name = "fr_" + ch + "_" + page_loc;
            var iframeid = "fr_" + ch + "_" + page_loc;

            var quesContainer = document.createElement("div");
            quesContainer.style.padding = "5px";
            quesContainer.setAttribute("id", "div_" + ch + "_" + page_loc);

            if (j == 0) {
                var cTitle = document.createElement("div");
                cTitle.style.paddingBottom = "5px";
                cTitle.style.width = "100%";
                cTitle.style.fontWeight = "bold";
                cTitle.style.fontSize = "12px";
                cTitle.innerHTML = "Chapter " + (i + 1) + " : " + title;
                quesContainer.appendChild(cTitle);
            }

            document.getElementById("gradedAns").appendChild(quesContainer);

            var data = ch + "_" + page_loc + "_" + arrChapterQuestionResponse[i][j] + "_" + (j + 1);
            if (isEthicCourse)
                page_loc = "t01-" + page_loc + ".htm";
            else
                page_loc = "t" + ch + "-" + page_loc + ".htm";

            var iframeCont = document.createElement("div");
            iframeCont.setAttribute("id", "cont_" + iframeid);

            var Q_iframe = document.createElement("iframe");
            //gradedQuesArray.push(iframeid);
            if (isEthicCourse) {
                var loc = document.location.href.substring(0, document.location.href.indexOf('graded_answers.htm') - (courseInstanceId_dyn.length + 1));
                page_loc = loc + courseRefMap[i][j] + "/" + page_loc;
            }
            Q_iframe.src = page_loc;
            Q_iframe.setAttribute("id", iframeid);
            Q_iframe.style.display = "none";
            Q_iframe.name = frame_name;
            Q_iframe.data = data;
            Q_iframe.myid = iframeid;
            if (isIE) {
                Q_iframe.attachEvent("onload", onIFrameLoad);
            } else {
                Q_iframe.setAttribute("onload", "onIFrameLoad('" + data + "')");
            }

            iframeCont.appendChild(Q_iframe);
            document.body.appendChild(iframeCont);
        }
    }
    //clearIframes();
}

//@sha 20-oct-2010 to add new li to bookmark ul
function appendNewBookMark(pageNo, bookMarkDescription, bkDesc) {
    var greaterSign = ">";

    var liStartWithClassName = '<li class="bookmarkRowTemplate"';
    var liEnd = "</li>";
  if (isMobileUserAgent == false)
    var onClickEvent = " onmousedown='fnShowBookmarkPage(\"" + pageNo + "\")' ";
  else
    var onClickEvent = " onclick='fnShowBookmarkPage(\"" + pageNo + "\")' ";
    var divStartTag = "<div class='glossaryBookmarkLabel_template'"
    var divStartbkchpagenoTag = "<div"
    var divEndTag = "</div>"
    var bkbreak = "<br/>"
    var newLi = liStartWithClassName + onClickEvent + greaterSign;
    newLi = newLi + divStartTag + greaterSign;
    newLi = newLi + bookMarkDescription + divEndTag + bkbreak;
    newLi = newLi + divStartbkchpagenoTag + greaterSign;
    newLi = newLi + bkDesc;
    newLi = newLi + divEndTag + liEnd;
    var ulInnerHTML = document.getElementById("ulBookmarks").innerHTML
    ulInnerHTML = ulInnerHTML + newLi;
    document.getElementById("ulBookmarks").innerHTML = ulInnerHTML;
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
//@shaend

// This function returns the value of mouse-x & mouse-y position.
function init() {

    if (isIphoneDevice == false) {
        //set the tools iframe display none.
        document.getElementById('toolsDiv').style.visibility = "hidden";
        document.getElementById('toolsdesc').style.visibility = "hidden";
        //set the certificate iframe display none.
        document.getElementById('certificateDiv').style.display = "none";
        // Set the popup hidden. Then on click of link it will show the popup.
        document.getElementById('gotopopupL').style.visibility = "hidden";
        document.getElementById('gotosearchpopupL').style.visibility = "hidden";
        document.getElementById('gotosearchpopupL').style.display = "none";
        document.getElementById('popupHeaderArrow').style.visibility = "hidden";
    }
    // Set the popup hidden. Then on click of link it will show the popup.
    document.getElementById('popupL').style.visibility = "hidden";



    // Set the bookmark hidden. Then on click of link it will show the bookmark.
    //document.getElementById('bookmarkL').style.visibility = "hidden";
    if ((/ipad/gi).test(navigator.appVersion)) {
        if (window.Event) {
            document.captureEvents(Event.TOUCHEND);
        }
        document.ontouchend = getCursorXY;
    }
    else {
        if (window.Event) {
            document.captureEvents(Event.MOUSEMOVE);
        }
        document.onmousemove = getCursorXY;
    }
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
    pp = new iScroll("popup");
}


function closePopupDiv(ele, popupid) {
    var popup = document.getElementById(popupid);
    ele.style.display = 'none';
    popup.parentNode.style.display = 'none';
}



function getFormElementFromQuestionDiv(contentId) {
    var contentTemp = document.getElementById(contentId);
    var qu = null;

    for (var v = 0; v < contentTemp.childNodes.length; v++) {
        if (contentTemp.childNodes[v].id) {
            if (contentTemp.childNodes[v].id == "question") {
                qu = contentTemp.childNodes[v];
                break;
            }
        }
    }
    if (qu != null) {
        for (var i = 0; i < qu.childNodes.length; i++) {
            if (qu.childNodes[i].nodeName == "FORM") {
                return qu.childNodes[i];
            }
        }
    }
    else {
        contentTemp = document.getElementById(contentId + "_question");
        qu = contentTemp.childNodes["question"];
        for (var i = 0; i < qu.childNodes.length; i++) {
            if (qu.childNodes[i].nodeName == "FORM") {
                return qu.childNodes[i];
            }
        }
    }
}

/*Add new function to add and remove bookmark for iphone*/

function markUnmarkBookmark() {
    var bookmarkDiv = document.getElementById("bookmarkDiv");
    if (bookmarkDiv.className.indexOf("bookMark_Done") < 0) {
        if (isIphoneDevice == false) {
            document.getElementById("bookmarkAdd").style.display = "";
        }
        else {
            var returnVal = fnAddBookMark();
            if (returnVal != null && returnVal == 1)
                bookmarkDiv.className = "bookMark bookMark_Done";
        }
    }
    else {
        var bookmarkDesc = document.getElementById("bkDescription").innerHTML;
        var textbkDesc = document.getElementById("txtbkDescription").value;
        textbkDesc = textbkDesc.replace(/^\s+/, '');
        if (isIphoneDevice == true) {
            fndeleteBookMark(textbkDesc);
        }
        else {
            fndeleteBookMark(bookmarkDesc);
        }
        bookmarkDiv.className = "bookMark";
    }
}

//Move from common.js file
function hideShowBookMark(action) {

    var bookmarkDiv = document.getElementById("bookmarkDiv");
    if (action == "hide") {
        bookmarkDiv.className = bookmarkDiv.className + " displayNone";
    }
    else {
        bookmarkDiv.className = bookmarkDiv.className.replace("displayNone", "");
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
    showIPadPopup('', parent.frames.frame_b.document.getElementById('transContent').innerHTML, "572", "70", "70", "908", "876");
    var popupHeaderArrow = document.getElementById("popupHeaderArrow");
    popupHeaderArrow.style.backgroundImage = "url(common/images/bottom.png)";
    document.getElementById('popupHeaderArrow').style.visibility = "visible";
    document.getElementById('popupHeaderArrow').style.display = "";
  document.getElementById('popupHeaderArrow').style.top = "674px";
    document.getElementById('popupHeaderArrow').style.left = "934px";
  document.getElementById('popupHeaderArrow').style.width = "26px";
  document.getElementById('popupHeaderArrow').style.height = "14px";
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
    transScrolliphone = new iScroll("videoTransContent");
  setUnSetVideoSrc(false);
}

//Start HRB: Added function to show certificate for mLearning courses.
function showmLearningCertificate() {
    if (isIphoneDevice) {
        parent.frames.frame_a.document.getElementById("certificatemain").childNodes.item(1).className = 'glossarybookmarklabel_template';
        parent.frames.frame_a.document.getElementById("certificateRowArrow").style.display = "";
        parent.frames.frame_a.document.getElementById("certificatemain").addEventListener('click', function() { ShowCertificate() }, false);
    }
    else {
        parent.frames.frame_a.document.getElementById("certificatemain").childNodes.item(1).className = 'subChapterLabel_template';
        parent.frames.frame_a.document.getElementById("certificateRowArrow").style.display = "";
        parent.frames.frame_a.document.getElementById("certificatemain").addEventListener('click', function() { ShowCertificate() }, false);
    }
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
                elements[i].style.overflow = 'hidden';
                elements[i].removeAttribute('id');
                elements[i].setAttribute('id', currentDivId + "_question");

                var newQuestionDiv = document.createElement('div');
                newQuestionDiv.id = "question";

                newQuestionDiv.style.width = elements[i].width;
                newQuestionDiv.innerHTML = questionInnerHTML;
                elements[i].appendChild(newQuestionDiv);
        questionScroll=new iScroll("question",{abjustmentHeight:20});
                if (isIphoneDevice) {
                    var justQuestionNavigate = new navigate("question");
                }
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

//Start HRB: Added to search on return key of IPhone and IPad. 
function searchOnEnterKey(e) {

    /*if(e!=null && e.charCode==13) 
    {
    if(isIphoneDevice)
    {
    DoSearchData();
    }
    else
    {
    callSearchFns();
    }
    }*/
    if (e != null && e.charCode == 13) {
        searchStr = document.getElementById("searchText").value;
        if (isIphoneDevice) {
            DoSearchData();
        }
        else {
            callSearchFns();
        }
    } else {
        searchStr = "";
        if (isIphoneDevice) {
            document.getElementById("searchItems").innerHTML = "";
        }
        else {
            document.getElementById("searchL1").innerHTML = "";
        }

    }

}
//End HRB: Added to search on return key of IPhone and IPad. 

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
    showIPhonePopup('', 'Help functionality is in progress.');
}
//End HRB: Added to show Help Menu for mLearning courses.

//Start HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed
function mLearningUpdateProgressData() {
    document.progress.Mode(mode);
    fnSaveTestQuestionStudyQuestionResponse();
    document.progress.Update();

    //update the LMS database for online player
    //added isMobileUserAgent condition only to test course on OLP 
    if (document.progress.OnlineUser) {
        mLearningCommitProgressInfo();
    }

}
//End HRB: Added for mLearning Courses. Setting suspend data, session time and lesson location when course is passed


function removeVideoControl() {
    try
  {
    var videoDiv=document.getElementById("divVideo");
    if(videoDiv){
      var parent=videoDiv.parentNode;
      parent.removeChild(videoDiv);
      parent.style.display="none";
    }
    var audioDiv=document.getElementById("divAudioMLearning");
    if(audioDiv){
      var parent=audioDiv.parentNode;
      parent.removeChild(audioDiv);
      
    }
  }
  catch(err){
  }
}
function playAudioFile()
{
  if(event)event.stopPropagation();
  var audioControl=document.getElementById("divAudioMLearning").childNodes;
  for(var audioCCnt=0;audioCCnt<audioControl.length;audioCCnt++){
    
    if(audioControl[audioCCnt]){
      if(audioControl[audioCCnt].nodeName=="AUDIO"){
        audioControl[audioCCnt].play();
        document.getElementById("divAudioMLearningPlay").removeAttribute('onclick');
          document.getElementById("divAudioMLearningPlay").className+=" played";
        break;
      }
      if(audioControl[audioCCnt].nodeName=="IFRAME"){
        var au=audioControl[audioCCnt].contentDocument.getElementsByTagName("audio");
        if(au.length>0)
        {
          au[0].play();
          document.getElementById("divAudioMLearningPlay").removeAttribute('onclick');
          document.getElementById("divAudioMLearningPlay").className+=" played";
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
function setUnSetVideoSrc(setSrc)
{
  var videoDiv=document.getElementById("divVideo");
  if(videoDiv)
  {
    var iframeSrc=document.getElementById('videoIFrameSrc').value;
    var videoIframe=videoDiv.childNodes[3];
    if(setSrc)
      videoIframe.src=iframeSrc;
    else
      videoIframe.src='';
    //var navigateOnVideo=new navigate("divVideo");
    
  }
}

//HRB Start: Added to reset first and last page of CurrentChapter when going to search result from confirmation page. 
function resetFirstLastPage(){
  var tmpPageLocation = parent.frames.frame_b.location.toString().toLowerCase();
  tmpPageLocation = tmpPageLocation.substring(tmpPageLocation.lastIndexOf('/')+1)
  if(tmpPageLocation == 'confirmation_page.htm'){
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
function ulreveal(temp_item, rel_pos,even_odd,alignment,shared,state,total_item,bullet_spacing,popup_width,popup_height) {
  if(popup_width == null || popup_width==0)
    popup_width= 250;
  if(popup_height == null || popup_height == 0)
    popup_height = 140;
  
  var buffer_width=25;
  var divsrc = 'li-info_'+temp_item;
  var temparr= temp_item.split('_');
  var panelDivLeft = document.getElementById("content").getElementsByTagName("div")[0].offsetLeft;
  var panelDivWidth = document.getElementById("content").getElementsByTagName("div")[0].offsetWidth;
  var bullet_spacing = 0;
  
  if(bullet_spacing != null || bullet_spacing != 0) {
    bullet_spacing = (bullet_spacing-document.getElementById(rel_pos).offsetHeight)/2;
  }
  
  if(shared=='yes') {
    //HRB: For shared area
    
    var divpopup='reveal-popupL'+temparr[0];
    
    document.getElementById(divpopup).innerHTML= document.getElementById(divsrc).innerHTML;
    var temp =document.getElementById(divpopup).innerHTML;
    document.getElementById('reveal-popup'+temparr[0]).style.display="";
    
    var objPopUpL1= document.getElementById(divpopup);
    var objPopUpL= document.getElementById('reveal-popup'+temparr[0]);
        objPopUpL1.style.overflowX = "";
        objPopUpL1.style.overflowY = "";
    
    objPopUpL.style.width = popup_width;
        objPopUpL.style.height = popup_height;
        objPopUpL1.style.width = popup_width;
    if(!isIE) {
            objPopUpL1.style.width = popup_width-11;
            document.getElementById("reveal-popupTitle"+temparr[0]).style.width = popup_width-7;
        }

        //HRB: If height exceeds then give scroll
        if(parseInt(objPopUpL1.clientHeight) > popup_height-25) {
            objPopUpL1.style.height = popup_height-25;
            objPopUpL1.style.overflowY = "auto";
        }
        objPopUpL.style.width = objPopUpL1.offsetWidth;
        objPopUpL.style.height = objPopUpL1.offsetHeight;
     
        if(!isIE) {
            objPopUpL.style.height = 'auto';
            objPopUpL1.style.height = 'auto';
            objPopUpL1.style.overflow = 'auto';
      objPopUpL.style.maxHeight = popup_height + document.getElementById("reveal-popupTitle"+temparr[0]).offsetHeight;
      objPopUpL1.style.maxHeight = popup_height - document.getElementById("reveal-popupTitle"+temparr[0]).offsetHeight;
        }
    
    if(alignment=='vertical') {
      if(even_odd =='even') {
        
        objPopUpL.style.top = document.getElementById(rel_pos).offsetTop+(document.getElementById(rel_pos).offsetHeight/2)-(objPopUpL.offsetHeight/4)-bullet_spacing;
      }
      else {
        objPopUpL.style.top = document.getElementById(rel_pos).offsetTop+(document.getElementById(rel_pos).offsetHeight/2)-(objPopUpL.offsetHeight/2)-bullet_spacing;
      }
      objPopUpL.style.left = document.getElementById("content").getElementsByTagName("div")[0].offsetLeft+document.getElementById(rel_pos).offsetLeft+document.getElementById(rel_pos).offsetWidth+buffer_width;
    }
    else {
      objPopUpL.style.top = document.getElementById("content").getElementsByTagName("div")[0].offsetTop+document.getElementById(rel_pos).offsetTop+document.getElementById(rel_pos).offsetHeight+buffer_width;
      if(even_odd =='even') {
        objPopUpL.style.left = document.getElementById(rel_pos).offsetLeft+(document.getElementById(rel_pos).offsetWidth/2)-(objPopUpL.offsetWidth/4);
      }
      else {
        objPopUpL.style.left = document.getElementById(rel_pos).offsetLeft+(document.getElementById(rel_pos).offsetWidth/2)-(objPopUpL.offsetWidth/2);
      }
      
      if(parseInt(objPopUpL.style.left) < parseInt(panelDivLeft)) {
        objPopUpL.style.left = panelDivLeft;
      }
      
      if((parseInt(objPopUpL.style.left)+popup_width) > (parseInt(panelDivLeft)+parseInt(panelDivWidth))) {
        objPopUpL.style.left = parseInt(objPopUpL.style.left) - (parseInt(objPopUpL.style.left)+popup_width) - (parseInt(panelDivLeft)+parseInt(panelDivWidth));
      }
    }
  }
  else {
    //HRB: For non-shared area
  
    var divpopup='li-popupL'+temp_item;
    
    document.getElementById(divsrc).style.display="";
    var objPopUpL1= document.getElementById(divpopup);
    var objPopUpL= document.getElementById(divsrc);
        objPopUpL1.style.overflowX = "";
        objPopUpL1.style.overflowY = "";
    
    objPopUpL.style.width = popup_width;
        objPopUpL.style.height = popup_height;
        objPopUpL1.style.width = popup_width;
    
     if(!isIE) {
            objPopUpL1.style.width = popup_width-11;
            document.getElementById("li-popupTitle"+temp_item).style.width = popup_width-7;
        }

         //hrb: if height exceed  then give scroll
        if(parseInt(objPopUpL1.clientHeight) > popup_height-25) {
            objPopUpL1.style.height = popup_height-25;
            objPopUpL1.style.overflowY = "auto";
        }
        objPopUpL.style.width = objPopUpL1.offsetWidth;
        objPopUpL.style.height = objPopUpL1.offsetHeight;
     
        if(!isIE) {
            objPopUpL.style.height = 'auto';
            objPopUpL1.style.height = 'auto';
            objPopUpL1.style.overflow = 'auto';
      objPopUpL.style.maxHeight = popup_height + document.getElementById("li-popupTitle"+temp_item).offsetHeight;
      objPopUpL1.style.maxHeight = popup_height - document.getElementById("li-popupTitle"+temp_item).offsetHeight;
        }
    
    if (alignment=='vertical') {
      objPopUpL.style.top = document.getElementById(rel_pos).offsetTop+(document.getElementById(rel_pos).offsetHeight/2)-(objPopUpL.offsetHeight/2)-bullet_spacing;
      objPopUpL.style.left = document.getElementById("content").getElementsByTagName("div")[0].offsetLeft+document.getElementById(rel_pos).offsetLeft+document.getElementById(rel_pos).offsetWidth+buffer_width;
    }
    else {
      objPopUpL.style.top = document.getElementById("content").getElementsByTagName("div")[0].offsetTop+document.getElementById(rel_pos).offsetTop+document.getElementById(rel_pos).offsetHeight+buffer_width;
      objPopUpL.style.left = document.getElementById(rel_pos).offsetLeft+(document.getElementById(rel_pos).offsetWidth/2)-(objPopUpL.offsetWidth/2);
      
      if(parseInt(objPopUpL.style.left) < parseInt(panelDivLeft)) {
        objPopUpL.style.left = panelDivLeft;
      }
      
      if((parseInt(objPopUpL.style.left)+popup_width) > (parseInt(panelDivLeft)+parseInt(panelDivWidth))) {
        objPopUpL.style.left = parseInt(objPopUpL.style.left) - ((parseInt(objPopUpL.style.left)+popup_width) - (parseInt(panelDivLeft)+parseInt(panelDivWidth)));
      }
    }
  } 
  togglestate(state,shared,temp_item,total_item,'false');
}

//HRB: Closing popup using x button on popup
function togglestate(state,shared,temp_item,total_item,xflag) {
  if (xflag=='true'&&shared=='yes') {
    for(var i=1;i<=total_item;i++) {
      if(document.getElementById('bullet'+temp_item+i).onOff =='on') {
        temp_item=temp_item+i;
        break;
      }
    }
  }
  var temparr= temp_item.split('_');
  var divsrc = 'li-info_'+temp_item;
  
  if (state=='on') {
    document.getElementById("bullet"+temp_item).onOff= 'off';
    if(shared =='yes') {  
      document.getElementById('reveal-popup'+temparr[0]).style.display="none";
    }
    else {
      document.getElementById(divsrc).style.display="none";
      
    }
    
    //HRB; Change image
    var tempSrc = document.getElementById('bullet'+temp_item).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet'+temp_item).src = tempMostSrc + '_off.gif';
  }
  else {  
    //HRB: Reseting all the other images to off
    
    if(shared =='yes') {
      for(var cnt=1;cnt<=total_item;cnt++) {
        document.getElementById('bullet'+temparr[0]+'_'+cnt).onOff ='off';
        var tempSrc = document.getElementById('bullet'+temparr[0]+'_'+cnt).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet'+temparr[0]+'_'+cnt).src = tempMostSrc + '_off.gif';
      }
    }
    
    //HRB: Change image
    document.getElementById("bullet"+temp_item).onOff= 'on';
    var tempSrc = document.getElementById('bullet'+temp_item).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet'+temp_item).src = tempMostSrc + '_on.gif';
  }
}

function onfocuselement(ele) {
  if(chk508Compliance()) {
    ele.style.borderColor='yellow';
  }
}

function onblurelement(ele) {
  if(chk508Compliance()) {
    ele.style.borderColor='transparent';
  }
}


function onfocusoutline(ele) {
  if(chk508Compliance()) {
    ele.style.borderTopColor='yellow';
    ele.style.borderLeftColor='yellow';
    ele.style.borderRightColor='yellow';
    ele.style.borderBottom='3px solid yellow';
  }
}

function onbluroutline(ele) {
  if(chk508Compliance()) {
    ele.style.borderTopColor='transparent';
    ele.style.borderLeftColor='transparent';
    ele.style.borderRightColor='transparent';
    ele.style.borderBottom= '3px solid #E5F2F8';
  }
}

function keyShortcuts(e) {
  if(chk508Compliance()) {
    //alt + N
    if(e.altKey && e.keyCode==78) {
      if(document.getElementById('NextButton').style.display!='none'){
        close508Popups();
        document.getElementById('NextButton').getElementsByTagName('img')[0].focus();
      }
    }
    //alt + P
    else if(e.altKey && e.keyCode==80) {
      if(document.getElementById('PrevButton').style.display!='none'){
        close508Popups();
        document.getElementById('PrevButton').getElementsByTagName('img')[0].focus();
      }
    }
    //alt + H
    else if(e.altKey && e.keyCode==72){
      close508Popups();
      document.getElementById('helpbuttonL').getElementsByTagName('img')[0].focus();
      }
    //alt + O
    else if(e.altKey && e.keyCode==79) { 
      close508Popups();
      if(document.getElementById('courseOutlineDiv').style.display== 'none')
        document.getElementById('out1').focus();
      else
        document.getElementById('in1').focus();
    }
    //alt + G
    else if(e.altKey && e.keyCode==71) {
      close508Popups();
      document.getElementById('glossbuttonL').getElementsByTagName('img')[0].focus();
      }
    //alt + I
    else if(e.altKey && e.keyCode==73) {
      close508Popups();
      document.getElementById('printbuttonL').getElementsByTagName('img')[0].focus();
      }
    //alt + X
    else if(e.altKey && e.keyCode==88) {
      close508Popups();
      document.getElementById('quitbuttonL').getElementsByTagName('img')[0].focus();
      }
    //alt + S
    else if(e.altKey && e.keyCode==83) {
      close508Popups();
      setTimeout(function(){document.getElementById('searchbuttonL').getElementsByTagName('img')[0].focus()},'10');
      }
    //alt + B
    else if(e.altKey && e.keyCode==66) {
      close508Popups();
      document.getElementById('bookmarkbuttonL').getElementsByTagName('img')[0].focus();
      }
    //alt + R
    else if(e.altKey && e.keyCode==82) {
      close508Popups();
      document.getElementById('resourcesbuttonL').getElementsByTagName('img')[0].focus();
      }
    //alt + T
    else if(e.altKey && e.keyCode==84) {
      if(document.getElementById('transcriptbuttonL').style.display!='none'){
        close508Popups();
        document.getElementById('transcriptbuttonL').getElementsByTagName('img')[0].focus();
      }
    } 
    //alt + C
    else if(e.altKey && e.keyCode==67) {
      if(document.getElementById('certificatebuttonL').style.display!='none'){
        close508Popups();
        document.getElementById('certificatebuttonL').getElementsByTagName('img')[0].focus();
      }
    }
    //alt + M
    else if(e.altKey && e.keyCode==77) {
      if(document.getElementById('audiodiv').style.display!='none'){
        document.getElementById('audiodiv').getElementsByTagName('img')[0].onclick();
      }
    }
    //alt + Page Down
    else if(e.altKey && e.keyCode== 34) {
      if(document.getElementById('question') && document.getElementById('question').getElementsByTagName('div')[0].style.borderColor=='yellow')
         document.getElementById('question').scrollTop += 10;
      if(document.getElementById('popupL')  && document.getElementById('popupL1').style.borderColor=='yellow')
         document.getElementById('popupL1').scrollTop += 10;
      if(document.getElementById('transcriptpopupL').style.visibility=='visible' && document.getElementById('transcriptpopupL1').style.borderColor=='yellow')
         document.getElementById('transcriptpopupL1').scrollTop += 10;   
      if(document.getElementById('authorBioPopUpL').style.visibility!= 'hidden' && document.getElementById('authorBioPopUpL1').style.borderColor=='yellow')
         document.getElementById('authorBioPopUpL1').scrollTop += 10;
      if(document.getElementById('adiv') && document.getElementById('adiv').style.borderColor=='yellow')
         document.getElementById('adiv').scrollTop += 10;
      if(document.getElementById('searchpopupL').style.visibility!='hidden' && document.getElementById('searchpopupL1').style.borderColor=='yellow')
         document.getElementById('searchpopupL1').scrollTop += 10;
    }
    //alt + Page Up
    else if(e.altKey && e.keyCode== 33) {
      if(document.getElementById('question') && document.getElementById('question').getElementsByTagName('div')[0].style.borderColor=='yellow' )
        document.getElementById('question').scrollTop -= 10;
      if(document.getElementById('popupL') && document.getElementById('popupL1').style.borderColor=='yellow')
        document.getElementById('popupL1').scrollTop -= 10;
      if(document.getElementById('transcriptpopupL').style.visibility=='visible' && document.getElementById('transcriptpopupL1').style.borderColor=='yellow')
         document.getElementById('transcriptpopupL1').scrollTop -= 10;
      if(document.getElementById('authorBioPopUpL').style.visibility!='hidden' && document.getElementById('authorBioPopUpL1').style.borderColor=='yellow')
         document.getElementById('authorBioPopUpL1').scrollTop -= 10;
      if(document.getElementById('adiv') && document.getElementById('adiv').style.borderColor=='yellow')
         document.getElementById('adiv').scrollTop -= 10;
      if(document.getElementById('searchpopupL').style.visibility!='hidden' && document.getElementById('searchpopupL1').style.borderColor=='yellow')
         document.getElementById('searchpopupL1').scrollTop -= 10;
    }
  }
}

function chkKeyPress(e) {
  if(chk508Compliance()) {
    if(window.event) {
      if(window.event.shiftKey && window.event.keyCode==9)
        isshiftortab="shifttab";
      else if(window.event.keyCode==9)
        isshiftortab="tab";
      else
        isshiftortab="";
    }
    else {
      if(e.shiftKey && e.keyCode==9)
        isshiftortab="shifttab";
      else if(e.keyCode==9)
        isshiftortab="tab";
      else
        isshiftortab="";
    }
  }
  else {
    isshiftortab="";
  }
}

function chkEnterKey(e) {
  if(chk508Compliance()) {
    if(window.event) {
      if(window.event.keyCode == 13 || window.event.keyCode == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      if(e.which == 1 || e.keyCode == 13) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  else {
    return false;
  }
}

function chkShiftTabPress(e,eleName) {
  if(chk508Compliance()) {
    if(eleName.toLowerCase() == isshiftortab) {
      isshiftortab="";
      return true;
    }
    else {
      isshiftortab="";
      return false;
    }
  }
  else {
    return false;
  }
}

function chkexitstat() {
  if(chk508Compliance()) {
    if(document.getElementById("searchbuttonLD").style.display=="none" && document.getElementById("glossbuttonLD").style.display=="none" && document.getElementById("resourcesbuttonLD").style.display== "none"&& document.getElementById("bookmarkbuttonLD").style.display=="none"&& document.getElementById("transcriptbuttonLD").style.display == "none"&& document.getElementById("helpbuttonLD").style.display=="none"&&document.getElementById("printbuttonLD").style.display=="none"&&document.getElementById("certificatebuttonLD").style.display=="none"&&document.getElementById("quitbuttonLD").style.display=="none") {
      return true;
    }
    else {
      return false;
    }
  }
}

function chk508Compliance() {
  if(!isMobileUserAgent && is508Course && (!document.progress.OnlineUser || (!g_isOLP && is508User && document.progress.OnlineUser))) {
    return true;
  }
  else {
    return false;
  }
}

function close508Popups(){
  if(VisibleMenu == "printL"){
    Menu('printL',printL.clientWidth,200,0,0);VisibleMenu=''
  }
  if(VisibleMenu=="glossL"){
    Menu('glossL',glossL.clientWidth,200,0,0);VisibleMenu='';
  }
  if(VisibleMenu=="resourcesL"){
    Menu('resourcesL',document.getElementById('glossL').clientWidth,200,0,0);VisibleMenu='';
  }
  if(VisibleMenu=="helpL"){
    Menu('helpL',helpL.clientWidth,200,0,0);VisibleMenu='';
  }
  if(VisibleMenu=="bookmarkL"){
    Menu('bookmarkL',document.getElementById('bookmarkL1').clientWidth,200,0,0);VisibleMenu='';
  }
  if(document.getElementById('courseOutlineDiv').style.display != 'none'){
    OutlineHide(0); document.getElementById('out1').style.display = '';document.getElementById('in1').style.display='none'; Collapse();document.getElementById('courseOutlineDiv').style.display='none';
  }
  if(document.getElementById('OuterBlock').style.visibility != 'hidden') {
    fnCloseSearchBox();VisibleMenu='';
  }
  if(document.getElementById('authorBioPopUpL').style.visibility != 'hidden') {
    document.getElementById('authorBioPopUpL').style.visibility = 'hidden';
  }
  if(document.getElementById('transcriptpopupL').style.visibility != 'hidden') {
    CloseTranscriptDiv();VisibleMenu='';
  }
  if(document.getElementById('CertificatepopupL').style.visibility != 'hidden') {
    CloseCertificateDiv();VisibleMenu='';
  }
  if(document.getElementById('responser') && document.getElementById('responser').style.visibility != 'hidden') {
    document.getElementById('responser').style.visibility = 'hidden';
  }
  if(document.getElementById('responsew') && document.getElementById('responsew').style.visibility != 'hidden') {
    document.getElementById('responsew').style.visibility = 'hidden';
  }
  
  if(document.getElementById('testPopUpL').style.visibility != 'hidden') {
    document.getElementById('testPopUpLx').onmousedown();
    if(outlineflag==1){
      if (document.getElementById('outlineL').style.pixelLeft > 200)
        OutlineShowHide();
      if(!isIE && outlineflag){
        OutlineShowHide();
      }
      outlineflag=0;
    }
  }
}

function removeTabIndex(doc) {
  var arrElements = new Array('div', 'span', 'img', 'a', 'input', 'select', 'p', 'h2', 'h4');
  for(var cntEle=0; cntEle<arrElements.length;++cntEle){
    var arrCurrentElement = doc.getElementsByTagName(arrElements[cntEle]);
    for(var cntCurEle=0; cntCurEle<arrCurrentElement.length;++cntCurEle){ 
      if(arrCurrentElement[cntCurEle].tabIndex)
        arrCurrentElement[cntCurEle].removeAttribute("tabIndex");
    }
  }
  
  var arrImgElement = doc.getElementsByTagName('img');
  var altTxt="";
  for(var cntCurEle=0; cntCurEle<arrImgElement.length;++cntCurEle){
    if(arrImgElement[cntCurEle].alt){
      altTxt= arrImgElement[cntCurEle].alt.toLowerCase();
      var altTxtPattern=new RegExp("press enter");
      if(altTxtPattern.test(altTxt))
        arrImgElement[cntCurEle].removeAttribute("alt");
    }
  }
}

function setSelectedVolume(volume) {
  try {
    var myFlvPlayerObj = isIE ? document.all.flvPlayer : document.flvPlayer;
    myFlvPlayerObj.SetVariable("CommandVideo", volume);
  }
  catch(err) {}
}

var initialTabPress = true;
document.onfocus=function(){if(!isIE && !document.progress.OnlineUser && initialTabPress){initialTabPress=false;moveFocusToBody();}};
function moveFocusToBody() {
  if(document.getElementById('prelimpagediv') && document.getElementById('prelimpagediv').tabIndex > 0) {
    document.getElementById('prelimpagediv').focus();
  }
  else if(document.getElementById('studyQuestionDiv') &&  document.getElementById('studyQuestionDiv').getElementsByTagName('h1')[0].tabIndex > 0) {
    document.getElementById('studyQuestionDiv').getElementsByTagName('h1')[0].focus();
  }
  else if(document.getElementById('showQuestionNumber').style.visibility!='hidden' && document.getElementById('showQuestionNumber').getElementsByTagName('h1')[0].tabIndex > 0 ) {
    document.getElementById('showQuestionNumber').getElementsByTagName('h1')[0].focus();
  }
  else {
    var focusDiv = document.getElementById('content').getElementsByTagName('div');
    var divCnt=0;
    for(divCnt=0; divCnt<focusDiv.length;++divCnt) {
      if(focusDiv[divCnt].parentNode.id=='content' && focusDiv[divCnt].tabIndex && focusDiv[divCnt].tabIndex>0) {
        focusDiv[divCnt].focus();
        break;
      }
    }
    if(divCnt == focusDiv.length)
      document.getElementById('PrevButton').getElementsByTagName('img')[0].focus();
  } 
}

function ulhidereveal(state,shared,temp_item,total_item) {
  if(shared=='no'){
    if(document.getElementById('li-info_'+temp_item).style.display=='none'){
      document.getElementById('li-info_'+temp_item).style.display='';
    }
    else{
      document.getElementById('li-info_'+temp_item).style.display='none';
    }
  }
  else if(shared =='yes' ){
       var temparr= temp_item.split('_');
       var divpopup='ulreveal-popup'+temparr[0];
      if(state!='on'){
        if(document.getElementById(divpopup)){
          document.getElementById(divpopup).innerHTML = document.getElementById('li-info_'+temp_item).innerHTML ;
          document.getElementById(divpopup).style.display=''
        }
      }
      else{
        document.getElementById(divpopup).style.display='none';
      } 
  }
  switchbulletimg(state,shared,temp_item,total_item);
}

function switchbulletimg(state,shared,temp_item,total_item) {
  var temparr= temp_item.split('_');
  if (state=='on') {
    document.getElementById("bullet"+temp_item).onOff= 'off';
    //HRB; Change image
    var tempSrc = document.getElementById('bullet'+temp_item).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet'+temp_item).src = tempMostSrc + '_off.gif';
  }
  else {  
    //HRB: Reseting all the other images to off
    
    if(shared =='yes') {
      for(var cnt=1;cnt<=total_item;cnt++) {
        document.getElementById('bullet'+temparr[0]+'_'+cnt).onOff ='off';
        var tempSrc = document.getElementById('bullet'+temparr[0]+'_'+cnt).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet'+temparr[0]+'_'+cnt).src = tempMostSrc + '_off.gif';
      }
    }
    
    //HRB: Change image
    document.getElementById("bullet"+temp_item).onOff= 'on';
    var tempSrc = document.getElementById('bullet'+temp_item).src;
        var tempMostSrc = tempSrc.substring(0, tempSrc.lastIndexOf('_'));
        document.getElementById('bullet'+temp_item).src = tempMostSrc + '_on.gif';
  }
}

function hide508CourseElements() {
  var isLocalLaunch = false;
  var is508UserLaunch = false;
  var basePath= window.document.location.href;
  if(basePath.indexOf("file:/") == -1) {
    is508UserLaunch = getSubscription().is508User;
  }
  else {
    isLocalLaunch = true;
  }
  if(is508Course && isIE && (isLocalLaunch || is508UserLaunch)) {
    document.getElementById('courseOutlineDiv').style.display='none';
    document.getElementById("outlineL").style.display='none';
    document.getElementById("divPageTitle").style.display='none';
    document.getElementById("divText").style.display='none';
    document.getElementById("buttons").style.display='none';
    document.getElementById("bottommenubar").style.display='none';
    document.getElementById("submittest").style.display='none';
    document.getElementById("selQuestion").style.display='none';
  }
}

function show508CourseElements() {
  if(isIE && chk508Compliance()) {
      document.getElementById("coursetitle").style.display='';
      document.getElementById("outlineL").style.display='';
      document.getElementById("divPageTitle").style.display='';
      document.getElementById("divText").style.display='';
      document.getElementById("buttons").style.display='';
      document.getElementById("bottommenubar").style.display='';
      document.getElementById("submittest").style.display='';
      document.getElementById("selQuestion").style.display='';
      if(document.getElementById("submitAnswerEnable"))
        document.getElementById("submitAnswerEnable").style.display='';
      if(document.getElementById("question"))
        document.getElementById("question").style.display='';
  }
}

var gbl_panels = ""; 
// adjusting panel height and scroll
function nAdjustPanelOverflow()
{   
  var panel_apw,panel_lp, panel_ls, panel_hp, panel_hs, panel_gp, panel_gt, panel_mp, panel_ms, panel_gs, panel_gpw, panel_jp, panel_js, panel_kp, panel_ks, panel_np, panel_ns, panel_nt, panel_op, panel_os, panel_ot = "";

  gbl_panels= document.getElementById('content').getElementsByTagName('div');
  
  if(getPanelForName('panelapw'))
  {
    panel_apw= getPanelForName('panelapw');
    if(panel_apw)
    {
      panel_apw.style.height= 493;
    }
  }
  else if(getPanelForName('panellp') || getPanelForName('panells'))
  {
    panel_lp= getPanelForName('panellp');
    panel_ls= getPanelForName('panells'); 
    
    if(panel_lp)
    {
      if(panel_ls)
      {
        panel_ls.style.height= 210;
        panel_lp.style.height= 240;
        
        //if(panel_ls.scrollHeight > panel_ls.offsetHeight)
        //  panel_ls.style.overflowY= "auto";
      }
      else {
        panel_lp.style.height = 493;
        
        if(panel_lp.scrollHeight > 493)
          panel_lp.style.overflowY="auto";
      }
    }
  
  }
  else if(getPanelForName('panelhp') || getPanelForName('panelhs'))
  {
    panel_hp= getPanelForName('panelhp');
    panel_hs= getPanelForName('panelhs');
    
    if(panel_hp)  
    {
      panel_hp.style.height = 493;
      
      if(panel_hp.scrollHeight > 493)
        panel_hp.style.overflowY="auto";
    }
    
    if(panel_hs)  
    {
      panel_hs.style.height = 493;
      
      if(panel_hs.scrollHeight > 493)
        panel_hs.style.overflowY="auto";
    }
    
  }
  else if( getPanelForName('panelgs') || getPanelForName('panelgp') || getPanelForName('panelgt') || getPanelForName('panelgpw'))
  {
    panel_gs= getPanelForName('panelgs');
    panel_gp= getPanelForName('panelgp');
    panel_gt= getPanelForName('panelgt');
    panel_gpw= getPanelForName('panelgpw');
      
    if(panel_gs)  
    {
      panel_gs.style.height = 493;
      
      if(panel_gs.scrollHeight > 493)
        panel_gs.style.overflowY="auto";
    }
    if(panel_gp)  
    {
      panel_gp.style.height = 493;
      
      if(panel_gp.scrollHeight > 493)
        panel_gp.style.overflowY="auto";
    }
    
    if(panel_gt)  
    {
      panel_gt.style.height = 493;
      
      if(panel_gt.scrollHeight > 493)
        panel_gt.style.overflowY="auto";
    }
    
    if(panel_gpw) 
    {
      panel_gpw.style.height = 493;
      if(panel_gpw.scrollHeight > 493)
        panel_gpw.style.overflowY="auto";
    }
  }
  else if(getPanelForName('panelmp') || getPanelForName('panelms'))
  {
    panel_mp= getPanelForName('panelmp');
    panel_ms= getPanelForName('panelms')

    if(panel_mp)  
    {
      panel_mp.style.height = 493;
      
      if(panel_mp.scrollHeight > 493)
        panel_mp.style.overflowY="auto";
    }
    if(panel_ms)  
    {
      panel_ms.style.height = 493;
      
      if(panel_ms.scrollHeight > 493)
        panel_ms.style.overflowY="auto";
    }
  }
  else if(getPanelForName('paneljp')|| getPanelForName('paneljs'))
  {
    panel_jp= getPanelForName('paneljp');
    panel_js= getPanelForName('paneljs');
      
    if(panel_jp)
    {
      if(panel_js)
      {
        panel_js.style.height= 300;
        panel_jp.style.height= 145;
        
        //if(panel_js.scrollHeight > panel_js.offsetHeight)
        //  panel_js.style.overflowY="auto";
      }
      else{
        panel_jp.style.height= 493;
      
        if(panel_jp.scrollHeight > 493)
          panel_jp.style.overflowY="auto";
      }
    }
  }
  else if(getPanelForName('panelkp') || getPanelForName('panelks') )
  {
    panel_kp= getPanelForName('panelkp');
    panel_ks= getPanelForName('panelks');
      
    if(panel_kp)
    {
      if(panel_ks)
      {
        panel_ks.style.height= 120;
        panel_kp.style.height= 320;
        
      //  if(panel_ks.scrollHeight > panel_ks.offsetHeight)
      //    panel_ks.style.overflowY="auto";
      }
      else{
        panel_kp.style.height= 493;
      
        if(panel_kp.scrollHeight > 493)
          panel_kp.style.overflowY="auto";
      }
    }
  }
  else if(getPanelForName('panelnp') || getPanelForName('panelns') || getPanelForName('panelnt'))
  {
    panel_np= getPanelForName('panelnp');   
    panel_ns= getPanelForName('panelns');
    panel_nt= getPanelForName('panelnt');
      
    if(panel_np)
    {
      if(panel_ns || panel_nt)
      {
        panel_np.style.height= 140;
        
        if(panel_ns)
        {
          panel_ns.style.height= 125;
          
          //if(panel_ns.scrollHeight > panel_ns.offsetHeight)
          //  panel_ns.style.overflowY="auto";
        }
        
        if(panel_nt)
        {
          panel_nt.style.height= 125;
          
          //if(panel_nt.scrollHeight > panel_nt.offsetHeight)
          //  panel_nt.style.overflowY="auto";
        }
      }
      else{
        panel_np.style.height= 493;
      
        if(panel_np.scrollHeight > 493)
          panel_np.style.overflowY="auto";
      }
      
    } 
  }
  else if(getPanelForName('panelop') || getPanelForName('panelos') || getPanelForName('panelot')) 
  {
    panel_op= getPanelForName('panelop'); 
    panel_os= getPanelForName('panelos');
    panel_ot= getPanelForName('panelot');
      
    if(panel_op)
    {
      if(panel_ot){
        panel_op.style.height= 355;
      }
      else{
        panel_op.style.height= 493;
            
        if(panel_op.scrollHeight > 493)
          panel_op.style.overflowY="auto";
      }
    }
    
    if(panel_os)
    {
      if(panel_ot){
        panel_os.style.height= 355;
      }else
      {
        panel_os.style.height= 493;
      
        if(panel_os.scrollHeight > 493)
          panel_os.style.overflowY="auto";
      }
      
    }
    
    if(panel_ot)
    {
      panel_ot.style.height= 120;
      
      //if(panel_ot.scrollHeight > panel_ot.offsetHeight)
      //  panel_ot.style.overflowY="auto";
    }   
  }
}

function getPanelForName(name)
{
var panel=null;

for(i=0;i<gbl_panels.length;i++)
{
  if(gbl_panels[i].className == name)
  {
    panel = gbl_panels[i];
    break;
  }
}

return panel;

}

function showAttemptAllFinalExamPopup() {
  if (FinalExam != EXAM_POSITION_BYCOURSE) {
        return;
  }
  
  alert(ATTEMPT_ALL_FINAL_EXAM_MSG);
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
