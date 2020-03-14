// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import {sendAsync, sendSync} from "../dispatch_json.ts";
import {DNS$RecordType} from "./types.ts";


type DNS$ResolveCallback =
  (err: Error | undefined, records: (string | object)[]) => any;

export function resolveSync(hostname: string,
                            rrtype: DNS$RecordType = DNS$RecordType.A,
                            callback: DNS$ResolveCallback): string[] {
  return sendSync("op_resolve", {hostname, rrtype});
}

export async function resolve(hostname: string,
                              rrtype: DNS$RecordType = DNS$RecordType.A,
                              callback: DNS$ResolveCallback): Promise<string[]> {
  return await sendAsync("op_resolve", {hostname, rrtype});
}
