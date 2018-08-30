import React , {Component } from 'react'


class Person extends Component{
    constructor(props) {
        super(props)
        console.log(`[Person.js] inside constructor ${props}`)
    }

    
    componentWillMount =() =>{
        console.log(`[Person.js] compoenentWillMount`)
      }
    
      componentDidMount =() =>{
        console.log(`[Person.js] compoenentDidMount`)
      }
    render(){
        console.log(`[Person.js] render`)
        const style={
            border : '1px solid #ccc',
            margin : '10px auto',
            width:'60%',
        }
        return (
           <div style={style} onClick={this.props.click}> 
               <h1>Name:{this.props.name}</h1>
               <p>Age : { this.props.age}</p>
            </div>
        )
    }


}

export default Person;