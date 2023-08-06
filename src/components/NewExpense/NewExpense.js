import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // expenseForm의 값을 저장
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // app.js props로 받은 함수에 expenseData 전달
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {/* props로 함수를 전달  */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
