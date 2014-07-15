/**
 * Created by mario on 08/07/14.
 */
var app = angular.module('app', []);

app.controller('DataQuality', function($scope){
    $scope.jobs = [{name: 'Job1', id: 1}, {name: 'Job2', id: 2}];
    $scope.items = [
        {
            columns: ['Id', 'Full name', 'Email address', 'Address', 'Date of birth'],
            validations: ['email', 'number', 'date']
        }
    ];
    $scope.addItem = function(){
        var items = $scope.items;
        $scope.items.push(items);
        return true;
    };

    // Remove item
    // $scope.persons.splice($scope.items.indexOf(item), 1);
});