var referenceOutlineIds;
var referenceOutlineXMLObj;
var outLineXML;
var contentSpaceHolder;
var chapterCount=0;
var courseInstanceId_dyn;
var dynTotalChapterCount=0;
var TotalChapters = 0;
var CPLLinkXML; // var to access cplLinks.xml

// global variables for glossary
var globalGlossRefArr = {};
var globalGlossKeyArr = new Array();
var courseInstanceIdsList = new Array();
//var courseInstancesList = new Array();
var contentBasePath = "";

var tblChapterList;

var noOfAttemptedTests = new Array();
var NoOfQuestionsToDisplayArray = new Array();
TestQuestionsArray = new Array();
var arrSubChapters = new Array();

var tempTotalChapters=0;
arrSubChapters.push(4);


// HRB:  Global Array variable to hold all glossary terms of references courses's chapters
var gblArrGlossaryWords = new Array();

// Resources Array variable to hold all resources of reference courses's chapters
var gblArrResourceItems = new Array();

var resourceListArr = new Array();

var is508Compliance = getSubscription().is508User;
/*
	HRB:Function Name : addGlossaryTerm()
	Description : Dynamically adding glossary terms, of reference's course chapters, into glossary list
	Return Value : 
*/
function addGlossaryTerm() {
		
	var divGlossaryTermsList = 	document.getElementById('glossTermsListDiv');
	
	for(cntGTerm=0; cntGTerm < gblArrGlossaryWords.length; cntGTerm++) {
		var basePath = document.location.href.substring(0,document.location.href.indexOf('control.htm') - (courseInstanceId_dyn.length+1));
		var descPath = basePath + gblArrGlossaryWords[cntGTerm].descFilePath;
		
		var anchorLink = document.createElement('a');
		anchorLink.setAttribute("class","clsGlossaryLinks");
		anchorLink.setAttribute("href","javascript:O(\'"+descPath+"\')");
		anchorLink.setAttribute("title","View this term");
		anchorLink.innerHTML = gblArrGlossaryWords[cntGTerm].word;
		divGlossaryTermsList.appendChild(anchorLink);
		
		var subTag = document.createElement('sub');
		divGlossaryTermsList.appendChild(subTag);
		
		var brTag = document.createElement('br');
		divGlossaryTermsList.appendChild(brTag);
		
		/* Add glossary words in glossaryTerm Array */
		glossaryTerm[descPath] = gblArrGlossaryWords[cntGTerm].word;
	}
	
	// Sort glossary
	sortGlossryTerms();
		
}
/* HRB: End of function addGlossaryTerm() */

/*
	HRB: Function Name : addGlossaryTerm()
	Description : Dynamically adding glossary terms, of reference's course chapters, into glossary list
	Return Value : 
*/
function sortGlossryTerms() {
	var strRef="";
	var glossaryTermsListDiv = document.getElementById("glossTermsListDiv");
	var arrPageGlossTerms = glossaryTermsListDiv.getElementsByTagName('a');
	var strIndexSperator = "<!>";	// for seperating glossary term from index number
	for(var ind = 0;ind<arrPageGlossTerms.length;ind++) {
		var curTermLink = arrPageGlossTerms[ind];
		if(curTermLink != null && typeof curTermLink != "undefined" && (curTermLink.tagName == "a" || curTermLink.tagName == "A")) {
			if(typeof globalGlossRefArr[curTermLink.innerHTML] == "undefined") {
				globalGlossKeyArr.push(curTermLink.innerHTML);
				strRef = curTermLink.href.substring("javascript:O('".length,curTermLink.href.indexOf("')"))
				globalGlossRefArr[curTermLink.innerHTML] = strRef;
			}
		}
	}
	
	// Sort the key Array
	globalGlossKeyArr.sort();
	
	var glossTermsDiv = document.getElementById("glossTermsDiv");	
	
	for(iIndex = 0 ; iIndex < globalGlossKeyArr.length ; iIndex++) {		
		var glossWord = globalGlossKeyArr[iIndex];
		var strRefFile = globalGlossRefArr[globalGlossKeyArr[iIndex]];
		
		// HRB: Srart of code to Create link and add into glossTermsDiv
		
		var anchorLink = document.createElement('a');
		anchorLink.setAttribute("class","clsGlossaryLinks");
		anchorLink.setAttribute("href","javascript:O(\'"+strRefFile+"\')");
		anchorLink.setAttribute("title","View this term");
		
		if(is508Compliance) {
			anchorLink.tabIndex="24";
			anchorLink.style.border="4px solid transparent";
			anchorLink.setAttribute("onfocus","onfocuselement(this)");
			if(iIndex==0) {
			   anchorLink.setAttribute("onkeydown","chkKeyPress(event)");
			   anchorLink.setAttribute("onblur","onblurelement(this);if(chkShiftTabPress(event,\'shifttab\')){document.getElementById(\'glossLx\').focus();}");
			}
			else {
			   anchorLink.setAttribute("onblur","onblurelement(this)");
			}
			anchorLink.setAttribute("onclick","if(chkEnterKey(event)){O(\'"+strRefFile+"\');document.getElementById(\'popupLx\').srcEle=this;setTimeout(function(){document.getElementById(\'popupL1\').focus();},\'10\')}");
			anchorLink.setAttribute("onkeyup","if(chkEnterKey(event)){O(\'"+strRefFile+"\');document.getElementById(\'popupLx\').srcEle=this;setTimeout(function(){document.getElementById(\'popupL1\').focus();},\'10\')}");
		}
		
		anchorLink.innerHTML = glossWord;
		glossTermsDiv.appendChild(anchorLink);
		
		var subTag = document.createElement('sub');
		glossTermsDiv.appendChild(subTag);
		
		var brTag = document.createElement('br');
		glossTermsDiv.appendChild(brTag);		
	}
	
	// Remove glossaryTermsListDiv
	var parentGlossaryTermsListDiv = glossaryTermsListDiv.parentNode;
	parentGlossaryTermsListDiv.removeChild(glossaryTermsListDiv);
}
/* HRB: End of function sortGlossryTerms() */

