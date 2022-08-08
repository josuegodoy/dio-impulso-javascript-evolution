import "reflect-metadata";
import express from "express";
import cors from "cors";

import { router } from "./routes";

import "./database";

const server = express();

server.use(cors());

server.use(express.json());
server.use(router)

server.listen(5000, () => {
    console.log('Server on port: 5000')
})
