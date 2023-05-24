"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireWorkersCommand = exports.AddWorkersCommand = exports.Workers = exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager(name) {
        if (name === void 0) { name = "Andriy"; }
        //'Invoker'
        this.commands = [];
        this.name = name;
    }
    Manager.prototype.SetCommand = function (com) {
        this.commands.push(com);
    };
    Manager.prototype.ExecuteCommands = function () {
        for (var _i = 0, _a = this.commands; _i < _a.length; _i++) {
            var command = _a[_i];
            console.log(command);
            command.Execute();
        }
        console.log(this.commands);
        this.commands = [];
    };
    return Manager;
}());
exports.Manager = Manager;
var Workers = /** @class */ (function () {
    function Workers() {
        this.ListWorkers = new Map();
    }
    //Dictionary in c#
    Workers.prototype.AddWorker = function (workerName, position) {
        console.log("".concat(workerName, " \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0438\u0439 \u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0443"));
        this.ListWorkers.set(workerName, position);
    };
    Workers.prototype.Fire = function (workerName) {
        console.log("".concat(workerName, " \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439"));
        this.ListWorkers.delete(workerName);
    };
    Workers.prototype.CheckList = function () {
        console.log("Актуальний список праціників готелю на даний момент:[ПІБ]-[Посада]:");
        this.ListWorkers.forEach(function (position, workerName) {
            console.log("".concat(workerName, "-").concat(position));
        });
    };
    return Workers;
}());
exports.Workers = Workers;
var AddWorkersCommand = /** @class */ (function () {
    function AddWorkersCommand(workersSet, workerName, position) {
        this.workers = workersSet;
        this.workerName = workerName;
        this.position = position;
    }
    AddWorkersCommand.prototype.Execute = function () {
        this.workers.AddWorker(this.workerName, this.position);
    };
    return AddWorkersCommand;
}());
exports.AddWorkersCommand = AddWorkersCommand;
var FireWorkersCommand = /** @class */ (function () {
    function FireWorkersCommand(workersSet, workerName) {
        this.workers = workersSet;
        this.workerName = workerName;
    }
    FireWorkersCommand.prototype.Execute = function () {
        this.workers.Fire(this.workerName);
    };
    return FireWorkersCommand;
}());
exports.FireWorkersCommand = FireWorkersCommand;