/*
	HRB: Function Name : getPrintListTableRow()
	Description : creates and returns a row into print preview list table
	Return Value : 
*/
function addPrintListTableRow(chapNum,chaptTitle,printPagePath,curTable) {
	
	var curRow = curTable.insertRow(curTable.rows.length);
	
	if(checkBrowser() == 'IE') { // if Internet Explorer
		curRow.setAttribute("valign","top");		
		curRow.onmouseover = function(){ this.style.color='#75b3d5'; };
		curRow.onmouseout = function(){ this.style.color='#025A86'; };
		curRow.onmousedown = function(){ OpenNew(printPagePath); };
	}
	else {
		curRow.setAttribute("valign","top");
		curRow.setAttribute("onmouseover","this.style.color='#75b3d5'");
		curRow.setAttribute("onmouseout","this.style.color='#025A86'");
		curRow.setAttribute("onmousedown","OpenNew('"+printPagePath+"')"); // FF		
	}
		
	var curCol = curRow.insertCell(curRow.cells.length);
	var curSpan = document.createElement('span');
	curSpan.style.cursor="pointer";
	if(checkBrowser() == 'IE') { // if Internet Explorer
		curSpan.onmouseover = function(){ this.style.color='#75b3d5'; };
		curSpan.onmouseout = function(){ this.style.color='#025A86'; };
	}
	else {
		curSpan.setAttribute("onmouseover","this.style.color='#75b3d5'");
		curSpan.setAttribute("onmouseout","this.style.color='#025A86'");
	}
	curSpan.innerHTML = chapNum;
	curCol.appendChild(curSpan);
	
	curCol = curRow.insertCell(curRow.cells.length);
	curSpan = document.createElement('a');
	curSpan.style.cursor="pointer";
	if(checkBrowser() == 'IE') { // if Internet Explorer
		curSpan.onmouseover = function(){ this.style.color='#75b3d5'; };
		curSpan.onmouseout = function(){ this.style.color='#025A86'; };
	}
	else {
		curSpan.setAttribute("onmouseover","this.style.color='#75b3d5'");
		curSpan.setAttribute("onmouseout","this.style.color='#025A86'");
	}
	curCol.setAttribute("title","Go to this chapter");
	if(is508Compliance) {
		if(checkBrowser() == 'IE') {
			curSpan.tabIndex="41";
			curSpan.style.border="4px solid transparent";
			curSpan.onfocus=function(){onfocuselement(this);};
			curSpan.onblur=function(){onblurelement(this);};
			curSpan.onkeyup=function(){if(chkEnterKey(event)){OpenNew(printPagePath);}};
			curSpan.onclick=function(){if(chkEnterKey(event)){OpenNew(printPagePath);}};
		}
		else {
			curSpan.setAttribute("tabindex","41");
			curSpan.setAttribute("style","border:4px solid transparent");
			curSpan.setAttribute("onfocus","onfocuselement(this);");
			curSpan.setAttribute("onblur","onblurelement(this);");
			curSpan.setAttribute("onkeyup","if(chkEnterKey(event)){OpenNew('"+printPagePath+"')}");
			curSpan.setAttribute("onclick","if(chkEnterKey(event)){OpenNew('"+printPagePath+"')}");
		}
	}
	curSpan.innerHTML = chaptTitle;
	curCol.appendChild(curSpan);
}
	/* HRB: End of function addPrintListTableRow() */



/*
	HRB:Function Name : setPrintList()
	Description : set print menu
	Return Value : 
*/	
function setPrintList() {
	var divPrintL1 = document.getElementById('printL1');
		
	var tblChapterListTemp = divPrintL1.getElementsByTagName('table')[0];
	//HRB: Start of code to remove Document of progess row in case of final exam
	//if(tblChapterListTemp.rows.length>tblChapterListTemp.rows.length + 1)
	if(FinalExam == "bychapter") {
		//var documentRow = tblChapterListTemp.rows[tblChapterListTemp.rows.length-1].cloneNode(true);
		var glossaryRow = tblChapterListTemp.rows[tblChapterListTemp.rows.length-1].cloneNode(true);
		
		// add glossary and progrees document rows in tblChapterList
		tblChapterList.tBodies[0].appendChild(glossaryRow);
//		tblChapterList.tBodies[0].appendChild(documentRow);
	}
	else {
		var glossaryRow = tblChapterListTemp.rows[tblChapterListTemp.rows.length-1].cloneNode(true);
		// add glossary and progrees document rows in tblChapterList
		tblChapterList.tBodies[0].appendChild(glossaryRow);
	}
	//HRB: Start of code to remove Document of progess row in case of final exam
	// Delete all tblChapterListTemp rows
	while(tblChapterListTemp.rows.length > 0) {
		tblChapterListTemp.deleteRow(0);
	}
	
	// Add rows of tblChapterList into table tblChapterListTemp
	while(tblChapterList.rows.length > 0) {
		tblChapterListTemp.tBodies[0].appendChild(tblChapterList.rows[0]);
	}
}
/* HRB: End of function setPrintList() */

