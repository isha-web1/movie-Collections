import  express  from "express"

import { MovieController } from "./movie.controller";

const router = express.Router()

router.post('/',MovieController.createMovie)

router.get('/', MovieController.getAllMovies)

export const MovieRoutes = router;