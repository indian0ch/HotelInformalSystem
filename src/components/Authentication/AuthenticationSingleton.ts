//Передбачається функція реєстрації/логіну - Pattern Одинак[Singleton]

// User class
export class User {
  constructor(public username: string, public password: string) {}
}

// Authentication service
export class AuthenticationService {
  private static instance: AuthenticationService;
  private users: User[];

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
    const newUser = new User(username, password);
    this.users.push(newUser);
    console.log(`User "${username}" registered successfully!`);
  }

  login(username: string, password: string): void {
    const user = this.users.find(
      (person) => person.username === username && person.password === password
    );
    if (user) {
      console.log(`User "${username}" logged in successfully!`);
    } else {
      console.log(`Invalid credentials. Please try again!`);
    }
  }

  logout(username: string): void {
    console.log(`User "${username}" logged out successfully!`);
  }
}
