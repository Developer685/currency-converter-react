import Select from './Select';
import Result from './Result';
import Clock from "./Clock";
import Fieldset from "./Fieldset";
import Buttons from "./Buttons";
import Label from "./Label";
import { StyledForm, Header, HeaderDiv, Section } from "./styled";

const Form = ({ onFormSubmit, amount, setAmount, handleNationalSelect, handleForeignSelect, calculateResult, result }) => (

    <StyledForm onSubmit={onFormSubmit}>

        <Header>
            <h1 >   Kantor<br />
                <HeaderDiv> WYMIANA WALUT ONLINE

                </HeaderDiv>
            </h1>
        </Header>

        <Fieldset>

            <Section>
                <Label
                    amount={amount}
                    setAmount={setAmount}
                />

            </Section>

            <Section>
                Wybierz walutę ojczystą<br />
                <Select
                    setCurrency={handleForeignSelect}
                />
                <br />
                Wybierz walutę obcą
                <br />
                <Select
                    setCurrency={handleNationalSelect}
                />
            </Section>

            <Section>
                <Clock />
                <Buttons
                    amount={amount}
                    setAmount={setAmount}
                    calculateResult={calculateResult}
                />
                <Result result={result} />
            </Section>

        </Fieldset>
    </StyledForm>

);
export default Form;