import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Addtodo from './components/Addtodo';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import About from './components/pages/About'
import Axios from 'axios';





class App extends React.Component{
  state={ 
    todos:[]
  }

  componentDidMount(){
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos:res.data}))
  }
//Toggle complete
  markComplete=(id)=>{
this.setState({todos:this.state.todos.map((todo)=>{
                          if(todo.id===id){
                            todo.completed=!todo.completed;
                          }
                          return todo;
 } )});
  }

  //delete items
  deleteItem=(id)=>{
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos: [ ...this.state.todos.filter(
      todo=>todo.id !==id)]}))
  }

  //add to do
  addTodo=(title)=>{
    Axios.post('http://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    })
    .then(res=>this.setState({todos: [...this.state.todos,res.data]}))
    };

  render(){
    return (

      <Router>
   <div className="App">
        <div className='container'>
        <Header/>
        <Route exact path="/" render={props=> (
          <React.Fragment>
<Addtodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
          </React.Fragment>
        )}/>
         <Route path="/About" component={About}/>
        </div>
         
      </div>
</Router>

     
    );
  }
}

export default App;
