import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from './searchComponent'
import Detail from './detailComponent'

const Main = (props)=>{

    return(<div className="container">
        <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/country/:countryname" component={Detail} />
        </Switch>
    </div>
    )

}

export default Main