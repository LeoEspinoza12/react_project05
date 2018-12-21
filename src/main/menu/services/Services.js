import React from 'react'
import './Services.css'
const Services = (props) => {
  console.log('service page')
  return (

    <div 
      className='Services'
      onClick={()=>props.click(null)}>
      <div></div>
      <h4>Services</h4>
      <p>Aliquid eveniet cupiditate officiis. Consequuntur tenetur ducimus odit neque maiores totam voluptatem animi pariatur.</p>
      <p>Obcaecati iure laborum fugit deserunt perspiciatis aspernatur animi quam libero nobis, beatae odio, minima hic maiores itaque harum eos.</p>
      <p>Dignissimos, soluta minima quis beatae iusto nemo voluptatum ducimus obcaecati, in dolor explicabo exercitationem nesciunt harum reiciendis atque, eveniet quod.</p>
      
    </div>
  )
}

export default Services