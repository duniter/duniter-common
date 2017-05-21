"use strict";

const MAXIMUM_LEN_OF_COMPACT_TX = 100
const MAXIMUM_LEN_OF_OUTPUT = 2000
const MAXIMUM_LEN_OF_UNLOCK = MAXIMUM_LEN_OF_OUTPUT

module.exports = {

  BLOCK_GENERATED_VERSION: 10,
  LAST_VERSION_FOR_TX: 10,
  TRANSACTION_VERSION: 10,
  DOCUMENTS_VERSION: 10,
  TRANSACTION_MAX_TRIES: 10,

  SPECIAL_BLOCK: '0-E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
  SPECIAL_HASH: 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
  MAXIMUM_LEN_OF_COMPACT_TX,
  MAXIMUM_LEN_OF_OUTPUT,
  MAXIMUM_LEN_OF_UNLOCK,

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
    WRONG_UNLOCKER:                       { httpCode: 400, uerr: { ucode: 2013, message: "Wrong unlocker in transaction" }},
    LOCKTIME_PREVENT:                     { httpCode: 400, uerr: { ucode: 2014, message: "Locktime not elapsed yet" }},
    SOURCE_ALREADY_CONSUMED:              { httpCode: 400, uerr: { ucode: 2015, message: "Source already consumed" }},
    WRONG_AMOUNTS:                        { httpCode: 400, uerr: { ucode: 2016, message: "Sum of inputs must equal sum of outputs" }},
    WRONG_OUTPUT_BASE:                    { httpCode: 400, uerr: { ucode: 2017, message: "Wrong unit base for outputs" }},
    CANNOT_ROOT_BLOCK_NO_MEMBERS:         { httpCode: 400, uerr: { ucode: 2018, message: "Wrong new block: cannot make a root block without members" }},
    IDENTITY_WRONGLY_SIGNED:              { httpCode: 400, uerr: { ucode: 2019, message: "Weird, the signature is wrong and in the database." }},
    TOO_OLD_IDENTITY:                     { httpCode: 400, uerr: { ucode: 2020, message: "Identity has expired and cannot be written in the blockchain anymore." }},
    TX_INPUTS_OUTPUTS_NOT_EQUAL:          { httpCode: 400, uerr: { ucode: 2024, message: "Transaction inputs sum must equal outputs sum" }},
    TX_OUTPUT_SUM_NOT_EQUALS_PREV_DELTAS: { httpCode: 400, uerr: { ucode: 2025, message: "Transaction output base amount does not equal previous base deltas" }},
    BLOCKSTAMP_DOES_NOT_MATCH_A_BLOCK:    { httpCode: 400, uerr: { ucode: 2026, message: "Blockstamp does not match a block" }},
    A_TRANSACTION_HAS_A_MAX_SIZE:         { httpCode: 400, uerr: { ucode: 2027, message: 'A transaction has a maximum size of ' + MAXIMUM_LEN_OF_COMPACT_TX + ' lines' }},
    TOO_OLD_MEMBERSHIP:                   { httpCode: 400, uerr: { ucode: 2029, message: "Too old membership." }},
    MAXIMUM_LEN_OF_OUTPUT:                { httpCode: 400, uerr: { ucode: 2032, message: 'A transaction output has a maximum size of ' + MAXIMUM_LEN_OF_OUTPUT + ' characters' }},
    MAXIMUM_LEN_OF_UNLOCK:                { httpCode: 400, uerr: { ucode: 2033, message: 'A transaction unlock has a maximum size of ' + MAXIMUM_LEN_OF_UNLOCK + ' characters' }}
  },

  // INDEXES
  M_INDEX: 'MINDEX',
  I_INDEX: 'IINDEX',
  S_INDEX: 'SINDEX',
  C_INDEX: 'CINDEX',
  IDX_CREATE: 'CREATE',
  IDX_UPDATE: 'UPDATE',

  // Protocol fixed values
  NB_DIGITS_UD: 4,
  REVOCATION_FACTOR: 2,
  TX_WINDOW: 3600 * 24 * 7,
  POW_DIFFICULTY_RANGE_RATIO: 1.189, // deduced from Hexadecimal relation between 2 chars ~= 16^(1/16)
  ACCOUNT_MINIMUM_CURRENT_BASED_AMOUNT: 100
}
