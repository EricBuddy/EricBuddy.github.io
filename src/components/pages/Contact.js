import React, {useState} from 'react'
import social from '../../donuts.jpg'
function Contact() {

    const [name,setName]=useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')


    const formSubmit=(event)=>{

      event.preventDefault()
       setName('')
       setEmail('')
       setMsg('')
      alert(`Hey ${name} your message was sent successfully!`)

    }

    return (
        <div className='contact'>
          <div className='contacts'>
           You can contact me through via Email Eric.Buddy00@gmail.com. <br/>
           Contact form <br/>
           <form>
            <label>Name</label><br/>
            <input type ='text'  onChange={e => setName(e.target.value)} value={name}/><br/>
            <label>Email</label><br/>
            <input type ='text' onChange={e => setEmail(e.target.value)} value={email}/><br/>
            <label>Message</label><br/>
            <input type ='text'  onChange={e => setMsg(e.target.value)} value={msg}/><br/>
            <button onClick={formSubmit}>Submit</button>
           </form>
          </div>
        </div>
    )
}

export default Contact