/*
	HRB: Function Name : setToolList()
	Description : set tool menu
	Return Value : 
*/
function setToolList() {

	var divResourcesL1 = document.getElementById('resourcesL1');
	
	for(var iCnt = 0; iCnt < gblArrResourceItems.length ; iCnt++) {
			
		var supPath = 	gblArrResourceItems[iCnt].resourcePath;
		var anchorLink = document.createElement('a');
		anchorLink.setAttribute("class","clsGlossaryLinks");
		if(isIE) {
			anchorLink.setAttribute("className","clsGlossaryLinks");
		}
		anchorLink.setAttribute("href","javascript:if(chk508Compliance){document.getElementById(\'resourcesL1\').getElementsByTagName(\'a\')[0].focus();}O(\'"+gblArrResourceItems[iCnt].resourcePath+"\')");
		anchorLink.setAttribute("title","View this document");
		anchorLink.innerHTML = gblArrResourceItems[iCnt].resourceName;
		if(is508Compliance) {
			anchorLink.tabIndex="29";
			anchorLink.style.border="4px solid transparent";
			anchorLink.onfocus=function(){onfocuselement(this);};
			anchorLink.onblur=function(){onblurelement(this);};		
		}
		divResourcesL1.appendChild(anchorLink);
		
		var subTag = document.createElement('sub');
		divResourcesL1.appendChild(subTag);
		
		var brTag = document.createElement('br');
		divResourcesL1.appendChild(brTag);	
		resourceListArr[supPath] = gblArrResourceItems[iCnt].resourceName;
	}
}
/* HRB: End of function setPrintList() */

/*
	HRB: Function Name : isFileToSearchExist()
	Description : Returns true if html file exitstis in specified reference course, returns false otherwise
	Return Value : Boolean
*/
function isFileToSearchExist(courseRefId, htmFileName) {
	
	var indexOfhtmFile = '';
	var isGlossaryFile = false;
	
	if(courseRefId == null || typeof courseRefId == 'undefined' 
		|| htmFileName == null || typeof htmFileName == 'undefined') {
			return false;
		}
	
	// Check if glossary description file
	if(htmFileName.indexOf('g/') != -1 ) {
		isGlossaryFile = true;
	}
	
	// if glossary term
	if(isGlossaryFile) {
	
		if(glossaryTerm != null && typeof glossaryTerm != 'undefined') {
			
			basePath = document.location.href.substring(0,document.location.href.indexOf('control.htm') - (courseInstanceId_dyn.length+1));
			var htmFileNameWithPath = basePath+courseRefId+'/'+htmFileName;
			
			if(glossaryTerm[htmFileName] != null && typeof glossaryTerm[htmFileName] != 'undefined'){
			// Current course glossary terms
				return true;
			}
			else if(glossaryTerm[htmFileNameWithPath] != null && typeof glossaryTerm[htmFileNameWithPath] != 'undefined') {
			// Reference course glossary terms
				return true;
			}
			
		}
		
		return false;
	}
		
	indexOfhtmFile = parseInt(htmFileName.substring(0, htmFileName.indexOf('.htm')),10) ;
	if(courseRefId == courseInstanceId_dyn && indexOfhtmFile < 4) {
		return true;
	}
		
	for(var iCnt = 0 ; iCnt < CategoryList.length; iCnt++) {
		if(CategoryList[iCnt].CategoryCode.indexOf(' ') == -1 && courseRefId == CategoryList[iCnt].courseReferenceId) {
			var intChapterFirstPage = CategoryList[iCnt].FirstQuestion;
			var intChapterLastPage = CategoryList[iCnt].LastQuestion;
			
			if(indexOfhtmFile >= intChapterFirstPage && indexOfhtmFile <= intChapterLastPage) {				
				return true;
			}
		}
			
	}
	return false;
}
/* HRB: End of function isFileToSearchExist() */

