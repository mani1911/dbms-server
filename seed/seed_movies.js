import { MovieMongo, MovieSQL } from "../models/index.js";
import {addDoc, collection} from "firebase/firestore";
import db from '../utils/connectFirebase.js';

const movieSeeder = async () => {
    const movieDetails = [
        {
            name : "movie1",
            description : "Nice Movie",
            release_date : new Date("2022-03-25"),
            rating : 3,
            total_collection : 100
        },
        {
            name : "movie2",
            description : "Nice Movie",
            release_date : new Date("2021-02-12"),
            rating : 4,
            total_collection : 500
        },
        {
            name : "movie3",
            description : "Nice Movie",
            release_date : new Date("2020-07-30"),
            rating : 3,
            total_collection : 300
        },
    ]
    try {

        // seed mongo db
        const movies_mongo = await MovieMongo.insertMany(movieDetails)

        // seed mysql
        const movies_sql = await MovieSQL.bulkCreate(movieDetails)

        // seed firestore
        movieDetails.forEach(movie => {
            const ref = addDoc(collection(db, "movie"), movie)
        })

        console.log('Seed Movies Successful...')
    }
    catch (e){
        console.log(e)
    }
}

export default movieSeeder



