import React, {useState} from 'react';
import styles from './List.module.css';

const List = () => {
    const [formInfo, setFormInfo] = useState({
        task: ""
    })

    const [allTasks, setAllTasks] = useState([])

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        setAllTasks([...allTasks, formInfo]);
        setFormInfo({
            task: "",
        })
    }

    return (
        <div className="container">
            <div className="inputs">
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} name="task" type="text" className="form-control" value={formInfo.task}/>
                    <input type="submit" value="ADD"/>
                </form>
            </div>
            <div className="results">

                
                    {
                        allTasks.map(t=>{
                            return <div className={styles.content}>
                                    <p className="ml-3 mt-3">{t.task}</p>
                                    <input className="ml-3 mt-3" type="checkbox"/>
                                    <input className="btn btn-info ml-3 mt-3" type="submit" value="DELETE"/>
                            </div>
                            
                        })
                    }
            </div>
        </div>
    );
};

export default List;