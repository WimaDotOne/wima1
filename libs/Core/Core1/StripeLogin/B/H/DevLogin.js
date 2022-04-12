function DevLogin() {
  
  const _id = process.env.DEV_LOGIN_ID
  if(_id) {
    return {_id}
  }
  
  return null
}


export {
  DevLogin
}