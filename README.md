# react_redux-todolist
Sample "To Do List" application using React and Redux

##Pre requisite
Please go through https://github.com/mkum83/react_todolist before moving further as this application is just an extension of the https://github.com/mkum83/react_todolist with REDUX.

##What Is Redux?
Redux is a library that helps you with managing state in your application. 
It has its design origins in Flux, but evolved from the pain of writing Flux applications. 
###Stores
A store is simply a state container. 
This is the place where your state lives and where actions are dispatched and handled. 
It’s recommended to only have one store, and since state is shared it’s a good idea to think of that before you get started.
###Actions
Actions are objects that describe how we want to mutate our state.
You can think of actions as the API to your state tree. To illustrate, an action for adding a new user could be:
```sh
{
  type: 'ADD_USER',
  data: {
    name: 'Foo',
    email: 'foo@bar.com',
    password: 'Foobar123_'
  }
} 
```
###Reducers
Reducers are action handlers that act upon dispatched actions in your store and reduce these actions into state changes. 
If we were to dispatch an action such as ADD_USER in our store, we could have a reducer that would pick that action up 
and add a new user entry to our state.

refer to http://redux.js.org/docs/basics/ for more information.

##Installing React Redux
React bindings are not included in Redux by default. You need to install them explicitly:
```sh
npm install --save react-redux
```
## Implementing Redux
Lets create actions and reducer for our application
###redux/Actions.jsx
all the actions are added in this files required for out to do list. Lets just ignore the file for now, you will understand later.
```sh
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
```
###redux/Reducers.jsx
I have added the default state and reducer functions both in the common class just for modularity, you can have them separately. Below is the default state for application.
```sh
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
 ```
 Reducer function which will actually perform the actions on our state.
 ```sh
  static toDoReducer(state, action){
       switch (action.type) {
            case 'ADD_TODO':
             ...
            case 'COMPLETE_TODO':
             ...
            case 'DELETE_TODO':
             ...
            case 'CLEAR_TODO':
              ...
            default:
              return state;
          } 
    };
```
 lets bind all of this with our application
 
##Using Actions and Reducers
 
###componets/App.jsx
 
 create a store with default state and its reducer
 ```sh
 var store = createStore(Reducers.toDoReducer, Reducers.defaultTodos());
 ```
 use default state in app
 ```sh
 constructor(props) {
        ...
        this.state={items:store.getState().todo.items}       
    }
```
pass the store and state to the To Do List component
```sh
render() {
      return (
         <div className='container'>
             ...
              <NewToDo store={store} ></NewToDo>            
              <TodoList store={store} items={this.state.items}></TodoList>
              <Button className="btn btn-primary" onClick={this.clear}>Clear</Button> 
         </div>
      );
    }
 ```
 let’s also subscribe to the store in componentWillMount function
 ```sh
 componentWillMount() {
        store.subscribe(() => {
          //when store changes, get the new state from store and update the state, this will redraw the UI component
          var state = store.getState();
          this.setState({
            items: state.todo.items
          });
        });
    }
```
confused about componentWillMount function, please refer lifecycle of react component http://busypeoples.github.io/post/react-component-lifecycle/.

### components/NewToDo.jsx
Dispatch the respective actions on "onadd" instead of trigging prop events unlike old code. Refer to https://github.com/mkum83/react_todolist for old code.

```sh
    onadd = (e) =>{
        this.props.store.dispatch(ToDoActions.addTodo(this.state.value));
        ...     
    }
```
###components/TodoItem.jsx
Dispatch the respective actions on "onremove" and "onchange" events instead of trigging prop events. Refer to https://github.com/mkum83/react_todolist for old code.
```sh
onremove = () =>{
         this.props.store.dispatch(ToDoActions.deleteTodo(this.props.index));  
    }
    onchange = (e) =>{
        this.props.store.dispatch(ToDoActions.completeTodo(this.props.index, e.target.checked));       
    }
```
##Nutshell
UI components will dispatch the actions to the store along with the information and store will call assigned reducer which will perform the required algorithm on the state and let all the listeners know that the state has been changed(basically new state). In our application only App.jsx is subscribed to the store and App.jsx send the state to other components. 


 
 
 
 

