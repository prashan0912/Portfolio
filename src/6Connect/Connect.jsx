
import { useState } from "react"
import "./Connect.css"

import axios from 'axios'
export default function Connect() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');


  const data = { name, email, message: msg };
  function submitAction(event) {
    event.preventDefault();
    console.log(data)
    try {
      if (!name || !email || !msg) {
        alert('All fields are required!');
        return;
      }
      const response = axios.post("http://localhost:5001", { name, email, message: msg })
      console.log(response.data)
      // Reset the form fields
      setName('');
      setEmail('');
      setMsg('');



    } catch (error) {
      console.log(error)
    }

    // return data;

  }


  return (
    <div className="ConnectContainer">
      <div className="ConnectTitle"><h1>Connect </h1></div>

      <div className="ConnectWrapper">
        <div className="wrapper2">
          <form action="render" onSubmit={submitAction} >
            <div className="nameEmail">
              <div className="name"> Name<br />
                <input type="text" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="Email" > Email <br />
                <input type="Email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} /></div>

              <div className="textAreaContainer"> Message<br />
                <textarea name="" id="" placeholder="Message" onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
              </div>

              <button type="submit" className="submitButton">Submit</button>
            </div>
          </form>



        </div>
      </div>

    </div>
  )
}
