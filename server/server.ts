import {WebServer} from "minmin";

let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

const server = new WebServer({
    nuxt: config,
    useCors: false
});

server.setPort(3001);
server.start();