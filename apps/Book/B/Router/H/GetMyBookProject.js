import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import BookProject from "../../Model/BookProject.js"

export async function asyGetMyBookProject(req, projectId) {

  if(!projectId) {
    throw new Error("Project id is empty")
  }

  const userId = req.user?._id

  if(!userId) {
    throw new Error("Cannot find user id")
  }

  const user = await User.findById(userId).populate("bookAccountId")

  if(!user) {
    throw new Error("Cannot find user")
  }

  const bookAccount = user.bookAccountId

  if(!bookAccount || !bookAccount._id) {
    throw new Error("Cannot find book account")
  }

  const project = await BookProject.findById(projectId)
  if(!project) {
    throw new Error("Cannot find book project")
  }


  if(project.bookAccountId.toString() !== bookAccount._id.toString()) {
    throw new Error("Project does not match book account")
  }
  return project
}