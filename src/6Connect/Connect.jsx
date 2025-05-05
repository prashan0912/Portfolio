
import "./Connect.css"
export default function Connect() {

  function submitAction() {

  }

  return (
    <div className="ConnectContainer">
      <div className="ConnectTitle"><h1>Connect </h1></div>

      <div className="ConnectWrapper">
        <div className="wrapper2">
          <form action="render">
            <div className="nameEmail">
              <div className="name"> Name<br />
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div className="Email" > Email<br />
                <input type="Email" placeholder="Enter your Email" /></div>

              <div className="textAreaContainer"> Message<br />
                <textarea name="" id="" placeholder="Message"></textarea>
              </div>
              <button onSubmit={submitAction} className="submitButton">Submit</button>
            </div>
          </form>



        </div>
      </div>

    </div>
  )
}
