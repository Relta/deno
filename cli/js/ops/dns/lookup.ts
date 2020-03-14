/*
 * Copyright (c) 2020.
 * Relta, LLC. - All rights reserved.
 */

import {DNS$Family} from "./types.ts";
import {sendAsync, sendSync} from "../dispatch_json.ts";

export type DNS$LookupOptions = {
  family?: number;
  hints?: number[];
  all?: boolean;
  verbatim?: boolean;
} | number | undefined;

export type DNS$LookupCallback =
  (err: Error | undefined, address: string, family: DNS$Family) => any;

export function lookupSync(hostname: string, options: DNS$LookupOptions, callback: DNS$LookupCallback): string[] {
  return sendSync("op_lookup", {hostname, options});
}

export async function lookup(hostname: string, options: DNS$LookupOptions, callback: DNS$LookupCallback): Promise<string[]> {
  return await sendAsync("op_lookup", {hostname, options});
}
