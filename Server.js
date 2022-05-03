import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"
import { ConnectDb, DevCors, FilePath } from "./libs/Core/Core1/bCore1.js"
import { bConfig } from "./bConfig.js"
import { LoginRouter } from "./libs/Core/Core1/bCore1.js"
import { SettingsHomeRouter } from "./apps/Settings/SettingsHome/bSettingsHome.js"
import { WimaRouter } from "./apps/Wima/bWima.js"
import { MovicRouter } from "./apps/Movic/B/Router/MovicRouter.js"

dotenv.config()
ConnectDb(process.env.MONGO_DB)

const server = express()
server.use(express.json())
server.use(cookieParser())

DevCors(server)

server.use(bConfig.bRoute1+"/login", LoginRouter)
server.use(bConfig.bRoute1+"/wima", WimaRouter)
server.use(bConfig.bRoute1+"/settingsHome", SettingsHomeRouter)
server.use(bConfig.bRoute1+"/movic", MovicRouter)

server.use(express.static(FilePath(import.meta.url, "./out")))

server.use("/", (_, res)=>{
  return res.sendFile(FilePath(import.meta.url, "./libs/Core/Core1/StartServer/F/404.html"))
})

const PORT = process.env.PORT || 5001
server.listen(PORT, ()=>{
  console.log(`Server listens at port ${PORT} on ${new Date()}`)
})
