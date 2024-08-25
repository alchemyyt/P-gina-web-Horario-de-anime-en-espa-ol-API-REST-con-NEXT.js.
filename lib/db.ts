import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;
const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log('Alredy Connected');
    return;
  }
  if (connectionState === 2) {
    console.log('Reconnecting...');
    return;
  }
  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: 'animeEnCastellano',
      bufferCommands: true,
    });
  } catch (err: any) {
    console.error('Error connecting to MongoDB', err);
    throw new Error('Error connecting to Mongo', err);
  }
};
export default connect;
