
export async function iLoadHome(req, res) {
  try {

    return res.json({ ok: true })
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}