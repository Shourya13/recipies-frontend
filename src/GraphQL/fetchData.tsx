import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:5000/graphql";

const graphQLClient = new GraphQLClient(endpoint);

export default graphQLClient;
