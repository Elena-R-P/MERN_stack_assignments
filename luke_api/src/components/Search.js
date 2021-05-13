import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import styles from './Search.module.css'


const Search = () => {
    
    const [categories, setCategories] = useState([])
    const [formInfo, setFormInfo] = useState({
        category: "people",
        id: ""
    })

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(res=>{
            console.log("******************")
            console.log(res)
            console.log("******************")
            console.log(Object.keys(res.data))
            setCategories(Object.keys(res.data))
        })
        .catch(err=>console.log(err))
    }, [])
    
    const changeHandler = (e)=>{
        console.log(e.target)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(`/${formInfo.category}/${formInfo.id}`)
    }
    
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select onChange={changeHandler} name="category" className="form-control">
                        {
                            categories.map((cat, i) =>{
                                return <option key={i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input onChange={changeHandler} name="id" className="form-control" type="number"/>
                </div>
                <div className="mb-3">
                    <input type="submit" value="Search"/>
                </div>
                
            </form>
        </div>
    );
};

export default Search;