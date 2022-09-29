import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "./urls";

const httpLink = new HttpLink({
    uri: `http://localhost:9000/graphql`,
    credentials: "same-origin",
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
});

export default client;