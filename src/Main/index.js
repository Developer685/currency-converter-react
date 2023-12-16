import "./style.css";

const Main = ({ input, optionInput, optionResult }) => {
   
    <main className="main">
        <section>
            Wyliczenia kantora opierają się na kursie walut z dnia 01.08.2023<br />
            <label>
                Wpisz kwotę:
                <input className="inputElement" required autofocus
                    placeholder="(tylko liczby)" name="Wpisz kwotę" />
            </label>
            Wybierz walutę:

            <select className="optionInputElement">
                <option className="form__option" value="EUR">EUR</option>
                <option className="form__option" value="PLN">PLN</option>
                <option className="form__option" value="USD">USD</option>
            </select>

            <br />Wybierz walutę na którą chcesz przewalutować:

            <select className="optionResultElement">

                <option className="form__option" value="EUR">EUR</option>
                <option className="form__option" value="PLN">PLN</option>
                <option className="form__option" value="USD">USD</option>
            </select>
        </section>
    </main>
};

export default Main;