import "./style.css";

const Label = ({ amount, setAmount }) => (

    <label className="label">
        Wpisz kwotę:
        <input
            className="inputElement"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="(Tylko liczby)"
            required
            step="0.01"
            type="number"
        /> <br />
        Wybierz walutę:

    </label>
);

export default Label;