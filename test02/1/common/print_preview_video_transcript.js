// HRB: This script generates entire course video transcript print preview page dynamically 

var curIndex = 0;
var curChapterNumber = 0;
var curCourseRefId;
var iFrameTransContent;

if(typeof gblArrGlossaryWords == "undefined" || gblArrGlossaryWords == null){	
	CategoryList = parent.CategoryList;
	isIE = parent.isIE;
	courseInstanceId_dyn = parent.courseInstanceId_dyn;
	// For IE
	if(typeof gblArrGlossaryWords == "undefined" || gblArrGlossaryWords == null){
		CategoryList = opener.window.CategoryList;
		isIE = opener.window.isIE;
		courseInstanceId_dyn = opener.window.courseInstanceId_dyn;
	}	
}

	/*
		HRB:Function Name : onTranscriptContentLoad()
		Description : Dynamically adding transcript, of reference's course chapters
		Return Value : 
	*/
function onTranscriptContentLoad(){
	
	// Exit condition 
	if(curIndex < CategoryList.length){
		curChapterNumber++;		
	}else{
		return;
	}
	// current chapter course reference id
	curCourseRefId = CategoryList[curIndex].courseReferenceId;	
			
	iFrameTransContent = document.getElementById("course_CI_"+curCourseRefId);
	
	if(!iFrameTransContent || typeof iFrameTransContent == "undefined")
	{
		// create iframe
		iFrameTransContent = document.createElement("iframe");
		
		iFrameTransContent.setAttribute("id","course_CI_"+curCourseRefId);
		iFrameTransContent.style.display = "none";
		if(isIE){
			iFrameTransContent.attachEvent("onload", onTranscriptIframeLoad);
		}else{
			iFrameTransContent.setAttribute("onload","onTranscriptIframeLoad()");
		}		
		basePath = document.location.href.substring(0,document.location.href.indexOf('dyn_print_preview_video_transcript.htm') - (courseInstanceId_dyn.length+1));
		iFrameTransContent.src = basePath+curCourseRefId+"/print_preview_video_transcript.htm";
		document.body.appendChild(iFrameTransContent);
	}
	else
	{
	 	onTranscriptIframeLoad();
	}	
	
}
	/* HRB: End of function onTranscriptContentLoad() */

	/*
		HRB:Function Name : onTranscriptIframeLoad()
		Description : Dynamically adding transcript, of reference's course chapters
		Return Value : 
	*/
function onTranscriptIframeLoad(){	
	
	// Add trnascript for current chapter
	iFrameTransContent = document.getElementById("course_CI_"+curCourseRefId);
	
	var curChapterId = "transcript_ch"+CategoryList[curIndex].courseSpecificChapterNumber;
	var curChapterTitleId = "title_ch"+CategoryList[curIndex].courseSpecificChapterNumber;
		
	var curChapterTransDiv;
	var curChapterTitleDiv;
	if(isIE){
		curChapterTransDiv = iFrameTransContent.contentWindow.document.getElementById(curChapterId);
		curChapterTitleDiv = iFrameTransContent.contentWindow.document.getElementById(curChapterTitleId);
	}else{
		curChapterTransDiv = iFrameTransContent.contentDocument.getElementById(curChapterId);
		curChapterTitleDiv = iFrameTransContent.contentDocument.getElementById(curChapterTitleId);
	}
	
	if(curChapterTitleDiv != null && curChapterTitleDiv != ""){
		curChapterTitleDiv.innerHTML = "Transcripts for chapter "+curChapterNumber;
		
		if (document.getElementById("transcriptDefault") != null) {
			document.getElementById("transcriptDefault").innerHTML = "";
		}
	}
	
	if(typeof curChapterTransDiv != "undefined" && curChapterTransDiv != null && curChapterTransDiv != ""){
		var chapterTranscriptsDiv = document.getElementById("chapterTranscripts");
		var TranscriptDiv = document.createElement('div');
		TranscriptDiv.id = "curChapterId";
		TranscriptDiv.innerHTML = curChapterTransDiv.innerHTML;
		chapterTranscriptsDiv.appendChild(TranscriptDiv);
	}
	curIndex++;
	// iterate the loop till all subchapters traversed
	while(curIndex < CategoryList.length && CategoryList[curIndex].CategoryCode.indexOf(' ') != -1){
			curIndex++;			
	}
		
	// create new iframe for new chapter
	onTranscriptContentLoad();
}
/* HRB: End of function onTranscriptIframeLoad() */