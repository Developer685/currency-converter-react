
import "./style.css";

const Buttons = ({ button1, button2, input, calculateResult }) => (
    <div>
        <button onClick={() => calculateResult(input)} className="form__button">{button1}</button>
        <button className="form__button">{button2}</button>
    </div>

);

export default Buttons;