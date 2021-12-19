import React from 'react'
import './About.css'
import resume from '../../Eric Buddy_Resume.pdf'
function About() {
    return (
        <div className='about'>
            <div className='msg'>
                About Me<br/><br/>
                Hi my name is Eric Buddy. 
                I am very passionate about Computer Science. 
                If I don't the answer to a problem or an error in a code, I will find the answer to the problem or fix the error in the code. <br/><br/>
                Education<br/><br/>
                Studying: Lehman College<br/>
                Major: Computer Science <br/>
                Degree: B.S <br/>
                Excepted to graduate in Spring 2022<br/><br/>
                <a href={resume} download>Resume</a>

            </div>
        </div>
    )
}

export default About
