
export async function iLoadWimaEnv(req, res) {
  try {
    return res.json({
      ok:true,
      domain: process.env.DOMAIN,
      movicScriptFileMaxLength : process.env.MOVIC_SCRIPT_FILE_MAX_LENGTH,
    })
  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}