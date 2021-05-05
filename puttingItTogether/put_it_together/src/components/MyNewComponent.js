import React, { Component } from 'react';
    
    
class PersonalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
        };
    }
    render() {
        const countAge = () => {
                    this.setState({ageCount: this.state.ageCount+1})
                }

        const {firstName, lastName, age, hairColor} = this.props;
        
        return (
            <div>
                {this.props.children}
                <h1>{ this.props.lastName }, { this.props.firstName}</h1>
                <p>Age: { this.state.ageCount } </p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick={countAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
            
        );
    }
}
    
export default PersonalCard;