import { SvgAppleNews } from "./Brand/Apple/SvgAppleNews"
import { SvgFacebook } from "./Brand/Facebook/SvgFacebook"
import { SvgGoogle } from "./Brand/Google/SvgGoogle"
import { SvgWimaCirlce } from "./Brand/Wima/SvgWimaCircle"
import { SvgWimaCirlce1 } from "./Brand/Wima/SvgWimaCircle1"
import { SvgArrow } from "./Common/Arrow/SvgArrow"
import { SvgChevron } from "./Common/Arrow/SvgChevron"
import { SvgFatArrow } from "./Common/Arrow/SvgFatArrow"
import { SvgWideArrow } from "./Common/Arrow/SvgWideArrow"
import { SvgCheckDoubleSquare } from "./Common/CheckMark/SvgCheckDoubleSquare"
import { SvgCheckMark } from "./Common/CheckMark/SvgCheckMark"
import { SvgCheckMarkDisk } from "./Common/CheckMark/SvgCheckMarkDisk"
import { SvgDoubleSquare } from "./Common/CheckMark/SvgDoubleSquare"
import { SvgDoorBatwing } from "./Common/Door/SvgDoorBatwing"
import { SvgFloppyDisk } from "./Common/Edit/SvgFloppyDisk"
import { SvgLineUnwrap } from "./Common/Edit/SvgLineUnwrap"
import { SvgLineWrap } from "./Common/Edit/SvgLineWrap"
import { SvgPencil } from "./Common/Edit/SvgPencil"
import { SvgPlus } from "./Common/Edit/SvgPlus"
import { SvgTrashBin } from "./Common/Edit/SvgTrashBin"
import { SvgX } from "./Common/Edit/SvgX"
import { SvgEmail } from "./Common/Email/SvgEmail"
import { SvgExclamationCircle } from "./Common/Exclamation/SvgExclamationCircle"
import { SvgExclamationTriangleFill } from "./Common/Exclamation/SvgExclamationTriangleFill"
import { SvgGear } from "./Common/Gear/Gear"
import { SvgGraduationCap } from "./School/GraduationCap/SvgGraduationCap"
import { SvgHamburger } from "./Common/Hamburger/SvgHamburger"
import { SvgHome } from "./Common/Home/SvgHome"
import { SvgMagnifyingGlass } from "./Common/MagnifyingGlass/SvgMagnifyingGlass"
import { SvgSmile } from "./Common/Smile/SvgSmile"
import { SvgAudio } from "./Common/Sound/SvgAudio"
import { SvgMic } from "./Common/Sound/SvgMic"
import { SvgClapperBoard } from "./Entertainment/ClapperBoard/SvgClapperBoard"
import { SvgFilm } from "./Entertainment/Film/SvgFilm"
import { SvgPhoto } from "./Entertainment/Photo/SvgPhoto"
import { SvgPlayButton } from "./Entertainment/PlayButton/SvgPlayButton"
import { SvgStopButton } from "./Entertainment/StopButton/SvgStopButton"
import { ISvgIcon } from "./H/ISvg"
import { SvgPreviewFile } from "./Office/File/PreviewFile"
import { SvgTextFile } from "./Office/File/TextFile"
import { SvgFolder2 } from "./Office/Folder/Folder2"
import { SvgFolderFill } from "./Office/Folder/FolderFill"
import { SvgPin } from "./Office/Pin/SvgPin"
import { SvgUnPin } from "./Office/Pin/SvgUnpin"
import { SvgUniversity } from "./School/University/SvgUniversity"
import { SvgProfile } from "./Social/Profile/SvgProfile"
import { SvgDashboard } from "./Common/Dashboard/SvgDashboard"
import { SvgGoods } from "./Social/Goods/SvgGoods"
import { SvgService } from "./Social/Service/SvgService"
import { SvgHelp } from "./Social/Help/SvgHelp"
import { SvgClock } from "./Office/Clock/SvgClock"

