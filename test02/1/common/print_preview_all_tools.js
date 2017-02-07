var curIndex = 0;
var curCourseRefId;
var iFrameAllToolsContent;
var chapterContentDiv;
var gblAllToolRefArr = {};

if (typeof gblArrResourceItems == "undefined" || gblArrResourceItems == null) {

    gblArrResourceItems = parent.gblArrResourceItems;
    isIE = parent.isIE;
    courseInstanceId_dyn = parent.courseInstanceId_dyn;

    if (typeof gblArrResourceItems == "undefined" || gblArrResourceItems == null) {
        gblArrResourceItems = opener.window.gblArrResourceItems;
        isIE = opener.window.isIE;
        courseInstanceId_dyn = opener.window.courseInstanceId_dyn;
    }
}
function onAllToolsResourcesLoad() {
    if (curIndex == gblArrResourceItems.length) {
        return;
    }
    curCourseRefId = gblArrResourceItems[curIndex].courseInstaceId;
    iFrameAllToolsContent = document.getElementById("course_CI_" + gblArrResourceItems[curIndex].courseInstaceId);

    if (!iFrameAllToolsContent || typeof iFrameAllToolsContent == "undefined") {
        // create iframe
        iFrameAllToolsContent = document.createElement("iframe");

        iFrameAllToolsContent.setAttribute("id", "course_CI_" + gblArrResourceItems[curIndex].courseInstaceId);
        iFrameAllToolsContent.style.display = "none";
        if (isIE) {
            iFrameAllToolsContent.attachEvent("onload", onIFrameLoad);
        } else {
            iFrameAllToolsContent.setAttribute("onload", "onIFrameLoad()");
        }

        basePath = document.location.href.substring(0, document.location.href.indexOf('print_preview_tools.htm') - (courseInstanceId_dyn.length + 1));
        iFrameAllToolsContent.src = basePath + gblArrResourceItems[curIndex].courseInstaceId + "/print_preview_tools.htm";
        document.body.appendChild(iFrameAllToolsContent);
    }
    else {
        onIFrameLoad();
    }
}

/*
HRB: Function Name : onIFrameLoad()
Description : Dynamically load supplimetns of the course
*/
function onIFrameLoad() {
    var curTermIndex = curIndex;
    if (curTermIndex < gblArrResourceItems.length && gblArrResourceItems[curTermIndex].courseInstaceId == curCourseRefId) {
        if (document.getElementById("toolsDefault") != null) {
            document.getElementById("toolsDefault").innerHTML = "";
        }
        var strallToolsDescFile = gblArrResourceItems[curTermIndex].resourcePath;
        //alert("strallToolsDescFile: " + strallToolsDescFile);
        var allToolsId = strallToolsDescFile.substring(strallToolsDescFile.lastIndexOf('/') + 1, strallToolsDescFile.length);
        iFrameAllToolsContent = document.getElementById("course_CI_" + gblArrResourceItems[curTermIndex].courseInstaceId);

        var chapterTranscriptsDiv = document.getElementById("chapterContentDiv");

        var anchorLink = document.createElement('a');
        anchorLink.setAttribute("class", "clsGlossaryLinks");
        if (isIE) {
            anchorLink.setAttribute("className", "clsGlossaryLinks");
        }
		if(is508Compliance){
			anchorLink.tabIndex="2";
			anchorLink.style.border="4px solid transparent";
			anchorLink.onfocus=function(){onfocuselement(this)};
			anchorLink.onblur=function(){onblurelement(this)};
		}
        var path = "../" + curCourseRefId + "/images/" + allToolsId;
        anchorLink.setAttribute("href", strallToolsDescFile);
        anchorLink.setAttribute("title", "View this document");
        anchorLink.setAttribute("target", "_blank");
        anchorLink.innerHTML = gblArrResourceItems[curTermIndex].resourceName;

        //var toolsDiv = document.createElement('div');
        //toolsDiv.id = "tools";
        chapterTranscriptsDiv.appendChild(anchorLink);

        var subTag = document.createElement('sub');
        chapterTranscriptsDiv.appendChild(subTag);

        var brTag = document.createElement('br');
        chapterTranscriptsDiv.appendChild(brTag);

        curIndex++;
        onAllToolsResourcesLoad();
    }
}
	
	