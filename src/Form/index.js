import "./style.css"
import Select from './Select';
import Result from './Result';
import Clock from "./Clock";

const Form = ({ onFormSubmit, amount, setAmount, handleNationalSelect, handleForeignSelect, calculateResult, result }) => (
    <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fildset">
            <Clock />
            <header className="form__legend">
                <h1 >Kantor</h1>
            </header>
            Wyliczenia kantora opierają się na kursie walut z dnia 01.08.2023
            <main className="main">
                <section>
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

                    <Select setCurrency={handleNationalSelect} />
                    <br />Wybierz walutę na którą chcesz przewalutować:
                    <Select setCurrency={handleForeignSelect} />
                </section>
            </main>

            <section>
                <div>
                    <button onClick={() => calculateResult(amount)} className="form__button">Przelicz</button>
                    <button className="form__button" onClick={() => setAmount("")}>Wyczyść</button>
                </div>
                <Result result={result} />
            </section>


        </fieldset >
    </form>

);
export default Form;