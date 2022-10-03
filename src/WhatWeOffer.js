import './Fonts.css';
import { useState } from 'react';
import animationImage from './images/Projects01.png'
import gamingImage from './images/Projects02.png'
import chatbotsImage from './images/Projects03.png'
import augmentedRealityImage from './images/Projects04.png'

export default function WhatWeOffer() {
    const [imageURL, setImageURL] = useState({ animationImage })






    return (
        <>
            <div className="what-we-offer-parent-div">
                <div className="left-side-what-we-offer">
                    <h1 className='what-we-offer-header'>What We Offer</h1>
                    <h3 className='what-we-offer-header-two'>The Creative Problem Solving programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</h3>
                    <h2 className='what-will-students-create'>What will students create?</h2>
                    <div className='four-boxes'>
                        <button id='button-for-animation'><div className='box-one'>
                            <div className='animation'></div>
                            <p id='text-for-animation-box'>ANIMATION</p>
                        </div></button>
                        <button id='button-for-games'><div className='box-two'>
                            <div className='gaming'></div>
                            <p id='text-for-gaming-box'>GAMES</p>
                        </div></button>
                        <button id='button-for-chatbots'><div className='box-three'>
                            <div className='chatbots'></div>
                            <p id='text-for-chatbot-box'>CHATBOTS</p>
                        </div></button>
                        <button id='button-for-augmented-reality'><div className='box-four'>
                            <div className='augmented-reality'></div>
                            <p id='text-for-augmented-reality-box'>AUGMENTED REALITY</p>
                        </div></button>
                    </div>
                </div>
                <div className="right-side-what-we-offer">
                    <div className='project-image'>
                        <img src={animationImage} alt="animation-image" />
                    </div>
                </div>
            </div>

        </>
    )
}