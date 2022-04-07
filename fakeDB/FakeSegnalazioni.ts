import {SegnalazioneModel} from "../models/SegnModel";

export class FakeSegnalazioni{
    private list: SegnalazioneModel[];
    private qtSgn = 0;

    public constructor(nome:String, descrizione:String, indirizzo:String, img:String) {
        this.list = new Array();
    }

    addSegnalazione(element:SegnalazioneModel){
        element.setId(this.qtSgn);
        this.list.push(element);
        this.qtSgn++;
    }

    public getAllSegnalazioni():SegnalazioneModel[]{
        return this.list;
    }
}