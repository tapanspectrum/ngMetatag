var app = angular.module("myApp", ['ngMeta','ngRoute']);

// route start here
app.config(function($routeProvider, $locationProvider,ngMetaProvider) {
    debugger
    $routeProvider
        .when("/", {
            templateUrl: "test.html",
            controller: 'myCtrl',
            data: {
                meta: {
                  'title': 'Home page',
                  'description': 'Home page description'
                }
              }
        })
        .when("/jobdescription/:id", {

            templateUrl: 'job_description.html',
            controller: 'discCtrl',
            data: {
                meta: {
                  'title': 'dashboard',
                  'description': 'dashboard'
                }
              }

        })
        .when("/login", {
            templateUrl: "login.html",
            controller: 'loginCtrl',
            data: {
                meta: {
                  'title': 'Login',
                  'titleSuffix': ' | Login to YourSiteName',
                  'description': 'Login'
                }
              }
        })
        
        .otherwise({
            redirectTo: '/'
        });
    //     ngMetaProvider.useTitleSuffix(true);
    // ngMetaProvider.setDefaultTag('description', 'This is the default description');
    // ngMetaProvider.setDefaultTitle('ngMeta');
    // ngMetaProvider.setDefaultTitleSuffix(' |'+ngMeta - Dynamic meta tags for your Angular SPA'); 
    ngMetaProvider.useTitleSuffix(true);
    ngMetaProvider.setDefaultTitle('Fallback Title');
    ngMetaProvider.setDefaultTitleSuffix(' | USM Fugenx');
    ngMetaProvider.setDefaultTag('author', 'Tapan Kumar Acharjee');
})
.run(function(ngMeta) {debugger
    ngMeta.init();
  });

// route start end
