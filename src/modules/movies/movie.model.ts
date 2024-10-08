import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";


const reviewSchema = new Schema<TReview>({

    email : {
        type : String,
        required : true
    },
    rating : {
       type : Number,
       required : true
    },
    comment : {
        type : String,
        required : true
    }

})

const movieSchema = new Schema<TMovie>({
    title : {
        type : String,
        required : [true,"title is required"]
    },
    description : {
        type : String,
        required : [true,'description si required']
    },
    releaseDate : {
        type : Date,
        
    },
    genre : {
        type : String,
        required : [true,'genre is required']
    },
    reviews : {
        type : [reviewSchema]
    },
    slug : {
        type : String,
       
    },
    viewCount : {
        type : Number,
        default : 0
    },
    isDeleted : {
        type : Boolean,
        default : false
    }

})

export const Movie = model<TMovie>('Movie', movieSchema)
