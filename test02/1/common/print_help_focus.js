var is508Compliance;
var isEthicCourse;

if(window.opener) {
	is508Compliance = window.opener.chk508Compliance(); 
	isEthicCourse = window.opener.isEthicCourse;
}

function onfocuselement(e) {
	if(is508Compliance) {	
		e.style.border="4px solid yellow";
	}
}

function onblurelement(e) {
	if(is508Compliance) {	
		e.style.border="4px solid transparent";
	}
}

function printFocus() {	
	if(is508Compliance) {
		document.body.getElementsByTagName('a')[0].focus();
	}
	else{
		
		//remove <h6 id="headingforjaws">
		var list= document.body.getElementsByTagName('h6');
		for (headcount=0;headcount<list.length;headcount++) {
			if(list[headcount].id == 'headingforjaws'){
				list[headcount].style.display = 'none';
				}
		}
		window.opener.removeTabIndex(document);
	}
	if(!isEthicCourse)
		displayInteractivityInfo();
}

function helpFocus() {	
	if(is508Compliance) {
		document.body.getElementsByTagName('div')[0].focus();
		if(document.getElementById('helpPageAnchor')) {
			document.getElementById('helpPageAnchor').innerHTML = "";
			document.getElementById('helpPageAnchor').style.display="none";
		}
		if(document.getElementById('helpPage508Anchor')) {
			document.getElementById('helpPage508Anchor').style.display="";
		}
		if(document.getElementById('navigationDiv')) {
			document.body.background="";
			document.getElementById('navigationDiv').style.display="none";
			document.getElementById('navigation508Div').style.display="";
			document.getElementById('navigation508Div').getElementsByTagName('div')[0].focus();
		}
	}
	else{
		window.opener.removeTabIndex(document);
	}
}

function displayInteractivityInfo() {
	var interactivityDiv=document.getElementsByTagName('div');
	for (divCount=0;divCount<interactivityDiv.length;divCount++) {
		if(is508Compliance) {
			if(interactivityDiv[divCount].id=='ulInfoDiv' || interactivityDiv[divCount].id=='wrapperInfoDiv')
				interactivityDiv[divCount].style.display="";
		}
		else {
			if(interactivityDiv[divCount].id=='ulInteractivityDiv' || interactivityDiv[divCount].id=='wrapperInteractivityDiv' || interactivityDiv[divCount].id=='flashInteractivityHeadingDiv' || interactivityDiv[divCount].id=='cplGraphicDiv')
					interactivityDiv[divCount].style.display="";
		}
	}
}