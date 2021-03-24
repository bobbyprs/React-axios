import React from "react";
import { Datacontext} from '../DataContext/DataContext';
import postList from '../post/postList'
// import Person from "./Person";

export default class PersonDetailes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
    render() {
         
        return (
            <div>
             <div><h3><u>Person Detailes</u></h3></div>   
                
                   {this.context.PersonDetailes.map(item =>{return <div style={{borderRadius:'10px',border:'1px solid',marginBottom:'8px',boxShadow:' 3px 3px 3px darkslategrey',maxWidth: '833px'}}>{item.name} </div> })}
                
                
                {/* <Person PersonDetailes={this.context.PersonDetailes}/> */}
            </div>
        );
    }
}
PersonDetailes.contextType = Datacontext;
