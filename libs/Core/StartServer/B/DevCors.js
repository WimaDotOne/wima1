
function DevCors(server) {
  if(process.env.DEV_CORS) {
    server.use((req, res, next)=>{
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.end()
      }
      
      next()
    })
  }
}

export {
  DevCors
}