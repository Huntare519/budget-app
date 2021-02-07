import React, { Component } from "react";
import { BudgetConsumer } from "../store";

class ExpenseList extends Component {
  render() {
    return (
      <div class="card-body">
        <table class="table-bordered table-striped">
          <thead>
            <tr>
              <th className="pl-5 text-center pr-5">Title</th>
              <th className="pl-5 text-center pr-5">Amount</th>
            </tr>
          </thead>
          <BudgetConsumer>
            {(value) => {
              const ExpenseList =
                value.expenses.length > 0 ? (
                  value.expenses.map((expense, index) => {
                    return (
                      <tr key={index}>
                        <td> {expense.title} </td>
                        <td className="text-center"> {expense.amount} </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>No Listed Expense yet </td>
                  </tr>
                );
              return <tbody> {ExpenseList} </tbody>;
            }}
          </BudgetConsumer>
        </table>
      </div>
    );
  }
}

export default ExpenseList;
