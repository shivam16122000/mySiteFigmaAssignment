import React from 'react'
import RightpanelHeader from './RightpanelHeader'
import RightpanelMain from './Rightpanelmain'
import Rightpanel2main from './Rightpanel2main'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


import './Rightpanel.css';

function Rightpanel() {
    return (
        <div className="rightpanel">
            <Router>
            <RightpanelHeader/>
            
                <Switch>
                    <Route exact path="/" component={Rightpanel2main} />
                    <Route exact path="/static" component={RightpanelMain} />
                </Switch>
            </Router>
            
            
        </div>
    )
}

export default Rightpanel
