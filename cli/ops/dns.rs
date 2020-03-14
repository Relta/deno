/*
 * Copyright (c) 2020.
 * Relta, LLC. - All rights reserved.
 */

use std::net::SocketAddr;

use futures::FutureExt;

use deno_core::{Isolate, ZeroCopyBuf};

use crate::dns as deno_dns;
use crate::dns::DNSRecordType;
use crate::op_error::OpError;
use crate::state::State;

use super::dispatch_json::{Deserialize, JsonOp, Value};

pub fn init(i: &mut Isolate, s: &State) {
  // i.register_op("op_get_servers", s.stateful_json_op(op_get_servers));
  // i.register_op("op_lookup", s.stateful_json_op(op_lookup));
  // i.register_op("op_lookup_service", s.stateful_json_op(op_lookup_service));
  i.register_op("op_resolve", s.stateful_json_op(op_resolve));
  // i.register_op("op_resolve4", s.stateful_json_op(op_resolve4));
  // i.register_op("op_resolve6", s.stateful_json_op(op_resolve6));
  // i.register_op("op_resolve_any", s.stateful_json_op(op_resolve_any));
  // i.register_op("op_resolve_cname", s.stateful_json_op(op_resolve_cname));
  // i.register_op("op_resolve_mx", s.stateful_json_op(op_resolve_mx));
  // i.register_op("op_resolve_naptr", s.stateful_json_op(op_resolve_naptr));
  // i.register_op("op_resolve_ns", s.stateful_json_op(op_resolve_ns));
  // i.register_op("op_resolve_ptr", s.stateful_json_op(op_resolve_ptr));
  // i.register_op("op_resolve_soa", s.stateful_json_op(op_resolve_soa));
  // i.register_op("op_resolve_srv", s.stateful_json_op(op_resolve_srv));
  // i.register_op("op_resolve_txt", s.stateful_json_op(op_resolve_txt));
  // i.register_op("op_reverse", s.stateful_json_op(op_reverse));
  // i.register_op("op_set_servers", s.stateful_json_op(op_set_servers));
}


#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct ResolveArgs {
  promise_id: Option<u64>,
  hostname: String,
  // rrtype: DNSRecordType,
}

fn op_resolve(
  _state: &State,
  args: Value,
  _zero_copy: Option<ZeroCopyBuf>,
) -> Result<JsonOp, OpError> {
  let args: ResolveArgs = serde_json::from_value(args)?;
  let is_sync = args.promise_id.is_none();

  let fut = async move {
    let results: std::vec::IntoIter<SocketAddr> = deno_dns::resolve(args.hostname, DNSRecordType::AAAA)?;
    let addrs: Vec<String> = results.map(|r| r.to_string()).collect::<Vec<String>>();
    Ok(json!(addrs))
  };

  if is_sync {
    let buf = futures::executor::block_on(fut)?;
    Ok(JsonOp::Sync(buf))
  } else {
    Ok(JsonOp::Async(fut.boxed_local()))
  }
}

