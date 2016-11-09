class Reducers {
        static defaultTodos(){
            return{
                      todo:{
                          items:[ {value:'Sample value','completed':false},
                                             {value:'Sample value 1','completed':true},
                                             {value:'Sample value 2','completed':true},
                                    {value:'Sample value 2 sadsa','completed':true}
                                ]
                      }
                };
        };
    static toDoReducer(state, action){
       switch (action.type) {
            case 'ADD_TODO':
              var newState = Object.assign({}, state);

              newState.todo.items.push({
                value: action.value,
                completed: false
              });

              return newState;

            case 'COMPLETE_TODO':
              var newState = Object.assign({}, state);

              newState.todo.items[action.index].completed = action.checked;

              return newState;

            case 'DELETE_TODO':
              var items = [].concat(state.todo.items);

              items.splice(action.index, 1);

              return Object.assign({}, state, {
                todo: {
                  items: items
                }
              });

            case 'CLEAR_TODO':
              return Object.assign({}, state, {
                todo: {
                  items: []
                }
              });

            default:
              return state;
          } 
    };
    
}
export default Reducers;


