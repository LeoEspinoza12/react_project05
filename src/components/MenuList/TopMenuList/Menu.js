import React, {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {StateContext} from '../../../utils/context/stateContext'
import {checkRoute} from '../../../utils/common/common'
import {mouseEnter, mouseOut} from '../../../utils/pageanimations/navbarmenu/menuListEvents'

function Menu() {
  const { state, setActiveRoute } = useContext(StateContext)
  const currentRoute = checkRoute(useRouter().pathname)

  // set active route to the current route
  setTimeout(()=>{
    setActiveRoute(currentRoute)
  },300)

  let menus = ['home', 'about', 'projects', 'contacts']

  const menuList = () => {
  return menus.map((menu, i )=>{
    return (
      <li className='menu-list' key={i}>
        <div className='menu-list-container'>
          <div className={`content-center list-front
            ${menu === state.activeRoute ? 'active' : ''}`}>
            <Link href={menu === 'home' ? '/' : `/${menu}`}>
              <a>
                <span className='menu-list-text'
                  onMouseEnter={(e)=>mouseEnter(e, 'hoverIn')}
                  onMouseOut={(e)=>mouseOut(e)} >{menu}</span>
              </a>
            </Link>
          </div>
          <div className={`content-center list-back 
            ${menu === state.activeRoute ? 'active' : ''}`}>
            <span className='menu-list-backer'>{menu}</span>
          </div>
        </div>
      </li> )
    })
  }
  
  return (
    <nav>
      <ul>{menuList()}</ul>
    </nav>
  )
}

export default Menu;
