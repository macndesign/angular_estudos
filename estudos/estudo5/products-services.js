var app = angular.module('store-services', []);

app.factory('StoreProducts', ['$http', function($http){
    return {
        getProducts: function(){
            return $http.get('store-products.json');
        }
    }
}]);