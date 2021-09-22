import React, {useState} from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import logo from './logo_background2.png'
function Home(){
    
    return(
        <div className="home">
            <div className="hero_menu">
                
                <img src={logo} alt="" />
                <div className="hero_head">
                <h1 >Alex Cormier <br/>FullStack Web Developer</h1>
                <h2></h2>
                </div>
            </div>
            <NavBar/>
            </div>
    )
}

export default Home;