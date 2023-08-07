import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //상태를 업데이트 할 때, 이전 상태에 의존할 경우 > 상태 업데이트 함수의 대체 양식을 사용해야함
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // 업데이트 함수를 호출하는 그상태에 대한 이전상태 스냅샷을 받음
    //리액트는 상태 업데이트를 예약함 즉시 처리 하지 않음
    // 내부 함수에서 제공하는 상태 스냅샷이 항상 최신 상태 스냅샷이 되도록 보장해줌
    // setUserInput((prevState) => {
    //전개 연산자에서 키 값 쌍을 복사
    //   return { ...prevState, enteredTitle: event.target.value }; //새상태 리턴

    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // 부모의 함수 > expenseData 를 인자로 전달
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  //양방향 바인딩

  // 인풋내용을 수신하는것 뿐 아니라 인풋 요소에 새 값을 넣읋수 있음 >> value 속성을 사용

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
