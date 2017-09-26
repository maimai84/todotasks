angular.module('app', [])
.component('todoList', {
  controller: function() {
    this.todos = ["swim"];


      this.addTodo = () => {
      this.todos.push(this.newTodo);
      this.newTodo = "";
      $.ajax({
        method: "POST",
        url: "http:/localhost:3000",
        data: {task: $('#i').val() }
      })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
      $.ajax({
        method: "GEt",
        url: "localhost:3000",
      })
      .done(function( todos) {
        alert(  todos );
      });


    };
    
    bindings:{
     todos:'<'
   }

 },
 templetUrl:`templet/app.html`
})


