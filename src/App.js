import './App.css';
import './Header';
import React, { useState } from 'react';
import Header from './Header';
import Fieldset from './Fieldset';
import Section from './Section';
import Label from './Label';
import Select from './Select';
import Buttons from './Buttons';


function App() {

   const currencies = [
      {
         code: "PLN",
         name: "Polski złoty",
         value: 1
      },
      {
         code: "EUR",
         name: "Euro",
         value: 4.34
      },
      {
         code: "USD",
         name: "Dolar amerykański",
         value: 3.98
      },
      {
         code: "GBP",
         name: "Funt brytyjski",
         value: 5.04
      },
      {
         code: "CHF",
         name: "Frank szwajcarski",
         value: 4.67
      },
   ];

   //waluty mozna uzaleznic od wartosci np zlotowki i nastepnie wyznaczac wartosci poprzez dzielenie ich

   const [result, setResult] = useState(1);
   const [input, setInput] = useState("");
   const [chosenCurrency, setChosenCurrency] = useState();

   const calculateResult = (input) => {
      setResult(result => input * 4.43);
      console.log("przycisk dziala");
      console.log({ result });
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
   };

   const currencySelect = (event) => {
      const choice = chosenCurrency.find(currency => currency.code === event.target.value);
      setChosenCurrency(choice);
      console.log("Twoja waluta to: ", { choice });
   }
   /*
   const options = [
    { label: "EUR", value: 4.34 },
    { label: "PLN", value: 4.34 },
    { label: "USD", value: 3.98 }
   ]
   */

   return (
      <div>
         <form className="form" onSubmit={onFormSubmit}>
            <Fieldset>
               <legend className="form__legend">
                  <Header />
               </legend>
               Wyliczenia kantora opierają się na kursie walut z dnia 01.08.2023
               <main className="main">
                  <section>
                     <Label input={input} setInput={setInput} />

                     <Select value={chosenCurrency} setChosenCurrency={setChosenCurrency} />
                     <br />Wybierz walutę na którą chcesz przewalutować:
                     <Select value={chosenCurrency} setChosenCurrency={setChosenCurrency} />
                  </section>
               </main>
            </Fieldset>
            <Section
               body={<Buttons input={input} calculateResult={calculateResult} />}

               result={<span className="form__span">Kwota po przeliczeniu: {result} <strong className="result"></strong></span>}
            />

         </form>
      </div >
   );
}

export default App;
