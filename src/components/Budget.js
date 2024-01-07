import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (event.target.value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            return;
        } else if (event.target.value > 20000) {
            alert('The value cannot exceed £20,000');
            return;
        } else {
            setNewBudget(event.target.value);

            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
