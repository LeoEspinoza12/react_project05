import React, { Component } from 'react'
import './Main.css'
import Heading from '../components/heading/Heading'
import Menu from './menu/Menu'
import Backdrop from '../components/backdrop/Backdrop'
import MyLogo from '../components/myLogo/MyLogo'


class Main extends Component {

  state = {
    navOptions: ['smoothie', 'services', 'owner', 'contact'],
    switch: false,
    selectedMenu: null
  }

  changeSwitch = (option) => {
    // console.log('the switch was triggered')
    // console.log('option', option)
    this.setState({
      switch: !this.state.switch,
      selectedMenu: option
    })
  }
  
  
  render() {
    // console.log('switch', !this.state.switch)

    let heading = null
    let navigation = null

    if(!this.state.switch){
      
      heading = <Heading/>
      navigation = this.state.navOptions.map((option) => {
        return (
          <Menu
            key={option}
            click={this.changeSwitch}
            switch={this.state.switch}
            navOption={option}
            option={option === 'contact' ? 'contact us' : option} />
        )
      })
      return (
        <div className='Main'>
          <Backdrop 
            switch={this.state.switch}/>
          {heading}
          {navigation}
          <MyLogo switch={this.state.switch}/>
        </div>
      )
    } else {
      
      return (
        <div className='Main'>
           <Backdrop 
            switch={this.state.switch}/>
          <Menu 
            switch={this.state.switch}
            click={this.changeSwitch}
            menu={this.state.selectedMenu}/>

        </div>
      )
    }




  }
}

export default Main