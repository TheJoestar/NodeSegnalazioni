"use strict";
exports.__esModule = true;
exports.SegnalazioneModel = void 0;
var SegnalazioneModel = /** @class */ (function () {
    function SegnalazioneModel(nome, descrizione, indirizzo, img) {
        this.nome;
        this.descrizione;
        this.indirizzo;
        this.img;
    }
    SegnalazioneModel.prototype.getSegnalazioni = function () {
        return this.segnalazioni;
    };
    SegnalazioneModel.prototype.addSegnalazione = function (seg) {
        var i = 0;
        this.segnalazioni[i] = seg;
        i++;
    };
    return SegnalazioneModel;
}());
exports.SegnalazioneModel = SegnalazioneModel;
