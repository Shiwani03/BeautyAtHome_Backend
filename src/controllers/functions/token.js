const jwt = require("jsonwebtoken");
const defaultConfig = require("../../config/defaultConfig");
const utils = require("../../utils");
const TokenModal = require("../../models/token");

module.exports = {
  accessToken: function (id) {
    const token = jwt.sign({ _id: id }, defaultConfig[defaultConfig.env].accessTokenSecret, {
      expiresIn: defaultConfig[defaultConfig.env].accessTokenTime,
    });
    return token;
  },

  generateRefreshToken: function (id) {
    return jwt.sign(
      {
        _id: id,
      },
      defaultConfig[defaultConfig.env].refressTokenSecret,
      { expiresIn: defaultConfig[defaultConfig.env].refreshTokenTime }
    );
  },

  refreshToken: async function (req, res) {
    if (!req.body.refresh_token) {
      return res.status(400).send(utils.errorMsg(516));
    } else {
      const decoded = await jwt.verify(req.body.refresh_token, defaultConfig[defaultConfig.env].refressTokenSecret);
      const token = await jwt.verify(req.body.refresh_token, defaultConfig[defaultConfig.env].refressTokenSecret, async (err, data) => {
        if (err) return null;
        const accessToken = await jwt.sign(
          {
            _id: data._id,
          },
          defaultConfig[defaultConfig.env].accessTokenSecret,
          { expiresIn: defaultConfig[defaultConfig.env].accessTokenTime }
        );
        return accessToken;
      });

      if (token !== null) {
        TokenModal.findOne({ userId: decoded._id }, function (err, tkn) {
          if (err) return res.status(500).send(utils.errorMsg(517));
          tkn.tokens[0].access_token = token;
          tkn.save();
          return res.status(200).send(utils.successMsg(tkn, 201));
        }).catch((e) => {
          res.status(500).send(utils.errorMsg(e));
        });
      } else {
        return res.status(500).send(utils.errorMsg(517));
      }
    }
  },
};
