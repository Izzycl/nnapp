import React from 'react';
import MainLayout from './src/MainLayout';
if (__DEV__) {
  import('./ReactotronConfig');
}
const App = () => <MainLayout></MainLayout>;
export default App;
