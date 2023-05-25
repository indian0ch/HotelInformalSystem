//Передбачається функція,яка виставляє ітоговий рахунок за проживання/послуги у готелі - Pattern Компонувальник[Composite]

interface Component {
  addPayment(amount: number): void;
  issueRefund(amount: number): void;
  get getAmount(): number;
  set setAmount(amount: number);
  print(): void;
}
export class Composite implements Component {
  private components: Component[] = [];
  private name: string;
  private amountService: number = 0;

  constructor(name: string = "Andriy") {
    this.name = name;
  }
  public AddComponent(invoice: Component): void {
    this.components.push(invoice);
    this.amountService += invoice.getAmount;
  }
  public addPayment(amount: number): void {
    for (const invoice of this.components) {
      console.log(amount);
      console.log(invoice.getAmount);
      if (invoice.getAmount < amount) {
        amount -= invoice.getAmount;
        invoice.setAmount = 0;
      } else if (amount === 0) {
        return;
      } else {
        invoice.setAmount = invoice.getAmount - amount;
        amount = 0;
      }
      console.log(amount);
      console.log(invoice.getAmount);
    }
  }

  public issueRefund(amount: number): void {
    for (const invoice of this.components) {
      if (amount !== 0) {
        invoice.setAmount = invoice.getAmount + amount;
      }
      amount = 0;
    }
  }
  public set setAmount(amount: number) {
    this.amountService = amount;
  }
  public get getAmount(): number {
    let sum = 0;
    for (const invoice of this.components) {
      sum += invoice.getAmount;
    }
    return sum;
  }
  public print(): void {
    for (const invoice of this.components) {
      invoice.print();
    }
  }
}

export class poolPayment implements Component {
  public amountService: number;
    public typeService:string;

  constructor(amountDue: number = 300,typeService:string='Bar') {
    this.amountService = amountDue;
    this.typeService=typeService;
  }
  public set setAmount(amount: number) {
    this.amountService = amount;
  }
  public get getAmount(): number {
    return this.amountService;
  }
  public addPayment(amount: number): void {
    this.amountService -= amount;
    // console.log(
    //   `Payment of ${amount}$ applied to room with number ${this.numberroom}. Amount due: ${this._amountDue}$`
    // );
  }
  public issueRefund(amount: number): void {
    this.amountService += amount;
    if (this.amountService < 0) {
      this.amountService = 0;
    }
  }
  public print(): void {
    console.log('Рахунок за відвідування басейну закріплений за номером вашої кімнати становить');
  }
}
