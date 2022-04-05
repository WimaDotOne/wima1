import mongoose from "mongoose"

function ConnectDb(mongoDb) {
  if(!mongoDb) {
    throw new Error("Database is not configured.")
  }
  const url = `mongodb+srv://${mongoDb}?retryWrites=true&w=majority`
  mongoose.connect(url)
}

export {
  ConnectDb
}