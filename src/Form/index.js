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
  const [currency, setCurrency] = useState("");
  const ratesData = useRatesData();
  const [selectedNational, setSelectedNational] = useState("EUR");
  const [selectedForeign, setSelectedForeign] = useState("EUR");

  const calculateResult = (amount, selectedNational, selectedForeign) => {

    const selectedNationalRate = selectedNational?.data?.find(({ code }) => code === currency.code)?.value; //for some reason doesn`t work without "?"
    const selectedForeignRate = selectedForeign?.data?.find(({ code }) => code === currency).code?.value;

    setResult((amount * selectedNationalRate) / selectedForeignRate);
    console.log(selectedNational);
    console.log(selectedForeign);
    console.log(result);
    console.log(currency);

    //.toFixed(some number);// set space after comma
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
                  <Select
                    ratesData={ratesData}
                    currency={selectedNational}
                    setCurrency={setSelectedNational}
                  />
                  <br />
                  Wybierz walutę obcą
                  <br />
                  <Select
                    ratesData={ratesData}
                    currency={selectedForeign}
                    setCurrency={setSelectedForeign}
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
            )
        }
      </StyledForm>

    </div>

  );
};
export default Form;