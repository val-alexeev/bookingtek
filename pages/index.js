import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "Store";

import App from "./App";

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
