# react_redux-todolist
Sample "To Do List" application using React and Redux

##Pre requiste
Please go through my https://github.com/mkum83/react_todolist before moving further as this application is just an extension of the https://github.com/mkum83/react_todolist with REDUX.

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
