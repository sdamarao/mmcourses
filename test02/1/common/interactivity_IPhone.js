
var isClosePopupOnOutSideClick='false'; 
var showClosePopupButton='true'; 	
 		
var contentArray=null;
//click and Reveal
var cnr_activeImage;
var cnr_inActiveImage;
var isPopBelowHeader='1';
var cnr_contentDivHeight=null;
//click and Reveal end

//flash card 
var flashCardContentArray;
var selectedControl;
var scrollCard;
//end flash card

//content array for concentric circle interactivity
var concentricCircleContentArray=null;
var concentricCircleActiveImage;
var concentricCircleInActiveImage;
var concentricCircle_id=-1;

//MCQ global variable
var mcq_QuestionArr;
var mcq_Feedback;
var mcq_Option;
var mcq_currentQuestionId;
var mcq_NotActiveImage;
var mcq_ActiveImage;
var mcq_CorrectOption;
var mcq_OptionsArr=new Array();
var mcq_FeedbackArr=new Array();
var gbl_mcqSubmitClicked=false;
var mcq_Scroll=null;
//End of MCQ globalVariable

//Pyramid global variable
var pyramidContentArr;
//end of Pyramid global variable

//matching global variable
var matching_OptionArr;
var matching_ContentArr;
var matching_AnswerArr;
var matching_MatchPairArr;

var matching_selectedTop=0;
var matching_selectedLeft=0;
var matching_highlightCell = 0;
var matching_submitCount=0;

var matching_noOfAttempts=2;
var matching_correctAnswerMessage="Good job. Close this box to continue.";
var matching_inCorrectAnswerArray=new Array('Thats not correct. Close this box to try again.','That\'s not correct. Close this box and click the show answer button to view the correct answer');
var matching_activeSubmitImage;
var matching_nonActiveSubmitImage;
var matching_activeShowAnswerImage;
var matching_nonActiveShowAnswerImage;
var matching_selectedArr;
var matching_destinationArr;
//end of matching global variable

//multipleClickAndReveal global variable
var mcar_TitleArr;
var mcar_ContentArr;
var mcar_ImageNameArr;
//end of multipleClickAndReveal global variable

//multpileClickAndReveal1 global variable [Horizontal]
var mcar1_ContentArr;
var mcar1_ActiveImage;
var mcar1_InActiveImage;
var mcar1_id=-1;
var mcar1_height=null;
//end of multpileClickAndReveal1 global variable [Horizontal]

//hub n spokes global variable
var hubnspokes_ContentArr;
var openPopupIdArr=new Array();
//end hub n spokes global variable

//steps
var steps_InActiveImages;
var steps_id=-1;
var steps_height=null;
//end steps

//animated bullet
var animatedBullet_Height=0;
//end animated bullet
var int_HighLightMe=false;

function $get(id){
	var ele=document.getElementById(id);
	if(ele==null){
		ele=parent.frames.frame_b.document.getElementById(id);
	}
	return ele;
}

function trim(str){
	if(!str || typeof str != 'string')
        return null;
	return str.replace(/^[\s]+/,'').replace(/[\s]+$/,'').replace(/[\s]{2,}/,' ');
}

function pageLoadInteractivity(){
	try{
		int_HighLightMe=highlightMe;
	if(isClosePopupOnOutSideClick == 'true') 	
		if(document.captureEvents)document.captureEvents(Events.CLICK);
	}
	catch(err){
		
	}
	if(arguments[0].toLowerCase()=='clicknreveal')
	{
		isPopBelowHeader=arguments[1];
		cnr_activeImage=arguments[2];
		cnr_inActiveImage=arguments[3];
		cnr_contentDivHeight=arguments[4];
		if(cnr_contentDivHeight && !isNaN(cnr_contentDivHeight))
		{
			parent.frames.frame_b.document.getElementById("contentClicknReveal").style.height=cnr_contentDivHeight+"px";
		}
		//HRB: Added to close ClicknRevealPopup on outside click
		if(document.getElementById(currentDivId) != null){
			document.getElementById(currentDivId).addEventListener('click',function (){ closeClicknRevealPopup();},false);
		}
	}
	else if(arguments[0]=="flashcard")
	{
		var arrRow=arguments[1].split('##');
		flashCardContentArray=new Array(arrRow.length);
		for(var cr=0;cr<arrRow.length;cr++){
			var arrCol=arrRow[cr].split("%%");
			flashCardContentArray[cr]=arrCol; 
		}
		scrollCard = arguments[2];
		selectedControl=null;
	}
	else if(arguments[0]=="animatedbullet")
	{
		if(arguments[1]){
			animatedBullet_Height=isNaN(arguments[1])?0:parseInt(arguments[1],10);
		}
		showBulletPoints();
	}
	else if(arguments[0].toLowerCase()=="hubspokes"){
		
		hubnspokes_ContentArr=arguments[1];
		HubnSpokeLoad();
	}
	else if(arguments[0]=="steps")
	{
		var stepArr=arguments[1];
		var stepActive=arguments[2];
		var stepInActive=arguments[3];
		var stepDescArr=arguments[4];
		steps_InActiveImages=arguments[3];
		var imageWidth=arguments[5];
		var imageHeight=arguments[6];
		var stepTop=arguments[7];
		var stepLeft=arguments[8];
		var stepGap=arguments[9];
		steps_height=arguments[10];
		if(steps_height && !isNaN(steps_height))
		{
			parent.frames.frame_b.document.getElementById("contentSteps").style.height=steps_height+"px";
		}
		showStep(stepArr,stepActive,stepInActive,stepDescArr,stepTop,stepLeft,0,imageHeight,imageWidth,stepGap);

	}
	else if(arguments[0]=="concentriccircle")
	{
		concentricCircleContentArray=arguments[1];
		concentricCircleActiveImage=arguments[2];
		concentricCircleInActiveImage=arguments[3];
		DrawConcentricCircle(1);
	}
	else if(arguments[0]=="mcq")
	{
		mcq_QuestionArr=arguments[1];
		mcq_Feedback=arguments[2];
		mcq_Option=arguments[3];
	    mcq_NotActiveImage=arguments[4];
		mcq_ActiveImage=arguments[5];
		if(arguments[6].indexOf('$') != -1){
			mcq_CorrectOption=arguments[6].split('$');
		}
		else{
			mcq_CorrectOption=arguments[6];
		}
		mcq_currentQuestionId=0;
		showMCQQuestions(mcq_currentQuestionId);
	}
	else if(arguments[0]=="pyramid"){
	
		pyramidContentArr=arguments[1];
		attachEventHandlerforPyramid();
	}
	else if(arguments[0]=="matching")
	{
		matching_OptionArr=arguments[1];
		matching_ContentArr=arguments[2];
		matching_AnswerArr=arguments[3];
		matching_MatchPairArr=arguments[4];
		matching_activeSubmitImage=arguments[5];
		matching_nonActiveSubmitImage=arguments[6];
		matching_activeShowAnswerImage=arguments[7];
		matching_nonActiveShowAnswerImage=arguments[8];
		matching_submitCount=0;
		$get('bttn_container').style.top=eval(parseInt($get('leftPane').style.height)+70)+"px";
	}
	else if(arguments[0]=="multipleclickandreveal")
	{
		mcar_TitleArr=arguments[1];
		mcar_ContentArr=arguments[2];
		mcar_ImageNameArr=arguments[3];
		mcarLoad();
	}						
	else if(arguments[0]=="multipleclickandreveal1")
	{
	
		mcar1_ContentArr=arguments[1];
		
		mcar1_ActiveImage=arguments[2];
		mcar1_InActiveImage=arguments[3];
		mcar1_height=arguments[4];
		if(mcar1_height && !isNaN(mcar1_height))
		{
			parent.frames.frame_b.document.getElementById("contentMultipleClickAndRevealHorizontal").style.height=mcar1_height+"px";
		}
	}
}

