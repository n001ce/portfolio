import React, {useState} from 'react'
import './Projects.css'
import {ProjectsData} from './ProjectsData'
import ProjectSlider from './ProjectsSlider'
import twitch_goose from './images/twitch-goose.PNG'
import group_up from './images/group-up.PNG'
import kennel_manager from './images/kennel_manager.PNG'
import trivia from './images/fantasci-trivia.PNG'
import { icons } from 'react-icons'

function Project(){
    const [current, setCurrent] = useState(0)
    const length = ProjectsData.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if(!Array.isArray(ProjectsData)||ProjectsData.length<=0){
        return null
    }



    return(
        <div id="projects">
            <div className="slider">
                <svg onClick={prevSlide} className="left-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>            
                <svg onClick={nextSlide} className="right-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg> 
                {ProjectsData.map((project, index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'}
                    key={index}>
                        {index===current && (
                            <img className="image" src={project.image} alt="" />
                        )}
                    </div>
                )
            })}
            </div>
            {ProjectsData.map((project, index)=>{
                    return(
                    <>
                    <div className={index === current ? 'proj-modal active' : 'proj-modal'}>
                        <div className="modal-head">
                            <h1>{project.title}</h1>
                        </div>
                        <div className="modal-content">
                            <div className="proj_desc">
                                <p>{project.description}</p>
                            </div>
                            <div className="tech">
                                <h2>Tech Used</h2>
                            </div>
                            <div className="tech-con">
                                {project.icons}
                            </div>
                            <div className="issues">
                                <h1>Issues</h1>
                            </div>
                            <div className="issues_data">
                                <p>{project.issues}</p>
                            </div>
                            <div className="solutions">
                                <h1>Solutions</h1>
                            </div>
                            <div className="solutions_data">
                                <p>{project.solutions}</p>
                            </div>
                        </div>
                        <div className="modal-nav">
                            <a className="modal-nav-btn" href={project.url}>Check It Out</a>
                            <a className="modal-nav-btn" href={project.code}>Source Code</a>
                        </div>
                    </div>
                    </>
                    )
                    
                })
                }
                </div>
          
       

    )
            }


export default Project;