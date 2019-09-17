import React, {Component} from 'react';
import TodoItem from './Todoitem';
import ProTypes from 'prop-types';


class Todo extends Component {
  
  
  render(){
    return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ))
  }
  
}


Todo.ProTypes={
  todos: ProTypes.array.isRequired,
  markComplete: ProTypes.func.isRequired,
  delTodo: ProTypes.array.isRequired
}

export default Todo;
