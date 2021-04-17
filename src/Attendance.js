import 'tachyons';
import './Attendance.css';
import {useState,Fragment,useEffect} from 'react';
import {shittyNames} from './shittyNames';




function empty()
{
	return(
	       <div>
	       	
	       </div>
       )
}

function restrictNumber(event)
{
	// console.log('event keycode',event.keyCode)
	if(event.target.value==null||event.target.value==0)
		return;

	let number=document.querySelector("#noOfSubjects")
	if(number.value>10){number.value='10';}else if(number.value<3){number.value='3'}
}

let SubjectAttendance=(props)=>{
	return(
	       <div className="flexAttendance oHidden none attendanceHidden">
	       	<p>Attendance of Subject {props.i+1}: </p>
	       	<p>{props.element}%</p>
	       </div>
       )
}

let AttendanceSum=(props)=>{
	// debugger
	let sum=props.arr.reduce((acc,ele)=>acc+ele,0)
	if(props.arr.length>0)
	{
		return(
	       <Fragment>
	       <br/>
	       <p id="AttendanceSum" className="none attendanceHidden">Overall attendance: {(sum/props.arr.length).toFixed(2)}%</p>
	       </Fragment>
       )
	}
	else
	{
		return null;

	}

}

let SubjectAttendanceArray=(props)=>
{
		let res=props.arr.map((element,i)=>{
	return(
		//<p>Attendance of Subject {i+1} is {element}%</p>

		<Fragment>
		<SubjectAttendance i={i} element={element} />
		
		</Fragment>
	)}
	)
	return res;
}

function Taunt(props)
{
	if(props.curse.length===0)
		return (
		        <Fragment></Fragment>
	        );
	return (
	        <div className="tc none hidden" id="taunt" >
	        	<p>Hi <b>{props.curse}</b>.</p>
	        	<p>Enter the number of subjects below</p>
	        </div>
       )
}

function Attendance(props)
{
	const [NumberOfSubjectsState,setNumberOfSubjectsState]=useState([]);
	const [arrayAttendance,setArrayAttendance]=useState([]);
	const [isVisiblePromptAttendance,setIsVisiblePromptAttendance]=useState(false);
	const [curse,setCurse]=useState('');

	function PromptSubjects()
	{
		return(
		       <div className="tl" id="promptsubject"
		       >
		       	<label>Enter number of subjects(3-10): </label>
		       	<input id="noOfSubjects" type="number"
		       	max="10" min="3"
		       	onChange={restrictNumber}
		       	></input><br/>
		       	<button className="regularBtn nextAttendance" onClick={afterNextSubject}>Next</button>
		       </div>
	       )
	}
	// debugger

	function afterNextSubject()
{
	let promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(23);
		},1000)
		resolve(arrayAttendance);
	})

	let number=document.querySelector("#noOfSubjects")
	let n=parseInt(number.value);
	let arrAttendance=[];
	// debugger
	for(let i=0;i<n;i++)
	{
		let sum=0;
		for(let j=0;j<i;j++)
		{
			sum+=arrAttendance[j];
		}
		if(i>n/2)
		{
			let upper=75*(i+1)-sum;
			if(upper>90)
				upper=90;
			let rand=Math.random()*(upper-30)+30;
			rand=parseFloat(rand.toFixed(2));
			arrAttendance.push(rand);
		}
		else
		{
			let rand=Math.random()*(90-30)+30;
			rand=parseFloat(rand.toFixed(2));
			arrAttendance.push(rand);
		}

	}

