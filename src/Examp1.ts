class course {
    public course_ID: string;
    public course_Name: string;

    constructor(course_ID: string, course_Name: string) {
        this.course_ID = course_ID;
        this.course_Name = course_Name;
    }
    course_details = (): any => {

        console.log(`Course_ID= ${this.course_ID}`)
        console.log(`Course_Name= ${this.course_Name}`)
    }
}
class employee extends course {
    public Emp_ID: number;
    public Emp_Name: string;
    public Emp_Designation: string;

    constructor(course_ID: string, course_Name: string,Emp_ID: number, Emp_Name: string, Emp_Designation: string) {
        super(course_ID,course_Name)
        this.Emp_ID = Emp_ID;
        this.Emp_Name = Emp_Name;
        this.Emp_Designation = Emp_Designation;
    }

    employee_details = (): any => {
        console.log(`Employee_ID= ${this.Emp_ID}`)
        console.log(`Employee_Name= ${this.Emp_Name}`)
        console.log(`Employee_Designation= ${this.Emp_Designation}`)
    }
}
class admin extends employee {

    public Admin_ID:number;
    public Admin_Name:string;

    constructor(course_ID: string, course_Name: string,Emp_ID: number, Emp_Name: string, Emp_Designation: string,Admin_ID:number,Admin_Name:string){
  super(course_ID,course_Name,Emp_ID,Emp_Name,Emp_Designation)
 this.Admin_ID=Admin_ID;
  this.Admin_Name=Admin_Name;
}
 admin_details = () : any =>{
    console.log(`Admin_ID= ${this.Admin_ID}`)
    console.log(`Admin_Name= ${this.Admin_Name}`)
 }
}
let cor = new admin('1','Fullstack',1,'Sharon','Developer',1001,'Lohith');
cor.course_details();
cor.employee_details();
cor.admin_details();