//================================
//Start JS code Interactivity: Click and reveal
function showClicknreveal(display,e){ 
try{
	if(display==null || display=='undefined'){ 				
	display=$get('mainClickNReveal').style.display==''>0?'none':'';
	} 
	if(display==''){
		
		if(isPopBelowHeader==1)
		{ 
			$get('mainClickNReveal').className='clicknrevealfade1 mainOuter1'; 
			$get('innerClicknReveal').className='clicknrevealfadeInner1'; 
			$get('iExample').style.backgroundImage ="url('"+cnr_activeImage.replace(/ /gi,'')+"')";
			
		} 
		else
		{
			$get('mainClickNReveal').className='clicknrevealfade mainOuter'; 					
			$get('innerClicknReveal').className='clicknrevealfadeInner'; 
		}
		pushPopupEventDivId('contentClicknReveal');
		
		}
		else 
		{
			if(isPopBelowHeader==1)
			{
				$get('iExample').style.backgroundImage ="url('"+cnr_inActiveImage.replace(/ /gi,'')+"')";
			}
			removeElementFromArray(openPopupIdArr,'contentClicknReveal');
		} 
		$get('mainClickNReveal').style.display=display;
		
		if(e!=undefined && e!=null && e.stopPropagation)e.stopPropagation();
		
		m= new iScroll("innerClicknReveal");
	}
catch(e){}
} 

function closeClicknRevealPopup(){
	showClicknreveal('none',event);
} 

//End JS code Interactivity: Click and reveal
//================================

//================================
//Start JS code Interactivity: Flash cards
function showFlashCards(control,display){     
	if(selectedControl == null)
	{
		control= typeof control == 'object' ? control : $get(control);
		selectedControl=control;
		var id=control.id;
			id=id.replace("f1_container","");
		
		var flashCard=getFlashCardDiv(control);
		 if(display==null || display=='undefined'){
			display=flashCard.className.indexOf('C1')>=0?'none':'';
		}
		
		
		if(display=='')
		{
			flashCard.className='C1';
			document.getElementById("front"+id).style.display="none";
			document.getElementById("scrollFlashCard"+id).style.display="";
			setFlashCardInnerText() ;
			
		}
		else
		{
			flashCard.className='shadow';
			document.getElementById("front"+id).style.display="";
			document.getElementById("scrollFlashCard"+id).style.display="none";
			$get('back'+id, true).innerHTML="";
			
			if(scrollCard=='yes')
			{
				$get('flipCard'+id).style.visibility="hidden";
			}
			selectedControl=null;
		}
		
	}
	if(event.stopPropagation)
		event.stopPropagation();
}

var flashcardPopupScroll=null;
function setFlashCardInnerText(){
	if(selectedControl == null)
		return;
	var id=selectedControl.id;
	id=id.replace("f1_container","");
	
	var rc=id.split("_");
	var flashBack=$get('back'+id, true);
	//flashBack.innerHTML=flashCardContentArray[rc[0]][rc[1]];
	forSerachKey=flashCardContentArray[rc[0]][rc[1]];
	if(int_HighLightMe){
		forSerachKey=genrateHighlightData(forSerachKey);
	}
	flashBack.innerHTML=forSerachKey;
	var parentFB=flashBack.parentNode;
	var childN=parentFB.childNodes;
	for(var nextCh=2;nextCh<childN.length;nextCh++){
		parentFB.removeChild(childN[nextCh]);
	}
	flashcardPopupScroll=new iScroll('back'+id);

	if(scrollCard=='yes')
	{
		$get('flipCard'+id).style.visibility="visible";
		$get('flipCard'+id).innerHTML="Flip Back";
	}
	
	selectedControl=null;
}

