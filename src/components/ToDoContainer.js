import React, {Component} from 'react'
import ToDoItem from './ToDoItem'
import AddToDo from './AddToDo'

class ToDoContainer extends Component{

    constructor(){
        super()
        this.state = {
            todos : [],
            isLoading : true
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.addNewToDo = this.addNewToDo.bind(this)
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            this.setState({ todos : data, isLoading : false })
        })
    }

    handleOnChange(id){
        this.setState((prevState) => {
            const updateToDos = prevState.todos.map((t) => {
                if(t.id === id) { return {...t,completed : !t.completed} }
                return t
            })

            return {todos : updateToDos}
        })
    }

    addNewToDo(newToDoText){
        const newID = Math.max.apply(Math, this.state.todos.map(function(o) { return o.id; })) + 1
        
        const newTodo = 
        {
            "userId": 1,
            "id": newID,
            "title": newToDoText,
            "completed": false
        }

        this.setState((preveState) => {
            const updatedToDos = preveState.todos.concat(newTodo)

            return {todos : updatedToDos}
        })
    }

    render(){
        return (
            <div>
                <AddToDo handleClick={this.addNewToDo}/>
                { this.state.isLoading 
                    ? "Loading.. Please wait" 
                    : this.state.todos.map( (t) => {
                        return <ToDoItem 
                        title={t.title} 
                        completed={t.completed}
                        key={t.id}
                        handleOnChange={this.handleOnChange}
                        id={t.id}/>
                    } ) }
            </div>
        );
    }
}


export default ToDoContainer