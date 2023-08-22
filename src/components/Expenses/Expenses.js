import React,{ useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'


const Expenses = (probs) =>
{
        const [filteredYear,setFilteredYear] = useState('2020');
        const filterChangeHandler = selectedYear => {
               setFilteredYear(selectedYear);
             };
    const filteredExpenses = probs.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <Card className='expenses'>
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />  
         {filteredExpenses.length ===0 && <p>No Data Is Present.</p>}
         {filteredExpenses.length ===1 && <p>Only single Expense here. Please add more...</p>} 
         {filteredExpenses.length > 0 &&
         filteredExpenses.map((expense) => (
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} 
                 />
         ))} 
        </Card>
    )

    
}

export default Expenses