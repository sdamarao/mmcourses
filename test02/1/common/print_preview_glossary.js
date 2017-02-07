//HRB: This script generates entire course glossary print Preview page dynamically 

var curIndex = 0;
var curCourseRefId;
var iFrameGlossContent;
var chapterContentDiv;
var gblGlossRefArr = {};
var gblGlossKeyArr = new Array();

if (typeof gblArrGlossaryWords == "undefined" || gblArrGlossaryWords == null) {

    gblArrGlossaryWords = parent.gblArrGlossaryWords;
    isIE = parent.isIE;
    courseInstanceId_dyn = parent.courseInstanceId_dyn;

    // for glossary sorting
    // For IE
    if (typeof gblArrGlossaryWords == "undefined" || gblArrGlossaryWords == null) {
        gblArrGlossaryWords = opener.window.gblArrGlossaryWords;
        isIE = opener.window.isIE;
        courseInstanceId_dyn = opener.window.courseInstanceId_dyn;
    }
}
/*
Function Name : onGlossaryLoad()
Description : Dynamically adding transcript, of reference's course chapters
*/
function onGlossaryLoad() {
    chapterContentDiv = document.getElementById("chapterContentDiv");
    if (chapterContentDiv == null) {
        alert("chapterContentDiv not found");
        return;
    }
    if (curIndex == gblArrGlossaryWords.length) {

        // Sort glossary
        sortGlossary();

        if (typeof parent.contentFrameOnLoad != 'undefined') {
            parent.isGlossaryLoaded = true;
            parent.contentFrameOnLoad();
        }

        // Display glossary content & hide text "Loading..."
        document.getElementById("glossContent").style.display = "block";
        document.getElementById("loadingDiv").style.display = "none";

        return;
    }

    curCourseRefId = gblArrGlossaryWords[curIndex].courseInstaceId;

    iFrameGlossContent = document.getElementById("course_CI_" + gblArrGlossaryWords[curIndex].courseInstaceId);

    if (!iFrameGlossContent || typeof iFrameGlossContent == "undefined") {
        // create iframe
        iFrameGlossContent = document.createElement("iframe");

        iFrameGlossContent.setAttribute("id", "course_CI_" + gblArrGlossaryWords[curIndex].courseInstaceId);
        iFrameGlossContent.style.display = "none";
        if (isIE) {
            iFrameGlossContent.attachEvent("onload", onIFrameLoad);
        } else {
            iFrameGlossContent.setAttribute("onload", "onIFrameLoad()");
        }
        basePath = document.location.href.substring(0, document.location.href.indexOf('print_preview_glossary.htm') - (courseInstanceId_dyn.length + 1));
        iFrameGlossContent.src = basePath + gblArrGlossaryWords[curIndex].courseInstaceId + "/print_preview_glossary.htm";
        document.body.appendChild(iFrameGlossContent);
    }
    else {
        onIFrameLoad();
    }
}
/*
HRB: Function Name : onIFrameLoad()
Description : Dynamically creates print preview of glossary complete course
*/
function onIFrameLoad() {
    var curTermIndex = curIndex;
    if (curTermIndex < gblArrGlossaryWords.length && gblArrGlossaryWords[curTermIndex].courseInstaceId == curCourseRefId) {
        var strGlossDescFile = gblArrGlossaryWords[curTermIndex].descFilePath;
        var glossId = strGlossDescFile.substring(strGlossDescFile.lastIndexOf('/') + 1, strGlossDescFile.indexOf('.htm'));

        iFrameGlossContent = document.getElementById("course_CI_" + gblArrGlossaryWords[curTermIndex].courseInstaceId);

        var termHR;
        if (isIE) {
            try {
                termHR = iFrameGlossContent.contentWindow.document.getElementById(glossId);
            }
            catch (err) {
                //To do work is  required
            }
        } else {
            try {
               termHR = iFrameGlossContent.contentDocument.getElementById(glossId);
           }
           catch (err) {
               //To do work is  required
           }   
        }

        if (typeof termHR != "undefined" && termHR != null) {
            if (document.getElementById("glossaryDefault") != null) {
                document.getElementById("glossaryDefault").innerHTML = "";
            }

            var tagHR = document.createElement("hr");
            tagHR.id = termHR.id;
            chapterContentDiv.appendChild(tagHR);
            var x = termHR.nextSibling;
            if (isIE) {
                while (x != null && (x.nodeName != 'hr' && x.nodeName != "HR")) {
                    var tmpElement = document.createElement(x.nodeName);
                    tmpElement.innerHTML = x.innerHTML;

                    chapterContentDiv.appendChild(tmpElement);
                    x = x.nextSibling;

                }
            }
            else {
                while (x != null && (x.nodeName != 'hr' && x.nodeName != "HR")) {
                    chapterContentDiv.appendChild(x);
                    x = termHR.nextSibling;

                }
            }
        }
        curIndex++;
        onGlossaryLoad();
    }
}
/*
HRB:Function Name : sortGlossary()
Description : Sorting of glossary terms added dynamically 
*/
function sortGlossary() {

    var curPageGlossTerms = document.getElementsByTagName("hr");

    for (var ind = 0; ind < curPageGlossTerms.length; ind++) {
        var curTermHR = curPageGlossTerms[ind];
        if (curTermHR != null && typeof curTermHR != "undefined" && typeof curTermHR.id != "undefined") {
            var x = curTermHR.nextSibling;
            while (x != null && typeof x != "undefined") {

				if((x.tagName == "h3" || x.tagName == "H3") || (x.tagName == "div" || x.tagName == "DIV")){
                    if (typeof gblGlossRefArr[x.innerHTML] == "undefined") {
                        gblGlossKeyArr.push(x.innerHTML);
                        gblGlossRefArr[x.innerHTML] = curTermHR.id;
                    }
                    break;
                } else {
                    x = x.nextSibling;
                }
            }
        }
    }

    // Sort the gblGlossKeyArr array
    gblGlossKeyArr.sort();

    var glossaryContentDiv = document.getElementById("GlossaryContentDiv");

    for (iIndex = 0; iIndex < gblGlossKeyArr.length; iIndex++) {

        var hrId = gblGlossRefArr[gblGlossKeyArr[iIndex]];
        var termHR = document.getElementById(hrId);

        if (typeof termHR != "undefined" && termHR != null) {
            var tagHR = document.createElement("hr");
            tagHR.id = termHR.id;
            glossaryContentDiv.appendChild(tagHR);
            var x = termHR.nextSibling;
            while (x != null && (x.nodeName != 'hr' && x.nodeName != "HR")) {
                glossaryContentDiv.appendChild(x);
                x = termHR.nextSibling;
            }
        }

    }
    // Remove chapterContentDiv
    chapterContentDiv = document.getElementById("chapterContentDiv");
    var parentChapterContentDiv = chapterContentDiv.parentNode;
    parentChapterContentDiv.removeChild(chapterContentDiv);
}
