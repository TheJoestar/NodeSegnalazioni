export class SegnalazioneModel {

    private nome:String;
    private descrizione:String;
    private indirizzo: String;
    private img: String;
    private segnalazioni: SegnalazioneModel[];
    private i:number;

    public constructor(nome:String, descrizione:String, indirizzo:String, img:String) {
        this.nome;
        this.descrizione;
        this.indirizzo;
        this.img;   
        
    }
    public getSegnalazioni():SegnalazioneModel[]{
        return this.segnalazioni;
    }

    public addSegnalazione(seg:SegnalazioneModel){
        var i=0;
        this.segnalazioni[i]=seg;
        i++;
    }

   

}