function getFlashCardDiv(control){
	var childDiv=control.childNodes;
	for(var i=0;i<childDiv.length;i++){
		if(childDiv[i].id=="f1_card"){
			return childDiv[i];
		}
	}
	return null;
}
//End JS code Interactivity: Flash cards
//================================		

//================================
//interactivity : Step


function showStep(stepArr,stepActive,stepInActive,stepDescArr,imageTOP,imageLEFT,stepCurrent,imageHeight,imageWidth,stepGap){
	var stepTop;
	var stepLeft;
	
	if(stepCurrent==stepArr.length){
		$get('MyLab0').addEventListener( 'click', function( event ) {changeImg("1",stepActive,stepInActive,stepArr,stepDescArr) }, false );
		$get('step1').addEventListener( 'click', function( event ) {changeImg("1",stepActive,stepInActive,stepArr,stepDescArr) }, false );
		
		HideStepPopup();
		return;
	}
	if(stepCurrent==0){
		//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
		parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.top=imageTOP+'px';
		parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.left=imageLEFT+'px';
		parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.height=imageHeight+'px';
		parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.width=imageWidth+'px';
	}
	else{
		imageTOP = imageTOP-imageHeight;
		imageLEFT = imageLEFT+stepGap;
		
		$get('step'+eval(stepCurrent+1)).style.top=imageTOP+'px';
		$get('step'+eval(stepCurrent+1)).style.left=imageLEFT+'px';
		$get('step'+eval(stepCurrent+1)).style.height=imageHeight+'px';
		$get('step'+eval(stepCurrent+1)).style.width=imageWidth+'px';
	}
	ShowAndSetPopupText(stepCurrent, stepArr,stepDescArr);
	
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	if(stepCurrent==0)
	{
		parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.display='';
		parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.cursor='pointer';
		
	}
	else
	{
		$get('step'+eval(stepCurrent+1)).style.display='';
		$get('step'+eval(stepCurrent+1)).style.cursor='pointer';
	}
	
	var divLabel = document.createElement('div');
	
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	if(stepCurrent==0)
	{
		stepTop=parseInt(parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.top);
		stepLeft=parseInt(parent.frames.frame_b.document.getElementById('step'+eval(stepCurrent+1)).style.left);				
	}
	else
	{
		stepTop=parseInt($get('step'+eval(stepCurrent+1)).style.top);
		stepLeft=parseInt($get('step'+eval(stepCurrent+1)).style.left);
	}
	
	divLabel.style.top=eval(imageTOP+(imageHeight/2)-5)+'px';
	divLabel.style.left=eval(imageLEFT);+'px';
	divLabel.style.width=Math.floor(eval(imageWidth*0.827))+'px';
	divLabel.style.textAlign='center';
	//divLabel.innerHTML=stepArr[eval(stepCurrent)];
	forSerachKey=stepArr[eval(stepCurrent)];
	if(int_HighLightMe){
		forSerachKey=genrateHighlightData(forSerachKey);
	}
	divLabel.innerHTML=forSerachKey;
	divLabel.style.position='absolute';
	divLabel.style.cursor='pointer';
	divLabel.className='bold';
	var nId=eval(stepCurrent+1);
	
	divLabel.addEventListener( 'click', function( event ) {changeImg(nId,stepActive,stepInActive,stepArr,stepDescArr) }, false );
	
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	if(stepCurrent==0)
	{
		divLabel.id="MyLab"+stepCurrent;
		parent.frames.frame_b.document.getElementById('mainStep').appendChild(divLabel);
		parent.frames.frame_b.document.getElementById('step'+nId).addEventListener( 'click', function( event ) {changeImg(nId,stepActive,stepInActive,stepArr,stepDescArr) }, false );
	}
	else
	{
		$get('mainStep').appendChild(divLabel);
		$get('step'+nId).addEventListener( 'click', function( event ) {changeImg(nId,stepActive,stepInActive,stepArr,stepDescArr) }, false );
	}
	
	if(stepCurrent<=stepArr.length){
		stepCurrent++;
		interactivity_iPhone_timer=setTimeout(function(){showStep(stepArr,stepActive,stepInActive,stepDescArr,imageTOP,imageLEFT,stepCurrent,imageHeight,imageWidth,stepGap);},1000);
	}
}

		
function changeImg(id,stepActive,stepInactive,stepArr,stepDescArr){
	if(navDiff<IPHONE_NAV_DIFF){
		for(var i=1; i<=stepArr.length;i++){
			if(i!=id)
				$get('step'+i).src=stepInactive[i-1];
			else
				$get('step'+i).src=stepActive[i-1];
		}
		steps_id=id;
		ShowAndSetPopupText(id-1,stepArr,stepDescArr);
		if(event.stopPropagation)event.stopPropagation();
	}
}
		
//HRB: Added scroll for step interactivity popup
function ShowAndSetPopupText(id,stepArr,stepDescArr){
	showIPhonePopup(stepArr[id], stepDescArr[id], true);
}

function HideStepPopup(callFromMain){
	hideIPhonePopup();
	
	if(callFromMain){
		closeStepPopup(steps_InActiveImages);
	}
}
		
