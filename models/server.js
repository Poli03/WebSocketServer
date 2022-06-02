const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT;

        this.path= {}
        //Middlewares
        this.middelwares();
        //Routes
        this.routes();
    }

    middelwares(){
        this.app.use(cors());

        this.app.use(express.static('public'));
    }

    routes(){}

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Corriendo en el puerto:', this.port);
        });
    }
}

module.exports= Server;