export function SvgIcon({
  name,
  width,
  color,
  color2,
  strokeWidth
}: ISvgIcon) {
  
  switch(name) {

    //Brand
    case "google": return <SvgGoogle width={width} fill={color} />
    case "facebook": return <SvgFacebook width={width} fill={color} />
    case "facebook.inverse": return <SvgFacebook width={width} fill={color} inverse/>
    case "applenews": return <SvgAppleNews width={width} fill={color}/>
    case "wimacircle": return <SvgWimaCirlce width={width} fill={color}/>
    case "wimacircle1": return <SvgWimaCirlce1 width={width}/>

    //Common
    case "chevron.up": return <SvgChevron up width={width} fill={color}/>
    case "chevron.down": return <SvgChevron down width={width} fill={color}/>
    case "chevron.left": return <SvgChevron left width={width} fill={color}/>
    case "chevron.right": return <SvgChevron right width={width} fill={color}/>

    case "arrow.up": return <SvgArrow up width={width} stroke={color} strokeWidth={strokeWidth} />
    case "arrow.down": return <SvgArrow down width={width} stroke={color} strokeWidth={strokeWidth} />
    case "arrow.left": return <SvgArrow left width={width} stroke={color} strokeWidth={strokeWidth} />
    case "arrow.right": return <SvgArrow right width={width} stroke={color} strokeWidth={strokeWidth} />

    case "widearrow.left": return <SvgWideArrow left width={width} fill={color} />
    case "widearrow.right": return <SvgWideArrow right width={width} fill={color} />

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
    case "dashboard": return <SvgDashboard width={width} fill={color}/>
    case "home": return <SvgHome width={width} fill={color} />
    case "door.batwing": return <SvgDoorBatwing width={width} />
    case "audio": return <SvgAudio width={width} fill={color} />
    case "mic": return <SvgMic width={width} fill={color} />

    case "checkmark": return <SvgCheckMark width={width} fill={color} />
    case "checkmark.disk": return <SvgCheckMarkDisk width={width} fill={color} />
    case "checkmark.doublesquare": return <SvgCheckDoubleSquare width={width} fill={color} />
    case "doublesquare": return <SvgDoubleSquare width={width} fill={color} />
    case "smile": return <SvgSmile width={width} fill={color} />
    
    case "x": return <SvgX width={width} fill={color} />
    case "floppydisk": return <SvgFloppyDisk width={width} fill={color} />
    case "pencil": return <SvgPencil width={width} fill={color} />
    case "plus": return <SvgPlus width={width} fill={color} />
    case "trashbin": return <SvgTrashBin width={width} fill={color} />
    case "linewrap": return <SvgLineWrap width={width} fill={color} />
    case "lineunwrap": return <SvgLineUnwrap width={width} fill={color} />
    
    //Entertainment
    case "film": return <SvgFilm width={width} fill={color} />
    case "clapperboard": return <SvgClapperBoard width={width} fill={color} />
    case "photo": return <SvgPhoto width={width} fill={color} />
    case "playbutton": return <SvgPlayButton width={width} fill={color} />
    case "stopbutton": return <SvgStopButton width={width} fill={color} />

    //Office
    case "previewfile": return <SvgPreviewFile width={width} fill={color} fill2={color2}/>
    case "textfile": return <SvgTextFile width={width} fill={color} fill2={color2}/>
    case "gear": return <SvgGear width={width} fill={color} fill2={color2}/>
    case "folder.fill": return <SvgFolderFill width={width} fill={color} />
    case "folder2": return <SvgFolder2 width={width} fill={color} fill2={color2}/>
    case "pin": return <SvgPin width={width} fill={color} />
    case "unpin": return <SvgUnPin width={width} fill={color} />
    case "clock": return <SvgClock width={width} fill={color} />

    //School
    case "graduationcap": return <SvgGraduationCap width={width} stroke={color} strokeWidth={strokeWidth} />
    case "university": return <SvgUniversity width={width} fill={color} />

    //Social
    case "profile": return <SvgProfile width={width} fill={color} />
    case "goods": return <SvgGoods width={width} stroke={color} strokeWidth={strokeWidth} />
    case "service": return <SvgService width={width} fill={color} />
    case "help": return <SvgHelp width={width} fill={color} />

    default: return null
  }
}