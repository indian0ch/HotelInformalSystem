import { Employee, getWorkerById } from "../../classes/Employee.ts";
const urlJsonEmployee = "http://localhost:4000/workers";

//Управління персоналом - Pattern Команда
export interface ICommand {
  Execute(): void;
}
//Invoker
export class Manager {
  //'Invoker'
  private commands: ICommand[] = [];
  private name: string;

  constructor(name: string = "Andriy") {
    this.name = name;
  }

  public SetCommand(com: ICommand): void {
    this.commands.push(com);
  }

  public ExecuteCommands(): void {
    for (const command of this.commands) {
      command.Execute();
    }
    this.commands = [];
  }
}

export class AddWorkersCommand implements ICommand {
  private worker: Employee;

  constructor(worker: Employee) {
    this.worker = worker;
  }

  public Execute(): void {
    console.log(true);
    this.worker.addWorker(this.worker);
  }
}

export class FireWorkersCommand implements ICommand {
  private worker: Employee;
  private workerId: number;

  constructor(workerId: number) {
    this.workerId = workerId;
  }
  public async Execute() {
    console.log("1");
    let workerObject = await getWorkerById(this.workerId).then((employe) => {
      return employe;
    });
    if (workerObject.length !== 0) {
      console.log(workerObject[0].name);
      this.worker = new Employee(
        workerObject[0].id,
        workerObject[0].name,
        workerObject[0].position,
        workerObject[0].salary,
        "",
        false
      );
      this.worker.fireWorker(this.worker);
    }
  }
}
export class SendMessageWorkersCommand implements ICommand {
  private worker: Employee;
  private workerId: number;
  private message: string;

  constructor(workerId: number, message: string) {
    this.workerId = workerId;
    this.message = message;
  }
  public async Execute() {
    console.log("1");
    let workerObject = await getWorkerById(this.workerId).then((employe) => {
      return employe;
    });
    if (workerObject.length !== 0) {
      console.log(workerObject[0].name);
      this.worker = new Employee(
        workerObject[0].id,
        workerObject[0].name,
        workerObject[0].position,
        workerObject[0].salary,
        this.message,
        false
      );
      this.worker.fireWorker(this.worker);
    }
  }
}
