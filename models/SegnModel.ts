export class SegnalazioneModel {

    private nome:String;
    private descrizione:String;
    private indirizzo: String;
    private img: String;
    private i:number;

    public constructor(nome:String, descrizione:String, indirizzo:String, img:String) {
        this.nome;
        this.descrizione;
        this.indirizzo;
        this.img;   
        
    }

    //TODO creare metodi get

    public getSegnalazioni():SegnalazioneModel{
        return this;
    }
}


