import React from 'react'
import './MyLogo.css'

const MyLogo = (props) => {

  let classname = null

  if(!props.switch){
    classname = 'MyLogo'
  } else {
    classname = 'MyLogoMenu'
  }

  return (
    <div className={classname}>
      <p><a href="http://nodel-smoothie.herokuapp.com">@ aimanski.com</a></p>
    </div>
  )
}


export default MyLogo