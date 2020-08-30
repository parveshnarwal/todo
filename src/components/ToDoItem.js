import React from 'react'

const ToDoItem = (props) => {

    function handleOnChange(){
        props.handleOnChange(props.id)
    }

    const completedClass = props.completed ? "form-control completed" : "form-control"
    

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" checked={props.completed} onChange={handleOnChange}/>
                </div>
            </div>
            <input type="text" value={props.title} className={completedClass} readOnly/>
        </div>  
    )
}


export default ToDoItem