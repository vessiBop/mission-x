import React from 'react'
import './StudentCard.css';
import image from './images/RawiriFletcher.png';
export default function StudentCard() {
  return (
    <div className='Std-container'>
      
        <div className='class1'><img src={image} alt=''></img><br/>
        <br/><button>Edit Profile</button><br/><br/>
        <button>Change Photo</button></div>


        <div className='class2'>
            <h1>Rawiri Fletcher</h1>
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
