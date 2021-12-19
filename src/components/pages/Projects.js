import React from 'react'
import './Projects.css'
import {Link} from 'react-router-dom'
function Projects() {
    return (
        <div className='project'>
          <div className='topProjects'>
           Down below is links to some of my project's code that I worked on so far:<br/>
           </div>
          <div className='projects'>
          A Text Based Game In Java. Worked on this project solo. <br/><br/>
          <a href='https://github.com/EricBuddy/GAME'>Text Based Game Link</a> <br/><br/>
          Connect Four Game In Java And Java Gui. Worked on this project solo.<br/><br/>
          <a href = 'https://github.com/EricBuddy/Connect4'> Connect Four Link</a><br/><br/>
          React Website Where You Can your Favorite Links. Clone a repo and work on that repo.<br/><br/>
          <a href = 'https://github.com/EricBuddy/favLinks'>Favorite Link</a><br/><br/>
          React Drag And Drop With Colors And Gifs. Worked on this project with a group of four friends.<br/><br/>
          <a href = 'https://github.com/EricBuddy/design-pad'> React Drag And Drop Link</a>
          
          </div>
        </div>
    )
}

export default Projects
