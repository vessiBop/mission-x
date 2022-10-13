import React from 'react';
import { useEffect, useState } from 'react';
import './BackButton.css';
function BackButton(){
    const [backButton, setBackButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY >200) {
                setBackButton(true)
            } else{
                setBackButton(false)
            }
        })
    }, [])
    const scrollup = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        backButton && <button className='btn' onClick={scrollup}>Back To Top</button>

    );
}
export default BackButton;
