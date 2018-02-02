angular.module('myApp',[]).
controller('myController',['$scope',function TodoCtrl($scope) {
    $scope.todos = [
		{ text: "Check Unread Mails", done: true},
        { text: "Call Client for Meeting", done: false},
        { text: "Visit Bank", done: false}];

        $scope.check = false;
    //Member Functions
    $scope.addToDo = function(todoText) {

        if(todoText){
            $scope.check = false;
            $scope.todos.push({text: $scope.todoText, done: false});
            $scope.todoText = '';
        }
        else
        $scope.check = true;
    };

    $scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
    };
     
    $scope.selectAll = function(){
        angular.forEach($scope.todos, function(todo) {
			todo.done = true;
		});
    }

    $scope.removeDone = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        
        angular.forEach(oldTodos, function(todo) {
			if(!todo.done) $scope.todos.push(todo);
        });
    };

    $scope.remove = function(index) {
        $scope.todos.splice(index,1);
    };

   
}]);