/*Return <table> node for chapter*/
function getChapterNode(chapterTitle,chapterNo) {
	chapterCount++;
	dynTotalChapterCount++;
	noOfAttemptedTests.push(0);
	var tble = document.createElement('table');
	tble.setAttribute("cellspacing","0");
	tble.setAttribute("cellpadding","0");
	tble.setAttribute("width","98%");
	tble.setAttribute("class","outlinesub"); 
	
	var curRow = tble.insertRow(tble.rows.length);
	var curCol = curRow.insertCell(curRow.cells.length);
	curCol.setAttribute("id","td"+chapterNo);
	if(checkBrowser() != 'IE') {
		curCol.setAttribute("width","4%");
	}
	else {
		curCol.setAttribute("width","2%"); // setting width for ethic courses in IE.
	}
	curCol.setAttribute("valign","top");
	curCol.setAttribute("align","right");
	curCol.setAttribute("class","outlinesub");
	
	
	curCol = curRow.insertCell(curRow.cells.length);
	curCol.setAttribute("align","right");
	if(checkBrowser() == 'IE') {
		curCol.setAttribute("className","OUTLINENUM");
		curCol.setAttribute('vAlign', 'top');

	}
	else {
		curCol.setAttribute("class","OUTLINENUM");
		curCol.setAttribute("valign","top");
	}
	
	var curImg = document.createElement('img');
	curImg.setAttribute("id","i"+chapterNo);
	curImg.setAttribute("src","common/images/expand.gif");
	//HRB: Code added for IE
	if(checkBrowser() == 'IE') {
		curImg.onmousedown = function(){ Outline("ch"+chapterNo+"",this); };// IE		
	}
	else {
		curImg.setAttribute("onmousedown","Outline('ch"+chapterNo+"',this)"); // FF
	}
	
	curCol.appendChild(curImg);
	
	curCol = curRow.insertCell(curRow.cells.length);
	curCol.setAttribute("align","center");
	if(checkBrowser() == 'IE') {
		curCol.setAttribute("width","2");
		curCol.setAttribute("className","clsStatusImg");
		curCol.setAttribute('vAlign', 'top');
	}
	else {
		curCol.setAttribute("width","11%");
		curCol.setAttribute("class","clsStatusImg");
		curCol.setAttribute("valign","top");
	}
	
	var curDiv = document.createElement('div');
	curDiv.style.paddingLeft="6px"; 
	curDiv.style.paddingRight="6px";
	
	curImg = document.createElement('img');
	
	curImg.setAttribute("id","istat"+chapterNo);
	curImg.setAttribute("src","common/images/dot_notStarted.gif");
		
	curDiv.appendChild(curImg);
	curCol.appendChild(curDiv);
		
	curCol = curRow.insertCell(curRow.cells.length);
	if(is508Compliance) {
		if(checkBrowser() == 'IE') {
			curCol.style.borderLeft="4px solid transparent";
			curCol.style.borderRight="4px solid transparent";
			curCol.style.borderTop="4px solid transparent";
		}
		else {
			curCol.setAttribute("style","border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid transparent");
		}
	}
	//HRB: Code Added for IE
	if(checkBrowser() == 'IE') {
		curCol.setAttribute("className","outline");		
		curCol.onmousedown = function(){ takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+""); };// IE
	}
	else {
		curCol.setAttribute("class","outline");
		curCol.setAttribute("onmousedown","takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+"')"); // FF		
	}
	curCol.setAttribute("title","Go to this chapter");
	curCol.style.verticalAlign ="middle";
		
	var curSpan = document.createElement('span');
	curSpan.setAttribute("id","spCh"+chapterNo);
	curSpan.style.cursor="pointer";
	if(checkBrowser() == 'IE') {
		curSpan.onmouseover = function(){ this.style.color='#75b3d5'; };
		curSpan.onmouseout = function(){ this.style.color='#000000'; };
	}
	else {
		curSpan.setAttribute("onmouseover","this.style.color='#75b3d5'");
		curSpan.setAttribute("onmouseout","this.style.color='#000000'");
	}
	
	var curSpanSub = document.createElement('span');
	curSpanSub.style.verticalAlign="top";
	curSpanSub.style.top="0px";
	curSpanSub.innerHTML = chapterNo+".&#160;&#160;";
	
	curSpan.appendChild(curSpanSub);
	
	curSpanSub = document.createElement('a');
	curSpanSub.style.verticalAlign= "top";
	curSpanSub.style.left="10px";
	curSpanSub.style.width="92%";
	curSpanSub.innerHTML = chapterTitle;
	if(is508Compliance) {
		if(checkBrowser() == 'IE') {
			curSpanSub.tabIndex="3";		
			curSpanSub.onfocus = function(){ onfocusoutline(this.parentNode.parentNode); };
			curSpanSub.onblur = function(){ onbluroutline(this.parentNode.parentNode);  };
			curSpanSub.onclick= function(){if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+""); document.getElementById('out1').focus();}};
			curSpanSub.onkeyup= function(){if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+""); document.getElementById('out1').focus();}};
		}
		else {
			curSpanSub.setAttribute("tabindex","3");
			curSpanSub.setAttribute("onfocus","onfocusoutline(this.parentNode.parentNode);");
			curSpanSub.setAttribute("onblur","onbluroutline(this.parentNode.parentNode);");
			curSpanSub.setAttribute("onclick","if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+"'); document.getElementById('out1').focus();}");
			curSpanSub.setAttribute("onkeyup","if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+"'); document.getElementById('out1').focus();}");
		}
	}
	curSpan.appendChild(curSpanSub);
	curCol.appendChild(curSpan);
	return tble;
}

