"use strict";
//Передбачається функція,яка виставляє ітоговий рахунок за проживання/послуги у готелі - Pattern Компонувальник[Composite]
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolPayment = exports.Composite = void 0;
var Composite = /** @class */ (function () {
    function Composite(name) {
        if (name === void 0) { name = "Andriy"; }
        this.components = [];
        this.amountService = 0;
        this.name = name;
    }
    Composite.prototype.AddComponent = function (invoice) {
        this.components.push(invoice);
        this.amountService += invoice.getAmount;
    };
    Composite.prototype.addPayment = function (amount) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var invoice = _a[_i];
            console.log(amount);
            console.log(invoice.getAmount);
            if (invoice.getAmount < amount) {
                amount -= invoice.getAmount;
                invoice.setAmount = 0;
            }
            else if (amount === 0) {
                return;
            }
            else {
                invoice.setAmount = invoice.getAmount - amount;
                amount = 0;
            }
            console.log(amount);
            console.log(invoice.getAmount);
        }
    };
    Composite.prototype.issueRefund = function (amount) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var invoice = _a[_i];
            if (amount !== 0) {
                invoice.setAmount = invoice.getAmount + amount;
            }
            amount = 0;
        }
    };
    Object.defineProperty(Composite.prototype, "setAmount", {
        set: function (amount) {
            this.amountService = amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Composite.prototype, "getAmount", {
        get: function () {
            var sum = 0;
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var invoice = _a[_i];
                sum += invoice.getAmount;
            }
            return sum;
        },
        enumerable: false,
        configurable: true
    });
    Composite.prototype.print = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var invoice = _a[_i];
            invoice.print();
        }
    };
    return Composite;
}());
exports.Composite = Composite;
var poolPayment = /** @class */ (function () {
    function poolPayment(amountDue, typeService) {
        if (amountDue === void 0) { amountDue = 300; }
        if (typeService === void 0) { typeService = 'Bar'; }
        this.amountService = amountDue;
        this.typeService = typeService;
    }
    Object.defineProperty(poolPayment.prototype, "setAmount", {
        set: function (amount) {
            this.amountService = amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(poolPayment.prototype, "getAmount", {
        get: function () {
            return this.amountService;
        },
        enumerable: false,
        configurable: true
    });
    poolPayment.prototype.addPayment = function (amount) {
        this.amountService -= amount;
        // console.log(
        //   `Payment of ${amount}$ applied to room with number ${this.numberroom}. Amount due: ${this._amountDue}$`
        // );
    };
    poolPayment.prototype.issueRefund = function (amount) {
        this.amountService += amount;
        if (this.amountService < 0) {
            this.amountService = 0;
        }
    };
    poolPayment.prototype.print = function () {
        console.log('Рахунок за відвідування басейну закріплений за номером вашої кімнати становить');
    };
    return poolPayment;
}());
exports.poolPayment = poolPayment;
