
export async function iLoadMovicEnv(req, res) {
  try {
    const movicEnv = {
      scriptFileMaxLength : process.env.MOVIC_SCRIPT_FILE_MAX_LENGTH,
      domain: process.env.DOMAIN
    }
    return res.json({ok:true, movicEnv})
  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}