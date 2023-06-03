//Передбачається функція реєстрації/логіну для персоналу готелю з метою входу у свій особистий кабінет - Pattern Одинак[Singleton]
//Transfers the registration/login function for hotel staff with land access to their personal account - Pattern [Singleton]

// Worker class
export class Worker {
  private username: string;
  private password: string;
  private hours: number;
  private roomToClean: number | null;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.hours = 10;
    this.roomToClean = null;
  }

  public setRandomHours(minHours: number, maxHours: number): void {
    this.hours =
      Math.floor(Math.random() * (maxHours - minHours + 1)) + minHours;
  }

  public assignRoomToClean(roomNumber: number): void {
    this.roomToClean = roomNumber;
  }

  public cleanRoom(): void {
    if (this.roomToClean !== null) {
      console.log(
        `Worker ${this.username} is cleaning room ${this.roomToClean}.`
      );
      // Perform cleaning operations
      this.roomToClean = null; // Reset assigned room
    } else {
      console.log("No room assigned to clean.");
    }
  }

  public getHours(): number {
    return this.hours;
  }

  public getPassword(): string {
    return this.password;
  }
  public getUsername(): string {
    return this.username;
  }

  public getRoomToClean(): number | null {
    return this.roomToClean;
  }
}

// Authentication service
export class AuthenticationService {
  private static instance: AuthenticationService;
  private users: Worker[];
  private lastLogin: string;

  private constructor() {
    this.users = [];
  }

  static getInstance(): AuthenticationService {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService();
    }
    return AuthenticationService.instance;
  }

  register(username: string, password: string): void {
    const newUser = new Worker(username, password);
    this.users.push(newUser);
    console.log(`User "${username}" registered successfully!`);
  }

  login(username: string, password: string): void {
    //delete
    const newUser = new Worker(username, password);
    this.users.push(newUser);
    const user = this.users.find(
      (person) =>
        person.getUsername() === username && person.getPassword() === password
    );
    if (user) {
      console.log(`User "${username}" logged in successfully!`);
      this.lastLogin = username;
    } else {
      console.log(`Invalid credentials. Please try again!`);
    }
  }
  public getLastLogin() {
    return this.lastLogin;
  }

  public getUsers() {
    return this.users;
  }

  logout(username: string): void {
    console.log(`User "${username}" logged out successfully!`);
    this.lastLogin = null;
  }
}
