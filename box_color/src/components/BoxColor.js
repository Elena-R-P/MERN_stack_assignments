import React, {useState} from 'react';

const BoxColor = () => {

    const [formInfo, setFormInfo] = useState({
        color: "",
        width: 0,
        height: 0,
    })
    //store all submited info
    const [allBoxes, setAllBoxes] = useState([])

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = (e)=> {
        e.preventDefault()
        setAllBoxes([...allBoxes, formInfo]);
        
        // reset the form
        setFormInfo({
            color: "",
            width: 100,
            height: 100,
        })
    }


    return (
        <div className="container">
            <div>
                <form onSubmit={submitHandler}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="" className="form-label">Color:</label>
                        <input onChange={changeHandler} type="text" name="color" className="form-control" value={formInfo.color}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Width:</label>
                        <input onChange={changeHandler} type="number" name="width" className="form-control" value={formInfo.width}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Height:</label>
                        <input onChange={changeHandler} type="number" name="height" className="form-control" value={formInfo.height}/>
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
                <hr/><hr/>
            </div>
            
            <div style={{display: 'flex'}}>
                {
                    allBoxes.map(box=>{
                        return <div style={{backgroundColor: box.color, width: "200px", height: "200px", margin: "20px"}} >
                            <h1></h1>
                        </div>
                    })
                }
            </div>
        </div>
        
    );
};

export default BoxColor;