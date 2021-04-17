import About from './About';
import './Main.css';
import 'tachyons';
import Admission from './Admission';
import Attendance from './Attendance';

function Main(props)
{
  if(props.page==="home")
  {   
    return(
  	       <div className="">
             <div className="imageSection">
               <h2 className="tc serif">Some beautiful images of GU</h2>
               <div className="guImage2">
                 <img src="images/gu infrastructure 1.jpg" alt="img1"/>
                 <img src="images/gu infrastructure 2.jpg" alt="img1"/>
                 <img src="images/gu online exam.jpg" alt="img1"/>
               </div>
            </div>
            <span className="anchor" id="about"></span>l.
  	         <About/>
             <span className="anchor" id="admission"></span>
             <Admission/>
             <span className="anchor" id="attendance"></span>
             <Attendance/>
  	       </div>
         )
  }
}

export default Main;
  
