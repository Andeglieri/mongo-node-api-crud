import mongoose, { mongo } from 'mongoose'


const connectDb = async () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default connectDb;