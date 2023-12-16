import './App.css';
import './Header';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Fieldset from './Fieldset';
import Section from './Section';
import Buttons from './Buttons';
import { calculateReasult } from './Main';


function App() {

   const calculateReasult = ({ optionInput, optionResult, input, exchangeResult, result }) => {

      switch (true) {
         case (optionInput === "EUR" && optionResult === "EUR"):
            exchangeResult = input * 1;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "EUR" && optionResult === "USD"):
            exchangeResult = input * 1.1;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "EUR" && optionResult === "PLN"):
            exchangeResult = input * 4.43;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "USD" && optionResult === "USD"):
            exchangeResult = input * 1;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "USD" && optionResult === "EUR"):
            exchangeResult = input * 0.91;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "USD" && optionResult === "PLN"):
            exchangeResult = input * 4.04;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "PLN" && optionResult === "PLN"):
            exchangeResult = input * 1;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "PLN" && optionResult === "USD"):
            exchangeResult = input * 0.25;
            result.innerText = exchangeResult;
            break;

         case (optionInput === "PLN" && optionResult === "EUR"):
            exchangeResult = input * 0.23;
            result.innerText = exchangeResult;
            break;
         default:
            console.log("brak wybranej waluty");
      }
   }

   return (
      <div>
         <form className="form">
            <Fieldset>
               <legend className="form__legend">
                  <Header>Kantor</Header>
               </legend>
               <Main calculateReasult={calculateReasult} />
            </Fieldset>
            <Section
               body={<Buttons button1="Przelicz" button2="Wyczyść formularz" calculateReasult={calculateReasult} />}

               result={<span className="form__span">Kwota po przeliczeniu:<strong className="result">0</strong></span>}
            />

         </form>
      </div >
   );
}

export default App;
