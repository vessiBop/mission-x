import './Fonts.css';
import img1 from './images/Group 1.png'
import img2 from './images/Group 2.png'
import img3 from './images/Group 3.png'
import img4 from './images/Group 4.png'

export default function ResponsiveImages() {


   return (
    <div className="teaching-kids-progamming">
        <h2>Teaching kids programming and digital skills is <i>MORE</i> than just writing code.</h2>
            <div className='four-images-teaching-kids-programming'>
                <div><img id='img-01' src={img1} alt='img'/></div>
                <div><img id='img-02' src={img2} alt='img'/></div>
                <div><img id='img-03' src={img3} alt='img'/></div>
                <div><img id='img-04' src={img4} alt='img'/></div>
                
            </div>
            
    </div>
   )

}