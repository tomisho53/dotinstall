(function() {
  'use strict';

  // two way data binding (to UI)

  var vm = new Vue ({
    el: '#app',
    data: {
      newItem: '',
      todos: []
    },
    watch: {
      // todos: function() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data Saved');
      // }
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // alert('Data Saved');
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function(){
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index){
        if (confirm('are you sure?')){
          this.todos.splice(index, 1);
        }
      },
      purge: function(index){
        if (!confirm('delete finished?')){
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        // var items = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();
