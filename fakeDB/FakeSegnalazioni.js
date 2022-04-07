"use strict";
exports.__esModule = true;
exports.FakeSegnalazioni = void 0;
var FakeSegnalazioni = /** @class */ (function () {
    function FakeSegnalazioni(nome, descrizione, indirizzo, img) {
        this.qtSgn = 0;
        this.list = new Array();
    }
    FakeSegnalazioni.prototype.addSegnalazione = function (element) {
        element.setId(this.qtSgn);
        this.list.push(element);
        this.qtSgn++;
    };
    FakeSegnalazioni.prototype.getAllSegnalazioni = function () {
        return this.list;
    };
    return FakeSegnalazioni;
}());
exports.FakeSegnalazioni = FakeSegnalazioni;
