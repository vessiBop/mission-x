import './Button.css';
function Button() {
    return (
        <div className='Button_Container'>
           <div> <button>BEGINNER</button>
                <button>INTERMEDIATE</button>
                <button>ADVANCED</button></div>
           <div> SHOW <button>5</button>
                <button>10</button>
                <button>15</button></div>
                
        </div>
    );
}
export default Button;