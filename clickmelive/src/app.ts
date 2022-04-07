require('dotenv').config();
/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import { corsAllowedOrigins } from './config/env_variables';
import { NotFoundError } from './core/ApiError';
import routes from '././routes';

process.on('uncaughtException', (e) => {
    console.error(e);
});

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(
    cors({
        origin: (origin, callback) => {
            if (corsAllowedOrigins?.split(',').includes('*')) {
                callback(null, '*');
            } else {
                callback(null, corsAllowedOrigins?.split(','));
            }
        },
        optionsSuccessStatus: 200,
    }),
);


// Routes
app.use('', routes);

app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError()));


export default app;