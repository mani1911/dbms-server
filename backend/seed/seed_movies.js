import { MovieMongo, MovieSQL } from "../models/index.js";
import {addDoc, collection} from "firebase/firestore";
import db from '../utils/connectFirebase.js';

const movieSeeder = async () => {
    const movieDetails = [
        {
            title : "Chalmar",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Pilmar",
            description : "An awesome movie about school",
            maturity : "O",
            slug : "pilmar",
            genre : "children"
        },
        {
            title : "Chalmar",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Hotel Transylvania",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Despicable Me",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Spirited Away",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Curb Your Enthusiasm",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Forrest",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },
        {
            title : "Office",
            description : "An awesome movie about life",
            maturity : "A",
            slug : "chalmar",
            genre : "romance"
        },

    ]
    try {

        // seed mongo db
        const movies_mongo = await MovieMongo.insertMany(movieDetails)

        // seed mysql
        const movies_sql = await MovieSQL.bulkCreate(movieDetails)

        // seed firestore
        // movieDetails.forEach(movie => {
        //     const ref = addDoc(collection(db, "movie"), movie)
        // })

        console.log('Seed Movies Successful...')
    }
    catch (e){
        console.log(e)
    }
}

export default movieSeeder



