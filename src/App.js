import { Provider } from "react-redux";
import Dashborad from "./components/dashboard/Dashborad";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/register/SignUp";
import { store } from "./redux/Store";

function App() {
  return (
    // <SignIn/>
    // <SignUp/>
    <Provider store={store}>
      <Dashborad/>
    </Provider>
  );
}

export default App;