function closeStepPopup(stepInactive){
	if(stepInactive == null || stepInactive == 'undefined'){
		stepInactive=steps_InActiveImages;
	}
	for(var i=1; i<=stepInactive.length;i++){
		$get('step'+i).src=trim(stepInactive[i-1]);
	}
}
// end of step interactivity
//========================================

//========================================
//Concentric Circle

function showConcentricCirclePopup(index,e){
	$get('c'+index).className="hw";
	
	RemoveConcentricCircleClassAttribute(index);
	
	concentricCircle_id=index;
	showIPhonePopup($get('l'+index).innerHTML,concentricCircleContentArray[index-1], true);
	
	$get('l'+index).style.backgroundImage='url('+concentricCircleActiveImage+')';
	pushPopupEventDivId('contentConcentricCircle');
	
	if(e!=undefined && e!=null && e.stopPropagation){
		e.stopPropagation();
	}
}
	 
function HideConcentricCirclePopup(){		
	$get('popContent').className="Unfade";
	
}
function RemoveConcentricCircleClassAttribute(exceptMe){
	for(var i=1;i<=concentricCircleContentArray.length;i++){
		if(i!=exceptMe){
			$get('c'+i).removeAttribute('class');
			$get('l'+i).style.backgroundImage='url('+concentricCircleInActiveImage+')';
		}
	}
}
	 
function HideConcentricCirclePopupOnEnd(){
   if($get('popContent').className=="Unfade"){
		$get('popContent').style.display='none';
		RemoveConcentricCircleClassAttribute(10);
		removeElementFromArray(openPopupIdArr,"contentConcentricCircle");
	}
}
	 
function DrawConcentricCircle(id){
	if(id==concentricCircleContentArray.length+1){
		RemoveConcentricCircleClassAttribute(concentricCircleContentArray.length+1);
		hideIPhonePopup();
	}
	else{
		//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
		if(id==1)
			{
				parent.frames.frame_b.document.getElementById('c'+id).style.display='';
				parent.frames.frame_b.document.getElementById('i'+id).style.display='';
				parent.frames.frame_b.document.getElementById('iv'+id).style.display='';
				parent.frames.frame_b.document.getElementById('ih'+id).style.display='';
				parent.frames.frame_b.document.getElementById('l'+id).style.display='';
			}
			else
			{
				$get('c'+id).style.display='';
				$get('i'+id).style.display='';
				$get('iv'+id).style.display='';
				$get('ih'+id).style.display='';
				$get('l'+id).style.display='';
			}
		
		showConcentricCirclePopup(id);
		interactivity_iPhone_timer=setTimeout(function(){DrawConcentricCircle(eval(id+1))},1000);
	}
}
//End of concentric circle

//Start of MCQ
function submitMCQ(answer,optionId,optionValueClick){
	if(optionValueClick){
		if(mcq_QuestionArr.length > mcq_currentQuestionId){
			$get("id"+optionId).checked=true;
		}
		else{
			return;
		}
	}
	
	if(mcq_AnyChecked()){
		$get('notactive').src = mcq_ActiveImage;
		$get('submit').style.cursor = "pointer";
		$get('submit').setAttribute('onclick','showMCQFeedbackPopup(\''+answer+'\')');
	}
	else{
		$get('notactive').src = mcq_NotActiveImage;
		$get('submit').style.cursor = "pointer";
		$get('submit').removeAttribute('onclick');
	}
	
	if(event.stopPropagation)
		event.stopPropagation();
}

function mcq_AnyChecked(){
	var isChecked=false;
	for(var optionNo=1;optionNo<=6;optionNo++){
		if($get("id"+optionNo).checked==true){
			isChecked=true;
		}
	}
	return isChecked;
}


function showMCQFeedbackPopup(answer){
	gbl_mcqSubmitClicked=true;
	var correctAns;
	var descString;
	
	if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase()=="a"){
		correctAns=document.getElementById('s1').innerHTML;
		descString=mcq_FeedbackArr[mcq_currentQuestionId][0];
    }
	else if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase()=="b"){
		correctAns=document.getElementById('s2').innerHTML;
		descString=mcq_FeedbackArr[mcq_currentQuestionId][1];
	}
	else if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase()=="c"){
		correctAns=document.getElementById('s3').innerHTML;
		descString=mcq_FeedbackArr[mcq_currentQuestionId][2];
	}
	else if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase()=="d"){
		correctAns=document.getElementById('s4').innerHTML;
		descString=mcq_FeedbackArr[mcq_currentQuestionId][3];
	}
	else if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase()=="e"){
		correctAns=document.getElementById('s5').innerHTML;
		descString=mcq_FeedbackArr[mcq_currentQuestionId][4];
	}
	else if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase()=="f"){
		correctAns=document.getElementById('s6').innerHTML;
		descString=mcq_FeedbackArr[mcq_currentQuestionId][6];
	}
	
	if(mcq_CorrectOption[mcq_currentQuestionId].toLowerCase() == answer.toLowerCase()){
		showIPhonePopup("That's correct!", descString, true);
	}
	else{
		if(answer.toLowerCase()=="a"){
			descString=mcq_FeedbackArr[mcq_currentQuestionId][0];
		}
		else if(answer.toLowerCase()=="b"){
			descString=mcq_FeedbackArr[mcq_currentQuestionId][1];
		}
		else if(answer.toLowerCase()=="c"){
			descString=mcq_FeedbackArr[mcq_currentQuestionId][2];
		}
		else if(answer.toLowerCase()=="d"){
			descString=mcq_FeedbackArr[mcq_currentQuestionId][3];
		}
		else if(answer.toLowerCase()=="e"){
			descString=mcq_FeedbackArr[mcq_currentQuestionId][4];
		}
		else if(answer.toLowerCase()=="f"){
			descString=mcq_FeedbackArr[mcq_currentQuestionId][5];
		}
		showIPhonePopup("That's Incorrect!", "The correct answer is "+correctAns+"<br/><br/>"+descString, true);
	}
	
	$get('notactive').src =  mcq_NotActiveImage;
	$get('submit').removeAttribute('onclick');
	
	if(mcq_QuestionArr.length-1==mcq_currentQuestionId)
		{
			for(var i=1;i<=6;i++)
				$get('id'+i).disabled="disabled";	
		}
	
	$get('submit').style.cursor = "";
	if(event.stopPropagation)
		event.stopPropagation();
	pushPopupEventDivId('contentMCQ');
}

