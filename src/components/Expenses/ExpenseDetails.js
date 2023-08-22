function ExpenseDetails(probs)
{
return (
<div className='expense-item__description'>
<h2>{probs.title}</h2>
<div className='expense-item__price'>${probs.amount}</div>
<div className='expense-item__location'>{probs.location}</div>
</div>);
}
export default ExpenseDetails;