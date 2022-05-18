import { useShield, ShieldProvider } from "./Fetch/F/Shield/Shield"

import { ClassNames } from "./Util/F/ClassName/ClassName"
import { Post, Post2, Get, Get2, PostFormData, PostFormData2 } from "./Fetch/F/Fetch"
import { Alert, AlertSysError } from "./Fetch/F/Alert"
import { IsEmail } from "./Email/B/IsEmail"

import { TextField1 } from "./Fields/TextField/TextField1"

import {
  Login,
  LoginConfig,
  Contact,
  LogoBar,
  Paragraph, SubParagraph,
  SectionHeader, SubSectionHeader,
  TermHeader,
} from "../Core1/StripeLogin/fLogin"

import { FileInput } from "./Up/fUp"
import { IFormTextField } from "./Up/fUp"

export {

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

  FileInput
}

export type { 
  IFormTextField 
}
