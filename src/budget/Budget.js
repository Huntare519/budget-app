import React, { Component } from "react";
import InputBudget from "./inputBudget";
import InputExpenses from "./InputExpenses";
import DisplayBudget from "../display/DisplayBudget";

const Budget = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <InputBudget />
        <InputExpenses />
      </div>
      <div className="col-sm-g">
        <DisplayBudget />
      </div>
    </div>
  );
};

export default Budget;
