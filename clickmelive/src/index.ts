/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import app from './app';
import { nodeEnvironment, port } from './config/env_variables';
import { dbConnection } from './database';


app
    .listen(port, async () => {
        await dbConnection()
        console.log(`Node environment : ${nodeEnvironment}`);
        console.log(`server running on port : ${port}`);
    })
    .on('error', (e: any) => console.log(e));