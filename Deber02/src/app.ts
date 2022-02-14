import express from 'express';
import {initializeApp} from 'firebase-admin/app'
import { applicationDefault } from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore'
import cors from 'cors'
import * as dotenv from 'dotenv'
initializeApp({
    credential: applicationDefault()
})
dotenv.config();
const db = getFirestore();
const app = express();
const port = 3000;

app.listen(port, () => console.log(`API en el puerto ${port}`));
app.use(cors())
app.use(express.json());

//obtener un museo por ID
app.get('/museo/:id',(req,res) => {
    const {id} = req.params;
    const museosRef = db.collection("museos")
    .doc(`${id}`);
    museosRef.get()
    .then((docSnapshot) =>{
        if(docSnapshot.exists){
            res.status(200).send(docSnapshot.data());
        }else{
            res.status(204).send();
        }
    })
});

//crear un museo
app.post('/museo', (req,resp)=>{
    const museoObj = req.body;
    const {id} = museoObj;
    const referenciaMuseos = db.collection("museos");
    referenciaMuseos
        .where('id','==',`${id}`).get()
        .then((snapshot)=>{
            if(!snapshot.empty){
                resp.status(501).send({error: -1, msg: "Id ya en uso"});
            }
            else{
                return referenciaMuseos.doc(id).set(museoObj)
            }
        }).then(()=>{
            resp.status(201).send();
        })
        .catch((err)=>{
            resp.status(500).send(err);
        });
});

//actualizar museo (del museo se puede cambiar todo excepto el ID)
app.put('/museo/:id', (req,resp)=> {
    const {id} = req.params;
    const museoNuevo = req.body;
    const museoRef = db.collection("museos").doc(id);
    delete museoNuevo.id;
    db.runTransaction(async (transaction) =>{
        transaction.update(museoRef,museoNuevo);
    })
    .then(()=>{
        resp.status(200).send();
    })
    .catch((err)=>{
        resp.status(501).send(err);
    });
});

//eliminar museo por ID
app.delete('/museo/:id', (req,res) =>{
    const {id} = req.params;
    db.collection("museos")
    .doc(id).delete()
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(501).send(err);
    });
});

//crear obra
app.post('/museo/:idM/obra', (req,res)=>{
    const {idM} = req.params;
    const nuevaObra = req.body;
    const {id: idObra} = nuevaObra; 
    const reference = db.collection("museos")
    .doc(idM).collection("obras");
    reference.where("id","==",idObra)
    .get().then((qSnapshot)=>{
        if(!qSnapshot.empty){
            res.status(501).send(
                {
                    error: -1,
                    msg: "Id de obra ya en uso"
                });
        }
        else{
            return reference.doc(idObra).set(nuevaObra)
        }
    })
    .then(()=>{
        res.status(201).send();
    })
    .catch((err)=>{
        res.status(501).send(err);
    });
});

//listar todas las obreas de un museo
app.get('/museo/:idM/obras', (req,res)=>{
    const {idM} = req.params;
    const obrasRef = db.collection("museos")
    .doc(idM).collection("obras")
    .get().then(
        (querySnapshot) => {
            let obras: FirebaseFirestore.DocumentData[] = [];
            querySnapshot.forEach((doc)=>{
                obras.push(doc.data());
            })
            res.status(200).send(obras);
        }
    )
    .catch((err)=>{
        res.status(501).send(err);
    })
});

//leer obras de museo por sus ID
app.get('/museo/:idM/obra/:idO', (req,res)=>{
    const{idM, idO} = req.params;
    const obrasRef = db.collection("museos")
    .doc(idM).collection("obras").doc(idO)
    .get()
    .then((snapshot)=>{
        if(snapshot.exists){
            res.status(200).send(snapshot.data());
        }
        else{
            res.status(204).send();
        }
    })
});

//actualizar obreas de un museo por su ID (solo se puede cambiar la descripcion
//el precio y el flag)
app.put('/museo/:idM/obra/:idO', (req,res)=>{
    const{idM, idO} = req.params;
    const obrasRef = db.collection("museos")
    .doc(idM).collection("obras").doc(idO);
    const obraActualizada = req.body;
    delete obraActualizada.id;
    delete obraActualizada.nombre;
    delete obraActualizada.autor;
    db.runTransaction(async (transaction) =>{
        transaction.update(obrasRef,obraActualizada);
    })
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(501).send(err);
    });
});

//borrar obras de un museo por su ID
app.delete('/museo/:idM/obra/:idO', (req,res)=>{
    const{idM, idO} = req.params;
    db.collection("museos")
    .doc(idM).collection("obras")
    .doc(idO).delete()
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(501).send(err);
    });
});

//listar todas las obras de todos los museos
app.get('/obras', (req,res) =>{
    db.collectionGroup('obras')
    .get().then((querySnapshot) =>{
        let obras: FirebaseFirestore.DocumentData[] = [];
        querySnapshot.forEach((doc)=>{
            obras.push(doc.data());
        })
        res.status(200).send(obras);
    })
    .catch((err)=>{
        res.status(501).send(err);
    })
});

app.get('/museos', (req,res) =>{
    const qParams = req.query
    const referencia = db.collection('museos');
    if (qParams['nombre']){
        referencia.where('nombre', '==',qParams['nombre']).get()
        .then(
            (snapshot) =>{
                let museos: FirebaseFirestore.DocumentData[] = [];
                if(snapshot.empty){
                    res.status(404).send();
                }
                else{
                    snapshot.forEach((doc) => {
                        museos.push({...doc.data(), id: doc.id});
                    })
                    res.status(200).send(museos);
                }
            }
        )
        .catch(
            (err) =>{
                res.status(501).send(err);
            }
        );
    }else{
        referencia.get()
        .then(
            (querySnapshot) =>{
                let museos: FirebaseFirestore.DocumentData[] = [];
                querySnapshot.forEach((doc)=>{
                    museos.push({...doc.data(), id: doc.id});
                })
                res.status(200).send(museos);
        })
        .catch(
            (err) => {
                res.status(501).send(err);
            }
        );
    }
    
})