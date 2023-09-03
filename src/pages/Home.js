import { Link } from "react-router-dom";

export default function Home (){
    return (
        <>
        <div className="main">
        <header>
          <nav>
            <img scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_y7bTWHsVyzSsIiansDPjCE0rRdpG4XdJbA&usqp=CAU" className="img1" />
            <h1>FITNESS</h1>
           <li>
              <Link to="/">Home</Link>
              
              <Link to="About">About</Link>
              <Link to="servicest">services</Link>
              <Link to="blog">blog</Link>
              <Link to="contact">Contact</Link>
              
              </li>
              <button className="btn1">BECOME A MEMBER</button>
          </nav>
        </header>
        <div className="container">
          <p className="para-one">BUILD BODY PERFECT <br/> SHAPE FOR A GOOD AND <br/>HEALTHY LIFE</p>
          <button className="btn-2">BECOME A MEMBER</button>
        </div>
        <div className="container-2">
          <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about.png"width={500} className="img-2" height={650}/>
          <h1 className="h3">_____ABOUT OUR GYM</h1>
          <p className="para-3">SAFE BODY BUILDING PROPER <br/>SOLUTIONS THAT SAVES OUR<br/>VALUABLE TIME!
          <p>Brook presents your services with  flexible, convenient <br/>and cdpose layouts.  You can select your favorite layouts &<br/>  elements for cular ts with unlimited ustomization possibilities.<br/> Pixel-perfect replication of the designers is intended.
          <br/>
          <br/>
          Brook presents your services with flexible, convefnient and chient <br/> anipurpose layouts. You can select your favorite layouts.
          </p>
          </p>
        </div>

        <div className="container-3">
        <h2>____OUR SERVICES FOR YOU
          <p>PUSH YOUR LIMITS FORWARD<br/> WE OFFER TO YOU</p>
          <button className="btn3">OUR SERVICES</button>
        
        <span>

        <h3>QUALITY EQUIPMENT 
          <p>The sea freight service has grown <br/>consider ably in recent years.<br/> We spend timetting to kn.</p>
          </h3>
        </span>
        <span>
          <h3>HEALTH CARING
            <p>The sea freight service has grown <br/>consider ably in recent years.<br/> We spend timetting to kn.</p>
          </h3>
        </span>
   
        <span>
        <h3>GYM STRATEGIES
          <p>The sea freight service has grown <br/>consider ably in recent years.<br/> We spend timetting to kn</p>
        </h3>
          
        </span>
        </h2>
        </div>
        </div>
        </>
    )

}