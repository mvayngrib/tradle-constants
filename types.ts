import { Buffer } from 'buffer'
import c = require('./index.js')

export interface Message {
  object: {}
  [c.RECIPIENT]: string
  [c.SEQ]?: number
  [c.PREV_TO_RECIPIENT]: any
}

export interface Signed {
  [c.SIG]: string
}

export interface SignedInput {
  [c.SIG]: string | Buffer
}

export interface OrgSigned {
  [c.ORG_SIG]: string
}

export interface OrgSignedInput {
  [c.ORG_SIG]: string | Buffer
}

export interface Unsigned {}

export interface Typed {
  [c.TYPE]: string
}

export interface Timestamped {
  [c.TIMESTAMP]: number
}

export interface ProtocolRegistered {
  [c.PROTOCOL_VERSION]: string
}

export interface Versioned {
  [c.VERSION]: number
}

export interface Permalinked extends Versioned {
  [c.PERMALINK]: string
  [c.PREVLINK]: string
  [c.PREVHEADER]: string
}

export interface NotPermalinked {
  [c.VERSION]?: 0
}

export interface Recipient {
  pubKey: PublicKey
  link: string
}

export interface PrivateKey {
  priv: Buffer
  curve: string
}

export interface PublicKey {
  pub: Buffer
  curve: string
}

export interface Key extends PrivateKey, PublicKey {}

export interface Signature {
  pubKey: PublicKey
  sig: Buffer
}

export interface Author {
  sigPubKey: PublicKey
  sign: (obj: Buffer, cb: (err: Error | null, sig?: Buffer) => any) => void
  permalink?: string
}

export interface Authored {
  [c.AUTHOR]: string
}

export interface Witness {
  a: string
  s: string
}

export interface Witnessed {
  [c.WITNESSES]: Witness[]
}

export type HeaderProps = LinkHeaderProps & Partial<Witnessed & OrgSigned>
export type HeaderInput = LinkHeaderProps & Partial<Witnessed & OrgSignedInput>

export type LinkHeaderProps = Signed
export type CorrectlyPermalinked = Permalinked | NotPermalinked
export type Signable = Typed & CorrectlyPermalinked & Timestamped
export type SignObject = Unsigned & Signable
export type RawObject = SignObject & CorrectlyPermalinked
export type Versionable = Signed & Partial<Permalinked> & Timestamped
export type SignedObject = Signed & Signable & CorrectlyPermalinked
export type ProcessedObject = Signed & Typed & CorrectlyPermalinked & Timestamped

export interface LinkHeader extends Signed {}
export interface Header extends LinkHeader, Witnessed, OrgSigned {}
export interface RequiredIdentity extends Typed, Versioned {}
export interface RequiredNonIdentity extends Authored {}
