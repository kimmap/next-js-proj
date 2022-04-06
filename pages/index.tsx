import type { NextPage } from 'next'
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { store } from './common/store/store';
import App from './App';

const Home: NextPage = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
}

export default Home
