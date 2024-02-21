import "./style.css";

const Buttons = ({ amount, calculateResult, setAmount }) => (
    <div>
        <button onClick={() => calculateResult(amount)} className="form__button">Przelicz</button>
        <button className="form__button" onClick={() => setAmount("")}>Wyczyść</button>
    </div>

);

export default Buttons;