const { errorCode, successCode } = require("./config/codeConfig");

module.exports = {
  errorMsg: function (code) {
    if (errorCode[code] !== undefined) {
      return {
        error_code: "E-"+code,
        message: errorCode[code],
      };
    } else {
      return {
        message: code,
      };
    }
  },

  successMsg: function (data, code) {
    if (successCode[code] !== undefined) {
      if (data !== undefined) {
        return {
          data: data,
          success_code: "S-"+code,
          message: successCode[code],
        };
      } else {
        return {
          success_code: "S-"+code,
          message: successCode[code],
        };
      }
    } else {
      if (data !== undefined) {
        return {
          data: data,
          message: code,
        };
      } else {
        return {
          message: code,
        };
      }
    }
  },

  removeKeyForReturn: async(obj, keys) => {
      if(keys === undefined) keys = ['password'];
      for (var key in keys){
        obj[keys[key]] = undefined;
      }
      return obj
  }
};
