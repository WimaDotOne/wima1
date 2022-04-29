function DevUser() {
  
  const _id = process.env.DEV_USER_ID
  if(_id) {
    return {_id}
  }
  
  return null
}


export {
  DevUser
}