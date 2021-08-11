const utils = require("../../utils");
const UserInfo = require("../../models/userInfo");
const CategoryInfo = require("../../models/category");
const OrderInfo = require("../../models/orderDetails");
var validator = require("validator");
const defaultConfig = require("../../config/defaultConfig");
const bcrypt = require("bcryptjs");
const tokenFunction = require("./token");

module.exports = {
  // -------------------------------------  dashboard module  -------------------------------------

  createCat: function (req, res) {
    if (!req.body.name) {
      return res.status(400).send(utils.errorMsg(521));
    } else if (!req.body.price) {
      return res.status(400).send(utils.errorMsg(522));
    } else {
      CategoryInfo.findOne({ name: req.body.name }, function (err, name) {
        if (err) {
          return res.status(400).send(utils.errorMsg(err));
        }
        if (name !== null) {
          return res.status(200).send(utils.errorMsg(523));
        }
        let category = new CategoryInfo(req.body);
        category.save();
        return res.status(200).send(utils.successMsg(null, 204));
      }).catch((err) => {
        res.status(500).send(utils.errorMsg(err));
      });
    }
  },

  categoryList: function (req, res) {
    CategoryInfo.find({}, function (err, name) {
      if (err) {
        return res.status(400).send(utils.errorMsg(err));
      }

      return res.status(200).send(utils.successMsg(name, 204));
    }).catch((err) => {
      res.status(500).send(utils.errorMsg(err));
    });
  },

  placeOrder: function (req, res) {
    if (!req.body.name) {
      return res.status(400).send(utils.errorMsg(521));
    } else if (!req.body.address) {
      return res.status(400).send(utils.errorMsg(524));
    } else if (!req.body.phone) {
      return res.status(400).send(utils.errorMsg(525));
    } else if (!req.body.categoryId) {
      return res.status(400).send(utils.errorMsg(526));
    } else if (!req.body.count) {
      return res.status(400).send(utils.errorMsg(527));
    } else {
      let order = new OrderInfo(req.body);
      order.userId = req.user._id;
      order
        .save()
        .then(() => {
          return res.status(200).send(utils.successMsg(null, 205));
        })
        .catch((error) => {
          return res.status(500).send(utils.errorMsg(error));
        });
    }
  },

  viewOrder: function (req, res) {
    if (req.user.user_type === "admin") {
      OrderInfo.find({})
        .populate("categoryId")
        .exec(function (err, order) {
          if (err) {
            return res.status(400).send(utils.errorMsg(err));
          }
          let subOrder = order;
          delete subOrder.userId;
          return res.status(200).send(utils.successMsg(subOrder, 204));
        })
    } else {
      OrderInfo.find({ userId: req.user._id })
        .populate("categoryId")
        .exec(function (er, order) {
          if (er) {
            return res.status(400).send(utils.errorMsg(er));
          }
          let subOrder = order;
          delete subOrder.userId;
          return res.status(200).send(utils.successMsg(subOrder, 204));
        })
    }
  },

  editOrderStatus: function (req, res) {
    if (req.body.order_id && req.body.order_id.length !== 24) {
      return res.status(400).send(utils.errorMsg(528));
    } else if (!req.body.order_id) {
      return res.status(400).send(utils.errorMsg(528));
    } else if (!req.body.status) {
      return res.status(400).send(utils.errorMsg(529));
    } else {
      OrderInfo.findOne({ _id: req.body.order_id }, function (err, order) {
        console.log(err);
        if (err) {
          return res.status(400).send(utils.errorMsg(err));
        }
        if (order === null) {
          return res.status(400).send(utils.errorMsg(518));
        }
        order.status = req.body.status;
        order
          .save()
          .then(() => {
            return res.status(200).send(utils.successMsg(null, 204));
          })
          .catch((error) => {
            return res.status(500).send(utils.errorMsg(error));
          });
      }).catch((err) => {
        return res.status(500).send(utils.errorMsg(err));
      });
    }
  },

  editCatagory: function (req, res) {
    if (req.body.category_id && req.body.category_id.length !== 24) {
      return res.status(400).send(utils.errorMsg(528));
    } else if (!req.body.category_id) {
      return res.status(400).send(utils.errorMsg(528));
    } else {
      CategoryInfo.findOne({ _id: req.body.category_id }, function (err, category) {
        console.log(err);
        if (err) {
          return res.status(400).send(utils.errorMsg(err));
        }
        if (category === null) {
          return res.status(400).send(utils.errorMsg(518));
        }
        if (req.body.name) {
          category.name = req.body.name;
        }
        if (req.body.price) {
          category.price = req.body.price;
        }
        if (req.body.description) {
          category.description = req.body.description;
        }
        category
          .save()
          .then(() => {
            return res.status(200).send(utils.successMsg(null, 204));
          })
          .catch((error) => {
            return res.status(500).send(utils.errorMsg(error));
          });
      }).catch((err) => {
        return res.status(500).send(utils.errorMsg(err));
      });
    }
  },
  
  deleteCatagory: function (req, res) {
    if (req.body.category_id && req.body.category_id.length !== 24) {
      return res.status(400).send(utils.errorMsg(528));
    } else if (!req.body.category_id) {
      return res.status(400).send(utils.errorMsg(528));
    } else {
      CategoryInfo.deleteOne({ _id: req.body.category_id }, function (err, category) {
        if (err) {
          return res.status(400).send(utils.errorMsg(err));
        }
        if (category === null) {
          return res.status(400).send(utils.errorMsg(518));
        }
        return res.status(200).send(utils.successMsg(null, 206));
      }).catch((err) => {
        return res.status(500).send(utils.errorMsg(err));
      });
    }
  },
};
