import { Request, Response } from "express"
import { MovieServices } from "./movie.service"



 const createMovie = async(req: Request,res:Response) =>{
   
    try{
        const movieData = req.body;
    const result = await MovieServices.createMovie(movieData)
  
    res.status(200).json({
      success : true,
      message : "movie is created successfully",
      data : result
    })
    }catch(err ){
        res.status(500).json({
            success : false,
            message : 'something went wrong',
            data : err
        })

    }
  
  
  }

  const getAllMovies = async(req:Request,res:Response) =>{
    try{
       const result = MovieServices.getMovies()
       res.status(200).json({
        success : true,
        message : "movie is  get successfully",
        data : result
      })
    }catch(err){
        res.status(500).json({
            success : false,
            message : 'something went wrong',
            data : err
        })
    }
  }

  export const MovieController = {
    createMovie,
    getAllMovies
  }