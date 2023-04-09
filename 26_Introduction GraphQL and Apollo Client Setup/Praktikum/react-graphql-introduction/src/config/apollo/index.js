import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://wealthy-kit-89.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'mOvYKiWIYRAJhMruBt1EeGWC866esBHZY3EPy3AnqlmHVnac9igRauIXXtUPKMy2',
  },
});

export default client;
