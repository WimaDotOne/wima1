import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"
import { ConnectDb, DevCors, FilePath } from "./libs/Core/Core1/bCore1.js"
import { bConfig } from "./bConfig.js"
import { LoginRouter } from "./libs/Core/Core2/bCore2.js"
import { WimaHomeRouter } from "./apps/WimaHome/bWimaHome.js"

dotenv.config()
ConnectDb(process.env.MONGO_DB)

const server = express()
server.use(express.json())
server.use(cookieParser())

DevCors(server)

server.use(bConfig.bRoute1+"/login", LoginRouter)
server.use(bConfig.bRoute1+"/wimaHome", WimaHomeRouter)

server.use(express.static(FilePath(import.meta.url, "./out")))

server.use("/", (_, res)=>{
  return res.sendFile(FilePath(import.meta.url, "./libs/Core/Core1/StartServer/F/404.html"))
})

const PORT = process.env.PORT || 5001
server.listen(PORT, ()=>{
  console.log(`Server listens at port ${PORT} on ${new Date()}`)
})