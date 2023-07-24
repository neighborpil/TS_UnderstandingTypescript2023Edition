class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string; // public by default
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) { // define and initialize properties
    // this.id = id;
    // this.name = n;
    // console.log(this.fiscalYear)
    console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name };
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

class AccountDepartment extends Department {

  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === 'Max') {
      return;
    }
    this.employees.push(employee);

  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('printReports');
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const id = new ITDepartment('d1', ['AccountingIT']);



id.addEmployee('Max');
id.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

id.describe();
// accounting.name = 'NEW NAME';
id.printEmployeeInformation();


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//
// accountingCopy.describe();

const accounting = new AccountDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();