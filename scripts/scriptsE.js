"use strict";angular.module("TKUCourseApplication",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/donate",{templateUrl:"views/donate.html",controller:"DonateCtrl",controllerAs:"donate"}).when("/faq",{templateUrl:"views/faq.html",controller:"FAQCtrl",controllerAs:"faq"}).when("/explanation",{templateUrl:"views/explanation.html",controller:"ExplanationCtrl",controllerAs:"explanation"}).when("/declaration",{templateUrl:"views/declaration.html",controller:"DeclarationCtrl",controllerAs:"declaration"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){var c=function(){return b.path()};a.$watch(c,function(b,c){b!==c&&(a.activetab=b)})}]),String.prototype.customToProperCase=function(){return this.replace(/\b\w+/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})},String.prototype.customIsUrl=function(){return!!this.match(/^(https?:)|^\/|^#/)},angular.module("TKUCourseApplication").controller("MainCtrl",["$scope",function(a){a.welcomeMessage="Welcome!"}]),angular.module("TKUCourseApplication").controller("AboutCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("ContactCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("DonateCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("FAQCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("ExplanationCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("DeclarationCtrl",["$scope","resumeService",function(a,b){a.resume=b.resume.get()}]),angular.module("TKUCourseApplication").controller("BlogCtrl",["$log","$scope","blogService",function(a,b,c){var d=this;b.listings=d.listings=c.listings.get(function(a){b.entryShown=!0,b.entryNum=0,b.entryUrl=a[b.entryNum].file,b.listingClasses="col-md-4",b.entryClasses="col-md-7"}),b.$watch("entryShown",function(a,c){a!==c&&(a===!1?(b.listingClasses="",b.entryClasses=""):(b.listingClasses="col-md-4",b.entryClasses="col-md-7"))}),b.openEntry=function(a){return b.entryShown=!0,0>a?"404.html":b.listings.length<=a?"404.html":(b.entryNum=a,void(b.entryUrl=b.listings[a].file))},b.closeEntry=function(){b.entryShown=!1,b.entryNum=null,b.entryUrl=null},b.toggleEntry=function(a){a===b.entryNum?b.closeEntry():b.openEntry(a)}}]),angular.module("TKUCourseApplication").service("blogService",["$resource",function(a){this.listings=a("/api/bloglistings.json",{},{get:{isArray:!0}})}]),angular.module("TKUCourseApplication").service("resumeService",["$resource",function(a){this.resume=a("/api/resume_e.json",{},{cache:!0})}]),angular.module("TKUCourseApplication").run(["$templateCache",function(a){a.put("views/faq.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/faq";</script>'),a.put("views/blog.html",'2222222222222') ,a.put("views/contact.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/contact";</script>') ,a.put("views/about.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/about";</script>'), a.put("views/explanation.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/explanation";</script>'), a.put("views/declaration.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/declaration";</script>'), a.put("views/donate.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/donate";</script>'),a.put("views/main.html",'<script>location.href="http://tkucourseapplication.sourceforge.net/android/indexE.php#/";</script>')}]);
