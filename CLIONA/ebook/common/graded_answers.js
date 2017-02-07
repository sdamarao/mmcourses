	
	var openervalue;
	if(window.opener)
		openervalue= window.opener;
	else
		openervalue=parent;
	
	var ques = openervalue.arrChapterQuestion;
	var quesResponse = openervalue.arrChapterQuestionResponse;
	var totalChapters =openervalue.TotalChapters;
	var courseRefMap = openervalue.courseRefMap;
	var isEthicCourse = openervalue.isEthicCourse;
	var isIE = openervalue.isIE;

	//reversing isIE condition for IE 11
	if (isIE && (/Trident\/7.0/i.test(navigator.userAgent))) {
	    isIE = false;
	}

	var courseInstanceId_dyn = openervalue.courseInstanceId_dyn;
	var gradedQuesArray = new Array();
	var CategoryList = openervalue.CategoryList;
	var gradecounter=0;
	var is508Compliance = openervalue.chk508Compliance();
	var quesBorderDiv;
	var noOfQuestionsToDisplayArray = openervalue.NoOfQuestionsToDisplayArray;
	var isEbook = openervalue.isEbook;
	var FinalExam=openervalue.FinalExam;
	var bycourseiframecounter=1;
	
	function onIFrameLoad(data)
	{
		if(isIE)
		{
			var ie_var = "srcElement";
			var moz_var = "target";
			var prop_var = "myid";
			var prop_var1 = "data";
			data = data[ie_var][prop_var1].split("_");// 0-chapter, 1-pagenumber, 2-User Response;
		}
		else
		{
			data = data.split("_");// 0-chapter, 1-pagenumber, 2-User Response;
		}
		
		iframeid = "fr_"+data[0]+"_"+data[1];
		var correctRes = window.frames[iframeid].CorrectAnswer;
		var userRes = data[2];
		userRes = userRes.substring(1);
		var iframe = document.getElementById(iframeid);
		var doc = null;
		if(iframe.contentDocument)
			// Firefox, Opera
			doc = iframe.contentDocument;
		else if(iframe.contentWindow)
			// Internet Explorer
			doc = iframe.contentWindow.document;
		else if(iframe.document)
			// Others?
			doc = iframe.document;
		
		var q_type = doc.forms[0].getElementsByTagName('input')[0].type;
		
		var quesCont = document.createElement("div");
		quesCont.id = data[0]+"_"+data[1];
		
		if(is508Compliance) {
			quesBorderDiv=document.createElement("div");
			quesBorderDiv.style.border="4px solid transparent";
			quesBorderDiv.tabIndex=2;
			quesBorderDiv.id = "questionBorder_"+data[0]+"_"+data[1];
		}
		
		var titleDiv = document.createElement("div");
		titleDiv.style.height = "15px";
		titleDiv.style.width = "100%";
		titleDiv.style.fontSize = "11";
		titleDiv.style.padding = "2 0 2 5";
		titleDiv.style.fontWeight = "bold";
		if(!(typeof isEbook != 'undefined' && isEbook))
		{
			titleDiv.style.backgroundColor = "#979797";
			titleDiv.style.color = "white";
		}
		if((typeof isEbook != 'undefined' && isEbook))
		{
			titleDiv.style.fontSize = '16px';
		}
		//titleDiv.innerHTML = "Chapter - "+data[0]+" Question - "+data[3];
		titleDiv.innerHTML = "Question - "+data[3];
		if(is508Compliance) {
			var titleHeading = document.createElement("h6");
			titleHeading.appendChild(titleDiv);
			quesBorderDiv.appendChild(titleHeading);
		}
		else {
			quesCont.appendChild(titleDiv);
		}
		
		var ques = document.createElement("p");
		ques.innerHTML = doc.getElementsByTagName('p')[0].innerHTML;
		if((typeof isEbook != 'undefined' && isEbook))
		{
			ques.style.fontFamily = 'K-Medium';
			ques.style.fontSize = '16px';
		}
		ques.style.margin = "5px";
		ques.style.padding = "0px";
		if(!(typeof isEbook != 'undefined' && isEbook))
		{
			ques.style.fontSize = "14";
		}
		if(is508Compliance) {
			quesBorderDiv.appendChild(ques);
			quesCont.appendChild(quesBorderDiv);
		}
		else {
			quesCont.appendChild(ques);
		}
		
		var q_form = document.createElement("form");
		q_form.setAttribute("name","quesForm");
		
		var q_table_div = document.createElement('div');
		q_table_div.style.border= '4px solid transparent';
		var q_table = document.createElement("table");
		if((typeof isEbook != 'undefined' && isEbook))
		{
			q_table.style.borderSpacing=0+"px";
			q_table.style.cellpadding=5+"px";
		}
		q_table.style.cellspacing = 5;
		q_table.style.fontSize = "12";
		q_table.style.border='none';
		var rows = doc.forms[0].getElementsByTagName('tr');
		var alttext="";
		var alttextcorr="";
		for(var i=0;i<rows.length;i++)
		{  
			var optionText = rows[i].children[2].innerHTML;
			var val = rows[i].children[0].children[0].value;// options - A/B/C/D
			var row = document.createElement("tr");
			
			var col0 = document.createElement("td");
			var col1 = document.createElement("td");
			
			var col2 = document.createElement("td");
			col2.innerHTML = val+".";
			
			var col3 = document.createElement("td");
			var divElement; 
			if((typeof isEbook != 'undefined' && isEbook))
			{
				col3.style.fontSize = '16px';
				col3.style.width = 607+"px";
				col0.style.width = 50+"px";
				//col0.style.height = 50+"px";
				col0.style.verticalAlign = 'middle';
				//col2.style.fontWeight = 'bold';
				col2.style.fontSize = '16px';
				col2.style.paddingLeft = 5+'px';
				col2.style.fontFamily = 'K-Medium';
				col3.style.paddingLeft = 5+'px';
				col1.style.height = 30+"px";
				divElement = document.createElement("div");
				divElement.className='divider';
				divElement.style.borderBottom= "1px solid rgb(237,237,237)";
				divElement.style.position = 'relative';
				divElement.style.marginTop = 10+'px';
				divElement.style.marginBottom = 10+'px';
			}
			col3.innerHTML = optionText;
			
			var inp = document.createElement("input");
			
			if(q_type=="radio")
				inp.setAttribute("type","radio");
			else
				inp.setAttribute("type","checkbox");
			inp.setAttribute("valign","top");
			inp.setAttribute("name","opt");
			inp.setAttribute("disabled","true");
			inp.setAttribute("value",val);
			inp.setAttribute("tabindex", i);
			inp.setAttribute("title","Answer "+val);
			inp.style.width ="15px";
			inp.style.height ="15px";
			
			if(q_type=="radio")
			{ 
				if(val==userRes)
				{
					if(isIE)
						inp.CHECKED = "checked";
					else
						inp.setAttribute("checked","checked");
						
					if(userRes!=correctRes)
					{
						if(is508Compliance) {
							alttext="Your answer is incorrect "+userRes+". "+optionText;
							col0.innerHTML = "<img tabindex='2' id='gradedans"+gradecounter+"' alt='' src='common/images/incorrect.gif' width='16' height='16'/>";
						}
						else {
							if((typeof isEbook != 'undefined' && isEbook))
							{
								col0.style.backgroundColor = 'rgb(220,10,11)';
								col2.style.backgroundColor = 'rgb(242,242,242)';
								col3.style.backgroundColor = 'rgb(242,242,242)';
								col2.style.borderTopLeftRadius = '7px';
								col2.style.borderBottomLeftRadius = '7px';
								col0.style.borderTopRightRadius = '7px';
								col0.style.borderBottomRightRadius = '7px';
							}
							if((typeof isEbook != 'undefined' && isEbook))
								{
								col0.innerHTML = "<div style='margin-left:15px;width:25px;height:15px;' ><embed style='height:20px;width:25px;' src='common/images/incorrect-icon.svg'></embed><span style='position:relative;top:-20px;left:-5px;font-size:12px;color:transparent;'>incorrect</span></div>";
								}
							else
								col0.innerHTML = "<img src='common/images/incorrect.gif' width='16' height='16'/>";
						}
					}
					else
					{
						if(is508Compliance) {
							alttext="Your answer is correct "+userRes+". "+optionText;
							col0.innerHTML = "<img tabindex='2' id='gradedans"+gradecounter+"' alt='' src='common/images/green_tick.gif' width='16' height='16'/>";
						}
						else {
							if((typeof isEbook != 'undefined' && isEbook))
							{
								col0.style.backgroundColor = 'rgb(119,162,47)';
								col2.style.backgroundColor = 'rgb(242,242,242)';
								col3.style.backgroundColor = 'rgb(242,242,242)';
								col0.innerHTML = "<div style = 'margin-left:15px;width:25px;height:20px;' ><embed style='height:20px;width:25px;' src='common/images/correct-icon.svg'><span style='position:relative;top:-20px;left:-5px;font-size:12px;color:transparent;'>correct</span></embed></div>";
								col2.style.borderTopLeftRadius = '7px';
								col2.style.borderBottomLeftRadius = '7px';
								col0.style.borderTopRightRadius = '7px';
								col0.style.borderBottomRightRadius = '7px';
							}
							else
								col0.innerHTML = "<img src='common/images/green_tick.gif' width='16' height='16'/>";
						}
					}
				}
				else if(val==correctRes)
				{	
					if(is508Compliance) {
						alttextcorr=correctRes+". "+optionText;
					}
					if((typeof isEbook != 'undefined' && isEbook))
						col0.innerHTML = "<div style='margin-left:15px;width:20px;height:20px;' ><embed style='height:20px;width:25px;' src='common/images/green-tick.svg'></embed><span style='position:relative;top:-20px;left:-5px;font-size:12px;color:transparent;'>correct</span></div>";
					else
						col0.innerHTML = "<img src='common/images/green_tick.gif' width='16' height='16'/>";
				}
			}
			else
			{
				if(userRes.indexOf(val) != -1)
				{
					if(isIE)
						inp.CHECKED = "checked";
					else
						inp.setAttribute("checked","checked");
					
				}
				if(correctRes.indexOf(val)==-1)
				{
					if((typeof isEbook != 'undefined' && isEbook))
					{
						col0.innerHTML = "<div style='width:25px;height:15px;' ><embed style='height:20px;width:25px;' src='common/images/incorrect-icon.svg'></embed><span style='position:relative;top:-20px;left:-5px;font-size:12px;color:transparent;'>incorrect</span></div>";
					}
					else
						col0.innerHTML = "<img src='common/images/incorrect.gif' width='16' height='16'/>";
				}
					else
					{
						if((typeof isEbook != 'undefined' && isEbook))
						{
							col0.innerHTML = "<div style='width:25px;height:20px;'  ><embed style='height:20px;width:25px;' src='common/images/correct-icon.svg'><span style='position:relative;top:-20px;left:-5px;font-size:12px;color:transparent;'>correct</span></embed></div>";
						}
						else
						col0.innerHTML = "<img src='common/images/green_tick.gif' width='16' height='16'/>";
					}
			}
			if(!(typeof isEbook != 'undefined' && isEbook))
				col1.appendChild(inp);
			
			if((typeof isEbook != 'undefined' && isEbook))
			{
				row.appendChild(col1);
				row.appendChild(col2);
				row.appendChild(col3);
				row.appendChild(col0);
			}
			else
			{
				row.appendChild(col0);
				row.appendChild(col1);
				row.appendChild(col2);
				row.appendChild(col3);
			}
			q_table.appendChild(row);
		}
		
		if(alttextcorr!="") {
			alttext=alttext+". Correct answer is "+alttextcorr;
		} 
		q_table_div.appendChild(q_table);
		q_form.appendChild(q_table_div);
		
		if((typeof isEbook != 'undefined' && isEbook))
		{
			q_form.appendChild(divElement);
			quesCont.appendChild(q_form);
		}
		else
		{
			if(isIE){
				//var temp = document.createElement(q_form);
				var temp = document.createElement("form");
				temp.setAttribute("name","quesForm");
				temp.innerHTML = q_form.innerHTML;
				quesCont.appendChild(temp);
			}else{
				quesCont.appendChild(q_form);
			}
		}
		document.getElementById("div_"+data[0]+"_"+data[1]).appendChild(quesCont);
		if(is508Compliance) {
			document.getElementById('gradedans'+gradecounter).alt = alttext;
			document.getElementById("questionBorder_"+data[0]+"_"+data[1]).onfocus= function(){this.style.border="4px solid yellow"};
			document.getElementById("questionBorder_"+data[0]+"_"+data[1]).onblur= function(){this.style.border="4px solid transparent"};
			if(isIE){
				document.getElementById('gradedans'+gradecounter).onfocus= function(){this.parentNode.parentNode.parentNode.parentNode.parentNode.style.border="4px solid yellow"};
				document.getElementById('gradedans'+gradecounter).onblur= function(){this.parentNode.parentNode.parentNode.parentNode.parentNode.style.border="4px solid transparent"};
			}
			else{
				document.getElementById('gradedans'+gradecounter).onfocus= function(){this.parentNode.parentNode.parentNode.parentNode.style.border="4px solid yellow"};
				document.getElementById('gradedans'+gradecounter).onblur= function(){this.parentNode.parentNode.parentNode.parentNode.style.border="4px solid transparent"};
			}
			gradecounter++;
		}
		
		if((typeof isEbook != 'undefined' && isEbook))
		{
			if((noOfQuestionsToDisplayArray[totalChapters - 1] == parseInt(data[3]) && FinalExam=='bychapter') || (openervalue.arrChapterQuestion.length == bycourseiframecounter && FinalExam=='bycourse'))
			{
				setTimeout(function(){parent.showGradedAnswer();},"1000");
			}
		
			//if( (totalChapters == parseInt(data[0]) && FinalExam=='bychapter') || (openervalue.arrChapterQuestion.length == bycourseiframecounter && FinalExam=='bycourse'))

		}
		bycourseiframecounter++;
	}
	
	function appendQues(){
		var questionposition=0;
		var finalExamQuesCnt = 0;
		if(FinalExam=='bycourse')
		{
			var j=0;
			for(var i=0;i<ques[0].length;i++)
			{
				for(var t=0;t<totalChapters;t++)
				{
					if(ques[t][i]!='')
					{
						questionposition=t;
						finalExamQuesCnt++;
						j=i;
						break;
					}
				}
				var title = "";
				for(var k=0;k<CategoryList.length;k++){
					if (CategoryList[k].CategoryCode == questionposition+1)
					{
						title = CategoryList[k].Description;
						break;
					}
				}
				var ch;
				if(isEthicCourse) {
					ch = "0"+finalExamQuesCnt;
				}
				else {
					ch = "0"+parseInt(questionposition+1,10);
				}
				ch = ch.substring(ch.length-2,ch.length);
				var page_loc = ques[questionposition][j].substr(1,ques[questionposition][j].length);
				var frame_name = "fr_"+ch+"_"+page_loc;
				var iframeid = "fr_"+ch+"_"+page_loc;
				
				if(page_loc =="")
					continue;
				else
				{
				
					var quesContainer = document.createElement("div");
					quesContainer.style.padding = "5px";
					quesContainer.setAttribute("id","div_"+ch+"_"+page_loc);
					
					if(j==0)
					{
						var cTitle = document.createElement("div");
						cTitle.style.height = "25px";
						cTitle.style.width = "100%";
						cTitle.style.fontWeight = "bold";
						cTitle.style.fontSize = "12px";
						cTitle.innerHTML = "Chapter "+(questionposition+1)+" : "+title;
						
						if((typeof isEbook != 'undefined' && isEbook))
						{
							cTitle.style.fontFamily = 'K-Medium';
							cTitle.style.fontSize = '22px';
							cTitle.style.position='relative';
							cTitle.style.paddingLeft=5+'px';
						}
						if(is508Compliance) {
							cTitle.tabIndex=2;
							cTitle.style.border="4px solid transparent";
						}
						quesContainer.appendChild(cTitle);
						if((typeof isEbook != 'undefined' && isEbook))
						{
							var br = document.createElement("br");
							quesContainer.appendChild(br);
						}
						if(FinalExam == "bycourse")
							cTitle.style.display="none";
						
					}
						
					document.getElementById("content").appendChild(quesContainer);
					if(is508Compliance && j==0) {
						document.getElementById("div_"+ch+"_"+page_loc).getElementsByTagName('div')[0].onfocus= function(){this.style.border="4px solid yellow"};
						document.getElementById("div_"+ch+"_"+page_loc).getElementsByTagName('div')[0].onblur= function(){this.style.border="4px solid transparent"};
					}
					var data = ch+"_"+page_loc+"_"+quesResponse[questionposition][j]+"_"+(j+1);
					if(isEthicCourse)
						page_loc = "t01-"+page_loc+".htm";
					else
						page_loc = "t"+ch+"-"+page_loc+".htm";
					
					var iframeCont = document.createElement("div");
					iframeCont.setAttribute("id","cont_"+iframeid);
					
					var Q_iframe = document.createElement("iframe");
					gradedQuesArray.push(iframeid);
					if(isEthicCourse)
					{
						var loc = document.location.href.substring(0,document.location.href.indexOf('graded_answers.htm') - (courseInstanceId_dyn.length+1));
						page_loc = loc+courseRefMap[questionposition][j]+"/"+page_loc;
					}
					Q_iframe.src = page_loc;
					Q_iframe.setAttribute("id",iframeid);
					Q_iframe.style.display = "none";
					Q_iframe.name = frame_name;
					Q_iframe.data = data;
					Q_iframe.myid = iframeid;
					if(isIE){
						Q_iframe.attachEvent("onload", onIFrameLoad);
					}else{
						Q_iframe.setAttribute("onload","onIFrameLoad('"+data+"')");
					}
				
					iframeCont.appendChild(Q_iframe);
					document.body.appendChild(iframeCont);
					
				}

			}
		
		}
		else
		{
		
			for(var i=0;i<totalChapters;i++)
			{
				for(var j=0;j<ques[i].length;j++)
				{
					var title = "";
					for(var k=0;k<CategoryList.length;k++){
						if (CategoryList[k].CategoryCode == i+1)
						{
							title = CategoryList[k].Description;
							break;
						}
					}
					var ch = "0"+parseInt(i+1,10);
					ch = ch.substring(ch.length-2,ch.length);
					
					var page_loc = ques[i][j].substr(1,ques[i][j].length);
					var frame_name = "fr_"+ch+"_"+page_loc;
					var iframeid = "fr_"+ch+"_"+page_loc;
					
					if(page_loc =="")
						continue;
					
					var quesContainer = document.createElement("div");
					quesContainer.style.padding = "5px";
					quesContainer.setAttribute("id","div_"+ch+"_"+page_loc);
					
					if(j==0)
					{
						var cTitle = document.createElement("div");
						cTitle.style.height = "25px";
						cTitle.style.width = "100%";
						cTitle.style.fontWeight = "bold";
						cTitle.style.fontSize = "12px";
						cTitle.innerHTML = "Chapter "+(i+1)+" : "+title;
						
						if((typeof isEbook != 'undefined' && isEbook))
						{
							cTitle.style.fontFamily = 'K-Medium';
							cTitle.style.fontSize = '22px';
							cTitle.style.position='relative';
							cTitle.style.paddingLeft=5+'px';
						}
						if(is508Compliance) {
							cTitle.tabIndex=2;
							cTitle.style.border="4px solid transparent";
						}
						quesContainer.appendChild(cTitle);
						if((typeof isEbook != 'undefined' && isEbook))
						{
							var br = document.createElement("br");
							quesContainer.appendChild(br);
						}
						
					}
					
					document.getElementById("content").appendChild(quesContainer);
					if(is508Compliance && j==0) {
						document.getElementById("div_"+ch+"_"+page_loc).getElementsByTagName('div')[0].onfocus= function(){this.style.border="4px solid yellow"};
						document.getElementById("div_"+ch+"_"+page_loc).getElementsByTagName('div')[0].onblur= function(){this.style.border="4px solid transparent"};
					}
					var data = ch+"_"+page_loc+"_"+quesResponse[i][j]+"_"+(j+1);
					if(isEthicCourse)
						page_loc = "t01-"+page_loc+".htm";
					else
						page_loc = "t"+ch+"-"+page_loc+".htm";
					
					var iframeCont = document.createElement("div");
					iframeCont.setAttribute("id","cont_"+iframeid);
					
					var Q_iframe = document.createElement("iframe");
					gradedQuesArray.push(iframeid);
					if(isEthicCourse)
					{
						var loc = document.location.href.substring(0,document.location.href.indexOf('graded_answers.htm') - (courseInstanceId_dyn.length+1));
						page_loc = loc+courseRefMap[i][j]+"/"+page_loc;
					}
					Q_iframe.src = page_loc;
					Q_iframe.setAttribute("id",iframeid);
					Q_iframe.style.display = "none";
					Q_iframe.name = frame_name;
					Q_iframe.data = data;
					Q_iframe.myid = iframeid;
					if(isIE){
						Q_iframe.attachEvent("onload", onIFrameLoad);
					}else{
						Q_iframe.setAttribute("onload","onIFrameLoad('"+data+"')");
					}
					
					iframeCont.appendChild(Q_iframe);
					document.body.appendChild(iframeCont);
				}
			}
		}
		//clearIframes();
		if(is508Compliance) {
			document.getElementById("content").getElementsByTagName('div')[0].getElementsByTagName('div')[0].focus();
		}
	}
	
	function clearIframes()
	{
		for(var i=0;i<gradedQuesArray.length;i++)
		{
			document.getElementById("cont_"+gradedQuesArray[i]).removeChild(document.getElementById("cont_"+gradedQuesArray[i]).firstChild);
		}
	}
	
	function setGradePageScroll() {		
		var element = $(content).jScrollPane({
			horizontalGutter:5,
			verticalGutter:5,
			'showArrows': false,
			maintainPosition:false,
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
	}