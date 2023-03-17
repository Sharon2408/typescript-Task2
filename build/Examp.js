"use strict";
class Trainee {
    constructor(emp_name, emp_id, emp_designation, emp_salary, emp_project) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_designation = emp_designation;
        this.emp_salary = emp_salary;
        this.emp_project = emp_project;
    }
    display() {
        console.log(`Employee Name: ${this.emp_name}`);
        console.log(`Employee ID: ${this.emp_id}`);
        console.log(`Employee Designation: ${this.emp_designation}`);
        console.log(`Employee Salary: ${this.emp_salary}`);
        console.log(`Employee Project: ${this.emp_project}`);
    }
}
let arrr = new Trainee('sharon', 12, 'Developer', '20000', 'Big Project');
arrr.display();
