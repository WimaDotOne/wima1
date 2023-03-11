export function DevUser() {
  
  const _id = process.env.DEV_USER_ID
  if(_id) {
    return {_id}
  }
  
  return null
}

export function DevUnivAccount() {
  
  const _id = process.env.DEV_UNIV_ACCOUNT_ID
  if(_id) {
    return {_id}
  }
  
  return null
}

export function DevAdmin() {
  
  const _id = process.env.DEV_ADMIN_ID
  if(_id) {
    return {_id}
  }
  
  return null
}