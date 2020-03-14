/*
 * Copyright (c) 2020.
 * Relta, LLC. - All rights reserved.
 */

import {sendAsync, sendSync} from "../dispatch_json.ts";

export type DNS$Lookup6Options = {
  /**
   * Retrieve the Time-To-Live value (TTL) of each record. When true, the callback receives an array of
   * { address: '0:1:2:3:4:5:6:7', ttl: 60 } objects rather than an array of strings, with the TTL expressed in seconds.
   */
  ttl?: boolean;
}

export function resolve6Sync(hostname: string, options?: DNS$Lookup6Options): string[] {
  return sendSync("op_resolve6", {hostname, options})
}

export async function resolve6(hostname: string, options?: DNS$Lookup6Options): Promise<string[]> {
  return await sendAsync("op_resolve6", {hostname, options});
}
