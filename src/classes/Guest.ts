export const urlJsonGuest = "http://localhost:4000/guests";
export class Guest {
  private id: number;
  private name: string;
  private email: string;
  private phoneNumber: string;
  private priceService: number;

  constructor(
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    priceService: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.priceService = priceService;
  }

  public getId(): number {
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
  public postGuest(newGuest: Guest) {
    fetch("http://localhost:4000/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGuest),
    })
      .then((response) => response.json())
      .then((newGuest: Guest) => {
        window.alert("Guest added to database!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export function getGuests() {
  return fetch(urlJsonGuest)
    .then((response) => response.json())
    .then((data) => {
      const users = data; // Assuming the response directly contains the room data
      //console.log(rooms);
      return users;
    })
    .catch((error) => {
      console.error(error);
    });
}
export function modifyGuest(id: number, newPriceService:number) {
  fetch(`${urlJsonGuest}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceService: newPriceService }),
  })
    .then((response) => response.json())
    .then((updatedGuest) => {
      window.alert("Payments success!");
    })
    .catch((error) => {
      console.error(error);
    });
}