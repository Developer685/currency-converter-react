import Select from './Select';
import Result from './Result';
import Clock from "./Clock";
import Fieldset from "./Fieldset";
import Buttons from "./Buttons";
import Label from "./Label";
import { StyledForm, Section, Header, HeaderDiv, Feilure, Loading } from "./styled";
import React, { useState } from 'react';

import { useRatesData } from './useRatesData';

const Form = () => {

  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const ratesData = useRatesData();
  const [selectedNational, setSelectedNational] = useState(ratesData.data);
  const [selectedForeign, setSelectedForeign] = useState(ratesData.data);


  const handleNationalSelect = (currency) => {
    const selectedNational = ratesData.data.find(({ code }) => code === currency.code)?.value; //for some reason doesn`t work without "?"
    setSelectedNational(selectedNational);
  };

  const handleForeignSelect = (currency) => {
    const selectedForeign = ratesData.find(({ code }) => code === currency)?.value;
    setSelectedForeign(selectedForeign);
  };

  const calculateResult = (amount, selectedNational, selectedForeign, currency) => {
    setResult((amount * selectedNational) / selectedForeign);
    console.log(selectedNational);

    //.toFixed(2);// set space after comma
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedNational, selectedForeign);
  };

  return (
    <div>
      <Header>
        <h1 > Kantor <br />
          <HeaderDiv>
            WYMIANA WALUT ONLINE
          </HeaderDiv>
        </h1>
      </Header>

      <StyledForm onSubmit={onFormSubmit}>
        {ratesData.state === "loading"
          ? (
            <Loading>
              Sekunda... <br />Ładuję kursy walut z Europejskiego Banku Centralnego
            </Loading>
          )
          :
          ratesData.state === "error" ? (
            <Feilure>
              Hmm... Coś poszło nie tak. Sprawdź, czy masz połączenie internetowe
            </Feilure>
          )
            : (


              <Fieldset>

                <Section>
                  <Label
                    amount={amount}
                    setAmount={setAmount}
                  />
                </Section>

                <Section>
                  Wybierz walutę ojczystą<br />
                  <Select ratesData={ratesData} setCurrency={handleNationalSelect} />
                  <br />
                  Wybierz walutę obcą
                  <br />
                  <Select ratesData={ratesData} setCurrency={handleForeignSelect} />
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
            )
        }
      </StyledForm>

    </div>

  );
};
export default Form;