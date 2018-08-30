import React from 'react'

const Cockpit = (props) => {

    const style={
        backgroundColor: 'green',
        padding:'5px 12px'
      }
      if(props.showPersons){
      style.backgroundColor='red'
      }
    return (
        <div>
            <p >
                Hi this is a recat app
       </p>
            <button type="button" style={style} onClick={props.togglePerson}>Toggle persons</button>
        </div>
    )
}

export default Cockpit;