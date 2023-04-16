import { Provider } from 'react-redux';
import store from './config/redux/store';
import RootRoute from './config/router/RootRoute';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './config/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <RootRoute />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
