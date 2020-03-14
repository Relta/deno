import {DNS$RecordType} from "../../../cli/js/ops/dns/types.ts";
import {DNS$Lookup4Options, DNS$Lookup6Options, DNS$LookupOptions} from "../../../cli/js/ops/dns.ts";

interface DNS$LookupServiceResult {
  hostname: string;
  service: string;
}

type DNSRecord =
  DNSRecord$A
  | DNSRecord$AAAA
  | DNSRecord$CNAME
  | DNSRecord$MX
  | DNSRecord$NS
  | DNSRecord$PTR
  | DNSRecord$TXT
  | DNSRecord$NAPTR
  | DNSRecord$SRV
  | DNSRecord$SOA;

type DNSRecord$A = string;
type DNSRecord$AAAA = string;
type DNSRecord$CNAME = string;
type DNSRecord$MX = string;
type DNSRecord$NS = string;
type DNSRecord$PTR = string;
type DNSRecord$TXT = string;

interface DNSRecord$NAPTR {
  flags: string;
  service: string;
  regexp: string;
  replacement: string;
  order: number;
  preference: number;
}

interface DNSRecord$SRV {
  priority: number;
  weight: number;
  port: number;
  name: string;
}

interface DNSRecord$SOA {
  nsname: string;
  hostname: string;
  serial: number;
  refresh: number;
  retry: number;
  expire: number;
  minttl: number;
}

export class Resolver {
  servers: string[];

  async getServers(): Promise<string[]> {
    return this.servers;
  }

  async setServers(servers: string[]): Promise<void> {
    this.servers = servers;
  }

  async lookup(hostname: string, options?: DNS$LookupOptions): Promise<DNSRecord[]> {

  }

  async lookupService(hostname: string, port: number): Promise<DNS$LookupServiceResult> {

  }

  async resolve(hostname: string, rrtype: DNS$RecordType): Promise<DNSRecord[]> {

  }

  async resolve4(hostname: string, options: DNS$Lookup4Options): Promise<DNSRecord$A[]> {

  }

  async resolve6(hostname: string, options: DNS$Lookup6Options): Promise<DNSRecord$AAAA[]> {

  }

  async resolveAny(hostname: string): Promise<DNSRecord[]> {

  }

  async resolveCname(hostname: string): Promise<DNSRecord$CNAME[]> {

  }

  async resolveMx(hostname: string): Promise<DNSRecord$MX[]> {

  }

  async resolveNaptr(hostname: string): Promise<DNSRecord$NAPTR[]> {

  }

  async resolveNs(hostname: string): Promise<DNSRecord$NS[]> {

  }


  async resolvePtr(hostname: string): Promise<DNSRecord$PTR[]> {
  }

  async resolveSoa(hostname: string): Promise<DNSRecord$SOA[]> {
  }

  async resolveSrv(hostname: string): Promise<DNSRecord$SRV[]> {
  }

  async resolveTxt(hostname: string): Promise<DNSRecord$TXT[]> {
  }

  async reverse(ip: string): Promise<DNSRecord$PTR[]> {
  }
}
