angular.module('project',[ngRoute,'firebase'])
.value('fbURL','https://ng-projects-list.firebaseio.com/')
.service('fbRef',function (fbURL) {
    return new Firebase(fbURL)
})
.service('fbAuth', function($q, $firebase, $firebaseAuth, fbRef) {
    var auth;
    return function () {
        if (auth) return $q.when(auth);
        var authObj = $firebaseAuth(fbRef);
        if (authObj.$getAuth()) {
            return $q.when(auth = authObj.$getAuth());
        }
        var deferred = $q.defer();
        authObj.$authAnonymously().then(function(authData) {
            auth = authData;
            deferred.resolve(authData);
        });
        return deferred.promise;
    }
})
    .service('Projects', function($q, $firebase, fbRef, fbAuth, projectListValue) {
        var self = this;
        this.fetch = function () {
            if (this.projects) return $q.when(this.projects);
            return fbAuth().then(function(auth) {
                var deferred = $q.defer();
                var ref = fbRef.child('projects-fresh/' + auth.auth.uid);
                var $projects = $firebase(ref);
                ref.on('value', function(snapshot) {
                    if (snapshot.val() === null) {
                        $projects.$set(projectListValue);
                    }
                    self.projects = $projects.$asArray();
                    deferred.resolve(self.projects);
                });

                //Remove projects list when no longer needed.
                ref.onDisconnect().remove();
                return deferred.promise;
            });
        };
    })
    .config(function ($routeProvider) {
        var resolveProjects = {
            projects:function (Projects) {
                return Projects.fetch()
            }
        };
        $routeProvider
            .when('/',{
                controller:'ProjectlistController as projectList',
                templateUrl:'list.html',
                resolve:resolveProjects
            })
            .when('/edit/:projectId',{
                controller:'EditProjectController as editProject',
                templateUrl:'detail.html',
                resolve:resolveProjects
            })
            .when('/new',{
                controller:'NewProjectController as newProject',
                templateUrl:'detail.html',
                resolve:resolveProjects
            })
            .otherwise({
                redirectTo:'/'
            })
    })
    .controller('ProjectlistController',function (project) {
        var projectList = this;
        projectList.projects = projects;
    })
.directive('testDirective',function () {
    return{
        templateUrl:'list.html'
    }
});
