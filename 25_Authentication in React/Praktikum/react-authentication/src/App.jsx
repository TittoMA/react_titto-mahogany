import { Provider } from 'react-redux';
import store from './config/redux/store';
import RootRoute from './config/router/RootRoute';

function App() {
  return (
    <Provider store={store}>
      <RootRoute />;
    </Provider>
  );
}

export default App;
