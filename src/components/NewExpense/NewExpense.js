import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    // Getting the expense data from the ExpenseForm component
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * (1000 - 1) + 1).toString() // random id between 1-1000
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>  {/* creating out own component action */}
        </div>
    );
};


export default NewExpense;