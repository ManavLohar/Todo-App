import React from "react";
import "./EmployeeDetails.css";
import { productData } from "./EmployeeData/data"

const EmployeeDetails = () => {
  return (
    <div className="container">
      <div className="main_box">
        <h1>Employee Details</h1>
        <div className="employee_box">
          {productData &&
            productData.map((employee, index) => {
              return (
                <div key={index} className="employee_card">
                  <img src={employeeImage} alt="" />
                  <div className="employee_details">
                    <div className="employee_detail">
                      <label>Name: </label>
                      <p>{employee.fullName}</p>
                    </div>
                    <div className="employee_detail">
                      <label>Age: </label>
                      <p>{employee.age}</p>
                    </div>
                    <div className="employee_detail">
                      <label>Designation: </label>
                      <p>{employee.designation}</p>
                    </div>
                    <div className="employee_detail">
                      <label>Salary: </label>
                      <p>{employee.salary}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
