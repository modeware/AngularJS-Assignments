(function(){

    angular.module('LunchChecker',[])
    .controller('LunchController',['$scope', function($scope){
        $scope.lunchItems="";
        $scope.displayMessage="";
        var flag = 0;
        $scope.Checker = function(){
            var itemCount = countItems($scope.lunchItems);
            console.log($scope.displayMessage,itemCount)
            if(itemCount == 0)
            {
                if(flag == 0)
                {
                    flag = 1;
                    return "";
                }
                else
                {
                    return "Enter data first"
                }
                
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
        $scope.checkInput=function(){
            if ($scope.lunchItems == "") { $scope.displayMessage = "" }

        }

        $scope.displayMessage = $scope.Checker();

        function countItems(items){
            return items == ""? 0 :items.split(',').length;
        }

    }])

}());