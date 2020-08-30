import React, { Component } from 'react'

class AddToDo extends Component {

    constructor(){
        super()
        this.state = {
            newText : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState({ [name] : value })

    }

    handleClick(){
        this.props.handleClick(this.state.newText)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <button 
                    className="btn btn-outline-success" 
                    type="button" 
                    id="button-addon1"
                    onClick={this.handleClick}>ADD MORE..</button>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="newText"
                    placeholder="" 
                    onChange={this.handleChange}
                    value={this.state.text} />
            </div>

        )
    }
}



export default AddToDo