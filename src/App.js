import { Provider } from "react-redux";
import { store } from "./redux/Store";
import PageRouter from "./routing/Router";

function App() {
  return (
    <Provider store={store}>
      <PageRouter/>
    </Provider>
  );
}

export default App;
