import React, {Component} from 'react';
import ProTypes from 'prop-types';

class AddTodo extends Component{
  state ={
    title: ''
  }
  onSubmit =(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
  }

  onChange =(e)=>this.setState({[e.target.name]: e.target.value},);
  
  render(){
    return(

      <form onSubmit={this.onSubmit} style={{display:'flex'}}>
        <input type="text" name='title' placeholder='Add todo' style={{flex: '10', padding: '5px'}} value={this.state.title} onChange={this.onChange}/>
        
        <input type="submit" value='submit' className='btn' style={{flex: '1'}}/>
      </form>
      
    )
  }
}


AddTodo.ProTypes={
  addTodo: ProTypes.func.isRequired,
  markComplete: ProTypes.func.isRequired,
  delTodo: ProTypes.array.isRequiredS
}

export default AddTodo