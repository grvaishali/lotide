class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    let totalEmployees = 0; // 1

    for (let subordinate of this.subordinates) {
      totalEmployees = totalEmployees + this.subordinates.length;
      subordinate = this.subordinates;
      subordinate.totalEmployees;

    }
    return totalEmployees;

  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

//second level
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

// third level
const simone = new Employee("Simone", "SD", 3000.00);
const ali = new Employee("Ali", "SD", 10000);
const florida = new Employee("Florida", "MD", 10000);
const brian = new Employee("Brian", "MD", 10000);
const david = new Employee("David", "MD", 10000);
const karia = new Employee("Karia", "Assistant", 10000);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(brian);
phil.addSubordinate(david);

angela.addSubordinate(karia)

console.log(craig.boss);
console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);

console.log(ada.totalEmployees);



