import React, { useState } from 'react';
import Form from './Form';

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
         <Form
            onFormSubmit={onFormSubmit}
            amount={amount}
            setAmount={setAmount}
            handleNationalSelect={handleNationalSelect}
            handleForeignSelect={handleForeignSelect}
            calculateResult={calculateResult}
            result={result}
         />
      </div >

   );
}

export default App;
