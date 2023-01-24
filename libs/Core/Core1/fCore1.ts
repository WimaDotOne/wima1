import { useShield, ShieldProvider } from "./Fetch/F/Shield/Shield"

import { ClassNames } from "./Util/F/ClassName/ClassName"
import { Post, Post2, Get, Get2, PostFormData, PostFormData2 } from "./Fetch/F/Fetch"
import { Alert, AlertSysError } from "./Fetch/F/Alert"
import { IsEmail } from "./Email/B/IsEmail"

import { TextField1 } from "./Fields/TextField/TextField1"
import { NumberField1 } from "./Fields/NumberField/NumberField1"
import { SelectField1 } from "./Fields/SelectField/SelectField1"
import { SelectField2 } from "./Fields/SelectField/SelectField2"
import { ErrorLine } from "./Fields/ErrorLine/ErrorLine"

import { StripeButton } from "./StripePay/fStripePay"

import {
  UnivLogin,
  Login,
  Login2,
  LoginConfig,
  Contact,
  LogoBar,
  Paragraph, SubParagraph,
  SectionHeader, SubSectionHeader,
  TermHeader,
} from "../Core1/StripeLogin/fLogin"

import { FileInput } from "./FileUp/fFileUp"
import { PhotoInput } from "./FileUp/fFileUp"
import { IFormTextField } from "./FileUp/fFileUp"
import { EnumText } from "./Util/F/ClassName/Enum/Enum"
import { TextDate1 } from "./Util/F/Time/Date"
import { ForceHttps } from "./Util/F/Url/ForceHttps"

export {
  UnivLogin,
  Login,
  Login2,
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
  NumberField1,
  SelectField1,
  SelectField2,
  ErrorLine,

  FileInput,
  PhotoInput,

  EnumText,
  TextDate1,
  ForceHttps
}

export type { 
  IFormTextField 
}
