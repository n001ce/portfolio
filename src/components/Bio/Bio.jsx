import React, { Component } from 'react'
import './Bio.css'
import { BioData, StatData } from './AboutData'


class Bio extends Component {
    render(){
    return(
        <div className="about">
            <div className="left-side">
                <div className="bio-nav">
                    <div className="bio-nav-img">
                    </div>
                    <div className="bio-name">
                    <h4>Alexander F Cormier</h4>
                    </div>
                </div>
                <div className="bio-card-container">
                    {BioData.map((item)=>{
                        return(
                            <>
                                <div className="bio-card">
                                    <div className="bio-card-head">
                                        <h6>{item.header}</h6>
                                    </div>
                                    <div className="bio-card-body">
                                        <h3>{item.cont}</h3>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                    

            </div>
            <div className="right-side">
                <div className="skill-nav">
                    <p>FullStack Developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of OOP, data modeling, and API integration with training in JavaScript, Python, REACT, and Nodejs. </p>
                </div>
                <div className="skill-head">
                    <h1>Languages</h1>
                </div>
                <div className="skill-grid">
                    {StatData.map((item)=>{
                        return(
                            <>
                                <div className="skill-card">
                                    <div className="skill-icon">
                                        {item.img}
                                    </div>
                                    <div className="skill-card-des">
                                        <p>{item.header}</p>
                                    </div>
                                </div>
                            </>
                            )
                        })}
                </div>
            </div>
        </div>
        )
    }
}

export default Bio