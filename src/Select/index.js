import "./style.css";

const Select = ({ setCurrency }) => (

    <select className="selectElement" onChange={({ target }) => setCurrency(target.value)}>
        <option className="form__option" code="EUR">EUR</option>
        <option className="form__option" code="PLN">PLN</option>
        <option className="form__option" code="USD">USD</option>
        <option className="form__option" code="GBP">GBP</option>
        <option className="form__option" code="CHF">CHF</option>
    </select >

);

export default Select;