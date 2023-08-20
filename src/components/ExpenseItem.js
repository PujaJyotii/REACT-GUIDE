import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(probs) {
    const DeleteItems = () =>
    {
        console.log('Delete')
    }
    
    return <div className='expense-item'>
        <ExpenseDate date={probs.date}/>
        <ExpenseDetails amount={probs.amount}  location={probs.location}   title={probs.title} />
        <button onClick={DeleteItems}>Delete Expenses</button>

</div>

}

export default ExpenseItem;