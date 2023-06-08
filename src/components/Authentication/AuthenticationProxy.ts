//Передбачається функція реєстрації/логіну для персоналу готелю з метою входу у свій особистий кабінет - Pattern Одинак[Proxy]
//Transfers the registration/login function for hotel staff with land access to their personal account - Pattern [Proxy]
import { Employee, getWorkerById } from "../../classes/Employee.ts";
const urlJsonEmployee = "http://localhost:4000/workers";
const urlJsonServer = "http://localhost:4000";

interface Services {
  login(workerId: number, name: string): void;
  logout(): void;
}
export class ProxyService implements Services {
  private authService: AuthenticationService;
  private status: boolean;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  private async checkAccess() {
    await fetch(urlJsonServer)
      .then((response) => {
        if (response.ok) {
          this.status = true;
        } else {
          this.status = false;
        }
      })
      .catch((error) => {
        console.log("Error:", error.message);
        alert("JSON server is not running! Check errors in console");
      });
  }

  public async login(workerId: number, name: string) {
    await this.checkAccess();
    if (this.status === true) {
      await this.authService.login(workerId, name);
    } else {
      alert("No response from database)");
    }
  }

  public getStatus() {
    return this.authService.getStatus();
  }

  public logout(): void {
    this.authService.logout();
  }
}
// Authentication service
export class AuthenticationService implements Services {
  private status: boolean;

  constructor() {
    this.status = false;
  }

  public async login(workerId: number, name: string) {
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
    console.log(this.status);
  }

  public getStatus() {
    return this.status;
  }

  public logout(): void {
    alert(`Manager logged out successfully!`);
    this.status = false;
  }
}
