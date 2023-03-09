"use strict";
class Course {
    constructor(course_id, course_name) {
        this.course_id = course_id;
        this.course_name = course_name;
    }
    CourseDetails() {
        console.log(`Course_ID : ${this.course_id}`);
        console.log(`Course_Name : ${this.course_name}`);
    }
}
class Employee extends Course {
    constructor(course_id, course_name, emp_Id, emp_Name, emp_Designation) {
        super(course_id, course_name);
        this.emp_Id = emp_Id;
        this.emp_Name = emp_Name;
        this.emp_Designation = emp_Designation;
    }
    EmployeeDetails() {
        console.log(`Emp_ID:${this.emp_Id}`);
        console.log(`Emp_Name:${this.emp_Name}`);
        console.log(`Emp_Designation:${this.emp_Designation}`);
    }
}
class Admin extends Employee {
    constructor(course_id, course_name, emp_Id, emp_Name, emp_Designation, adminId, adminName) {
        super(course_id, course_name, emp_Id, emp_Name, emp_Designation);
        this.adminId = adminId;
        this.adminName = adminName;
    }
    AdminDetails() {
        console.log(`Admin_Id:${this.adminId}`);
        console.log(`Admin_Name:${this.adminName}`);
    }
}
let a = new Admin("1410", "Full Stack Developer", "145", "Sharon.D", "Developer", 9001, "Lohith");
a.CourseDetails();
a.EmployeeDetails();
a.AdminDetails();
