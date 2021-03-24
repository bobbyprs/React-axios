import axios from "axios";
import React, { createContext } from "react";

// import secureAxios from '../Config/secureAxios'

export const Datacontext = createContext();

class DatacontextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PersonDetailes: []
    };
  }
  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ PersonDetailes: data });
      });
    // secureAxios.get('./user').then(res =>res.data)
    //     .then(data =>{this.setState({PersonDetailes:data})})
  }

  changePersonDetailes = (val) => {
    this.setState({ PersonDetailes: val });
  };
  render() {
    return (
      <Datacontext.Provider
        value={{
          PersonDetailes: this.state.PersonDetailes,
          changePersonDetailes: this.changePersonDetailes
        }}
      >
        {this.props.children}
      </Datacontext.Provider>
    );
  }
}
export default DatacontextProvider;
