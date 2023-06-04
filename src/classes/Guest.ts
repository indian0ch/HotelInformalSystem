export class Guest {
    private id: string;
    private name: string;
    private email: string;
    private phoneNumber: string;
  
    constructor(id: string, name: string, email: string, phoneNumber: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getPhoneNumber(): string {
      return this.phoneNumber;
    }
  
    public updateEmail(newEmail: string): void {
      this.email = newEmail;
    }
  
    public updatePhoneNumber(newPhoneNumber: string): void {
      this.phoneNumber = newPhoneNumber;
    }
  }
  
;
  