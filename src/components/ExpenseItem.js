import './ExpenseItem.css';

function ExpenseItem(probs) {
    
    return <div className='expense-item'>
        <div>{probs.date.toISOString()}</div>
        <div className='expense-item_description'>
            <h2>{probs.title}</h2>
            <div className='expense-item_price'>${probs.amount}</div>
            <div className='expense-item_location'>{probs.location}</div>
        </div>
    </div> 

}

export default ExpenseItem;