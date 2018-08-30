import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props)
        console.log(`[Persons.js] inside constructor ${props}`)
    }
    
    componentWillMount =() =>{
        console.log(`[Persons.js] compoenentWillMount`)
      }
    
      componentDidMount =() =>{
        console.log(`[Persons.js] compoenentDidMount`)
      }

      componentWillReceiveProps =(nextProps) =>{
        console.log(`[Persons.js] compoenentWillReceiveProps`,nextProps)
      
      }

      shouldComponentUpdate(nextProps,nextState){
        console.log(`[Persons.js] shouldComponentUpdate`,nextProps,nextState)
         return true
      }

      componentWillUpdate(nextProps,nextState){
        console.log(`[Persons.js] componentWillUpdate`,nextProps,nextState)
      }

      componentDidUpdate(nextProps,nextState){
        console.log(`[Persons.js] componentDidUpdate`,nextProps,nextState)
      }
    render() {
        console.log(`[Persons.js] render`)
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person click={() => this.props.removePerson(index)} name={person.name} age={person.age} />
                )
            }
            )
        )
    }

}

export default Persons;