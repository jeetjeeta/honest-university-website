import './Admission.css';
import 'tachyons';
import {useState,useEffect} from 'react';






function Admission(props)
{ const [fees,setFees]=useState(0);
  useEffect(()=>{
     let fes=Math.random().toFixed(1)*(170000-100000)+100000;
     fes=fes.toFixed(2); 
     setFees(fes);

  },[])

  const [formVisibleState,setFormVisibleState]=useState('hidden none');
  const [afterNextVisibleState,setAfterNextVisibleState]=useState('hidden none');
  const [submitFeesVisibleState,setSubmitFeesVisibleState]=useState('hidden none');
  const [afterSubmitFeesVisibleState,setAfterSubmitFeesVisibleState]=useState('hidden none');
  const [refundFeesVisibleState,setRefundFeesVisibleState]=useState('hidden none');
  const [afterRefundFeesVisibleState,setAfterRefundFeesVisibleState]=useState('afterRefundHidden');
  const [repeatBtnCursorState,setRepeatBtnCursorState]=useState('pointer');

  

  function onAdmission()
  {let promise=new Promise((resolve,reject)=>{
    resolve(formVisibleState);
  })
    
     promise 
     
     .then(()=>{setFormVisibleState('hidden block')})
     .then(()=>{let admission=document.querySelector(".admission");
      // document.documentElement.scrollTop = admission.offsetTop+admission.scrollHeight;
        admission.scrollIntoView(false);
      console.log(document.documentElement.scrollTop)})
     .then(()=>{setTimeout(setFormVisibleState,0,'visible')})

    
   

  }

  function onNext()
  {
    let promise=new Promise((resolve,reject)=>{
     resolve(submitFeesVisibleState)
  })

    let name=document.querySelector("#nameAdmission");
    if(name.value.length===0)
      return; 


    setFormVisibleState('none');
    setAfterNextVisibleState('hidden block');
    setTimeout(setAfterNextVisibleState,0,'visible');

    promise
    .then(()=>{setSubmitFeesVisibleState('hidden block')})
     .then(()=>{let submitFees=document.querySelector(".submit-fees");
     
        submitFees.scrollIntoView(false);
      console.log(document.documentElement.scrollTop)})
     .then(()=>{setTimeout(setSubmitFeesVisibleState,1000,'visible')})
    
  }

  function onNextEnter(event)
  {
    if(event.target.value!==13)
      return;

     let promise=new Promise((resolve,reject)=>{
     resolve(submitFeesVisibleState)
  })

    let name=document.querySelector("#nameAdmission");
    if(name.value.length===0)
      return; 


    setFormVisibleState('none');
    setAfterNextVisibleState('hidden block');
    setTimeout(setAfterNextVisibleState,0,'visible');

    promise
    .then(()=>{setSubmitFeesVisibleState('hidden block')})
     .then(()=>{let submitFees=document.querySelector(".submit-fees");
     
        submitFees.scrollIntoView(false);
      console.log(document.documentElement.scrollTop)})
     .then(()=>{setTimeout(setSubmitFeesVisibleState,1000,'visible')})
  }

function onSubmitFees()
  {
     let promise=new Promise((resolve,reject)=>{
     resolve(afterSubmitFeesVisibleState)
  })

     promise
    .then(()=>{setAfterSubmitFeesVisibleState('hidden block')})
     .then(()=>{let afterSubmitFees=document.querySelector(".afterSubmit");
     
        if(afterSubmitFees)
          afterSubmitFees.scrollIntoView(false);
      console.log(document.documentElement.scrollTop)})
     .then(()=>{setTimeout(setAfterSubmitFeesVisibleState,1000,'visible')}) 
     .then(()=>{setTimeout(setRefundFeesVisibleState,3500,'hidden block')})
     .then(()=>{setTimeout(()=>{let afterSubmitFees=document.querySelector(".refundBtn");
     
        if(afterSubmitFees)
          // document.documentElement.scrollTop+= afterSubmitFees.scrollHeight;
          afterSubmitFees.scrollIntoView(false);
          },3510)
          }) 
     .then(()=>{setTimeout(setRefundFeesVisibleState,4000,'visible')})
  }

  function onRefundFees()
  {
     let promise=new Promise((resolve,reject)=>{
     resolve(afterRefundFeesVisibleState);
   })

     promise
     .then(()=>{let afterRefundflexContainer=document.querySelector(".afterRefundflexContainer");
                afterRefundflexContainer.classList.remove('hidden');
                afterRefundflexContainer.classList.add('visible');
        })
     .then(()=>{setRepeatBtnCursorState('loading')})
     .then(()=>{setAfterRefundFeesVisibleState('afterRefundHidden')})
    
     .then(()=>{setTimeout(setAfterRefundFeesVisibleState,2000,'afterRefundVisible')})
     .then(()=>{setTimeout(setRepeatBtnCursorState,2000,'pointer')})
     .then(()=>{ 
      //debugger;
      let afterRefundflexContainer=document.querySelector("#refundBtn");
     
        setTimeout(()=>{
          // document.documentElement.scrollTop+=afterRefundflexContainer.scrollHeight+40;
          let afterRefund=document.querySelector(".afterRefund");
          afterRefund.scrollIntoView(false);
           document.documentElement.scrollTop+=40

        },2300)
      console.log(document.documentElement.scrollTop)})


  }

  function closeBoxAfterRefund()
  {
    let promise=new Promise((resolve,reject)=>{
     resolve(afterRefundFeesVisibleState);
   })

     promise
     .then(()=>{setAfterRefundFeesVisibleState('afterRefundHidden')})
     .then(()=>{setTimeout(setAfterRefundFeesVisibleState,0,'afterRefundHidden')})
     .then(()=>
     {
     
       setTimeout(()=>{
        // document.documentElement.scrollTop-=118
         let admission=document.querySelector("#refundBtn");
        admission.scrollIntoView(false);

       },0)
     })
     

  }
 
	return(
	       <div className="admission tc f4"  >
          <h2>Admission</h2>
          <p>So what are you waiting for, entrance test? Haven't you heard<span className="purple"
          > "Paisa faiko tamasha dekho"</span> </p>
          <br/>
          <button onClick={onAdmission} id="admissionBtn" 
          >Take Admission</button>
          
          <div className={`form tl ${formVisibleState}`} id="form">

            <p>Fill the below form</p>
            <label>Name: </label>
            <input type="text" onKeyPress={onNextEnter} id="nameAdmission"
            ></input><br/>
            <button onClick={onNext} id="nextBtn">Next</button>
          </div>

          <div className={`afterNext ${afterNextVisibleState}`}>
            <p className="tl"
            > No need to fill the rest details. No one gives the fuck who you are</p>
            <p className="tl"> Now just submit the damn fees</p>
            </div>

          <div className={`submit-fees ${submitFeesVisibleState}`}>
            <label>Your fees to be submitted is </label><br/>
            {'\u20b9'}<input type="number" readOnly value={fees}/><br/>
            <button onClick={onSubmitFees} id="submitBtn">Submit</button>
          </div>

          <div className={`afterSubmit ma ${afterSubmitFeesVisibleState}`}>
            <p className="inline"> <span className="red"
            >Congrats!</span> Now even God cannot save your <span className="blue">ass</span> 🙄</p><br/>
            <p className="mb0 inline"
            >But don't worry you will become habitual of it 🙂</p>
          </div>
          <br/><br/>
          <div className={`refund-fees ${refundFeesVisibleState}`}>
            <p>So you are tired of being treated <b>rough</b></p> 
            <p>It's ok but don't forget to take <b>refund</b></p>
            <button className={repeatBtnCursorState} onClick={onRefundFees} id="refundBtn">Refund</button>
          </div>  

          <div className="afterRefundflexContainer hidden">
            <div className={`afterRefund ${afterRefundFeesVisibleState}`}>
              <div className="flexContainer">
                <span onClick={closeBoxAfterRefund} id="afterRefund-cross">{'\u00d7'}</span>
              </div>
              <p className="ma0 pa2">Fuck you</p>
             { <p className="ma0 pa2">Once in never out</p>
           }
            </div>
          </div>
            
            
	       </div>
       )
}

export default Admission;