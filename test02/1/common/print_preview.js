
// This script generates entire course print preview page dynamically 

var contentiFrame;
var basePath;
var curPrintPage;
var courseContentDiv;
var curChapterIndex = 0;
var iCntCourseRefId = 0;
if(typeof gblArrGlossaryWords == "undefined" || gblArrGlossaryWords == null){	
	gblArrGlossaryWords = parent.gblArrGlossaryWords;
	isIE = parent.isIE;
	courseInstanceId_dyn = parent.courseInstanceId_dyn;
	chapterList = parent.chapterList;
	// For IE
	if(typeof gblArrGlossaryWords == "undefined" || gblArrGlossaryWords == null){
		gblArrGlossaryWords = opener.window.gblArrGlossaryWords;
		isIE = opener.window.isIE;
		courseInstanceId_dyn = opener.window.courseInstanceId_dyn;
		chapterList = opener.window.CategoryList;
	}
}
function createPrintPreview()
{
	if(window != null && typeof window != 'undefined'){
		contentiFrame = document.getElementById("contentiFrame");
		courseContentDiv = document.getElementById("courseContentDiv");
		basePath = document.location.href.substring(0,document.location.href.indexOf('print_preview.htm') - (courseInstanceId_dyn.length+1));
		if(chapterList.length > 0){
			curPrintPage = 	basePath + chapterList[curChapterIndex].courseReferenceId + "/p" + chapterList[curChapterIndex].courseSpecificChapterNumber+".htm" ;
			contentiFrame.src = curPrintPage;
		}
	}
}

