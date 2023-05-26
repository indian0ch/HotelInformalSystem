// Pattern Декоратор[Decorator]
// Функціонал вибору вибору рівня сервісу у спа центрі представлений у цьому файлі.
// У нас є базовий сервіс,який пропонує мінімальний мінімум і додаткові сервіси за додаткову плату.
// The functionality of choosing the level of service in the spa center is presented in this file.
// We have a basic service that offers a minimum minimum and additional services for an additional fee.
interface Component {
    operation(): string;
    getAmount(): number;
  }
  
  export class BaseComponent implements Component {
    public price: number;
    public amount: number;
  
    constructor(price: number = 50, amount: number = 50) {
      this.price = price;
      this.amount = amount;
    }
  
    public operation(): string {
      return "BaseComponent";
    }
  
    public getAmount(): number {
      return this.amount;
    }
  }
  
  export class Decorator implements Component {
    public component: Component;
    public amount: number = 0;
  
    constructor(component: Component) {
      this.component = component;
    }
  
    public operation(): string {
      return this.component.operation();
    }
  
    public getAmount(): number {
      return this.component.getAmount();
    }
  }
  
  export class LaunchDecorator extends Decorator {
    public price: number = 20;
  
    public operation(): string {
      const baseOperation = super.operation();
      const baseAmount = this.getAmount();

      this.amount += this.price;
      return `${baseOperation}, Launch added. ${baseAmount+this.price}`;
    }
  
    public getAmount(): number {
      return this.amount + super.getAmount();
    }
  }
  
  export class DinnerDecorator extends Decorator {
    public price: number = 20;
  
    public operation(): string {
      const baseOperation = super.operation();
      const baseAmount = this.getAmount();
      this.amount += this.price;
      return `${baseOperation}, Dinner added. ${baseAmount + this.price}`;
    }
  
    public getAmount(): number {
      return this.amount + super.getAmount();
    }
  }
  
  export class FreeParkingDecorator extends Decorator {
    public price: number = 20;
  
    public operation(): string {
        const baseOperation = super.operation();
        const baseAmount = this.getAmount();
        this.amount += this.price;
        return `${baseOperation}, Parking added. ${baseAmount + this.price}`;
      }
    
      public getAmount(): number {
        return this.amount + super.getAmount();
      }
  }
  
  export class FitnessDecorator extends Decorator {
    public price: number = 20;
  
    public operation(): string {
        const baseOperation = super.operation();
        const baseAmount = this.getAmount();
        this.amount += this.price;
        return `${baseOperation}, Fitness added. ${baseAmount + this.price}`;
      }
    
      public getAmount(): number {
        return this.amount + super.getAmount();
      }
  }
  
  export class ConferenceHallDecorator extends Decorator {
    public price: number = 20;
  
    public operation(): string {
        const baseOperation = super.operation();
        const baseAmount = this.getAmount();
        this.amount += this.price;
        return `${baseOperation}, Conference added. ${baseAmount + this.price}`;
      }
    
      public getAmount(): number {
        return this.amount + super.getAmount();
      }
  }
  
