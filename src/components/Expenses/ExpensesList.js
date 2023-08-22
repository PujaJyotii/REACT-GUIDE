import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

function ExpensesList(probs)
{
    if(probs.items.length ===0 )
    {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }
    
    return (
        <ul className='expenses-list'>
    {probs.items.map((expense) => (
           <ExpenseItem 
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date} 
            />
    ))}
    </ul>
    )
}

export default ExpensesList;