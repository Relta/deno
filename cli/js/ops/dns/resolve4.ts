/*
 * Copyright (c) 2020.
 * Relta, LLC. - All rights reserved.
 */

import {sendAsync, sendSync} from "../dispatch_json.ts";

export type DNS$Lookup4Options = {
  /**
   * Retrieve the Time-To-Live value (TTL) of each record. When true, the callback receives an array
   * of { address: '1.2.3.4', ttl: 60 } objects rather than an array of strings, with the TTL expressed
   * in seconds.
   */
  ttl?: boolean;
} | undefined;

export type DNS$Lookup4Callback = (err: Error | undefined, addresses: (string | object)[]) => any;

/**
 * @param {string} hostname Host name to resolve.
 * @param {DNS$Lookup4Options} options The options for resolving A records
 * @param {DNS$Lookup4Callback} callback A callback function
 * @returns {string[]}
 */
export function resolve4Sync(hostname: string,
                             options: DNS$Lookup4Options = undefined,
                             callback: DNS$Lookup4Callback): string[] {
  return sendSync("op_resolve4", {hostname, options})
}

export async function resolve4(hostname: string,
                               options: DNS$Lookup4Options = undefined,
                               callback: DNS$Lookup4Callback): Promise<string[]> {
  return await sendAsync("op_resolve4", {hostname, options});
}
