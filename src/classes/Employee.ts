const urlJsonEmployee = "http://localhost:4000/workers";

export class Employee {
  private id: number;
  private name: string;
  private position: string;
  private salary: number;
  private messageAdmin: string;
  private status: boolean;

  constructor(
    employeeId: number,
    name: string,
    position: string,
    salary: number,
    messageAdmin: string = "",
    status: boolean = true
  ) {
    this.name = name;
    this.id = employeeId;
    this.position = position;
    this.salary = salary;
    this.messageAdmin = messageAdmin;
    this.status = status;
  }
  public getStatus(): boolean {
    return this.status;
  }

  public getName(): string {
    return this.name;
  }

  public getEmployeeId(): number {
    return this.id;
  }

  public getPosition(): string {
    return this.position;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getMessage(): string {
    return this.messageAdmin;
  }

  // public calculatePay(): number {
  //   return this.salary;
  // }

  public addWorker(newEmployee: Employee): void {
    fetch(urlJsonEmployee, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((newEmployee: Employee) => {
        window.alert("Employee added to a database!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  public fireWorker(fireEmployee: Employee): void {
    fetch(`${urlJsonEmployee}/${fireEmployee.getEmployeeId()}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fireEmployee),
    })
      .then((response) => response.json())
      .then((updatedRoom) => {
        window.alert("Employee information updated!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  public sendMessageWorker(fireEmployee: Employee): void {
    fetch(`${urlJsonEmployee}/${fireEmployee.getEmployeeId()}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fireEmployee),
    })
      .then((response) => response.json())
      .then((updatedRoom) => {
        window.alert("Employee information updated!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export class CleaningEmployee extends Employee {
  private cleaningRoomNumbers: string[] = [];

  constructor(
    name: string,
    id: number,
    position: string,
    salary: number,
    messageAdmin: string = "",
    status: boolean = true,
    cleaningArea: string[]
  ) {
    super(id, name, position, salary, messageAdmin, status);
    this.cleaningRoomNumbers = cleaningArea;
  }

  public getCleaningRoomNumbers(): string[] {
    return this.cleaningRoomNumbers;
  }

  // public quickCleaning(): void {
  //   //
  // }
}

export function getWorkerById(workerId: number) {
  return fetch(urlJsonEmployee)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(workerId);
      const employees = data.filter((employee) => employee.id == workerId);
      console.log(employees);
      return employees;
    })
    .catch((error) => {
      console.error(error);
    });
}
