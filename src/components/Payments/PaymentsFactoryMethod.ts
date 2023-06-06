//Передбачається функція,що визначає загальний інтерфейс для створення об’єктів у суперкласі, дозволяючи підкласам змінювати тип створюваних об’єктів.)  - Pattern Фабричний метод[Factory Method]

export class PaymentFactory {
  createPayment(paymentType: string, paymentDetails: any): PaymentWays {
    switch (paymentType) {
      case "Cash":
        return new CashPaymentStrategy();
      case "MonoPay":
        const { cardNumber, cardExpiration, cardCvv } = paymentDetails;
        return new CreditCardPaymentStrategy(
          cardNumber,
          cardExpiration,
          cardCvv
        );
      case "PayPal":
        const { payPalName, payPalPass } = paymentDetails;
        return new PayPalPaymentStrategy(payPalName, payPalPass);
      default:
        throw new Error(`Invalid payment type: ${paymentType}`);
    }
  }
}

interface PaymentWays {
  pay(amount: number): void;
}

export class CashPaymentStrategy implements PaymentWays {
  pay(amount: number): void {
    alert(`Payment of ${amount} by cash.`);
  }
}

export class CreditCardPaymentStrategy implements PaymentWays {
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

export class PayPalPaymentStrategy implements PaymentWays {
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
