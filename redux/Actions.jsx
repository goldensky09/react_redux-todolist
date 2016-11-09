class ToDoActions{
    
     static clearTodo() {
      return {
        type: 'CLEAR_TODO'
      };
    }
    static addTodo(value) {
      return {
        type: 'ADD_TODO',
        value: value,
        completed: false
      };
    }
    static completeTodo(index,ischecked) {
      return {
        type: 'COMPLETE_TODO',
        index: index,
          checked: ischecked
      };
    }
    static deleteTodo(index) {
      return {
          type: 'DELETE_TODO',
        index: index
      };
    }
}
export default ToDoActions;