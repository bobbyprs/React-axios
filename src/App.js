import React from 'react'
import DatacontextProvider from './DataContext/DataContext'
import PersonDetailes from './component/PersonDetailes'
import PostList from './post/postList'


export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state={

      }
    }
   
    
    render(){
      return(
        <div class="container mt-5  " style={{maxWidth: "1000px",height:"auto"}} >
          <div class="card text-center"style={{boxShadow: "3px 3px 15px 3px",padding:'30px',backgroundColor:'#00000040'}}>
      <DatacontextProvider>
      <PostList/>
      <PersonDetailes/>
      </DatacontextProvider>
     </div>
     </div>
      )
    }
}


