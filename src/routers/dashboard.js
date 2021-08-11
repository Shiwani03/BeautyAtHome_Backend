const express = require("express");
const auth = require("../middleware/auth");
const controllerObj = require("../controllers");
const router = new express.Router();

router.post("/create_category", auth, async (req, res) => {
  const action = "create_category";
  controllerObj.controller(req, res, action);
});

router.get("/category_list", auth, async (req, res) => {
  const action = "category_list";
  controllerObj.controller(req, res, action);
});

router.post("/create_order", auth, async (req, res) => {
  const action = "place_order";
  controllerObj.controller(req, res, action);
});

router.get("/view_order", auth, async (req, res) => {
  const action = "view_order";
  controllerObj.controller(req, res, action);
});

router.patch("/edit_order_status", auth, async (req, res) => {
  const action = "edit_order_status";
  controllerObj.controller(req, res, action);
});

router.patch("/edit_category", auth, async (req, res) => {
  const action = "edit_category";
  controllerObj.controller(req, res, action);
});

router.delete("/delete_category", auth, async (req, res) => {
  const action = "delete_category";
  controllerObj.controller(req, res, action);
});

module.exports = router;
