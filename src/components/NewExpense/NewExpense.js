import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  /**
   *
   * 1. 지출데이터를 newExpense.js로 전달
   */

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //새 객체를 만들어줌 >> submitHandler에서 생성한 객체가 들어옴
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
      {/* saveExpenseDataHandler 함수는 포인터로 지정 전달  */}
      {/* 함수를 가르키는 포인터가 expenseForm에 전달  */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
