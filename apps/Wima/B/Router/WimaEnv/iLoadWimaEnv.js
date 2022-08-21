
export async function iLoadWimaEnv(req, res) {
  try {
    return res.json({
      ok:true,
      domain: process.env.DOMAIN,
      movicScriptFileMaxLength : process.env.MOVIC_SCRIPT_FILE_MAX_LENGTH,
      textMaxPerChapter: process.env.BOOK_TEXT_MAX_PER_CHAPTER,
      facebookAppId: process.env.FACEBOOK_APP_ID,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      contactMe: process.env.CONTACT_ME
    })
  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}