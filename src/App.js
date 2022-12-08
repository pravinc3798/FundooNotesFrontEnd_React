import { Provider } from "react-redux";
import Dashborad from "./components/dashboard/Dashborad";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/register/SignUp";
import { store } from "./redux/Store";

function App() {
  return (
    // <SignUp/>
    <Provider store={store}>
      {/* <SignIn/> */}
      <Dashborad/>
    </Provider>
  );
}

export default App;
