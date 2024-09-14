import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie =async(payLoad : TMovie) => {

    const result = await Movie.create(payLoad)
    return result;
}

const getMovies = async() =>{
    const result = await Movie.find()
    return result
}

 export const MovieServices = {
    createMovie,
    getMovies
}