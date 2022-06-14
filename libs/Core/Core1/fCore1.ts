import { useShield, ShieldProvider } from "./Fetch/F/Shield/Shield"

import { ClassNames } from "./Util/F/ClassName/ClassName"
import { Post, Post2, Get, Get2, PostFormData, PostFormData2 } from "./Fetch/F/Fetch"
import { Alert, AlertSysError } from "./Fetch/F/Alert"
import { IsEmail } from "./Email/B/IsEmail"

import { TextField1 } from "./Fields/TextField/TextField1"
import { SelectField1 } from "./Fields/SelectField/SelectField1"
import { ErrorLine } from "./Fields/ErrorLine/ErrorLine"

import {
  UnivLogin,
  Login,
  LoginConfig,
  Contact,
  LogoBar,
  Paragraph, SubParagraph,
  SectionHeader, SubSectionHeader,
  TermHeader,
} from "../Core1/StripeLogin/fLogin"

import { FileInput } from "./FileUp/fFileUp"
import { IFormTextField } from "./FileUp/fFileUp"
import { EnumText } from "./Util/F/ClassName/Enum/Enum"

export {
  UnivLogin,
  Login,
  LoginConfig,
  Contact,
  LogoBar,
  Paragraph, SubParagraph,
  SectionHeader, SubSectionHeader,
  TermHeader,

  useShield,
  ShieldProvider,

  ClassNames,
  Post, Post2, Get, Get2, PostFormData, PostFormData2,
  Alert, AlertSysError,
  
  IsEmail,

  TextField1,
  SelectField1,
  ErrorLine,

  FileInput,

  EnumText
}

export type { 
  IFormTextField 
}
