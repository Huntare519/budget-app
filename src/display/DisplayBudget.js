import React from "react";
import DisplayBalance from "./DisplayBalance";
import ExpenseList from "./ExpenseList";

const DisplayBudget = () => {
  return (
    <div className="card card-body">
      <h3 className="text-center"> Budget Info </h3>
      <DisplayBalance />
      <ExpenseList />
    </div>
  );
};

export default DisplayBudget;
