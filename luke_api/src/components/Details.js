import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Search.module.css'

const Details = (props) => {

    const [info, setInfo] = useState({});
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
        .then(res=>{
            console.log("*************")
            console.log(res)
            console.log("*************")
            setInfo(res.data)
        })
        .catch(err=>console.log(err))
    }, [props.category, props.id])
    

    return (
        <div className={styles.results}>
            {
                props.category == "people"?
                <>
                <h1>{info.name}</h1>
                <p>{info.mass}</p>
                <p>{info.eye_color}</p>
                </>: props.category == "planets"?
                <>
                <h1>{info.name}</h1>
                <p>{info.climate}</p>
                <p>{info.terrain}</p>
                </>: "These aren't the droits you're looking for"
            }
            
        </div>
    );
};

export default Details;