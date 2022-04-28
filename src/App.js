import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>{store.getState().name}</h1>
      </div>
    </Provider>
  );
}
