$(function() {
  var $newTodo = $('#new_todo');
  var $todoContent = $('#todo_content');
  var $todoList = $('#todoList');
  var $todoErros = $('#todoErros');

  $newTodo.on('submit', function(e) {
    e.preventDefault();
    handleCreateTodo();
  });

  function handleCreateTodo() {
    var content = $todoContent.val();
    $.post('/todos', {
      'content': content
    }, function(result) {
      if (!!result.messages) {
        $todoErros.text(result.messages.join(','));
      } else {
        $todoList.append(result);
        $todoContent.val('');
        $todoErros.text('');
      }
    });
  }

});