function closeMCQFeedbackPopup(){
	if($get('feedback').style.display=='')
	{
		mcq_currentQuestionId=mcq_currentQuestionId+1;
		if(mcq_QuestionArr.length > mcq_currentQuestionId)
		{
			showMCQQuestions(mcq_currentQuestionId);
		}
		removeElementFromArray(openPopupIdArr,"contentMCQ");
		if(event.stopPropagation)event.stopPropagation();
	}
}

function showMCQQuestions(id){
	var arrOpt=mcq_Option.split('#');
	var arrDesc=mcq_Feedback.split('#');
	
	for(var i=0; i< arrOpt.length;i++)
	{
		mcq_OptionsArr[i]=arrOpt[i].split('@*');
	}
	
	for(var cntDesc=0; cntDesc< arrDesc.length; cntDesc++)
	{
		mcq_FeedbackArr[cntDesc]=arrDesc[cntDesc].split('@*');
	}
	
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	if(id==0)
	{
		
		//parent.frames.frame_b.document.getElementById('question').innerHTML = mcq_QuestionArr[id];
		forSerachKey= mcq_QuestionArr[id];
		if(int_HighLightMe){
			forSerachKey=genrateHighlightData(forSerachKey);
		}
		parent.frames.frame_b.document.getElementById('question').innerHTML=forSerachKey;
		
		if(mcq_QuestionArr.length==1)
		{
			parent.frames.frame_b.document.getElementById('titlebar').innerHTML = "Exercise";
		}
		else
		{
			parent.frames.frame_b.document.getElementById('titlebar').innerHTML = "Exercise " + (id+1);
		}
	}
	else
	{
		//$get('question').innerHTML = mcq_QuestionArr[id];
		forSerachKey= mcq_QuestionArr[id];
		if(int_HighLightMe){
			forSerachKey=genrateHighlightData(forSerachKey);
		}
		$get('question').innerHTML =forSerachKey;
		if(mcq_QuestionArr.length==1)
		{
			$get('titlebar').innerHTML = "Exercise";
		}
		else
		{
			$get('titlebar').innerHTML = "Exercise " + (id+1);
		}
	}
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	if(id==0)
	{
		for(var i=0;i<mcq_OptionsArr[id].length;i++)
		{
			if(parent.frames.frame_b.document.getElementById('s' + (i+1)) != null){
				parent.frames.frame_b.document.getElementById('s' + (i+1)).innerHTML = mcq_OptionsArr[id][i];
			}
		}
	}
	else
	{
		for(var i=0;i<mcq_OptionsArr[id].length;i++)
		{	
			if($get('s' + (i+1)) != null){
				$get('s' + (i+1)).innerHTML = mcq_OptionsArr[id][i];
			}
		}
	}
	
	//Start HRB: Enabling the required options for each question.
	for(var cntMCQEle=1; cntMCQEle<=mcq_OptionsArr[id].length; cntMCQEle++){
		//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
		if(id==0){
			parent.frames.frame_b.document.getElementById('id'+cntMCQEle).style.display='';
			parent.frames.frame_b.document.getElementById('s'+cntMCQEle).style.display='';
		}
		else{
			$get('id'+cntMCQEle).style.display='';
			$get('s'+cntMCQEle).style.display='';
		}
	}
	//End HRB: Enabling the options for each question.
	
	//Start HRB: Disabling the required options for each question.
	for(var cntMCQEle=mcq_OptionsArr[id].length+1; cntMCQEle<=6; cntMCQEle++){
		//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
		if(id==0){
			parent.frames.frame_b.document.getElementById('id'+cntMCQEle).style.display='none';
			parent.frames.frame_b.document.getElementById('s'+cntMCQEle).style.display='none';
		}
		else{
			$get('id'+cntMCQEle).style.display='none';
			$get('s'+cntMCQEle).style.display='none';
		}
	}
	//End HRB: Disabling the required options for each question.
	
	if(id>0){
		if(mcq_Scroll) mcq_Scroll.destroy();
		mcq_Scroll=new iScroll("mcqScrollDiv");
	}
	
	for(var i=1;i<=6;i++)
		$get('id'+i).checked = false;
}
//end of MCQ

//start of Pyramid
function attachEventHandlerforPyramid(){
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	parent.frames.frame_b.document.getElementById('part1').addEventListener( 'webkitAnimationEnd', function( event ) { showPyramidBlock('1'); }, false );
}
 
