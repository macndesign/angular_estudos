(function () {
    var app = angular.module('gemStore', ['store-directives', 'store-services']);

    app.controller('StoreController', ['$http', 'StoreProducts', function ($http, StoreProducts) {
        var store = this;
        store.products = [];
        StoreProducts.getProducts().success(function (data) {
            store.products = data;
        });
    }]);

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);

            this.review = {};
        };
    });
})();
