import React, { Component } from 'react';

import Persons from '../Components/Persons/Persons'

import './App.css';
import CockPit from '../Components/CockPit/CockPit';

class App extends Component {

  constructor(props){
    super(props);
    console.log(`[App.js] inside constructor ${props}`)
    this.state ={
      persons:[
        {name: 'Manu' , age:30},
        {name: 'Mani' , age:32},
        {name: 'Nanu' , age:34}
      ],
      showPersons: false
    }
  }

  componentWillMount =() =>{
    console.log(`[App.js] compoenentWillMount`)
  }

  componentDidMount =() =>{
    console.log(`[App.js] compoenentDidMount`)
  }

  togglePerson = () =>{
    console.log("toggle");
    const doesShow = !this.state.showPersons;
    this.setState( {
       showPersons : doesShow
    })
  }

  removePerson =(index) =>{
    let personsList= this.state.persons.slice();
    personsList.splice(index , 1);
    this.setState({
      persons : personsList
    })
  }


  render() {
   console.log(`[App.js] render`)
   let persons= null;
    if(this.state.showPersons){
      persons= <Persons 
       persons={this.state.persons}
       removePerson={this.removePerson}/>

     
    }

 
    return (
      <div className="App">
        <CockPit togglePerson={this.togglePerson}/>
        {persons}
      </div>
    );
  }
}

export default App;
