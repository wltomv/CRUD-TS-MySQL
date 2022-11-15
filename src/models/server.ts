import 'dotenv/config'
import express, { Application, Request, Response } from 'express';
import routesProduct from '../routes/product.routes'
import db from '../db/connection'

class Server {
    private app: Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({ msg: 'API working' });
        })

        this.app.use('/api/products', routesProduct)

    }

    middlewares() {
        // body parser
        this.app.use(express.json())
    }

    async dbConnect() {
        try {
            await db.authenticate()
            console.log('Database connected');
        } catch (error) {
            console.log(error);
            console.log("error connecting to the database");

        }
    }
}

export default Server;