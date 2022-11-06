import React from 'react'
import './StdPageBack-button.css';
import { Link } from 'react-router-dom';
export default function BackButton() {
  return (
    <div><Link to ="/StudentsProjectPage"><button className='btn-btn'>Back To Projects</button></Link><br/><br/></div>
  );
}
