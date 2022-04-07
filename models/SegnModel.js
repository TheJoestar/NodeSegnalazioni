"use strict";
exports.__esModule = true;
exports.SegnalazioneModel = void 0;
var ImgSgn = /** @class */ (function () {
    function ImgSgn(fileName, pathServer, typeFile) {
        this.fileName = fileName;
        this.pathServer = pathServer;
        this.typeFile = typeFile;
    }
    ImgSgn.prototype.getFileName = function () {
        return this.fileName;
    };
    ImgSgn.prototype.getPathServer = function () {
        return this.pathServer;
    };
    ImgSgn.prototype.getTypeFile = function () {
        return this.typeFile;
    };
    return ImgSgn;
}());
var SegnalazioneModel = /** @class */ (function () {
    function SegnalazioneModel(nome, descrizione, indirizzo, img) {
        this.nome;
        this.descrizione;
        this.indirizzo;
        this.img;
    }
    //TODO creare metodi get
    SegnalazioneModel.prototype.getSegnalazioni = function () {
        if (this.id == undefined)
            throw new Error("segnalazione non valida, settare l'id");
        return this;
    };
    SegnalazioneModel.prototype.setId = function (id) {
        this.id = id;
    };
    SegnalazioneModel.prototype.setImg = function (fileName, pathServer, typeFile) {
        this.img = new ImgSgn(fileName, pathServer, typeFile);
    };
    return SegnalazioneModel;
}());
exports.SegnalazioneModel = SegnalazioneModel;
