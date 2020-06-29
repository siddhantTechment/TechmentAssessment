import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = (props)=>{

    let [inputState, setInputState] = useState(0)
    let [text, setText] = useState('')
    const textHandle =(e)=>{
        let len = e.target.value.length
        setInputState(len)
        let text = e.target.value
        setText(text)
    }

    const handleSubmit=()=>{
        axios.get('https://restcountries.eu/rest/v2/name/' + text).then((res)=>{
            props.history.push('country/'+text, res.data)
        })
    }
    
    return(<div className="container">
        <div className="col-md-12">
            <h3>Welcome to Assesment</h3>
        <input type="text" className="form-control" placeholder="Enter Country" onChange={textHandle}/>
        <button className="btn btn-primary mt-1" onClick={handleSubmit} disabled={inputState > 0 ? false : true}>Submit</button>
        </div>
    </div>
    )

}

export default Search