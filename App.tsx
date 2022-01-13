import React from 'react';
import { ProductsProvider } from './src/features/products/context';
import { MainNavigator } from './src/routers';

const App: React.FC = () => {
  return (
    <ProductsProvider>
      <MainNavigator />
    </ProductsProvider>
  );
};

export default App;
