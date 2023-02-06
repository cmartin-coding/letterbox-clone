import HomePage from "./Components/Home Page/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { MovieContext } from "./Components/Context/context-provider";
import { ActivePageContext } from "./Components/Context/page-context";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <ActivePageContext>
      <MovieContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/new-acc" element={<SignUp />} />
        </Routes>
      </MovieContext>
    </ActivePageContext>
  );
}
export default App;
