import { useRouter } from 'next/router'
import { SocialColor } from '../../../apps/Social/F/CSS/SocialColor'
import { ProfilePaper } from '../../../apps/Social/F/SocialApp/ProfilePaper/ProfilePaper'
import { Button1, Div, LimitWidth } from '../../../libs/Core/Core2/fCore2'

export default function ProfilePage() {

  const router = useRouter()
  const socialAccountId = router.query.socialId as string

  function goSocial() {
    router.push("/apps/Social")
  }
  return (<>
    <ProfilePaper socialAccountId={socialAccountId} />

    <LimitWidth maxWidth={800}>
      <Div height={30} />
      <Button1 text='Social' onClick={goSocial} 
        color={SocialColor.themeBlue}/>
      <Div height={70} />
    </LimitWidth>
  </>)
}
