var app = angular.module("MyApp", []);

app.controller("mainController",

    function ($scope) {

        // Item List Arrays
        $scope.items = [];
        $scope.checked = [];

        // Add a Item to the list
        $scope.addItem = function () {

            $scope.items.push({
                amount: $scope.itemAmount,
                name: $scope.itemName
            });

            // Clear input fields after push
            $scope.itemAmount = "";
            $scope.itemName = "";

        };

        // Add Item to Checked List and delete from Unchecked List
        $scope.toggleChecked = function (index) {
            $scope.checked.push($scope.items[index]);
            $scope.items.splice(index, 1);
        };

        // Get Total Items
        $scope.getTotalItems = function () {
            return $scope.items.length;
        };

        // Get Total Checked Items
        $scope.getTotalCheckedItems = function () {
            return $scope.checked.length;
        };
    });