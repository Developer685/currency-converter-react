import "./style.css";

const Buttons = ({ button1, button2, calculateResult }) => (
    <div>
        <button onClick={() => calculateResult()} className="form__button">{button1}</button>
        <button className="form__button">{button2}</button>
    </div>

);

export default Buttons;