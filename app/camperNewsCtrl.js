(function(camperNewsApp){
    camperNewsApp.controller('camperNewsCtrl', ['$scope', 'camperNewsService', function($scope, camperNewsService){

        var onSuccess = function(data){
            $scope.newsFeeds = data;
            $scope.newsFeeds = data.map(function(val){
                if(val.image === ""){
                    return {
                        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7Zu2VzDZKUOM2j0KrGqqGHCIfr9pM1hzxSgnr_ef4jzBUUDsZ0Q',
                        headline: val.headline,
                        timePosted: val.timePosted,
                        link: val.link,
                        rank: val.rank,
                        username: val.author.username,
                        picture: val.author.picture,
                        storyLink: val.storyLink
                    }
                }else {
                    return {
                        image: val.image,
                        headline: val.headline,
                        timePosted: val.timePosted,
                        link: val.link,
                        rank: val.rank,
                        username: val.author.username,
                        picture: val.author.picture,
                        storyLink: val.storyLink
                    }
                }
            });
        };

        var onError = function(err){
            $scope.err = 'Sorry, dude. Looks like there was a problem getting that data from the server. Try back in a bit.'
        };

        camperNewsService.getNewsFeeds().then(onSuccess, onError);

    }]);
}(angular.module('CamperNewsApp')));