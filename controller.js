var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.errortext = "";
    $scope.addItem = function () {
    	if(!$scope.addMe) {
    		return;
    	}
        if($scope.addMe.length > 0) {
        	$scope.errortext = "";
        	$scope.products.push($scope.addMe);
        }
    }
    $scope.deleteItem = function ($index) {
    	$scope.products.splice($index,1);
    } 
});