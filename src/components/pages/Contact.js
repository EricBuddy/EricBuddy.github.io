import React from 'react'
import social from '../../donuts.jpg'
function Contact() {
    return (
        <div className='contact'>
          <div className='contacts'>
            You could find me on this platforms:<br/>
            <img className='pic' src={social}/>
            <img className='pic' src={social}/>
          </div>
        </div>
    )
}

export default Contact
