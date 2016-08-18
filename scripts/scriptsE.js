"use strict";angular.module("TKUCourseApplication",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/donate",{templateUrl:"views/donate.html",controller:"DonateCtrl",controllerAs:"donate"}).when("/faq",{templateUrl:"views/faq.html",controller:"FAQCtrl",controllerAs:"faq"}).when("/explanation",{templateUrl:"views/explanation.html",controller:"ExplanationCtrl",controllerAs:"explanation"}).when("/declaration",{templateUrl:"views/declaration.html",controller:"DeclarationCtrl",controllerAs:"declaration"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){var c=function(){return b.path()};a.$watch(c,function(b,c){b!==c&&(a.activetab=b)})}]),String.prototype.customToProperCase=function(){return this.replace(/\b\w+/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})},String.prototype.customIsUrl=function(){return!!this.match(/^(https?:)|^\/|^#/)},angular.module("TKUCourseApplication").controller("MainCtrl",["$scope",function(a){a.welcomeMessage="Welcome!"}]),angular.module("TKUCourseApplication").controller("AboutCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("ContactCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("DonateCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("FAQCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("ExplanationCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("DeclarationCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("BlogCtrl",["$log","$scope","blogService",function(a,b,c){var d=this;b.listings=d.listings=c.listings.get(function(a){b.entryShown=!0,b.entryNum=0,b.entryUrl=a[b.entryNum].file,b.listingClasses="col-md-4",b.entryClasses="col-md-7"}),b.$watch("entryShown",function(a,c){a!==c&&(a===!1?(b.listingClasses="",b.entryClasses=""):(b.listingClasses="col-md-4",b.entryClasses="col-md-7"))}),b.openEntry=function(a){return b.entryShown=!0,0>a?"404.html":b.listings.length<=a?"404.html":(b.entryNum=a,void(b.entryUrl=b.listings[a].file))},b.closeEntry=function(){b.entryShown=!1,b.entryNum=null,b.entryUrl=null},b.toggleEntry=function(a){a===b.entryNum?b.closeEntry():b.openEntry(a)}}]),angular.module("TKUCourseApplication").service("blogService",["$resource",function(a){this.listings=a("/api/bloglistings.json",{},{get:{isArray:!0}})}]),angular.module("TKUCourseApplication").service("resumeService",["$resource",function(a){this.resume=a("/api/resume_e.json",{},{cache:!0})}]),angular.module("TKUCourseApplication").run(["$templateCache",function(a){a.put("views/faq.html",'<p class="text-right"><a href="index.html#/faq">中文</a></p><div class="row personal-info" ng-cloak> <h1>FAQ :</h1></div> <div class="skills" ng-cloak> <div class="skill-listing" ng-repeat="skill in resume.skills track by skill.question"> <table class="skills-table table table-striped"> <thead> <tr> <th ng-bind="skill.question" colspan="2"></th> </tr> </thead> <tbody> <tr ng-repeat="item in [\'answer\']" ng-if="skill[item]"> <td ng-if="!skill[item].customIsUrl()" ng-bind="skill[item].customToProperCase()"></td> </tr> <tr ng-repeat="repo in skill.repositories"> </tr> </tbody> </table> </div> </div>'),a.put("views/blog.html",'2222222222222') ,a.put("views/contact.html",'<p class="text-right"><a href="index.html#/contact">中文</a></p><h1><p><b>Contact us :</b></p><h1><h3><p>&nbsp;</p><p>You can use this e-mail to contact us with any question : </p><p>&nbsp;</p><p class=><a href="mailto:tku.course.assistant@gmail.com">tku.course.assistant@gmail.com</a></p><p>&nbsp;</p></h3>') ,a.put("views/about.html",'<p class="text-right"><a href="index.html#/about">中文</a></p><h1><p><b>About : </b></p><p>&nbsp;</p></h1><h2><p>We are intimate developer to help you select course when you cannot use the computer in specified time. </p><p>&nbsp;</p></h2><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/app_layout_e.jpg" alt="syntax highlighted code"> </div><blockquote> TKU Course Application can help you select course in everywhere.</blockquote>'), a.put("views/explanation.html",'<p class="text-right"><a href="index.html#/explanation">中文</a></p><p><b><h1>User Guide :</h1></b></p> <p><h3>Interface Guide : </h3></p><blockquote><p>ID : Input your student ID.</p><p>PWD : Input your "select course" password.</p><p>Mode : Divide in to mode, Normal mode (select one time), Loop mode(select unlimited times)</p><p>Server : Select the server which you want to use.</p><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/explanation_1_e.jpg" alt="syntax highlighted code"> </div></blockquote><p><h3>This application use some symbol to recognize the course which you want to select,  it has two mode in this application. </h3></p><p>&nbsp;</p><p><h3>1. Normal Mode :</h3></p><blockquote><p> Please use “&gt;”, “#” ,”,” these symbols to separate your course codes.</p><p>“&gt;” is your order divide symbol</p><p>“#” is drop course symbol, should be used at the beginning of the course code, be extra careful using this!!</p><p>”,”or newline are your region divide symbol.</p><p><font color="red">Please don’t add the space symbol and any other symbol in the application!! </font></p><p> Course Code Input Example : </p><div class="skills"> <div class="skill-listing"><table class="skills-table table table-striped"><tbody> <tr><td>0000&gt; 1111&gt; 2222, #3333, 4444, 5555&gt; 6666, 7777&gt; #8888&gt; 9999, 1234&gt; #2345&gt; 3456</td> </tr> </tbody> </table> </div> </div><p>OR</p<div class="skills"> <div class="skill-listing"><table class="skills-table table table-striped"><tbody><tr><td>0000&gt;1111&gt;2222</p><p>#3333</p><p>4444</p><p>5555&gt;6666</p><p>7777&gt;#8888&gt;9999</p><p>1234&gt;#2345&gt;3456</td> </tr> </tbody> </table> </div> </div><p>Both methods have the same meaning, you can choose one of them to use.</p><p> If course 0000,4444,5555,6666,7777 are full, the application will execute as fellow :</p><div class="skills"> <div class="skill-listing"> <table class="skills-table table table-striped"> <tbody> <tr> <td><p>→ Add 0000 (full, use alternate)</p><p>→ Add 1111(success, jump to the next region)</p><p>→ Drop 3333(always drop)</p><p>→ Add 4444(full, always add)</p><p>→ Add 5555(full, use alternate)</p><p>→ Add 6666(full, no alternative just jump to the next region)</p><p>→ Add 7777(full, use alternate)</p><p>→ Drop 8888(always drop and use next alternate)</p><p>→ Add 9999(success, jump to the next)</p><p>→ Add 1234(success, jump to the next)</p><p>→ end(no next region)</td> </tr> </tbody> </table> </div> </div><p> Before you click the start button, it will jump the message box to confirm your command (as shown below).</p><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/explanation_2_e.jpg" alt="syntax highlighted code"></div></blockquote><p>&nbsp;</p><p><h3>2. Loop Mode :</h3></p><blockquote><p>The Region divide symbol can use”,” or newline to separate each course code.</p><p><font color="red"> Please don’t add the space symbol and any other symbol in the application!! </font></p><p> Course Code Input Example : </p><div class="skills"> <div class="skill-listing"> <table class="skills-table table table-striped"> <tbody> <tr> <td>1234,2345,3456</td> </tr> </tbody> </table> </div> </div><p>The application will repeat select 1234,2345,3456 these three course code until one of the code add successful. (Include auto repeat login.)</p></font><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/explanation_3_e.jpg" alt="syntax highlighted code"> </div></blockquote><h3><p>Application in background running will display on notification, you can click home button to jump out the application to use any other application (as shown below) : </p><p>&nbsp;</p><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/explanation_4_e.jpg" alt="syntax highlighted code"> </div><p>&nbsp;</p><p>If the application add the course successfully, it will send notification to notify you which course the application select successful (as shown below) : </p><p>&nbsp;</p><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/explanation_5_e.jpg" alt="syntax highlighted code"> </div></h3>'), a.put("views/declaration.html",'<p class="text-right"><a href="index.html#/declaration">中文</a></p><p><b><h1>Terms of use :</h1></b></p><p><b><h2><font color="red">Before using the app you need to read the terms of use. If you use this app that means you agree the terms of use!! </font></h2></b></p><p>&nbsp;</p><blockquote><p>1.沒有一個程式是完美的，每個程式都有可能存在bug，但開發者會盡量的對於選課程式進行修正，讓程式能夠更完美。由於在非選課期間礙於無法使用選課系統所以沒辦法完美進行測試，若在選課期間有出現任何程式問題需請使用者"自行負責"，開發者已經盡最大的力量了，請多體諒開發者。</p></blockquote><p>&nbsp;</p><blockquote><p>2.本程式是作為選課的輔助工具，而不是保證能夠100%選到課的神器，開發這個程式的最主要原因是每次只要一選課完就看到許多同學在透可版上或是其他地方抱怨自己沒選到課的慘況，以及無法在特定時間在電腦前面選課的同學，為了造福淡江同學而設計的。 </p></blockquote><p>&nbsp;</p><blockquote><p>3.本程式並未對學校系統進行攻擊，也未觸犯到第三十六章，本身完全沒有任何破解學校電腦系統，或是無故侵入他人帳號密碼、取得或變更相關設備電磁記錄。程式功能之儲存上次使用紀錄僅儲存於使用者手機端並無儲存於其他任何區域。</p></blockquote><p>&nbsp;</p><blockquote><p>4.本程式使用以電腦模擬人的判斷方式來讓電腦幫您選課，並非使用傳送封包來進行選課，請您放心使用。</p></blockquote><p>&nbsp;</p><blockquote><p>5.本程式僅供學術參考之用途，若使用者下載之後拿來做為不正當用途，使用程式的人須自行負起全部責任，開發程式人員及其相關人員則一概不負任何責任。</p></blockquote><p>&nbsp;</p><blockquote><p>6.本程式使用會消耗一定的網路資源進行選課，使用者因為自身任何使用方式造成的任何網路費用本程式開發者一率不做任何負擔賠償。</p></blockquote>'), a.put("views/donate.html",'<p class="text-right"><a href="index.html#/donate">中文</a></p><h1><p><b>Donate us : </b></p><p>&nbsp;</p></h1><h3><p>If you want to give a sponsor to the developer, you can use the line of the text below the link to donate us!! (Can use convenient store code to donate.)</p><p>&nbsp;</p><p>&nbsp;</p><p class="text-center"><a href="http://tkucourseapplication.sourceforge.net/autopayment.php">Donate 100 NT</a></p><p>&nbsp;</p></h3><h4><form action="http://tkucourseapplication.sourceforge.net/autopayment.php" method="post" class="text-center">Or other amount : <input type="text" name="Amt">&nbsp;&nbsp;<input type="submit" value="Submit"></form><p>&nbsp;</p><p>&nbsp;</p></h4>'),a.put("views/main.html",'<p class="text-right"><a href="index.html">中文</a></p> <h1><p class="text-center"><b>TKU Course Application</b></p><p>&nbsp;</p><p class="text-center">Select Course Anytime and Anywhere</p><p>&nbsp;</p><p class="text-center"><a href="https://play.google.com/store/apps/details?id=com.TKU.Course.Application&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" width="50%" height="50%"/></a></p><p>&nbsp;</p></h1><div class="main-image-wrapper"> <img class="img-responsive center-block img-rounded" src="images/app_layout_e.jpg" alt="syntax highlighted code"> </div><blockquote> TKU Course Application can help you select course in everywhere.</blockquote> <p>* For details, please see the terms of use.</p>')}]);