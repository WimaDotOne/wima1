import { useRouter } from "next/router"
import { UnivLogin } from "../../../../../../libs/Core/Core1/fCore1"
import { SocialWindow } from "../../SocialWindow/SocialWindow"

export function UniversityLogin() {

  const router = useRouter()

  function goToProfile() {
    router.push("/apps/Social/AppTurn/Profile")
  }

  function goToAbout() {
    router.push("/apps/Social/AppTurn/About")
  }

  return(<>
    <SocialWindow>
      <UnivLogin afterLogin={goToProfile} afterLogout={goToAbout}/>
    </SocialWindow>
  </>)
}