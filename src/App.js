import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {} from './actions';
import {connect} from 'react-redux';
import Header from './Header';
import About from './About';
import Main from './Main';

const mapStateToProps=(state)=>
{
  return(
  {
    page: state.page,
  }
  
  )
}

const mapDispatchToProps=(dispatch)=>
{
  return(
  {
    
  }
       )
}

class App extends Component {
  

  render(){
    const {page}=this.props;

    return(
    <div className="">
      <Header/>
      <Main
        page={page}
      />
     <footer>
       <p>Website Made By</p>
       <p>(I am not stupid 😎)</p>
     </footer>  
    </div>
    );
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
