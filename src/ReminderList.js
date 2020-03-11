
import React, {Component} from 'react';
import './App.css'
class ReminderList extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            },
        }
    }
   
    
    render(){
        return(
        <div className='E'>
            <h1>
                Reminder List
            </h1>
            <p>
                Enter reminders below:
            </p>
            <form 
            onSubmit = {
                this.props.addItem
            }>
            
            <input type="text" name="title" placeholder = "Enter Reminder Here"
            ref = {
                this.props.inputElement
            }
            value = {
               this.props.currentItem.text
            }
            onChange = {
            
            this.props.handleInput
            }
            /> 
            <button type = "submit" > Add Reminder </button> 
            </form >
            <br/>
        </div>
        ) 
            
        
        
    }
    
}
export default ReminderList
