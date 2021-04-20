import React from 'react'
import RightpanelHeader from './RightpanelHeader'
import RightpanelMain from './Rightpanelmain'
import Rightpanel2main from './Rightpanel2main'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
    Link
  } from "react-router-dom";
  


import './Rightpanel.css';

function Rightpanel() {
    return (
        <div className="rightpanel">
            <HashRouter basename="/">
            <RightpanelHeader/>
            
                
                    <Route exact path="/" component={Rightpanel2main} />
                    <Route exact path="/static" component={RightpanelMain} />
            
            </HashRouter>
            
            
        </div>
    )
}

export default Rightpanel
