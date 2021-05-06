import React, { useState } from 'react';


const ValidationForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [confpasswordError, setConfasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1){
            setFirstnameError("Please fill it out");
        } else if(e.target.value.length < 2){
            setFirstnameError("First Name must be at least 2 characters");
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1){
            setLastnameError("Please fill it out");
        } else if(e.target.value.length < 2){
            setLastnameError("Last Name must be at least 2 characters");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Please fill it out");
        } else if(e.target.value.length < 2){
            setEmailError("Email must be at least 2 characters");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Please fill it out");
        } else if(e.target.value.length < 8){
            setPasswordError("First Name must be at least 8 characters");
        }
    }
    const handleConfpassword = (e) => {
        setConfasswordError(e.target.value);
        if(e.target.value.length < 8){
            setConfasswordError("Passwords should match");
        } 
    }

    return (
        <form onSubmit={ (e)=> e.preventDefault()}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submittin the form!</h3> :
                <h3>Welcome, please submit the form</h3>
            }
            <div>
                <label>First Name:</label>
                <input type="text" onChange={ handleFirstname }/>
                {
                    firstnameError ?
                    <p style={{color: 'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ handleLastname }/>
                {
                    lastnameError ?
                    <p style={{color: 'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={ handleEmail }/>
                {
                    emailError ?
                    <p style={{color: 'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="text" onChange={ handlePassword }/>
                {
                    passwordError ?
                    <p style={{color: 'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm password:</label>
                <input type="text" onChange={ handleConfpassword }/>
                {
                    confpasswordError ?
                    <p style={{color: 'red'}}>{ confpasswordError }</p> :
                    ''
                }
            </div>
        </form>
    );
};


export default ValidationForm;