import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Errorpage from "./components/pages/Errorpage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/" component={Errorpage} />
          </Switch>
        </Router>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
