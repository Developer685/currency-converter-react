import { Input, LabelDiv } from "./styled";

const Label = ({ amount, setAmount }) => (

    <label>

        <LabelDiv>
            Wpisz kwotę do przeliczenia
        </LabelDiv>

        <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            
            required
            step="0.01"
            type="number"
        />

    </label>
);

export default Label;