function showPyramidBlock(id){
	$get('title'+id).style.display='';
	$get('title'+id).className="animationFontWeight";
	if(id=='1')
	{
	 $get('part'+(parseInt(id)+1)).style.display='';
	}
	if(id=='2')
	{
	  $get('part'+(parseInt(id)+1)).style.display='';
	  $get('part'+(parseInt(id)-1)).style.display='';
	}
	if($get('part'+(parseInt(id)+1)) != null){
		$get('part'+(parseInt(id)+1)).addEventListener( 'webkitAnimationEnd', function( event ) { showPyramidBlock(parseInt(id)+1); }, false );
	}
}

function showPyramidPopup(id,e){
	pushPopupEventDivId('contentPyramid');
	
	showIPhonePopup($get('title'+id).innerHTML, pyramidContentArr[id-1], true);
		
	if(e!=null && e!='undefined' && e.stopPropagation){
		e.stopPropagation();
	}
}
 
function closePyramidPopup(){
	removeElementFromArray(openPopupIdArr,'contentPyramid');
	
	$get('popup1div').style.display='none';
	$get('popup2div').style.display='none';
}
//end of Pyramid

//start of matching
var left=5;
var topStart=00;
var gap=2;
var clickFlag=false;
function highLightMatchingCell(id){
	clickFlag=true;
	for(var cntOpt=1; cntOpt<=matching_OptionArr.length; cntOpt++){
		$get('left' + cntOpt).style.backgroundColor='#FFF7D6';
		$get('left' + cntOpt).style.border='1px solid orange';
	}
	$get('left' + id).style.backgroundColor='rgb(255,218,128)';
	$get('left' + id).style.border='groove 3px';
	$get('left' + id).style.borderColor='orange';
	matching_highlightCell = id;
	matching_selectedTop=$get('left' + id).offsetTop;
	matching_selectedLeft=$get('left' + id).offsetLeft;
}

function clickMatchingMiddle(id){
	var answer=matching_AnswerArr[eval(id-1)];
	var selectedAnswer=matching_OptionArr[matching_highlightCell-1];
		
	$get('middle' + id).style.border='groove 1px';
	var element=$get('middle' + id);
	moveMatchingHere(element);
	id = 0;
	matching_highlightCell = 0;
}

function incrementMatchingTopLeft(id, finaltop,finalleft,destId){
	$get(id).style.position="absolute";
	
	if($get(id).offsetTop < finaltop  ){
		
		$get(id).style.top=eval($get(id).offsetTop+10)+"px";
		$get(id).style.left=eval($get(id).offsetLeft+25)+"px";
		
		setTimeout('incrementMatchingTopLeft(\"'+id+'\", '+finaltop+','+finalleft+',"'+destId+'")',100);
	}
	else if($get(id).offsetTop > finaltop ){
		if(parseInt($get(id).style.top) > 0)
			$get(id).style.top=eval(parseInt($get(id).style.top)-10)+"px";
		else
			$get(id).style.top=eval($get(id).offsetTop-10)+"px";
		$get(id).style.left=eval($get(id).offsetLeft+18)+"px";
		setTimeout('incrementMatchingTopLeft(\"'+id+'\", '+finaltop+','+finalleft+',"'+destId+'")',100);
	}
	else{
		var idNu=id.replace('left','');
		
		$get(id).style.top="2px";
		$get(id).style.left="6px";
		$get(id).style.backgroundColor="#FFF7D6";
		$get(id).style.border='solid 1px orange';
		var ele=addmatchingFootMark($get(id));
		$get(destId).appendChild($get(id));
		$get("leftPane").appendChild(ele);
		$get(id).removeAttribute('onclick');
		$get(destId).removeAttribute('onclick');
		
		var complete = true;
		HideMatchingPopup(true);
		for(var i = 1;i <=(matching_AnswerArr.length);i++){
			var html = $get("middle"+i).innerHTML;
			if(html=="")
			{
				complete = false;
				break;
			}
		}
		
		if(complete){
			$get("submit_bttn").src=matching_activeSubmitImage;
		}
	}
}
 
function moveMatchingHere(control){
	if(clickFlag==true)
	{
		clickFlag=false;
		$get('bgDisableMatching').style.display='';
		incrementMatchingTopLeft('left' + matching_highlightCell,control.offsetTop,control.offsetLeft, control.id);
	}
}
 
var contentDivWidth=180;
var matchPairDivWidth=350;
var optionDivWidth=50;
var topGap=40;
var divHeight=40;
 
function addMatchingOption(){
	left=5;
	topStart=00;
	gap=2;

	var leftPane=$get("leftPane");
	leftPane.style.height=eval(matching_OptionArr.length*divHeight)+"px";
	for(var n=0;n < matching_OptionArr.length;n++){
		var newDiv=document.createElement('div');
		var id=eval(n+1);
		newDiv.id="left"+id;
		
		newDiv.setAttribute('onclick','highLightMatchingCell('+id+')');
		var style="background-color:#FFF7D6;text-align:center;border-collapse:collapse;position:absolute;width:25px;height:20px;border:1px solid orange;margin-bottom:5px;margin-top:5px;left:"+left+"px;top:"+topStart+"px;";
		topStart=topStart+topGap;
		newDiv.setAttribute('style',style);
		newDiv.innerHTML=matching_OptionArr[n];
		leftPane.appendChild(newDiv);
	}
}
 