promise
	.then(()=>{setArrayAttendance(arrAttendance)})
	.then(()=>{
		let index=0;
		let attendanceArray=document.querySelectorAll(".flexAttendance");
		console.log('attendanceArray',attendanceArray)
		attendanceArray.forEach((element,i)=>{
				index++;
				setTimeout(()=>{console.log('element',i,': ',element)
				element.classList.remove('none');},200+(i-1)*1000)
				setTimeout(()=>{
					element.scrollIntoView(false);
				},500+(i-1)*1200 );
				setTimeout(()=>{element.classList.remove('attendanceHidden');
				element.classList.add('attendanceVisible');
			},1000*(i+1))
			} )


	
		let element=document.querySelector("#AttendanceSum");
		if(!element)
				return

		console.log('sum: ',element);
		setTimeout(()=>{

			 // console.log('element',i,': ',element)
				element.classList.remove('none');},200+(index)*1000 )
				setTimeout(()=>{
					element.scrollIntoView(false);
				},500+(index)*1200 )
				setTimeout(()=>{element.classList.remove('attendanceHidden');
				element.classList.add('attendanceSumVisible');
			},1000*(index+1))

	let element2=document.querySelector("#postDebarred");
		if(!element2)
				return;

		console.log('sum: ',element2);
		setTimeout(()=>{

			 // console.log('element',i,': ',element)
				element2.classList.remove('none');},200*(index+1))
				setTimeout(()=>{
					element2.scrollIntoView(false);
				},500+(index+1)*1200 )
				setTimeout(()=>{element2.classList.remove('attendanceHidden');
				element2.classList.add('attendanceSumVisible');
			},1000*(index+2))
 

	})

	
	
	
}

	let isValidName=(str)=>
	{
		let f=0;
		let alphabets='';

		for(let i=97;i<=122 ;i++)
		{
			alphabets+=String.fromCharCode(i);
		}

		for(let i=65;i<=90 ;i++)
		{
			alphabets+=String.fromCharCode(i);
		}

		for(let i=0;i<str.length;i++)
		{
			if(alphabets.includes(str[i]))
				return str[i];
		}

		
		
			return '';
		
	}

	function wait(paraTime)
	{	
		let start=Date.now(),
			now=start;
		while(now-start<paraTime)
			now=Date.now();

	}
	
	function onLogin()
	{
		//TODO
		//Add condition that name field is not empty
		let input=document.querySelector("#attendanceName");
		let firstLetter=isValidName(input.value);
		if(input.value.length===0||firstLetter.length===0)
			return;

		firstLetter=firstLetter.toLowerCase();
		let res='';
		for(let i=0;i<shittyNames.length;i++)
		{
			if(firstLetter===shittyNames[i].id)
			{
				res=shittyNames[i].name;
				break;
			}
		}
		setCurse(res);

		
		setTimeout(()=>{
			let taunt=document.querySelector("#taunt");
			taunt.classList.remove('none');
			taunt.scrollIntoView(false)
			},0 );
		setTimeout(()=>{
			let taunt=document.querySelector("#taunt");
			taunt.classList.remove('hidden');
			taunt.classList.add('visible');
			},500 );

		
		setTimeout(()=>{
			setNumberOfSubjectsState([<PromptSubjects/>])
		},2000) ;
		
	}

	useEffect(()=>{
		let promptsubject=document.querySelector("#promptsubject");
		if(promptsubject&&isVisiblePromptAttendance===false)
		{
			promptsubject.scrollIntoView(false);
			setIsVisiblePromptAttendance(true);
		}
	});

	useEffect(()=>{

	})

	

	return(
	       <div className="attendance attendanceFont tc">

		       <h2>Attendance</h2>
		       <label>Enter your name: </label>
		       <input id="attendanceName" type="text"

		       /><br/>
		       <button onClick={onLogin} className="regularBtn">Login</button><br/>
		       <Taunt curse={curse} 
		       />
		       <br/><br/>
		       {NumberOfSubjectsState}

		       <div className="afterNextSubject">
		       		<SubjectAttendanceArray arr={arrayAttendance}/>
		       		<AttendanceSum arr={arrayAttendance}/>
		       	</div>
		       	<div className="none hidden" id="postDebarred">
		       		<p> How lucky you are crazy <span className="red"> ass</span>. You are <b> debarred</b>.</p>
		       		<p>Now you have opportunity to attend more time in our lovely campus in fucking crazy<span class="purple"> heat</span> of June</p>
	       		</div>
		       



	       </div>
       )
}

export default Attendance;