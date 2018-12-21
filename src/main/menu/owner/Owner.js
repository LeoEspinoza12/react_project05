import React from 'react'
import './Owner.css'
const Owner = (props) => {
  console.log('owner page')
  return (

    <div 
      className='Owner'
      onClick={()=>props.click(null)}>
      <div></div>
      <h4>Nodel Plantar</h4>
      <p>Praesentium autem aliquid error earum deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nostrum qui quos dolores fugit tenetur sint ut a ipsa fugiat totam laudantium incidunt. 
      </p>
      <p>Quo cupiditate quae accusantium? Minima vitae magni quam amet temporibus excepturi sapiente totam illum explicabo et tenetur autem suscipit dolores sed ex quaerat aperiam, repellendus reiciendis atque!</p>
      


    </div>
  )
}

export default Owner