import { MovieMongo, MovieSQL } from "../../models/index.js"
import db from "../../utils/connectFirebase.js";
import { collection, getDocs } from "firebase/firestore";

const movieController = {
    handler : async (req, res) => {
        try {

            const moviesFromMongo = await MovieMongo.find();
            const moviesFromSQL = await MovieSQL.findAll();

            const querySnapshot = await getDocs(collection(db, "movie"));
            const moviesFromFirestore = []
            querySnapshot.forEach((doc) => {
                moviesFromFirestore.push(doc.data());
            });
            
            return res.code(200).send({message : {
                moviesFromMongo, moviesFromSQL, moviesFromFirestore
            }})
        }
        catch(err){
            return res.code(500).send({message : "Internal Server Error"})
        }
    }
}

export {movieController};