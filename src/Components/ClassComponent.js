import React, {Component} from 'react'
import "./Component.css"
class ClassComponent extends Component{
    render(){
        return(
            
                <div className="content">
                <h1>This is created using Class Componant</h1>
                <p>This is done using external CSS</p>
                <p style={{color:'red'}}>This is done using inline CSS</p>
             </div>
            
    )
}
}
export default ClassComponent