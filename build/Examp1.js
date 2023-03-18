"use strict";
class course {
    constructor(course_ID, course_Name) {
        this.course_details = () => {
            console.log(`Course_ID= ${this.course_ID}`);
            console.log(`Course_Name= ${this.course_Name}`);
        };
        this.course_ID = course_ID;
        this.course_Name = course_Name;
    }
}
class employee extends course {
    constructor(course_ID, course_Name, Emp_ID, Emp_Name, Emp_Designation) {
        super(course_ID, course_Name);
        this.employee_details = () => {
            console.log(`Employee_ID= ${this.Emp_ID}`);
            console.log(`Employee_Name= ${this.Emp_Name}`);
            console.log(`Employee_Designation= ${this.Emp_Designation}`);
        };
        this.Emp_ID = Emp_ID;
        this.Emp_Name = Emp_Name;
        this.Emp_Designation = Emp_Designation;
    }
}
class admin extends employee {
    constructor(course_ID, course_Name, Emp_ID, Emp_Name, Emp_Designation, Admin_ID, Admin_Name) {
        super(course_ID, course_Name, Emp_ID, Emp_Name, Emp_Designation);
        this.admin_details = () => {
            console.log(`Admin_ID= ${this.Admin_ID}`);
            console.log(`Admin_Name= ${this.Admin_Name}`);
        };
        this.Admin_ID = Admin_ID;
        this.Admin_Name = Admin_Name;
    }
}
let cor = new admin('1', 'Fullstack', 1, 'Sharon', 'Developer', 1001, 'Lohith');
cor.course_details();
cor.employee_details();
cor.admin_details();
