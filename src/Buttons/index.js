import "./style.css";

const Buttons = ({ input, calculateResult }) => (
    <div>
        <button onClick={() => calculateResult(input)} className="form__button">przelicz</button>
        <button className="form__button" type="reset">Wyczyść</button>
    </div>

);

export default Buttons;