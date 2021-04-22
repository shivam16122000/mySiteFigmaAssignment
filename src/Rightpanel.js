import React from 'react'
import RightpanelHeader from './RightpanelHeader'
import RightpanelMain from './Rightpanelmain'
import Rightpanel2main from './Rightpanel2main'
import {
    HashRouter as Router,
    Route,
    } from 'react-router-dom';


import './Rightpanel.css';

function Rightpanel() {
    return (
        <div className="rightpanel">
            <Router>
            <RightpanelHeader/>
            <Route exact path="/" component={Rightpanel2main} />
            <Route exact path="/static" component={RightpanelMain} />
                
            </Router>
            
            
        </div>
    )
}

export default Rightpanel
