class Trainee {
public emp_id: number;
public emp_name:string;
public emp_designation:string;
public emp_salary:string;
public emp_project:string;
constructor(emp_name:string,emp_id:number,emp_designation:string,emp_salary:string,emp_project:string){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_designation=emp_designation;
    this.emp_salary=emp_salary;
    this.emp_project=emp_project;
}
public display(): any
{
console.log(`Employee Name: ${this.emp_name}`)
console.log(`Employee ID: ${this.emp_id}`)
console.log(`Employee Designation: ${this.emp_designation}`)
console.log(`Employee Salary: ${this.emp_salary}`)
console.log(`Employee Project: ${this.emp_project}`)
}
}

let arrr = new Trainee('sharon',12,'Developer','20000','Big Project');
arrr.display();