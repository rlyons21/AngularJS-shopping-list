var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.errortext = "";
    $scope.addItem = function () {
    	$scope.errortext = "";
    	if(!$scope.addMe) {
    		return;
    	}
        if($scope.products.indexOf($scope.addMe) == -1) {
        	$scope.products.push($scope.addMe);
        }
        else{
        	$scope.errortext = "This item is already on your list"
        }
    }
    $scope.deleteItem = function ($index) {
    	$scope.errortext = "";
    	$scope.products.splice($index,1);
    } 
});