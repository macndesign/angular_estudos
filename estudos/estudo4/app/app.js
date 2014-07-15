/**
 * Created by mario on 10/07/14.
 */

/**
 * Ao carregar o módulo ngRoute (usado para deep-liking URLs, controllers e views)
 * Ele observa através de $location.url() a URL e mapeia o caminho de acordo com a rota pré-definida
 * Dessa forma é carregada a view e o controller correpondente para cada URL
 */

// Criando o módulo principal da app
var app = angular.module('app', ['ngRoute']);

// Configurando o módulo app
app.config(function($routeProvider, $locationProvider){

    // Removendo o # da URL
    // $locationProvider.html5Mode(true);

    // Carregando os templates com seus respectivos controllers
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        }).when('/sobre', {
            templateUrl: 'app/views/sobre.html',
            controller: 'SobreCtrl'
        }).when('/contato', {
            templateUrl: 'app/views/contato.html',
            controller: 'ContatoCtrl'
        }).otherwise({redirectTo: '/'});
});