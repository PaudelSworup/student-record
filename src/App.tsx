import RoutePath from "./Routes/RoutePath";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoutePath />
      <ToastContainer />
    </>
  );
};

export default App;
