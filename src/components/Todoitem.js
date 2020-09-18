import React from 'react'
import PropTypes from "prop-types"

class Todoitem extends React.Component {

    getStyle=()=> {
        return{
            padding:"10px",
            borderBottom: "1px dotted #ccc",
             background: "grey",
             textDecoration:this.props.todo.completed?
         "line-through":"none"};
        }
           

                  
    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{" "}
                    {title}
                    <button onClick={this.props.deleteItem.bind(this,id)} style={btnStyle}>X</button>
                    </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes={
    todo:PropTypes.object.isRequired
}

const btnStyle={
    background: '#ff0000',
    color: '#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
};
export default Todoitem