function submitMatchingAnswers(){
	var complete = true;
	var correct = true;
	for(var i = 1;i <=(matching_AnswerArr.length);i++){
		var html = $get("middle"+i).innerHTML;
		if(html=="")
		{
			complete = false;
			break;
		}
	}
	if(complete)
	{
		matching_submitCount++;
		for(var i = 0;i < matching_AnswerArr.length;i++){
			var val = $get("middle"+(i+1)).childNodes[0].innerHTML;
			if($get("middle"+(i+1)).childNodes.length==2)
			{
				val = $get("middle"+(i+1)).childNodes[1].innerHTML;
			}
		
			if(trim(matching_AnswerArr[i])!=trim(val))
			{
				correct = false;
				break;
			}
		}
		showMatchingPopup(correct);
		if(matching_submitCount == matching_noOfAttempts){
			$get("answer_bttn").src=matching_activeShowAnswerImage;
		}
		$get("submit_bttn").src=matching_nonActiveSubmitImage;
	}
	if(event!=null && event!=undefined && event.stopPropagation)
		event.stopPropagation();
}
 
function viewMatchingAnswers(){
	if(matching_submitCount < matching_noOfAttempts)
		return;
	
	for(var i=1;i <=matching_AnswerArr.length;i++){
		var val = $get("left"+i).innerHTML;
		for(var j=0;j < matching_AnswerArr.length;j++){
			if(val==matching_AnswerArr[j]){
				$get("middle"+(j+1)).appendChild($get("left"+i));
				$get("left"+i).style.position = "static";
				$get("left"+i).style.marginLeft = "6px";
				$get("left"+i).style.marginTop = "8px";
				break;
			}
		}
	}
	$get("bttn_container").style.display="none";
	var leftPane=$get("leftPane");
	
	leftPane.innerHTML='';
	var left=5;
	var topStart=00;
	var gap=2;
	
	for(var n=0;n < matching_OptionArr.length;n++){
		var newDiv=document.createElement('div');
		var id=eval(n+1);
		newDiv.id="left"+id;
		var style="background-color:white;text-align:center;border-collapse:collapse;position:absolute;width:25px;height:20px;border:1px solid orange;margin-bottom:5px;margin-top:5px;left:"+left+"px;top:"+topStart+"px;";
		topStart=topStart+topGap;
		newDiv.setAttribute('style',style);
		newDiv.innerHTML=matching_OptionArr[n];
		leftPane.appendChild(newDiv);
	}
}
 
function addmatchingFootMark(currentElement){
	var tempIndex=document.createElement("div");
	tempIndex.innerHTML=currentElement.innerHTML;
	var left=matching_selectedLeft > 0?matching_selectedLeft:currentElement.offsetLeft;
	var topStart=matching_selectedTop > 0?matching_selectedTop:currentElement.offsetTop;
	var style="background-color:white;text-align:center;border-collapse:collapse;position:absolute;width:25px;height:20px;border:1px solid orange;margin-bottom:5px;margin-top:5px;left:"+left+"px;top:"+topStart+"px;";
	tempIndex.setAttribute('style',style);
	return tempIndex;
}
 
function resetMatchingAll(){
	$get("leftPane").innerHTML='';
	addMatchingOption();
	for(var n=1;n<=matching_ContentArr.length;n++){
		$get("middle"+n).innerHTML='';
		$get("middle"+n).setAttribute('onclick','clickMatchingMiddle('+n+')');
	}
	$get('submit_bttn').style.display='';
}
 
 
function HideMatchingPopup(notReset){
	$get('bgDisableMatching').style.display='none';
	if(notReset==null || notReset=='undefined')
	{
		if(lastAnswer==false)
			resetMatchingAll();
		lastAnswer=false;
	}
}
 
var lastAnswer=false;
function showMatchingPopup(correct){
	if(correct != null )
	{
		$get('bgDisableMatching').style.display='';
		if(correct)
		{
			showIPhonePopup("Correct", matching_correctAnswerMessage);
			$get('bttn_container').style.display="none";
		}
		else
		{
			if(matching_submitCount==matching_noOfAttempts){
				showIPhonePopup("Incorrect", matching_inCorrectAnswerArray[1]);
			}
			else{
				showIPhonePopup("Incorrect", matching_inCorrectAnswerArray[0]);
			}
		}
		lastAnswer=correct;
	}
}
//end of matching

//start of MultipleClickAndReveal
function mcarLoad(){
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	var divContent=parent.frames.frame_b.document.getElementById('contentMultipleClickAndReveal');
	for(var i=0; i<mcar_TitleArr.length;i++)
	{
		var divWithTitle=document.createElement('img');
		divWithTitle.className='imageSize';
		divWithTitle.id='o'+i;
		divWithTitle.src="images/"+mcar_ImageNameArr[i]+"";
		var divTitle=document.createElement('div');
		divTitle.className='titleInner';
		divTitle.className='title';
		divTitle.appendChild(divWithTitle);
		divWithTitle.setAttribute('onclick','showMCARPopup(this)');
		divContent.appendChild(divTitle);
	}

	var arr=divContent.childNodes;
	var maxLiHeight=0;
	for(var verticalClickNRevealCnt=0; verticalClickNRevealCnt<arr.length; verticalClickNRevealCnt++){
		if(arr[verticalClickNRevealCnt].offsetHeight){
		maxLiHeight+=arr[verticalClickNRevealCnt].offsetHeight;
		}
	}
	divContent.style.height=eval(maxLiHeight)+"px";

	if(document.captureEvents)
		document.captureEvents(Event.CLICK);
}


function showMCARPopup(cntrl){
	if(navDiff<IPHONE_NAV_DIFF){
		showIPhonePopup(mcar_TitleArr[cntrl.id.replace('o','')], mcar_ContentArr[cntrl.id.replace('o','')], true);
		if(event!=null && event.stopPropagation)event.stopPropagation();
	}
}
		 
