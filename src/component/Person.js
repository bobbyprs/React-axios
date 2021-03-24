import React from "react";
export default class Person extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
         const{personItem} = this.props
         console.log(personItem)
        return (
            <div>
                <h2>Name:{}</h2>
                
            </div>
        );
    }
}

