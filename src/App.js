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
         rate: 1
      },
      {
         code: "EUR",
         name: "Euro",
         rate: 4.34
      },
      {
         code: "USD",
         name: "Dolar amerykański",
         rate: 3.98
      },
      {
         code: "GBP",
         name: "Funt brytyjski",
         rate: 5.04
      },
      {
         code: "CHF",
         name: "Frank szwajcarski",
         rate: 4.67
      },
   ];

   const [result, setResult] = useState("");
   const [amount, setAmount] = useState("");
   const [selectedNational, setSelectedNational] = useState(currencies[0].rate);
   const [selectedForeign, setSelectedForeign] = useState(currencies[0].rate);

   const handleNationalSelect = (currency) => {
      const selectedNational = currencies.find(({ code }) => code === currency)?.rate; //for some reason doesn`t work without "?"
      setSelectedNational(selectedNational);
   };

   const handleForeignSelect = (currency) => {
      const selectedForeign = currencies.find(({ code }) => code === currency)?.rate;
      setSelectedForeign(selectedForeign);
   };

   const calculateResult = (amount, selectedNational, selectedForeign) => {

      setResult(amount * (selectedNational / selectedForeign));
      console.log({ result });
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(amount, selectedNational, selectedForeign);
   };

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
                     <Label className="form__amount" amount={amount} setAmount={setAmount} />

                     <Select setCurrency={handleNationalSelect} />
                     <br />Wybierz walutę na którą chcesz przewalutować:
                     <Select setCurrency={handleForeignSelect} />
                  </section>
               </main>
            </Fieldset>
            <Section
               body={<Buttons amount={amount} setAmount={setAmount} calculateResult={calculateResult} />}

               equalitionResult={<span className="form__span">Kwota po przeliczeniu: {result} <strong className="result"></strong></span>}
            />
         </form>
      </div >
   );
}

export default App;
