import React from 'react'
import './Home.css'
import picture  from '../../avatars.jpeg'
function Home() {
    return (
        <div className='home'>
           

           <img className='pic' src={picture}/>
           
            <div className='statements'>

                Hi, my name is Eric Buddy.<br/>
                Welcome to my react porfoilo. <br/>
                I could do web development and code in java.
            
            </div>

        </div>
    )
}

export default Home
