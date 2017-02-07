//
// default values for unregistered course
//

defaultXML = '<?xml version="1.0"?>'
defaultXML = defaultXML + "<package>\n"
defaultXML = defaultXML + "<ID></ID>\n"
defaultXML = defaultXML + "<CustomerID></CustomerID>\n"
defaultXML = defaultXML + "<WWWCustomerID></WWWCustomerID>\n"

defaultXML = defaultXML + "<CourseID>CLIONA</CourseID>\n"

defaultXML = defaultXML + "<FirstName></FirstName>\n"
defaultXML = defaultXML + "<LastName></LastName>\n"
defaultXML = defaultXML + "<Company></Company>\n"
defaultXML = defaultXML + "<Address1></Address1>\n"
defaultXML = defaultXML + "<Address2></Address2>\n"
defaultXML = defaultXML + "<Address3></Address3>\n"
defaultXML = defaultXML + "<City></City>\n"
defaultXML = defaultXML + "<State></State>\n"
defaultXML = defaultXML + "<ZipCode></ZipCode>\n"
defaultXML = defaultXML + "<DayPhone></DayPhone>\n"
defaultXML = defaultXML + "<eMail></eMail>\n"
defaultXML = defaultXML + "<StatesRegistered></StatesRegistered>\n"

defaultXML = defaultXML + "<Topic>Specialized Knowledge and Applications (SKA)</Topic>\n"