function HideMCARPopup(){
	removeElementFromArray(openPopupIdArr,"bgDisableMCAR");
	$get('bgDisableMCAR').style.display='none';
}
//end of MultipleClickAndReveal

// start of MultipleClickAndReveal1 [Horizontal popup]
function showMCAR1(display,id,e){
	$get('iExample'+id).style.background ='url('+mcar1_ActiveImage+')';
	mcar1_id = id;
	showIPhonePopup($get('iExample'+id).innerHTML, mcar1_ContentArr[id], true);
	
	if(e!=null && e!=undefined && e.stopPropagation) 
		e.stopPropagation();
}
  
function changeMCAR1Image(setImage,id){
	if($get('main'+id).style.display=="none")
	{
	   $get('iExample'+id).style.background ='url('+setImage+')';
	}
}
  
function closeMCAR1AllPopup(){
	var allDiv=document.getElementsByTagName('div');
	for(var i=0; i<allDiv.length;i++){
		if(allDiv[i].id.indexOf("main")==0){
			var id=allDiv[i].id.replace('main','');
			allDiv[i].style.display="none";
			$get('iExample'+id).style.background ='url('+mcar1_InActiveImage+')';
		}
	}
	removeElementFromArray(openPopupIdArr,"contentMultipleClickAndRevealHorizontal");
}
// end of MultipleClickAndReveal1 [Horizontal popup]

//start Hub n spokes
function closeHubnSpokePopup(){ 	
	$get('popup1div').style.display='none'; 
	removeElementFromArray(openPopupIdArr,"contentHubnspoke");
} 		
function HubnSpokeLoad(){ 
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	parent.frames.frame_b.document.getElementById("spoke1").addEventListener( 'webkitAnimationEnd', function( event ) { displayHubnSpokes('1'); }, false ); 	 	
	
	showHubnSpokepopup(1);
}
 
function displayHubnSpokes(id){ 
	if(id==hubnspokes_ContentArr.length)
	{ 
		hideIPhonePopup();
	} 	
	
	$get('title'+id).style.display=''; 
	$get('title'+id).className="animationFontWeight"; 
	
	id=parseInt(id)+1;
	if($get('spoke'+id) != null){
		$get('spoke'+id).style.display=''; 
		$get('spoke'+id).addEventListener( 'webkitAnimationEnd', function( event ) { displayHubnSpokes(id); }, false ); 	
		showHubnSpokepopup(id);
	}
} 	

function showHubnSpokepopup(id,e){ 
	var titleId = 'title' + id;
	var popupTitle = $get(titleId).innerHTML.toString().replace(/<br>/gi,' '); 
	
	showIPhonePopup(popupTitle, hubnspokes_ContentArr[id-1], true);
	
	pushPopupEventDivId('contentHubnspoke');
	
	if(event!=null && event!=undefined && event.stopPropagation)
	{
		event.stopPropagation();
	}
} 		
//end Hub n spokes

//================================
//Start JS code Interactivty: Bullet points


function showBulletPoints(){
	try{
		var ul=parent.frames.frame_b.document.getElementById("ulAnimatedBullet");
		var cont=parent.frames.frame_b.document.getElementById("contentAnimatedBullet");
		
		var arr=ul.childNodes;
		var maxLiHeight=0;
		//get all anchor and change there href tag to onclick function and pass url to that function
		var anchorTags=ul.getElementsByTagName('a');
		for(var aCnt=0;aCnt<anchorTags.length;aCnt++){
			if(anchorTags[aCnt]){
				if(anchorTags[aCnt].href){
					var hrefUrl=anchorTags[aCnt].href;
					anchorTags[aCnt].removeAttribute("href");
					anchorTags[aCnt].setAttribute('onclick','top.frmHidden.openCertificateFeedbackURL("'+hrefUrl+'")')
				}
			}
		}
		if(!animatedBullet_Height)
		{
			for(var animatedLiCnt=0;animatedLiCnt<arr.length;animatedLiCnt++){
				if(arr[animatedLiCnt].offsetHeight){
					maxLiHeight+=(arr[animatedLiCnt].offsetHeight+17);
				}
			}
		}
		cont.style.height=animatedBullet_Height>0?animatedBullet_Height: eval(maxLiHeight)+"px";
	}
	catch(e){
	}
	//Always fetching first element id from frame_b instead of frame_a. To resolve the bookmark issue.
	parent.frames.frame_b.document.addEventListener( 'webkitAnimationEnd', function( event ) { setNextAnimatedBullet('1') }, false );
}
			
function setNextAnimatedBullet(id){
	try{
		var nextId=parseInt(id)+1;
		if($get('li'+nextId) == null)
			return;
		$get('li'+nextId).className="liAnimatedBullet";
		$get('li'+nextId).addEventListener( 'webkitAnimationEnd', function( event ) { setNextAnimatedBullet(nextId) }, false );
	}
	catch(e){
	}
}



//End JS code Interactivty: Bullet points
//================================
function closeAllInteractivetyPopup(){
	while(openPopupIdArr.length>0){
		var id=openPopupIdArr.pop();
		try
		{
			var elel =$get(id)
			var evObj = document.createEvent('MouseEvents');
			evObj.initMouseEvent( 'click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
			elel.dispatchEvent(evObj);
		}
		catch(err){
			//alert(err);
		}
	}
}

function removeElementFromArray(array, element){	
	var index=array.indexOf(element);
	if(index!=-1){
		
		array.splice(index,1);
	}
	return array;
}

function pushPopupEventDivId(id){
	if(isClosePopupOnOutSideClick.toLowerCase()=='true'){
		openPopupIdArr.push(id);
	}
}