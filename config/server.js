const express = require('express');
const cors = require('cors');

const { connection } = require('./database');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.paths = {
            users: '/api/users',
            products: '/api/products'
        };

        this.connectionMongoDB();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use(this.paths.users, require('../routes/user.routes'));
        this.app.use(this.paths.products, require('../routes/product.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listen server in the port', this.port);
        })
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    async connectionMongoDB() {
        await connection();
    }
}

module.exports = Server;