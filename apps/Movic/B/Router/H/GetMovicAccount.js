import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import MovicProject from "../../Model/MovicProject.js"

async function asyGetMovicAccount(userId) {
  const user = await User.findById(userId).populate("movicAccountId")

  if(!user) {
    throw new Error("Cannot find user")
  }

  const movicAccount = user.movicAccountId

  if(!movicAccount || !movicAccount._id) {
    throw new Error("Cannot find movic account")
  }

  return movicAccount
}

async function asyGetMovicProject(projectId, movicAccountId) {

  if(!projectId) {
    throw new Error("Project id is empty")
  }
  const project = await MovicProject.findById(projectId)
  if(!project) {
    throw new Error("Cannot find movic project")
  }

  if(!movicAccountId) {
    throw new Error("Movic account id is not provided")
  }
  if(project.movicAccountId.toString() !== movicAccountId.toString()) {
    throw new Error("Project does not match movic account")
  }
  return project
}


export {
  asyGetMovicAccount,
  asyGetMovicProject
}