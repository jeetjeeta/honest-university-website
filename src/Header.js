import './Header.css';
import 'tachyons';

function Header(props)
{
	return(
	       <header className="tc">
	       	<div className="HeadingAndImage">
	       		<img src="images/gu-transparent.png" alt="GU icon" className="fL guImage"/>
	       		<h2 className="f-5 heading ">IIT DANKAUR</h2>
	       	</div>

	       	<nav className="Navigation"
	       	>
	       		<a href="#" className="link">Home</a>
	       		<a href='#about' className="link">About</a>
	       		<a href='#admission' className="link">Admission</a>
	       		<a href="#attendance" className="link">Attendance</a>
	       		<a href="#" className="link">Faculties</a>
	       	</nav>

	       </header>
       )
}

export default Header;