defaultXML = defaultXML + "<Download>0</Download>\n"
defaultXML = defaultXML + "<Online>0</Online>\n"
defaultXML = defaultXML + "<DateTestPassed></DateTestPassed>\n"
defaultXML = defaultXML + "<ChaptersPassed>0</ChaptersPassed>\n"
//hrb start : removed default value 12/31/1969
defaultXML = defaultXML + "<LastUpdated></LastUpdated>\n"
//hrb end : removed default value 12/31/1969
defaultXML = defaultXML + "<SendCertificate>0</SendCertificate>\n"
defaultXML = defaultXML + "<Processed>0</Processed>\n"
defaultXML = defaultXML + "<ProcessedTimestamp></ProcessedTimestamp>\n"
defaultXML = defaultXML + "<Registered>0</Registered>\n"
defaultXML = defaultXML + "<ChaptersAvailable>32767</ChaptersAvailable>\n"
defaultXML = defaultXML + "<CorporateDistribution>0</CorporateDistribution>\n"
defaultXML = defaultXML + "<CreditRequested>0</CreditRequested>\n"
defaultXML = defaultXML + "<CreditRequestTimestamp></CreditRequestTimestamp>\n"
defaultXML = defaultXML + "<ObjectivesMet></ObjectivesMet>\n"
defaultXML = defaultXML + "<PrereqsOK></PrereqsOK>\n"
defaultXML = defaultXML + "<MaterialValuable></MaterialValuable>\n"
defaultXML = defaultXML + "<ContentCurrent></ContentCurrent>\n"
defaultXML = defaultXML + "<TimeOK></TimeOK>\n"
defaultXML = defaultXML + "<WantAccountingAuditing></WantAccountingAuditing>\n"
defaultXML = defaultXML + "<WantManagement></WantManagement>\n"
defaultXML = defaultXML + "<WantTaxation></WantTaxation>\n"
defaultXML = defaultXML + "<WantSoftwareApplications></WantSoftwareApplications>\n"
defaultXML = defaultXML + "<WantPersonalDevelopment></WantPersonalDevelopment>\n"
defaultXML = defaultXML + "<WantSpecializedKnowledge></WantSpecializedKnowledge>\n"
defaultXML = defaultXML + "<ForCPE></ForCPE>\n"
defaultXML = defaultXML + "<ForCE></ForCE>\n"
defaultXML = defaultXML + "<ForCPD></ForCPD>\n"
defaultXML = defaultXML + "<ForCLE></ForCLE>\n"
defaultXML = defaultXML + "<ForMCLE></ForMCLE>\n"
defaultXML = defaultXML + "<UseMeInAds></UseMeInAds>\n"
defaultXML = defaultXML + "<SendMeAds></SendMeAds>\n"
defaultXML = defaultXML + "<LikedMost></LikedMost>\n"
defaultXML = defaultXML + "<MoreTopics></MoreTopics>\n"
defaultXML = defaultXML + "<Bookmark>0</Bookmark>\n"
defaultXML = defaultXML + "<TimeSpent>0</TimeSpent>\n"
defaultXML = defaultXML + "<CompanySpecificInfo></CompanySpecificInfo>\n"
defaultXML = defaultXML + "<StartDate>12/31/1969</StartDate>\n"
defaultXML = defaultXML + "<DateTestPassedTimestamp></DateTestPassedTimestamp>\n"
defaultXML = defaultXML + "<CompanySpecificInfo2></CompanySpecificInfo2>\n"
//HRB: Added for maintaining the progress percentage -->
defaultXML = defaultXML + "<VisitedPages></VisitedPages>\n"
//HRB: End addition for progress percentage -->
//HRB: Added for saving status of chapter
defaultXML = defaultXML + "<VisitedPageNumStr></VisitedPageNumStr>\n"
defaultXML = defaultXML + "<CompletedChapterCodeStr></CompletedChapterCodeStr>\n"
defaultXML = defaultXML + "<InCompletedChapterCodeStr></InCompletedChapterCodeStr>\n"
//HRB:End of Added for saving status of chapter
defaultXML = defaultXML + "<NoOfAttemptsChapterTest></NoOfAttemptsChapterTest>\n"
//HRB start: Added for bookmarks
defaultXML = defaultXML + "<bookmarkStr></bookmarkStr>\n"
//HRB end : Added for bookmarks
//start HRB: For maintaining status of final exam
defaultXML = defaultXML + "<finalExamStatus></finalExamStatus>\n"
//end HRB: For maintaining status of final exam
//hrb start : added to save the state of test pass/fail page, congratulation page and remedial pages
defaultXML = defaultXML + "<testDescription></testDescription>\n"
defaultXML = defaultXML + "<passfailDescription></passfailDescription>\n"
defaultXML = defaultXML + "<passedChapterDesc></passedChapterDesc>\n"
//hrb start : store the remedial pages details
defaultXML = defaultXML + "<remedialDescription></remedialDescription>\n"
defaultXML = defaultXML + "<RemedialArray></RemedialArray>\n"
defaultXML = defaultXML + "<prevMode></prevMode>\n"
//hrb end :  store the remedial pages details
defaultXML = defaultXML + "<Status></Status>\n"
//hrb end : added to save the state of test pass/fail page, congratulation page and remedial pages
//hrb start:added to save and restore  the bandwidth selected
defaultXML = defaultXML + "<SelectedBandwidth></SelectedBandwidth>\n"
//hrb end:added to save and restore  the bandwidth selected

//start Hrb: Added for preserve chapter test
defaultXML = defaultXML + "<QuestionResponse></QuestionResponse>\n"
defaultXML = defaultXML + "<ChapterTestAttemptStatus></ChapterTestAttemptStatus>\n"
//end Hrb: Added for preserve chapter test

//start Hrb: Added for storing if question response/chapter test attempt status changed
defaultXML = defaultXML + "<QuestionResponseChanged></QuestionResponseChanged>\n"
defaultXML = defaultXML + "<ChapterTestAttemptChanged></ChapterTestAttemptChanged>\n"
defaultXML = defaultXML + "<Mode></Mode>\n"
defaultXML = defaultXML + "<ChapterTestScore></ChapterTestScore>\n"
defaultXML = defaultXML + "<ChapterTestAttemptMap></ChapterTestAttemptMap>\n"
defaultXML = defaultXML + "<CourseRefMap></CourseRefMap>\n"
defaultXML = defaultXML + "<TotalChapters></TotalChapters>\n"
defaultXML = defaultXML + "<TestQuestionArray></TestQuestionArray>\n"
//end Hrb: Added for storing if question response/chapter test attempt status changed

defaultXML = defaultXML + "</package>\n"

