import { Room, getRooms, modifyRoom } from "../../classes/Room.ts";
import { Guest } from "../../classes/Guest.ts";

///Facade
export class ReservationRoomFacade {
  protected reservationRoom: ReservationRoom;

  constructor(reservationRoom: ReservationRoom) {
    this.reservationRoom = reservationRoom;
  }

  public async doReservation() {
    console.log(this.reservationRoom.guest);
    let available = await this.reservationRoom.checkAvailability();

    if (typeof available !== "string") {
      available.checkInDate = this.reservationRoom.checkInDate;
      available.checkOutDate = this.reservationRoom.checkOutDate;
      available.guestId = this.reservationRoom.guest.id;
      //available.priceService = this.reservationRoom.servicePrice;
      this.reservationRoom.guest.postGuest(this.reservationRoom.guest);
      modifyRoom(available);
    } else {
      window.alert("No one room with such parameter available!");
    }
  }
}

export class ReservationRoom {
  public guest: Guest;
  public room: Room;
  public typeRoom: number;
  public checkInDate: string;
  public checkOutDate: string;
  public servicePrice: number;

  constructor(
    full_name: string = "Fesiuk_Andrey",
    phoneNumbe: string = "030302032",
    id: number = 32335552,
    email: string = "den@gmail.com",
    checkInDate: string = "2023-06-01",
    checkOutDate: string = "2023-06-03",
    typeRoom: number = 100,
    servicePrice: number = 20
  ) {
    this.guest = new Guest(id, full_name, email, phoneNumbe);
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
    this.typeRoom = typeRoom;
    this.servicePrice = servicePrice;
  }

  public async checkAvailability() {
    let roomArray = await getRooms().then((roomArr) => {
      return roomArr;
    });
    const availableRoomArray = roomArray.filter(
      (room) => room.guestId === null && room.pricePerNight == this.typeRoom
    );
    if (availableRoomArray.length !== 0) {
      return availableRoomArray[0];
    } else {
      return "No";
    }
  }
}
