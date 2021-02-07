import React from "react";
import { BudgetConsumer } from "../store";

const DisplayBalance = () => {
  return (
    <BudgetConsumer>
      {(value) => {
        const totalExpense =
          value.expenses.length > 0
            ? value.expenses.reduce((acc, curr) => {
                acc += parseInt(curr.amount);
                return acc;
              }, 0)
            : 0;

        return (
          <div className="row">
            <div classname="col-lg-4">
              <div className="card">
                <div className="card-header">Budget</div>
                <div className="card-body pb-0"></div>
                <h5 className="text-center card-title">{value.budget}</h5>
              </div>
            </div>

            <div classname="col-lg-4">
              <div className="card ml-3 mr-3 ">
                <div className="card-header">Expenses</div>
                <div className="card-body pb-0"></div>
                <h5 className="text-center card-title ">{totalExpense}</h5>
              </div>
            </div>

            <div classname="col-lg-4">
              <div className="card">
                <div className="card-header">Balance</div>
                <div className="card-body pb-0"></div>
                <h5 className="text-center card-title">
                  {value.budget - totalExpense}
                </h5>
              </div>
            </div>
          </div>
        );
      }}
    </BudgetConsumer>
  );
};

export default DisplayBalance;
