import mongoose from "mongoose";

const createConnection = (url) => {
  mongoose.connect(url);
};

class DB {
  constructor(url) {
    if (!DB.instance) {
      DB.instance = createConnection(url);
    }
    return DB.instance;
  }
  connect() {
    return this.instance;
  }
}

const connect = () => {
  try {
    new DB(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
db.once("connected", () => {
  console.log("mongoDB connected!");
});

connect();
