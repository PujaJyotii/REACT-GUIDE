import React,{ useState } from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(probs) {
    const [amount,setAmount]=useState(probs.amount)
    const expenseChange= () =>
    {
        setAmount('100')
        console.log('amount')
    }
    
    return <div className='expense-item'>
        <ExpenseDate date={probs.date}/>
        <ExpenseDetails amount={amount}  location={probs.location}   title={probs.title} />
        <button onClick={expenseChange}>changes expense</button>

</div>

}

export default ExpenseItem;