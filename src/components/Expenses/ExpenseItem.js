import React from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(probs) {
    
    
    return <li>
    <Card className='expense-item'>
        <ExpenseDate date={probs.date}/>
        <ExpenseDetails amount={probs.amount}  location={probs.location}   title={probs.title} />
        

</Card></li>

}

export default ExpenseItem;