import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate=new Date(2023,7,19);
    const expenseTitle='Car insurance';
    const expenseAmount=294.67;
    const expenseLocation='office'
    return <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item_description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item_price'>${expenseAmount}</div>
            <div className='expense-item_location'>{expenseLocation}</div>
        </div>
    </div> 

}

export default ExpenseItem;