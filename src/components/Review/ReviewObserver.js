"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelAdministration = exports.Residents = void 0;
var Residents = /** @class */ (function () {
    function Residents(nameres) {
        this.nameres = nameres;
        this.ListAdmins = [];
    }
    Object.defineProperty(Residents.prototype, "nameResident", {
        get: function () {
            return this.nameres;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Residents.prototype, "SatisfactionLevelGet", {
        get: function () {
            return this.satisfactionLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Residents.prototype, "SatisfactionLevelSet", {
        set: function (value) {
            this.satisfactionLevel = value;
            this.Notify();
        },
        enumerable: false,
        configurable: true
    });
    Residents.prototype.Attach = function (observer) {
        this.ListAdmins.push(observer);
    };
    Residents.prototype.Detach = function (observer) {
        var index = this.ListAdmins.indexOf(observer);
        if (index !== -1) {
            this.ListAdmins.splice(index, 1);
        }
    };
    Residents.prototype.Notify = function () {
        for (var _i = 0, _a = this.ListAdmins; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.Update(this);
        }
    };
    return Residents;
}());
exports.Residents = Residents;
var HotelAdministration = /** @class */ (function () {
    function HotelAdministration(observerName) {
        if (observerName === void 0) { observerName = 'Vlad'; }
        this.administrationName = observerName;
    }
    HotelAdministration.prototype.Update = function (subject) {
        if (subject instanceof Residents) {
            var concreteSubject = subject;
            if (concreteSubject.SatisfactionLevelGet > 5) {
                console.log("\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 ".concat(this.administrationName, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u043E\u0446\u0456\u043D\u043A\u0443 \u0432\u0456\u0434 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ").concat(concreteSubject.nameResident, " \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u044F\u043A\u043E\u0441\u0442\u0456 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u043E\u0442\u0435\u043B\u044E. \u041E\u0446\u0456\u043D\u043A\u0430: ").concat(concreteSubject.SatisfactionLevelGet, ". \u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 ").concat(this.administrationName, " \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u0440\u043E\u0431\u043E\u0442\u0438 \u0433\u043E\u0442\u0435\u043B\u044E \u0456 \u0432\u0434\u044F\u0447\u043D\u0438\u0439 ").concat(concreteSubject.nameResident, " \u0437\u0430 \u0445\u043E\u0440\u043E\u0448\u0443 \u043E\u0446\u0456\u043D\u043A\u0443!"));
            }
            else {
                console.log("\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 ".concat(this.administrationName, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u043E\u0446\u0456\u043D\u043A\u0443 \u0432\u0456\u0434 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ").concat(concreteSubject.nameResident, " \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u044F\u043A\u043E\u0441\u0442\u0456 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u043E\u0442\u0435\u043B\u044E. \u041E\u0446\u0456\u043D\u043A\u0430: ").concat(concreteSubject.SatisfactionLevelGet, ". \u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 ").concat(this.administrationName, " \u043F\u0440\u043E\u0441\u0438\u0442\u044C ").concat(concreteSubject.nameResident, " \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0438 \u0432\u0438\u0431\u0430\u0447\u0435\u043D\u043D\u044F \u0456 \u043F\u043E\u043E\u0431\u0456\u0446\u044F\u0432 \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044E!"));
            }
        }
    };
    return HotelAdministration;
}());
exports.HotelAdministration = HotelAdministration;
