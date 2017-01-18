"use strict";

const POW_DIFFICULTY_RANGE_RATIO = 1.189;

module.exports = {
  HELPERS: {
    maxAcceleration
  }
}

function maxAcceleration (conf) {
  let maxGenTime = Math.ceil(conf.avgGenTime * POW_DIFFICULTY_RANGE_RATIO);
  return Math.ceil(maxGenTime * conf.medianTimeBlocks);
}
