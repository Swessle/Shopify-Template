import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import {
	createCheckout,
	checkoutLineItemsAdd,
	checkoutLineItemsUpdate,
	checkoutLineItemsRemove,
	checkoutCustomerAssociate,
	addVariantToCart,
	updateLineItemInCart,
	removeLineItemInCart,
	associateCustomerCheckout
} from "../lib/checkout";

class products extends Component {
	constructor() {
		super();

		this.state = {
			isCartOpen: false,
			products: [],
			checkout: { lineItems: { edges: [] } }
		};

		this.handleCartClose = this.handleCartClose.bind(this);
		this.handleCartOpen = this.handleCartOpen.bind(this);
		this.addVariantToCart = addVariantToCart.bind(this);
		this.updateLineItemInCart = updateLineItemInCart.bind(this);
		this.removeLineItemInCart = removeLineItemInCart.bind(this);
		this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(
			this
		);
		this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
	}

	componentWillMount() {
		this.props
			.createCheckout({
				variables: {
					input: {}
				}
			})
			.then(res => {
				this.setState({
					checkout: res.data.checkoutCreate.checkout
				});
			});
	}

	static propTypes = {
		data: PropTypes.shape({
			loading: PropTypes.bool,
			error: PropTypes.object,
			shop: PropTypes.object
		}).isRequired,
		createCheckout: PropTypes.func.isRequired,
		checkoutLineItemsAdd: PropTypes.func.isRequired,
		checkoutLineItemsUpdate: PropTypes.func.isRequired
	};

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
		if (
			event.target.getAttribute("data-customer-type") === "new-customer"
		) {
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
		this.setState({ accountVerificationMessage: true });
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
			return <p>Loading ...</p>;
		}
		if (this.props.data.error) {
			return <p>{this.props.data.error.message}</p>;
		}
		return <div />;
	}
}

const query = gql`
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

const IndexWithDataAndMutation = compose(
	graphql(query),
	graphql(createCheckout, { name: "createCheckout" }),
	graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
	graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
	graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
	graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(products);

export default IndexWithDataAndMutation;
