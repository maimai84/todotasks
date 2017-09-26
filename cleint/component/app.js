angular.module('app', [])
  .component('todoList', {
    controller: function() {
      this.todos = [];
     
         
     
   
      this.addTodo = () => {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      };
      this.removeTodo = (index) => {
        this.todos.splice(index, 1);
      }
bindings:{
	todos:'<'
}

    },
templetUrl:`templet/app.html`
}
