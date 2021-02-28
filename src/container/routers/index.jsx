import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Mainpage}  from '../pages'

const index  = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <Mainpage />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default  index