export interface IReservationStrategy {
  Reservation(): void;
}

export class StandartReservation implements IReservationStrategy {
  Reservation() {
    console.log("Резервація стандартного номера");
  }
}

export class MiddleReservation implements IReservationStrategy {
  Reservation() {
    console.log("Резервація середнього номера");
  }
}

export class LuxuryReservation implements IReservationStrategy {
  Reservation() {
    console.log("Резервація люксового номера");
  }
}

export class Room {
  protected surname: string;
  protected name: string;
  protected id: number;
  protected city: string;
  public Reserv: IReservationStrategy;

  constructor(
    surname: string = "Fesiuk",
    name: string = "Andrey",
    id: number = 3434,
    city: string = "Kyiv",
    res: IReservationStrategy = new StandartReservation()
  ) {
    this.surname = surname;
    this.name = name;
    this.id = id;
    this.city = city;
    this.Reserv = res;
  }

  public Reservation() {
    this.Reserv.Reservation();
  }
}
