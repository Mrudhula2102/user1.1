import React from 'react'
import './homee.css'
import Topbare from './Topbare'
const Homee = (props) => {

  return (
    
    <div align="center">
      <div >
    <Topbare xxx={props.checkLogout}/>
    </div>
    
   <div className='bb'>
    <div className="home-container">
      <div className="company-details">
        <h1>TalentHRM</h1>
        <p>TalentHRM is an innovative IT company specializing in human resource management solutions tailored for 
          modern businesses. With a focus on leveraging cutting-edge technology, they craft intuitive software and 
          platforms designed to streamline HR processes,optimize talent acquisition, and enhance employee engagement.</p>
      </div>
      <div className="image-gallery">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          alt="Company Image 1"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyypk_zow5bueBy66Cz94xoCVZGC6NuoNp2tw8PO9wA&s"
          alt="Company Image 2"
        />
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Company Image 3"
        /><br/><br/>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Homee