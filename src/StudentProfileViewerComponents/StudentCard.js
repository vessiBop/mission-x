import React from 'react'
import './StudentCard.css';
import image from './images/RawiriFletcher.png';
export default function StudentCard() {
  return (
    <div className='Std-container'>
      
        <div className='class1'><div className='std_image'> <img src={image} alt=''></img></div>
        <button className='edit_button'>Edit Profile</button><br/><br/>
        <button className='changePhoto_btn'>Change Photo</button></div>


        <div className='class2'>
            <h2>Rawiri Fletcher</h2>
            <div className='space-btw'>
           <div> School</div>
           <div>  Teacher </div>      
           <div> Course </div>       
           <div> Date of birth </div> 
           <div>Contect No </div>    
           <div> Email id </div>     
          </div>
        </div>
        
    </div>
  )
}
