webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/checkout */ "./lib/checkout.js");








var _jsxFileName = "D:\\Kent\\Web Development\\repo\\work\\Shopify-Template\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery query {\n\t\tshop {\n\t\t\tname\n\t\t\tdescription\n\t\t\tproducts(first: 20) {\n\t\t\t\tpageInfo {\n\t\t\t\t\thasNextPage\n\t\t\t\t\thasPreviousPage\n\t\t\t\t}\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tproductType\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\toptions {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tvalues\n\t\t\t\t\t\t}\n\t\t\t\t\t\tvariants(first: 250) {\n\t\t\t\t\t\t\tpageInfo {\n\t\t\t\t\t\t\t\thasNextPage\n\t\t\t\t\t\t\t\thasPreviousPage\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\tselectedOptions {\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\timages(first: 250) {\n\t\t\t\t\t\t\tpageInfo {\n\t\t\t\t\t\t\t\thasNextPage\n\t\t\t\t\t\t\t\thasPreviousPage\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tsrc\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(index, _Component);

  function index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(index).call(this));
    _this.state = {
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: [],
      checkout: {
        lineItems: {
          edges: []
        }
      }
    };
    _this.handleCartClose = _this.handleCartClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleCartOpen = _this.handleCartOpen.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.openCustomerAuth = _this.openCustomerAuth.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.closeCustomerAuth = _this.closeCustomerAuth.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.addVariantToCart = _lib_checkout__WEBPACK_IMPORTED_MODULE_10__["addVariantToCart"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.updateLineItemInCart = _lib_checkout__WEBPACK_IMPORTED_MODULE_10__["updateLineItemInCart"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.removeLineItemInCart = _lib_checkout__WEBPACK_IMPORTED_MODULE_10__["removeLineItemInCart"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.showAccountVerificationMessage = _this.showAccountVerificationMessage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.associateCustomerCheckout = _lib_checkout__WEBPACK_IMPORTED_MODULE_10__["associateCustomerCheckout"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.props.createCheckout({
        variables: {
          input: {}
        }
      }).then(function (res) {
        _this2.setState({
          checkout: res.data.checkoutCreate.checkout
        });
      });
    }
  }, {
    key: "handleCartOpen",
    value: function handleCartOpen() {
      this.setState({
        isCartOpen: true
      });
    }
  }, {
    key: "handleCartClose",
    value: function handleCartClose() {
      this.setState({
        isCartOpen: false
      });
    }
  }, {
    key: "openCustomerAuth",
    value: function openCustomerAuth(event) {
      if (event.target.getAttribute("data-customer-type") === "new-customer") {
        this.setState({
          isNewCustomer: true,
          isCustomerAuthOpen: true
        });
      } else {
        this.setState({
          isNewCustomer: false,
          isCustomerAuthOpen: true
        });
      }
    }
  }, {
    key: "showAccountVerificationMessage",
    value: function showAccountVerificationMessage() {
      var _this3 = this;

      this.setState({
        accountVerificationMessage: true
      });
      setTimeout(function () {
        _this3.setState({
          accountVerificationMessage: false
        });
      }, 5000);
    }
  }, {
    key: "closeCustomerAuth",
    value: function closeCustomerAuth() {
      this.setState({
        isCustomerAuthOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.data.loading) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "Loading ...");
      }

      if (this.props.data.error) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, this.props.data.error.message);
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      });
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(index, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    error: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
    shop: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
  }).isRequired,
  createCheckout: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  checkoutLineItemsAdd: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  checkoutLineItemsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
});

var query = gql(_templateObject());
var IndexWithDataAndMutation = compose(graphql(query), graphql(_lib_checkout__WEBPACK_IMPORTED_MODULE_10__["createCheckout"], {
  name: "createCheckout"
}), graphql(_lib_checkout__WEBPACK_IMPORTED_MODULE_10__["checkoutLineItemsAdd"], {
  name: "checkoutLineItemsAdd"
}), graphql(_lib_checkout__WEBPACK_IMPORTED_MODULE_10__["checkoutLineItemsUpdate"], {
  name: "checkoutLineItemsUpdate"
}), graphql(_lib_checkout__WEBPACK_IMPORTED_MODULE_10__["checkoutLineItemsRemove"], {
  name: "checkoutLineItemsRemove"
}), graphql(_lib_checkout__WEBPACK_IMPORTED_MODULE_10__["checkoutCustomerAssociate"], {
  name: "checkoutCustomerAssociate"
}))(index);
/* harmony default export */ __webpack_exports__["default"] = (IndexWithDataAndMutation);

/***/ })

})
//# sourceMappingURL=index.js.dd5bfa2cfac8dd19b70b.hot-update.js.map