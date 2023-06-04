//Передбачається функція,яка визначає сімейство схожих алгоритмів оплати і розміщує кожен з них у власному класі)  - Pattern Стратегія[Strategy]

interface PaymentStrategy {
  pay(amount: number): void;
}

export class CashPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {
    alert(`Payment of ${amount} by cash.`);
  }
}

export class CreditCardPaymentStrategy implements PaymentStrategy {
  private cardNumber: string;
  private cardExpiration: string;
  private cardCVV: string;

  constructor(cardNumber: string, cardExpiration: string, cardCVV: string) {
    this.cardNumber = cardNumber;
    this.cardExpiration = cardExpiration;
    this.cardCVV = cardCVV;
  }

  pay(amount: number): void {
    alert(`Payment of ${amount} by credit card: ${this.cardNumber}.`);
  }
}

export class PayPalPaymentStrategy implements PaymentStrategy {
  private paypalUsername: string;
  private paypalPassword: string;

  constructor(paypalUsername: string, paypalPassword: string) {
    this.paypalUsername = paypalUsername;
    this.paypalPassword = paypalPassword;
  }

  pay(amount: number): void {
    alert(
      `Payment of ${amount} via PayPal with username: ${this.paypalUsername}.`
    );
  }
}
