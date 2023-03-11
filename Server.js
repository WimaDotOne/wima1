import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"
import { ConnectDb, DevCors, FilePath } from "./libs/Core/Core1/bCore1.js"
import { bConfig } from "./bConfig.js"
import { LoginRouter } from "./libs/Core/Core1/bCore1.js"
import { WimaRouter } from "./apps/Wima/bWima.js"
import { MovicRouter } from "./apps/Movic/B/Router/MovicRouter.js"
import { BookRouter } from "./apps/Book/B/Router/BookRouter.js"
import { SocialRouter } from "./apps/Social/B/Router/SocialRouter.js"
import { LingoRouter } from "./apps/Lingo/B/Router/LingoRouter.js"
import { QuizRouter } from "./apps/Quiz/B/Router/QuizRouter.js"
import { ThankyRouter } from "./apps/Thanky/App/B/Router/ThankyRouter.js"
import { ThankyWebhook } from "./apps/Thanky/App/B/Webhook/ThankyWebhook.js"
import { AdminRouter } from "./admin/WimaAdmin/B/Router/AdminRouter.js"

dotenv.config()
ConnectDb(process.env.MONGO_DB)

const server = express()


//stripe webhook (put before express.json())
server.use("/webhook/thanky", express.raw({type: 'application/json'}), ThankyWebhook)


server.use(express.json())
server.use(cookieParser())

DevCors(server)

server.use(bConfig.bRoute1+"/admin", AdminRouter)

server.use(bConfig.bRoute1+"/login", LoginRouter)
server.use(bConfig.bRoute1+"/wima", WimaRouter)
server.use(bConfig.bRoute1+"/movic", MovicRouter)
server.use(bConfig.bRoute1+"/book", BookRouter)
server.use(bConfig.bRoute1+"/social", SocialRouter)
server.use(bConfig.bRoute1+"/lingo", LingoRouter)
server.use(bConfig.bRoute1+"/quiz", QuizRouter)
server.use(bConfig.bRoute1+"/thanky", ThankyRouter)



server.use(express.static(FilePath(import.meta.url, "./out")))

server.use("/", (_, res)=>{
  return res.sendFile(FilePath(import.meta.url, "./libs/Core/Core1/StartServer/F/404.html"))
})

const PORT = process.env.PORT || 5001
server.listen(PORT, ()=>{
  console.log(`Server listens at port ${PORT} on ${new Date()}`)
})
