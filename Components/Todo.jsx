import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [{task : 'Check mails', id : 1}, {task : 'Read article', id: 2}],
      currTasks:' '
    }
  }
  handleChange=(e)=>{
    this.setState({
      currTasks : e.target.value
    })
  }
  handleSubmit=()=>{
    this.setState({
      tasks:[...this.state.tasks,{task: this.state.currTasks, id:this.state.tasks.length+1}],
      currTasks: ' '
    })
  }
  handleDelete=(id)=>{
    let narr = this.state.tasks.filter((taskObj)=>{
      return taskObj.id!= id
    })
    this.setState({
      tasks:[...narr]
    })
  }
  render() {
    return (
      <>
        <h1 class="heading-top">TODO REACT APP</h1>
        <input class="input-task"type="text" value={this.state.currTasks} onChange={this.handleChange} />
        <button class="button submit" onClick={this.handleSubmit} type='submit'>Submit</button>
        {
            this.state.tasks.map((taskObj)=>(
              <div class="tasks" key = {taskObj.id}>
                <h1 class="task">{taskObj.task}</h1>
                <button class="button delete" onClick={()=>this.handleDelete(taskObj.id)} type='submit'>Delete</button>
              </div>
            ))
        }
      </>
    )
  }
}
