import React from 'react';
import './Backdrop.css';
import MyLogo from '../myLogo/MyLogo'


const backdrop = (props) => {

  if(!props.switch) {
    console.log('it was true')
    return <div className='BackdropOne'>  
    </div>;
  } else {
    console.log('it was false')
    return <div className='BackdropTwo'>
              <MyLogo switch={props.switch}/>
           </div>;
  }

};

export default backdrop;