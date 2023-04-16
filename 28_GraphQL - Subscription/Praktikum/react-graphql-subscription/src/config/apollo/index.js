import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://wealthy-kit-89.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'mOvYKiWIYRAJhMruBt1EeGWC866esBHZY3EPy3AnqlmHVnac9igRauIXXtUPKMy2',
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://wealthy-kit-89.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': 'mOvYKiWIYRAJhMruBt1EeGWC866esBHZY3EPy3AnqlmHVnac9igRauIXXtUPKMy2',
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
