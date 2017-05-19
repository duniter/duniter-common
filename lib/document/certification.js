"use strict";
const regex = require('../regex');
const hashf = require('../hashf');

// Constants
const SIGNED = true
const UNSIGNED = !SIGNED

module.exports = class Certification {

  constructor(
    version,
    currency,
    issuer,
    blockstamp,
    idty_issuer,
    idty_uid,
    idty_buid,
    idty_sig,
    signature) {
    this.version = version || 10
    this.currency = currency
    this.issuer = issuer
    this.blockstamp = blockstamp
    this.idty_issuer = idty_issuer
    this.idty_uid = idty_uid
    this.idty_buid = idty_buid
    this.idty_sig = idty_sig
    this.signature = signature
  }

  /**
   * Aliases
   */

  get buid() {
    return this.blockstamp
  }

  set buid(buid) {
    this.blockstamp = buid
  }

  get sig() {
    return this.signature
  }

  set sig(sig) {
    this.signature = sig
  }

  get pubkey() {
    return this.issuer
  }

  set pubkey(pubkey) {
    this.issuer = pubkey
  }

  get to() {
    return this.idty_issuer
  }

  set to(to) {
    this.idty_issuer = to
  }

  get blockNumber() {
    if (!this.blockstamp) {
      return null
    }
    return parseInt(this.blockstamp.split('-')[0])
  }

  get block_number() {
    return this.blockNumber
  }

  get blockHash() {
    if (!this.blockstamp) {
      return null
    }
    return this.blockstamp.split('-')[1]
  }

  get block_hash() {
    return this.blockHash
  }

  /**
   * Methods
   */

  getRaw() {
    return Certification.toRAW(this);
  }

  inline() {
    return [this.pubkey, this.to, this.block_number, this.sig].join(':')
  }

  /**
   * Statics
   */

  static fromJSON(json) {
    const buid = [json.block_number, json.block_hash].join('-')
    return new Certification(
      json.version,
      json.currency,
      json.issuer || json.pubkey || json.from,
      json.blockstamp || json.buid || buid,
      json.idty_issuer || json.to,
      json.idty_uid,
      json.idty_buid,
      json.idty_sig,
      json.signature || json.sig
    )
  }

  static toRAW(json, withSig = true) {
    const cert = Certification.fromJSON(json)
    let raw = "";
    raw += "Version: " + (cert.version || 10) + "\n";
    raw += "Type: Certification\n";
    raw += "Currency: " + cert.currency + "\n";
    raw += "Issuer: " + cert.issuer + "\n";
    raw += "IdtyIssuer: " + cert.idty_issuer + '\n';
    raw += "IdtyUniqueID: " + cert.idty_uid + '\n';
    raw += "IdtyTimestamp: " + cert.idty_buid + '\n';
    raw += "IdtySignature: " + cert.idty_sig + '\n';
    raw += "CertTimestamp: " + cert.buid + '\n';
    if (cert.sig && withSig) {
      raw += cert.sig + '\n'
    }
    return raw
  }
}
