import React, {useState} from 'react';
import styles from './List.module.css';

const List = () => {
    const [formInfo, setFormInfo] = useState({
        task: "",
        isCompleted: false
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
            isCompleted: false
        })
    };

    const deleteTask = (e, idx) =>{
        console.log("delete")
        
        let tasks = [...allTasks]
        tasks.splice(idx, 1);
        setAllTasks(tasks);
    };

    const onChange = () => {
        
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
                        allTasks.map((t, idx)=>{
                            return <div key={idx} className={styles.content}>
                                    <input onChange={onChange} className="ml-3 mt-3" type="checkbox" name="" checked={t.isCompleted}/>
                                    <p className="ml-3 mt-3">{t.task}</p>
                                    <input onClick={e => deleteTask(e, idx)} className="btn btn-info ml-3 mt-3" type="submit" value="DELETE"/>
                            </div>
                            
                        })
                    }
            </div>
        </div>
    );
};

export default List;