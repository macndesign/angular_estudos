var isrcorderapp = angular.module('plunker', []);

isrcorderapp.directive("isrcrow", function(){
  return {
    restrict:'A',
    templateUrl: 'estudo2tds.html',
    replace: false
  }
});

isrcorderapp.controller("isrcorders", function($scope,$http,$compile) {
    function newItem(){
      return{
        artist:'',
        title:'',
        duration:'',
        year:'',
        isrctype:''
      }
    }
    $scope.recordingTypes = [
        {type:'A'},
        {type:'B'},
        {type:'C'},
        {type:'D'},
        {type:'E'}
        ];
        
     $scope.items=[newItem()] ;  
        
    $scope.AddIsrc = function() {
     $scope.items.push(newItem())
    };
    $scope.RemoveIsrc=function(row){
      var index=$scope.items.indexOf(row);
      $scope.items.splice(index,1)
    }
    
        
});
