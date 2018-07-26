var app = angular.module("tkucourseapplication", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/index.html"
    })
	.when("/chromeautofill", {
        templateUrl : "views/chromeautofill.html"
    })
	.when("/chromeextension", {
        templateUrl : "views/chromeextension.html"
    })
	.when("/contactus", {
        templateUrl : "views/contactus.html"
    })
	.when("/declaration", {
        templateUrl : "views/declaration.html"
    })
	.when("/donate", {
        templateUrl : "views/donate.html"
    })
	.when("/download", {
        templateUrl : "views/download.html"
    })
	.when("/faq", {
        templateUrl : "views/faq.html"
    })
	.when("/news", {
        templateUrl : "views/news.html"
    })
	.when("/news1-1", {
        templateUrl : "views/news1-1.html"
    })
	.when("/news1-2", {
        templateUrl : "views/news1-2.html"
    })
	.when("/news1-3", {
        templateUrl : "views/news1-3.html"
    })
	.when("/news1-4", {
        templateUrl : "views/news1-4.html"
    })
	.when("/news1-5", {
        templateUrl : "views/news1-5.html"
    })
	.when("/parallel", {
        templateUrl : "views/parallel.html"
    })
	.when("/privacy", {
        templateUrl : "views/privacy.html"
    })
	.when("/tkucourseandroid", {
        templateUrl : "views/tkucourseandroid.html"
    })
	.when("/tkucourseapplication", {
        templateUrl : "views/tkucourseapplication.html"
    })
	.when("/tkucoursewinapp", {
        templateUrl : "views/tkucoursewinapp.html"
    });
});