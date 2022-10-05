import './Button.css';
function Button() {
    return (
        <div className='Button_Container'>
           <div> <button>BEGINNER</button>
                <button>INTERMEDIATE</button>
                <button>ADVANCED</button></div>
           <div> SHOW <button>25</button>
                <button>50</button>
                <button>100</button></div>
                
        </div>
    );
}
export default Button;