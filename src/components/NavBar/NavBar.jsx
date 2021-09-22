import React, {useState} from 'react'
import './NavBar.css'
import Modal from 'react-modal'
import Projects from '../ProjectsLanding/ProjectsLanding'
import Contact from '../Contact/Contact'
import About from '../Bio/Bio'
function NavBar(){
    const [modalIsOpen, setModalIsOpen]=useState(false)
    const[id, setId] = useState('')

    function handleOnClick(event){
        if(modalIsOpen===false){
            setId(event.target.id)
            setModalIsOpen(true)
        }
        else
            setModalIsOpen(false)
    }

    function openModal(id){
        if(id === "bio"){
            return <About/>
        }
        if(id==="project"){
            return <Projects/>   
        }
        if(id==="contact"){
            return <Contact/>   
        }
    }

    return(
        <>
        <div className="navbar">
            <button id="bio" onClick={handleOnClick}>Bio</button>
            <button id="project" onClick={handleOnClick}>Projects</button>
            <button id="contact" onClick={handleOnClick}>Contact</button>

            <Modal isOpen={modalIsOpen} className="modal">
                {openModal(id)}
                <button onClick={handleOnClick}>X</button>
            </Modal>
        </div>
        </>
    )
}

export default NavBar;