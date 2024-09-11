import app from "./app";
import config from "./config";

const mongoose = require('mongoose');

async function main() {
   try{
    await mongoose.connect(config.db_url as string);

    const port = 5000

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })

   }catch(err){

   }
    
  }

  main()