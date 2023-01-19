import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import './Contact.css'
import axios from 'axios';


export default function Contact() {
  const navigate=useNavigate()
  const [formStatus, setFormStatus] = useState('Send')
  const [mailerState, setMailerState] = useState({
    Name: "",
    Email: "",
    Subject:"",
    Message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault()
    const response =  fetch("http://localhost:3002/api/sendmail", {
      method: "POST",
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      // .then(() => {
      //   setMailerState({
      //     Email: "",
      //     Name: "",
      //     Subject:"",
      //     Message: "",
      //   });
      // });
      // navigate('/Success')
   }

   const handleStateChange=(e)=>{
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <div className='mailform'>
      
      <form onClick={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-control" type="text" id="Name" required onChange={handleStateChange} value={mailerState.Name}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control" type="email" id="Email" required onChange={handleStateChange} value={mailerState.Email} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            Subject:
          </label>
          <input className="form-control" type="text" id="Subject" required onChange={handleStateChange} value={mailerState.Subject}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea className="form-control" id="Message" required onChange={handleStateChange} value={mailerState.Message} />
        </div>
        <button className="btn btn-danger" type="submit" onClick={onSubmit}>
        {formStatus}
        </button>
      </form>

    </div>
  )
}
