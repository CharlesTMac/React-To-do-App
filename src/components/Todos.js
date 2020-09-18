import React from 'react';
import Todoitem from "./Todoitem.js"
import PropTypes from "prop-types"

class Todos extends React.Component{

   
  render(){
    return (this.props.todos.map((todo)=>
    <Todoitem todo={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}/>)
  );
  }
}
//PropTypes
Todos.propTypes={
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    deleteItem:PropTypes.func.isRequired
}
export default Todos;
