import React, { Component, createContext } from "react";
import "./homePage.css";
class HomePage extends Component {
    state = {};
    
    render() {
        return(
            <div>
                <div className="topnav">
                    <a className="active">Home</a>
                    <a>Stats</a>
                    <a>Plans</a>
                    <a>Account Settings</a>
                </div>
                <div className = "flex-main">
                    <div className = "flex-top">
                        <p>Hello</p>
                    </div>
                    <div className = "flex-bot"></div>
                </div>
                
            </div>
        );
    }
}

export default HomePage