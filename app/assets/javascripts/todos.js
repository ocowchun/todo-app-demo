$(function() {
  var $newTodo = $('#new_todo');
  var $todoContent = $('#todo_content');
  var $todoList = $('#todoList');

  $newTodo.on('submit', function(e) {
    e.preventDefault();
    handleCreateTodo();
  });

  function handleCreateTodo() {
    var content = $todoContent.val();
    $.post('/todos', {
      'content': content
    }, function(result) {
      $todoList.append(result);
      $todoContent.val('');
    });
  }

});
