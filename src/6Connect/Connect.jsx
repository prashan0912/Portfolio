
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
      <div className="skillsTitle"><h1> Contact me </h1></div>

      <div className="wrapper2">
        <form action="render" onSubmit={submitAction} >
          <div className="wrapper21">
            <div className="wrapper3">
              <h1>Lets Talk</h1>
              <p>I am current looking for a job if you want to hire me or some task for me feel free to reach out to me </p>
              <div className="Email section">
                <p id="highlight">  Email</p>
                <p>prashantsahu0912@gmail.com</p>
              </div>

              <div className="location section">
                <p id="highlight"><span id="locationSymbol" class="material-symbols-outlined">
                  location_on
                </span>Location</p>
                <p> Durg,Chhattisgarh</p>
              </div>
              feel free to contact with me
              <div className="links">


                <a href='https://github.com/prashan0912'><div id="github" title="github"> </div> </a>
                <a href="https://www.linkedin.com/in/prashant-sahu-509970227/"><div id="linkedIn"></div></a>
                {/* <div id="instagram" title="instagram"><a href=""></a></div> */}
                <a href="https://leetcode.com/u/prashan0912/"><div id="leetCode" title="leetCode"></div></a>

              </div>
            </div>
            <div className="wrapper4">
              <div className="name"> Name<br />
                <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="Email" > Email <br />
                <input type="Email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>

              <div className="textAreaContainer"> Message <br />
                <textarea placeholder=" Enter your message" onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
              </div>
              <button type="submit" className="submitButton">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div id="copyright" >  copyright &copy; Prashant Portfolio || Website Design & Maintain by - <span1> Prashant Sahu </span1></div>
    </div>

  )
}
