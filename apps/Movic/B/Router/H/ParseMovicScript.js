
function ParseMovicScript(text, imageDict, imageFolder) {
  const lines = (text || "").split("\n")

  const scenes = []
  let scene = [] // a scene is an array of moments
  let moment = {}
  let isNewScene = true
  let isNewMoment = true

  for(let line of lines) {
    line = line.trim()
    if(!line) continue

    if(IsSceneDivider(line)) {
      scene = []
      moment = {}
      isNewMoment = true
      isNewScene = true
    } else if(IsMomentDivider(line)) {
      moment = {}
      isNewMoment = true
    } else if(IsNarrator(line)) {

      GatherNarrative(line, moment)
      isNewMoment = PushMoment(scene, moment, isNewMoment)
      isNewScene = PushScene(scenes, scene, isNewScene)
    } else if(IsImage(line)) {
      GatherImages(line, moment, imageDict, imageFolder)
      isNewMoment = PushMoment(scene, moment, isNewMoment)
      isNewScene = PushScene(scenes, scene, isNewScene)
    } else {
      GatherLine(line, moment)
      isNewMoment = PushMoment(scene, moment, isNewMoment)
      isNewScene = PushScene(scenes, scene, isNewScene)
    }
  }
  return scenes
}

function PushScene(scenes, scene, isNewScene) {
  if(isNewScene && scene && scene.length > 0) {
    scenes.push(scene)
    isNewScene = false
  }
  return isNewScene
}

function IsMomentEmpty(moment) {
  if(moment.imageUrls && moment.imageUrls.length > 0) return false
  if(moment.lines && moment.lines.length > 0) return false
  if(moment.narratives && moment.narratives.length > 0) return false
  return true
}

function PushMoment(scene, moment, isNewMoment) {
  if(isNewMoment && !IsMomentEmpty(moment)) {
    scene.push(moment)
    isNewMoment = false
  }

  return isNewMoment
}

function IsSceneDivider(line) {
  const first3Char = line.substring(0,3)
  return first3Char === "==="
}

function IsMomentDivider(line) {
  const first3Char = line.substring(0,3)
  return first3Char === "---"
}

function GatherLine(line, moment) {
  
  if(!moment.lines) {
    moment.lines = []
  }
  moment.lines.push(line)
}

function IsNarrator(line) {
  const firstChar = line.substring(0,1)
  return firstChar === "#"
}

function GatherNarrative(line, moment) {
  const narrative = (line.split("#")[1] || "").trim()
  if(!narrative) return
  if(!moment.narratives) {
    moment.narratives = []
  }
  moment.narratives.push(narrative)
}

function IsImage(line) {
  const firstChar = line.substring(0,1)
  return firstChar === "["
}

function GatherImages(line, moment, imageDict, imageFolder) {
  const a = line.split("[")[1] || ""
  const b = (a.split("]")[0] || "")
  
  const imageNames = b.split(",")
  for(let i=0; i<imageNames.length; i++) {

    const imageName = (imageNames[i] || "").trim()
    if(!imageName) continue

    let imageUrl = ""
    if(imageDict) {
      imageUrl = imageDict[imageName]
    }
    if(!imageUrl && imageFolder) {
      imageUrl = imageFolder+"/"+imageName
    }
    if(!imageUrl) continue
    if(!moment.imageUrls) {
      moment.imageUrls = []
    }
    moment.imageUrls.push(imageUrl)
  }
}

export {
  ParseMovicScript
}