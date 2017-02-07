
 //hrb: start 04/17/09
 
//  Variables used to set current browser type
var isIE      = false;
var isFF      = false;
var isSafari  = false;
var isMacOS   = false;
var isChrome  = false;

/* 
Function        : checkBrowser
Input parameter : none
Description     : This function Checks browser and sets appropriate flag
*/
function checkBrowser()
{
    //alert("Dinesh: checkBrowser");
    if((/MSIE/i.test(navigator.userAgent)) || (/Trident\//i.test(navigator.userAgent))){ //For IE
        isIE = true;
    }
    else if(/FireFox/i.test(navigator.userAgent))//For FireFox
    {
        isFF = true;
    }
    else if(/Chrome/i.test(navigator.userAgent))
	  {
		  isChrome=true;
	  }
	  else if(/Safari/i.test(navigator.userAgent))//For Safari
	  {
		  isSafari = true;
	  }
	  else if(/Macintosh/i.test(navigator.userAgent))
	  {
		  isMac = true;
	  }
	  if(navigator.platform.match("Mac"))
	  {
		  isMacOS = true;
	  }
}

// Call the function for setting the browser flag
checkBrowser();


/*
Function        : GetDOMObject
Input parameter : 
                  type:
                    It contains string either 'xmlstring' or 'xmlfile'
                  responseXML:
                    It contains either xmlstring or xmlfile name
Description     : This function performs XML operation depending on the input
                  variable 'type' for browser compatibility 
*/
function GetDOMObject(type,responseXML)
{
    var xmlDoc;
    var parser;
    var retXML=responseXML.trim();
	var xmlhttp;

    if("xmlstring" == type) // load the xml string in xmldoc object
    {
        if (isIE)
        {
            xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async=false;
            xmlDoc.loadXML(retXML);
        }
        else// for other than IE browsers
        {
            parser=new DOMParser();
            xmlDoc=parser.parseFromString(retXML,"text/xml");
            xmlDoc.async=false;
        }
        return xmlDoc;
    }
    else
    if("xmlfile" == type) // load the xml file in xmldoc object
    {
        if (isIE)
        {
          xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        }
        else
        {
		  if(g_isOLP)
		  {
		    xmlDoc = new XMLHttpRequest();
		  }
		  else
		  {
			if(isSafari || isChrome){
				xmlhttp = new XMLHttpRequest();
			}
			else{
				xmlDoc = document.implementation.createDocument("","",null);
			}
		  }			
        }
		if(g_isOLP && !isIE)
		{
			xmlDoc.open("GET",retXML,false);
			xmlDoc.send(null);
			var resStr = xmlDoc.responseText.trim();
			parser=new DOMParser();
			xmlDoc=parser.parseFromString(resStr,"text/xml");
		}
		else
		{
			if(isSafari || isChrome){
				xmlhttp.open("GET",retXML,false);
				xmlhttp.send();
				xmlDoc=xmlhttp.responseXML;
			}
			else{
				xmlDoc.async=false;
				xmlDoc.load(retXML);
			}
		}	
        return xmlDoc;
    }
    else
    {
        alert("GetDOMObject():: Type not suppoerted. type = "+type);
        return;
    }
}

/*
Function        : SelectSingleNode
Input parameter :
                  xmlDoc:
                    It contains XMLDOM object
                  elementPath:
                    It contains elementPath
Description     : This function selects Single Node in an XML
*/

function SelectSingleNode(xmlDoc, elementPath)
{
    if(isIE)//Internet Explorer
    {
        return xmlDoc.selectSingleNode(elementPath);
    }
    else//Firefox, Mozilla, Opera, etc.
    {
        if (document.implementation && document.implementation.createDocument)
        {
            var nodes   = xmlDoc.evaluate(elementPath, xmlDoc, null, XPathResult.ANY_TYPE, null);
            var results = nodes.iterateNext();
            return results;
        }
    }
}

/*
Function        : isError
Input parameter : 
                  xmlDoc:
                    It contains XMLDOM object
                  errMessage:
                    Contains error message
Description     : This function check for error message and display error
                  info if any
*/

function isError(xmlDoc, errMessage)
{
    var flag = false;
    if(isIE)//Internet Explorer
    {
        if (0 != xmlDoc.parseError.errorCode)
        {
            alert(errMessage + xmlDoc.parseError.errorCode + "\n" + xmlDoc.parseError.reason + "\nat line " + xmlDoc.parseError.line);
            flag = true;
        }
    } 
    else //Firefox, Mozilla, Opera, etc.
    {
        if( "parsererror" == xmlDoc.documentElement.nodeName )
        {
            alert(errMessage + xmlDoc.documentElement.childNodes[0].nodeValue);
            flag = true;
        }
    }
    return flag;
}


/*
Function        : CreateXMLHTTPobject
Input parameter : None
Description     : This function creates the 'XMLHttpRequest' object depending 
                  on the browser.
*/
function CreateXMLHTTPobject()
{
    var xmlhttp = null;
    if (window.XMLHttpRequest)// code for IE7, Firefox, Opera, etc.
    {
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)// code for IE6, IE5
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (null == xmlhttp)
    {
        alert("Your browser does not support XMLHTTP.");
    }
    return xmlhttp;
}

/*
Function        : trim
Input parameter : None
Description     : This function returns a string without leading
                  and trailing spaces.

*/
String.prototype.trim = function () 
{
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

/*
Function        : LaunchApp
Input parameter : 
                  appName-
                    path of the executable
Description     : This function launches application.
*/

function LaunchApp(appName)
{
    // Contains the Shell object
    var Shell;
    if(isIE)//Internet Explorer
    {
        try 
        {
            Shell = new ActiveXObject('WScript.Shell');
            Shell.run(appName,1);
        }
        catch(e)
        {
            alert("Message: Fail to launch the application. Error: "
            + e.message);
            return null;
        }
    }else if(isFF) // For FireFox
    {
        try 
        {
            netscape.security.PrivilegeManager.
            enablePrivilege('UniversalXPConnect');
            Shell = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
            Shell.initWithPath(appName);
            if ((typeof args == 'string') && (args != ''))
            {
                Shell._ = Components.classes['@mozilla.org/process/util;1'].
                createInstance(Components.interfaces.nsIProcess);
                Shell._.init(Shell);
                Shell._.run(false, [args], 1);
            }
            else
            {
                Shell.launch();
            }
        }
        catch(e)
        {
            alert("Message: Fail to launch the application. Error: "
            + e.message);
            return null;
        }
    }
    else
    {
        alert("Current browser is not supported to launch the application");
    }
}

 
 
  // added for save and load option
 
function GetUserDataFromStore(xmlDoc,tempXMlDoc)
{
    var child = get_firstChild((SelectSingleNode(xmlDoc,"/package")));
    while (child != null)
    {
	      // If there's something stored for the element value...
	    if (tempXMlDoc.getElementsByTagName("ROOTSTUB")[0].getAttribute(child.nodeName) != null)
	    {
		    // put the stored value in the XML document.
		    SetText(tempXMlDoc.getElementsByTagName("ROOTSTUB")[0].getAttribute(child.nodeName),SelectSingleNode(xmlDoc,"/package/" + child.nodeName));
	    }
        child = get_nextSibling(child);
    }
}
  

function SetUserDataFromStore(xmlDoc,tempXMlDoc)
{
   var child = get_firstChild(SelectSingleNode(xmlDoc,"/package"));
   while (child != null)
   {
        tempXMlDoc.getElementsByTagName("ROOTSTUB")[0].setAttribute(child.nodeName,GetText(child));
        child = get_nextSibling(child);
   }
}

function LoadProgressData(c_name)
{
    if (document.cookie.length>0)
    {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 ;
            c_end=document.cookie.indexOf(";",c_start);
            
            if (c_end==-1) 
            {
                c_end=document.cookie.length
            }
            return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return ""
}

function SaveProgressData(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}



function SetText(text,node)
{ 
    if(isIE)
    { 
        node.text = text; 
    }   
    else
    { 
        node.textContent = text; 
    }
}

function GetText(node)
{
    if(isIE)
    { 
        return node.text; 
    }
    else
    { 
        return node.textContent; 
    } 
}

 //hrb: end 04/17/09
 
 
 function get_firstChild(n)
{
y=n.firstChild;
while ((y!= null) && (y.nodeType!=1)) 
  {
  y=y.nextSibling;
  }
return y;
}

function get_nextSibling(n)
{
y=n.nextSibling;
while ((y!= null) && (y.nodeType!=1)) 
  {
  y=y.nextSibling;
  }
return y;
}


function GetInnerDiv(objDiv,divName)
{
  var children =objDiv.childNodes;
  for (var i=0;i<children.length;i++)
  {
    if ( children[i].id == divName )
    {
      //alert("Child Name:- " + children[i].id);
      return children[i];
    }
  }
}