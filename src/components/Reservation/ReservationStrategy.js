"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.LuxuryReservation = exports.MiddleReservation = exports.StandartReservation = void 0;
var StandartReservation = /** @class */ (function () {
    function StandartReservation() {
    }
    StandartReservation.prototype.Reservation = function () {
        console.log("Резервація стандартного номера");
    };
    return StandartReservation;
}());
exports.StandartReservation = StandartReservation;
var MiddleReservation = /** @class */ (function () {
    function MiddleReservation() {
    }
    MiddleReservation.prototype.Reservation = function () {
        console.log("Резервація середнього номера");
    };
    return MiddleReservation;
}());
exports.MiddleReservation = MiddleReservation;
var LuxuryReservation = /** @class */ (function () {
    function LuxuryReservation() {
    }
    LuxuryReservation.prototype.Reservation = function () {
        console.log("Резервація люксового номера");
    };
    return LuxuryReservation;
}());
exports.LuxuryReservation = LuxuryReservation;
var Room = /** @class */ (function () {
    function Room(surname, name, id, city, res) {
        if (surname === void 0) { surname = "Fesiuk"; }
        if (name === void 0) { name = "Andrey"; }
        if (id === void 0) { id = 3434; }
        if (city === void 0) { city = "Kyiv"; }
        if (res === void 0) { res = new StandartReservation(); }
        this.surname = surname;
        this.name = name;
        this.id = id;
        this.city = city;
        this.Reserv = res;
    }
    Room.prototype.Reservation = function () {
        this.Reserv.Reservation();
    };
    return Room;
}());
exports.Room = Room;
