module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/checkout.js":
/*!*************************!*\
  !*** ./lib/checkout.js ***!
  \*************************/
/*! exports provided: createCheckout, checkoutLineItemsAdd, checkoutLineItemsUpdate, checkoutLineItemsRemove, checkoutCustomerAssociate, addVariantToCart, updateLineItemInCart, removeLineItemInCart, associateCustomerCheckout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckout", function() { return createCheckout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsAdd", function() { return checkoutLineItemsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsUpdate", function() { return checkoutLineItemsUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsRemove", function() { return checkoutLineItemsRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutCustomerAssociate", function() { return checkoutCustomerAssociate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariantToCart", function() { return addVariantToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLineItemInCart", function() { return updateLineItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLineItemInCart", function() { return removeLineItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateCustomerCheckout", function() { return associateCustomerCheckout; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CheckoutFragment = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	fragment CheckoutFragment on Checkout {
		id
		webUrl
		totalTax
		subtotalPrice
		totalPrice
		lineItems(first: 250) {
			edges {
				node {
					id
					title
					variant {
						id
						title
						image {
							src
						}
						price
					}
					quantity
				}
			}
		}
	}
`;
const createCheckout = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation checkoutCreate($input: CheckoutCreateInput!) {
		checkoutCreate(input: $input) {
			userErrors {
				message
				field
			}
			checkout {
				...CheckoutFragment
			}
		}
	}
	${CheckoutFragment}
`;
const checkoutLineItemsAdd = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation checkoutLineItemsAdd(
		$checkoutId: ID!
		$lineItems: [CheckoutLineItemInput!]!
	) {
		checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
			userErrors {
				message
				field
			}
			checkout {
				...CheckoutFragment
			}
		}
	}
	${CheckoutFragment}
`;
const checkoutLineItemsUpdate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation checkoutLineItemsUpdate(
		$checkoutId: ID!
		$lineItems: [CheckoutLineItemUpdateInput!]!
	) {
		checkoutLineItemsUpdate(
			checkoutId: $checkoutId
			lineItems: $lineItems
		) {
			userErrors {
				message
				field
			}
			checkout {
				...CheckoutFragment
			}
		}
	}
	${CheckoutFragment}
`;
const checkoutLineItemsRemove = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
		checkoutLineItemsRemove(
			checkoutId: $checkoutId
			lineItemIds: $lineItemIds
		) {
			userErrors {
				message
				field
			}
			checkout {
				...CheckoutFragment
			}
		}
	}
	${CheckoutFragment}
`;
const checkoutCustomerAssociate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
	mutation checkoutCustomerAssociate(
		$checkoutId: ID!
		$customerAccessToken: String!
	) {
		checkoutCustomerAssociate(
			checkoutId: $checkoutId
			customerAccessToken: $customerAccessToken
		) {
			userErrors {
				field
				message
			}
			checkout {
				...CheckoutFragment
			}
		}
	}
	${CheckoutFragment}
`;
function addVariantToCart(variantId, quantity) {
  this.props.checkoutLineItemsAdd({
    variables: {
      checkoutId: this.state.checkout.id,
      lineItems: [{
        variantId,
        quantity: parseInt(quantity, 10)
      }]
    }
  }).then(res => {
    this.setState({
      checkout: res.data.checkoutLineItemsAdd.checkout
    });
  });
  this.handleCartOpen();
}
function updateLineItemInCart(lineItemId, quantity) {
  this.props.checkoutLineItemsUpdate({
    variables: {
      checkoutId: this.state.checkout.id,
      lineItems: [{
        id: lineItemId,
        quantity: parseInt(quantity, 10)
      }]
    }
  }).then(res => {
    this.setState({
      checkout: res.data.checkoutLineItemsUpdate.checkout
    });
  });
}
function removeLineItemInCart(lineItemId) {
  this.props.checkoutLineItemsRemove({
    variables: {
      checkoutId: this.state.checkout.id,
      lineItemIds: [lineItemId]
    }
  }).then(res => {
    this.setState({
      checkout: res.data.checkoutLineItemsRemove.checkout
    });
  });
}
function associateCustomerCheckout(customerAccessToken) {
  this.props.checkoutCustomerAssociate({
    variables: {
      checkoutId: this.state.checkout.id,
      customerAccessToken: customerAccessToken
    }
  }).then(res => {
    this.setState({
      checkout: res.data.checkoutCustomerAssociate.checkout,
      isCustomerAuthOpen: false
    });
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/checkout */ "./lib/checkout.js");
var _jsxFileName = "D:\\Kent\\Web Development\\repo\\work\\Shopify-Template\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      isCartOpen: false,
      products: [],
      checkout: {
        lineItems: {
          edges: []
        }
      }
    };
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.addVariantToCart = _lib_checkout__WEBPACK_IMPORTED_MODULE_4__["addVariantToCart"].bind(this);
    this.updateLineItemInCart = _lib_checkout__WEBPACK_IMPORTED_MODULE_4__["updateLineItemInCart"].bind(this);
    this.removeLineItemInCart = _lib_checkout__WEBPACK_IMPORTED_MODULE_4__["removeLineItemInCart"].bind(this);
    this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(this);
    this.associateCustomerCheckout = _lib_checkout__WEBPACK_IMPORTED_MODULE_4__["associateCustomerCheckout"].bind(this);
  }

  componentWillMount() {
    this.props.createCheckout({
      variables: {
        input: {}
      }
    }).then(res => {
      this.setState({
        checkout: res.data.checkoutCreate.checkout
      });
    });
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false
    });
  }

  openCustomerAuth(event) {
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

  showAccountVerificationMessage() {
    this.setState({
      accountVerificationMessage: true
    });
    setTimeout(() => {
      this.setState({
        accountVerificationMessage: false
      });
    }, 5000);
  }

  closeCustomerAuth() {
    this.setState({
      isCustomerAuthOpen: false
    });
  }

  render() {
    if (this.props.data.loading) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Loading ...");
    }

    if (this.props.data.error) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, this.props.data.error.message);
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    });
  }

}

_defineProperty(index, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    shop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired,
  createCheckout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  checkoutLineItemsAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  checkoutLineItemsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
	query query {
		shop {
			name
			description
			products(first: 20) {
				pageInfo {
					hasNextPage
					hasPreviousPage
				}
				edges {
					node {
						id
						productType
						description
						title
						options {
							id
							name
							values
						}
						variants(first: 250) {
							pageInfo {
								hasNextPage
								hasPreviousPage
							}
							edges {
								node {
									id
									title
									selectedOptions {
										name
										value
									}
									image {
										src
									}
									price
								}
							}
						}
						images(first: 250) {
							pageInfo {
								hasNextPage
								hasPreviousPage
							}
							edges {
								node {
									src
								}
							}
						}
					}
				}
			}
		}
	}
`;
const IndexWithDataAndMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(query), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_4__["createCheckout"], {
  name: "createCheckout"
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_4__["checkoutLineItemsAdd"], {
  name: "checkoutLineItemsAdd"
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_4__["checkoutLineItemsUpdate"], {
  name: "checkoutLineItemsUpdate"
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_4__["checkoutLineItemsRemove"], {
  name: "checkoutLineItemsRemove"
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_4__["checkoutCustomerAssociate"], {
  name: "checkoutCustomerAssociate"
}))(index);
/* harmony default export */ __webpack_exports__["default"] = (IndexWithDataAndMutation);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Kent\Web Development\repo\work\Shopify-Template\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map