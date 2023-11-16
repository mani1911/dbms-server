import { MovieMongo, MovieSQL, Bookmark, Comment } from "../../models/index.js"
import db from "../../utils/connectFirebase.js";
import { collection, getDocs } from "firebase/firestore";

const movieController = {
    handler : async (req, res) => {
        try {

            const moviesFromMongo = await MovieMongo.find();
            const moviesFromSQL = await MovieSQL.findAll();

            const querySnapshot = await getDocs(collection(db, "movie"));
            // const moviesFromFirestore = []
            // querySnapshot.forEach((doc) => {
            //     moviesFromFirestore.push(doc.data());
            // });
            
            return res.code(200).send({message : {
                moviesFromMongo, moviesFromSQL
            }})
        }
        catch(err){
            return res.code(500).send({message : "Internal Server Error"})
        }
    }
}

const movieGetByName = {
    handler: async (req, res) => {
        try {
            const getFromMongo = await MovieMongo.find({title :"Chalmar"})
            return res.code(200).send({message: getFromMongo})
        }
        catch(err){
            return res.code(500).send({message: "No Movie Found"})
        }
    }
}

const bookmarkMovie = {
    handler : async (req, res) => {
        try {
            const title = req.body.title;
            const desc = req.body.desc;

            const checkIfExists = await Bookmark.findOne({title: title})
            if(checkIfExists !== null){
                return res.code(404).send('Already Bookmarked')
            }
            const newBookmark = new Bookmark({title, description: desc})
            newBookmark.save()
            console.log('Inserted Successfully')
            
            return res.code(200).send({message : "Bookmarked Successfully"})
        }
        catch(err){
            console.log(err)
            return res.code(500).send({message: "Http Server Error"})
        }
    }
}

const getBookmarks = {
    handler : async (req, res) => {
        try {
            const bookmarks = await Bookmark.find()
            return res.code(200).send({message: bookmarks})
        }
        catch(err) {
            console.log(err)
            return res.code(500).send({message: 'Internal Server error'})
        }
    }
}

const deleteBookmark = {
    handler : async (req, res) => {
        try{
            const title = req.body.title;
            await Bookmark.deleteOne({title: title})
            return res.code(200).send({message: 'Bookmark deleted Successfully'})
        }
        catch(err){
            return res.code(500).send({message: 'Internal Server Error'})
        }
    }
}

const getComments = {
    handler : async (req, res) => {
        try {
            // const movie_id = req.body.movie_id;
            console.log(req.body)
            const data = await Comment.findAll()
            return res.code(200).send({message: data})
        }
        catch(err) {
            return res.code(500).send({message: 'Internal Server Error'})
        }
    }
}

const addComment = {
    handler : async  (req, res) => {
        try {
            const movie_id = req.body.movie_id;
            const comment = req.body.comment;
            await Comment.create({comment: comment, movie_id : movie_id})
            return res.code(200).send({message: 'Comment added Successfully'})
        }
        catch(err) {
            return res.code(500).send({message: 'Internal Server Error'})
        }
    }
}

// deleteOne({ age: { $gte: 10 } })

// Post.findAll({
//   where: {
//     authorId: 2  
//       
//     
//   }
// });


export {movieController, movieGetByName, bookmarkMovie, getBookmarks, deleteBookmark, addComment, getComments};