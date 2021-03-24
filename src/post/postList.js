import axios from "axios";
import React from "react";
import { Datacontext } from "../DataContext/DataContext";
export default class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
           PersonDetailes:[]
         }
    }
    handleChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handleSubmit=(e) =>{
        e.preventDefault()
        console.log(this.state)
        axios({
            method:'post',
            url:'https://jsonplaceholder.typicode.com/users',
            data:{name:this.state.name}
        }).then(res =>res.data).then(Response =>{console.log(Response)})
        .catch(error =>{console.log(error)})
        this.setState({PersonDetailes:[...this.context.PersonDetailes,{name:this.state.name}]})
    }
    render(){
        const {name}=this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div style={{borderRadius:'10px',border:'1px solid',marginBottom:'8px',boxShadow:' 3px 3px 3px darkslategrey',maxWidth: '833px'}}><h1>Digikull Students</h1></div>
            <div>
                <input type='text'class="form-control" aria-label="Text input with dropdown button" placeholder="enter the toDo hear" name='name'value={name}onChange={this.handleChange} style={{margin:'20px',maxWidth: '820px'}} />
                <button type='submit'class="btn btn-outline-secondary "aria-haspopup="true" aria-expanded="false">submit</button>
            </div>
           </form>
        )
    }
}
PostList.contextType = Datacontext;