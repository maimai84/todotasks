angular.module('app', [])
  .component('List', {
    bindings: {
       todo: '<'
     },
    controller: function() {
      this.todos = [
     
          "Wake up"
     
      ];
      this.addTodo = () => {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      };
      this.removeTodo = (index) => {
        this.todos.splice(index, 1);
      
    
    },
templetUrl:`templels/list.html`
}