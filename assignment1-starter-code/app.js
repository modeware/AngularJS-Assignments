(function(){

    angular.module('LunchChecker',[])
    .controller('LunchController',['$scope', function($scope){
        $scope.lunchItems="";
        $scope.displayMessage=""
        $scope.Checker = function(){
            var itemCount = countItems($scope.lunchItems);
            console.log($scope.displayMessage,itemCount)
            if(itemCount == 0)
            {
                return "";
            }
            else if(itemCount <= 3)
            {
                return "Enjoy";
            }
            else
            {
                return "Too Much!";
            }
    
        }

        $scope.displayMessage = $scope.Checker();

        function countItems(items){
            return items == ""? 0 :items.split(',').length;
        }

    }])

}());