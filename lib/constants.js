"use strict";

module.exports = {

  LAST_VERSION_FOR_TX: 10,
  TRANSACTION_VERSION: 10,
  DOCUMENTS_VERSION: 10,
  TRANSACTION_MAX_TRIES: 10,

  SPECIAL_BLOCK: '0-E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
  MAXIMUM_LEN_OF_COMPACT_TX: 100,

  PROOF_OF_WORK: {
    UPPER_BOUND: [
      '9A-F',
      '9A-E',
      '9A-D',
      '9A-C',
      '9A-B',
      '9A',
      '9',
      '8',
      '7',
      '6',
      '5',
      '4',
      '3',
      '2',
      '1',
      '1' // In case remainder 15 happens for some reason
    ]
  },

  ERRORS: {
    CANNOT_ROOT_BLOCK_NO_MEMBERS:         { httpCode: 400, uerr: { ucode: 2018, message: "Wrong new block: cannot make a root block without members" }},
    IDENTITY_WRONGLY_SIGNED:              { httpCode: 400, uerr: { ucode: 2019, message: "Weird, the signature is wrong and in the database." }},
    TOO_OLD_IDENTITY:                     { httpCode: 400, uerr: { ucode: 2020, message: "Identity has expired and cannot be written in the blockchain anymore." }},
    BLOCKSTAMP_DOES_NOT_MATCH_A_BLOCK:    { httpCode: 400, uerr: { ucode: 2026, message: "Blockstamp does not match a block" }},
    TOO_OLD_MEMBERSHIP:                   { httpCode: 400, uerr: { ucode: 2029, message: "Too old membership." }}
  }
}