/*Return <tr> node*/
function getSubChapterNode(title,bullets,chapterNo,subChapterNo,curMenuTable) {
	var isChapterTestNode=false;
	if(title!='Chapter Test') {
		chapterCount++;
	}
	else {
		isChapterTestNode = true;
	}
	var curRow = curMenuTable.insertRow(curMenuTable.rows.length);//document.createElement('tr');
	if(isChapterTestNode) {
		curRow.id = "trChTest"+chapterNo;
		
	}
	else {
		curRow.id = "trch"+chapterNo+"SubCh"+subChapterNo;
	}
	
	var curCol = curRow.insertCell(curRow.cells.length);
	//curCol.align = "right";
	
	curCol = curRow.insertCell(curRow.cells.length);
	//curCol.width = "10";
	curCol.align = "right";
	
	if(checkBrowser() == 'IE') {
		curCol.setAttribute("className","clsStatusImg");		
		curCol.setAttribute('vAlign', 'top');
	}
	else {
		curCol.setAttribute("class","clsStatusImg");
		curCol.setAttribute("valign","top");
	}
	
	var curImg = document.createElement('img');
	if(isChapterTestNode) {
		curImg.id = "istat"+chapterNo+"Test";
	}
	else {
		curImg.id = "istat"+chapterNo+bullets;
	}
	
	curImg.src = "common/images/dot_notStarted.gif";
	//curImg.setAttribute('width', '4');
	curImg.setAttribute('height', '8');
	curImg.width = "8";
	//curImg.height = "8";
	
	curCol.appendChild(curImg);
	
	curCol = curRow.insertCell(curRow.cells.length);
	curCol.style.cursor="pointer";	
	if(checkBrowser() == 'IE') {
		curCol.onmouseover = function(){ this.style.color='#75b3d5'; };	// IE
		curCol.onmouseout = function(){ this.style.color='#000000'; };
	}
	else {
		curCol.setAttribute("onmouseover","this.style.color='#75b3d5'");
		curCol.setAttribute("onmouseout","this.style.color='#000000'");	 
	}
	
	if(isChapterTestNode) {
		curCol.id = "chTest"+chapterNo;
		if(checkBrowser() == 'IE') {
			curCol.onmousedown = function(){ takeFinalExamFromOutline = false;prevMode='';St(""+chapterNo+""); };// IE
		}
		else {
			curCol.setAttribute("onmousedown","takeFinalExamFromOutline = false;prevMode='';St('"+chapterNo+"')"); // FF
		}
	}
	else {
		curCol.id = "ch"+chapterNo+"SubCh"+subChapterNo;
		if(checkBrowser() == 'IE') {
			curCol.onmousedown = function(){ takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+" "+bullets+""); };// IE
		}
		else {
			curCol.setAttribute("onmousedown","takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+" "+bullets+"')");// FF
		}
	}
	 //HRB: to reduce distance between Subchapter title and name i.e. 'A. subchapter 1'
	curCol.width = "8%"; 
	if(checkBrowser() == 'IE') {
		curCol.setAttribute("className", "clsOutlineChapterBorder");
		curCol.setAttribute('vAlign', 'top');		
	}
	else {
		curCol.setAttribute("class", "clsOutlineChapterBorder");
		curCol.setAttribute("valign","top");
	}
	curCol.title = "Go to this chapter";
	//HRB: to reduce distance between Subchapter title and name i.e. 'A. subchapter 1'
	curCol.innerHTML = "&nbsp;"+bullets+".";
		
	curCol = curRow.insertCell(curRow.cells.length);
	curCol.style.cursor="pointer";
	if(is508Compliance) {
		if(checkBrowser() == 'IE') {
			curCol.style.borderLeft="4px solid transparent";
			curCol.style.borderRight="4px solid transparent";
			curCol.style.borderTop="4px solid transparent";
		}
		else {
			curCol.setAttribute("style","border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid transparent");
		}
	}
	if(checkBrowser() == 'IE') {
		curCol.onmouseover = function(){ this.style.color='#75b3d5'; };	// IE
		curCol.onmouseout = function(){ this.style.color='#000000'; };
	}
	else {
		curCol.setAttribute("onmouseover","this.style.color='#75b3d5'");
		curCol.setAttribute("onmouseout","this.style.color='#000000'");	 
	}
	
	if(isChapterTestNode) {	
		curCol.id = "chTestT"+chapterNo;
		if(checkBrowser() == 'IE') {
			curCol.onmousedown = function(){ takeFinalExamFromOutline = false;prevMode='';St(""+chapterNo+""); };// IE
		}
		else {
			curCol.setAttribute("onmousedown","takeFinalExamFromOutline = false;prevMode='';St('"+chapterNo+"')");// FF
		}
	}
	else {
		curCol.id = "ch"+chapterNo+"SubChT"+subChapterNo;
		if(checkBrowser() == 'IE') {
			curCol.onmousedown = function(){ takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+" "+bullets+""); };// IE
		}
		else {
			curCol.setAttribute("onmousedown","takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+" "+bullets+"')");// FF
		}
	}
	
	curCol.width = "10px";
	if(checkBrowser() == 'IE') {
		curCol.setAttribute("className","clsOutlineChapterBorder");		
	}
	else {
		curCol.setAttribute("class","clsOutlineChapterBorder");
	}
	curCol.title = "Go to this chapter";
	
	
	if(is508Compliance) {
		if(checkBrowser() == 'IE') {
			var tempSpan = document.createElement("a");
			tempSpan.tabIndex="3";
			tempSpan.onfocus = function(){ onfocusoutline(this.parentNode)};
			if(isChapterTestNode){	
				if(chapterNo== tempTotalChapters) {
					tempSpan.onblur = function(){ onbluroutline(this.parentNode);if(chkShiftTabPress(event,'tab')){document.getElementById('in1').focus();}};	
					tempSpan.onkeydown= function(){chkKeyPress(event);};
				}
				else {
					tempSpan.onblur = function(){ onbluroutline(this.parentNode)};	
				}
				
				curCol.id = "chTestT"+chapterNo;
				tempSpan.onkeyup = function(){ if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';St(""+chapterNo+""); document.getElementById('out1').focus();}};
				tempSpan.onclick = function(){ if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';St(""+chapterNo+""); document.getElementById('out1').focus(); }};
			}
			else {
				tempSpan.onblur = function(){ onbluroutline(this.parentNode)};	
				curCol.id = "ch"+chapterNo+"SubChT"+subChapterNo;
				tempSpan.onkeyup = function(){if(chkEnterKey(event)){ takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+" "+bullets+""); document.getElementById('out1').focus();}};
				tempSpan.onclick = function(){if(chkEnterKey(event)){ takeFinalExamFromOutline = false;prevMode='';Sc(""+chapterNo+" "+bullets+""); document.getElementById('out1').focus();}};
			}
			tempSpan.innerHTML = title;
			curCol.appendChild(tempSpan);
		}
		else {
			var tempSpan = document.createElement("a");
			tempSpan.setAttribute("tabindex","3");
			tempSpan.setAttribute("onfocus","onfocusoutline(this.parentNode)");
			if(isChapterTestNode){	
				if(chapterNo== tempTotalChapters) {
					tempSpan.setAttribute("onblur","onbluroutline(this.parentNode);if(chkShiftTabPress(event,'tab')){document.getElementById('in1').focus();}");
					tempSpan.setAttribute("onkeydown","chkKeyPress(event)");
				}
				else {
					tempSpan.setAttribute("onblur","onbluroutline(this.parentNode)");
				}
				
				curCol.id = "chTestT"+chapterNo;
				tempSpan.setAttribute("onkeyup","if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';St('"+chapterNo+"'); document.getElementById('out1').focus();}");
				tempSpan.setAttribute("onclick","if(chkEnterKey(event)){takeFinalExamFromOutline = false;prevMode='';St('"+chapterNo+"'); document.getElementById('out1').focus();}");
			}
			else {
				tempSpan.setAttribute("onblur","onbluroutline(this.parentNode)");
				curCol.id = "ch"+chapterNo+"SubChT"+subChapterNo;
				tempSpan.setAttribute("onkeyup","if(chkEnterKey(event)){ takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+" "+bullets+"'); document.getElementById('out1').focus();}");
				tempSpan.setAttribute("onclick","if(chkEnterKey(event)){ takeFinalExamFromOutline = false;prevMode='';Sc('"+chapterNo+" "+bullets+"'); document.getElementById('out1').focus();}");
			}
			tempSpan.innerHTML = title;
			curCol.appendChild(tempSpan);
		}
	}
	else {	
		curCol.innerHTML = title;
	}
		
	return curRow;
}

function getOutlineXML(url) {
	var xmlDoc = GetDOMObject("xmlfile",url);
	if (isError(xmlDoc)) {
		alert("error loading file");
		return;
	}
	return xmlDoc;
}

/*Return <DIV> node for sub-chapter menu*/
function getSubChapterMenu(){
	
}

function getReferenceOutlineIndex(referenceCourseInstanceId) {
	for(var cnt=0;cnt<referenceOutlineIds.length;cnt++) {
		if(referenceOutlineIds[cnt] == referenceCourseInstanceId) {
			return cnt;
		}
	}
	return -1;
}

function setReferenceOutlineXMLs(mainOutLineXML,courseInstanceId) {
	
	var references = mainOutLineXML.getElementsByTagName("courseInstance");
	referenceOutlineIds = new Array(references.length);
	referenceOutlineXMLObj = new Array(references.length);
	for(var refCnt=0;refCnt<references.length;refCnt++) {
		var curInstanceId = references[refCnt].text;
		if(typeof curInstanceId == 'undefined') {
			curInstanceId = references[refCnt].textContent;
		}
		var curReferenceOutlineIndex = getReferenceOutlineIndex(curInstanceId);
		if(curReferenceOutlineIndex ==-1) {
			referenceOutlineIds[refCnt] = curInstanceId;
			courseInstanceIdsList.push(curInstanceId);
			basePath = document.location.href.substring(0,document.location.href.indexOf('control.htm') - (courseInstanceId_dyn.length+1));
			refXmlPath = basePath +curInstanceId + "/common/"+"courseOutline.xml";
            // Start of code to read CplLinks.xml from different courses
            var refCPLLink = basePath + curInstanceId + "/common/" + "cplLinks.xml";
			try {
				window.parent.parent.parent.readXmlFile(refCPLLink);
			}
			catch(err) {
				// To do give appropriate message.
			}
            // end of code to read CplLinks.xml from different courses
			referenceOutlineXMLObj[refCnt] = getOutlineXML(refXmlPath);
		}
		else {
			referenceOutlineIds[refCnt] = curInstanceId;
			referenceOutlineXMLObj[refCnt] = referenceOutlineXMLObj[curReferenceOutlineIndex];
		}
	}
}

function setCourseOutLine() {
	var contentSpaceFil = document.getElementById('contentSpaceFil');
	while(contentSpaceHolder.firstChild!=null) {
		contentSpaceFil.appendChild(contentSpaceHolder.firstChild);
	}
	
	
}

function getCourseSpecificChapterNumber(curChapterNode) {
	var count =0;
	var prevChapNode = curChapterNode.previousSibling;
	while(prevChapNode!= null) {
		if(prevChapNode.nodeName=="chapter") {
			var chapType = prevChapNode.getElementsByTagName("type")[0].text;
			if(typeof chapType == 'undefined') {
				chapType = prevChapNode.getElementsByTagName("type")[0].textContent;
			}
			if(chapType == 'node') {
				count++;
			}
		}
		prevChapNode = prevChapNode.previousSibling;
	}
	return ++count;
}


function init() {
	CategoryList = [];
	var courseSpecificChapterCount=0;
	var courseSpecificChapterNumber;
	var currentCourseChapterNumber = 0;	// Variable for keeping track of current course chapters number
    //Start of code to parse CPLLink.xml
    var obj = window.parent.parent.parent;
	try {
    	CPLLinkXML = obj.readXmlFile(document.location.href.substring(0, document.location.href.indexOf('control.htm')) + "common/cplLinks.xml");
    }
	catch(err) {
		// To do give appropriate message.
    } 
    //Start of code to parse CPLLink.xml
	outLineXML = getOutlineXML(document.location.href.substring(0,document.location.href.indexOf('control.htm'))+"common/courseOutline.xml")
	courseInstanceId_dyn = outLineXML.getElementsByTagName('course')[0].attributes.getNamedItem('instanceId').value;
	courseInstanceIdsList.push(courseInstanceId_dyn);
	
	contentBasePath  = document.location.href.substring(0,document.location.href.indexOf('control.htm') - (courseInstanceId_dyn.length+1));
	setReferenceOutlineXMLs(outLineXML,courseInstanceId_dyn);
	
	var curCourseHeadTag = document.getElementsByTagName("head");
	if(curCourseHeadTag!=null && curCourseHeadTag.length > 0 && courseInstanceIdsList.length> 1) {
		for(var i=1;i<courseInstanceIdsList.length;i++) {
			var curScript = document.createElement("script");
			curScript.src = contentBasePath+courseInstanceIdsList[i]+"/common/index.js";
			curCourseHeadTag[0].appendChild(curScript);
		}
	}
	
	var courseChapters = outLineXML.getElementsByTagName("chapter");
	
	contentSpaceHolder = document.createElement('div');
	
	// Start of creating print list itmes table
	tblChapterList = document.createElement('table');
	tblChapterList.cellpadding="0";
	tblChapterList.cellspacing="0";
	tblChapterList.width="100%";
	tblChapterList.border="0";
			
	if(checkBrowser() == 'IE') {
		tblChapterList.setAttribute("className","clsGlossaryText");

	}
	else {
		tblChapterList.setAttribute("class","clsGlossaryText");
	}	
	// End of creating print list itmes table
	
	tempTotalChapters= courseChapters.length;
	for(var chapCount = 1; chapCount <= courseChapters.length; chapCount++) {
		var curChapterNode = courseChapters[chapCount-1];
		var chapType = curChapterNode.getElementsByTagName("type")[0].text;
		if(typeof chapType == 'undefined') {
			chapType = curChapterNode.getElementsByTagName("type")[0].textContent;
		}		
		
		var courseInstance ;
		if(chapType=='reference') {
			courseInstance = curChapterNode.getElementsByTagName("courseInstance")[0].text;
			if(typeof courseInstance == 'undefined') {
				courseInstance = curChapterNode.getElementsByTagName("courseInstance")[0].textContent;
			}			
			var chapterReferenceId = curChapterNode.getElementsByTagName("chapterReferenceId")[0].text;
			if(typeof chapterReferenceId == 'undefined') {
				chapterReferenceId = curChapterNode.getElementsByTagName("chapterReferenceId")[0].textContent;				
			}
			
			var chapInd = getReferenceOutlineIndex(courseInstance);
			var refCourseChapters = referenceOutlineXMLObj[chapInd].getElementsByTagName("chapter");			
			for(refCnt=0; refCnt<refCourseChapters.length; refCnt++) {
				refId = refCourseChapters[refCnt].attributes.getNamedItem("id").value;
				if(refId == chapterReferenceId) {
					curChapterNode = refCourseChapters[refCnt];
				}
			}
								
			courseSpecificChapterNumber = getCourseSpecificChapterNumber(curChapterNode);
									
			// start of getting chapter specicfic glossary terms and add into global array
			var chapGlossaryTerms = curChapterNode.getElementsByTagName("term");
						
			for(termCnt = 0; termCnt < chapGlossaryTerms.length; termCnt++) {
				var gterm = chapGlossaryTerms[termCnt].textContent;
				if(typeof gterm == "undefined") {
					gterm = chapGlossaryTerms[termCnt].text;
				}
				var gtermId = chapGlossaryTerms[termCnt].attributes.getNamedItem("id").value;								
				var gtermDescPath = courseInstance+"/g/"+gtermId;
				
				gblArrGlossaryWords.push(new glossaryWord(gterm, gtermDescPath, courseInstance));
			}						
			
			// end of get chapter specicfic glossary terms 
			
			// start of getting chapter specicfic resource items and add into global array 			
			var chapSupplements = curChapterNode.getElementsByTagName("supplement");
						
			for(termCnt = 0; termCnt < chapSupplements.length; termCnt++) {
				var supplimentName = chapSupplements[termCnt].textContent;
				if(typeof supplimentName == "undefined") {
					supplimentName = chapSupplements[termCnt].text;
				}
				var supplimentId = chapSupplements[termCnt].attributes.getNamedItem("id").value;								
				var supplimentPath = contentBasePath+courseInstance+"/images/"+supplimentId;
				
				gblArrResourceItems.push(new resourceItem(supplimentName, supplimentPath, courseInstance));
			}						
			
			/* end of getting chapter specicfic resource items */
			
		}
		else {			
			courseSpecificChapterNumber = ++courseSpecificChapterCount;
			currentCourseChapterNumber++;
		}		
		 
		var chapTitle = curChapterNode.getElementsByTagName("title")[0].text;
		if(typeof chapTitle == 'undefined') {
			chapTitle = curChapterNode.getElementsByTagName("title")[0].textContent;
		}
		
		var startPageNo = curChapterNode.getElementsByTagName("defStartPageNo")[0].text;
		if(typeof startPageNo == 'undefined') {
			startPageNo = curChapterNode.getElementsByTagName("defStartPageNo")[0].textContent;
		}
		
		var endPageNo = curChapterNode.getElementsByTagName("defEndPageNo")[0].text;
		if(typeof endPageNo == 'undefined') {
			endPageNo = curChapterNode.getElementsByTagName("defEndPageNo")[0].textContent;
		}
		
		var NoOfQuestionsToDisplay = curChapterNode.getElementsByTagName("NoOfQuestionsToDisplay")[0].text;
		if(typeof NoOfQuestionsToDisplay == 'undefined') {
			NoOfQuestionsToDisplay = curChapterNode.getElementsByTagName("NoOfQuestionsToDisplay")[0].textContent;
		}
		
		var totalTestQuestionsCount = curChapterNode.getElementsByTagName("totalTestQuestionsCount")[0].text;
		if(typeof totalTestQuestionsCount == 'undefined') {
			totalTestQuestionsCount = curChapterNode.getElementsByTagName("totalTestQuestionsCount")[0].textContent;
		}
		var curChapNode = getChapterNode(chapTitle,chapCount);
		if(chapType=='reference') {
			CategoryList.push(new Category (""+chapCount,parseInt(startPageNo),parseInt(endPageNo),chapTitle,""+courseInstance,courseSpecificChapterNumber,"1"));
		}
		else {
			CategoryList.push(new Category (""+chapCount,parseInt(startPageNo),parseInt(endPageNo),chapTitle,""+courseInstanceId_dyn,courseSpecificChapterNumber,"0"));
		}
		
		NoOfQuestionsToDisplayArray.push(parseInt(NoOfQuestionsToDisplay));
		TestQuestionsArray.push(parseInt(totalTestQuestionsCount));
		contentSpaceHolder.appendChild(curChapNode);
			
		var subChaps = curChapterNode.getElementsByTagName("subChapter")
		var curMenuDiv = document.createElement('div');
		curMenuDiv.id="ch"+chapCount;
		curMenuDiv.style.display="none";
		curMenuDiv.width="100%";
				
		var curMenuTable = document.createElement('table');
		curMenuTable.cellpadding="0";
		curMenuTable.width="98%";
		curMenuTable.cellspacing="0";
		if(checkBrowser() == 'IE') {
			curMenuTable.setAttribute("className","outlinesub");
		}
		else {
			curMenuTable.setAttribute("class","outlinesub");
		}
		
		
		var colGrp = document.createElement('colgroup');
		colGrp.valign="top";
				
		
		var curCol = document.createElement('col');
		curCol.width="15%";
		colGrp.appendChild(curCol);
		
		curCol = document.createElement('col');
		curCol.width="10%";
		colGrp.appendChild(curCol);
		
		curMenuTable.appendChild(colGrp);
		arrSubChapters.push(parseInt(subChaps.length));
		for(var subChapCount=1;subChapCount<=subChaps.length;subChapCount++) {
			var curSubChapter = subChaps[subChapCount-1];
			var subChapTtle = curSubChapter.getElementsByTagName("subtitle")[0].text;
			var subChapBullet = curSubChapter.getElementsByTagName("bullets")[0].text;
			if(typeof subChapTtle == 'undefined') {
				subChapTtle = curSubChapter.getElementsByTagName("subtitle")[0].textContent;
				subChapBullet = curSubChapter.getElementsByTagName("bullets")[0].textContent;
			}
			
			
			var curSubChapterNode = getSubChapterNode(subChapTtle,subChapBullet,chapCount,subChapCount,curMenuTable);
			if(subChapTtle!='Chapter Test') {
				startPageNo = curSubChapter.getElementsByTagName("startPageNo")[0].text;
				if(typeof startPageNo == 'undefined') {
					startPageNo = curSubChapter.getElementsByTagName("startPageNo")[0].textContent;
				}
				
				endPageNo = curSubChapter.getElementsByTagName("endPageNo")[0].text;
				if(typeof endPageNo == 'undefined') {
					endPageNo = curSubChapter.getElementsByTagName("endPageNo")[0].textContent;
				}
				
				if(chapType=='reference') {
					CategoryList.push(new Category (chapCount+" "+subChapBullet,parseInt(startPageNo),parseInt(endPageNo),subChapTtle,""+courseInstance,courseSpecificChapterNumber));
				}
				else {
					CategoryList.push(new Category (chapCount+" "+subChapBullet,parseInt(startPageNo),parseInt(endPageNo),subChapTtle, ""+ courseInstanceId_dyn,courseSpecificChapterNumber));
				}
			}
		}
		
		curMenuDiv.appendChild(curMenuTable);
		contentSpaceHolder.appendChild(curMenuDiv);
		var curSpacer = document.createElement('div');
		curSpacer.setAttribute("class","clsSpaceFiller");
		contentSpaceHolder.appendChild(curSpacer);
		// add chapter in print list
		if(chapType=='reference') {
			var tmpBasePath = document.location.href.substring(0,document.location.href.indexOf('control.htm') - (courseInstanceId_dyn.length+1));		
			// HRB: Start Fix for Referenced chapters in print menu for displaying correct chapter number.
			var queryString = '?courseSpecificChapterNumber='+courseSpecificChapterNumber+'&chapCount='+chapCount;
			addPrintListTableRow(chapCount,chapTitle,tmpBasePath+courseInstance+'/p'+courseSpecificChapterNumber+'.htm'+queryString,tblChapterList);
			// HRB: End Fix for Referenced chapters in print menu for displaying correct chapter number.
		}
		else {
			addPrintListTableRow(chapCount,chapTitle,'p'+currentCourseChapterNumber+'.htm',tblChapterList);
		}
	}
		
	TotalChapters = dynTotalChapterCount;
}

init();
