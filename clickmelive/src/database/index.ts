import db from '../config/database_variables';
import mongoose, { ConnectOptions } from 'mongoose';
 

export declare enum DbHealth {
  DISCONNECTED =0,
  CONNECTED =1,
  CONNECTING =2,
  DISCONNECTING =3,
}
export const dbConnection = async () => {
  mongoose
    .connect(db.uri, {
      dbName: db.name,
      user: db.user,
      pass: db.password,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log('Mongodb connected....');
    })
    .catch((err) => console.log(err.message));

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db...');
  });

  mongoose.connection.on('error', (err) => {
    console.log(err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection is disconnected due to app termination...');
      process.exit(0);
    });
  });
};

export const dbHealth = () : DbHealth =>{
  
  return mongoose.connection.readyState as unknown  as DbHealth;

}
