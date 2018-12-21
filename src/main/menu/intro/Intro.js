import React from 'react'
import './Intro.css'
// import MyLogo from '../../../components/myLogo/MyLogo'

const Intro = (props) => {
  console.log('intro page')
  return (

    <div 
      className='Smoothie'
      onClick={()=>props.click(null)}>
      <div className='img'></div>
      <h4>Our Cafe</h4>
      <p>Laboriosam modi excepturi maiores officia corporis, error, laborum laudantium sunt nisi vel dolores voluptates cupiditate! Voluptate alias fuga deserunt provident excepturi a obcaecati repudiandae explicabo, possimus voluptatem sit voluptatum ratione cumque iste!</p>
      <p>Praesentium autem aliquid error earum deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nostrum qui quos dolores fugit tenetur sint ut a ipsa fugiat totam.</p>
      


    </div>
  )
}

export default Intro