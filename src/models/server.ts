import 'dotenv/config'
import express, { Application, Request, Response } from 'express';
import routesProduct from '../routes/product.routes'

class Server {
    private app: Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
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
}

export default Server;