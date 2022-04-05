import { SvgAppleNews } from "./Brand/Apple/SvgAppleNews"
import { SvgFacebook } from "./Brand/Facebook/SvgFacebook"
import { SvgGoogle } from "./Brand/Google/SvgGoogle"
import { SvgArrow } from "./Common/Arrow/SvgArrow"
import { SvgChevron } from "./Common/Arrow/SvgChevron"
import { SvgFatArrow } from "./Common/Arrow/SvgFatArrow"
import { SvgCheckMark } from "./Common/CheckMark/SvgCheckMark"
import { SvgDoorBatwing } from "./Common/Door/SvgDoorBatwing"
import { SvgEmail } from "./Common/Email/SvgEmail"
import { SvgExclamationCircle } from "./Common/Exclamation/SvgExclamationCircle"
import { SvgExclamationTriangleFill } from "./Common/Exclamation/SvgExclamationTriangleFill"
import { SvgHamburger } from "./Common/Hamburger/SvgHamburger"
import { SvgHome } from "./Common/Home/SvgHome"
import { SvgMagnifyingGlass } from "./Common/MagnifyingGlass/SvgMagnifyingGlass"
import { SvgAudio } from "./Common/Sound/SvgAudio"
import { SvgMic } from "./Common/Sound/SvgMic"
import { ISvgIcon } from "./H/ISvg"

export function SvgIcon({
  name,
  width,
  color,
  strokeWidth
}: ISvgIcon) {

  switch(name) {

    //Google
    case "google": return <SvgGoogle width={width} fill={color} />
    case "facebook": return <SvgFacebook width={width} fill={color} />
    case "facebook.inverse": return <SvgFacebook width={width} fill={color} inverse/>

    //AppleNews
    case "applenews": return <SvgAppleNews width={width} fill={color}/>

    //Common
    case "chevron.up": return <SvgChevron up width={width} fill={color}/>
    case "chevron.down": return <SvgChevron down width={width} fill={color}/>
    case "chevron.left": return <SvgChevron left width={width} fill={color}/>
    case "chevron.right": return <SvgChevron right width={width} fill={color}/>

    case "arrow.up": return <SvgArrow up width={width} stroke={color} strokeWidth={strokeWidth} />
    case "arrow.down": return <SvgArrow down width={width} stroke={color} strokeWidth={strokeWidth} />
    case "arrow.left": return <SvgArrow left width={width} stroke={color} strokeWidth={strokeWidth} />
    case "arrow.right": return <SvgArrow right width={width} stroke={color} strokeWidth={strokeWidth} />

    case "fatarrow.up": return <SvgFatArrow up width={width} stroke={color} strokeWidth={strokeWidth} />
    case "fatarrow.down": return <SvgFatArrow down width={width} stroke={color} strokeWidth={strokeWidth} />
    case "fatarrow.left": return <SvgFatArrow left width={width} stroke={color} strokeWidth={strokeWidth} />
    case "fatarrow.right": return <SvgFatArrow right width={width} stroke={color} strokeWidth={strokeWidth} />

    case "fatarrow.up.fill": return <SvgFatArrow up width={width} fill={color} stroke={color} strokeWidth={strokeWidth} />
    case "fatarrow.down.fill": return <SvgFatArrow down width={width}  fill={color} stroke={color} strokeWidth={strokeWidth} />
    case "fatarrow.left.fill": return <SvgFatArrow left width={width}  fill={color} stroke={color} strokeWidth={strokeWidth} />
    case "fatarrow.right.fill": return <SvgFatArrow right width={width}  fill={color} stroke={color} strokeWidth={strokeWidth} />


    case "exclamation.circle": return <SvgExclamationCircle width={width} stroke={color} strokeWidth={strokeWidth}/>
    case "exclamation.triangle.fill": return <SvgExclamationTriangleFill width={width} fill={color} />
    
    case "hamburger": return <SvgHamburger width={width} stroke={color} strokeWidth={strokeWidth} />
    case "magnifyingglass": return <SvgMagnifyingGlass width={width} stroke={color} strokeWidth={strokeWidth} />
    case "email": return <SvgEmail width={width} fill={color}/>

    case "home": return <SvgHome width={width} fill={color} />
    case "door.batwing": return <SvgDoorBatwing width={width} />

    case "audio": return <SvgAudio width={width} fill={color} />
    case "mic": return <SvgMic width={width} fill={color} />

    case "checkmark": return <SvgCheckMark width={width} fill={color} />
    default: return null
  }
}