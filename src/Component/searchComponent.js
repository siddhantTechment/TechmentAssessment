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
        <input type="text" placeholder="Enter Country" onChange={textHandle}/>
        <button onClick={handleSubmit} disabled={inputState > 0 ? false : true}>Submit</button>
        </div>
    </div>
    )

}

export default Search