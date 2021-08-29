import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummy_data = [
  {
    id: 'e1',
    title: 'Toaletní papír',
    amount: 99.90,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'Televize', 
    amount: 30000, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Auto pojištění',
    amount: 2693,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Stůl',
    amount: 6830,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummy_data);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
