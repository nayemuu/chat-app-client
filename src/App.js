import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import useLocalAuthCheck from "./hook/useLocalAuthCheck";
import AuthRoute from "./AuthRoute";
import Test from "./components/Test/Test";

function App() {
    
  const authChecked = useLocalAuthCheck();

    return (!authChecked) ? (<div>Checking Authentication...</div>) : (
        <Router>
            <Routes>
                <Route path="/" element={<AuthRoute><Login /></AuthRoute>} />
                <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
                <Route path="/inbox" element={<PrivateRoute><Conversation /></PrivateRoute>} />
                <Route path="/inbox/:id" element={<PrivateRoute><Inbox /></PrivateRoute>} />
                <Route path="test" element={<Test />} />
            </Routes>
        </Router>
    );
}

export default App;
