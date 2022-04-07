class ImgSgn{
    private fileName:String
    private pathServer: String
    private typeFile: String

    public constructor( fileName:String, pathServer: String, typeFile: String){
        this.fileName = fileName;
        this.pathServer =pathServer;
        this.typeFile =typeFile;
    }

    protected getFileName(){
        return this.fileName;
    }

    protected getPathServer(){
        return this.pathServer;
    }

    protected getTypeFile(){
        return this.typeFile;
    }
}

export class SegnalazioneModel {
    private id: Number;
    private nome:String;
    private descrizione:String;
    private indirizzo: String;
    private img: ImgSgn;

    public constructor(nome:String, descrizione:String, indirizzo:String, img:any) {
        this.nome;
        this.descrizione;
        this.indirizzo;
        this.img;
    }

    //TODO creare metodi get

    public getSegnalazioni():SegnalazioneModel{
        if(this.id == undefined)
            throw new Error("segnalazione non valida, settare l'id");
        return this;
    }

    public setId(id: Number){
        this.id = id;
    }

    public setImg(fileName:String, pathServer: String, typeFile: String){
        this.img = new ImgSgn(fileName,pathServer,typeFile);
    }

}


