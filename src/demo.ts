
class Course {
    public course_id: string;
    public course_name: string;

    constructor(course_id: string, course_name: string) {
        this.course_id = course_id;
        this.course_name = course_name;
    }
    public CourseDetails(): void {
        console.log(`Course_ID : ${this.course_id}`);
        console.log(`Course_Name : ${this.course_name}`);
    }
}
class Employee extends Course {
    public emp_Id: string;
    public emp_Name: string;
    public emp_Designation: string;

    constructor(course_id: string, course_name: string, emp_Id: string, emp_Name: string, emp_Designation: string) {
        super(course_id, course_name);
        this.emp_Id = emp_Id;
        this.emp_Name = emp_Name;
        this.emp_Designation = emp_Designation;
    }
    public EmployeeDetails(): void {
        console.log(`Emp_ID:${this.emp_Id}`);
        console.log(`Emp_Name:${this.emp_Name}`);
        console.log(`Emp_Designation:${this.emp_Designation}`);
    }
}
class Admin extends Employee {
    public adminId: number;
    public adminName: string;

    constructor(course_id: string, course_name: string, emp_Id: string, emp_Name: string, emp_Designation: string,adminId: number, adminName: string) {
        super(course_id, course_name, emp_Id, emp_Name, emp_Designation);
        this.adminId = adminId;
        this.adminName = adminName;

    }
    public AdminDetails(): void {
        console.log(`Admin_Id:${this.adminId}`);
        console.log(`Admin_Name:${this.adminName}`)

    }
}
let a = new Admin("1410", "Full Stack Developer", "145", "Sharon.D", "Developer", 9001 , "Lohith")
a.CourseDetails();
a.EmployeeDetails();
a.AdminDetails();