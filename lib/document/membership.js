"use strict";
const regex = require('../regex');

// Constants
const SIGNED = false
const UNSIGNED = !SIGNED

module.exports = class Membership {

  constructor(
    version,
    currency,
    issuer,
    membership,
    userid,
    blockstamp,
    certts,
    signature) {
    this.version = version || 10
    this.currency = currency
    this.issuer = issuer
    this.membership = membership
    this.userid = userid
    this.blockstamp = blockstamp
    this.certts = certts
    this.signature = signature
  }

  /**
   * Aliases
   */

  get block() {
    return this.blockstamp
  }

  get blockNumber() {
    if (!this.blockstamp) {
      return null
    }
    return parseInt(this.blockstamp.split('-')[0])
  }

  get blockHash() {
    if (!this.blockstamp) {
      return null
    }
    return this.blockstamp.split('-')[1]
  }

  /**
   * Methods
   */

  inline() {
    return [
      this.issuer,
      this.signature,
      this.blockstamp,
      this.certts,
      this.userid
    ].join(':')
  }

  /**
   * Statics
   */

  static fromJSON(json) {
    return new Membership(
      json.version,
      json.currency,
      json.issuer,
      json.membership,
      json.userid,
      json.blockstamp || json.block,
      json.certts,
      json.signature)
  }
}
