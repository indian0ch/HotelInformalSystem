//Управління персоналом - Pattern Команда
export interface ICommand {
  Execute(): void;
}

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
      console.log(command);
      command.Execute();
    }
    console.log(this.commands);
    this.commands = [];
  }
}

export class Workers {
  public ListWorkers: Map<string, string> = new Map<string, string>();
  //Dictionary in c#
  public AddWorker(workerName: string, position: string): void {
    console.log(`${workerName} прийнятий на роботу`);
    this.ListWorkers.set(workerName, position);
  }

  public Fire(workerName: string): void {
    console.log(`${workerName} звільнений`);
    this.ListWorkers.delete(workerName);
  }

  public CheckList(): void {
    console.log(
      "Актуальний список праціників готелю на даний момент:[ПІБ]-[Посада]:"
    );
    this.ListWorkers.forEach((position, workerName) => {
      console.log(`${workerName}-${position}`);
    });
  }
}

export class AddWorkersCommand implements ICommand {
  private workers: Workers;
  private workerName: string;
  private position: string;

  constructor(workersSet: Workers, workerName: string, position: string) {
    this.workers = workersSet;
    this.workerName = workerName;
    this.position = position;
  }

  public Execute(): void {
    this.workers.AddWorker(this.workerName, this.position);
  }
}

export class FireWorkersCommand implements ICommand {
  private workers: Workers;
  private workerName: string;

  constructor(workersSet: Workers, workerName: string) {
    this.workers = workersSet;
    this.workerName = workerName;
  }

  public Execute(): void {
    this.workers.Fire(this.workerName);
  }
}
