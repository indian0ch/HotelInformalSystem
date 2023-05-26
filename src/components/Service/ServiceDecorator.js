"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConferenceHallDecorator = exports.FitnessDecorator = exports.FreeParkingDecorator = exports.DinnerDecorator = exports.LaunchDecorator = exports.Decorator = exports.BaseComponent = void 0;
var BaseComponent = /** @class */ (function () {
    function BaseComponent(price, amount) {
        if (price === void 0) { price = 0; }
        if (amount === void 0) { amount = 0; }
        this.price = price;
        this.amount = amount;
    }
    BaseComponent.prototype.operation = function () {
        return "BaseComponent";
    };
    BaseComponent.prototype.getAmount = function () {
        return this.amount;
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.amount = 0;
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    Decorator.prototype.getAmount = function () {
        return this.component.getAmount();
    };
    return Decorator;
}());
exports.Decorator = Decorator;
var LaunchDecorator = /** @class */ (function (_super) {
    __extends(LaunchDecorator, _super);
    function LaunchDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 30;
        return _this;
    }
    LaunchDecorator.prototype.operation = function () {
        var baseOperation = _super.prototype.operation.call(this);
        var baseAmount = this.getAmount();
        this.amount += this.price;
        return "".concat(baseOperation, ", Launch added. ").concat(baseAmount + this.price);
    };
    LaunchDecorator.prototype.getAmount = function () {
        return this.amount + _super.prototype.getAmount.call(this);
    };
    return LaunchDecorator;
}(Decorator));
exports.LaunchDecorator = LaunchDecorator;
var DinnerDecorator = /** @class */ (function (_super) {
    __extends(DinnerDecorator, _super);
    function DinnerDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 45;
        return _this;
    }
    DinnerDecorator.prototype.operation = function () {
        var baseOperation = _super.prototype.operation.call(this);
        var baseAmount = this.getAmount();
        this.amount += this.price;
        return "".concat(baseOperation, ", Dinner added. ").concat(baseAmount + this.price);
    };
    DinnerDecorator.prototype.getAmount = function () {
        return this.amount + _super.prototype.getAmount.call(this);
    };
    return DinnerDecorator;
}(Decorator));
exports.DinnerDecorator = DinnerDecorator;
var FreeParkingDecorator = /** @class */ (function (_super) {
    __extends(FreeParkingDecorator, _super);
    function FreeParkingDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 15;
        return _this;
    }
    FreeParkingDecorator.prototype.operation = function () {
        var baseOperation = _super.prototype.operation.call(this);
        var baseAmount = this.getAmount();
        this.amount += this.price;
        return "".concat(baseOperation, ", Parking added. ").concat(baseAmount + this.price);
    };
    FreeParkingDecorator.prototype.getAmount = function () {
        return this.amount + _super.prototype.getAmount.call(this);
    };
    return FreeParkingDecorator;
}(Decorator));
exports.FreeParkingDecorator = FreeParkingDecorator;
var FitnessDecorator = /** @class */ (function (_super) {
    __extends(FitnessDecorator, _super);
    function FitnessDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 60;
        return _this;
    }
    FitnessDecorator.prototype.operation = function () {
        var baseOperation = _super.prototype.operation.call(this);
        var baseAmount = this.getAmount();
        this.amount += this.price;
        return "".concat(baseOperation, ", Fitness added. ").concat(baseAmount + this.price);
    };
    FitnessDecorator.prototype.getAmount = function () {
        return this.amount + _super.prototype.getAmount.call(this);
    };
    return FitnessDecorator;
}(Decorator));
exports.FitnessDecorator = FitnessDecorator;
var ConferenceHallDecorator = /** @class */ (function (_super) {
    __extends(ConferenceHallDecorator, _super);
    function ConferenceHallDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 77;
        return _this;
    }
    ConferenceHallDecorator.prototype.operation = function () {
        var baseOperation = _super.prototype.operation.call(this);
        var baseAmount = this.getAmount();
        this.amount += this.price;
        return "".concat(baseOperation, ", Conference added. ").concat(baseAmount + this.price);
    };
    ConferenceHallDecorator.prototype.getAmount = function () {
        return this.amount + _super.prototype.getAmount.call(this);
    };
    return ConferenceHallDecorator;
}(Decorator));
exports.ConferenceHallDecorator = ConferenceHallDecorator;
