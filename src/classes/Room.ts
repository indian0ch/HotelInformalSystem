export class Room {
    private id: string;
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
  
//   // Приклад використання
//   const room = new Room("101", 101, 100);
  
//   console.log("ID кімнати:", room.getId());
//   console.log("Номер кімнати:", room.getRoomNumber());
//   console.log("Ціна за ніч:", room.getPricePerNight());
//   console.log("Статус прибирання кімнати:", room.isClean());
  
//   room.checkIn("1", new Date("2023-06-10"));
//   console.log("Дата заселення:", room.getCheckInDate());
//   console.log("ID гостя:", room.getGuestId());
//   console.log("Статус прибирання кімнати:", room.isClean());
  
//   room.checkOut();
//   console.log("Дата виїзду:", room.getCheckOutDate());
//   console.log("Статус прибирання кімнати:", room.isClean());
  
//   room.cleanRoom();
//   console.log("Статус прибирання кімнати:", room.isClean());
  