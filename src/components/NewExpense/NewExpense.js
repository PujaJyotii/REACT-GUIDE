import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(probs)
{
    const saveExpenseDataHandler= (enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        probs.onAddExpenses(expenseData)
    }
return (
    <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
)
}
export default NewExpense