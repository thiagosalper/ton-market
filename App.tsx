import React from 'react';
import { ProductsProvider } from './src/features/products/context';
import { MainNavigator } from './src/routers';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ProductsProvider>
        <MainNavigator />
      </ProductsProvider>
    </Provider>
  );
};

export default App;
