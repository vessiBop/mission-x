import './Button.css';
function Button() {
    return (
        <div>
            <div className="btn_btn"> <button>BEGINNER</button>
                <button>INTERMEDIATE</button>
                <button>ADVANCED</button></div>
            <div className="btn"> SHOW <button>25</button>
                <button>50</button>
                <button>100</button>
            </div>
        </div>
    );
}
export default Button;