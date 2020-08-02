import React, {useEffect} from 'react'
import BrandLogo from '../Svgs/BrandLogo/BrandLogo'
import {introAnim} from '../../utils/pageanimations/toplayover/toplayover'
import {checkforsession} from '../../utils/sessiondata/sessionStorage'

const TopLayover = (props) =>{
  
  useEffect(()=>{
    (async () => {
      const session = await checkforsession()
      session ? introAnim(true) : introAnim(false)
    })()
  }, [])

  return (
    <div className="top-layover">
      <div className="top-layover-container content-center">
        <div className="top-layover-logo content-center">
          <BrandLogo 
            colorMode={'#E3E1C3'}/>
          {props.hasSession ? null : 
          <p className='top-loading'
            style={{'color': '#F0EED2'}}>
              We are loading . . .</p> }
        </div>
      </div>
      <div className="top-layover-runner">
        <span className='top-runner' 
          style={{'background':'#CCCAAE'}}></span>
      </div>
    </div> 
  )
}

export default TopLayover