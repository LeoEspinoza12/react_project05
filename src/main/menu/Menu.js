import React, { Component } from 'react'
import Intro from './intro/Intro'
import Services from './services/Services'
import Owner from './owner/Owner'
import Contact from './contact/Contact'



import './Menu.css'


class Menu extends Component {


  render() {

    let myMenu = null

    // console.log('switch', this.props.switch)
    // console.log('menu', this.props.selectedMenu)
    let classnames = [this.props.option, 'classAnimate']

    if(!this.props.switch){
      // console.log('menu page')
      myMenu = <button className={classnames.join(' ')} onClick={()=> this.props.click(this.props.option)}>{this.props.option.toUpperCase()}</button>
    } 
    
    
    if(this.props.switch ===true){
      
      if(this.props.menu === 'smoothie'){
        myMenu = <Intro 
                click={this.props.click}
                menu={this.props.menu}/>
      }
      if(this.props.menu === 'services'){
        myMenu = <Services 
                click={this.props.click}
                menu={this.props.menu}/>
      }
       if(this.props.menu === 'owner'){
        myMenu = <Owner 
                click={this.props.click}
                menu={this.props.menu}/>
      }
      if(this.props.menu === 'contact us'){
        myMenu = <Contact 
                click={this.props.click}
                menu={this.props.menu}/>
      }

    }

    return (
      <div className='Menu'>
        {myMenu}

      </div>
    )
  }
}

export default Menu