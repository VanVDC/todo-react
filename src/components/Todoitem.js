import React, {Component} from 'react'
import ProTypes from 'prop-types';


class TodoItem extends Component{

  getStyle=()=>{
    return{
      background: 'lightgray',
      padding: '10px',
      borderBottom: '2px black dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render(){
    const {id, title}=this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{''}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}


TodoItem.ProTypes={
  todo: ProTypes.array.isRequired,
  markComplete: ProTypes.func.isRequired,
  delTodo: ProTypes.array.isRequiredS
}

const btnStyle={
  background:'red',
  color:'white',
  border:'none',
  padding: '5px 2px',
  borderRadius: '50%',
  cursor:'pointer',
  float:'right'
}


export default TodoItem