import "./style.css";

const Label = ({ input, setInput }) => (

    <label>
        Wpisz kwotę:
        <input className="inputElement" value={input} onChange={(event) => setInput(event.target.value)} required autoFocus
            placeholder="(tylko liczby)" name="Wpisz kwotę" /> <br />
        Wybierz walutę:
    </label>

);

export default Label;