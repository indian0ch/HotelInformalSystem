//Передбачається функція,яка визначає сімейство схожих алгоритмів оплати і розміщує кожен з них у власному класі)  - Pattern Стратегія[Strategy]

export class Laundry {
  private laundryStrategy: LaundryStrategy;

  constructor(strategy: LaundryStrategy) {
    this.laundryStrategy = strategy;
  }

  public setStrategy(strategy: LaundryStrategy): void {
    this.laundryStrategy = strategy;
  }

  public executeLaundry(): void {
    this.laundryStrategy.wash();
  }
}

interface LaundryStrategy {
  wash(): void;
}

export class StandardLaundryStrategy implements LaundryStrategy {
  public wash(): void {
    alert(`Washing machine ready, click on red button to start washing)`);
  }
}

export class SyntheticsLaundryStrategy implements LaundryStrategy {
  private temperature: number;
  private weightClothes: number;
  private typeSynthetics: string;
  private washingTime: number;

  constructor(weightClothes: number, typeSynthetics: string) {
    this.weightClothes = weightClothes;
    this.typeSynthetics = typeSynthetics;
  }

  private checkTime(): void {
    switch (this.typeSynthetics) {
      case "Rayon":
        this.temperature = 30;
        this.washingTime = 30;
      case "Acrilic":
        this.temperature = 60;
        this.washingTime = 30;
      case "Polyester":
        this.temperature = 80;
        this.washingTime = 30;
    }
  }
  public wash(): void {
    if (this.weightClothes < 30) {
      this.checkTime();
      alert(
        `Washing machine ready, click on red button to start washing)Temperature: ${this.temperature}c. Expected washing time ${this.washingTime} minutes`
      );
    } else {
      alert("Overweight!");
    }
  }
}

export class CottonLaundryStrategy implements LaundryStrategy {
  private temperature: number;
  private weightClothes: number;
  private percentageCotton: number;
  private washingTime: number;
  private condition: string;

  constructor(
    percentageCotton: number,
    weightClothes: number,
    temperature: number
  ) {
    this.percentageCotton = percentageCotton;
    this.weightClothes = weightClothes;
  }

  private checkCondition(): void {
    if (this.percentageCotton > 80 && this.temperature > 45) {
      this.washingTime = 69;
      this.condition = "Cotton will perfectly wash)";
    } else if (this.percentageCotton < 80 && this.temperature < 45) {
      this.washingTime = 20;
      this.condition = "Cotton will damaged)";
    } else {
      this.washingTime = 60;
      this.condition = "Future condition underfined";
    }
  }
  public wash(): void {
    if (this.weightClothes < 30) {
      this.checkCondition();
      alert(
        `Washing machine ready, click on red button to start washing)Expected condition:${this.condition}. Expected washing time ${this.washingTime} minutes`
      );
    } else {
      alert("Overweight!");
    }
  }
}