var isGlossaryLoaded = false;
var isPrintPreviewGlossary = false;
var cntGlossary = 0;	// HRB: Changes made to handle duplication of glossaries.
function contentFrameOnLoad(){
	var chapterContent;
	var glossaryDefault;
	
	if(typeof(contentiFrame) != 'undefined'){
		
		if(isIE){
			if(contentiFrame.contentWindow.document.location.href.indexOf("print_preview_glossary.htm")!=-1){
				// Set isPrintPreviewGlossary
				isPrintPreviewGlossary = true;
				
				if(!isGlossaryLoaded){
					if(typeof displayInteractivityInfo == 'function')
						displayInteractivityInfo();
					return;
				}
			}
		}
		else{
			if(contentiFrame.contentDocument.location.href.indexOf("print_preview_glossary.htm")!=-1){
				// Set isPrintPreviewGlossary
				isPrintPreviewGlossary = true;
				
				if(!isGlossaryLoaded){
					return;
				}
			}
		}		
		
		//HRB: Start of code to load the content in iFrame
		var curPrintPageDocument;  // Var to handle iFrame in print_preview.htm
		if(isIE){
			curPrintPageDocument = contentiFrame.contentWindow.document;
			
			if(isPrintPreviewGlossary){	// If glossary
				chapterContent = curPrintPageDocument.getElementById("GlossaryContentDiv");
				glossaryDefault = curPrintPageDocument.getElementById("glossaryDefault"); // HRB: Changes made to handle no glossaries.
			}else{
				chapterContent = curPrintPageDocument.getElementById("chapterContentDiv");
			}
		}
		else{
			curPrintPageDocument = contentiFrame.contentDocument;
			if(isPrintPreviewGlossary){	// If glossary
				chapterContent = curPrintPageDocument.getElementById("GlossaryContentDiv");
				glossaryDefault = curPrintPageDocument.getElementById("glossaryDefault"); // HRB: Changes made to handle no glossaries.
			}else{
				chapterContent = curPrintPageDocument.getElementById("chapterContentDiv");
			}
		}
		
		//HRB: corrected images path
		var imgs = chapterContent.getElementsByTagName("img");
		for(var iImg=0; iImg < imgs.length; iImg++){
				var imageSrc = imgs[iImg].src;
				if(imageSrc.indexOf("common") == -1 && imageSrc.indexOf("auimages") == -1)
				{
					var temp = imageSrc.substring(imageSrc.lastIndexOf("images"));
					var changedImgPath = basePath + chapterList[curChapterIndex].courseReferenceId+ "/" + temp;
					imgs[iImg].src = changedImgPath;
				}
				//HRB: for ul bullets
				else if(imageSrc.indexOf("common/bullets") != -1) {
					var temp = imageSrc.substring(imageSrc.lastIndexOf("common/bullets"));
					var changedImgPath = basePath + chapterList[curChapterIndex].courseReferenceId+ "/" + temp;
					imgs[iImg].src = changedImgPath;
				}
				//HRB: for wrapper without custom heading
				else if(imageSrc.indexOf("common/images") != -1) {
					var temp = imageSrc.substring(imageSrc.lastIndexOf("common/images"));
					var changedImgPath = basePath + chapterList[curChapterIndex].courseReferenceId+ "/" + temp;
					imgs[iImg].src = changedImgPath;
				}
				else if(imageSrc.indexOf("common/custom-images") != -1) {
					var temp = imageSrc.substring(imageSrc.lastIndexOf("common/custom-images"));
					var changedImgPath = basePath + chapterList[curChapterIndex].courseReferenceId+ "/" + temp;
					imgs[iImg].src = changedImgPath;
				}
		}
		
		//HRB: End of code to load the content in iFrame
		var getCurrentChapter; // var to get current chappter number
		var currentChapterString;
		var getcourseSpecificChapterNumber;
		var courseSpecificChapterString;
		if(!isPrintPreviewGlossary){
				
			//HRB: Start of code to set the chapter and subchapter dynamically
			var divChapter = curPrintPageDocument.getElementById("content_chapter");
			if(divChapter!=null){
					divChapter.innerHTML = "Chapter "+chapterList[curChapterIndex].CategoryCode+". "+chapterList[curChapterIndex].Description;
				}
				if(curChapterIndex < chapterList.length){
					getCurrentChapter = chapterList[curChapterIndex].CategoryCode;
					currentChapterString = "chapter " + getCurrentChapter;
					getcourseSpecificChapterNumber = chapterList[curChapterIndex].courseSpecificChapterNumber;
					courseSpecificChapterString = "chapter " + getcourseSpecificChapterNumber;
				}
		}
		curChapterIndex++;
		var chapterFound = false;
			
		for(var ind=curChapterIndex;ind<chapterList.length;ind++){
			//HRB: Start of code to set chapter and subchapter dynamically
			if(!isPrintPreviewGlossary){
				var currSubChapterCode = chapterList[ind].CategoryCode;
				var toaddDivID = currSubChapterCode.substring(currSubChapterCode.indexOf(" ")+1,currSubChapterCode.length);
				var newSubchapterDivId = "content_subchapter" + "_" +toaddDivID;
				var currSubChapterTitle = currSubChapterCode +". " +chapterList[ind].Description;
				var divSubChapter = curPrintPageDocument.getElementById(newSubchapterDivId);
				if(divSubChapter!=null){
					divSubChapter.innerHTML = currSubChapterTitle;
				}			
			}
			if(chapterList[ind].CategoryCode.indexOf(" ")==-1){
				chapterFound = true;
				break;
			}else{
				curChapterIndex++;
			}
		}
		
		if(chapterContent!=null && typeof chapterContent != 'undefined' && cntGlossary == 0){ // HRB: Changes made to handle duplication of glossaries.
			var curDiv = document.createElement("div");
			var tempStr;
			if(!isPrintPreviewGlossary){
				tempStr = chapterContent.innerHTML;
				var replaceStr = new RegExp();
				replaceStr.compile(courseSpecificChapterString,"gi");
				tempStr = tempStr.replace(replaceStr, currentChapterString);		
			}else{
				// HRB: Start Changes made to handle duplication of glossaries.
				++cntGlossary;
				if(glossaryDefault.innerHTML == ''){
					tempStr = chapterContent.innerHTML;
				}
				else{
					tempStr = chapterContent.innerHTML + glossaryDefault.innerHTML;
				}
				// HRB:End  Changes made to handle duplication of glossaries.
			}
			curDiv.innerHTML = tempStr;
			//HRB: End of code to set chapter and subchapter dynamically
			courseContentDiv.appendChild(curDiv);
		}
		if(curChapterIndex < chapterList.length){
			if(chapterFound){
				curPrintPage = 	basePath + chapterList[curChapterIndex].courseReferenceId + "/p" + chapterList[curChapterIndex].courseSpecificChapterNumber+".htm" ;
				contentiFrame.src = curPrintPage;
			}
		}else if(curChapterIndex == chapterList.length){
				curPrintPage = 	basePath + courseInstanceId_dyn + "/print_preview_glossary.htm";				
				contentiFrame.src = curPrintPage;
				curChapterIndex++;
		}
	}
}
