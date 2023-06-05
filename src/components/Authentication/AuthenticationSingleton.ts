//Передбачається функція реєстрації/логіну для персоналу готелю з метою входу у свій особистий кабінет - Pattern Одинак[Singleton]
//Transfers the registration/login function for hotel staff with land access to their personal account - Pattern [Singleton]
import { Employee, getWorkerById } from "../../classes/Employee.ts";
const urlJsonEmployee = "http://localhost:4000/workers";

// Authentication service
export class AuthenticationService {
  private static instance: AuthenticationService;
  private status: boolean;

  constructor() {
    this.status = false;
  }

  public static getInstance(): AuthenticationService {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService();
    }
    return AuthenticationService.instance;
  }

  public async login(workerId: number, name: string) {
    console.log("hello");
    let workerObject = await getWorkerById(workerId).then((employee) => {
      return employee;
    });
    console.log(workerObject);
    if (workerObject.length !== 0) {
      if (
        workerObject[0].status === true &&
        workerObject[0].position === "manager"
      ) {
        alert(`Manager "${name}" logged in successfully!`);
        this.status = true;
      } else {
        alert(`Manager with such username do not found!`);
      }
    } else {
      alert(`Manager with such username do not found!`);
    }
  }

  public getStatus() {
    return this.status;
  }

  logout(): void {
    alert(`Manager logged out successfully!`);
    this.status = false;
  }
}
