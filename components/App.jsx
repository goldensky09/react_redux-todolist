import React from 'react';
import TodoList from './TodoList.jsx';
import NewToDo from './NewToDo.jsx';
import { Button } from 'react-bootstrap';
import { createStore } from 'redux';
import Reducers from '../redux/Reducers.jsx';
import ToDoActions from '../redux/Actions.jsx';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={items:store.getState().todo.items}       
    }
    componentWillMount() {
        store.subscribe(() => {
          var state = store.getState();
          this.setState({
            items: state.todo.items
          });
        });
    }
    clear = (e) =>{
        store.dispatch(ToDoActions.clearTodo());  
    }
    render() {
      return (
         <div className='container'>
              <h1>To Do List using React + Redux</h1>
              <NewToDo store={store} ></NewToDo>            
              <TodoList store={store} onremove={this.onremove} items={this.state.items}></TodoList>
              <Button className="btn btn-primary" onClick={this.clear}>Clear</Button> 
         </div>
      );
    }
}
//create store with reducer and default store using REDUX 
var store = createStore(Reducers.toDoReducer, Reducers.defaultTodos());
export default App;