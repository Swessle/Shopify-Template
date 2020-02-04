import React, { Fragment } from "react";
import fetch from "node-fetch";
import App from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../components/GlobalTheme";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const httpLink = createHttpLink({
	uri: process.env.SHOPIFY_URI,
	fetch: fetch
});

console.log(process.env.SHOPIFY_URI);

const middlewareLink = setContext(() => ({
	headers: {
		"X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_API
	}
}));

const client = new ApolloClient({
	link: middlewareLink.concat(httpLink),
	cache: new InMemoryCache()
});

const reducer = (state = {}, action) => {
	const { payload } = action;
	switch (action.type) {
		case "UPDATECART":
			return { payload };
		default:
			return state;
	}
};

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
	return createStore(reducer, initialState);
};

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};

		return { pageProps };
	}
	render() {
		const { Component, pageProps, store } = this.props;

		return (
			<ApolloProvider client={client}>
				<Provider store={store}>
					<ThemeProvider {...{ theme }}>
						<Fragment>
							<GlobalStyle />
							<Component {...pageProps} />
						</Fragment>
					</ThemeProvider>
				</Provider>
			</ApolloProvider>
		);
	}
}

export default withRedux(makeStore)(MyApp);
