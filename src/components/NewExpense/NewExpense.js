import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandler = () => {
    setIsVisible(!isVisible);
  };
  const onSaveExpenseDataHandler = (eneterdExpenseData) => {
    const expenseData = {
      ...eneterdExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setIsVisible(false);
  };
  const stopEditingHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="new-expense">
      {!isVisible && <button onClick={onClickHandler}>Add new expense</button>}

      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {/* {isVisible && <button onClick={onClickHandler}>Cancel</button>} */}
    </div>
  );
};
export default NewExpense;
