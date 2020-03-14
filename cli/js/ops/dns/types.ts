/*
 * Copyright (c) 2020.
 * Relta, LLC. - All rights reserved.
 */

export type DNS$Family = 4 | 6;

export enum DNS$RecordType {
  /** Returns records of any type */
  ANY = "ANY",

  /** An IPv4 Address */
  A = "A",

  /** An IPv6 Address */
  AAAA = "AAAA",

  /** A CNAME host */
  CNAME = "CNAME",

  /** A mail server host */
  MX = "MX",

  /** A Name Authority pointer record */
  NAPTR = "NAPTR",

  /** A name server record */
  NS = "NS",

  /** A pointer record */
  PTR = "PTR",

  /** A Start of Authority (SOA) record */
  SOA = "SOA",

  /** A service record */
  SRV = "SRV",

  /** A text record */
  TXT = "TXT",
}
