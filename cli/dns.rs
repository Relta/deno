// Copyright 2020 the Deno authors. All rights reserved. MIT license.
use std;
use std::net::{SocketAddr, ToSocketAddrs};
use std::vec::IntoIter;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
#[serde(untagged)]
pub enum DNSRecordType {
  A,
  AAAA,
  ANY,
  CNAME,
  MX,
  NAPTR,
  NS,
  PTR,
  SOA,
  SRV,
  TXT,
}

pub fn resolve(hostname: String, _rr_type: DNSRecordType)
               -> std::io::Result<IntoIter<SocketAddr>> {
  let addrs = hostname.to_socket_addrs();
  return match addrs {
    Ok(addr) => Ok(addr),
    Err(e) => Err(e),
  }
}

