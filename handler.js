'use strict';

module.exports.hello = async (event, context) => {
  //see https://www.npmjs.com/package/cfn-custom-resource/v/4.0.2?activeTab=readme
  const cfnCR = require("cfn-custom-resource");
  const { configure, sendSuccess, sendFailure, sendResponse, LOG_VERBOSE, SUCCESS } = cfnCR;
  configure({ logLevel: LOG_VERBOSE });
  const result = await sendSuccess("id", { ImportantInfo: "otherId" }, event);
  return result;
};
