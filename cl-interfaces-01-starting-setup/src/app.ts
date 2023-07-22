class Department {
  // private readonly id: string;
  // private name: string; // public by default
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) { // define and initialize properties
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'asdf'; // error because id is readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('printEmployeeInformation');
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // call the constructor of the base class
    this.admins = admins;
  }
}

const accounting = new ITDepartment('d1', ['AccountingIT']);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

accounting.describe();
// accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//
// accountingCopy.describe();
