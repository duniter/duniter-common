"use strict";
const regex = require('../regex');

// Constants
const SIGNED = false
const UNSIGNED = !SIGNED

module.exports = class Transaction {

  constructor() {
  }

  /**
   * Aliases
   */

  /**
   * Methods
   */

  static getLen(tx) {
    return 2 // header + blockstamp
    + tx.issuers.length * 2 // issuers + signatures
    + tx.inputs.length * 2 // inputs + unlocks
    + (tx.comment ? 1 : 0)
    + tx.outputs.length
  }
}
