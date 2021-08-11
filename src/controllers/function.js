module.exports = {
  register_user: {
    controller: "user_auth",
    function: "registerUser",
  },
  email_verification: {
    controller: "user_auth",
    function: "emailVerification",
  },
  login_user: {
    controller: "user_auth",
    function: "loginUser",
  },
  refresh_token: {
    controller: "token",
    function: "refreshToken",
  },
  verify_username: {
    controller: "user_auth",
    function: "userNameVerification",
  },
  create_category: {
    controller: "dashboard_auth",
    function: "createCat",
  },
  category_list: {
    controller: "dashboard_auth",
    function: "categoryList",
  },
  place_order: {
    controller: "dashboard_auth",
    function: "placeOrder",
  },
  view_order: {
    controller: "dashboard_auth",
    function: "viewOrder",
  },
  edit_order_status: {
    controller: "dashboard_auth",
    function: "editOrderStatus",
  },
  edit_category: {
    controller: "dashboard_auth",
    function: "editCatagory",
  },
  delete_category: {
    controller: "dashboard_auth",
    function: "deleteCatagory",
  },
};
