// 01/27/09 - alterations to SilentRegisterCredit()

// add trim function to strings for Java compatibility
	String.prototype.trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

// add startsWith function to strings for Java compatibility
String.prototype.startsWith = function(value)
{
	return (this.substring(0,value.length) == value);
};

Function.prototype.method = function (name, func)
{
    this.prototype[name] = func;
    return this;
};

// "Data Type" classes

function clsQueryDataType()
{
	this.Valid = false;
	this.WordCount = 0;
	this.Words = new Array();
	this.Words[50]=null;
}

function clsPageDescrType()
{
	this.Descr = "";
	this.Page = "";
}

function clsProgress(DataObject,CourseID)
{
	
	// Public properties
	
	this.name="Progress Class";

  var Parameters = new make2DArray(10,2);
  var ParameterCount=0;
	var basePath;

	basePath = window.document.location.href; // HRB : Updated for compliance
	basePath = basePath.toLowerCase();
	if ((/iphone/gi).test(navigator.appVersion) || (/ipad/gi).test(navigator.appVersion))
	{
		this.OnlineUser = true;
	}
	else if (basePath.indexOf("file:/") != -1)
	{
		this.OnlineUser = false;
	}
	else
	{
		this.OnlineUser = true;
	}

	if (this.OnlineUser)
	{
		ParseURLData();
		this.UserCustomerID = ParameterValue("ID");
	}

	clsProgress.method("Read", function ()
	{
		// Read data from the UserData store
		
		if((/Trident\//i.test(navigator.userAgent))) // for IE 11
		{
			 var C_Retxml = LoadProgressData(UserCourseID + "-ProgressStore");
		    
		    if(C_Retxml)
		    {
		      tempXMlDoc= new ActiveXObject("Microsoft.XMLDOM"); tempXMlDoc.loadXML(C_Retxml);
		    }
		    else
		    {
		      defaultHRB1Xml = '<ROOTSTUB ID="" CustomerID="" WWWCustomerID="" CourseID="HRB1" FirstName="" LastName="" Company="" Address1="" Address2="" Address3="" City="" State="" ZipCode="" DayPhone="" eMail="" StatesRegistered="" Topic="Taxes" Download="0" Online="0" DateTestPassed="12/31/1969" ChaptersPassed="0" LastUpdated="12/31/1969" SendCertificate="0" Processed="0" ProcessedTimestamp="" Registered="0" ChaptersAvailable="32767" CorporateDistribution="0" CreditRequested="0" CreditRequestTimestamp="" ObjectivesMet="" PrereqsOK="" MaterialValuable="" ContentCurrent="" TimeOK="" WantAccountingAuditing="" WantManagement="" WantTaxation="" WantSoftwareApplications="" WantPersonalDevelopment="" WantSpecializedKnowledge="" ForCPE="" ForCE="" ForCPD="" ForCLE="" ForMCLE="" UseMeInAds="" SendMeAds="" LikedMost="" MoreTopics="" Bookmark="0" TimeSpent="0" CompanySpecificInfo="" StartDate="12/31/1969" DateTestPassedTimestamp="" CompanySpecificInfo2="" VisitedPages="" VisitedPageNumStr="" CompletedChapterCodeStr="" InCompletedChapterCodeStr="" NoOfAttemptsChapterTest="" bookmarkStr="" finalExamStatus="" finalExamPassed=""> </ROOTSTUB>'
			  tempXMlDoc= new ActiveXObject("Microsoft.XMLDOM"); tempXMlDoc.loadXML(defaultHRB1Xml);
		    }
		}
		else if(isIE)// For Internet Explorer
		{		    
		    UserDataObject.load(UserCourseID + "-ProgressStore");
		}
		else // For Firefox
		{
		    // Loads Progress data from a cookie named Thomson and if the cookie is not present loads the default XML
		    var C_Retxml = LoadProgressData(UserCourseID + "-ProgressStore");
		    
		    if(C_Retxml)
		    {
		      tempXMlDoc = GetDOMObject("xmlstring",C_Retxml);
		    }
		    else
		    {
		      defaultHRB1Xml = '<ROOTSTUB ID="" CustomerID="" WWWCustomerID="" CourseID="HRB1" FirstName="" LastName="" Company="" Address1="" Address2="" Address3="" City="" State="" ZipCode="" DayPhone="" eMail="" StatesRegistered="" Topic="Taxes" Download="0" Online="0" DateTestPassed="12/31/1969" ChaptersPassed="0" LastUpdated="12/31/1969" SendCertificate="0" Processed="0" ProcessedTimestamp="" Registered="0" ChaptersAvailable="32767" CorporateDistribution="0" CreditRequested="0" CreditRequestTimestamp="" ObjectivesMet="" PrereqsOK="" MaterialValuable="" ContentCurrent="" TimeOK="" WantAccountingAuditing="" WantManagement="" WantTaxation="" WantSoftwareApplications="" WantPersonalDevelopment="" WantSpecializedKnowledge="" ForCPE="" ForCE="" ForCPD="" ForCLE="" ForMCLE="" UseMeInAds="" SendMeAds="" LikedMost="" MoreTopics="" Bookmark="0" TimeSpent="0" CompanySpecificInfo="" StartDate="12/31/1969" DateTestPassedTimestamp="" CompanySpecificInfo2="" VisitedPages="" VisitedPageNumStr="" CompletedChapterCodeStr="" InCompletedChapterCodeStr="" NoOfAttemptsChapterTest="" bookmarkStr="" finalExamStatus="" finalExamPassed=""> </ROOTSTUB>'
		      tempXMlDoc = GetDOMObject("xmlstring",defaultHRB1Xml);
		    }
		}

		// load (empty) XML document
		xmlDoc = GetDOMObject("xmlstring",defaultXML);
		if (isError(xmlDoc,"Error in default Data(3):"))
		{
			return
		}

		// Load data from UserData store into XML document
		if(isIE && !(/Trident\//i.test(navigator.userAgent)))
		{
		    getUserData(xmlDoc.selectSingleNode("/package"));
        }
        else
        {
            GetUserDataFromStore(xmlDoc,tempXMlDoc);
        }

		return true;
	}
	);

	
	// Internal shared data (shared amoung all instances)
	
	var UserDataObject = DataObject;
	var UserCourseID = CourseID;
	var QueryData = new clsQueryDataType();
	var SearchIndexLoaded = false;
	var LastSearchString = "";
	var NewSearch = false;

	// Internal shared storage for property values not
	// included in the XML data object (document)

	var clsSearchString = "";
	var clsLastResults = "";
	var clsLastResultsCount = 0;
	var clsMaxSearchItems	= 25;

	
	// Server name and CGI path/filename
	
	if (location.hostname == "")
	{
		// download
		ServerName = "micromash.net/cpeonline3/CPE.dll";
	}
	else
	{
		ServerName = location.hostname + "/cpeonline3/CPE.dll";
	}

  
	// Add "www." if needed to match.
	
	var hostname = window.document.location.hostname; // HRB : Updated for compliance
   
	
	// Adjust protocol for server URL
	// (protocol used with XMLHttp must match the document)
	
	protocol = window.document.location.protocol; // HRB : Updated for compliance
	if (protocol == "file:")
	{
	  protocol = "http:"
	}
	ServerURL = protocol + "//" + ServerName;
	InitWasOk = false;

	// xmlDoc is the shared storage of the persistant object data

    var xmlDoc = GetDOMObject("xmlstring",defaultXML);
	// pageIndex is the (shared) lookup structure for getting the
	// "Description" and "Page" (within a chapter) information
	// for search results
	
	var pageIndex = new clsBTree();
	pageIndex.InitTreeSize(500);

	
	// Create public read/write class method for each element in the XML document
	
	if (isError(xmlDoc,"Error in default Data:"))
	{
		return;
	}

	// This creates the 'class data properties' (class methods) on the fly (!)
	// from the XML document information (a very elegant hack if I do say so myself...)
	
	// This means...
	// New data elements added to the XML will automatically have a class method created for it.
	// Only the "ConvertDataType" and "EditCheckOK" functions may need to be modified to accomodate a
	// new data element (unchecked strings require no changes).
	
	addXMLElementClasses(SelectSingleNode(xmlDoc,"/package"));

	// blow away the last instance of the xmlDoc - just to make sure nothing gets carried over.
	// Start HRB : Commented for compliance
	
// End HRB : Commented for compliance
  if(this.OnlineUser == false)
  {
  	this.Read();
  }

	InitWasOk = true;

	
	//	Public Methods
	
	clsProgress.method('Update', function()
	{
		if(this.OnlineUser == false){ // HRB : Added for compliance
			if((/Trident\//i.test(navigator.userAgent)))
			{
				SetUserDataFromStore(xmlDoc,tempXMlDoc);
				var tempXML= tempXMlDoc.xml;
				SaveProgressData(UserCourseID + "-ProgressStore",tempXML,365);
			}
			else if(isIE)
			{
				setUserData(SelectSingleNode(xmlDoc,"/package"));
				UserDataObject.save(UserCourseID + "-ProgressStore");
			}
			else
			{
				SetUserDataFromStore(xmlDoc,tempXMlDoc);
				var serializer = new XMLSerializer();
				var tempXML = serializer.serializeToString(tempXMlDoc);
				SaveProgressData(UserCourseID + "-ProgressStore",tempXML,365);
			}
		}    

  /* HRB : Commented for compliance
  if (this.OnlineUser != 0)
		{
			UpdateOnlineDatabase();
		}*/
	}
	);

	clsProgress.method('InitOk', function()
	{
		return InitWasOk;
	}
	);

	clsProgress.method('NumberChaptersPassed', function()
	{
		b=0;
		c=0;

		for (b=0;b<=31;b++)
		{
			if ( (Math.pow(2,b) & this.ChaptersPassed() ) != 0)
			{
				c++;
			}
		}

		return c;
	}
	);

	clsProgress.method('PassedChapter', function(chapter)
	{
		d=0;

		if ((chapter >= 1) && (chapter <= 31))
		{
			d = Math.pow(2,chapter);
			this.ChaptersPassed(this.ChaptersPassed() | d);
		}

  /* HRB : Commented for compliance
  if (this.OnlineUser != 0)
		{
			UpdateOnlineDatabase();
		}*/
	}
	);

	clsProgress.method('RegisterCredit', function(chapter)
	{
		// returns 0 for success.
		//	1 for "Bad URL" (should not happen since the URL is hardcoded)
		//  2 for basicially "No Connection" or "Server Error" (any cause)
		//  3 for other/unknown errors

  if (this.OnlineUser != 0)
		{

			PostData="";

			alert("Connecting to MicroMash Server\nClick 'Ok'to connect to the MicroMash Server.");
			xmlHttp = CreateXMLHTTPobject();
			xmlHttp.open("POST", ServerURL + "?delay=0&CreditRequested=-1", false);
  		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  		var dta = buildDataPackage();
  		xmlHttp.send(dta);
			ReturnData = xmlHttp.responseText;

			if ( ReturnData.substring(0,5) == "ERROR" )
			{
				alert("Error While Registering Completion of Course\nAn error occured while attempting to register your course completion on the MicroMash Server. Please contact technical support if this problem continues.\nData returned from INetIO:" + ReturnData );
				return ReturnData.substring(5);
			}

			if ( ReturnData.substring(0,10) == "<ACK><EOD>" )
			{
				alert("You have successfully registered with MicroMash the completion of your course.\nIf you requested a certificate, please allow 4-6 weeks for processing.");
			  this.CreditRequested(true);
				return 0;
			}

			return -1;
		}
		else
		{
			var regWin=window.open("","","left=112,top=70,width=640,height=480,fullscreen=0,toolbar=0,titlebar=1");
			regWin.moveTo((screen.availWidth-640)/2,(screen.availHeight-480)/2);
			regWin.document.write("<html><head><title>Register with MicroMash the Completion of a Course</title></head>\n");
			regWin.document.write("<body>\n");
			regWin.document.write("<center><h3>Please wait - communicating with MicroMash servers</h3>");
			regWin.document.write("<p>This window will close automatically</p></center>");
			regWin.document.write("<form method='POST' action='" + ServerURL + "?delay=0'>\n");

      var cnt = 0;
      var txt = "";
	  var child = get_firstChild(SelectSingleNode(xmlDoc,"/package"))

      while (child != null)
      {
        switch (child.nodeName)
        {
    			// excluded fields - read-only and not needed by the server
    			case "CreditRequestTimestamp":
    			case "TimeSpent":
    			case "DateTestPassedTimeStamp":
    			case "LastUpdated":
    			case "Processed":
    			case "ProcessedTimestamp":
    			case "CreditRequested":
    			{
    				break;
    			}

          default:
    			{
    			  cnt = cnt + 1;
    			  if (cnt > 1)
    			  {
    			    txt = txt + "&";
    			  }
		  			regWin.document.write("<input type=hidden name='" + child.nodeName + "' value='" + GetText(child) + "'>\n");
    				break;
    			}
        }
		child = get_nextSibling(child);
	  }

			regWin.document.write("<input type=hidden name='function' value='registercredit'>\n");
			regWin.document.write("<input type=hidden name='CreditRequested' value='-1'>\n");
			regWin.document.write("<input type=hidden name='delay' value='0'>\n");
			regWin.document.write("</form></body></html>");
			regWin.focus();
			regWin.document.forms[0].submit();
      this.CreditRequested(true)
			return 0;
		}
	}
	);


	clsProgress.method('SilentRegisterCredit', function(chapter)
	{
		// "Silent" version of register credit - no messages or user interaction
		
		// returns
		//		 0 for success.
		//		-1 for basicially "No Connection" or "Server Error" (any cause)

		var theReturnData = new String();

		xmlHttp = CreateXMLHTTPobject();
		xmlHttp.open("POST", ServerURL + "?delay=0&CreditRequested=-1", false);
		xmlHttp.setRequestHeader("Content-type", "application/xml");

		try
		{
			xmlHttp.send("xml=" + escape(xmlDoc.xml));
		}
		catch(e)
		{
			return -1;
		}

		theReturnData = xmlHttp.responseText;

		if (theReturnData.substring(0,10) == "<ACK><EOD>")
		{
			return 0;
		}

		return -1;
	}
	);


  clsProgress.method('HashKeyOk', function HashKeyOk(HashKey)
	{
		var BulkID = false;
		var c=0;
		var d=0;
		var h=0;
		var r=0;
		var i=0;
		var t=0;
		var j=0;
		var CN=0;
		var tmp="";
		var n="";
		var CC = this.CourseID();
		var fn="";
		var ln="";

		CC = CC.toUpperCase();

		if (HashKey.startsWith("9-"))
		{
			// Bulk purchase ID
			// Strip leading "9-" and make the name "MicroMash"

		  // No longer supported...
		  alert("Bulk purchase product key not supported. Sorry.");
		  return false;
		}
		else
		{
      fn = this.FirstName();
      ln = this.LastName();
			n = (fn.concat("EEEEEE").substring(0,6) + ln.concat("EEEE").substring(0,4)).toUpperCase();
		}

		for (d=0; d<=CC.length-1; d++)
		{
			i = i ^ (CC.charCodeAt(d) * (d+1));
		}

		for (d=0; d<=n.length-1; d++)
		{
			i = i ^ (n.charCodeAt(d) + (d+1));
			c = ((i * n.charCodeAt(d) ) % 26);
  		tmp = tmp + String.fromCharCode(c+65);
		}

		for (d=0; d<=2; d++)
		{
			t = t + (tmp.charCodeAt(d) * Math.pow(256,(d)));
		}

		CN = getHashedCustomerNumber(HashKey,t);

		if (CN != -1)
		{

			tmp = new String(tmp.substring(5,7) + tmp.substring(0,1) + tmp.substring(9,10) +
							 tmp.substring(8,9) + tmp.substring(2,5) + tmp.substring(7,8) +
							 tmp.substring(1,2) );

			j = (CN ^ t);
			n = (j.toString().trim());
			n = new String( n + checkDigit(n) );
			h = n.length / 2;
			r = n.length - h;

			tmp =  new String(n.substring(0,h) + "-" + tmp.substring(0,6) + "-" + n.substring(n.length-r) + "-" + tmp.substring(6) );
			if (tmp == HashKey.toUpperCase())
			{
				this.CustomerID(CN);
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
	);

clsProgress.method('SearchString', function (value)
{
	 numargs = arguments.length;
  if (numargs == 0)
  {
    return clsSearchString;
  }
  else
  {
		if (value == null)
		{
			New_SearchString = "";
		}

		if (! (value == LastSearchString))
		{
			if (! ParseQuery(value))
			{
				New_SearchString="";
			}

			clsSearchString = value;
			LastSearchString = value;
			NewSearch = true;
		}
		else
		{
			NewSearch = false;
		}
  }
}
);

clsProgress.method('SearchResults', function ()
{
	return clsLastResults;
}
);

clsProgress.method('SearchResultsCount', function ()
{
  return clsLastResultsCount;
}
);

clsProgress.method('DoSearch', function ()
{


  var xmlIndex;
  // Load word index for searching
  var resultSet=new Array();
  var tempResult;
  var hitList = new clsBTree();
  var results = new clsBTree();

	if (QueryData.Valid)
	{
		if (NewSearch)
		{
			
			for (w=1;w<=QueryData.WordCount;w++)
			{
				var record;
				result = searchWordFromIndexArr(QueryData.Words[w].toLowerCase());
				//hrb: creating a hash table of the pages and word hit in that page then creating B tree of the top 25 records only
				if(result!=-1)
				{
					//hrb start:added to calculate the hit count of the word in a page
					tempResult=strPageArr[result];
					
					if(tempResult == "")	//Returning if the pages array for the corresponding word is blank
						continue;
					
					//hrb: trim first and last "\n" for fire fox
					if(!isIE)
					{
						tempResult = tempResult.replace(/^\n/,"").replace(/\n$/,"");
					}
					len=0;
					i=0;
					var tempArray
					lastLen=tempResult.indexOf(",",len)
					if(lastLen==-1)
					{
						lastLen=tempResult.length;
					}
					//hrb: get first record in sting
					record=tempResult.substring(len,lastLen)
					while(len<=tempResult.length)
					{
						tempRecord=record;
						resultSet[i]=new Array(record,0);
						//count the record
						while (record==tempRecord)
						{
							resultSet[i][1]++;
							len=len+record.length+1;
							if(len>tempResult.length)
							{
								break;
							}
							/*	
							if(isIE)
								lastLen=tempResult.indexOf(" ",len)
							else
								lastLen=tempResult.indexOf("\n",len)
							*/
							lastLen=tempResult.indexOf(",",len)
							if(lastLen==-1)
							{
								lastLen=tempResult.length;
							}
							record=tempResult.substring(len,lastLen)
							
						}
						i++;
					}
				
					//hrb end:added to calculate the hit count of the word in a page
					if (resultSet.length>0)
					{
						UpdateHits (resultSet, 5, hitList);
					}
				}
			}
			Cnt = 0;
			if (hitList.Size() > 0)
			{
				hitList.MoveFirst();

				while (! hitList.EOF() )
				{
					results.Add(hitList.CurrentValue(), hitList.CurrentKey());
					hitList.MoveNext();
				}

        results.MoveLast();
		tmpHTML = "";
				if(isMobileUserAgent==false)
				{
					tmpHTML = "<table width=184>";
				}

				var tmp="";
				done = false;
				while (! done)
				{
					Cnt++;
					if ( results.CurrentValue().toLowerCase().indexOf("g/gls.htm") == -1)
					{
						if ( ! results.CurrentValue().toLowerCase().startsWith("g/") )
						{
							tmp = results.CurrentValue();
							d = results.CurrentValue().indexOf(".");
							page = parseInt(parseFloat( (results.CurrentValue().substring(0,d))));
							//hrb:style changed for search
							//hrb:  condition added for authorbio popup
							if(isMobileUserAgent==false)
							{
								if(chk508Compliance()) {
									tmpHTML = tmpHTML + "<TR><TD style='border-top:4px solid transparent' class ='clsGlossaryText' valign='top'>" + Cnt + ".</TD><TD style='border:4px solid transparent'><a tabindex='18' title='" + VIEW_PAGE + "' class ='clsGlossaryLinks' onFocus='onfocuselement(this.parentNode);' onBlur='onblurelement(this.parentNode);' onKeyUp='if(chkEnterKey(event)){ShowSearchResult(" + page + ");document.getElementById(\"searchpopupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"searchlblPopupTitle\").focus(),\"100\"});}' href='javascript:ShowSearchResult(" + page + ");document.getElementById(\"popupLx\").onclick();' onclick='if(chkEnterKey(event)){ShowSearchResult(" + page + ");document.getElementById(\"searchpopupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"searchlblPopupTitle\").focus(),\"100\"});}if (\""
								}
								else {
									tmpHTML = tmpHTML + "<TR><TD class ='clsGlossaryText' valign='top'>" + Cnt + ".</TD><TD><a title='" + VIEW_PAGE + "' class ='clsGlossaryLinks' href='javascript:ShowSearchResult(" + page + ");document.getElementById(\"popupLx\").onclick();' onclick='if (\""
								}
								tmpHTML = tmpHTML + GetDescription( results.CurrentValue(),'' )+"\"==\"Welcome Page\") isSearchClicked=true;highlightMe = true; '>" + GetDescription( results.CurrentValue(),'' ) + "</a></td></tr>"; 
							}
							if(isMobileUserAgent)
							{
								var description=GetDescription( results.CurrentValue(),'',true );
								
								var descriptionArr=description.split("##@$");
								if(isEbook)
									tmpHTML = tmpHTML + "<li class='categoryRowTemplate_template' onclick='ShowMainContent_iphone("+page+");closeSearchResult();'>";
								else
									tmpHTML = tmpHTML + "<li class='categoryRowTemplate_template' onclick=ShowMainContent_iphone("+page+")>";
								if(descriptionArr[0]=="Welcome Page"||descriptionArr[0]=="Title Page"||descriptionArr[0]=="Introduction Page"||descriptionArr[0]==" Course Information page")
								{
									if(!isEbook)
									{
										tmpHTML = tmpHTML +"<div class='nonChapterLabel_template searchLabel_template'>"+Cnt+". <a href='javascript:ShowMainContent_iphone("+page+")' onclick=if (\""+GetDescription( results.CurrentValue(),'' )+"\"==\"Welcome page\") isSearchClicked=true;highlightMe = true; '>"+descriptionArr[0]+"</a>"
									}
									else
									{										
										tmpHTML = tmpHTML +"<div class='nonChapterLabel_template searchLabel_template'>"+Cnt+". <a  style='color:#333333 !important;font-family:K-Light !important;font-size:16px;text-decoration:none;' href='javascript:ShowMainContent_iphone("+page+")'>"+descriptionArr[0]+"</a>"
									}
									
								}
								else
								{
									tmpHTML = tmpHTML +"<div class='nonChapterLabel_template searchLabel_template'>"+Cnt+".";
									
									if(!isEbook)
									{
										tmpHTML = tmpHTML +"<a href='javascript:ShowMainContent_iphone("+page+")' onclick=if (\""+GetDescription( results.CurrentValue(),'' )+"\"==\"Welcome page\") isSearchClicked=true;highlightMe = true; '>"+descriptionArr[0]+"</br></a></div><div style='color: black;font-weight:normal;margin-left:35px;margin-top: 26px;'>"+descriptionArr[1]+","+descriptionArr[2];
									}
									else
									{
									
									tmpHTML = tmpHTML+descriptionArr[1]+","+descriptionArr[2];
									}
								}
								tmpHTML = tmpHTML+"</div></li>";
							}
						}
						else
						{
							if(isMobileUserAgent==false)
							{
								if(chk508Compliance()) {
									tmpHTML = tmpHTML + "<TR><TD style='border-top:4px solid transparent' class ='clsGlossaryText' valign='top'>" + Cnt + ".</TD><TD style='border:4px solid transparent'><a tabindex='18' title='" + VIEW_TERM + "' class ='clsGlossaryLinks' onFocus='onfocuselement(this.parentNode);' onBlur='onblurelement(this.parentNode);' onKeyUp='if(chkEnterKey(event)){if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe=true;O(\"" + results.CurrentValue() + "\");document.getElementById(\"popupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"popupL1\").focus()},\"100\");}' onClick='if(chkEnterKey(event)){if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe=true;O(\"" + results.CurrentValue() + "\");document.getElementById(\"popupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"popupL1\").focus(),\"100\"});}' href='javascript:if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe=true;O(\"" + results.CurrentValue() + "\");'>" + GetDescription( results.CurrentValue(),'' ) + "</a></td></tr>";
								}
								else {
									tmpHTML = tmpHTML + "<TR><TD class ='clsGlossaryText' valign='top'>" + Cnt + ".</TD><TD><a title='" + VIEW_TERM + "' class ='clsGlossaryLinks' href='javascript:if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe=true;O(\"" + results.CurrentValue() + "\");'>" + GetDescription( results.CurrentValue(),'' ) + "</a></td></tr>";
								}
							}
							if(isMobileUserAgent)
							{
								tmpHTML = tmpHTML + "<li class='categoryRowTemplate_template'>";
								if(isEbook)
								{
									tmpHTML = tmpHTML +"<div class='nonChapterLabel_template searchLabel_template'>"+Cnt+". <span onclick='highlightMe=true;showGlossaryPopup(\""+results.CurrentValue()+"\",\""+GetDescription( results.CurrentValue(),'' )+"\")'>"+ GetDescription( results.CurrentValue(),'' )+", Glossary Term</span></div></li>"
								}
								else
								{
									tmpHTML = tmpHTML +"<div class='nonChapterLabel_template'>"+Cnt+". <a onclick='highlightMe=true;O(\""+results.CurrentValue()+"\",true,\"search\")' isSearchClicked=true;'>"+ GetDescription( results.CurrentValue(),'' )+"</a></div></li>"
								}
							}
							//hrb:end of style changed for search
						}
					}

					if (Cnt >= clsMaxSearchItems)
					{
						break;
					}

					results.MovePrev();

					done = results.BOF();

				}

				tmpHTML = tmpHTML + "</table>";
			}
			else
			{
			
				if(isMobileUserAgent && isEbook)
				{
					tmpHTML="";
					document.getElementById('searchHead').innerHTML= 'No results found';
				}
				else
				{
					tmpHTML = "<p";
					if(chk508Compliance()) {
						tmpHTML = tmpHTML + " style='border:4px solid transparent' onFocus='onfocuselement(this);' onBlur='onblurelement(this);' tabindex='18'";
					}
					tmpHTML = tmpHTML + ">" + NO_PAGES_MATCHED + "</p>";
				}
			}

			clsLastResults = tmpHTML;
			clsLastResultsCount = Cnt;

			results = null;
			hitList = null;
			tmpHTML = "";

		}else if(isMobileUserAgent && isEbook && clsLastResults == '')
		{
			document.getElementById('searchHead').innerHTML= 'No results found';
		}
	}
	else
	{
		if(isMobileUserAgent && isEbook)
		{
			tmpHTML="";
			clsLastResults="";
			document.getElementById('searchHead').innerHTML= 'No results found';
		}
		else
		{
			clsLastResults = "<p";
			if(chk508Compliance()) {
				clsLastResults = clsLastResults + " style='border:4px solid transparent' onFocus='onfocuselement(this);' onBlur='onblurelement(this);' tabindex='18'";
			}
			clsLastResults = clsLastResults + ">" + NO_PAGES_MATCHED + "</p>";
			clsLastResultsCount = 0;
		}
	}

}
);

//HRB : For Ethic Search
clsProgress.method('DoEthicSearch', function ()
{
  var xmlIndex; 
  
  // Load word index for searching
  var resultSet=new Array();
  var tempResult;
  var hitList = new clsBTree();
  var results = new clsBTree();

	if (QueryData.Valid)
	{
		if (NewSearch)
		{
			
			for (w=1;w<=QueryData.WordCount;w++)
			{
				var record;
				
				for(var ind=0;ind<courseInstanceIdsList.length;ind++){
					if(typeof globalStrWordsArr[courseInstanceIdsList[ind]]!= "undefined"){
						if(typeof globalStrWordsArr[courseInstanceIdsList[ind]][QueryData.Words[w].toLowerCase()]!= "undefined"){
						
							tempResult = globalStrWordsArr[courseInstanceIdsList[ind]][QueryData.Words[w].toLowerCase()]
							//hrb: trim first and last "\n" for fire fox
							if(!isIE)
							{
								tempResult = tempResult.replace(/^\n/,"").replace(/\n$/,"");
							}
							len=0;
							i=0;
							var tempArray
							lastLen=tempResult.indexOf(",",len)
							
							if(lastLen==-1)
							{
								lastLen=tempResult.length;
							}
							//hrb: get first record in sting
							record=tempResult.substring(len,lastLen)
							
								while(len<=tempResult.length)
								{
									tempRecord=record;
									var isFromRefered = isFileToSearchExist(courseInstanceIdsList[ind],record);
									
									if(isFromRefered){
										resultSet[i]=new Array(courseInstanceIdsList[ind]+"/"+record,0);
									}
									
									//count the record
									while (record==tempRecord)
									{
										if(isFromRefered){
											resultSet[i][1]++;	
										}
										len=len+record.length+1;
										if(len>tempResult.length)
										{
											break;
										}
										lastLen=tempResult.indexOf(",",len)
										if(lastLen==-1)
										{
											lastLen=tempResult.length;
										}
										record=tempResult.substring(len,lastLen)
										
									}
									if(isFromRefered){
										i++;	
									}
									
								}
							
								//hrb end:added to calculate the hit count of the word in a page
								if (resultSet.length>0)
								{
									UpdateHits (resultSet, 5, hitList);
								}	
							
							
						}
					}
				}
			}
			Cnt = 0;
			
			if (hitList.Size() > 0)
			{
				hitList.MoveFirst();

				while (! hitList.EOF() )
				{
					results.Add(hitList.CurrentValue(), hitList.CurrentKey());
					hitList.MoveNext();
				}

        results.MoveLast();

				tmpHTML = "<table width=184>";

				var tmp="";
				done = false;
				while (! done)
				{
					if ( results.CurrentValue().toLowerCase().indexOf("g/gls.htm") == -1)
					{
						Cnt++;
						var valParams = results.CurrentValue().split("/");
						if ( ! valParams[valParams.length-2].toLowerCase().startsWith("g") )
						{
							tmp = results.CurrentValue();
							d = valParams[valParams.length-1].indexOf(".");
							page = parseInt(parseFloat( (valParams[valParams.length-1].substring(0,d))));
							//hrb:style changed for search
							//hrb:  condition added for authorbio popup
							if(chk508Compliance()) {
								tmpHTML = tmpHTML + "<TR><TD class ='clsGlossaryText' style='border:4px solid transparent' valign='top'>" + 
								Cnt + 
								".</TD><TD style='border:4px solid transparent'><a title='" + 
								VIEW_PAGE + 
								"' class ='clsGlossaryLinks' tabindex='18' onFocus='onfocuselement(this.parentNode);' onBlur='onblurelement(this.parentNode);' href='javascript:ShowSearchResult(" + page + ","+valParams[valParams.length-2]+");document.getElementById(\"popupLx\").onclick();' onKeyUp='if(chkEnterKey(event)){ShowSearchResult(" + page + ","+valParams[valParams.length-2]+");document.getElementById(\"searchpopupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"searchlblPopupTitle\").focus(),\"100\"});}' onclick='if(chkEnterKey(event)){ShowSearchResult(" + page + ","+valParams[valParams.length-2]+");document.getElementById(\"searchpopupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"searchlblPopupTitle\").focus(),\"100\"});}if (\""+
								GetDescription( valParams[valParams.length-1], valParams[valParams.length-2])+"\"==\"Welcome Page\") isSearchClicked=true;highlightMe = true; '>" + GetDescription( valParams[valParams.length-1],valParams[valParams.length-2] ) + "</a></td></tr>"; 
							}
							else {
								tmpHTML = tmpHTML + "<TR><TD class ='clsGlossaryText' valign='top'>" + 
								Cnt + 
								".</TD><TD><a title='" + 
								VIEW_PAGE + 
								"' class ='clsGlossaryLinks' href='javascript:ShowSearchResult(" + page + ","+valParams[valParams.length-2]+");document.getElementById(\"popupLx\").onclick();' onclick='if (\""+
								GetDescription( valParams[valParams.length-1], valParams[valParams.length-2])+"\"==\"Welcome Page\") isSearchClicked=true;highlightMe = true; '>" + GetDescription( valParams[valParams.length-1],valParams[valParams.length-2] ) + "</a></td></tr>"; 
							}
						}
						else
						{
							if(chk508Compliance()) {
								tmpHTML = tmpHTML + "<TR><TD style='border:4px solid transparent' class ='clsGlossaryText' valign='top'>" + Cnt + ".</TD><TD style='border:4px solid transparent'><a title='" + VIEW_TERM + "' tabindex='18' onFocus='onfocuselement(this.parentNode);' onBlur='onblurelement(this.parentNode);' class ='clsGlossaryLinks'  href='javascript:if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe = true; O(\"" + contentBasePath + results.CurrentValue() + "\");' onKeyUp='if(chkEnterKey(event)){if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe = true; O(\"" + contentBasePath + results.CurrentValue() + "\");document.getElementById(\"popupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"popupL1\").focus()},\"100\");}' onClick='if(chkEnterKey(event)){if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe = true; O(\"" + contentBasePath + results.CurrentValue() + "\");document.getElementById(\"popupLx\").srcEle= this;setTimeout(function(){document.getElementById(\"popupL1\").focus()},\"100\");}' >" + GetDescription( valParams[valParams.length-2] + "/" + valParams[valParams.length-1],valParams[valParams.length-3] ) + "</a></td></tr>";
							}
							else {
								tmpHTML = tmpHTML + "<TR><TD class ='clsGlossaryText' valign='top'>" + Cnt + ".</TD><TD><a title='" + VIEW_TERM + "' class ='clsGlossaryLinks'  href='javascript:if(document.getElementById(\"searchpopupL\").style.visibility!=\"hidden\")document.getElementById(\"searchpopupLx\").onclick();highlightMe = true; O(\"" + contentBasePath + results.CurrentValue() + "\");'>" + GetDescription( valParams[valParams.length-2] + "/" + valParams[valParams.length-1],valParams[valParams.length-3] ) + "</a></td></tr>";
							}	
							//hrb:end of style changed for search
						}
					}

					if (Cnt >= clsMaxSearchItems)
					{
						break;
					}

					results.MovePrev();

					done = results.BOF();

				}

				tmpHTML = tmpHTML + "</table>";
			}
			else
			{
				tmpHTML = "<p";
				if(chk508Compliance()) {
					tmpHTML = tmpHTML + " style='border:4px solid transparent' onFocus='onfocuselement(this);' onBlur='onblurelement(this);' tabindex='18'";
				}
				tmpHTML = tmpHTML + ">" + NO_PAGES_MATCHED + "</p>";
			}

			clsLastResults = tmpHTML;
			clsLastResultsCount = Cnt;

			results = null;
			hitList = null;
			tmpHTML = "";

		}
	}
	else
	{
		clsLastResults = "Sorry, no pages matched your query.";
		clsLastResultsCount = 0;
	}

}
);

	
	// Private Methods
	

	function UpdateOnlineDatabase()
	{

		xmlHttp = CreateXMLHTTPobject();
		xmlHttp.open("POST", ServerURL + "?delay=0", false);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		var dta = buildDataPackage();
		xmlHttp.send(dta);
		r = xmlHttp.responseText;
		if (!(r.startsWith("<ACK><EOD>")))
		{
			alert("Error communicating with server!");
			alert(r);
			return;
		}
	}

	function addXMLElementClasses(node)
	{
		// Defines a class "data" property (method) for each child in the XML dcoument to read/write the
		// XML element value.
		var child = get_firstChild(node);
		while (child != null)
	    {
	    	var classCode = ""
				classCode = classCode + "clsProgress.method('" + child.nodeName + "', function (value)\n"
				classCode = classCode + "{\n"
				classCode = classCode + "	numargs = arguments.length;\n"
				classCode = classCode + "	if (numargs == 0)\n"
				classCode = classCode + "	{\n"
				classCode = classCode + "		return ConvertDataType('" + child.nodeName + "',GetText(SelectSingleNode(xmlDoc,'/package/" + child.nodeName + "')));\n"
				classCode = classCode + "	}\n"
				classCode = classCode + "	else\n"
				classCode = classCode + "	{\n"
				classCode = classCode + "		if (EditCheckOk('" + child.nodeName + "',value))\n"
				classCode = classCode + "		{\n"
				classCode = classCode + "			SetText( value, SelectSingleNode(xmlDoc,'/package/" + child.nodeName + "')) ;\n"
				classCode = classCode + "			return true;\n"
				classCode = classCode + "		}\n"
				classCode = classCode + "		else\n"
				classCode = classCode + "		{\n"
				classCode = classCode + "			return false;\n"
				classCode = classCode + "		}\n"
				classCode = classCode + "	}\n"
				classCode = classCode + "}\n"
				classCode = classCode + ");\n\n"
				eval(classCode); // create class method on the fly
				child = get_nextSibling(child);
	    }
	}

	function ConvertDataType(elementName, elementValue)
	{
		// converts XML data (strings) to appropriate data type
		// Called when retreiving a class "data" property

		returnData = elementValue;

		switch(elementName)
		{
			// boolean
			case "Online":
			case "Download":
			case "Registered":
			case "SendCertificate":
			case "ServerNeedsUpdated":
			{
				if (elementValue=="0")
				{
					returnData=false;
				}
				if (elementValue=="-1")
				{
					returnData=true;
				}
				break;
			}

			// number
			case "ID":
			case "CustomerID":
			case "WWWCustomerID":
			case "ChaptersPassed":
			case "ChaptersAvailable":
			case "CorporateDistribution":
			case "Bookmark":
			{
				break;
			}

		} // end switch (elementName)

		return returnData;
	}

	function EditCheckOk(elementName, elementValue)
	{
		// Edit check data
		// Called when setting a class "data" property

		returnCode = true;

		switch (elementName)
		{
			case "FirstName":
			case "LastName":
			case "Company":
			case "Address1":
			case "Address2":
			case "Address3":
			case "City":
			case "State":
			case "ZipCode":
			case "DayPhone":

			{
				tmp = elementValue.trim();
				if (tmp.length > 50)
				{
					alert("String too big for field: " + elementName);
					returnCode = false;
				}
				break;
			}

			case "eMail":
			case "StatesRegistered":
			{
				tmp = elementValue.trim();
				if (tmp.length > 255)
				{
					alert("String too big for field: " + elementName);
					returnCode = false;
				}
				break;
			}

			case "Online":
			case "Download":
			case "Registered":
			case "SendCertificate":
			case "ServerNeedsUpdated":
			{
				if ( (elementValue !=true) && (elementValue !=false) )
				{
					alert("Boolean value not true or false: " + elementName);
					returnCode = false;
				}
				break;
			}

			// numeric data
			case "CustomerID":
			case "ChaptersPassed":
			case "ChaptersAvailable":
			case "CorporateDistribution":
			case "Bookmark":
			{
				break;
			}

			// read-only fields
			case "ID":
			case "WWWCustomerID":
			case "CourseID":
			case "CreditRequestTimestamp":
			case "TimeSpent":
			case "CompanySpecificInfo":
			case "StartDate":
			case "DateTestPassedTimeStamp":
			case "CompanySpecificInfo2":
			case "Topic":
			case "LastUpdated":
			case "Processed":
			case "ProcessedTimestamp":
			case "ChaptersAvailable":

			{
				alert("Read-Only Field: " + elementName);
				returnCode = false;
				break;
			}

		} // end switch (elementName)

		return returnCode;

	}

	function setUserData(node)
	{
		var child = get_firstChild(node);
	    while (child != null)
	    {
			UserDataObject.setAttribute(child.nodeName,GetText(child));
			child = get_nextSibling(child);
	    }
	}

	function getUserData(node)
	{
	    var child = get_firstChild(node);
	    while (child != null)
	    {
			  // If there's something stored for the element value...
	    	if (UserDataObject.getAttribute(child.nodeName) != null)
	    	{
	    		// put the stored value in the XML document.
					SetText(UserDataObject.getAttribute(child.nodeName),SelectSingleNode(xmlDoc,"/package/" + child.nodeName));
	    	}
			child = get_nextSibling(child);
	    }
	}

	function checkDigit(tmp)
	{
	  var d=0;
		var i=0;

		for (d=0; d<=tmp.length-1; d++)
		{
			i = i ^ (tmp.charCodeAt(d) * (d+1));
		}

		return (i % 10);
	}


	function getHashedCustomerNumber(HashKey,EncryptionKey)
	{
		d=0;
		d1=0;
		tmp="";
		chkDigit=0;

		d = HashKey.indexOf("-");
		if (d != -1)
		{
			tmp = new String(HashKey.substring(0,d));
			d1 = HashKey.indexOf("-",d+1);
			if (d1 != -1)
			{
				d = HashKey.lastIndexOf("-");
				if (d != -1 && d != d1)
				{
					tmp = tmp + new String(HashKey.substring(d1+1,d));

					chkDigit = new Number(tmp.substring(tmp.length-1,tmp.length));
					tmp = new String(tmp.substring(0,tmp.length-1));

					if (isNumeric(tmp))
					{
						if (checkDigit(tmp) != chkDigit)
						{
							return -1;
						}
						else
						{
							return ( new Number(tmp) ^ EncryptionKey );
						}
					}
					else
					{
						return -1;
					}
				}
				else
				{
					return -1;
				}
			}
			else
			{
				return -1;
			}
		}
		else
		{
			return -1;
		}

	}

	function isNumeric(data)
	{
		d=0;
		c="";

		for (d=0;d<data.length;d++)
		{
			if (! isDigit(data.charAt(d)) )
			{
				return false;
			}
		}
		return true;
	}

	function isDigit (c)
	{
		return ((c >= "0") && (c <= "9"))
	}

	function ParseQuery(QString)
	{
		var sq;
		var eq;
		var sp;
		var WString;
		var phrase;
		var word;

		QueryData.WordCount = 0;

		
		// "regularize" whitespace
		
		QString = QString.replace(/"/g,""); // remove double quotes
		QString = QString.replace(/'/g,""); // remove single quotes
		QString = QString.replace(/\t/g," "); // replace tabs with spaces
		QString = QString.replace(/ +/g," "); // reduce multiple spaces to single space

		WString=QString;
		
		
		// Extract words
		
		sp = WString.indexOf(" ");

		while (sp != -1)
		{
			QueryData.WordCount++;
			QueryData.Words[QueryData.WordCount] = WString.substring(0,sp);
			// remove non-word (A-Z,a-z,0-9) characters
			
			WString = WString.substr(sp+1);
			sp = WString.indexOf(" ");
		}

		if (WString.trim().length != 0)
		{
			QueryData.WordCount++;
			QueryData.Words[QueryData.WordCount] = WString;
		}
		
		if (QueryData.WordCount == 0)
		{
			QueryData.Valid = false;
			return false;
		}
		else
		{
			QueryData.Valid=true;
			return true;
		}
	}
function sortMultiDimensional(a,b)
{    // this sorts the array using the second element     
   return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
}

function UpdateHits(PageList, HitPoints, hitList)
{
	//hrb:sort the array having page list
	PageList.sort(sortMultiDimensional); 
	counter=0;
	//hrb: restrict the B tree to first 25 record havinf max no. of hits
    while (counter<PageList.length && counter<clsMaxSearchItems)
	  {
		  hitList.Find(PageList[counter][0]);
		  if (hitList.NoMatch())
		  {
			 hitList.Add(PageList[counter][0], PageList[counter][1]*HitPoints);
		  }
			/*else
			{
				hitList.CurrentValue( hitList.CurrentValue() + HitPoints);
			  }*/
			counter++;
	  }
		
}
	
	function GetDescription(page,courseReferenceId,useDiffSeperator)
	{		
		var Descr = "Unknown";
		var PageNum = "Unknown";
		var returnValue=null;
		
		//hrb start: get page description from  CategoryList[] in control.htm
		if (! page.toLowerCase().startsWith("g/"))//hrb: not a glossary term
		{
			tempPage=parseInt(page.substring(0,page.indexOf(".htm")),10);
			if(isEthicCourse){
			PageNum = fnFindLink(tempPage,courseReferenceId);
				}else{
					PageNum = fnFindLink(tempPage);
				}
				
			
			var resChapStr = "";
			var resPageStr = "";
			var totalpages= 0;
			var subchapterlabel="";
			//added for testing purpose	
			if(PageNum.indexOf(CHAPTER_SPACE) != -1)
			{
			
				resChapStr = PageNum.substring(PageNum.indexOf(CHAPTER_SPACE)+CHAPTER_SPACE.length, PageNum.indexOf(","));
				resChapStr = parseInt(resChapStr);
				resPageStr = PageNum.substring(PageNum.indexOf(PAGE_SPACE)+PAGE_SPACE.length, PageNum.length);
				resPageStr = parseInt(resPageStr);
				
				
				if(resChapStr > 0)
				{
					for (var i=0; i<CategoryList.length; i++)
					{
						if (CategoryList[i].CategoryCode == resChapStr.toString())
						{
							PageNum = PageNum.substring(0,PageNum.indexOf(","));
							Descr = CategoryList[i].Description;
							
							if(isMobileUserAgent && isEbook)
							{
								if(i>1)
								{
									totalpages= (CategoryList[i].LastQuestion - CategoryList[i-1].LastQuestion);
								}
								else
								{
									totalpages= (CategoryList[i].LastQuestion - 3);
								}
								
								subchapterlabel= getSubChapterCode(tempPage,resChapStr);
								
							}
							
							break;
						}
					}
				}
			}
			if(tempPage <= 3)
			{
				return PageNum;
			}
			else
			{
				if(isMobileUserAgent && isEbook)
				{
					returnValue=useDiffSeperator?Descr + "##@$ Chapter " + resChapStr +"."+subchapterlabel+ ".##@$ Page " + resPageStr+" of "+totalpages:Descr + ", Chapter" + resChapStr +""+subchapterlabel+ ", page " + resPageStr+" of "+totalpages;
					return  returnValue;
				}
				else
				{
					if (LANGUAGE == "en" || LANGUAGE == "en-uk")
					{
					   returnValue=useDiffSeperator?Descr + "##@$ Ch." + resChapStr + "##@$ p." + resPageStr:Descr + ", Ch." + resChapStr + ", p." + resPageStr;
					   return  returnValue;
					}
					else
					{
						returnValue=useDiffSeperator?Descr + "##@$ C." + resChapStr + "##@$ p." + resPageStr:Descr + ", C." + resChapStr + ", p." + resPageStr;
						return  returnValue;
					}
				}
			}
		}
		else//a glossary term
		{
			if (!glossaryTerm[page] )
			{
				if(!glossaryTerm[contentBasePath+courseReferenceId+"/"+page]){
					Descr = "Unknown";
					PageNum = "Unknown";
				}else{
					PageNum = glossaryTerm[contentBasePath+courseReferenceId+"/"+page];
				}
			
				
			}
			else
			{
				PageNum = glossaryTerm[page];
			}
			returnValue=useDiffSeperator?PageNum + "##@$ glossary term" :PageNum + ", glossary term";
			if(isMobileUserAgent && isEbook)
				return PageNum;
			else
				return PageNum + ", glossary term";
			
		}
		//hrb end: get page description from  CategoryList[] in control.htm
		
	}

	
	// URL Paramter functions.
	
	
function getSubChapterCode(pageNo, ChapterNo)
{
	var subchapstring = "";
	for (var i=0; i<CategoryList.length; i++)
	{
		if(CategoryList[i].CategoryCode.indexOf(" ")!=-1)
		{
			chapstr= CategoryList[i].CategoryCode.split(" ");
			
			if(chapstr[0] == ChapterNo.toString() && pageNo >= CategoryList[i].FirstQuestion && pageNo <= CategoryList[i].LastQuestion)
			{
				subchapstring = chapstr[1];
				break;
			}
		}
	}

	return subchapstring;

}


  function makearray(ndim,j)
  {
    this.length=ndim
    for(var i=0; i<ndim; ++i)
    {
      this[i] = null;
    }
  }

  function make2DArray(ndim,mdim)
  {
    this.length=ndim
    for(var j=0; j<ndim; ++j)
    {
      this[j] = new makearray(mdim,j)
    }
  }

  function ParseURLData()
  {
    var url = document.location.href;
    var qm = url.indexOf("?");
    if (qm == -1)
    {
      return;
    }

    var params = url.substring(qm+1) + "&" ;

    ParameterCount = 0;
    var amp = params.indexOf("&");
    while (amp != -1)
    {
      var pair = params.substring(0,amp);
      var eq = pair.indexOf("=");
      if (eq != -1)
      {
        ParameterCount++;
        Parameters[ParameterCount][1] = unescape(pair.substring(0,eq));
        Parameters[ParameterCount][2] = unescape(pair.substring(eq+1));
      }

      params = params.substring(amp+1);
      amp = params.indexOf("&");
    }
  }

  function ParameterValue(pName)
  {
    for (d=1;d<=ParameterCount;d++)
    {
      if (Parameters[d][1] == pName)
      {
        return Parameters[d][2];
      }
    }

    return null;
  }

  function buildDataPackage()
  {

  // Build simple name/value pairs (www-form-encoded) post data
  // (sending xml or binary/encrypted data won't make it thru checkpoint firewall)
  
    var cnt = 0;
    var txt = "";
	var child = get_firstChild(SelectSingleNode(xmlDoc,"/package"));
	while (child != null)
    {
      switch (child.nodeName)
      {
  			// excluded fields - read-only and not needed by the server
  			case "CreditRequestTimestamp":
  			case "TimeSpent":
  			case "CompanySpecificInfo":
  			case "StartDate":
  			case "DateTestPassedTimeStamp":
  			case "CompanySpecificInfo2":
  			case "Topic":
  			case "LastUpdated":
  			case "Processed":
  			case "ProcessedTimestamp":
  			case "ChaptersAvailable":
  			case "CreditRequested":
  			{
  				break;
  			}

        default:
  			{
  			  cnt = cnt + 1;
  			  if (cnt > 1)
  			  {
  			    txt = txt + "&";
  			  }
          txt = txt + child.nodeName + "=" + escape(GetText(child))
  				break;
  			}
      }
	  child = get_nextSibling(child);
	}

    return txt;

  }
  
  // HRB : Added for compliance
  clsProgress.method("buildLMSDataPackage", function ()
  {
		// Build simple name/value pairs (www-form-encoded) post data
		// (sending xml or binary/encrypted data won't make it thru checkpoint firewall)
		
    var dataPackage = "";
    var child = get_firstChild(SelectSingleNode(xmlDoc,"/package"))
	
    while (child != null){
      switch (child.nodeName.toUpperCase()){
  			// excluded fields - read-only and not needed by the server
  			case "CUSTOMERID":
  			case "COURSEID":
  			case "TOPIC":
  			case "ONLINE":
  			case "CHAPTERSPASSED":
  			case "REGISTERED":
  			case "CORPORATEDISTRIBUTION":
  			case "CREDITREQUESTED":
  			case "CREDITREQUESTTIMESTAMP":
  			case "COMPANYSPECIFICINFO":
  			case "COMPANYSPECIFICINFO2":
  			case "NOOFATTEMPTSCHAPTERTEST":
  			case "FINALEXAMSTATUS":
  			case "VISITEDPAGES":
  			case "VISITEDPAGENUMSTR":
  			case "COMPLETEDCHAPTERCODESTR":
  			case "INCOMPLETEDCHAPTERCODESTR":
  			case "BOOKMARKSTR":
  			case "TESTDESCRIPTION":
  			case "PASSFAILDESCRIPTION":
  			case "PASSEDCHAPTERDESC":
  			case "QUESTIONRESPONSE":
  			case "CHAPTERTESTATTEMPTSTATUS":
  			case "DATETESTPASSED":
			case "SELECTEDBANDWIDTH":
  			case "REMEDIALDESCRIPTION":
  			case "REMEDIALARRAY":
  			case "PREVMODE":
			case "QUESTIONRESPONSECHANGED":
			case "CHAPTERTESTATTEMPTCHANGED":
			case "MODE":
			case "COMPLETEDQUESTIONS":
			case "CHAPTERTESTSCORE":
			case "CHAPTERTESTATTEMPT":
			case "COURSEREFMAP":
			case "TOTALCHAPTERS":
			case "TESTQUESTIONARRAY":
  			{
  				dataPackage = dataPackage + suspend_data_separator + child.nodeName + "=" + GetText(child);
  				break;
  			}
			default:
  			{  	
  				break;						
  			}
		}
      
        child = get_nextSibling(child);
    }

	if(dataPackage.length > 1){
		dataPackage = dataPackage.substr(suspend_data_separator.length, dataPackage.length-suspend_data_separator.length);
	}
	
    return dataPackage;
  }
  );
	
clsProgress.method("getLMSUserData", function (suspenddata)
{
	var progressData = suspenddata.split(suspend_data_separator);
	var i;
	var node;
	
	for(i=0; i < progressData.length; i++){
		node = progressData[i].toString().split("=");
		// put the stored value in the XML document.
		try{
			var tempNode = SelectSingleNode(xmlDoc, "/package/" + node[0]);
			
			if(tempNode != null){
				SetText(node[1], tempNode);
			}			
		}catch(ex){
		}
	}
} 
);

} // end class

