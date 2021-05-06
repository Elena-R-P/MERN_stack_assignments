import React, { useState } from 'react';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
/>

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confpassword };
        console.log("Welcome", newUser);
    };

    return (
        <>
            <div className="container">
                <form onSubmit={createUser}>
                    <div className="mb-3">
                        <label className="form-label">First Name: </label>
                        <input className="form-control" type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" onChange={(e) => setConfpassword(e.target.value)} value={confpassword} />
                    </div>
                </form>
                <h1>Your Form Data</h1>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm password: {confpassword}</p>

            </div>

        </>
    );
};

export default UserForm;
