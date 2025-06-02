import photo from '../assets/photo.png'
import "./About.css"
export default function About() {
  return (
    <div id='ABOUT' className="AboutContainer">
      <div className="title"><h1>About me </h1></div>
      <div className="mainAbout">
        <div className="about-left">
          <img src={photo} alt="photo" 
          // style={{height:100 , width:100}}
           />
        </div>

        <div className="about-right">
          <p>I am a final-year Computer Science student at Bhilai Institute of Technology with a strong passion for programming, problem-solving, and real-world application development. My academic journey, marked by a consistent 78.55% score, has been complemented by practical experience through projects and internships. I enjoy building full-stack web applications and continually explore ways to apply my technical knowledge to solve everyday problems.<br /></p>
          <p>  During my internship at BIT AICTE IDEAL Lab, I contributed to developing Crime Mapper, a web app integrating Mapbox API and PostgreSQL for crime visualization. I've also built Speedy Slice, a pizza delivery platform, and Quick Chat, a real-time messaging app enhanced with Gemini AI. My technical toolkit includes  <span>ReactJS, NodeJS, MongoDB, Firebase, JavaScript, and C++.</span><br /></p>
          <p> Beyond academics, I hold the rank of Corporal in NCC, have led national events, and earned medals in SGFI Yoga. I value discipline, leadership, and continuous self-improvement.</p></div>

      </div>
    </div>
  )
}
