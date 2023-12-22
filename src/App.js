import './App.css';
import './Header';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Fieldset from './Fieldset';
import Section from './Section';
import Buttons from './Buttons';


function App() {
   const [result, setResult] = useState(1);
   const [input, setInput] = useState("");

   const calculateReasult = (input) => {
      setResult(result => result = input * 4.43);
      console.log("przycisk dziala");
   };

   const inputResult = (input) => {
      setInput(input.target.value);
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <div>
         <form className="form" onSubmit={onFormSubmit}>
            <Fieldset>
               <legend className="form__legend">
                  <Header />
               </legend>
               <Main inputResult={inputResult} />
            </Fieldset>
            <Section
               body={<Buttons button1="Przelicz" button2="Wyczyść formularz" calculateResult={calculateReasult} />}

               result={<span className="form__span">Kwota po przeliczeniu: {result} <strong className="result"></strong></span>}
            />

            <p>Kwota po przeliczeniu: {result}</p>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => calculateReasult(input)}>Przelicz</button>
         </form>
      </div >
   );
}

export default App;
