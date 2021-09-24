import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import ScrollToTop from "./assets/components/ScrollToTop";
import "./assets/css/style.css";
import DetailPost from "./pages/guest/DetailPost";
import DetailPostUser from "./pages/user/DetailPost";
import Guest from "./pages/guest/Guest";
import { API } from "./config/api";
import User from "./pages/user/User";
import Navbar from "./pages/user/components/Navbar";
import Profile from "./pages/user/Profile";
import NewJourney from "./pages/user/NewJourney";
import Bookmark from "./pages/user/Bookmark";
import Footer from "./assets/components/Footer";

function App() {
  const [state, dispatch] = useContext(UserContext);

  const checkAuth = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const response = await API().get("/check-auth", config);

      let payload = response.data.user;
      payload.token = localStorage.token;

      if (response.status === "failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (state.isLogin) {
    return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/post/:id" component={DetailPostUser} />
          <Route path="/profile" component={Profile} />
          <Route path="/add-journey" component={NewJourney} />
          <Route path="/bookmark" component={Bookmark} />
        </Switch>
        <Footer />
      </Router>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Guest} />
        <Route path="/post/:id" component={DetailPost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
