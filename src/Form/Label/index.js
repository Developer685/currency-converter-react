import { Input } from "./styled";

const Label = ({ amount, setAmount }) => (

    <label>
        Wpisz kwotę:
        <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="(Tylko liczby)"
            required
            step="0.01"
            type="number"
        />
        <br />
        Wybierz walutę:

    </label>
);

export default Label;