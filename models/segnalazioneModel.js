const segnalazioni = [
    { name: "Giovanni", indirizzo: "Via Alberto 5", data: 8 },
    { name: "Carlo", indirizzo: "Via Saffi 3", data: 20 }
  ];


class segnalazione {
  constructor(nome,descrizione,indirizzo,img) {
    this.nome=nome;
    this.descrizione=descrizione;
    this.indirizzo=indirizzo;
    this.img=img;
  }
}
  
  exports.getSegnalazioni = () => {
    return segnalazioni;
  };