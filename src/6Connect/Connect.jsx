
import { useState } from "react"
import "./Connect.css"
export default function Connect() {


  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');


  const data ={dataName:name,dataEmail:email,dataMsg:msg}

  function submitAction(event) {
    event.preventDefault();
    console.log(data)
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
                <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="Email" > Email <br />
                <input type="Email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/></div>

              <div className="textAreaContainer"> Message<br />
                <textarea name="" id="" placeholder="Message" onChange={(e)=>setMsg(e.target.value)}></textarea>
              </div>
              
              <button type="submit" className="submitButton">Submit</button>
            </div>
          </form>



        </div>
      </div>

    </div>
  )
}
