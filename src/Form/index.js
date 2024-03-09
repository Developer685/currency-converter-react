import Select from './Select';
import Result from './Result';
import Clock from "./Clock";
import Fieldset from "./Fieldset";
import Buttons from "./Buttons";
import Label from "./Label";
import { StyledForm, Header } from "./styled";

const Form = ({ onFormSubmit, amount, setAmount, handleNationalSelect, handleForeignSelect, calculateResult, result }) => (
    <StyledForm onSubmit={onFormSubmit}>
        <Fieldset>
            <Clock />
            <Header>
                <h1 >Kantor</h1>
            </Header>
            Wyliczenia kantora opierają się na kursie walut z dnia 01.08.2023
            <main >
                <section>
                    <Label
                        amount={amount}
                        setAmount={setAmount}
                    />
                    <Select
                        setCurrency={handleNationalSelect}
                    />
                    <br />Wybierz walutę na którą chcesz przewalutować:
                    <Select
                        setCurrency={handleForeignSelect}
                    />
                </section>
            </main>
            <section>
                <Buttons
                    amount={amount}
                    setAmount={setAmount}
                    calculateResult={calculateResult}
                />
                <Result result={result} />
            </section>
        </Fieldset>
    </StyledForm>

);
export default Form;