//import { query } from 'express';

//PARAMETRI CONNESSIONE DB POSTGRES
const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:admin@localhost:5432/NodeSegnalazioni'
//postgresql://nomeutente:password@indirizzo:porta/nome_db

//Instauro connessione
const client = new Client({
    connectionString,
  })
  client.connect();

//Query e parametri
const query = {
 text :'INSERT INTO segnalazioni(id,nome, descrizione,indirizzo,img,data) VALUES(nextval($1), $2, $3, $4, $5, $6) RETURNING *',
 values : ['id_sequence','Freddie Mercury', 'Rissa al bar','Via Jack Daniels 5','img','5/4/2022'],
}

/*
export function insert(values) {
    const query = {
        text :'INSERT INTO segnalazioni(id,nome, descrizione,indirizzo,img,data) VALUES(nextval($1), $2, $3, $4, $5, $6) RETURNING *',
        vakues : ['id_sequence',mySgn.nome, mySgn.descrizione,mySgn.indirizzo,
      mySgn.img,'5/4/2022'],
       }
    // callback
    client.query(query, (err, res) => {
        if (err) {
         console.log(err.stack)
     } else {
         console.log(res.rows[0])
     }
  })   
    
}
*/

//callback
 client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })

  // promise
  //client
   // .query(query).then(res => console.log(res.rows[0]))
    //.catch(e => console.error(e.stack))