const urlJsonRoom = "http://localhost:4000/rooms";
export class Room {
  public id: string;
  private roomNumber: number;
  private checkInDate: Date | null;
  private checkOutDate: Date | null;
  private guestId: string | null;
  private isCleaned: boolean;
  private pricePerNight: number;

  constructor(id: string, roomNumber: number, pricePerNight: number) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.checkInDate = null;
    this.checkOutDate = null;
    this.guestId = null;
    this.isCleaned = true;
    this.pricePerNight = pricePerNight;
  }

  public getId(): string {
    return this.id;
  }

  public getRoomNumber(): number {
    return this.roomNumber;
  }

  public getCheckInDate(): Date | null {
    return this.checkInDate;
  }

  public getCheckOutDate(): Date | null {
    return this.checkOutDate;
  }

  public getGuestId(): string | null {
    return this.guestId;
  }

  public isClean(): boolean {
    return this.isCleaned;
  }

  public getPricePerNight(): number {
    return this.pricePerNight;
  }

  public checkIn(guestId: string, checkInDate: Date): void {
    this.guestId = guestId;
    this.checkInDate = checkInDate;
    this.isCleaned = false;
  }

  public checkOut(): void {
    this.checkOutDate = new Date();
    this.isCleaned = true;
  }

  public cleanRoom(): void {
    this.isCleaned = true;
  }
}
export function getRooms() {
  return fetch(urlJsonRoom)
    .then((response) => response.json())
    .then((data) => {
      const rooms = data; // Assuming the response directly contains the room data
      //console.log(rooms);
      return rooms;
    })
    .catch((error) => {
      console.error(error);
    });
}
export function modifyRoom(modifiedRoom: Room) {
  console.log(modifiedRoom);
  fetch(`${urlJsonRoom}/${modifiedRoom.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedRoom),
  })
    .then((response) => response.json())
    .then((updatedRoom) => {
      window.alert("Room information updated!");
    })
    .catch((error) => {
      console.error(error);
    });
}
