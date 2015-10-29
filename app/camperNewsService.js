(function(camperNewsApp){
    camperNewsApp.factory('camperNewsService', ['$http', function($http){

        var getNewsFeeds = function(){
            return $http.get('http://www.freecodecamp.com/news/hot')
                .then(function(res){
                    return res.data;
                });
        };

        return {
            getNewsFeeds: getNewsFeeds
        }

    }]);
}(angular.module('CamperNewsApp')));